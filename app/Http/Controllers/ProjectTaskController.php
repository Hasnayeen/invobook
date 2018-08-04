<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Repositories\TaskRepository;

class ProjectTaskController extends Controller
{
    public function index(Project $project, TaskRepository $taskRepository)
    {
        $tasks = $taskRepository->getAllTaskWithAssignee('project', $project->id);

        return response()->json([
            'status'  => 'success',
            'tasks'   => $tasks,
        ]);
    }
}
