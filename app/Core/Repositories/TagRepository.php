<?php

namespace App\Core\Repositories;

use App\Core\Models\Tag;

class TagRepository
{
    protected $model;

    public function __construct(Tag $tag)
    {
        $this->model = $tag;
    }

    public function getAllTags()
    {
        return $this->model->get(['id', 'label']);
    }

    public function create()
    {
        return $this->model->create([
            'label' => request('label'),
        ]);
    }
}
