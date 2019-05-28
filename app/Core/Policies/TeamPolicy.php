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
        return resolve('Authorization')->userHasPermissionTo('view', 'team', $team->id, false, 'team', $team->id);
    }

    /**
     * Determine whether the user can create teams.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return resolve('Authorization')->userHasPermissionTo('create', 'team');
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
        return resolve('Authorization')->userHasPermissionTo('delete', 'team', $team->id, false, 'team', $team->id);
    }
}
