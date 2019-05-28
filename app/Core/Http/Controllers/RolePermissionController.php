<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Role;
use Illuminate\Http\Request;
use App\Core\Models\Permission;
use App\Core\Exceptions\OwnerPermissionCantBeRevoked;

class RolePermissionController extends Controller
{
    public function store(Role $role, Permission $permission)
    {
        $this->authorize('assign', $permission);
        $role->permissions()->attach($permission->id);

        return response()->json([
            'status'     => 'success',
            'message'    => trans('misc.Permission has been assigned to the role'),
            'permission' => $role->permissions()->find(request('permission_id')),
            'role'       => $role,
        ]);
    }

    public function delete(Role $role, Permission $permission)
    {
        $this->authorize('revoke', $permission);
        if ($role->slug === 'owner') {
            throw new OwnerPermissionCantBeRevoked;
        }
        $role->permissions()->detach($permission->id);

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Permission has been revoked from the role'),
        ]);
    }
}
