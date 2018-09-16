<?php

namespace App\Http\Controllers;

use Spatie\Permission\Models\Permission;

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
