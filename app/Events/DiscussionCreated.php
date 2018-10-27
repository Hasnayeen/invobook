<?php

namespace App\Events;

use App\Models\User;
use App\Models\Discussion;
use Illuminate\Support\Collection;
use Illuminate\Queue\SerializesModels;
use App\Contracts\HasNotificationRecipients;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class DiscussionCreated implements HasNotificationRecipients
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Discussion
     */
    public $discussion;

    /**
     * @param Discussion $discussion
     */
    public function __construct(Discussion $discussion)
    {
        $this->discussion = $discussion;
    }

    /**
     * Returns collection of users associated with project/office/team under which
     * the discussion is created - filters out the author of discussion.
     *
     * @return Collection
     */
    public function getRecipients(): Collection
    {
        return $this->discussion->discussionable()->first()->members()->get()
            ->filter(function (User $user) {
                return $user->getKey() !== $this->discussion->posted_by;
            });
    }
}
