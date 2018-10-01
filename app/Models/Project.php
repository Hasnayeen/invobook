<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Project extends Model
{
    use LogsActivity;

    protected $fillable = ['name', 'description', 'office_id', 'team_id', 'owner_id'];

    public function members()
    {
        return $this->belongsToMany('App\Models\User', 'project_user', 'project_id', 'user_id');
    }

    public function messages()
    {
        return $this->morphMany('App\Models\Message', 'messageable');
    }

    public function tasks()
    {
        return $this->morphMany(\App\Models\Task::class, 'taskable');
    }
}
