<?php

namespace App\Filament\App\Pages;

use App\Filament\App\Actions\StartNewSessionAction;
use Filament\Pages\Dashboard as BasePage;

class Dashboard extends BasePage
{
    protected static ?string $navigationLabel = 'Home';

    public function getColumns(): int|string|array
    {
        return 9;
    }

    protected function getHeaderActions(): array
    {
        return [
            StartNewSessionAction::make(),
        ];
    }
}
