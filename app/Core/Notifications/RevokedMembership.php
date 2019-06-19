<?php

namespace App\Core\Notifications;

use App\Core\Models\User;
use App\Core\Models\Entity;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Messages\BroadcastMessage;

class RevokedMembership extends Notification implements ShouldQueue, ShouldBroadcast
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
     * @var \App\Core\Models\User
     */
    private $remover;

    /**
     * @param string $entityType
     * @param string $entityName
     */
    public function __construct(Entity $entity, User $remover)
    {
        $this->entityType = $entity->getType();
        $this->entityName = $entity->name;
        $this->entityId = $entity->id;
        $this->remover = $remover;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array
     */
    public function via(): array
    {
        return config('notification.channels');
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed                                          $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage())
            ->subject('You have been removed from ' . $this->entityName)
            ->line(sprintf(
                '%s removed you from the %s: %s',
                $this->remover->name,
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
            'subject'     => $this->remover->only(['id', 'name', 'username', 'avatar']),
            'action'      => 'removed you from',
            'object_type' => $this->entityType,
            'object_name' => $this->entityName,
            'object_id'   => $this->entityId,
            'url'         => null,
        ];
    }

    /**
     * @param  mixed $notifiable
     * @return void
     */
    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'data' => [
                'subject'     => $this->remover,
                'action'      => 'removed you from',
                'object_type' => $this->entityType,
                'object_name' => $this->entityName,
                'object_id'   => $this->entityId,
            ],
            'date' => 'Just Now',
        ]);
    }
}
