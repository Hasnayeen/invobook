<?php

namespace App\Base\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserUnreadDirectMessageMailable extends Mailable
{
    use Queueable, SerializesModels;

    protected $user;
    protected $numberOfMessage;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($numberOfMessage)
    {
    	$this->numberOfMessage = $numberOfMessage;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.mail')
                    ->subject('You Have Unread Messages')
                    ->with(['numberOfMessage' => $this->numberOfMessage]);
    }
}
