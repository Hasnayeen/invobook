<?php

namespace App\Http\Controllers;

use Exception;
use App\Events\MessageCreated;
use App\Utilities\EntityTrait;
use App\Repositories\MessageRepository;
use App\Http\Requests\StoreMessageRequest;

class MessageController extends Controller
{
    use EntityTrait;

    public function index(MessageRepository $repository)
    {
        $messages = $repository->getAllMessages(request('resource_type'), request('resource_id'));
        try {
            $entity = $this->getEntityModel();

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

    public function store(StoreMessageRequest $request, MessageRepository $repository)
    {
        try {
            $entity = $this->getEntityModel();
            $message = $repository->saveMessage([
                'message'          => request('message'),
                'user_id'          => auth()->user()->id,
                'messageable_type' => request('resource_type'),
                'messageable_id'   => request('resource_id'),
            ]);
            event(new MessageCreated($message));
            $message->load('user');

            return response()->json([
                'status'  => 'success',
                'message' => $message,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
}
