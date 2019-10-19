<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Base\Utilities\GroupTrait;
use App\Base\Repositories\CommentRepository;
use App\Base\Repositories\MentionRepository;
use App\Base\Http\Requests\ValidateCommentCreation;

class CommentController extends Controller
{
    use GroupTrait;

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
                'misc.Comment has been saved',
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
        $group = $this->getGroupModel();
        if ($group->notOpenForPublic()) {
            abort(401);
        } elseif (auth()->user()) {
            $this->authorize('view', $group);
        }
        $comments = $this->repository->getAllCommentsWithUser(request('commentable_type'), (int) request('commentable_id'));

        return $this->successResponse(null, 'comments', $comments);
    }

    public function delete(Comment $comment)
    {
        $this->authorize('delete', $comment);
        $comment->delete();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Comment has been deleted'),
        ]);
    }
}
