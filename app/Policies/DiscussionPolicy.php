<?php

namespace App\Policies;

use App\Models\User;
use App\AppModelsDiscussion;
use Illuminate\Auth\Access\HandlesAuthorization;

class DiscussionPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the app models discussion.
     *
     * @param  \App\Models\User         $user
     * @param  \App\AppModelsDiscussion $appModelsDiscussion
     * @return mixed
     */
    public function view(User $user, AppModelsDiscussion $appModelsDiscussion)
    {
    }

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
     * @param  \App\Models\User         $user
     * @param  \App\AppModelsDiscussion $appModelsDiscussion
     * @return mixed
     */
    public function update(User $user, AppModelsDiscussion $appModelsDiscussion)
    {
    }

    /**
     * Determine whether the user can delete the app models discussion.
     *
     * @param  \App\Models\User         $user
     * @param  \App\AppModelsDiscussion $appModelsDiscussion
     * @return mixed
     */
    public function delete(User $user, AppModelsDiscussion $appModelsDiscussion)
    {
    }

    /**
     * Determine whether the user can restore the app models discussion.
     *
     * @param  \App\Models\User         $user
     * @param  \App\AppModelsDiscussion $appModelsDiscussion
     * @return mixed
     */
    public function restore(User $user, AppModelsDiscussion $appModelsDiscussion)
    {
    }

    /**
     * Determine whether the user can permanently delete the app models discussion.
     *
     * @param  \App\Models\User         $user
     * @param  \App\AppModelsDiscussion $appModelsDiscussion
     * @return mixed
     */
    public function forceDelete(User $user, AppModelsDiscussion $appModelsDiscussion)
    {
    }
}
