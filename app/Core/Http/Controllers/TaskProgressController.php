<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Step;
use App\Core\Models\Task;

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
