<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;
use App\Repositories\ProjectRepository;

class ProjectService
{
    /**
     * @var ProjectRepository
     */
    private $projectRepository;

    /**
     * @param ProjectRepository $project
     */
    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    /**
     * @param  array $columns
     * @return mixed
     */
    public function getAllProjects()
    {
        return $this->projectRepository->getAllProjects();
    }

    /**
     * @param  mixed $total
     * @return mixed
     */
    public function getLatestProject($total = 10)
    {
        return $this->projectRepository->getLatestProject($total);
    }

    public function storeProject($data)
    {
        $data['owner_id'] = Auth::user()->id;
        $project = $this->projectRepository->storeProject($data);
        $project->members()->save(Auth::user());
        $project->load('members');

        return $project;
    }
}
