<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Office;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class OfficePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the office.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Models\Office      $office
     * @return mixed
     */
    public function view(User $user, Office $office)
    {
        return (new Authorization($user))->userHasPermissionTo('view', 'office', $office->id, false, 'office', $office->id);
    }

    /**
     * Determine whether the user can create offices.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'office');
    }

    /**
     * Determine whether the user can delete the office.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Models\Office      $office
     * @return mixed
     */
    public function delete(User $user, Office $office)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'office', $office->id, false, 'office', $office->id);
    }

    /**
     * Determine whether the user can change the office settings.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Models\Office     $office
     * @return mixed
     */
    public function settings(User $user, Office $office)
    {
        return $user->isMember(request('group_type'), request('group_id')) && ($user->role->slug === 'owner' || $user->role->slug === 'admin');
    }
}
