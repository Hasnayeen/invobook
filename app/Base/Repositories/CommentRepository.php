<?php

namespace App\Base\Repositories;

use App\Base\Models\Comment;
use Illuminate\Database\Eloquent\Collection;

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

    /**
     * @param string $commentableType
     * @param int    $commentableId
     *
     * @return Collection
     */
    public function getAllCommentsWithUser(string $commentableType, int $commentableId): Collection
    {
        return $this->model
            ->where(['commentable_type' => $commentableType, 'commentable_id' => $commentableId])
            ->with('user:id,name,avatar')
            ->get();
    }
}
