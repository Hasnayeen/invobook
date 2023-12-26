<?php

namespace App\Models\Builders;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class WorkSessionQueryBuilder extends Builder
{
    public function selectWorkSessions()
    {
        return $this->select([
            'work_sessions.id',
            'work_sessions.project_id',
            'task_id',
            'work_sessions.description',
            'work_sessions.rate_in_cents',
            'work_sessions.start',
            'tasks.title as task_title',
            DB::raw("COALESCE(tasks.title, work_sessions.description) as item"),
        ])
        ->leftJoin('tasks', 'tasks.id', '=', 'work_sessions.task_id')
        ->groupBy('item');
    }

    public function withTotalDuration()
    {
        return $this->selectRaw('SUM(duration) as total_duration');
    }

    public function withSubtotal()
    {
        return $this->selectRaw('ROUND(SUM(duration / 3600 * rate_in_cents / 100)) as subtotal');
    }
}
