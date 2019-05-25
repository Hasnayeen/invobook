<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Office;
use Illuminate\Auth\Access\HandlesAuthorization;

class OfficePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the office.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Office      $office
     * @return mixed
     */
    public function view(User $user, Office $office)
    {
        return $user->hasPermissionTo('view office->' . $office->id);
    }

    /**
     * Determine whether the user can create offices.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create office');
    }

    /**
     * Determine whether the user can delete the office.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Office      $office
     * @return mixed
     */
    public function delete(User $user, Office $office)
    {
        return $user->hasPermissionTo('delete office->' . $office->id);
    }
}
