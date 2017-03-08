<?php

namespace App\Services;

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
     * @return mixed
     */
    public function getLatestThreeProject()
    {
        return $this->projectRepository->getLatestThreeProject();
    }
}
