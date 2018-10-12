<?php

namespace App\Models;

use Spatie\Activitylog\Traits\LogsActivity;

class Project extends Entity
{
    use LogsActivity;

    protected $type = 'project';

    protected $fillable = ['name', 'description', 'office_id', 'team_id', 'owner_id'];

    public function members()
    {
        return $this->belongsToMany(\App\Models\User::class, 'project_user', 'project_id', 'user_id');
    }
}
