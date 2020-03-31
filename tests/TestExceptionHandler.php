<?php

namespace Tests;

use Throwable;
use Illuminate\Foundation\Exceptions\Handler;

class TestExceptionHandler extends Handler
{
    public function render($request, Throwable $exception)
    {
        throw $exception;
    }
}
