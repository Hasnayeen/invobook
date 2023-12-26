<?php

namespace App\Filament\Widgets;

use App\Models\WorkSession;
use App\Support\Trend;
use Filament\Support\Colors\Color;
use Hasnayeen\GlowChart\Chart;
use Hasnayeen\GlowChart\Enums\ChartType;
use Hasnayeen\GlowChart\GlowChart;
use Hasnayeen\GlowChart\Labels;
use Hasnayeen\GlowChart\Options;
use Hasnayeen\GlowChart\Series;
use Hasnayeen\GlowChart\Stroke;
use Hasnayeen\GlowChart\Style;
use Hasnayeen\GlowChart\Toolbar;
use Hasnayeen\GlowChart\Xaxis;
use Hasnayeen\GlowChart\Yaxis;
use Illuminate\Support\Collection;
use Spatie\Color\Rgb;

class CumulativeEarningsPerDay extends GlowChart
{
    protected static string $chartId = 'cumulativeEarningsPerDay';
    protected static ?string $heading = 'Cumulative Earnings Per Day';
    protected int|string|array $columnSpan = 'full';
    protected static ?string $pollingInterval = null;
    protected static bool $deferLoading = true;

    protected function options(Options $options): Options
    {
        return Options::make('cumulativeEarningsPerDay')
            ->chart(
                Chart::make(ChartType::Line)
                    ->height(500)
                    ->toolbar(
                        Toolbar::make()
                            ->show(false)
                    )
            )
            ->xaxis(
                Xaxis::make()
                    ->categories(
                        collect()->range(1, 31)->toArray(),
                    )
            )
            ->yaxis(
                Yaxis::make()
                    ->tickAmount(10)
                    ->decimalsInFloat(0)
                    ->labels(
                        Labels::make()
                            ->style(
                                Style::make()
                            )
                            ->rotate(0)
                    )
            )
            ->colors(
                array_map(
                    fn ($color) => Rgb::fromString('rgb(' . $color . ')')->toHex()->__toString(),
                    [
                        Color::Amber[500],
                        Color::Blue[500],
                        Color::Cyan[500],
                        Color::Emerald[500],
                        Color::Fuchsia[500],
                        Color::Green[500],
                        Color::Indigo[500],
                        Color::Lime[500],
                        Color::Orange[500],
                        Color::Pink[500],
                        Color::Purple[500],
                        Color::Red[500],
                    ]
                ),
            )
            ->stroke(
                Stroke::make()
                    ->show(true)
                    ->curve('smooth')
                    ->width(2)
            );
    }

    protected function series(Series $series): Series
    {
        return $series->data(
            collect()
                ->range(0, 11)
                ->map(
                    fn ($item) => [
                        'name' => now()->subMonthsNoOverflow($item)->format('M'),
                        'data' => $this->perDayEarning($item)->map(fn ($value) => round($value, 2)),
                    ]
                )
                ->toArray(),
        );
    }

    protected function perDayEarning($month = 0)
    {
        $total = 0;

        return $this->query()->whereBetween('date', [
            now()->subMonths($month)->startOfMonth()->subDay(),
            now()->subMonthsNoOverflow($month)->endOfMonth(),
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
            ->between(now()->subMonths(12)->startOfMonth(), now()->endOfMonth())
            ->perDay()
            ->sum('(duration / 3600) * (rate_in_cents / 100)'),
        ]);

        return $result;
    }
}
