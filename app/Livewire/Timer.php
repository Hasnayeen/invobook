<?php

namespace App\Livewire;

use App\Models\User;
use App\Models\WorkSession;
use Carbon\Carbon;
use Filament\Facades\Filament;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Illuminate\Contracts\View\View;
use Livewire\Component;

class Timer extends Component implements HasForms
{
    use InteractsWithForms;

    public ?array $data = [];
    public $session;
    public User $user;
    protected $listeners = [
        'timerStarted' => 'start',
        'timerStopped' => 'stop',
        'discardSession' => 'delete',
    ];

    public function mount(): void
    {
        $this->user = auth()->user();
        $teamRate = Filament::getTenant()->rates->where('user_id', $this->user->id)->first();
        $userRate = $this->user->base->first();
        $this->form->fill([
            'rate_in_cents' => $teamRate ? $teamRate->amount_in_cents / 100 : ($userRate ? $userRate->amount_in_cents / 100 : null),
            'currency' => $teamRate ? $teamRate->currency : ($userRate ? $userRate->currency : null),
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make(2)
                    ->schema([
                        TextInput::make('description')
                            ->maxLength(255)
                            ->columnSpanFull(),
                        Select::make('task_id')
                            ->relationship('task', 'title'),
                        Select::make('project_id')
                            ->relationship('project', 'name'),
                        TextInput::make('rate_in_cents')
                            ->label('Rate')
                            ->integer()
                            ->datalist(fn () => $this->user->rates->pluck('amount_in_cents')->transform(fn ($item) => $item / 100)->toArray()),
                        TextInput::make('currency')
                            ->label('Currency')
                            ->datalist(fn () => $this->user->rates->pluck('currency')->unique()->toArray()),
                    ]),
            ])
            ->statePath('data')
            ->model(WorkSession::class);
    }

    public function create(): void
    {
        $data = $this->form->getState();

        $record = WorkSession::create(array_merge($data, [
            'user_id' => auth()->user()->id,
            'team_id' => Filament::getTenant()->id,
            'start' => now(),
            'end' => now(),
            'rate_in_cents' => $data['rate_in_cents'] * 100,
            'currency' => $data['currency'],
            'description' => $data['description'] ?? null,
        ]));
        $this->session = $record;

        $this->form->model($record)->saveRelationships();
    }

    public function start(): void
    {
        if (! $this->session) {
            $this->dispatch('timer-start');
            $this->create();
        }
    }

    public function stop(): void
    {
        if ($this->session) {
            $this->dispatch('timer-stop');
            $this->dispatch('updateStats')
                ->to('app.filament.app.resources.work-session-resource.widgets.work-hour-this-month');
            $this->save();
            $this->session = null;
        } else {
            Notification::make()
                ->title('Timer is not running. Start a session first.')
                ->danger()
                ->send();
        }
    }

    public function save(): void
    {
        $this->session->end = now();
        $this->session->duration = Carbon::make($this->session->start)->diffInSeconds($this->session->end);
        $this->session->save();
    }

    public function delete(): void
    {
        if ($this->session) {
            $this->session->delete();
        } else {
            Notification::make()
                ->title('Timer is not running.')
                ->danger()
                ->send();
        }
    }

    public function render(): View
    {
        return view('livewire.timer');
    }
}
