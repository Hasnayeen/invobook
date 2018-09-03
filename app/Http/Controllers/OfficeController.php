<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Services\MessageService;
use App\Http\Requests\StoreMessageRequest;

class OfficeController extends Controller
{
    private $messageService;

    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    public function show(Office $office)
    {
        $office->load('members');

        return view('offices.single', ['office' => $office]);
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
