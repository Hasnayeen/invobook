<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use App\Repositories\CommentRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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
     * @param Discussion $discussion
     * @param Request $request
     * @return JsonResponse
     */
    public function create(Discussion $discussion, Request $request): JsonResponse
    {
        $data = $request->validate([
            'body' => 'required',
        ]);

        $data = array_merge($data, ['discussion_id' => $discussion->id, 'user_id' => auth()->user()->id]);

        return response()->json([
                'status' => 'success',
                'comment' => $this->repository
                    ->create($data)
                    ->getAttributes(),
        ], 201);
    }
}