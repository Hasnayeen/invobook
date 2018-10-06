<?php

namespace App\Repositories;

use App\Models\Discussion;

class DiscussionRepository
{
    protected $model;

    public function __construct(Discussion $discussion)
    {
        $this->model = $discussion;
    }

    public function create($data)
    {
        return $this->model->create([
            'name'                => $data['name'],
            'content'             => $data['content'],
            'raw_content'         => $data['raw_content'],
            'draft'               => $data['draft'],
            'posted_by'           => auth()->user()->id,
            'discussionable_type' => $data['discussionable_type'],
            'discussionable_id'   => $data['discussionable_id'],
        ]);
    }
}
