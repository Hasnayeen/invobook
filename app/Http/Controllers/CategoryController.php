<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\CategoryFormRequest;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();

        return response()->json([
            'status'     => 'success',
            'categories' => $categories,
        ]);
    }

    /**
     * Handle the process of storing new category
     * 
     * @return $category
     */
    public function store(CategoryFormRequest $request)
    {
    	return response()->json([
    		'category' => $request->handle()
    	], 200);
    }
}