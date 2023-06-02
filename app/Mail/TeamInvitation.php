<?php

namespace App\Mail;

use App\Models\TeamInvitation as ModelsTeamInvitation;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\URL;

class TeamInvitation extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public ModelsTeamInvitation $invitation,
    ) {
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: __('You have been invited to join the :team team!', ['team' => $this->invitation->team->name]),
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.team-invitation',
            with: [
                'acceptUrl' => URL::signedRoute('team-invitations.accept', [
                    'invitation' => $this->invitation,
                ]),
                'invitation' => $this->invitation,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
