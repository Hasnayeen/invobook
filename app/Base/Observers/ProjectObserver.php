<?php

namespace App\Base\Observers;

use App\Base\Models\Project;
use App\Base\Models\ProjectSetting;

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
