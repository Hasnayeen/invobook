<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'name', 'username', 'bio', 'designation', 'avatar', 'role', 'active', 'timezone', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    const MEMBER = 1;
    const ADMIN = 2;
    const GUEST = 3;

    public function getRouteKeyName()
    {
        return 'username';
    }

    public function getAvatarAttribute($value)
    {
        return asset($value ? 'storage/' . $value : 'image/avatar.jpg');
    }

    public function teams()
    {
        return $this->belongsToMany('App\Models\Team');
    }

    public function projects()
    {
        return $this->belongsToMany('App\Models\Project');
    }
}
