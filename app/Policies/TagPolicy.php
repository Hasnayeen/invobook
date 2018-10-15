<?php

namespace App\Policies;

use App\Models\Tag;
use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    public function create(User $user, Task $task)
    {
        return $user->hasPermissionTo("edit {$task->taskable_type}->{$task->taskable_id}");
    }

    public function delete(User $user, Task $task, Tag $tag)
    {
        return $user->hasPermissionTo("edit {$task->taskable_type}->{$task->taskable_id}");
    }
}
