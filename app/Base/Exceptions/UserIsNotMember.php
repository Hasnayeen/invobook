<?php

namespace App\Base\Exceptions;

use Exception;

class UserIsNotMember extends Exception
{
    public function render()
    {
        return response()->json([
            'status'   => 'error',
            'message'  => 'User is not a member',
        ], 409);
    }
}
