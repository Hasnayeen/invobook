<?php

namespace App\Filament\App\Pages;

use Filament\Facades\Filament;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\Section;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;
use Laravel\Pennant\Feature;

class AppSettings extends Page implements HasForms
{
    use InteractsWithForms;

    protected static ?string $navigationIcon = 'lucide-settings-2';
    protected static ?string $navigationLabel = 'App';
    protected static ?string $navigationGroup = 'Settings';
    protected static ?int $navigationSort = 3;
    protected static string $view = 'filament.app.pages.app-settings';
    public ?array $data = [];

    public function mount()
    {
        $this->form->fill([
            'tracking' => Feature::active('tracking'),
            'client' => Feature::active('client'),
            'invoicing' => Feature::active('invoicing'),
            'reports' => Feature::active('reports'),
            'insights' => Feature::active('insights'),
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Work')
                    ->description('Enable/Disable work features.')
                    ->columns(2)
                    ->schema([
                        Checkbox::make('tracking')
                            ->label('Time Tracking'),
                        Checkbox::make('client')
                            ->label('Client Management'),
                    ]),
                Section::make('Billings')
                    ->description('Enable/Disable billing features.')
                    ->columns(2)
                    ->schema([
                        Checkbox::make('invoicing')
                            ->label('Invoicing'),
                    ]),
                Section::make('Analytics')
                    ->description('Enable/Disable analytics features.')
                    ->columns(2)
                    ->schema([
                        Checkbox::make('reports')
                            ->label('Reports'),
                        Checkbox::make('insights')
                            ->label('Insights'),
                    ]),
            ])
            ->statePath('data');
    }

    public function save()
    {
        foreach ($this->form->getState() as $key => $value) {
            match ($value) {
                true => Feature::activate($key),
                default => Feature::deactivate($key),
            };
        }
        Notification::make()
            ->title('Settings saved.')
            ->send();
    }
}
