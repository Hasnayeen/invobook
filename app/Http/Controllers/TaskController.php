<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Http\Requests\ValidateTaskCreation;

class TaskController extends Controller
{
    public function store(ValidateTaskCreation $request)
    {
        $task = Task::create([
            'title'             => $request->input('title'),
            'assigned_to'       => $request->input('assigned_to'),
            'notes'             => $request->input('notes'),
            'due_on'            => $request->input('due_on'),
            'related_to'        => $request->input('related_to'),
            'taskable_type'     => $request->input('taskable_type'),
            'taskable_id'       => $request->input('taskable_id'),
        ]);

        return response()->json([
            'status' => 'success',
            'task'   => $task,
        ], 201);
    }
}
