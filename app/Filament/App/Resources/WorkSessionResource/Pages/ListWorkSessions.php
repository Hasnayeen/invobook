<?php

namespace App\Filament\App\Resources\WorkSessionResource\Pages;

use App\Filament\App\Actions\StartNewSessionAction;
use App\Filament\App\Resources\WorkSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListWorkSessions extends ListRecords
{
    protected static string $resource = WorkSessionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make()
                ->color('outline')
                ->label('Enter Manually'),
            StartNewSessionAction::make(),
        ];
    }
}
