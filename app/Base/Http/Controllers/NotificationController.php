<?php

namespace App\Base\Http\Controllers;

use Illuminate\Http\JsonResponse;

class NotificationController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function index()
    {
        return response()->json([
            'status'        => 'success',
            'notifications' => auth()->user()->unreadNotifications,
        ]);
    }

    /**
     * @return JsonResponse
     */
    public function update(): JsonResponse
    {
        auth()->user()->unreadNotifications->markAsRead();

        return response()->json([
            'status'  => 'success',
            'message' => 'Notifications are marked as read',
        ]);
    }
}
