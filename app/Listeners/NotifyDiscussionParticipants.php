<?php

namespace App\Listeners;

use App\Events\DiscussionCreated;
use App\Contracts\HasNotificationRecipients;
use Illuminate\Support\Facades\Notification;
use App\Notifications\DiscussionCreatedNotification;

class NotifyDiscussionParticipants
{
    /**
     * @param DiscussionCreated $event
     */
    public function handle(DiscussionCreated $event)
    {
        if ($event instanceof HasNotificationRecipients) {
            Notification::send($event->getRecipients(), new DiscussionCreatedNotification($event->discussion));
        }
    }
}
