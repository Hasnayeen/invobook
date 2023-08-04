<?php

namespace App\Filament\App\Resources\WorkSessionResource\Widgets;

use App\Models\WorkSession;
use Carbon\CarbonInterval;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Card;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class WorkHourThisMonth extends StatsOverviewWidget
{
    protected static ?string $pollingInterval = null;
    protected int|string|array $columnSpan = '1';
    protected $result;
    protected $change;
    protected $listeners = ['updateStats' => '$refresh'];

    protected function getColumns(): int
    {
        return 2;
    }

    protected function getCards(): array
    {
        return [
            Card::make('Hours This Month', $this->getData())
                ->description($this->getChange().'%')
                ->descriptionIcon($this->getIcon(), 'before')
                ->chart(($this->query()->pluck('total_seconds')->toArray()))
                ->color($this->getColor()),
            Card::make('Earnings This Month', $this->totalEarning())
                ->description($this->avgEarningPerDay().' / day')
                ->descriptionColor('warning')
                ->chart(($this->query()->pluck('total_earnings')->toArray()))
                ->color($this->getColor()),
        ];
    }

    private function getData()
    {
        CarbonInterval::setCascadeFactors([
            'minute' => [60, 'seconds'],
            'hour' => [60, 'minutes'],
        ]);
        $currentMonth = $this->query()->where('month', today()->format('Y-m'));

        return CarbonInterval::make(($currentMonth->isNotEmpty() ? $currentMonth->first()->total_seconds : 0).'seconds')
            ->cascade()
            ->format('%H:%I:%S');
    }

    private function query(): Collection
    {
        if ($this->result) {
            return $this->result;
        }

        $this->result = WorkSession::where('user_id', auth()->id())
            ->select(DB::raw('DATE_FORMAT(work_sessions.created_at, "%Y-%m") AS month'), DB::raw('SUM(work_sessions.duration) AS total_seconds'), DB::raw('SUM(work_sessions.duration / 3600 * rate_in_cents / 100) AS total_earnings'))
            ->groupBy('month')
            ->get();

        return $this->result;
    }

    protected function totalEarning()
    {
        $currentMonth = $this->query()->where('month', today()->format('Y-m'));

        return round($currentMonth->isNotEmpty() ? $currentMonth->first()->total_earnings : 0, 2);
    }

    protected function avgEarningPerDay()
    {
        return round($this->totalEarning() / today()->day, 2);
    }

    private function getChange()
    {
        if ($this->change) {
            return $this->change;
        }
        $data = clone $this->result;
        $current = (int) $data->where('month', today()->format('Y-m'))->first()?->total_seconds;
        $previous = (int) $data->where('month', today()->subMonthNoOverflow()->format('Y-m'))->first()?->total_seconds;
        $change = $current - $previous;
        $this->change = ($previous !== 0 && $change !== 0) ? round(($change / $previous) * 100, 2) : 'N/A';

        return is_int($this->change) ? abs($this->change) : $this->change;
    }

    private function getIcon()
    {
        return is_numeric($this->getChange()) && $this->getChange() > 0 ? 'heroicon-m-arrow-trending-up' : 'heroicon-m-arrow-trending-down';
    }

    private function getColor()
    {
        return is_numeric($this->getChange()) && $this->getChange() > 0 ? 'success' : 'danger';
    }
}
