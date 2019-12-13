<?php

namespace App\Base\Policies;

use App\Base\Models\User;
use App\Base\Models\Comment;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create app models comments.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'comment', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the app models comment.
     *
     * @param  \App\Base\Models\User    $user
     * @param  \App\Base\Models\Comment $comment
     * @return mixed
     */
    public function delete(User $user, Comment $comment)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'comment', $comment->id, true, request('group_type'), request('group_id'));
    }
}
