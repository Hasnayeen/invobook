<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Role;

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
