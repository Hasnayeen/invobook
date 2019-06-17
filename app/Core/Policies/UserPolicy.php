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
}
