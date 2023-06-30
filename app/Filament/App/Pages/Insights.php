<?php

namespace App\Filament\App\Pages;

use Filament\Pages\Page;
use Laravel\Pennant\Feature;
use App\Filament\App\Widgets\EarningsPerDay;

class Insights extends Page
{
    protected static ?string $navigationIcon = 'lucide-pie-chart';
    protected static ?string $navigationGroup = 'Analytics';
    protected static ?int $navigationSort = 2;
    protected static string $view = 'filament.app.pages.insights';

    public static function shouldRegisterNavigation(): bool
    {
        return Feature::active('insights');
    }

    protected function getHeaderWidgets(): array
    {
        return [
            // EarningsPerDay::class,
        ];
    }
}
