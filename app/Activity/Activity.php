<?php

namespace App;

use App\Core\Models\Notification;

class Activity
{
    public function getActivitiesForGroup($groupType, $groupId)
    {
        return Notification::where(['group_type' => $groupType, 'group_id' => $groupId])->get()->groupBy('date');
    }
}
