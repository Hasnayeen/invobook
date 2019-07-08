<?php

namespace App\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    protected $fillable = ['description', 'unknown', 'done', 'task'];

    public function setTaskAttribute(Task $task)
    {
        $this->attributes['task_id'] = $task->getKey();
        $this->setRelation('task', $task);
    }
}
