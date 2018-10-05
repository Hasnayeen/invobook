<?php

namespace App\Http\Controllers;

use App\Models\Activity;

class ActivityController extends Controller
{
    public function index()
    {
        $query = Activity::with(['causer:id,name,username', 'subject:id,name']);
        $query = request('user') ? $query->where('causer_id', request('user')) : $query;
        $query = request('date') ? $query->whereDate('created_at', request('date')) : $query;
        $activities = $query->get()->groupBy('date');

        return response()->json([
            'status'     => 'success',
            'activities' => $activities,
        ]);
    }
}
