<?php

namespace App\Base\Policies;

use App\Base\Models\File;
use App\Base\Models\User;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class FilePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can delete the direct message.
     *
     * @param  File $file
     * @param  User $user
     * @return bool
     */
    public function delete(User $user, File $file)
    {
        return(new Authorization($user))->userHasPermissionTo('delete', 'file', $file->id, true, request('group_type'), request('group_id'));
    }
}
