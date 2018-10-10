<?php

namespace App\Policies;

use App\Models\Team;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the team.
     *
     * @param  \App\Models\User $user
     * @param  \App\Team        $team
     * @return mixed
     */
    public function view(User $user, Team $team)
    {
        return $user->hasPermissionTo('view team->' . $team->id);
    }

    /**
     * Determine whether the user can create teams.
     *
     * @param  \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create team');
    }

    /**
     * Determine whether the user can update the team.
     *
     * @param  \App\Models\User $user
     * @param  \App\Team        $team
     * @return mixed
     */
    public function update(User $user, Team $team)
    {
    }

    /**
     * Determine whether the user can delete the team.
     *
     * @param  \App\Models\User $user
     * @param  \App\Team        $team
     * @return mixed
     */
    public function delete(User $user, Team $team)
    {
        return $user->hasPermissionTo('delete team->' . $team->id);
    }

    /**
     * Determine whether the user can restore the team.
     *
     * @param  \App\Models\User $user
     * @param  \App\Team        $team
     * @return mixed
     */
    public function restore(User $user, Team $team)
    {
    }

    /**
     * Determine whether the user can permanently delete the team.
     *
     * @param  \App\Models\User $user
     * @param  \App\Team        $team
     * @return mixed
     */
    public function forceDelete(User $user, Team $team)
    {
    }
}
