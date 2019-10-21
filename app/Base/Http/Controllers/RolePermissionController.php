<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Role;
use Illuminate\Http\Request;
use App\Base\Models\Permission;
use App\Base\Exceptions\OwnerPermissionCantBeRevoked;

class RolePermissionController extends Controller
{
    public function store(Role $role, Permission $permission)
    {
        $this->authorize('assign', $permission);
        $role->defaultPermissions()->attach($permission->id, ['group_related' => $permission->group_related]);
        $role->permissions()->attach($permission->id);

        return response()->json([
            'status'     => 'success',
            'message'    => localize('misc.Permission has been assigned to the role'),
            'permission' => $role->defaultPermissions()->find(request('permission_id')),
            'role'       => $role,
        ]);
    }

    public function delete(Role $role, Permission $permission)
    {
        $this->authorize('revoke', $permission);
        if ($role->slug === 'owner') {
            throw new OwnerPermissionCantBeRevoked;
        }
        $role->defaultPermissions()->detach($permission->id);
        $role->permissions()->detach($permission->id);

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Permission has been revoked from the role'),
        ]);
    }

    public function index(Role $role)
    {
        $permissions = Permission::all()->groupBy('resource');
        $rolePermissions = $role->defaultPermissions;
        $permissions->each(function ($item, $key) use ($rolePermissions) {
            $item->transform(function ($item, $key) use ($rolePermissions) {
                $item->enabled = $rolePermissions->where('action', $item->action)->where('resource', $item->resource)->first() ? true : false;

                return $item;
            });
        });

        return response()->json([
            'status'           => 'success',
            'permissions'      => $permissions,
        ]);
    }
}
