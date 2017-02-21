<?php

namespace App\Http\Controllers;

use App\Repositories\Eloquents\ProjectRepository as Project;
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
    public function __construct(Project $project )
    {

        $this->project = $project;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $projects = $this->project->all();

        return view('home',compact('projects'));
    }
}
