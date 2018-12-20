<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use App\Repositories\TeamRepository;

class TeamController extends Controller
{
    public function index()
    {
        abort(404);
    }

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

            return $this->successResponse(
                trans('misc.New team has been created'),
                'team',
                $team,
                201
            );
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    public function delete(Team $team)
    {
        $team->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.The team has been deleted'),
        ]);
    }
}
