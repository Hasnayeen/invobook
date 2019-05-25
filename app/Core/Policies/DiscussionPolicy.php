<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Discussion;
use Illuminate\Auth\Access\HandlesAuthorization;

class DiscussionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create app models discussions.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'discussion', request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can update the app models discussion.
     *
     * @param  \App\Core\Models\User       $user
     * @param  \App\Core\Models\Discussion $discussion
     * @return mixed
     */
    public function update(User $user, Discussion $discussion)
    {
        return (new Authorization($user))->userHasPermissionTo('update', 'discussion', $discussion->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the app models discussion.
     *
     * @param  \App\Core\Models\User       $user
     * @param  \App\Core\Models\Discussion $discussion
     * @return mixed
     */
    public function delete(User $user, Discussion $discussion)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'discussion', $discussion->id, true, request('group_type'), request('group_id'));
    }
}
