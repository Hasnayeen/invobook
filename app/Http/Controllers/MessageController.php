<?php

namespace App\Http\Controllers;

use Exception;
use App\Utilities\EntityTrait;
use App\Repositories\MessageRepository;

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
}
