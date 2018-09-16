<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();
        $roles->load('permissions');

        return response()->json([
            'status' => 'success',
            'roles'  => $roles,
        ]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:roles|max:255',
        ]);

        $role = Role::create(['name' => strtolower($validatedData['name'])]);
        $role->load('permissions');

        return response()->json([
            'status'  => 'success',
            'message' => 'New role has been created',
            'role'    => $role,
        ], 201);
    }

    public function delete(Role $role)
    {
        $role->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'Role has been deleted',
        ]);
    }
}
