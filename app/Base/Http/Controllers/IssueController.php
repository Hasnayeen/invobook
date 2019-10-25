<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\GithubRepo;
use App\Base\Utilities\GithubTrait;

class IssueController extends Controller
{
    use GithubTrait;

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
            'issues' => $this->getRepoIssues($repo->github_repo_id),
        ]);
    }
}
