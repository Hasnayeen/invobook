<?php

namespace App\Http\Controllers;

use App\Utilities\GithubTrait;

class GithubRepoController extends Controller
{
    use GithubTrait;

    public function index()
    {
        $repos = $this->getUserRepos();

        return response()->json([
            'status' => 'success',
            'repos'  => $repos,
        ]);
    }
}
