<?php

namespace App\Filament\App\Widgets;

use App\Models\WorkSession;
use App\Support\Trend;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Collection;

class CumulativeEarningsPerDay extends ChartWidget
{
    protected static ?int $sort = 5;
    protected int|string|array $columnSpan = 'full';
    protected static ?string $pollingInterval = null;
    protected static ?string $heading = 'Cumulative Earnings Per Day';
    protected static ?string $maxHeight = '30rem';

    protected function getType(): string
    {
        return 'line';
    }

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Ideal',
                    'data' => array_map(fn ($item) => $item * 25, range(1, 31)),
                    'borderColor' => '#00000080',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->format('M'),
                    'data' => $this->perDayEarning(0)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#FF0F0F95',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonth()->format('M'),
                    'data' => $this->perDayEarning(1)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#D946EF50',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(2)->format('M'),
                    'data' => $this->perDayEarning(2)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#22C55E50',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(3)->format('M'),
                    'data' => $this->perDayEarning(3)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#F43F5E50',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(4)->format('M'),
                    'data' => $this->perDayEarning(4)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#0EA5E950',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(5)->format('M'),
                    'data' => $this->perDayEarning(5)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#EAB30850',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(6)->format('M'),
                    'data' => $this->perDayEarning(6)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#6366F150',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(7)->format('M'),
                    'data' => $this->perDayEarning(7)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#93A61150',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(8)->format('M'),
                    'data' => $this->perDayEarning(8)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#F3768150',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(9)->format('M'),
                    'data' => $this->perDayEarning(9)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#B316A150',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(10)->format('M'),
                    'data' => $this->perDayEarning(10)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#B3868150',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
                [
                    'label' => now()->subMonths(11)->format('M'),
                    'data' => $this->perDayEarning(11)->map(fn ($value) => round($value * 30 / 3600, 2)),
                    'borderColor' => '#83F68150',
                    'tension' => 0.5,
                    'pointRadius' => 3,
                ],
            ],
            'labels' => collect()->range(1, 31),
        ];
    }

    protected function perDayEarning($month = 0)
    {
        $total = 0;

        return $this->query()->whereBetween('date', [
            today()->subMonths($month)->startOfMonth(),
            today()->subMonths($month)->endOfMonth()->addDay(),
        ])
            ->values()
            ->transform(function ($item) use (&$total) {
                $total += $item->aggregate;

                return $total;
            });
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
