<?php

namespace App\Team\Policies;

use App\Base\Models\User;
use App\Team\Models\Team;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the team.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Team\Models\Team $team
     * @return mixed
     */
    public function view(User $user, Team $team)
    {
        return (new Authorization($user))->userHasPermissionTo('view', 'team', $team->id, false, 'team', $team->id);
    }

    /**
     * Determine whether the user can create teams.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'team');
    }

    /**
     * Determine whether the user can delete the team.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Team\Models\Team $team
     * @return mixed
     */
    public function delete(User $user, Team $team)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'team', $team->id, false, 'team', $team->id);
    }

    /**
     * Determine whether the user can change the team settings.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Team\Models\Team $team
     * @return mixed
     */
    public function settings(User $user, Team $team)
    {
        return $user->isMember(request('group_type'), request('group_id')) && ($user->role->slug === 'owner' || $user->role->slug === 'admin');
    }
}
