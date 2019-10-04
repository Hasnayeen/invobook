<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\DirectMessage;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class DirectMessagePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the direct message.
     *
     * @param  DirectMessage $directMessage
     * @param  User          $user
     * @return bool
     */
    public function delete(User $user, DirectMessage $directMessage)
    {
        // TODO: I am not sure if it's correct
        return (new Authorization($user))->userHasPermissionTo('delete', 'sentDirectMessages', $directMessage->id, false, 'sentDirectMessage', $directMessage->id);
    }
}
