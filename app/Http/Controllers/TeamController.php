<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use App\Services\TeamService;

class TeamController extends Controller
{
    public function show(Team $team)
    {
        $team->load('members');

        return view('teams.single', ['team' => $team]);
    }

    public function store(Request $request, TeamService $service)
    {
        try {
            $team = $service->createNewTeam($request->all());
            create_permissions($team);

            return response()->json([
                'status' => 'success',
                'team'   => $team->load('members'),
            ], 201);
        } catch (Exception $e) {
            throw $e;
        }
    }
}
