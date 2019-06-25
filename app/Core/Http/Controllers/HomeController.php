<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\TeamRepository;
use App\Core\Repositories\OfficeRepository;
use App\Core\Repositories\ProjectRepository;

class HomeController extends Controller
{
    protected $projectRepository;
    protected $teamRepository;
    protected $officeRepository;

    public function __construct(ProjectRepository $projectRepository, TeamRepository $teamRepository, OfficeRepository $officeRepository)
    {
        $this->projectRepository = $projectRepository;
        $this->teamRepository = $teamRepository;
        $this->officeRepository = $officeRepository;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = auth()->user()->projects;
        $teams = auth()->user()->teams;
        $offices = auth()->user()->offices;

        $projects->load('members');
        $teams->load('members');
        $offices->load('members');

        return view('home', ['data' => ['projects' => $projects, 'teams' => $teams, 'offices' => $offices]]);
    }
}
