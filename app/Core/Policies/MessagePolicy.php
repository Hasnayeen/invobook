<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Message;
use Illuminate\Auth\Access\HandlesAuthorization;

class MessagePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the message.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Message     $message
     * @return mixed
     */
    public function delete(User $user, Message $message)
    {
        return (int) $message->user_id === $user->id;
    }
}
