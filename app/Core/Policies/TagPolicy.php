<?php

namespace App\Core\Policies;

use App\Core\Models\Tag;
use App\Core\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use App\Authorization\Authorization;

class TagPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'tag');
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
        return (new Authorization($user))->userHasPermissionTo('detach', 'tag');
    }
}
