<?php

namespace App\Core\Observers;

use App\Core\Models\Task;
use App\Core\Notifications\TaskCreated;
use App\Core\Utilities\GetRecipientsTrait;
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
