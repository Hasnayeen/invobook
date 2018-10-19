<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserAvatarController extends Controller
{
    public function store(Request $request)
    {
        try {
            auth()->user()->update([
                'avatar' => $request->file('avatar')->storeAs('avatars', $request->user()->username . '.png', ['disk' => 'public']),
            ]);

            return response()->json([
                'status'  => 'success',
                'message' => 'Avatar uploaded successfully',
            ], 204);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ], 204);
        }
    }
}
