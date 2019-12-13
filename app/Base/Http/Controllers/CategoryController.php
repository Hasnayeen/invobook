<?php

namespace App\Base\Http\Controllers;

use App\Base\Repositories\CategoryRepository;
use App\Base\Http\Requests\CategoryStoreRequest;

class CategoryController extends Controller
{
    private $repository;

    public function __construct(CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $categories = $this->repository->getAllCategories();

        return response()->json([
            'status'     => 'success',
            'categories' => $categories,
        ]);
    }

    public function store(CategoryStoreRequest $request)
    {
        $category = $this->repository->create($request->all());

        return $this->successResponse(
            'misc.New category has been created',
            'category',
            $category,
            201
        );
    }
}
