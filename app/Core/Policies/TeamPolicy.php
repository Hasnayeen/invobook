<?php

namespace App\Core\Policies;

use App\Core\Models\Team;
use App\Core\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the team.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Team        $team
     * @return mixed
     */
    public function view(User $user, Team $team)
    {
        return $user->hasPermissionTo('view team->' . $team->id);
    }

    /**
     * Determine whether the user can create teams.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create team');
    }

    /**
     * Determine whether the user can delete the team.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Team        $team
     * @return mixed
     */
    public function delete(User $user, Team $team)
    {
        return $user->hasPermissionTo('delete team->' . $team->id);
    }
}
