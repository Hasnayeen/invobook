<?php

namespace App\Filament\App\Resources\TaskResource\Pages;

use App\Filament\App\Resources\TaskResource;
use Filament\Facades\Filament;
use Filament\Resources\Pages\CreateRecord;

class CreateTask extends CreateRecord
{
    protected static string $resource = TaskResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();
        $data['team_id'] = Filament::getTenant()->id;

        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return route('filament.app.resources.tasks.index', [
            'tenant' => Filament::getTenant(),
        ]);
    }
}
