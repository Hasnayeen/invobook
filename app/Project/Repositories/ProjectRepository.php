<?php

namespace App\Project\Repositories;

use App\Project\Models\Project;

class ProjectRepository
{
    protected $model;

    public function __construct(Project $project)
    {
        $this->model = $project;
    }

    public function getAllProjects()
    {
        return $this->model->get(['name', 'description']);
    }

    public function getLatestProjects($total)
    {
        return $this->model->orderBy('created_at', 'desc')->take($total)->get();
    }

    public function storeProject($data)
    {
        return $this->model->create([
            'name'         => $data['name'],
            'description'  => $data['description'],
            'office_id'    => $data['office_id'] ?? null,
            'team_id'      => $data['team_id'] ?? null,
            'owner_id'     => auth()->user()->id,
        ]);
    }
}
