<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Role;
use Illuminate\Http\Request;
use App\Core\Exceptions\RoleCantBeDeleted;

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
}
