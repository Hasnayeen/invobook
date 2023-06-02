<?php

namespace App\Filament\App\Pages;

use Filament\Pages\Page;

class Reports extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-document-chart-bar';
    protected static string $view = 'filament.app.pages.reports';
    protected static ?string $navigationGroup = 'Analytics';
}
