<?php

namespace App\Models;

use Spatie\Activitylog\Traits\LogsActivity;

class Team extends Entity
{
    use LogsActivity;

    protected $type = 'team';

    protected $fillable = ['name', 'description', 'office_id', 'owner_id'];

    public function members()
    {
        return $this->belongsToMany(\App\Models\User::class, 'team_user', 'team_id', 'user_id');
    }
}
