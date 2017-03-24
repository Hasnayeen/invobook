<?php

namespace App\Http\Controllers;

use App\Services\MessageService;
use App\Http\Requests\StoreMessageRequest;

class OfficeController extends Controller
{
    private $messageService;

    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    public function index()
    {
        return view('offices.single');
    }

    public function getAllMessages($office)
    {
        list($messages, $id) = $this->messageService->getAllMessages('office', $office);

        return view('offices.messages', compact('office', 'id', 'messages'));
    }

    public function storeMessage(StoreMessageRequest $request, $office)
    {
        try {
            $message = $this->messageService->saveMessage($request->all(), $office);

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
