<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Comment;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create app models comments.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create comment.' . request()->input('commentable_type') . '->' . request()->input('commentable_id'));
    }

    /**
     * Determine whether the user can delete the app models comment.
     *
     * @param  \App\Core\Models\User    $user
     * @param  \App\Core\Models\Comment $comment
     * @return mixed
     */
    public function delete(User $user, Comment $comment)
    {
        return $user->id == $comment->user_id ||
            $user->hasPermissionTo('delete comment.' . $comment->commentable_type . '->' . $comment->commentable->id);
    }
}
