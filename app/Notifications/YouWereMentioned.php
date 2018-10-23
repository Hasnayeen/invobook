<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class YouWereMentioned extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * @var string
     */
    public $mentionableType;

    /**
     * @var int
     */
    public $mentionableId;

    /**
     * @var string
     */
    public $notifier;

    /**
     * Create a new notification instance.
     *
     * @param string $mentionableType
     * @param int    $mentionableId
     */
    public function __construct($mentionableType, $mentionableId)
    {
        $this->mentionableType = $mentionableType;
        $this->mentionableId = $mentionableId;
        $this->notifier = auth()->user()->username;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     *
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param mixed $notifiable
     *
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject("{$this->notifier} mentioned you in {$this->mentionableType}.");
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     *
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'notifier'       => $this->notifier,
            'username'       => $notifiable->username,
            'type'           => $this->mentionableType,
            'mentionable_id' => $this->mentionableId,
        ];
    }
}
