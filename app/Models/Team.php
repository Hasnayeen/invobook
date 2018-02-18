<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    public function members()
    {
        return $this->belongsToMany('App\Models\User', 'team_user', 'team_id', 'user_id');
    }
}
