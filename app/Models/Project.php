<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name', 'slug', 'description', 'office_id', 'team_id', 'owner_id'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function members()
    {
        return $this->belongsToMany('App\Models\User', 'project_user', 'project_id', 'user_id');
    }
}
