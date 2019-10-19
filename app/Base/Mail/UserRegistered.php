<?php

namespace App\Base\Mail;

use App\Base\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserRegistered extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    protected $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $name = config('company_name') ?? config('app.name');

        return $this->markdown('emails.user-registered')
                    ->subject('Welcome to ' . $name)
                    ->with(['user' => $this->user]);
    }
}
