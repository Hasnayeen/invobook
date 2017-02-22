<?php

namespace App\Http\Controllers;

use App\Services\ProjectService;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * @var
     */
    private $project;

    /**
     * @param Project $project
     */
    public function __construct(ProjectService $project )
    {

        $this->project = $project;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $projects = $this->project->projectList();

        return view('home',compact('projects'));
    }
}
