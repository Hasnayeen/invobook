<?php

namespace App\Base\Http\Controllers;

class GithubRepoController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'repos'  => app('github')->getUserRepos(),
        ]);
    }
}
