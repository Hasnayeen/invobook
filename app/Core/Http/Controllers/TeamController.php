<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Team;
use Illuminate\Http\Request;
use App\Core\Repositories\TeamRepository;

class TeamController extends Controller
{
    public function index()
    {
        $teams = auth()->user()->teams->load('members')->concat(
            Team::where('public', true)->with('members')->get()
        )->unique();

        return response()->json([
            'status' => 'success',
            'teams'  => $teams,
        ]);
    }

    public function show(Team $team)
    {
        if ($team->notOpenForPublic()) {
            return redirect('login');
        } elseif (auth()->user()) {
            $this->authorize('view', $team);
            auth()->user()->setAppends(['unread_direct_messages']);
        }
        $team->load('members:user_id,username,avatar,name', 'settings', 'tags:tag_id,label');

        return response()->json([
            'status'  => 'success',
            'team'    => $team,
        ]);
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
