<?php

namespace App\Filament\App\Widgets;

use App\Models\WorkSession;
use App\Support\Trend;
use Filament\Actions\Action;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;
use Filament\Forms\Components\Checkbox;
use Filament\Forms\Form;
use Illuminate\Support\Collection;

class EarningsPerDay extends ChartWidgetWithAction implements HasActions
{
    use InteractsWithActions;

    protected static ?int $sort = 4;
    protected int|string|array $columnSpan = 'full';
    protected static ?string $heading = 'Earnings Per Day';
    protected static ?string $pollingInterval = null;
    protected static ?string $maxHeight = '20rem';
    protected static ?array $options = [
        'scales' => [
            'y' => [
                'grid' => [
                    'color' => [
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(255, 0, 0, 0.25)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(5, 155, 155, 0.15)',
                        'rgba(255, 0, 0, 0.25)',
                    ],
                ],
                'ticks' => [
                    'stepSize' => 10,
                ],
            ],
        ],
    ];

    /**
     * @return array<Action | ActionGroup>
     */
    protected function getHeaderActions(): array
    {
        return [
            Action::make('configure')
                ->icon('heroicon-o-cog-6-tooth')
                ->iconButton()
                ->color('secondary')
                ->size('lg')
                ->form(fn (Form $form) => $form
                    ->schema([
                        Checkbox::make('enable'),
                    ]))
                ->requiresConfirmation()
                ->action(fn () => $this->emit('configureEarningsPerDay')),
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => now()->monthName,
                    'data' => $this->perDayEarning(0)->map(fn ($value) => round($value->aggregate * 30 / 3600, 2)),
                    'backgroundColor' => 'rgba(255, 99, 132, 0.4)',
                ],
                [
                    'label' => now()->subMonth()->monthName,
                    'data' => $this->perDayEarning(1)->map(fn ($value) => round($value->aggregate * 30 / 3600, 2)),
                    'backgroundColor' => 'rgba(75, 192, 192, 0.4)',
                ],
                [
                    'label' => now()->subMonths(2)->monthName,
                    'data' => $this->perDayEarning(2)->map(fn ($value) => round($value->aggregate * 30 / 3600, 2)),
                    'backgroundColor' => 'rgba(153, 102, 255, 0.4)',
                ],
                [
                    'label' => now()->subMonths(3)->monthName,
                    'data' => $this->perDayEarning(3)->map(fn ($value) => round($value->aggregate * 30 / 3600, 2)),
                    'backgroundColor' => 'rgba(23, 12, 15, 0.4)',
                ],
            ],
            'labels' => collect()->range(1, 31),
        ];
    }

    protected function perDayEarning($month = 0)
    {
        return $this->query()->whereBetween('date', [
            today()->subMonths($month)->startOfMonth(),
            today()->subMonths($month)->endOfMonth()->addDay(),
        ])->values();
    }

    protected function query(): Collection
    {
        if (config('widget.query.earnings-per-day')) {
            return config('widget.query.earnings-per-day');
        }
        config(['widget.query.earnings-per-day' => $result = Trend::model(WorkSession::class)
            ->between(now()->subMonths(12)->startOfMonth(), now()->endOfMonth()->addDay())
            ->perDay()
            ->sum('duration'),
        ]);

        return $result;
    }
}
