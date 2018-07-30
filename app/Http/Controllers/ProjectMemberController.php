<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Exceptions\UserIsAlreadyMember;

class ProjectMemberController extends Controller
{
    public function store(Project $project, Request $request)
    {
        if ($this->userIsAlreadyMember($project, request('user_id'))) {
            throw new UserIsAlreadyMember;
        }
        $user = User::select(['id', 'name', 'username', 'avatar'])->find(request('user_id'));
        $project->members()->save($user);

        return response()->json([
            'status'   => 'success',
            'message'  => 'User added to the project',
            'user'     => $user,
        ]);
    }

    private function userIsAlreadyMember($project, $userId)
    {
        return $project->members()->where('user_id', $userId)->exists();
    }
}
