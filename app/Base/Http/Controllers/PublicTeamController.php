<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Team;

class PublicTeamController extends Controller
{
    public function store(Team $team)
    {
        try {
            $this->authorize('create', Team::class);
            $team->makePublic();

            return response()->json([
                'status'  => 'success',
                'message' => localize('team.Team has been made public'),
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }

    public function delete(Team $team)
    {
        try {
            $this->authorize('create', Team::class);
            $team->makePrivate();

            return response()->json([
                'status'  => 'success',
                'message' => localize('team.Team has been made private'),
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }
}
