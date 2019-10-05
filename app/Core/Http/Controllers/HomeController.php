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
        auth()->user()->setAppends(['unread_direct_messages']);

        return view('home', ['currentWork' => $currentWork]);
    }
}
