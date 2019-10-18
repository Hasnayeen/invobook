<?php

namespace Tests;

use Exception;
use Illuminate\Foundation\Exceptions\Handler;

class TestExceptionHandler extends Handler
{
    public function render($request, Exception $exception)
    {
        throw $exception;
    }
}
