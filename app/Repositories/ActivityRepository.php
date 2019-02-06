<?php

namespace App\Repositories;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Collection;

class ActivityRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Activity $activity
     */
    public function __construct(Activity $activity)
    {
        $this->model = $activity;
    }

    /**
     * Return all company wide activities.
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getAllActivities(): Collection
    {
        $query = $this->model->with(['causer:id,name,username', 'subject:id,name,created_at']);
        $query = request('user') ? $query->where('causer_id', request('user')) : $query;
        $query = request('date') ? $query->whereDate('created_at', request('date')) : $query;

        return $query->get()->groupBy('date');
    }
}
