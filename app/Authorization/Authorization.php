<?php

namespace App\Authorization;

use App\Base\Models\Role;
use App\Base\Models\User;

class Authorization
{
    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function userHasPermissionTo($action, $resource, $resourceId = null, $groupRelated = false, $groupType = null, $groupId = null)
    {
        if ($groupRelated) {
            return (
                (
                    $resourceId ? $this->user->isOwner($resource, $resourceId) : false
                ) || (
                    $this->user->isMember($groupType, $groupId) &&
                    $this->user->isAllowedTo($action, $resource, true, $groupType, $groupId)
                )
            ) && (
                $this->user->isNotForbiddenTo($action, $resource, $groupType, $groupId)
            );
        }

        if ($groupType) {
            return (
                $this->user->isOwner($resource, $resourceId) || (
                    $this->user->isMember($groupType, $groupId) &&
                    $this->user->isAllowedTo($action, $resource, false, $groupType, $groupId)
                )
            ) && (
                $this->user->isNotForbiddenTo($action, $resource, $groupType, $groupId)
            );
        }

        return $this->user->isAllowedTo($action, $resource) &&
            $this->user->isNotForbiddenTo($action, $resource);
    }

    public function userIsMemberOfGroup($groupType, $groupId)
    {
        return $this->user->isMember($groupType, $groupId);
    }

    public function setupDefaultPermissions($group)
    {
        $roles = Role::select(['id'])->get();
        $roles->each(function ($role, $key) use ($group) {
            $ids = $role->defaultPermissions()->wherePivot('group_related', true)->get(['permission_id'])->mapWithKeys(function ($value) use ($role) {
                return [$value->permission_id => ['role_id' => $role->id]];
            })->all();
            $group->permissions()->attach($ids);
        });
    }
}
