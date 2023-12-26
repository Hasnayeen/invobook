<?php

namespace App\Filament\Widgets;

use App\Models\WorkSession;
use App\Support\Trend;
use DateTime;
use Hasnayeen\GlowChart\Chart;
use Hasnayeen\GlowChart\Enums\ChartType;
use Hasnayeen\GlowChart\GlowChart;
use Hasnayeen\GlowChart\Labels;
use Hasnayeen\GlowChart\Options;
use Hasnayeen\GlowChart\Series;
use Hasnayeen\GlowChart\Style;
use Hasnayeen\GlowChart\Toolbar;
use Hasnayeen\GlowChart\Xaxis;
use Hasnayeen\GlowChart\Yaxis;
use Filament\Forms\Components\DatePicker;

class EarningsPerMonth extends GlowChart
{
    protected static string $chartId = 'earningsPerMonth';
    protected static ?string $heading = 'Earnings Per Month';
    protected int|string|array $columnSpan = 'full';
    protected static ?string $pollingInterval = null;
    protected static bool $deferLoading = true;
    protected $result;

    protected function options(Options $options): Options
    {
        return Options::make('earningsPerMonth')
            ->chart(
                Chart::make(ChartType::Area)
                    ->height(300)
                    ->toolbar(
                        Toolbar::make()
                            ->show(false)
                    )
            )
            ->xaxis(
                Xaxis::make()
                    ->categories(
                        $this->monthByMonthEarningForLastTwelveMonth()->pluck('month')->toArray(),
                    )
                    ->labels(
                        Labels::make()
                            ->style(
                                Style::make()
                                    ->fontFamily('inherit'),
                            ),
                    ),
            )
            ->yaxis(
                Yaxis::make()
                    ->labels(
                        Labels::make()
                            ->style(
                                Style::make()
                                    ->fontFamily('inherit'),
                            ),
                    ),
            );
    }

    protected function series(Series $series): Series
    {
        return $series
            ->data(
                $this->monthByMonthEarningForLastTwelveMonth()
                    ->pluck('total')
                    ->map(fn ($value, $key) => round($value, 0))
                    ->toArray(),
            );
    }

    protected function monthByMonthEarningForLastTwelveMonth()
    {
        if ($this->result) {
            return $this->result;
        }
        $this->result = Trend::model(WorkSession::class)
            ->between(now()->subMonths(11), now())
            ->perMonth()
            ->sum('(duration / 3600) * (rate_in_cents / 100)')
            ->transform(fn ($item) => [
                'month' => DateTime::createFromFormat('!Y-m', $item->date)->format('F'),
                'total' => round($item->aggregate, 2),
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
