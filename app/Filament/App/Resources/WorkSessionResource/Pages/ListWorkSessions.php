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
                ->extraAttributes(['class' => 'border border-info-200 bg-white !text-info-600 dark:border-info-700 dark:bg-info-900 dark:!text-info-200 hover:bg-info-50 dark:hover:bg-info-800'])
                ->label('Enter Manually'),
            StartNewSessionAction::make()
                ->extraAttributes(['class' => 'border border-primary-200 bg-white !text-primary-600 dark:border-primary-700 dark:bg-primary-900 dark:!text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-800']),
        ];
    }
}
