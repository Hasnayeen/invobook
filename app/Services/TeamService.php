<?php

namespace App\Services;

use App\Repositories\TeamRepository;

class TeamService
{
    /**
     * @var mixed
     */
    protected $teamRepository;

    /**
     * @param TeamRepository $teamRepository
     */
    public function __construct(TeamRepository $teamRepository)
    {
        $this->teamRepository = $teamRepository;
    }

    /**
     * @return mixed
     */
    public function getLatestThreeTeam()
    {
        return $this->teamRepository->getLatestThreeTeam();
    }
}
