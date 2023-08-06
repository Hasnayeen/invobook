<?php

namespace App\Filament\Widgets;

use App\Models\WorkSession;
use App\Support\Trend;
use DateTime;
use Filament\Forms\Components\DatePicker;
use Filament\Support\Colors\Color;
use Illuminate\Support\Carbon;
use Spatie\Color\Rgb;

class EarningsPerMonth extends ChartWidgetWithAction
{
    protected static string $chartId = 'earningsPerMonth';
    protected static ?string $heading = 'Earnings Per Month';
    protected int|string|array $columnSpan = 'full';
    protected static ?string $pollingInterval = null;
    protected static bool $deferLoading = true;
    protected $result;

    protected function getOptions(): array
    {
        if (!$this->readyToLoad) {
            return [];
        }

        return [
            'chart' => [
                'type' => 'area',
                'height' => 300,
                'toolbar' => [
                    'show' => false,
                ],
                'animations' => [
                    'enabled' => true,
                    'easing' => 'easeinout',
                    'speed' => 600,
                    'animateGradually' => [
                        'enabled' => true,
                        'delay' => 500
                    ],
                    'dynamicAnimation' => [
                        'enabled' => true,
                        'speed' => 500
                    ]
                ]
            ],
            'series' => [
                [
                    'name' => 'EarningsPerMonth',
                    'data' => $this->monthByMonthEarningForLastTwelveMonth()
                        ->pluck('total')
                        ->map(fn ($value) => round($value, 0))
                        ->toArray(),
                ],
            ],
            'xaxis' => [
                'categories' => $this->monthByMonthEarningForLastTwelveMonth()->pluck('month')->toArray(),
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
            ],
            'colors' => [Rgb::fromString('rgb(' . Color::Violet[500] . ')')->toHex()->__toString()],
            'stroke' => [
                'curve' => 'smooth',
            ],
        ];
    }

    protected function monthByMonthEarningForLastTwelveMonth()
    {
        if ($this->result) {
            return $this->result;
        }
        $this->result = Trend::model(WorkSession::class)
            ->between(Carbon::parse($this->filterFormData['from']), Carbon::parse($this->filterFormData['to']))
            ->perMonth()
            ->sum('duration')
            ->transform(fn ($item) => [
                'month' => DateTime::createFromFormat('!Y-m', $item->date)->format('F'),
                'total' => round($item->aggregate * 30 / 3600, 2),
            ]);

        return $this->result;
    }

    protected function getFormSchema(): array
    {
        return [
            DatePicker::make('from')
                ->default(now()->subMonths(12)),
            DatePicker::make('to')
                ->default(now()),
        ];
    }
}
