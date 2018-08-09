<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'office_id', 'owner_id'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function members()
    {
        return $this->belongsToMany(\App\Models\User::class, 'team_user', 'team_id', 'user_id');
    }
}
