<?php

namespace App\Base\Models;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    public function getType()
    {
        return $this->type;
    }

    public function messages()
    {
        return $this->morphMany(\App\Base\Models\Message::class, 'messageable');
    }

    public function tasks()
    {
        return $this->morphMany(\App\Base\Models\Task::class, 'taskable');
    }

    public function tags()
    {
        return $this->morphToMany(\App\Base\Models\Tag::class, 'taggable', 'group_tag');
    }

    public function getCurrentCycleAttribute()
    {
        $currentDate = today();

        return $this->cycles()->where('start_date', '<=', $currentDate)->where('end_date', '>=', $currentDate)->first();
    }

    public function notOpenForPublic()
    {
        return auth()->guest() && ! $this->public;
    }
}
