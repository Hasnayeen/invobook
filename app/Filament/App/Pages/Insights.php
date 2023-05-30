<?php

namespace App\Filament\App\Pages;

use App\Filament\App\Widgets\EarningsPerDay;
use Filament\Pages\Page;

class Insights extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-chart-pie';
    protected static ?string $navigationGroup = 'Analytics';
    protected static ?int $navigationSort = 2;
    protected static string $view = 'filament.app.pages.insights';

    protected function getHeaderWidgets(): array
    {
        return [
            // EarningsPerDay::class,
        ];
    }
}
