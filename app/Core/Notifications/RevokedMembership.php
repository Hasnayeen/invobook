<?php

namespace App\Core\Notifications;

use App\Core\Models\User;
use App\Core\Models\Entity;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;

class RevokedMembership extends Notification implements ShouldQueue
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
     * @var \App\Core\Models\User
     */
    private $remover;

    /**
     * @var \App\Core\Models\User
     */
    private $removed;

    /**
     * @param string $entityType
     * @param string $entityName
     */
    public function __construct(Entity $entity, User $remover, User $removed)
    {
        $this->entityType = $entity->getType();
        $this->entityName = $entity->name;
        $this->remover = $remover;
        $this->removed = $removed;
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
            'type'    => $this->entityType,
            'name'    => $this->entityName,
            'remover' => $this->remover,
            'removed' => $this->removed,
        ];
    }
}
