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
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $mentionable;

    /**
     * @var string
     */
    public $notifier;

    /**
     * Create a new notification instance.
     *
     * @param string                              $mentionableType
     * @param \Illuminate\Database\Eloquent\Model $mentionable
     */
    public function __construct($mentionableType, $mentionable)
    {
        $this->mentionableType = $mentionableType;
        $this->mentionable = $mentionable;
        $this->notifier = auth()->user();
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param mixed $notifiable
     *
     * @return array
     */
    public function via()
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
    public function toMail()
    {
        return (new MailMessage)
            ->subject("{$this->notifier->name} mentioned you in {$this->mentionableType}.");
    }

    /**
     * Get the array representation of the notification.
     *
     * @param mixed $notifiable
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'subject'     => $this->notifier,
            'action'      => 'mentioned you in',
            'object_type' => $this->mentionableType,
            'object_name' => $this->mentionable->name,
            'object_id'   => $this->mentionable->id,
        ];
    }
}
