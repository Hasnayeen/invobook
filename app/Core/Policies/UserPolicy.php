<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can invite new user.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function invite(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('invite', 'user');
    }

    /**
     * Determine whether the user can add user to a group.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function add(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('add', 'member');
    }

    /**
     * Determine whether the user can remove user to a group.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function remove(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('remove', 'member');
    }
}
