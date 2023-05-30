<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Filament\Forms\Form;
use Filament\Actions\Action;
use Filament\Actions\Contracts\HasActions;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Pages\Concerns\InteractsWithHeaderActions;

class TeamMembers extends Component implements HasActions
{
    use InteractsWithActions;
    use InteractsWithForms;
    use InteractsWithHeaderActions;

    /**
     * @return array<Action | ActionGroup>
     */
    protected function getHeaderActions(): array
    {
        return [
            Action::make('invite')
                ->color('secondary')
                ->size('lg')
                ->form(fn (Form $form) => $form
                    ->schema([
                        TextInput::make('email')
                            ->email()
                            ->autofocus()
                            ->required(),
                    ]))
                ->requiresConfirmation()
                ->action(fn () => $this->emit('configureEarningsPerDay')),
        ];
    }

    public function render()
    {
        return view('livewire.team-members');
    }

    public function tabs(): array
    {
        return [
            [
                'id' => 'teamMembers',
                'label' => 'Active Members',
            ],
            [
                'id' => 'invitations',
                'label' => 'Invitations',
            ],
        ];
    }
}
