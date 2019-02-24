<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\TagRepository;

class TagController extends Controller
{
    protected $repository;

    public function __construct(TagRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $tags = $this->repository->getAllTags();

        return response()->json([
            'status'   => 'success',
            'total'    => count($tags),
            'tags'     => $tags,
        ]);
    }

    public function store()
    {
        $tag = $this->repository->create();

        return response()->json([
            'status'  => 'success',
            'message' => 'Tag has been created',
            'tag'     => $tag,
        ]);
    }
}
