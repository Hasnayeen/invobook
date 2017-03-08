<?php

namespace App\Http\Controllers;

use App\Services\TeamService;
use App\Services\OfficeService;
use App\Services\ProjectService;

class HomeController extends Controller
{
    /**
     * @var mixed
     */
    protected $projectService;
    /**
     * @var mixed
     */
    protected $teamService;
    /**
     * @var mixed
     */
    protected $officeService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ProjectService $projectService, TeamService $teamService, OfficeService $officeService)
    {
        $this->middleware('auth');
        $this->projectService = $projectService;
        $this->teamService = $teamService;
        $this->officeService = $officeService;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = $this->projectService->getLatestThreeProject()->toArray();
        $teams = $this->teamService->getLatestThreeTeam()->toArray();
        $offices = $this->officeService->getLatestThreeOffice()->toArray();

        return view('home', compact('projects', 'teams', 'offices'));
    }
}
