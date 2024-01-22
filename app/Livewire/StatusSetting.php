<?php

namespace App\Livewire;

use App\Models\Status;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Facades\Filament;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Concerns\InteractsWithHeaderActions;
use Filament\Tables\Actions\DeleteAction;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\ColorColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\Layout\Grid;
use Filament\Tables\Contracts\HasTable;
use Filament\Tables\Concerns\InteractsWithTable;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Support\Arr;
use Livewire\Component;

class StatusSetting extends Component implements HasActions, HasForms, HasTable
{
    use InteractsWithActions;
    use InteractsWithForms;
    use InteractsWithHeaderActions;
    use InteractsWithTable;

    public $icons;

    public function mount()
    {
        $data = include base_path('bootstrap/cache/blade-icons.php');
        $this->icons = Arr::mapWithKeys(Arr::first($data['default']), fn ($value) => [$value => $value]);
    }

    /**
     * @return array<Action | ActionGroup>
     */
    protected function getHeaderActions(): array
    {
        return [
            Action::make('new')
                ->label('Create Status')
                ->color('primary')
                ->size('lg')
                ->icon('lucide-plus')
                ->form(fn (Form $form) => $form
                    ->schema([
                        TextInput::make('name')
                            ->autofocus()
                            ->required(),
                        Select::make('color')
                            ->options([
                                'gray' => 'Gray',
                                'danger' => 'Red',
                                'warning' => 'Orange',
                                'yellow' => 'Yellow',
                                'success' => 'Green',
                                'teal' => 'Teal',
                                'cyan' => 'Cyan',
                                'info' => 'Blue',
                                'indigo' => 'Indigo',
                                'purple' => 'Purple',
                                'pink' => 'Pink',
                            ])
                            ->default('green'),
                        Select::make('icon')
                            ->searchable()
                            ->options($this->icons)
                            ->optionsLimit(10)
                            ->hint('For full icon list visit https://lucide.dev/icons/'),
                    ]))
                ->requiresConfirmation()
                ->modalIcon()
                ->modalHeading('Add New Status')
                ->modalDescription()
                ->modalSubmitActionLabel('Create')
                ->action(fn (array $data) => $this->createStatus($data)),
        ];
    }

    public function table(Table $table): Table
    {
        return $table
            ->query(Status::query())
            ->contentGrid([
                'md' => 2,
                'xl' => 6,
            ])
            ->columns([
                Grid::make(1)
                    ->schema([
                        TextColumn::make('preview')
                            ->badge()
                            ->color(fn (Status $status) => $status->color)
                            ->icon(fn (Status $status) => $status->icon),
                    ])
            ])
            ->filters([
                //
            ])
            ->actions([
                EditAction::make()
                    ->form([
                        TextInput::make('name')
                            ->autofocus()
                            ->required(),
                        Select::make('color')
                            ->options([
                                'gray' => 'Gray',
                                'danger' => 'Red',
                                'warning' => 'Orange',
                                'yellow' => 'Yellow',
                                'success' => 'Green',
                                'teal' => 'Teal',
                                'cyan' => 'Cyan',
                                'info' => 'Blue',
                                'indigo' => 'Indigo',
                                'purple' => 'Purple',
                                'pink' => 'Pink',
                            ])
                            ->default('green'),
                        Select::make('icon')
                            ->searchable()
                            ->options($this->icons)
                            ->optionsLimit(10)
                            ->hint('For full icon list visit https://lucide.dev/icons/'),

                    ])
                    ->requiresConfirmation()
                    ->modalIcon(null)
                    ->modalDescription(null)
                    ->modalSubmitActionLabel('Save')
                    ->action(fn (Status $status, array $data) => $this->updateStatus($status, $data)),
                DeleteAction::make()
                    ->requiresConfirmation(true)
                    ->action(fn (Status $status) => $status->delete()),
            ])
            ->paginated(false);
    }

    private function createStatus($data)
    {
        Status::create([
            'name' => $data['name'],
            'color' => $data['color'],
            'team_id' => Filament::getTenant()->id,
        ]);
        Notification::make()
            ->title('Status Added')
            ->body("New status '{$data['name']}' added for your team.")
            ->success()
            ->send();
    }

    private function updateStatus(Status $status, $data)
    {
        $status->update($data);
        Notification::make()
            ->title('Status Updated')
            ->body('Status has been updated successfully.')
            ->success()
            ->send();
    }

    public function render()
    {
        return view('livewire.status-setting');
    }
}
