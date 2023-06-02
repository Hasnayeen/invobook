<?php

namespace App\Filament\App\Pages;

use App\Models\Team;
use Filament\Actions\Action;
use Filament\Facades\Filament;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\Page;

class TeamSettings extends Page implements HasForms
{
    use InteractsWithForms;
    use InteractsWithFormActions;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';
    protected static ?string $navigationLabel = 'Team';
    protected static string $view = 'filament.app.pages.team-settings';
    protected static ?string $navigationGroup = 'Settings';
    public Team $team;

    public function mount(): void
    {
        $this->team = Filament::getTenant();
        $this->form->fill([
            'name' => $this->team->name,
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make(['Team Information'])
                    ->columns(2)
                    ->schema([
                        Fieldset::make('Team Information')
                            ->columns(2)
                            ->schema([
                                TextInput::make('name')
                                    ->autofocus()
                                    ->required(),
                            ]),
                    ]),
            ])
            ->model(Filament::getTenant());
    }

    public function create()
    {
        $this->team->update($this->form->getState());
        Notification::make()
            ->title('Team updated')
            ->body('Your team information has been updated.')
            ->send();
    }

    /**
     * @return array<Action | ActionGroup>
     */
    public function getFormActions(): array
    {
        return [
            Action::make('save')
                ->label('Save')
                ->submit(),
        ];
    }

    public function tabs(): array
    {
        return [
            [
                'id' => 'detailsForm',
                'label' => 'Details',
                'icon' => 'heroicon-o-document-text',
            ],
            [
                'id' => 'members',
                'label' => 'Members',
                'icon' => 'heroicon-o-user-group',
            ],
            [
                'id' => 'statusForm',
                'label' => 'Status',
                'icon' => 'heroicon-o-list-bullet',
            ],
        ];
    }
}
