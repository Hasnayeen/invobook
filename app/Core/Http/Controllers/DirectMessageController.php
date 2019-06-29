<?php

namespace App\Core\Http\Controllers;

use App\Core\Repositories\DirectMessageRepository;
use App\Core\Http\Requests\StoreDirectMessageRequest;

class DirectMessageController extends Controller
{
    public function index(DirectMessageRepository $repository)
    {
        try {
            $messages = $repository->getAllDirectMessages(auth()->user()->id, request('receiver_id'));

            return response()->json([
                'status'   => 'success',
                'total'    => count($messages),
                'messages' => $messages,
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'   => 'error',
                'message'  => 'Something went wrong',
            ]);
        }
    }

    public function store(StoreDirectMessageRequest $request, DirectMessageRepository $repository)
    {
        try {
            $message = $repository->saveMessage($request->all());
            $message->load('user');

            return response()->json([
                'status'  => 'success',
                'message' => $message,
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }
}
