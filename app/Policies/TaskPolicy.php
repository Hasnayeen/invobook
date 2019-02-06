<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can create posts.
     *
     * @param  \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create task.' . request()->input('taskable_type') . '->' . request()->input('taskable_id'));
    }

    /**
     * Determine whether the user can update the task.
     *
     * @param  \App\Models\User $user
     * @param  \App\Task        $task
     * @return mixed
     */
    public function update(User $user, Task $task)
    {
        return $user->hasPermissionTo('edit task.' . $task->taskable_type . '->' . $task->taskable->id);
    }

    /**
     * Determine whether the user can delete the task.
     *
     * @param  \App\Models\User $user
     * @param  \App\Task        $task
     * @return mixed
     */
    public function delete(User $user, Task $task)
    {
        return $user->hasPermissionTo('delete task.' . $task->taskable_type . '->' . $task->taskable->id);
    }
}
