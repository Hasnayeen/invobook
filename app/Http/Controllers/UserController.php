<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendInvitationToRegister;

class UserController extends Controller
{
    public function index()
    {
        return view('home');
    }

    /**
     * @param Request $request
     */
    public function sentInvitationToRegister(Request $request)
    {
        try {
            Mail::to($request->email)
                ->send(new SendInvitationToRegister());

            return response()->json([
                'status'  => 'success',
                'message' => 'Invitation sent successfully',
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    /**
     * User Profile Page.
     */
    public function profile()
    {
        return view('users.profile');
    }
}
