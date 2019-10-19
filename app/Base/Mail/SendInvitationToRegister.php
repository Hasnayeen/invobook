<?php

namespace App\Base\Mail;

use App\Base\Models\Token;
use App\Base\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Queue\SerializesModels;

class SendInvitationToRegister extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(Request $request)
    {
        $token = encrypt($request->role);
        Token::create(['token' => $token, 'email' => $request->email, 'role_id'=> $request->role]);
        $setting = Setting::first();

        return $this->markdown('emails.invite')
                    ->subject(Auth::user()->name . ' invited you to join Goodwork')
                    ->with([
                        'token'   => $token,
                        'name'    => $request->name,
                        'company' => $setting ? $setting->company_name : null,
                    ]);
    }
}
