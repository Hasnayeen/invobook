<?php

namespace App\Filament\App\Widgets;

use App\Models\WorkSession;
use App\Support\Trend;
use DateTime;
use Filament\Widgets\ChartWidget;

class EarningsPerMonth extends ChartWidget
{
    protected int|string|array $columnSpan = 'full';
    protected static ?int $sort = 2;
    protected static ?string $pollingInterval = null;
    protected static ?string $heading = 'Earnings Per Month';
    protected static ?string $maxHeight = '20rem';
    protected $result;

    protected function getType(): string
    {
        return 'line';
    }

    protected function getData(): array
    {
        return [
            'datasets' => [
                [
                    'label' => 'Earnings',
                    'data' => $this->monthByMonthEarningForLastTwelveMonth()->pluck('total'),
                    'tension' => 0.5,
                ],
            ],
            'labels' => $this->monthByMonthEarningForLastTwelveMonth()->pluck('month'),
        ];
    }

    protected function monthByMonthEarningForLastTwelveMonth()
    {
        if ($this->result) {
            return $this->result;
        }
        $this->result = Trend::model(WorkSession::class)
            ->between(now()->subMonths(12), now())
            ->perMonth()
            ->sum('duration')
            ->transform(fn ($item) => [
                'month' => DateTime::createFromFormat('!Y-m', $item->date)->format('F'),
                'total' => round($item->aggregate * 30 / 3600, 2),
            ]);

        return $this->result;
    }
}
