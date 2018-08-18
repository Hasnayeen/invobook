<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Utilities\EntityTrait;
use App\Repositories\TaskRepository;
use App\Http\Requests\ValidateTaskCreation;

class TaskController extends Controller
{
    use EntityTrait;

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
        $task->load('user:id,avatar');

        return response()->json([
            'status' => 'success',
            'task'   => $task,
        ], 201);
    }

    public function show(Task $task)
    {
        $task->load('user');

        return response()->json([
            'status' => 'success',
            'task'   => $task,
        ]);
    }

    public function index(TaskRepository $repository)
    {
        $tasks = $repository->getAllTaskWithAssignee(request('resource_type'), request('resource_id'));
        try {
            $entity = $this->getEntityModel();

            return response()->json([
                'status'   => 'success',
                'total'    => count($tasks),
                'tasks'    => $tasks,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'   => 'error',
                'message'  => 'Something went wrong',
            ]);
        }
    }
}
