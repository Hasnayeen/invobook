<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Office;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the office.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Office  $office
     * @return mixed
     */
    public function view(User $user, Office $office)
    {
        return $office->members()->where('user_id', $user->id)->exists();
    }

    /**
     * Determine whether the user can create offices.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the office.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Office  $office
     * @return mixed
     */
    public function update(User $user, Office $office)
    {
        //
    }

    /**
     * Determine whether the user can delete the office.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Office  $office
     * @return mixed
     */
    public function delete(User $user, Office $office)
    {
        //
    }

    /**
     * Determine whether the user can restore the office.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Office  $office
     * @return mixed
     */
    public function restore(User $user, Office $office)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the office.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Office  $office
     * @return mixed
     */
    public function forceDelete(User $user, Office $office)
    {
        //
    }
}
