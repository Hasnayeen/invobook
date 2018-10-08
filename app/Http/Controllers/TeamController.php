<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use App\Repositories\TeamRepository;

class TeamController extends Controller
{
    public function show(Team $team)
    {
        $team->load('members');

        return view('teams.single', ['team' => $team]);
    }

    public function store(Request $request, TeamRepository $repository)
    {
        try {
            $team = $repository->createNewTeam($request->all());
            $team->members()->save(auth()->user());
            $team->load('members');
            create_permissions($team);

            return response()->json([
                'status' => 'success',
                'team'   => $team->load('members'),
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
}
