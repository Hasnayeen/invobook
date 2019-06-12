<?php

namespace App\Core\Models;

use App\Core\Contracts\HasMembers;
use App\Core\Contracts\Searchable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Team extends Entity implements HasMembers
{
    use LogsActivity, Searchable;

    protected $type = 'team';

    protected $fillable = ['name', 'description', 'office_id', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Core\Models\User::class, 'team_user', 'team_id', 'user_id');
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
}
