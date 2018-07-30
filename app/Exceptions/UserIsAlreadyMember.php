<?php

namespace App\Exceptions;

use Exception;

class UserIsAlreadyMember extends Exception
{
    public function render($request)
    {
        return response()->json([
            'status'   => 'error',
            'message'  => 'User is already a member',
        ], 409);
    }
}
