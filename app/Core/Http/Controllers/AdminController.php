<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\UserRepository;

class AdminController extends Controller
{
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->getAllUsers([
            'id', 'name', 'username', 'email', 'timezone', 'avatar', 'role_id',
        ]);

        return view('admin.index', ['users' => $users]);
    }
}
