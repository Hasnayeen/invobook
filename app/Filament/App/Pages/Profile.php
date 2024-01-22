<?php

namespace App\Filament\App\Pages;

use App\Models\Team;
use App\Models\User;
use Brick\Money\ISOCurrencyProvider;
use Filament\Actions\Action;
use Filament\Facades\Filament;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Concerns\InteractsWithFormActions;
use Filament\Pages\Page;

/**
 * @property Form $detailsForm
 * @property Form $rateForm
 */
class Profile extends Page implements HasForms
{
    use InteractsWithForms;
    use InteractsWithFormActions;

    protected static ?string $navigationIcon = 'lucide-user-circle';
    protected static string $view = 'filament.app.pages.profile';
    protected static ?string $navigationGroup = 'Settings';
    public ?array $detailsData = [];
    public ?array $rateData = [];
    public User $user;
    public Team $team;

    public function mount(): void
    {
        $this->user = auth()->user();
        $this->team = Filament::getTenant();
        $this->detailsForm->fill([
            'name' => $this->user->name,
            'email' => $this->user->email,
        ]);
        $this->rateForm->fill([
            'default' => [
                'amount_in_cents' => $this->user->base->first()?->amount_in_cents,
                'currency' => $this->user->base->first()?->currency,
            ],
            'team' => [
                'amount_in_cents' => $this->team->rates->where('user_id', $this->user->id)->first()?->amount_in_cents,
                'currency' => $this->team->rates->where('user_id', $this->user->id)->first()?->currency,
            ],
        ]);
    }

    protected function getForms(): array
    {
        return [
            'detailsForm',
            'updatePasswordForm',
            'rateForm',
        ];
    }

    public function detailsForm(Form $form): Form
    {
        return $form
            ->schema([
                Section::make(['Details'])
                    ->schema([
                        Fieldset::make('Personal Information')
                            ->columns(2)
                            ->schema([
                                TextInput::make('name')
                                    ->autofocus()
                                    ->required(),
                                TextInput::make('email')
                                    ->email()
                                    ->required()
                                    ->columnStart(1),
                            ]),
                    ]),
            ])
            ->statePath('detailsData')
            ->model($this->user);
    }

    public function updatePasswordForm(Form $form): Form
    {
        return $form
            ->schema([
                Section::make(['Details'])
                    ->schema([
                        Fieldset::make('Update Password')
                            ->columns(2)
                            ->schema([
                                TextInput::make('current_password')
                                    ->password(),
                                TextInput::make('new_password')
                                    ->password()
                                    ->autocomplete('new-password')
                                    ->columnStart(1),
                                TextInput::make('password_confirmation')
                                    ->password()
                                    ->autocomplete('new-password')
                                    ->columnStart(1),
                            ]),
                    ]),
            ])
            ->statePath('detailsData')
            ->model(auth()->user());
    }

    public function rateForm(Form $form): Form
    {
        return $form
            ->schema([
                Section::make(['Details'])
                    ->schema([
                        Fieldset::make('Default Rate')
                            ->columns(2)
                            ->schema([
                                TextInput::make('default.amount_in_cents')
                                    ->label('Amount')
                                    ->integer()
                                    ->requiredWith('default.currency')
                                    ->formatStateUsing(fn ($state) => $state / 100)
                                    ->dehydrateStateUsing(fn ($state) => $state * 100),
                                Select::make('default.currency')
                                    ->label('Currency')
                                    ->requiredWith('default.amount_in_cents')
                                    ->options(ISOCurrencyProvider::getInstance()->getAvailableCurrencies())
                                    ->columnStart(1),
                            ]),
                        Fieldset::make('Rate for this team')
                            ->columns(2)
                            ->schema([
                                TextInput::make('team.amount_in_cents')
                                    ->label('Amount')
                                    ->integer()
                                    ->requiredWith('team.currency')
                                    ->formatStateUsing(fn ($state) => $state / 100)
                                    ->dehydrateStateUsing(fn ($state) => $state * 100),
                                Select::make('team.currency')
                                    ->label('Currency')
                                    ->requiredWith('team.amount_in_cents')
                                    ->options(ISOCurrencyProvider::getInstance()->getAvailableCurrencies())
                                    ->columnStart(1),
                            ]),
                    ]),
            ])
            ->statePath('rateData')
            ->model(auth()->user());
    }

    public function saveDetails(): void
    {
        $this->user->update($this->detailsData);
        Notification::make()
            ->title(__('Success!'))
            ->body(__('Your personal information has been updated.'))
            ->success()
            ->send();
    }

    public function savePassword(): void
    {

    }

    public function saveRates(): void
    {
        if ($this->rateForm->getState()['default']['amount_in_cents'] !== null) {
            if ($rate = $this->user->base->first()) {
                $rate->update(
                    array_merge(
                        $this->rateForm->getState()['default'],
                        ['default' => true],
                    )
                );
            } else {
                $this->user->base()->create(
                    array_merge(
                        $this->rateForm->getState()['default'],
                        ['default' => true],
                    )
                );
            }
        }
        if ($this->rateForm->getState()['team']['amount_in_cents'] !== null) {
            if ($rate = $this->team->rates->where('user_id', $this->user->id)->first()) {
                $rate->update($this->rateForm->getState()['team']);
            } else {
                $this->team->rates()->create(
                    array_merge(
                        $this->rateForm->getState()['team'],
                        ['user_id' => $this->user->id],
                    )
                );
            }
        }
        Notification::make()
            ->title(__('Success!'))
            ->body(__('Rates updated successfully.'))
            ->success()
            ->send();
    }
}
