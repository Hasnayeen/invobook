<?php

namespace App\Base\Http\Controllers;

use Illuminate\Http\JsonResponse;

class UnreadNotificationController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'status'        => 'success',
            'notifications' => auth()->user()->unreadNotifications,
        ]);
    }
}
