<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Utilities\EntityTrait;
use App\Repositories\TaskRepository;
use App\Http\Requests\ValidateTaskCreation;

class TaskController extends Controller
{
    use EntityTrait;

    public function store(ValidateTaskCreation $request, TaskRepository $repository)
    {
        $task = $repository->create($request->all());
        $task->load('user:id,avatar');

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.New task has been created'),
            'task'    => $task,
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
        try {
            $tasks = $repository->getAllTaskWithAssignee(request('resource_type'), request('resource_id'));

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

    public function delete(Task $task)
    {
        $task->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.The task has been deleted'),
        ]);
    }
}
