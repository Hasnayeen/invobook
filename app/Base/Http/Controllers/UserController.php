<?php

namespace App\Base\Http\Controllers;

use DateTimeZone;
use App\Base\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Base\Repositories\UserRepository;
use App\Base\Mail\SendInvitationToRegister;

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
            $this->authorize('invite', User::class);
            if (! User::where('email', $request->email)->first()) {
                Mail::to($request->email)
                    ->send(new SendInvitationToRegister());

                return response()->json([
                    'status'  => 'success',
                    'message' => localize('misc.Invitation sent successfully'),
                ]);
            }

            return response()->json([
                'status'  => 'error',
                'message' => localize('misc.Email already exist'),
            ], 409);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    public function show(User $user)
    {
        $user->load('projects', 'teams');
        auth()->user()->setAppends(['unread_direct_messages']);

        return view('users.profile', [
            'user'      => $user,
            'timezones' => DateTimeZone::listIdentifiers(),
            'locales'   => config('locale.lang'),
        ]);
    }

    public function checkUsername(Request $request)
    {
        try {
            if ($this->usernameExists($request->username)) {
                return response()->json([
                    'status'  => 'error',
                    'message' => localize('misc.Username exists'),
                ], 409);
            }

            return response()->json([
                'status'  => 'success',
                'message' => localize('misc.Username does not exist'),
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    public function me()
    {
        return response()->json(app('auth')->guard()->user());
    }

    private function usernameExists($username)
    {
        return (auth()->user()->username !== $username) && User::where('username', $username)->exists();
    }
}
