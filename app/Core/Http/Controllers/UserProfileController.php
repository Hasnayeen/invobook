<?php

namespace App\Core\Http\Controllers;

use App\Core\Http\Requests\UpdateUserProfile;

class UserProfileController extends Controller
{
    public function update(UpdateUserProfile $request)
    {
        auth()->user()->update($request->all());

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.Account profile are updated'),
        ]);
    }
}
