<?php

namespace App\Base\Policies;

use App\Base\Models\User;
use App\Base\Models\Message;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the message.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'message', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the message.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Base\Message     $message
     * @return mixed
     */
    public function delete(User $user, Message $message)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'message', $message->id, true, request('group_type'), request('group_id'));
    }
}
