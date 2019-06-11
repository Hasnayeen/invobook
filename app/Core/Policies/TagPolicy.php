<?php

namespace App\Core\Policies;

use App\Core\Models\Tag;
use App\Core\Models\User;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

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
        return (new Authorization($user))->userHasPermissionTo('attach', 'tag');
    }

    /**
     * @TODO
     */
    public function detach(User $user, Tag $tag)
    {
        return (new Authorization($user))->userHasPermissionTo('detach', 'tag');
    }
}
