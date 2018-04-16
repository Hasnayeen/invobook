<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendInvitationToRegister;

class UserController extends Controller
{
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->getAllUsers();

        return response()->json([
            'status' => 'success',
            'data'   => $users,
        ]);
    }

    /**
     * @param Request $request
     */
    public function sentInvitationToRegister(Request $request)
    {
        try {
            Mail::to($request->email)
                ->send(new SendInvitationToRegister());

            return response()->json([
                'status'  => 'success',
                'message' => 'Invitation sent successfully',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * User Profile Page.
     */
    public function profile(User $user)
    {
        $user->load('projects', 'teams');

        return view('users.profile', ['user' => $user]);
    }
}
