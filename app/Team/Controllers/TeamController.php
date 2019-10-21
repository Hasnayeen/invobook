<?php

namespace App\Team\Controllers;

use App\Team\Models\Team;
use Illuminate\Http\Request;
use App\Base\Http\Controllers\Controller;
use App\Team\Repositories\TeamRepository;

class TeamController extends Controller
{
    public function index()
    {
        $teams = auth()->user()->teams->load('members')->concat(
            Team::where('public', true)->with('members')->get()
        )->unique();

        if (request()->expectsJson()) {
            return response()->json([
                'status'   => 'success',
                'teams'    => $teams,
            ]);
        }

        return redirect('?group_type=teams');
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

        if (request()->expectsJson()) {
            return response()->json([
                'status'        => 'success',
                'team'          => $team,
                'current_cycle' => $team->current_cycle,
            ]);
        }

        return $this->formatRedirect();
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

    private function formatRedirect()
    {
        $url = '?group_type=project&group_id=' . request()->segment(2) . '&tool=' . request()->query('tool') . '&id=' . request()->query('id');

        return redirect($url);
    }
}
