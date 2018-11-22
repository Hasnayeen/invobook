<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\UpdateTaskStatusRequest;

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
