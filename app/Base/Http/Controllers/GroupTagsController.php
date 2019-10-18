<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Tag;
use App\Base\Utilities\GroupTrait;

class GroupTagsController extends Controller
{
    use GroupTrait;

    public function store(Tag $tag)
    {
        $this->authorize('attach', $tag);
        $group = $this->getGroupModel();
        $group->tags()->attach($tag->id);

        return response()->json([
            'status' => 'success',
            'tag'    => $tag,
        ]);
    }

    public function index()
    {
        $group = $this->getGroupModel();

        return response()->json([
            'status'   => 'success',
            'tags'     => $group->tags,
        ]);
    }

    public function delete(Tag $tag)
    {
        $this->authorize('detach', $tag);
        $group = $this->getGroupModel();
        $group->tags()->detach($tag);

        return response()->json([
            'status'  => 'success',
            'message' => 'Tag has been removed from the ' . $group->getType(),
        ]);
    }
}
