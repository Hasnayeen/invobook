<?php

namespace App\Support;

use Carbon\CarbonPeriod;
use Error;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

class Trend
{
    public string $interval;
    public Carbon $start;
    public Carbon $end;
    public string $dateColumn = 'created_at';
    public string $dateAlias = 'date';

    public function __construct(public Builder $builder)
    {
    }

    public static function query(Builder $builder): self
    {
        return new static($builder);
    }

    public static function model(string $model): self
    {
        return new static($model::query());
    }

    public function between($start, $end): self
    {
        $this->start = $start;
        $this->end = $end;

        return $this;
    }

    public function interval(string $interval): self
    {
        $this->interval = $interval;

        return $this;
    }

    public function perMinute(): self
    {
        return $this->interval('minute');
    }

    public function perHour(): self
    {
        return $this->interval('hour');
    }

    public function perDay(): self
    {
        return $this->interval('day');
    }

    public function perWeek(): self
    {
        return $this->interval('week');
    }

    public function perMonth(): self
    {
        return $this->interval('month');
    }

    public function perYear(): self
    {
        return $this->interval('year');
    }

    public function dateColumn(string $column): self
    {
        $this->dateColumn = $column;

        return $this;
    }

    public function dateAlias(string $alias): self
    {
        $this->dateAlias = $alias;

        return $this;
    }

    public function aggregate(string $column, string $aggregate): Collection
    {
        $values = $this->builder
            ->toBase()
            ->selectRaw("
                {$this->getSqlDate()} as {$this->dateAlias},
                {$aggregate}({$column}) as aggregate
            ")
            ->whereBetween($this->dateColumn, [$this->start, $this->end])
            ->groupBy($this->dateAlias)
            ->orderBy($this->dateAlias)
            ->get();

        return $this->mapValuesToDates($values);
    }

    public function average(string $column): Collection
    {
        return $this->aggregate($column, 'avg');
    }

    public function min(string $column): Collection
    {
        return $this->aggregate($column, 'min');
    }

    public function max(string $column): Collection
    {
        return $this->aggregate($column, 'max');
    }

    public function sum(string $column): Collection
    {
        return $this->aggregate($column, 'sum');
    }

    public function count(string $column = '*'): Collection
    {
        return $this->aggregate($column, 'count');
    }

    public function mapValuesToDates(Collection $values): Collection
    {
        $values = $values->map(fn ($value) => (object) [
            'date' => $value->{$this->dateAlias},
            'aggregate' => $value->aggregate,
        ]);

        $placeholders = $this->getDatePeriod()->map(
            fn (Carbon $date) => (object) [
                'date' => $date->format($this->getCarbonDateFormat()),
                'aggregate' => 0,
            ]
        );

        return $values
            ->merge($placeholders)
            ->unique('date')
            ->sort()
            ->flatten();
    }

    protected function getDatePeriod(): Collection
    {
        return collect(
            CarbonPeriod::between(
                $this->start,
                $this->end,
            )->interval("1 {$this->interval}")
        );
    }

    protected function getSqlDate(): string
    {
        return match ($this->interval) {
            'minute' => "date_format({$this->dateColumn}, '%Y-%m-%d %H:%i:00')",
            'hour' => "date_format({$this->dateColumn}, '%Y-%m-%d %H:00')",
            'day' => "date_format({$this->dateColumn}, '%Y-%m-%d')",
            'week' => "date_format({$this->dateColumn}, '%X-%V')",
            // 'week' => "CONCAT(YEAR({$this->dateColumn}), '-', WEEK({$this->dateColumn}))",
            'month' => "date_format({$this->dateColumn}, '%Y-%m')",
            'year' => "date_format({$this->dateColumn}, '%Y')",
            default => throw new Error('Invalid interval.'),
        };
    }

    protected function getCarbonDateFormat(): string
    {
        return match ($this->interval) {
            'minute' => 'Y-m-d H:i:00',
            'hour' => 'Y-m-d H:00',
            'day' => 'Y-m-d',
            'week' => 'Y-W',
            'month' => 'Y-m',
            'year' => 'Y',
            default => throw new Error('Invalid interval.'),
        };
    }
}
