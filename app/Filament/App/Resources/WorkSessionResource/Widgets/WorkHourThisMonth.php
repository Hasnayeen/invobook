<?php

namespace App\Filament\App\Resources\WorkSessionResource\Widgets;

use Carbon\CarbonInterval;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Card;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class WorkHourThisMonth extends StatsOverviewWidget
{
    protected static ?string $pollingInterval = null;
    protected int | string | array $columnSpan = '2';
    protected $result;
    protected $change;
    protected $listeners = ['updateStats' => '$refresh'];

    protected function getCards(): array
    {
        return [
            Card::make('Hours This Month', $this->getData())
                ->description($this->getChange() . '%')
                ->descriptionIcon($this->getIcon())
                ->chart(($this->query()->pluck('total_seconds')->toArray()))
                ->color($this->getColor()),
            Card::make('Earnings This Month', $this->totalEarning())
                ->description($this->avgEarningPerDay() . ' / day')
                ->descriptionColor('success')
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

        return CarbonInterval::make($this->query()->last()->total_seconds . 'seconds')->cascade()->format('%H:%I:%S');
    }
    
    private function query(): Collection
    {
        if ($this->result) {
            return $this->result;
        }

        $this->result = DB::table('work_sessions')
            ->select(DB::raw('DATE_FORMAT(work_sessions.created_at, "%Y-%m") AS month'), DB::raw('SUM(work_sessions.duration) AS total_seconds'), DB::raw('SUM(work_sessions.duration / 3600 * rate_in_cents / 100) AS total_earnings'))
            ->groupBy('month')
            ->get();

        return $this->result;

        // return WorkSession::where('user_id', auth()->user()->id)
        //     ->whereBetween('start', [now()->startOfWeek(), now()->endOfWeek()])
        //     ->sum('duration');
    }

    protected function totalEarning()
    {
        return round($this->query()->last()->total_earnings, 2);
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
        $current = $data->pop()->total_seconds;
        $previous = $data->pop()->total_seconds;
        $this->change = $previous === 0 ? 'N/A' : round((($current - $previous) / $previous) * 100, 2);

        return $this->change;
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
