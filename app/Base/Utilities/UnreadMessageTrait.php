<?php

namespace App\Base\Utilities;

use Carbon\Carbon;

trait UnreadMessageTrait
{
    private function getNumberOfMessages($allUnreadMessageDate)
    {
        $countOfMessage = 0;

        foreach ($allUnreadMessageDate as $unreadMessage) {
            $startTime = Carbon::now();
            $diff = $unreadMessage->updated_at->diffInHours($startTime);

            if($diff >= config('message.unread_direct_message_older_than_hours')){
                $countOfMessage++;
            }
        }

        return $countOfMessage;
    }
}
