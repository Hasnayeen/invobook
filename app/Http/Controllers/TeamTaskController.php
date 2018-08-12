<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Repositories\TaskRepository;

class TeamTaskController extends Controller
{
    public function index(Team $team, TaskRepository $taskRepository)
    {
        $tasks = $taskRepository->getAllTaskWithAssignee('team', $team->id);

        return response()->json([
            'status'  => 'success',
            'tasks'   => $tasks,
        ]);
    }
}
