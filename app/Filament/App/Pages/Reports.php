<?php

namespace App\Filament\App\Pages;

use Filament\Facades\Filament;
use Filament\Pages\Page;
use Laravel\Pennant\Feature;

class Reports extends Page
{
    protected static ?string $navigationIcon = 'lucide-file-bar-chart';
    protected static string $view = 'filament.app.pages.reports';
    protected static ?string $navigationGroup = 'Analytics';

    public static function mount()
    {
        if (Feature::inactive('reports')) {
            return redirect()->route('filament.app.pages.dashboard', Filament::getTenant());
        }
    }

    public static function shouldRegisterNavigation(): bool
    {
        return Feature::active('reports');
    }
}
