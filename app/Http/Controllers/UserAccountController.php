<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UpdateUserAccount;

class UserAccountController extends Controller
{
    public function update(UpdateUserAccount $request)
    {
        $user = auth()->user();
        if (request('email')) {
            $user->email = request('email');
        }
        if (request('new_password')) {
            $user->password = bcrypt(request('new_password'));
        }
        $user->save();

        return response()->json([
            'status'  => 'success',
            'message' => 'Account details are updated',
        ]);
    }
}
