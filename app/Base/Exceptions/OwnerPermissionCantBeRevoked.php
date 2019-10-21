<?php

namespace App\Base\Exceptions;

use Exception;

class OwnerPermissionCantBeRevoked extends Exception
{
    /**
     * Render the exception as an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render()
    {
        return response()->json([
            'status'   => 'error',
            'message'  => 'Can\'t revoke permission from the role "Owner"',
        ], 403);
    }
}
