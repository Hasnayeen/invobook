<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskTagController extends Controller
{
    public function store(Task $task)
    {
        $task->tags()->attach(request('labels'));

        return response()->json([
            'status'  => 'success',
            'message' => 'Tag has been added to the task',
        ]);
    }

    public function delete(Task $task, Tag $tag)
    {
        $task->tags()->detach($tag);

        return response()->json([
            'status'  => 'success',
            'message' => 'Tag has been deleted from the task',
        ]);
    }
}
