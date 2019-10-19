<?php

namespace App\TaskManager\Controllers;

use App\Base\Models\Status;
use App\TaskManager\Models\Task;
use App\Base\Http\Controllers\Controller;

class TaskStatusController extends Controller
{
    public function update(Task $task, Status $status)
    {
        $this->authorize('update', $task);
        $task->status_id = $status->id;
        $task->save();

        $task->load('user', 'status', 'tags');

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Task status has been updated'),
            'task'    => $task,
        ], 201);
    }
}
