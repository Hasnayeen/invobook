<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\GithubRepo;

class IssueController extends Controller
{
    public function index()
    {
        $params = request()->only(['group_type', 'group_id']);
        $repo = GithubRepo::where([
            'entity_type' => $params['group_type'],
            'entity_id' => $params['group_id'],
        ])
            ->first();
        if (!$repo) {
            return response()->json([
                'status' => 'error',
                'issues' => [],
            ], 422);
        }

        return response()->json([
            'status' => 'success',
            'issues' => app('github')->getRepoIssues($repo->github_repo_id),
        ]);
    }
}
