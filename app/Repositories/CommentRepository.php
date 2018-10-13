<?php

namespace App\Repositories;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Model;

class CommentRepository
{
    /**
     * @var Comment
     */
    private $model;

    /**
     * @param Comment $comment
     */
    public function __construct(Comment $comment)
    {
        $this->model = $comment;
    }

    /**
     * @param  array         $data
     * @return Comment|Model
     */
    public function create(array $data): Comment
    {
        return $this->model->query()->create([
            'user_id'          => auth()->user()->id,
            'commentable_type' => $data['commentable_type'],
            'commentable_id'   => $data['commentable_id'],
            'body'             => $data['body'],
        ]);
    }
}
