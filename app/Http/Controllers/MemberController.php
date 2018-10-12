<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Utilities\EntityTrait;
use App\Notifications\BecameNewMember;
use App\Exceptions\UserIsAlreadyMember;

class MemberController extends Controller
{
    use EntityTrait;

    public function store()
    {
        // Get model of team/project/office depending on request
        $entity = $this->getEntityModel();
        if ($this->userIsAlreadyMember($entity, request('user_id'))) {
            throw new UserIsAlreadyMember;
        }
        $user = User::select(['id', 'name', 'username', 'avatar'])->find(request('user_id'));
        $entity->members()->save($user);
        $this->givePermissionTo($user, $entity->id);

        $user->notify(new BecameNewMember($entity, $user, auth()->user()));

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

    public function index()
    {
        $entity = $this->getEntityModel();

        return response()->json([
            'status'  => 'success',
            'items'   => count($entity->members),
            'members' => $entity->members,
        ]);
    }

    private function givePermissionTo(User $user, $entityId)
    {
        $user->givePermissionTo(
            'view ' . request('resource_type') . '->' . $entityId
        );
    }
}
