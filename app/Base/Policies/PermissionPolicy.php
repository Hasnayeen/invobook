<?php

namespace App\Base\Policies;

use App\Base\Models\User;
use App\Base\Models\Permission;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class PermissionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can assign the Permission to a role.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function assign(User $user, Permission $permission)
    {
        return (new Authorization($user))->userHasPermissionTo('assign', 'permission');
    }

    /**
     * Determine whether the user can revoke the Permission from a role.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function revoke(User $user, Permission $permission)
    {
        return (new Authorization($user))->userHasPermissionTo('revoke', 'permission');
    }
}
