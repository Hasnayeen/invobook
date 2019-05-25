<?php

namespace App\Authorization;

use App\Core\Models\Role;
use App\Core\Models\User;

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
                    $this->user->isOwner($resource, $resourceId)
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
                (
                    $this->user->isOwner($resource, $resourceId)
                ) || (
                    $this->user->isMember($groupType, $groupId) &&
                    $this->user->isAllowedTo($action, $resource, false, $groupType, $groupId)
                )
            ) && (
                $this->user->isNotForbiddenTo($action, $resource, $groupType, $groupId)
            );
        }

        return
            $this->user->isAllowedTo($action, $resource) &&
            $this->user->isNotForbiddenTo($action, $resource);
    }

    public function setDefaultPermissions($group)
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
