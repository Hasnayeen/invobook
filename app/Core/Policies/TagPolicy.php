<?php

namespace App\Core\Policies;

use App\Core\Models\Tag;
use App\Core\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return resolve('Authorization')->userHasPermissionTo('create', 'tag');
    }

    /**
     * @TODO
     */
    public function attach(User $user)
    {
        return true;
    }

    /**
     * @TODO
     */
    public function detach(User $user, Tag $tag)
    {
        return resolve('Authorization')->userHasPermissionTo('detach', 'tag');
    }
}
