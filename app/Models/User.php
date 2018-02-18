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

    const ADMIN = 1;
    const MEMBER = 2;
    const GUEST = 3;

    public function getRouteKeyName()
    {
        return 'username';
    }
}
