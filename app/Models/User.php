<?php

namespace App\Models;

use Spatie\Permission\Traits\HasRoles;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasRoles;

    protected $fillable = [
        'name', 'username', 'bio', 'designation', 'avatar', 'active', 'timezone', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getRouteKeyName()
    {
        return 'username';
    }

    public function getAvatarAttribute($value)
    {
        return $value ? 'storage/' . $value : 'image/avatar.jpg';
    }

    public function teams()
    {
        return $this->belongsToMany('App\Models\Team');
    }

    public function projects()
    {
        return $this->belongsToMany('App\Models\Project');
    }

    public function offices()
    {
        return $this->belongsToMany('App\Models\Office');
    }
}
