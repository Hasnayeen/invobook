<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Comment;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create app models comments.
     *
     * @param  \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create comment.' . request()->input('commentable_type') . '->' . request()->input('commentable_id'));
    }

    /**
     * Determine whether the user can delete the app models comment.
     *
     * @param  \App\Models\User    $user
     * @param  \App\Models\Comment $comment
     * @return mixed
     */
    public function delete(User $user, Comment $comment)
    {
        return $user->id == $comment->user_id ||
            $user->hasPermissionTo('delete comment.' . $comment->commentable_type . '->' . $comment->commentable->id);
    }
}
