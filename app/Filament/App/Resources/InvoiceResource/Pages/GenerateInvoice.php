<?php

namespace App\Filament\App\Resources\InvoiceResource\Pages;

use App\Actions\GenerateInvoicePdf;
use App\Filament\App\Resources\InvoiceResource;
use App\Models\WorkSession;
use Filament\Actions\Action as PageAction;
use Filament\Facades\Filament;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Notifications\Actions\Action as NotificationAction;
use Filament\Resources\Pages\Page;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\Layout;
use Filament\Tables\Table;
use Filament\Tables\Columns\Summarizers\Sum;
use Filament\Tables\Columns\Summarizers\Summarizer;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Enums\FiltersLayout;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class GenerateInvoice extends Page implements HasTable
{
    use InteractsWithTable;

    protected static string $resource = InvoiceResource::class;
    protected static ?string $title = 'Generate';
    protected static string $view = 'filament.app.resources.invoice-resource.pages.generate-invoice';

    public static function table(Table $table): Table
    {
        return $table
            ->query(
                WorkSession::query()
                    ->selectWorkSessions()
                    ->withSubtotal()
                    ->withTotalDuration()
            )
            ->columns([
                Tables\Columns\TextColumn::make('item')
                    ->formatStateUsing(fn (Model $record) => $record->task_id ? $record->task_title : $record->description),
                Tables\Columns\TextColumn::make('project.name'),
                Tables\Columns\TextColumn::make('from')
                    ->hidden()
                    ->date(),
                Tables\Columns\TextColumn::make('to')
                    ->hidden()
                    ->date(),
                Tables\Columns\TextColumn::make('total_duration')
                    ->label('Duration')
                    ->getStateUsing(fn (Model $record) => gmdate('H:i:s', $record->total_duration))
                    ->summarize([
                        Sum::make()
                            ->label('Total Hrs')
                            ->formatStateUsing(fn ($state) => gmdate('H:i:s', $state)),
                    ]),
                Tables\Columns\TextColumn::make('rate_in_cents')
                    ->label('Rate')
                    ->formatStateUsing(fn ($state) => $state / 100)
                    ->summarize([
                        Summarizer::make()
                            ->label('Vat')
                            ->using(fn ($query): string => 0)
                    ]),
                Tables\Columns\TextColumn::make('subtotal')
                    ->label('Amount')
                    ->getStateUsing(fn (Model $record) => $record->subtotal)
                    ->summarize([
                        Sum::make()
                            ->label('Total'),
                    ]),
            ])
            ->filters([
                Filter::make('created_at')
                    ->form([
                        DatePicker::make('from')
                            ->default(today()->startOfMonth())
                            ->columnSpan(1),
                        DatePicker::make('to')
                            ->default(today())
                            ->columnSpan(1),
                    ])
                    ->columns(4)
                    ->columnSpanFull()
                    ->query(function (Builder $query, array $data): Builder {
                        return $query
                            ->when(
                                $data['from'],
                                fn (Builder $query, $date): Builder => $query->whereDate('start', '>=', $date),
                            )
                            ->when(
                                $data['to'],
                                fn (Builder $query, $date): Builder => $query->whereDate('start', '<=', $date),
                            );
                    })
                ], layout: FiltersLayout::AboveContent)
            ->headerActions([
                Action::make('generate')
                    ->label('Generate Invoice')
                    ->size('md')
                    ->extraAttributes(['class' => 'filament-button-outline-primary'])
                    ->form([
                        Grid::make()
                            ->columns(2)
                            ->schema([
                                Select::make('client_id')
                                    ->label('Client')
                                    ->options(Filament::getTenant()->clients->pluck('name', 'id')->toArray()),
                                TextInput::make('vat')
                                    ->label('VAT/TAX')
                                    ->numeric()
                                    ->default(0),
                                DatePicker::make('issued_on')
                                    ->default(today()),
                                DatePicker::make('due_on')
                                    ->default(today()),
                                TextInput::make('notes')
                                    ->maxLength(255)
                                    ->columnSpan(2),
                                Select::make('template')
                                    ->options(Arr::mapWithKeys(
                                            config('invoices.templates'),
                                            fn ($item) => [$item => ucfirst($item)]
                                        ))
                                    ->default('default'),
                            ])
                    ])
                    ->action(
                        function (Table $table, array $data, GenerateInvoicePdf $generateInvoicePdf) {
                            $url = $generateInvoicePdf(
                                $table->getRecords()->all(),
                                $data,
                                $table->getFilters()['created_at']->getState(),
                            );
                            Notification::make()
                                ->title('Invoice Generated')
                                ->body('Your invoice has been generated and is ready for download.')
                                ->actions([
                                    NotificationAction::make('Download')
                                        ->url($url)
                                        ->openUrlInNewTab(),
                                ])
                                ->send();
                        }
                    ),
            ]);
    }

    protected function getHeaderActions(): array
    {
        return [
            PageAction::make('settings')
                ->icon('heroicon-o-cog')
                ->outlined()
                ->url(InvoiceSettings::getUrl()),
        ];
    }
}
