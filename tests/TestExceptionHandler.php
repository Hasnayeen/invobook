<?php

namespace Tests;

use Exception;
use Illuminate\Foundation\Exceptions\Handler;

class TestExceptionHandler extends Handler
{
    public function render($request, Exception $e)
    {
        throw $e;
    }

    public function report(Exception $e)
    {
    }
}
