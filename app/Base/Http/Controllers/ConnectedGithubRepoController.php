<?php

namespace App\Base\Http\Controllers;

use Illuminate\Http\Request;
use App\Base\Models\GithubRepo;

class ConnectedGithubRepoController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'github_repo_id' => 'required',
                'repo_name'      => 'required',
                'entity_type'    => 'required',
                'entity_id'      => 'required',
            ]);
            GithubRepo::firstOrCreate([
                'github_repo_id' => $validatedData['github_repo_id'],
                'repo_name'      => $validatedData['repo_name'],
                'entity_type'    => $validatedData['entity_type'],
                'entity_id'      => $validatedData['entity_id'],
            ]);

            return response()->json([
                'status'  => 'success',
                'message' => 'Github repository connected successfully',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    public function index()
    {
        $repos = GithubRepo::all();

        return response()->json([
            'status'  => 'success',
            'repos'   => $repos,
        ]);
    }
}
