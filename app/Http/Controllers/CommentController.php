<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Repositories\CommentRepository;

class CommentController extends Controller
{
    /**
     * @var CommentRepository
     */
    private $repository;

    /**
     * @param CommentRepository $repository
     */
    public function __construct(CommentRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @param  Discussion   $discussion
     * @param  Request      $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $data = $request->validate([
                'body'             => 'required',
                'commentable_type' => 'required|string',
                'commentable_id'   => 'required|integer|exists:' . $request->get('commentable_type') . 's,id',
            ]);
            $data['commentable_type'] = $request->get('commentable_type');
            $data['commentable_id'] = $request->get('commentable_id');

            $comment = $this->repository->create($data);

            return $this->successResponse(
                'Comment has been saved',
                'comment',
                $comment,
                201
            );
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage());
        }
    }
}
