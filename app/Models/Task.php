<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Task extends Model
{
    use LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'assigned_to', 'notes', 'due_on', 'taskable_type', 'taskable_id',
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
}
