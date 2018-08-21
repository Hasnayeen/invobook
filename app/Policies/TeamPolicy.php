<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Team;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the team.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Team  $team
     * @return mixed
     */
    public function view(User $user, Team $team)
    {
        return $team->members()->where('user_id', $user->id)->exists();
    }

    /**
     * Determine whether the user can create teams.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the team.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Team  $team
     * @return mixed
     */
    public function update(User $user, Team $team)
    {
        //
    }

    /**
     * Determine whether the user can delete the team.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Team  $team
     * @return mixed
     */
    public function delete(User $user, Team $team)
    {
        //
    }

    /**
     * Determine whether the user can restore the team.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Team  $team
     * @return mixed
     */
    public function restore(User $user, Team $team)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the team.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Team  $team
     * @return mixed
     */
    public function forceDelete(User $user, Team $team)
    {
        //
    }
}
