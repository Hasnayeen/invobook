<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\User;
use App\Models\Office;
use App\Models\Project;
use App\Exceptions\UserIsAlreadyMember;

class MemberController extends Controller
{
    public function store()
    {
        // Get model of team/project/office depending on request
        $entity = $this->getEntityModel();
        if ($this->userIsAlreadyMember($entity, request('user_id'))) {
            throw new UserIsAlreadyMember;
        }
        $user = User::select(['id', 'name', 'username', 'avatar'])->find(request('user_id'));
        $entity->members()->save($user);

        return response()->json([
            'status'   => 'success',
            'message'  => 'User added to the ' . request('resource_type'),
            'user'     => $user,
        ]);
    }

    private function userIsAlreadyMember($entity, $userId)
    {
        return $entity->members()->where('user_id', $userId)->exists();
    }

    private function getEntityModel()
    {
        switch (request('resource_type')) {
            case 'team':
                return Team::find(request('resource_id'));
            case 'office':
                return Office::find(request('resource_id'));
            default:
                return Project::find(1);
        }
    }

    public function index()
    {
        $entity = $this->getEntityModel();

        return response()->json([
            'status'  => 'success',
            'items'   => count($entity->members),
            'members' => $entity->members,
        ]);
    }
}
