<?php

namespace App\Core\Policies;

use App\Core\Models\Task;
use App\Core\Models\User;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view task.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function view(User $user, Task $task)
    {
        return resolve('Authorization')->userHasPermissionTo('view', 'task', $task->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can create task.
     *
     * @param  \App\Core\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return resolve('Authorization')->userHasPermissionTo('create', 'task', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can update the task.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Task        $task
     * @return mixed
     */
    public function update(User $user, Task $task)
    {
        return resolve('Authorization')->userHasPermissionTo('update', 'task', $task->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the task.
     *
     * @param  \App\Core\Models\User $user
     * @param  \App\Core\Task        $task
     * @return mixed
     */
    public function delete(User $user, Task $task)
    {
        return resolve('Authorization')->userHasPermissionTo('delete', 'task', $task->id, true, request('group_type'), request('group_id'));
    }
}
