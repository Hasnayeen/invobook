<?php

namespace App\Http\Controllers;

use DateTimeZone;
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
            'status'  => 'success',
            'users'   => $users,
        ]);
    }

    public function sentInvitationToRegister(Request $request)
    {
        try {
            if (! User::where('email', $request->email)->first()) {
                Mail::to($request->email)
                    ->send(new SendInvitationToRegister());

                return response()->json([
                    'status'  => 'success',
                    'message' => trans('misc.Invitation sent successfully'),
                ]);
            }

            return response()->json([
                'status'  => 'error',
                'message' => trans('misc.Email already exist'),
            ], 409);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function show(User $user)
    {
        $user->load('projects', 'teams');

        return view('users.profile', [
            'user'      => $user,
            'timezones' => DateTimeZone::listIdentifiers(),
            'locales'   => config('locale.lang'),
        ]);
    }

    public function checkUsername(Request $request)
    {
        try {
            if (User::where('username', $request->username)->exists()) {
                return response()->json([
                    'status'  => 'error',
                    'message' => trans('misc.Username exists'),
                ], 409);
            }

            return response()->json([
                'status'  => 'success',
                'message' => trans('misc.Username does not exist'),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
}
