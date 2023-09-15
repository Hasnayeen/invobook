<?php

namespace App\Livewire;

use App\Models\TeamInvitation as TeamInvitationModel;
use Filament\Facades\Filament;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use Livewire\Component;

class TeamInvitation extends Component implements HasTable, HasForms
{
    use InteractsWithTable;
    use InteractsWithForms;

    public function table(Table $table): Table
    {
        return $table
            ->query(
                TeamInvitationModel::query()
                    ->where('team_id', Filament::getTenant()->id)
            )
            ->columns([
                TextColumn::make('email')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label('Sent')
                    ->formatStateUsing(function ($state) {
                        return $state->diffForHumans();
                    }),
            ])
            ->filters([
                // ...
            ])
            ->actions([
                // ...
            ])
            ->bulkActions([
                // ...
            ]);
    }

    public function render()
    {
        return view('livewire.team-invitation');
    }
}
