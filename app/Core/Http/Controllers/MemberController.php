<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\User;
use App\Core\Utilities\EntityTrait;
use App\Core\Exceptions\UserIsNotMember;
use App\Core\Notifications\BecameNewMember;
use App\Core\Exceptions\UserIsAlreadyMember;
use App\Core\Notifications\RevokedMembership;

class MemberController extends Controller
{
    use EntityTrait;

    public function store()
    {
        $this->authorize('add', User::class);
        // Get model of team/project/office depending on request
        $entity = $this->getEntityModel();
        if ($this->userIsAlreadyMember($entity, request('user_id'))) {
            throw new UserIsAlreadyMember;
        }
        $user = User::select(['id', 'name', 'username', 'avatar'])->find(request('user_id'));
        $entity->members()->save($user);

        $user->notify(new BecameNewMember($entity, auth()->user()));

        return response()->json([
            'status'   => 'success',
            'message'  => trans('misc.User added', ['type' => request('group_type')]),
            'user'     => $user,
        ]);
    }

    public function destroy()
    {
        $this->authorize('remove', User::class);
        $entity = $this->getEntityModel();

        $user = $entity->members()->where('user_id', request('user_id'))->first();

        throw_if(! $user, new UserIsNotMember());

        $entity->members()->detach($user);

        $user->notify(new RevokedMembership($entity, auth()->user()));

        return response()->json([
            'status'   => 'success',
            'message'  => trans('misc.User removed', ['type' => request('group_type')]),
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
}
