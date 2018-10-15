<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserProfile;

class UserProfileController extends Controller
{
    public function update(UpdateUserProfile $request)
    {
        $request->user()->update($request->all());

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Account profile are updated'),
        ]);
    }
}
