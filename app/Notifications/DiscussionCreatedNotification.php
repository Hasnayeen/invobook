<?php

namespace App\Notifications;

use App\Models\Discussion;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class DiscussionCreatedNotification extends Notification
{
    use Queueable;

    /**
     * @var Discussion
     */
    private $discussion;

    /**
     * @param Discussion $discussion
     */
    public function __construct(Discussion $discussion)
    {
        $this->discussion = $discussion;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via()
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed                                          $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail()
    {
        return (new MailMessage)
            ->from(config('mail.from.address'))
            ->subject('New discussion has opened!')
            ->line('New discussion has been opened - ' . $this->discussion->name)
            ->action('Check it out!', url('discussions/' . $this->discussion->getKey()));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function toArray()
    {
        return [
        ];
    }
}
