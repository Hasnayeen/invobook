<?php

namespace App\Core\Models;

use App\Core\Contracts\HasMembers;
use App\Core\Contracts\Searchable;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Project extends Entity implements HasMembers
{
    use LogsActivity, Searchable;

    protected $type = 'project';

    protected $fillable = ['name', 'description', 'office_id', 'team_id', 'owner_id'];

    /**
     * @return BelongsToMany
     */
    public function members(): BelongsToMany
    {
        return $this->belongsToMany(\App\Core\Models\User::class, 'project_user', 'project_id', 'user_id');
    }

    public function routeNotificationFor()
    {
        return '';
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
}
