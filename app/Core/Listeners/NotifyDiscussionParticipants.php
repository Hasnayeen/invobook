<?php

namespace App\Core\Listeners;

use App\Core\Events\DiscussionCreated;
use Illuminate\Support\Facades\Notification;
use App\Core\Contracts\HasNotificationRecipients;
use App\Core\Notifications\DiscussionCreatedNotification;

class NotifyDiscussionParticipants
{
    /**
     * @param DiscussionCreated $event
     */
    public function handle(DiscussionCreated $event)
    {
        if ($event instanceof HasNotificationRecipients) {
            Notification::send($event->getRecipients(), new DiscussionCreatedNotification($event->discussion, $event->creator));
        }
    }
}
