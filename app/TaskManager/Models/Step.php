<?php

namespace App\TaskManager\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    protected $fillable = ['description', 'unknown', 'done', 'task'];

    protected $casts = [
        'task_id' => 'integer',
    ];

    public function setTaskAttribute(Task $task)
    {
        $this->attributes['task_id'] = $task->getKey();
        $this->setRelation('task', $task);
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }
}
