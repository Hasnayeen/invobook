<?php

namespace App\TaskManager\Observers;

use App\TaskManager\Models\Task;
use Illuminate\Support\Facades\Auth;
use App\Base\Utilities\GetRecipientsTrait;
use Illuminate\Support\Facades\Notification;
use App\TaskManager\Notifications\TaskCreated;
use App\TaskManager\Notifications\TaskStatusUpdated;

class TaskObserver
{
    use GetRecipientsTrait;

    /**
     * Handle the task "created" event.
     *
     * @param  \App\Task $task
     * @return void
     */
    public function created(Task $task)
    {
        Notification::send($this->getRecipients($task->taskable(), $task->created_by), new TaskCreated($task, $task->creator));
    }

    /**
     * Handle the task status "updating" event.
     *
     * @param  \App\Task $task
     * @return void
     */
    public function updating(Task $task)
    {
        $creatorId = $task->creator->id;
        $updaterId = Auth::id();

        if ($creatorId !== $updaterId && $task->isDirty('status_id') && $updaterId !== null) {
            Notification::send($task->creator, new TaskStatusUpdated($task, Auth::user()));
        }
    }
}
