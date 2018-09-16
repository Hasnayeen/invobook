<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:permissions|max:255',
        ]);

        $permission = Permission::create(['name' => strtolower(request('name'))]);
        $permission->load('roles');

        return response()->json([
            'status'         => 'success',
            'message'        => 'New permission has been created',
            'permission'     => $permission,
        ], 201);
    }
}
