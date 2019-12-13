<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\User;
use App\Base\Models\DirectMessage;

class UserUnreadDirectMessageController extends Controller
{
    public function index()
    {
        try {
            $users = User::where('id', '!=', auth()->user()->id)
                         ->select(['id', 'name', 'username', 'avatar'])
                         ->withCount('unreadMessagesForAuthUser')
                         ->orderBy('unread_messages_for_auth_user_count', 'desc')
                         ->get();

            return response()->json([
                'status'   => 'success',
                'users'    => $users,
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }

    public function update($senderId)
    {
        DirectMessage::where(['sender_id' => $senderId, 'receiver_id' => auth()->user()->id])->update(['read_at' => now()]);

        return response()->json([
            'status' => 'success',
        ]);
    }
}
