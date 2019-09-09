<?php

namespace App\Core\Policies;

use App\Core\Models\User;
use App\Core\Models\Cycle;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class CyclePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view cycle.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function view(User $user, Cycle $cycle)
    {
        return (new Authorization($user))->userHasPermissionTo('view', 'cycle', $cycle->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can create cycle.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'cycle', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can update the cycle.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Cycle       $cycle
     * @return mixed
     */
    public function update(User $user, Cycle $cycle)
    {
        return (new Authorization($user))->userHasPermissionTo('update', 'cycle', $cycle->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the cycle.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Cycle       $cycle
     * @return mixed
     */
    public function delete(User $user, Cycle $cycle)
    {
        return(new Authorization($user))->userHasPermissionTo('delete', 'cycle', $cycle->id, true, request('group_type'), request('group_id'));
    }
}
