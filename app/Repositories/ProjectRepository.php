<?php

namespace App\Repositories;

use App\Models\Project;

class ProjectRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Project $project
     */
    public function __construct(Project $project)
    {
        $this->model = $project;
    }

    /**
     * @return mixed
     */
    public function getLatestThreeProject()
    {
        return $this->model->orderBy('created_at', 'desc')->take(3)->get();
    }
}
