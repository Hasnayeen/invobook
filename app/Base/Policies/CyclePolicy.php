<?php

namespace App\Base\Policies;

use App\Base\Models\User;
use App\Base\Models\Cycle;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class CyclePolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view cycle.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function view(User $user, Cycle $cycle)
    {
        return (new Authorization($user))->userHasPermissionTo('view', 'cycle', $cycle->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can create cycle.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'cycle', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can update the cycle.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Base\Cycle       $cycle
     * @return mixed
     */
    public function update(User $user, Cycle $cycle)
    {
        return (new Authorization($user))->userHasPermissionTo('update', 'cycle', $cycle->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the cycle.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Base\Cycle       $cycle
     * @return mixed
     */
    public function delete(User $user, Cycle $cycle)
    {
        return(new Authorization($user))->userHasPermissionTo('delete', 'cycle', $cycle->id, true, request('group_type'), request('group_id'));
    }
}
