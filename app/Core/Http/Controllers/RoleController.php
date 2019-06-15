<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Role;

class RoleController extends Controller
{
    public function index()
    {
        $roles = Role::all();

        return response()->json([
            'status' => 'success',
            'roles'  => $roles,
        ]);
    }
}
