<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Role;
use App\Base\Models\Permission;
use App\Base\Models\RoleHasPermission;
use App\Base\Exceptions\OwnerPermissionCantBeRevoked;

class GroupPermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::where('group_related', true)->get()->groupBy('resource');
        $roleHasPermissions = RoleHasPermission::where('group_type', request('group_type'))
                                               ->where('group_id', request('group_id'))
                                               ->where('role_id', request('role_id'))
                                               ->pluck('permission_id');
        $permissions->each(function ($item, $key) use ($roleHasPermissions) {
            $item->transform(function ($item, $key) use ($roleHasPermissions) {
                $item->enabled = $roleHasPermissions->contains($item->id) ? true : false;

                return $item;
            });
        });

        return response()->json([
            'status'       => 'success',
            'permissions'  => $permissions,
        ]);
    }

    public function store(Permission $permission, Role $role)
    {
        $this->authorize('assign', $permission);
        $role->permissions()->attach($permission->id, ['group_type' => request('group_type'), 'group_id' => request('group_id')]);

        return response()->json([
            'status'     => 'success',
            'message'    => localize('misc.Permission has been assigned to the role'),
            'permission' => $permission,
            'role'       => $role,
        ]);
    }

    public function delete(Permission $permission, Role $role)
    {
        $this->authorize('revoke', $permission);
        if ($role->slug === 'owner') {
            throw new OwnerPermissionCantBeRevoked;
        }
        $role->permissionsOnGroup(request('group_type'), request('group_id'))->detach($permission->id);

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Permission has been revoked from the role'),
        ]);
    }
}
