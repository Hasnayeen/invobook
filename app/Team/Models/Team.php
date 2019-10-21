<?php

namespace App\Team\Models;

use App\Base\Models\Role;
use App\Base\Models\User;
use App\Base\Models\Cycle;
use App\Base\Models\Group;
use App\Base\Models\Permission;
use App\Base\Contracts\HasMembers;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Team extends Group implements HasMembers
{
    protected $type = 'team';

    protected $fillable = ['name', 'description', 'office_id', 'owner_id', 'public'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Base\Models\User::class, 'team_user', 'team_id', 'user_id');
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
        return $this->hasOne(TeamSetting::class, 'team_id')->withDefault();
    }

    public function makePublic()
    {
        $this->update(['public' => true]);
    }

    public function makePrivate()
    {
        $this->update(['public' => false]);
    }
}
