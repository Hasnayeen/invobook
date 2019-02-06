<?php

namespace App\Notifications;

use App\Models\User;
use App\Models\Entity;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

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
     * @var int
     */
    private $entityId;

    /**
     * @var \App\Models\User
     */
    private $adder;

    /**
     * @param string $entityType
     * @param string $entityName
     */
    public function __construct(Entity $entity, User $adder)
    {
        $this->entityType = $entity->getType();
        $this->entityName = $entity->name;
        $this->entityId = $entity->id;
        $this->adder = $adder;
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
    public function toMail()
    {
        return (new MailMessage)
            ->subject('You have been added to ' . $this->entityName)
            ->line(sprintf(
                '%s added you to the %s: %s',
                $this->adder->name,
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
    public function toArray()
    {
        return [
            'subject'     => $this->adder,
            'action'      => 'added you to',
            'object_type' => $this->entityType,
            'object_name' => $this->entityName,
            'object_id'   => $this->entityId,
        ];
    }

    /**
     * @param  mixed $notifiable
     * @return void
     */
    public function toBroadcast()
    {
        return new BroadcastMessage([
            'subject'     => $this->adder,
            'action'      => 'added you to',
            'object_type' => $this->entityType,
            'object_name' => $this->entityName,
            'object_id'   => $this->entityId,
        ]);
    }
}
