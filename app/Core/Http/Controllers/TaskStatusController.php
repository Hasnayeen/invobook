<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Task;
use App\Core\Http\Requests\UpdateTaskStatusRequest;

class TaskStatusController extends Controller
{
    public function update(UpdateTaskStatusRequest $request, Task $task)
    {
        $task->status()->updateOrCreate([], [
            'name'  => $request->name,
            'color' => $request->color,
        ]);

        $task->load('status');

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Task status has been updated'),
            'task'    => $task,
        ], 201);
    }
}
