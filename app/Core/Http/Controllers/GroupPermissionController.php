<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Project;
use App\Core\Models\Permission;
use App\Core\Models\RoleHasPermission;

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
}
