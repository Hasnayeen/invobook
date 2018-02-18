<?php

namespace App\Repositories;

use App\Models\Project;

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

    public function getIdFromSlug($slug)
    {
        return $this->model->where('slug', $slug)->first()->id;
    }

    public function storeProject($data)
    {
        return $this->model->create([
            'name'        => $data['name'],
            'slug'        => str_slug($data['name']),
            'description' => $data['description'],
            'office_id'   => $data['office_id'] ?? null,
            'team_id'     => $data['team_id'] ?? null,
        ]);
    }
}
