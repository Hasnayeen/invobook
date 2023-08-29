<?php

namespace App\Filament\Widgets;

use Spatie\Color\Rgb;
use App\Support\Trend;
use App\Models\WorkSession;
use Filament\Support\Colors\Color;
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
use Illuminate\Support\Collection;

class CumulativeEarningsPerDay extends GlowChart
{
    protected static string $chartId = 'cumulativeEarningsPerDay';
    protected static ?string $heading = 'Cumulative Earnings Per Day';
    protected int|string|array $columnSpan = 'full';
    protected static ?string $pollingInterval = null;
    protected static bool $deferLoading = true;

    protected function getOptions(): Options
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
            ->series(
                Series::make()
                    ->data(
                        collect()
                            ->range(0, 11)
                            ->map(
                                fn ($item) => [
                                    'name' => now()->subMonthsNoOverflow($item)->format('M'),
                                    'data' => $this->perDayEarning($item)->map(fn ($value) => round($value * 30 / 3600, 2)),
                                ]
                            )
                            ->toArray(),
                    ),
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
            ->colors([
                Rgb::fromString('rgb(' . Color::Amber[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Blue[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Cyan[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Emerald[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Fuchsia[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Green[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Indigo[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Lime[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Orange[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Pink[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Purple[500] . ')')->toHex()->__toString(),
                Rgb::fromString('rgb(' . Color::Red[500] . ')')->toHex()->__toString(),
            ]);
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
