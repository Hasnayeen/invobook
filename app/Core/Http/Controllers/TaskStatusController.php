<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Task;
use App\Core\Models\Status;

class TaskStatusController extends Controller
{
    public function update(Task $task, Status $status)
    {
        $this->authorize('update', $task);
        $task->status_id = $status->id;
        $task->save();

        $task->load('status');

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Task status has been updated'),
            'task'    => $task,
        ], 201);
    }
}
