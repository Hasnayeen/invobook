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
            'category_id'         => $data['category_id'],
            'raw_content'         => $data['raw_content'],
            'draft'               => $data['draft'],
            'posted_by'           => auth()->user()->id,
            'discussionable_type' => $data['discussionable_type'],
            'discussionable_id'   => $data['discussionable_id'],
            'cycle_id'            => $data['cycle_id'] ?? null,
        ]);
    }

    public function getAllDiscussionWithCreator($type, $entityId)
    {
        return $this->model->where(['discussionable_type' => $type, 'discussionable_id' => $entityId, 'draft' => false, 'archived' => false])->with(['creator:id,avatar,name,username', 'category:id,name'])->get(['id', 'name', 'content', 'posted_by', 'created_at', 'category_id']);
    }

    public function update(Discussion $discussion, $data)
    {
        $discussion->update($data);

        return $discussion;
    }
}
