<?php

namespace App\Http\Controllers;

use App\Repositories\ActivityRepository;

class ActivityController extends Controller
{
    public function index(ActivityRepository $repository)
    {
        $activities = $repository->getAllActivities();

        return response()->json([
            'status'     => 'success',
            'activities' => $activities,
        ]);
    }
}
