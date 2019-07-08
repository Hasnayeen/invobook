<?php

namespace App\Core\Http\Controllers;

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
        $projects = auth()->user()->projects->load('members');
        $teams = auth()->user()->teams->load('members');
        $offices = auth()->user()->offices->load('members');

        auth()->user()->setAppends(['unread_direct_messages']);

        return view('home', ['data' => ['currentWork' => $currentWork, 'projects' => $projects, 'teams' => $teams, 'offices' => $offices]]);
    }
}
