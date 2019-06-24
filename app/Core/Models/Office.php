<?php

namespace App\Core\Models;

use App\Core\Contracts\HasMembers;
use App\Core\Models\OfficeSetting;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Office extends Group implements HasMembers
{
    protected $type = 'office';

    protected $fillable = ['name', 'description', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Core\Models\User::class, 'office_user', 'office_id', 'user_id');
    }

    public function cycles()
    {
        return $this->morphMany(Cycle::class, 'cyclable');
    }

    public function permissions()
    {
        return $this->morphToMany(Permission::class, 'group', 'role_has_permission');
    }

    public function roles()
    {
        return $this->morphToMany(Role::class, 'group', 'role_has_permission');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function settings()
    {
        return $this->hasOne(OfficeSetting::class, 'office_id');
    }
}
