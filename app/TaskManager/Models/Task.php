<?php

namespace App\TaskManager\Models;

use App\Base\Models\Tag;
use App\Base\Models\Step;
use App\Base\Models\User;
use App\Base\Models\Status;
use App\Base\Models\Mention;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $with = ['subtasks'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'assigned_to', 'created_by', 'notes', 'due_on', 'taskable_type', 'taskable_id', 'status_id', 'related_to', 'parent_id', 'cycle_id',
    ];

    protected $casts = [
        'assigned_to' => 'integer',
    ];

    /**
     * Return the user this task belongs to.
     *
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }

    /**
     * Return the user who created this task.
     *
     * @return mixed
     */
    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    /**
     * Return the task related to this task.
     *
     * @return mixed
     */
    public function related()
    {
        return $this->belongsTo(self::class, 'related_to', 'id');
    }

    public function taskable()
    {
        return $this->morphTo();
    }

    public function status()
    {
        return $this->belongsTo(Status::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class, 'task_tags');
    }

    public function subtasks()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function mentions()
    {
        return $this->morphMany(Mention::class, 'mentionable');
    }

    public function steps()
    {
        return $this->hasMany(Step::class)->orderBy('updated_at', 'desc');
    }
}
