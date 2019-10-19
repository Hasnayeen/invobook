<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\DirectMessage;
use App\Base\Repositories\DirectMessageRepository;
use App\Base\Http\Requests\StoreDirectMessageRequest;

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

    public function delete(DirectMessage $directMessage)
    {
        $this->authorize('delete', $directMessage);
        $directMessage->delete();

        return response()->json(
            [
                'status'  => 'success',
                'message' => localize('misc.The direct message has been deleted'),
            ]
        );
    }
}
