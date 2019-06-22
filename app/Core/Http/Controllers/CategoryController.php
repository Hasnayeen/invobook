<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\CategoryRepository;
use App\Core\Http\Requests\CategoryStoreRequest;

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
