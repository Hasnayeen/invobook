<?php

namespace App\Filament\Widgets;

use Spatie\Color\Rgb;
use App\Support\Trend;
use App\Models\WorkSession;
use Filament\Support\Colors\Color;
use Illuminate\Support\Collection;
class EarningsPerDay extends ChartWidgetWithAction
{
    protected static string $chartId = 'earningsPerDay';
    protected static ?string $heading = 'Earnings Per Day';
    protected int|string|array $columnSpan = 'full';
    protected static bool $deferLoading = true;

    protected function getOptions(): array
    {
        return [
            'chart' => [
                'type' => 'bar',
                'height' => 300,
                'toolbar' => [
                    'show' => false,
                ],
            ],
            'series' => [
                [
                    'name' => now()->monthName,
                    'data' => $this->perDayEarning(0)->map(fn ($value) => round($value->aggregate * 30 / 3600, 0)),
                ],
                [
                    'name' => now()->subMonthNoOverflow()->monthName,
                    'data' => $this->perDayEarning(1)->map(fn ($value) => round($value->aggregate * 30 / 3600, 0)),
                ],
                [
                    'name' => now()->subMonthsNoOverflow(2)->monthName,
                    'data' => $this->perDayEarning(2)->map(fn ($value) => round($value->aggregate * 30 / 3600, 0)),
                ],
            ],
            'xaxis' => [
                'categories' => collect()->range(1, 31),
                'labels' => [
                    'style' => [
                        'fontFamily' => 'inherit',
                    ],
                ],
            ],
            'yaxis' => [
                'labels' => [
                    'style' => [
                        'fontFamily' => 'inherit',
                    ],
                ],
                'decimalsInFloat' => 0,
            ],
            'colors' => [
                Rgb::fromString('rgb(' . Color::Violet[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Blue[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Green[500] . ')')->toHex()->__toString(),
            ],
            'plotOptions' => [
                'bar' => [
                    'columnWidth' => '100%',
                    'horizontal' => false,
                ],
            ],
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
