<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Tag;
use App\Core\Models\Task;
use Illuminate\Http\Request;

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
