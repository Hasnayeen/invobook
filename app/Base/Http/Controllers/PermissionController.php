<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::all()->groupBy('resource');

        return response()->json([
            'status'       => 'success',
            'permissions'  => $permissions,
        ]);
    }
}
