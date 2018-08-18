<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use App\Services\TeamService;
use App\Services\MessageService;
use App\Http\Requests\StoreMessageRequest;

class TeamController extends Controller
{
    public function __construct(MessageService $messageService)
    {
        $this->messageService = $messageService;
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

    public function store(Request $request, TeamService $service)
    {
        try {
            $team = $service->createNewTeam($request->all());

            return response()->json([
                'status' => 'success',
                'team'   => $team->load('members'),
            ], 201);
        } catch (Exception $e) {
            throw $e;
        }
    }
}
