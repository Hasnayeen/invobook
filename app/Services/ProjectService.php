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
     * @param  mixed $total
     * @return mixed
     */
    public function getLatestProject($total = 10)
    {
        return $this->projectRepository->getLatestProject($total);
    }

    public function storeProject($data)
    {
        return $this->projectRepository->storeProject($data);
    }
}
