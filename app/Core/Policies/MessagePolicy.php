<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Message;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the message.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'message', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the message.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Message     $message
     * @return mixed
     */
    public function delete(User $user, Message $message)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'message', $message->id, true, request('group_type'), request('group_id'));

        return (int) $message->user_id === $user->id;
    }
}
