<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Team;
use Illuminate\Http\Request;
use App\Core\Repositories\TeamRepository;

class TeamController extends Controller
{
    public function index()
    {
        abort(404);
    }

    public function show(Team $team)
    {
        $this->authorize('view', $team);
        $team->load('members:user_id,username,avatar,name', 'settings');
        auth()->user()->setAppends(['unread_direct_messages']);

        return view('teams.single', ['team' => $team]);
    }

    public function store(Request $request, TeamRepository $repository)
    {
        try {
            $this->authorize('create', Team::class);
            $team = $repository->createNewTeam($request->all());
            $team->members()->save(auth()->user());
            $team->load('members:user_id,username,avatar,name');

            resolve('Authorization')->setupDefaultPermissions($team);

            return $this->successResponse(
                'misc.New team has been created',
                'team',
                $team,
                201
            );
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage());
        }
    }

    public function delete(Team $team)
    {
        $this->authorize('delete', $team);
        $team->delete();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.The team has been deleted'),
        ]);
    }
}
