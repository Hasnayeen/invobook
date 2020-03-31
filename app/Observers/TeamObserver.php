<?php

namespace App\Observers;

use App\Team\Models\Team;
use App\Team\Models\TeamSetting;

class TeamObserver
{
    /**
     * Handle the team "created" event.
     *
     * @param  \App\Team $team
     * @return void
     */
    public function created(Team $team)
    {
        TeamSetting::insert(['team_id' => $team->id]);
    }
}
