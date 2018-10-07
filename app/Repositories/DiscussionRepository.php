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

    public function getAllDiscussionWithCreator($type, $id)
    {
        return $this->model->where(['discussionable_type' => $type, 'discussionable_id' => $id, 'draft' => false, 'archived' => false])->with('creator:id,avatar,name,username')->get(['id', 'name', 'content', 'posted_by', 'created_at']);
    }
}
