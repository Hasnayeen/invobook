<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserAccount;

class UserAccountController extends Controller
{
    public function update(UpdateUserAccount $request)
    {
        $user = auth()->user();
        if ($request->get('email')) {
            $user->email = $request->get('email');
        }
        if ((auth()->user()->username !== 'guest') && $request->get('new_password')) {
            $user->password = bcrypt($request->get('new_password'));
        }
        $user->save();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Account details are updated'),
        ]);
    }
}
