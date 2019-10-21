<?php

namespace App\Team\Repositories;

use App\Team\Models\Team;

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

    public function getLatestTeams($total)
    {
        return $this->model->orderBy('created_at', 'desc')->take($total)->get();
    }

    public function createNewTeam($data)
    {
        return $this->model->create([
            'name'         => $data['name'],
            'description'  => $data['description'],
            'office_id'    => $data['office_id'] ?? null,
            'owner_id'     => auth()->user()->id,
        ]);
    }
}
