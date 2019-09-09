<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Team;
use App\Core\Models\Office;
use App\Core\Models\Project;
use App\Core\Repositories\TaskRepository;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(TaskRepository $repository)
    {
        $currentWork = $repository->userCurrentlyWorkingOn(auth()->user()->id);
        $projects = auth()->user()->projects->load('members')->concat(
            Project::where('public', true)->with('members')->get()
        )->unique();
        $teams = auth()->user()->teams->load('members')->concat(
            Team::where('public', true)->with('members')->get()
        )->unique();
        $offices = auth()->user()->offices->load('members')->concat(
            Office::where('public', true)->with('members')->get()
        )->unique();

        auth()->user()->setAppends(['unread_direct_messages']);

        return view('home', ['data' => ['currentWork' => $currentWork, 'projects' => $projects, 'teams' => $teams, 'offices' => $offices]]);
    }
}
