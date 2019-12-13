<?php

namespace App\Discussion\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Foundation\Auth\User;
use App\Discussion\Models\Discussion;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Notifications\Messages\BroadcastMessage;

class DiscussionCreatedNotification extends Notification implements ShouldQueue, ShouldBroadcast
{
    use Queueable;

    /**
     * @var string
     */
    public $groupType;

    /**
     * @var int
     */
    public $groupId;

    /**
     * @var Discussion
     */
    private $discussion;

    /**
     * @var User
     */
    private $creator;

    /**
     * @param Discussion $discussion
     */
    public function __construct(Discussion $discussion, User $user)
    {
        $this->discussion = $discussion;
        $this->creator = $user;
        $this->groupType = $discussion->discussionable_type;
        $this->groupId = $discussion->discussionable_id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via()
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
            ->from(config('mail.from.address'))
            ->subject('New discussion has opened!')
            ->line('New discussion has been opened - ' . $this->discussion->name)
            ->action('Check it out!', url($this->groupType . 's/' . $this->groupId . '?tool=discussions&id=' . $this->discussion->id));
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
            'subject'     => $this->creator->only(['id', 'name', 'username', 'avatar']),
            'action'      => 'created new discussion',
            'object_type' => 'discussion',
            'object_name' => $this->discussion->name,
            'object_id'   => $this->discussion->id,
            'url'         => url($this->groupType . 's/' . $this->groupId . '?tool=discussions&id=' . $this->discussion->id),
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
                'subject'     => $this->creator,
                'action'      => 'created new discussion',
                'object_type' => 'discussion',
                'object_name' => $this->discussion->name,
                'object_id'   => $this->discussion->id,
            ],
            'date' => 'Just Now',
        ]);
    }
}
