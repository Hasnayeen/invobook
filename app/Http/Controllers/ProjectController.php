<?php

namespace App\Http\Controllers;

use App\Services\ProjectService;

class ProjectController extends Controller
{
    /**
     * @var ProjectService
     */
    private $projectService;

    /**
     * @param ProjectService $projectService
     */
    public function __construct(ProjectService $projectService)
    {
        $this->projectService = $projectService;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $projects = $this->projectService->getAllProjects();

        return view('projects.index', compact('projects');
    }

    public function single()
    {
        return view('projects.single');
    }
}
