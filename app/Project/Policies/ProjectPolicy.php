<?php

namespace App\Project\Policies;

use App\Base\Models\User;
use App\Project\Models\Project;
use App\Authorization\Authorization;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the project.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Project\Project  $project
     * @return mixed
     */
    public function view(User $user, Project $project)
    {
        return $project->public || (new Authorization($user))->userHasPermissionTo('view', 'project', $project->id, false, 'project', $project->id);
    }

    /**
     * Determine whether the user can create projects.
     *
     * @param  \App\Base\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorization($user))->userHasPermissionTo('create', 'project');
    }

    /**
     * Determine whether the user can delete the project.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Project\Project  $project
     * @return mixed
     */
    public function delete(User $user, Project $project)
    {
        return (new Authorization($user))->userHasPermissionTo('delete', 'project', $project->id, false, 'project', $project->id);
    }

    /**
     * Determine whether the user can change the project settings.
     *
     * @param  \App\Base\Models\User $user
     * @param  \App\Project\Project  $project
     * @return mixed
     */
    public function settings(User $user, Project $project)
    {
        return $user->isMember(request('group_type'), request('group_id')) && ($user->role->slug === 'owner' || $user->role->slug === 'admin');
    }
}
