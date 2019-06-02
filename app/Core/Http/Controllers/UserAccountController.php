<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\User;
use App\Core\Http\Requests\UpdateUserAccount;

class UserAccountController extends Controller
{
    public function update(UpdateUserAccount $request)
    {
        $user = auth()->user();
        if ($request->email && ! User::where('email', $request->email)->exists()) {
            $user->email = $request->get('email');
        }
        if (auth()->user()->username === 'guest') {
            return response()->json([
                'status'  => 'error',
                'message' => localize('misc.Username/Password is not updatable for this account'),
            ]);
        }
        if ($request->username && ! User::where('username', $request->username)->exists()) {
            $user->username = $request->get('username');
        }
        if ($request->get('new_password')) {
            $user->password = bcrypt($request->get('new_password'));
        }
        $user->save();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Account details are updated'),
        ]);
    }
}
