<?php

namespace App\Discussion\Observers;

use App\Discussion\Models\Discussion;
use App\Base\Utilities\GetRecipientsTrait;
use Illuminate\Support\Facades\Notification;
use App\Discussion\Notifications\DiscussionCreatedNotification;

class DiscussionObserver
{
    use GetRecipientsTrait;

    /**
     * Handle the discussion "created" event.
     *
     * @param  \App\Discussion $discussion
     * @return void
     */
    public function created(Discussion $discussion)
    {
        Notification::send($this->getRecipients($discussion->discussionable(), $discussion->posted_by), new DiscussionCreatedNotification($discussion, $discussion->creator));
    }

    /**
     * Handle the discussion "updated" event.
     *
     * @param  \App\Discussion $discussion
     * @return void
     */
    public function updated(Discussion $discussion)
    {
    }

    /**
     * Handle the discussion "deleted" event.
     *
     * @param  \App\Discussion $discussion
     * @return void
     */
    public function deleted(Discussion $discussion)
    {
    }

    /**
     * Handle the discussion "restored" event.
     *
     * @param  \App\Discussion $discussion
     * @return void
     */
    public function restored(Discussion $discussion)
    {
    }

    /**
     * Handle the discussion "force deleted" event.
     *
     * @param  \App\Discussion $discussion
     * @return void
     */
    public function forceDeleted(Discussion $discussion)
    {
    }
}
