<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'assigned_to', 'notes', 'due_on', 'taskable_type', 'taskable_id',
    ];

    /**
     * Return the user this task belongs to.
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'assigned_to', 'id');
    }

    /**
     * Return corresponding record from type (office/team/project) for this task.
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function taskable_type()
    {
        $taskableModel = 'App\Models\\' . ucfirst($this->taskable_type);

        return $this->belongsTo($taskableModel, 'taskable_id', 'id');
    }
}
