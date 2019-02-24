<?php

namespace App\Core\Http\Controllers;

use Illuminate\Http\Request;
use App\Core\Repositories\MessageRepository;

class DirectMessageController extends Controller
{
    public function index(MessageRepository $repository)
    {
        try {
            $messages = $repository->getAllDirectMessages(request('resource_type'), auth()->user()->id, request('resource_id'));

            return response()->json([
                'status'   => 'success',
                'total'    => count($messages),
                'messages' => $messages,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'   => 'error',
                'message'  => 'Something went wrong',
            ]);
        }
    }
}
