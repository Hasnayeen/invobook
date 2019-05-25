<?php

namespace App\Core\Policies;

use App\Core\Models\Tag;
use App\Core\Models\Task;
use App\Core\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    public function create(User $user)
    {
        return $user->hasPermissionTo('create tag');
    }

    public function attach(User $user, Task $task)
    {
        return $user->hasPermissionTo("edit {$task->taskable_type}->{$task->taskable_id}");
    }

    public function detach(User $user, Task $task)
    {
        return $user->hasPermissionTo("edit {$task->taskable_type}->{$task->taskable_id}");
    }
}
