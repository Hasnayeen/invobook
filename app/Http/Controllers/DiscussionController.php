<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use App\Repositories\DiscussionRepository;
use App\Http\Requests\ValidateDiscussionCreation;

class DiscussionController extends Controller
{
    public function index(DiscussionRepository $repository)
    {
        $discussions = $repository->getAllDiscussionWithCreator(request('resource_type'), request('resource_id'));

        return response()->json([
            'status'      => 'success',
            'total'       => count($discussions),
            'discussions' => $discussions,
        ]);
    }

    public function store(ValidateDiscussionCreation $request, DiscussionRepository $repository)
    {
        $discussion = $repository->create($request->all());
        $discussion->load(['creator:id,avatar,name,username', 'category:id,name']);
        $message = request('draft') ? trans('misc.Your post has been saved') : trans('misc.New discussion post has been created');

        return response()->json([
            'status'     => 'success',
            'message'    => $message,
            'discussion' => $discussion,
        ], 201);
    }

    public function delete(Discussion $discussion)
    {
        $discussion->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.The discussion has been deleted'),
        ]);
    }
}
