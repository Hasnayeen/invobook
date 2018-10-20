<?php

namespace App\Http\Controllers;

use App\Repositories\TagRepository;

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
            'total'    => \count($tags),
            'tags'     => $tags,
        ]);
    }
}
