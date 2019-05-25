<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::all();
        $permissions->load('roles');

        return response()->json([
            'status'       => 'success',
            'permissions'  => $permissions,
        ]);
    }
}
