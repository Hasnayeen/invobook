<?php

namespace App\Project\Observers;

use App\Project\Models\Project;
use App\Project\Models\ProjectSetting;

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
