<?php

namespace App\TaskManager\Controllers;

use App\Base\Models\Tag;
use App\TaskManager\Models\Task;
use App\Base\Http\Controllers\Controller;

class TaskTagController extends Controller
{
    public function store(Task $task)
    {
        $this->authorize('create', Task::class);
        $task->tags()->attach(request('labels'));

        return response()->json([
            'status'  => 'success',
            'message' => 'Tag has been added to the task',
        ]);
    }

    public function delete(Task $task, Tag $tag)
    {
        $this->authorize('delete', $task);
        $task->tags()->detach($tag);

        return response()->json([
            'status'  => 'success',
            'message' => 'Tag has been deleted from the task',
        ]);
    }
}
