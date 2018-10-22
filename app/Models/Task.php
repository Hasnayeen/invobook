<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Task extends Model
{
    use LogsActivity;

    protected $with = ['subtasks'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'assigned_to', 'notes', 'due_on', 'taskable_type', 'taskable_id', 'status_id', 'related_to', 'parent_id',
    ];

    protected $casts = [
        'assigned_to' => 'integer',
    ];

    /**
     * Return the user this task belongs to.
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User', 'assigned_to', 'id');
    }

    public function taskable()
    {
        return $this->morphTo();
    }

    public function status()
    {
        return $this->belongsTo('App\Models\Status');
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'task_tags');
    }

    public function subtasks()
    {
        return $this->hasMany(self::class, 'parent_id');
    }
}
