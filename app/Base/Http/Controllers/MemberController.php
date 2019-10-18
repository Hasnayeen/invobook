<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\User;
use App\Base\Utilities\GroupTrait;
use App\Base\Exceptions\UserIsNotMember;
use App\Base\Notifications\BecameNewMember;
use App\Base\Exceptions\UserIsAlreadyMember;
use App\Base\Notifications\RevokedMembership;

class MemberController extends Controller
{
    use GroupTrait;

    public function store()
    {
        $this->authorize('add', User::class);
        // Get model of team/project/office depending on request
        $group = $this->getGroupModel();
        if ($this->userIsAlreadyMember($group, request('user_id'))) {
            throw new UserIsAlreadyMember;
        }
        $user = User::select(['id', 'name', 'username', 'avatar'])->find(request('user_id'));
        $group->members()->save($user);

        $user->notify(new BecameNewMember($group, auth()->user()));

        return response()->json([
            'status'   => 'success',
            'message'  => localize('misc.User added', ['type' => request('group_type')]),
            'user'     => $user,
        ]);
    }

    public function destroy()
    {
        $this->authorize('remove', User::class);
        $group = $this->getGroupModel();

        $user = $group->members()->where('user_id', request('user_id'))->first();

        throw_if(! $user, new UserIsNotMember());

        $group->members()->detach($user);

        $user->notify(new RevokedMembership($group, auth()->user()));

        return response()->json([
            'status'   => 'success',
            'message'  => localize('misc.User removed', ['type' => request('group_type')]),
            'user'     => $user,
        ]);
    }

    private function userIsAlreadyMember($group, $userId)
    {
        return $group->members()->where('user_id', $userId)->exists();
    }

    public function index()
    {
        $group = $this->getGroupModel();

        return response()->json([
            'status'  => 'success',
            'items'   => count($group->members),
            'members' => $group->members,
        ]);
    }
}
