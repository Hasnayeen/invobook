<?php

namespace App\Filament\App\Resources;

use App\Filament\App\Resources\TaskResource\Pages;
use App\Models\Task;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Infolists;
use Filament\Infolists\Components\Card;
use Filament\Infolists\Components\Grid;
use Filament\Infolists\Infolist;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TaskResource extends Resource
{
    protected static ?string $model = Task::class;
    protected static ?string $navigationIcon = 'lucide-layout-list';
    protected static ?string $navigationGroup = 'Work';
    protected static ?int $navigationSort = 2;
    protected static ?string $recordTitleAttribute = 'title';
    public static $count;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('project_id')
                    ->required()
                    ->relationship('project', 'name'),
                Forms\Components\Select::make('depends_on')
                    ->relationship('task', 'title'),
                Forms\Components\Select::make('assigned_to')
                    ->relationship('assignedTo', 'name'),
                Forms\Components\DatePicker::make('due_on'),
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255)
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('issue_link')
                    ->label('Issue')
                    ->hint('Link to the issue on Github')
                    ->maxLength(255),
                Forms\Components\TextInput::make('pr_link')
                    ->label('PR')
                    ->hint('Link to the pull request on Github')
                    ->maxLength(255),
                Forms\Components\Select::make('status_id')
                    ->relationship('status', 'name'),
                Forms\Components\Textarea::make('description')
                    ->maxLength(65535)
                    ->columnStart(1)
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->contentGrid([
                'md' => 2,
                'xl' => 3,
            ])
            ->columns([
                Tables\Columns\TextColumn::make('project.name'),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->limit(25)
                    ->searchable(),
                Tables\Columns\TextColumn::make('issue_link')
                    ->label('Issue')
                    ->url(fn ($record) => $record->issue_link)
                    ->limit(20)
                    ->openUrlInNewTab(),
                Tables\Columns\TextColumn::make('pr_link')
                    ->label('PR')
                    ->url(fn ($record) => $record->pr_link)
                    ->limit(20)
                    ->openUrlInNewTab(),
                Tables\Columns\TextColumn::make('assignedTo.name'),
                Tables\Columns\TextColumn::make('depends_on'),
                Tables\Columns\TextColumn::make('status.name')
                    ->badge()
                    ->color(fn ($record) => $record->status?->color)
                    ->icon(fn ($record) => $record->status?->icon),
                Tables\Columns\TextColumn::make('due_on')
                    ->date(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Created')
                    ->date(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
                Filter::make('ToDo')
                    ->toggle()
                    ->default()
                    ->query(fn (Builder $query) => $query->whereRelation('status', 'name', '=', 'To Do')),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
                Tables\Actions\ForceDeleteBulkAction::make(),
                Tables\Actions\RestoreBulkAction::make(),
            ])
            ->defaultGroup('status.name')
            ->groups([
                'status.name',
            ])
            ->paginated([20, 50, 100, 'all']);
    }

    public static function infolist(Infolist $infolist): Infolist
    {
        return $infolist
            ->schema([
                Grid::make(3)
                    ->schema([
                        Card::make()
                            ->columns(4)
                            ->schema([
                                Infolists\Components\TextEntry::make('project.name')
                                    ->inlineLabel()
                                    ->badge()
                                    ->color('primary')
                                    ->columnSpan(1),
                                Infolists\Components\TextEntry::make('description')
                                    ->columnSpanFull()
                                    ->size('lg')
                                    ->markdown()
                                    ->prose(),
                            ])->columnSpan(2),
                        Grid::make(1)
                            ->columnSpan(1)
                            ->schema([
                                Infolists\Components\Section::make('Status')
                                    ->schema([
                                        Infolists\Components\TextEntry::make('status.name')
                                            ->inlineLabel()
                                            ->badge()
                                            ->icon(fn ($record) => $record->status?->icon)
                                            ->color(fn ($record) => $record->status?->color),
                                        Infolists\Components\TextEntry::make('assignedTo.name')
                                            ->inlineLabel()
                                            ->label('Assignee')
                                            ->default('Not Assigned')
                                            ->url(fn ($record) => $record->assignedTo?->name ?? '#'),
                                        Infolists\Components\TextEntry::make('due_on')
                                            ->date()
                                            ->inlineLabel(),
                                    ])
                                    ->columnSpan(1),
                                Infolists\Components\Section::make('Links')
                                    ->schema([
                                        Infolists\Components\TextEntry::make('issue_link')
                                            ->label('Issue')
                                            ->url(fn ($record) => $record->issue_link)
                                            ->openUrlInNewTab(),
                                        Infolists\Components\TextEntry::make('pr_link')
                                            ->label('PR')
                                            ->url(fn ($record) => $record->pr_link)
                                            ->openUrlInNewTab(),
                                    ])
                                    ->columnSpan(1),
                            ]),
                    ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTasks::route('/'),
            'create' => Pages\CreateTask::route('/create'),
            'view' => Pages\ViewTask::route('/{record}/view'),
            'edit' => Pages\EditTask::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }

    public static function getNavigationBadge(): ?string
    {
        if (config('tasks.count')) {
            return config('tasks.count');
        }
        config(['tasks.count' => $count = static::getModel()::count()]);

        return $count;
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return 'info';
    }
}
