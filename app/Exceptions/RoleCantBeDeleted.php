<?php

namespace App\Exceptions;

use Exception;

class RoleCantBeDeleted extends Exception
{
    public function render($request)
    {
        return response()->json([
            'status'   => 'error',
            'message'  => 'Role can not be deleted',
        ], 403);
    }
}
