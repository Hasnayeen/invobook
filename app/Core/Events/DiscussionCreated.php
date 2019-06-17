<?php

namespace App\Core\Events;

use App\Core\Models\User;
use App\Core\Models\Discussion;
use Illuminate\Support\Collection;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use App\Core\Contracts\HasNotificationRecipients;
use Illuminate\Broadcasting\InteractsWithSockets;

class DiscussionCreated implements HasNotificationRecipients
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * @var Discussion
     */
    public $discussion;

    /**
     * @var User
     */
    public $creator;

    /**
     * @param Discussion $discussion
     */
    public function __construct(Discussion $discussion)
    {
        $this->discussion = $discussion;
        $this->creator = auth()->user();
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
