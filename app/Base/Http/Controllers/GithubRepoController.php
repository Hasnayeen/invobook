<?php

namespace App\Base\Http\Controllers;

use App\Base\Utilities\GithubTrait;

class GithubRepoController extends Controller
{
    use GithubTrait;

    public function index()
    {
        $token = $this->getAccessToken();
        if ($token) {
            $repos = $this->getUserRepos($token);

            return response()->json([
                'status' => 'success',
                'repos'  => $repos,
            ]);
        }

        return response()->json([
            'status'   => 'error',
            'message'  => 'Github Access Token is not set',
        ], 404);
    }
}
