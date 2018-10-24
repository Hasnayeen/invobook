<?php

namespace App\Models;

use App\Utilities\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Activitylog\Traits\CausesActivity;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasRoles, CausesActivity;

    protected $fillable = [
        'name', 'username', 'bio', 'designation', 'avatar', 'active', 'timezone', 'week_start', 'lang', 'email', 'password',
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

    /**
     * @return HasMany
     */
    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class, 'discussion_id');
    }
}
