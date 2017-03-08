<?php

namespace App\Repositories;

use App\Models\Project;

class ProjectRepository
{
    /**
     * @var Project
     */
    private $model;

    /**
     * @param Project $project
     */
    public function __construct(Project $project)
    {
        $this->model = $project;
    }

    /**
     * @param  array $columns
     * @return mixed
     */
    public function getAllProjects($columns = ['*'])
    {
        return $this->model->get($columns);
    }

    /**
     * @return mixed
     */
    public function getLatestThreeProject()
    {
        return $this->model->orderBy('created_at', 'desc')->take(3)->get();
    }
}
