<?php

namespace App\Base\Notifications;

use App\Base\Models\User;
use App\Base\Models\Group;
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
    private $groupType;

    /**
     * @var string
     */
    private $groupName;

    /**
     * @var int
     */
    private $groupId;

    /**
     * @var \App\Base\Models\User
     */
    private $remover;

    /**
     * @param Group $group
     * @param User  $remover
     *
     * @return void
     */
    public function __construct(Group $group, User $remover)
    {
        $this->groupType = $group->getType();
        $this->groupName = $group->name;
        $this->groupId = $group->id;
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
            ->subject('You have been removed from ' . $this->groupName)
            ->line(sprintf(
                '%s removed you from the %s: %s',
                $this->remover->name,
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
            'subject'     => $this->remover->only(['id', 'name', 'username', 'avatar']),
            'action'      => 'removed you from',
            'object_type' => $this->groupType,
            'object_name' => $this->groupName,
            'object_id'   => $this->groupId,
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
                'object_type' => $this->groupType,
                'object_name' => $this->groupName,
                'object_id'   => $this->groupId,
            ],
            'date' => 'Just Now',
        ]);
    }
}
