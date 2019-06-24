<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $appends = ['current_cycle'];

    public function getType()
    {
        return $this->type;
    }

    public function messages()
    {
        return $this->morphMany(\App\Core\Models\Message::class, 'messageable');
    }

    public function tasks()
    {
        return $this->morphMany(\App\Core\Models\Task::class, 'taskable');
    }

    public function getCurrentCycleAttribute()
    {
        $currentDate = now();

        return $this->cycles()->where('start_date', '<=', $currentDate)->where('end_date', '>=', $currentDate)->first();
    }
}
