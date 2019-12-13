<?php

namespace App\Base\Utilities;

use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Channels\DatabaseChannel;

class DatabaseNotificationChannel extends DatabaseChannel
{
    /**
     * Build an array payload for the DatabaseNotification Model.
     *
     * @param  mixed                                  $notifiable
     * @param  \Illuminate\Notifications\Notification $notification
     * @return array
     */
    protected function buildPayload($notifiable, Notification $notification)
    {
        return [
            'id'         => $notification->id,
            'type'       => get_class($notification),
            'group_type' => $notification->groupType ?? null,
            'group_id'   => $notification->groupId ?? null,
            'data'       => $this->getData($notifiable, $notification),
            'read_at'    => null,
        ];
    }
}
