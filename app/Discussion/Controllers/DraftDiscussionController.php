<?php

namespace App\Discussion\Controllers;

use App\Base\Utilities\GroupTrait;
use App\Base\Http\Controllers\Controller;
use App\Discussion\Repositories\DiscussionRepository;

class DraftDiscussionController extends Controller
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
        $drafDiscussions = $repository->getAllDraftDiscussionWithCreator(request('group_type'), request('group_id'), request('cycle_id'));

        return response()->json([
            'status'            => 'success',
            'total'             => count($drafDiscussions),
            'draft_discussions' => $drafDiscussions,
        ]);
    }
}
