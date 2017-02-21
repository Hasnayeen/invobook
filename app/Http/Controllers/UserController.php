<?php

namespace App\Http\Controllers;

use App\Mail\SendInvitationToRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class UserController extends Controller
{
    public function index()
    {
        return view('home');
    }

    public function sentInvitationToRegister(Request $request, $email)
    {
        Mail::to($email)
            ->send(new SendInvitationToRegister());

        return response()->json([
                'status' => 'success',
                'message' => 'Mail sent'
            ]);
    }
}
