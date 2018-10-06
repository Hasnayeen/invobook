<?php

namespace App\Http\Controllers;

use App\Models\Discussion;
use App\Repositories\DiscussionRepository;
use App\Http\Requests\ValidateDiscussionCreation;

class DiscussionController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function store(ValidateDiscussionCreation $request, DiscussionRepository $repository)
    {
        $discussion = $repository->create($request->all());
        $message = request('draft') ? 'Your post has been saved' : 'New discussion post has been created';

        return response()->json([
            'status'     => 'success',
            'message'    => $message,
            'discussion' => $discussion,
        ], 201);
    }
}
