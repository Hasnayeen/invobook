<?php

namespace App\Base\Http\Controllers;

use App\TaskManager\Repositories\TaskRepository;

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

        if (request()->segment(1) === 'api') {
            return response()->json([
                'status'       => 'success',
                'current_work' => $currentWork,
            ]);
        }

        return view('home', ['currentWork' => $currentWork]);
    }
}
