<?php

namespace App\Http\Controllers;

use Spatie\Activitylog\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        $query = Activity::query();
        $query = request('user') ? $query->where('causer_id', request('user')) : $query;
        $query = request('date') ? $query->whereDate('created_at', request('date')) : $query;
        $activities = $query->get();

        return response()->json([
            'status'     => 'success',
            'activities' => $activities,
        ]);
    }
}
