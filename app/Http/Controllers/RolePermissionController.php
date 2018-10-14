<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Exceptions\OwnerPermissionCantBeRevoked;

class RolePermissionController extends Controller
{
    public function store(Role $role)
    {
        $role->givePermissionTo(request('permission_id'));

        return response()->json([
            'status'     => 'success',
            'message'    => trans('misc.Permission has been assigned to the role'),
            'permission' => $role->permissions()->find(request('permission_id')),
            'role'       => $role,
        ]);
    }

    public function delete(Role $role)
    {
        if ($role->name === 'owner') {
            throw new OwnerPermissionCantBeRevoked;
        }
        $role->revokePermissionTo(request('permission_id'));

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Permission has been revoked from the role'),
        ]);
    }
}
