<?php

namespace App\TaskManager\Observers;

use App\TaskManager\Models\Task;
use App\TaskManager\Notifications\TaskCreated;
use App\Base\Utilities\GetRecipientsTrait;
use Illuminate\Support\Facades\Notification;

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
}
