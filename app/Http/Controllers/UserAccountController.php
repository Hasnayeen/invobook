<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserAccount;

class UserAccountController extends Controller
{
    public function update(UpdateUserAccount $request)
    {
        $user = auth()->user();
        if ($request->get('name')) {
            $user->name = $request->get('name');
        }
        if ($request->get('bio')) {
            $user->bio = $request->get('bio');
        }
        if ($request->get('designation')) {
            $user->designation = $request->get('designation');
        }
        if ($request->get('timezone')) {
            $user->timezone = $request->get('timezone');
        }
        if ($request->get('week_start')) {
            $user->week_start = $request->get('week_start');
        }
        if ($request->get('email')) {
            $user->email = $request->get('email');
        }
        if ($request->get('new_password')) {
            $user->password = bcrypt($request->get('new_password'));
        }
        $user->save();

        return response()->json([
            'status'  => 'success',
            'message' => 'Account details are updated',
        ]);
    }
}
