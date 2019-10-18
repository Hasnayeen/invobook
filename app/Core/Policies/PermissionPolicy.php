<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Permission;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class PermissionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can assign the Permission to a role.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function assign(User $user, Permission $permission)
    {
        return (new Authorization($user))->userHasPermissionTo('assign', 'permission');
    }

    /**
     * Determine whether the user can revoke the Permission from a role.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function revoke(User $user, Permission $permission)
    {
        return (new Authorization($user))->userHasPermissionTo('revoke', 'permission');
    }
}
