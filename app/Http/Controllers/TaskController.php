<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Utilities\EntityTrait;
use App\Repositories\TaskRepository;
use App\Repositories\MentionRepository;
use App\Http\Requests\UpdateTaskRequest;
use App\Http\Requests\ValidateTaskCreation;

class TaskController extends Controller
{
    use EntityTrait;

    public function store(ValidateTaskCreation $request, TaskRepository $repository, MentionRepository $mentionRepository)
    {
        try {
            $task = $repository->create($request->all());
            $task->tags()->attach(request('labels'));
            if (request('mentions')) {
                $mentionRepository->create('task', $task);
            }
            $task->load('user:id,avatar');

            return response()->json([
                'status'  => 'success',
                'message' => trans('misc.New task has been created'),
                'task'    => $task,
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
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

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->all());

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Task has been updated'),
        ]);
    }
}
