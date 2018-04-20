<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserAvatarController extends Controller
{
    public function store(Request $request)
    {
        auth()->user()->update([
            'avatar' => $request->file('avatar')->storeAs('avatars', $request->user()->username . '.png', ['disk' => 'public']),
        ]);

        return response()->json([], 204);
    }
}
