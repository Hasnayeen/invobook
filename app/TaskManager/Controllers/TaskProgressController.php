<?php

namespace App\TaskManager\Controllers;

use App\Base\Models\Step;
use App\TaskManager\Models\Task;
use App\Base\Http\Controllers\Controller;

class TaskProgressController extends Controller
{
    public function store(Task $task)
    {
        $this->authorize('create', Task::class);
        $step = Step::create([
            'task'        => $task,
            'description' => request('description'),
            'unknown'     => request('unknown') ?? false,
            'done'        => false,
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Step added to the task'),
            'step'    => $step,
        ], 201);
    }

    public function index(Task $task)
    {
        $this->authorize('view', $task);

        return response()->json([
            'status'  => 'success',
            'steps'   => $task->steps,
        ]);
    }
}
