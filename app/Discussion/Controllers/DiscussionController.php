<?php

namespace App\Discussion\Controllers;

use App\Base\Utilities\GroupTrait;
use App\Discussion\Models\Discussion;
use App\Base\Http\Controllers\Controller;
use App\Discussion\Requests\UpdateDiscussionRequest;
use App\Discussion\Repositories\DiscussionRepository;
use App\Discussion\Requests\ValidateDiscussionCreation;

class DiscussionController extends Controller
{
    use GroupTrait;

    public function index(DiscussionRepository $repository)
    {
        $group = $this->getGroupModel();
        if ($group->notOpenForPublic()) {
            abort(401);
        } elseif (auth()->user()) {
            $this->authorize('view', $group);
        }
        $discussions = $repository->getAllDiscussionWithCreator(request('group_type'), request('group_id'), request('cycle_id'));

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
        $message = request('draft') ? localize('misc.Your post has been saved') : localize('misc.New discussion post has been created');

        return response()->json([
            'status'     => 'success',
            'message'    => $message,
            'discussion' => $discussion,
        ], 201);
    }

    /**
     * @param  Discussion $discussion
     * @return Discussion
     */
    public function show(Discussion $discussion)
    {
        $this->authorize('view', $discussion);

        return response()->json($discussion);
    }

    public function delete(Discussion $discussion)
    {
        $this->authorize('delete', $discussion);
        $discussion->delete();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.The discussion has been deleted'),
        ]);
    }

    public function update(UpdateDiscussionRequest $request, Discussion $discussion, DiscussionRepository $repository)
    {
        $this->authorize('update', $discussion);
        $discussion = $repository->update($discussion, $request->all());
        $discussion->load(['creator:id,avatar,name,username', 'category:id,name']);

        return response()->json([
            'status'     => 'success',
            'message'    => localize('misc.The discussion has been updated'),
            'discussion' => $discussion,
        ], 201);
    }
}
