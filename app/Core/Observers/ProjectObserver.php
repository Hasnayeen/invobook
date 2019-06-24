<?php

namespace App\Core\Observers;

use App\Core\Models\Project;
use App\Core\Models\ProjectSetting;

class ProjectObserver
{
    /**
     * Handle the task "created" event.
     *
     * @param  \App\Project $project
     * @return void
     */
    public function created(Project $project)
    {
        ProjectSetting::insert(['project_id' => $project->id]);
    }
}
