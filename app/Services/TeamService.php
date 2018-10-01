<?php

namespace App\Services;

use App\Repositories\TeamRepository;
use Illuminate\Support\Facades\Auth;

class TeamService
{
    protected $teamRepository;

    public function __construct(TeamRepository $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    public function getLatestThreeTeam()
    {
        return $this->teamRepository->getLatestThreeTeam();
    }

    public function createNewTeam($data)
    {
        $team = $this->teamRepository->createNewTeam(array_merge(
            $data,
            [
                'owner_id' => Auth::user()->id,
            ]
        ));
        $team->members()->save(Auth::user());
        $team->load('members');

        return $team;
    }
}
