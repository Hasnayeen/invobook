<?php

namespace App\Base\Http\Controllers;

use App\Base\Utilities\GithubTrait;

class GithubRepoController extends Controller
{
    use GithubTrait;

    public function index()
    {
        return response()->json([
            'status' => 'success',
            'repos'  => $this->getUserRepos(),
        ]);
    }
}
