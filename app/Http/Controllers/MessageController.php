<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Message;
use App\Events\MessageCreated;
use App\Events\MessageUpdated;
use App\Utilities\EntityTrait;
use App\Repositories\MentionRepository;
use App\Repositories\MessageRepository;
use App\Http\Requests\StoreMessageRequest;

class MessageController extends Controller
{
    use EntityTrait;

    public function index(MessageRepository $repository)
    {
        try {
            $messages = $repository->getAllMessages(request('resource_type'), request('resource_id'));

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

    public function store(StoreMessageRequest $request, MessageRepository $repository, MentionRepository $mentionRepository)
    {
        try {
            $message = $repository->saveMessage([
                'body'             => $request->get('message'),
                'user_id'          => auth()->user()->id,
                'messageable_type' => $request->get('resource_type'),
                'messageable_id'   => $request->get('resource_id'),
            ]);
            if (request('mentions')) {
                $mentionRepository->create('message', $message);
            }
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

    public function update(Message $message, MentionRepository $mentionRepository)
    {
        try {
            $message->update(['body' => request('message')]);

            if (request('mentions')) {
                $mentionRepository->create('message', $message);
            }

            event(new MessageUpdated($message));

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

    public function delete(Message $message)
    {
        $message->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.Message has been deleted'),
        ]);
    }
}
