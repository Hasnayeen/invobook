<?php

namespace App\Base\Http\Controllers;

use App\Base\Repositories\UserRepository;

class AdminController extends Controller
{
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->getAllUsers([
            'id', 'name', 'username', 'email', 'timezone', 'avatar', 'role_id',
        ]);
        auth()->user()->setAppends(['unread_direct_messages']);

        return view('admin.index', ['users' => $users]);
    }
}
