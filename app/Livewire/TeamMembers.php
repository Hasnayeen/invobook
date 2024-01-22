<?php

namespace App\Livewire;

use App\Models\TeamInvitation;
use App\Models\User;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Facades\Filament;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Table;
use Livewire\Component;

class TeamMembers extends Component implements HasActions, HasTable, HasForms
{
    use InteractsWithActions;
    use InteractsWithForms;
    use InteractsWithHeaderActions;
    use InteractsWithTable;

    /**
     * @return array<Action | ActionGroup>
     */
    protected function getHeaderActions(): array
    {
        return [
            Action::make('invite')
                ->color('primary')
                ->size('lg')
                ->form(fn (Form $form) => $form
                    ->schema([
                        TextInput::make('email')
                            ->email()
                            ->autofocus()
                            ->required(),
                    ]))
                ->requiresConfirmation()
                ->modalHeading('Invite Team Member')
                ->modalDescription('Enter the email address of the person you would like to invite to your team.')
                ->modalSubmitActionLabel('Send Invitation')
                ->action(fn (array $data) => $this->invite($data)),
        ];
    }

    private function invite($data)
    {
        TeamInvitation::create([
            'team_id' => Filament::getTenant()->id,
            'email' => $data['email'],
        ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(
                User::query()
                    ->join('team_user', 'users.id', '=', 'team_user.user_id')
                    ->where('team_user.team_id', Filament::getTenant()->id)
            )
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('email')
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label('Joined')
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
            ])
            ->paginated(false);
    }

    public function render()
    {
        return view('livewire.team-members');
    }
}
