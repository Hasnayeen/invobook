<?php

namespace App\Models;

use Spatie\Activitylog\Models\Activity as BaseActivity;

class Activity extends BaseActivity
{
    protected $appends = ['date', 'time'];

    public function getDateAttribute()
    {
        return $this->created_at->toDateString();
    }

    public function getTimeAttribute()
    {
        return $this->created_at->format('h:i A');
    }
}
