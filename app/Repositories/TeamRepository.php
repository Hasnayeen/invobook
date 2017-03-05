<?php

namespace App\Repositories;

use App\Models\Team;

class TeamRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Team $team
     */
    public function __construct(Team $team)
    {
        $this->model = $team;
    }

    /**
     * @return mixed
     */
    public function getLatestThreeTeam()
    {
        return $this->model->orderBy('created_at', 'desc')->take(3)->get();
    }
}
