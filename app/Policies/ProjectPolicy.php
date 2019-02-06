<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Project;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Project     $project
     * @return mixed
     */
    public function view(User $user, Project $project)
    {
        return $user->hasPermissionTo('view project->' . $project->id);
    }

    /**
     * Determine whether the user can create projects.
     *
     * @param  \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->hasPermissionTo('create project');
    }

    /**
     * Determine whether the user can delete the project.
     *
     * @param  \App\Models\User $user
     * @param  \App\Project     $project
     * @return mixed
     */
    public function delete(User $user, Project $project)
    {
        return $user->hasPermissionTo('delete project->' . $project->id);
    }
}
