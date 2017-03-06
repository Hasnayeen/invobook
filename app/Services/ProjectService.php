<?php

namespace App\Services;

use App\Repositories\ProjectRepository;

class ProjectService
{
    /**
     * @var mixed
     */
    protected $projectRepository;

    /**
     * @param ProjectRepository $ProjectRepository
     */
    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    /**
     * @return mixed
     */
    public function getLatestThreeProject()
    {
        return $this->projectRepository->getLatestThreeProject();
    }
}
