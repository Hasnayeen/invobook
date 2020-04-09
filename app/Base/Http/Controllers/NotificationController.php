<?php

namespace App\Base\Http\Controllers;

use Illuminate\Http\JsonResponse;

class NotificationController extends Controller
{
    public function index(): JsonResponse
    {
        return response()->json([
            'status'        => 'success',
            'notifications' => auth()->user()->notifications,
        ]);
    }

    public function update(): JsonResponse
    {
        auth()->user()->unreadNotifications->markAsRead();

        return response()->json([
            'status'  => 'success',
            'message' => 'Notifications are marked as read',
        ]);
    }
}
