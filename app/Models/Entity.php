<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Entity extends Model
{
    public function getType()
    {
        return $this->type;
    }

    public function messages()
    {
        return $this->morphMany(\App\Models\Message::class, 'messageable');
    }

    public function tasks()
    {
        return $this->morphMany(\App\Models\Task::class, 'taskable');
    }
}
