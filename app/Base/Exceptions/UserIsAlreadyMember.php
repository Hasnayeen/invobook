<?php

namespace App\Base\Exceptions;

use Exception;

class UserIsAlreadyMember extends Exception
{
    public function render()
    {
        return response()->json([
            'status'   => 'error',
            'message'  => 'User is already a member',
        ], 409);
    }
}
