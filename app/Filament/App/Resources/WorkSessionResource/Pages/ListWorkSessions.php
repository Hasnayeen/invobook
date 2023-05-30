<?php

namespace App\Filament\App\Resources\WorkSessionResource\Pages;

use App\Filament\App\Actions\StartNewSessionAction;
use Filament\Actions;
use Filament\GlobalSearch\Actions\Action;
use Filament\Resources\Pages\ListRecords;
use App\Filament\App\Resources\WorkSessionResource;

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
