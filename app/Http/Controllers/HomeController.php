<?php

namespace App\Http\Controllers;

use App\Services\OfficeService;
use App\Repositories\TeamRepository;
use App\Repositories\ProjectRepository;

class HomeController extends Controller
{
    protected $projectRepository;
    protected $teamRepository;
    protected $officeService;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(ProjectRepository $projectRepository, TeamRepository $teamRepository, OfficeService $officeService)
    {
        $this->projectRepository = $projectRepository;
        $this->teamRepository = $teamRepository;
        $this->officeService = $officeService;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = $this->projectRepository->getLatestProjects(5);
        $teams = $this->teamRepository->getLatestTeams(5);
        $offices = $this->officeService->getLatestThreeOffice();
        $projects->load('members');
        $teams->load('members');
        $offices->load('members');

        return view('home', compact('projects', 'teams', 'offices'));
    }
}
