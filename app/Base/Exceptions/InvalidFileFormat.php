<?php

namespace App\Base\Exceptions;

use Exception;

class InvalidFileFormat extends Exception
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
            'message'  => 'Unsupported media type',
        ], 415);
    }
}
