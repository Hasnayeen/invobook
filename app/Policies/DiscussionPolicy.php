<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Discussion;
use Illuminate\Auth\Access\HandlesAuthorization;

class DiscussionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create app models discussions.
     *
     * @param  \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create discussion.' . request()->input('discussionable_type') . '->' . request()->input('discussionable_id'));
    }

    /**
     * Determine whether the user can update the app models discussion.
     *
     * @param  \App\Models\User       $user
     * @param  \App\Models\Discussion $discussion
     * @return mixed
     */
    public function update(User $user, Discussion $discussion)
    {
        return $user->hasPermissionTo('edit discussion.' . $discussion->discussionable_type . '->' . $discussion->discussionable->id);
    }

    /**
     * Determine whether the user can delete the app models discussion.
     *
     * @param  \App\Models\User       $user
     * @param  \App\Models\Discussion $discussion
     * @return mixed
     */
    public function delete(User $user, Discussion $discussion)
    {
        return $user->id === $discussion->posted_by ||
            $user->hasPermissionTo('delete discussion.' . $discussion->discussionable_type . '->' . $discussion->discussionable->id);
    }
}
