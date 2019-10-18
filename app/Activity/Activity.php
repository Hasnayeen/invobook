<?php

namespace App\Activity;

use App\Base\Models\Notification;

class Activity
{
    public function getActivitiesForGroup($groupType, $groupId)
    {
        return Notification::where(['group_type' => $groupType, 'group_id' => $groupId])->orderBy('created_at', 'desc')->get()->groupBy('date');
    }
}
