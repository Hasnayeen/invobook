<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class BecameNewMember extends Notification
{
    use Queueable;

    /**
     * @var string
     */
    private $groupType;

    /**
     * @var string
     */
    private $groupName;

    /**
     * @param string $groupType
     * @param string $groupName
     */
    public function __construct(string $groupType, string $groupName)
    {
        $this->groupType = $groupType;
        $this->groupName = $groupName;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via($notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed                                          $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('Membership granted')
            ->line(sprintf(
                'You have become a member of the %s: %s',
                $this->groupType,
                $this->groupName
            ));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
