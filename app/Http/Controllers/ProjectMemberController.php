<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectMemberController extends Controller
{
    public function store(Project $project, Request $request)
    {
        try {
            $user = User::select(['id', 'name', 'username', 'avatar'])->find(request('user_id'));
            $project->members()->save($user);

            return response()->json([
                'status'   => 'success',
                'message'  => 'User added to the project',
                'user'     => $user,
            ]);
        } catch (Exception $e) {
            throw $e;
        }
    }
}
