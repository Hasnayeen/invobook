<?php

namespace App\TaskManager\Policies;

use App\Base\Models\User;
use App\TaskManager\Models\Task;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view task.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function view(User $user, Task $task)
    {
        return (new Authorization($user))->userHasPermissionTo('view', 'task', $task->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can create task.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'task', null, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can update the task.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Base\Task        $task
     * @return mixed
     */
    public function update(User $user, Task $task)
    {
        return (new Authorization($user))->userHasPermissionTo('update', 'task', $task->id, true, request('group_type'), request('group_id'));
    }

    /**
     * Determine whether the user can delete the task.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Base\Task        $task
     * @return mixed
     */
    public function delete(User $user, Task $task)
    {
        return(new Authorization($user))->userHasPermissionTo('delete', 'task', $task->id, true, request('group_type'), request('group_id'));
    }
}
