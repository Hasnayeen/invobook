<?php

namespace App\Core\Repositories;

use App\Core\Models\Comment;
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
            'commentable_type' => $data['group_type'],
            'commentable_id'   => $data['group_id'],
            'body'             => $data['body'],
        ]);
    }

    /**
     * @param string $groupType
     * @param int    $groupId
     *
     * @return Collection
     */
    public function getAllCommentsWithUser(string $groupType, int $groupId): Collection
    {
        return $this->model
            ->where(['commentable_type' => $groupType, 'commentable_id' => $groupId])
            ->with('user:id,name,avatar')
            ->get();
    }
}
