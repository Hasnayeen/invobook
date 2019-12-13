<?php

namespace App\Base\Http\Controllers;

use App\Activity\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        $activity = new Activity();
        $activities = $activity->getActivitiesForGroup(request('group_type'), request('group_id'));

        return response()->json([
            'status'     => 'success',
            'activities' => $activities,
        ]);
    }
}
