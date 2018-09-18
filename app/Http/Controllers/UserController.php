<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendInvitationToRegister;

class UserController extends Controller
{
    public function sentInvitationToRegister(Request $request)
    {
        try {
            if (! User::where('email', $request->email)->first()) {
                Mail::to($request->email)
                    ->send(new SendInvitationToRegister());

                return response()->json([
                    'status'  => 'success',
                    'message' => 'Invitation sent successfully',
                ]);
            }

            return response()->json([
                'status'  => 'error',
                'message' => 'Email already exist',
            ], 409);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function profile(User $user)
    {
        $user->load('projects', 'teams');

        return view('users.profile', ['user' => $user]);
    }
}
