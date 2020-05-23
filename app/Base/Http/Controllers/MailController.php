<?php

namespace App\Base\Http\Controllers;

use App\Base\Jobs\UserUnreadDirectMessageJob;

class MailController extends Controller
{
    public function index()
    {
        // dispatch(new UserUnreadDirectMessageJob());
        UserUnreadDirectMessageJob::dispatch()->delay(now()->addMinutes(1));
        return "mail sent";
    }
}
