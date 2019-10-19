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

class BecameNewMember extends Notification implements ShouldQueue, ShouldBroadcast
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
    private $adder;

    /**
     * @param Group $group
     * @param User  $adder
     *
     * @return void
     */
    public function __construct(Group $group, User $adder)
    {
        $this->groupType = $group->getType();
        $this->groupName = $group->name;
        $this->groupId = $group->id;
        $this->adder = $adder;
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
    public function toMail()
    {
        return (new MailMessage())
            ->subject('You have been added to ' . $this->groupName)
            ->line(sprintf(
                '%s added you to the %s: %s',
                $this->adder->name,
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
    public function toArray()
    {
        return [
            'subject'     => $this->adder->only(['id', 'name', 'username', 'avatar']),
            'action'      => 'added you to ' . $this->groupType,
            'object_type' => $this->groupType,
            'object_name' => $this->groupName,
            'object_id'   => $this->groupId,
            'url'         => url($this->groupType . 's/' . $this->groupId),
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
                'subject'     => $this->adder,
                'action'      => 'added you to',
                'object_type' => $this->groupType,
                'object_name' => $this->groupName,
                'object_id'   => $this->groupId,
            ],
            'date' => 'Just Now',
        ]);
    }
}
