<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\ActivityRepository;

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
