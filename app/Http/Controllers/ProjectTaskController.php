<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Repositories\TaskRepository;

class ProjectTaskController extends Controller
{
    public function index(Project $project, TaskRepository $taskRepository)
    {
        $tasks = $taskRepository->all('project', $project->id);

        return view('projects.tasks', ['project' => $project, 'tasks' => $tasks]);
    }
}
