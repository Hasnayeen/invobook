<?php

namespace App\Filament\App\Resources\TaskResource\Pages;

use App\Filament\App\Resources\TaskResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewTask extends ViewRecord
{
    protected static string $resource = TaskResource::class;

    public function getTitle(): string
    {
        return $this->getRecordTitle();
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make()
                ->extraAttributes(['class' => 'outline-primary']),
            Actions\DeleteAction::make()
                ->extraAttributes(['class' => 'outline-danger']),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }

}
