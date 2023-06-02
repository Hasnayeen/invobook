<?php

namespace App\Filament\App\Resources\ProjectResource\Pages;

use App\Filament\App\Resources\ProjectResource;
use Filament\Facades\Filament;
use Filament\Resources\Pages\CreateRecord;

class CreateProject extends CreateRecord
{
    protected static string $resource = ProjectResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();
        $data['team_id'] = Filament::getTenant()->id;

        return $data;
    }

    public static function canCreateAnother(): bool
    {
        return false;
    }
}
