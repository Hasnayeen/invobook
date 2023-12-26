<?php

namespace App\Filament\Widgets;

use Spatie\Color\Rgb;
use App\Support\Trend;
use App\Models\WorkSession;
use Hasnayeen\GlowChart\Chart;
use Hasnayeen\GlowChart\Series;
use Hasnayeen\GlowChart\Options;
use Hasnayeen\GlowChart\Toolbar;
use Filament\Support\Colors\Color;
use Hasnayeen\GlowChart\GlowChart;
use Illuminate\Support\Collection;
use Hasnayeen\GlowChart\Enums\ChartType;
use Hasnayeen\GlowChart\Xaxis;

class EarningsPerDay extends GlowChart
{
    protected static string $chartId = 'earningsPerDay';
    protected static ?string $heading = 'Earnings Per Day';
    protected int|string|array $columnSpan = 'full';
    protected static ?string $pollingInterval = null;
    protected static bool $deferLoading = true;

    protected function options(Options $options): Options
    {
        return Options::make('EarningsPerDay')
            ->chart(
                Chart::make(ChartType::Bar)
                    ->height(300)
                    ->toolbar(
                        Toolbar::make()
                            ->show(false)
                    )
            )
            ->xaxis(
                Xaxis::make()
                    ->categories(
                        collect()->range(1, 31)->toArray()
                    )
            );
    }

    protected function series(Series $series): Series
    {
        return $series
            ->data($this
                ->perDayEarning(0)
                ->map(fn ($value) => round($value->aggregate, 0))
                ->toArray());
    }

    protected function perDayEarning($month = 0)
    {
        return $this->query()->whereBetween('date', [
            now()->subMonths($month)->startOfMonth()->subDay(),
            now()->subMonthsNoOverflow($month)->endOfMonth(),
        ])->values();
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
