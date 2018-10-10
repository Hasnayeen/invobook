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
            'discussion_id' => $data['discussion_id'],
            'user_id'       => $data['user_id'],
            'body'          => $data['body'],
        ]);
    }
}
