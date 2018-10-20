<?php

namespace App\Policies;

use App\Models\Tag;
use App\Models\Task;
use App\Models\User;
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

    public function detach(User $user, Task $task, Tag $tag)
    {
        return $user->hasPermissionTo("edit {$task->taskable_type}->{$task->taskable_id}");
    }
}
