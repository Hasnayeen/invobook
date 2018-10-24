<?php

namespace App\Listeners;

use App\Contracts\HasNotificationRecipients;
use App\Events\DiscussionCreated;
use App\Notifications\DiscussionCreatedNotification;
use Illuminate\Support\Facades\Notification;

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
