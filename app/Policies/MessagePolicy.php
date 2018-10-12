<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Message;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the message.
     *
     * @param  \App\Models\User $user
     * @param  \App\Message     $message
     * @return mixed
     */
    public function delete(User $user, Message $message)
    {
        return (int) $message->user_id === $user->id;
    }
}
