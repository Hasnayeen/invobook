<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Services\MessageService;
use App\Http\Requests\StoreMessageRequest;

class TeamController extends Controller
{
    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
    }

    public function index()
    {
        return view('teams.single');
    }

    public function getAllMessages($team)
    {
        list($messages, $id) = $this->messageService->getAllMessages('team', $team);

        return view('teams.messages', compact('team', 'id', 'messages'));
    }

    public function storeMessage(StoreMessageRequest $request, $team)
    {
        try {
            $message = $this->messageService->saveMessage($request->all(), $team);

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

    public function show(Team $team)
    {
        $team->load('members');

        return view('teams.single', ['team' => $team]);
    }
}
