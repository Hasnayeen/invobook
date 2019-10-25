<?php

namespace App\Base\Exceptions;

use Exception;

class GithubTokenNotSet extends Exception
{
    protected $message = 'Github Access Token is not set';
}
