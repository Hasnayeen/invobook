<?php

namespace App\Models;

use App\Contracts\Searchable;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Task extends Model
{
    use LogsActivity, Searchable;

    protected static function huntableFields()
    {
        return ['name', 'notes'];
    }

    protected $with = ['subtasks'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'assigned_to', 'notes', 'due_on', 'taskable_type', 'taskable_id', 'status_id', 'related_to', 'parent_id', 'cycle_id',
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
        return $this->belongsTo(User::class, 'assigned_to', 'id');
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
}
