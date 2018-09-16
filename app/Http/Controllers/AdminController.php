<?php

namespace App\Http\Controllers;

use App\Repositories\UserRepository;

class AdminController extends Controller
{
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->getAllUsers([
            'name', 'username', 'email', 'timezone', 'avatar',
        ]);

        return view('admin.index', ['users' => $users]);
    }
}
