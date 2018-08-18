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
        return $this->belongsToMany('App\Models\User', 'team_user', 'team_id', 'user_id');
    }

    public function messages()
    {
        return $this->morphMany('App\Models\Message', 'messageable');
    }
}
