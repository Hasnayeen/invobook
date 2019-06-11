<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Core\Repositories\CommentRepository;
use App\Core\Repositories\MentionRepository;
use App\Core\Http\Requests\ValidateCommentCreation;

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
     * @param  Request      $request
     * @return JsonResponse
     */
    public function store(ValidateCommentCreation $request, MentionRepository $mentionRepository): JsonResponse
    {
        try {
            $comment = $this->repository->create($request->all());
            if (request('mentions')) {
                $mentionRepository->create('comment', $comment);
            }
            $comment->load('user:id,name,avatar');

            return $this->successResponse(
                trans('misc.Comment has been saved'),
                'comment',
                $comment,
                201
            );
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage());
        }
    }

    public function index()
    {
        $comments = $this->repository->getAllCommentsWithUser();

        return $this->successResponse(null, 'comments', $comments);
    }

    public function delete(Comment $comment)
    {
        $this->authorize('delete', $comment);
        $comment->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Comment has been deleted'),
        ]);
    }
}
