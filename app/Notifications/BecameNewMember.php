<?php

namespace App\Notifications;

use App\Models\User;
use App\Models\Entity;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class BecameNewMember extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * @var string
     */
    private $entityType;

    /**
     * @var string
     */
    private $entityName;

    /**
     * @var \App\Models\User
     */
    private $adder;

    /**
     * @var \App\Models\User
     */
    private $added;

    /**
     * @param string $entityType
     * @param string $entityName
     */
    public function __construct(Entity $entity, User $adder, User $added)
    {
        $this->entityType = $entity->getType();
        $this->entityName = $entity->name;
        $this->adder = $adder;
        $this->added = $added;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array
     */
    public function via(): array
    {
        return ['mail', 'database'];
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
            ->subject('You have been added to ' . $this->entityName)
            ->line(sprintf(
                '%s added you to the %s: %s',
                $this->entityType,
                $this->entityName
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
            'type'  => $this->entityType,
            'name'  => $this->entityName,
            'adder' => $this->adder,
            'added' => $this->added,
        ];
    }
}
