<?php

namespace App\Project\Controllers;

use App\Project\Models\Project;
use App\Base\Http\Controllers\Controller;
use App\Project\Requests\StoreProjectRequest;
use App\Project\Repositories\ProjectRepository;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = auth()->user()->projects->load('members')->concat(
            Project::where('public', true)->with('members')->get()
        )->unique();

        if (request()->expectsJson()) {
            return response()->json([
                'status'   => 'success',
                'projects' => $projects,
            ]);
        }

        return redirect('?group_type=projects');
    }

    public function show(Project $project)
    {
        if ($project->notOpenForPublic()) {
            return redirect('login');
        } elseif (auth()->user()) {
            $this->authorize('view', $project);
            auth()->user()->setAppends(['unread_direct_messages']);
        }
        $project->load('members:user_id,username,avatar,name', 'settings', 'tags:tag_id,label');

        if (request()->expectsJson()) {
            return response()->json([
                'status'        => 'success',
                'project'       => $project,
                'current_cycle' => $project->current_cycle,
            ]);
        }

        return $this->formatRedirect();
    }

    public function store(StoreProjectRequest $request, ProjectRepository $repository)
    {
        try {
            $this->authorize('create', Project::class);
            $project = $repository->storeProject($request->all());
            $project->members()->save(auth()->user());
            $project->load('members:user_id,username,avatar,name');

            resolve('Authorization')->setupDefaultPermissions($project);

            return $this->successResponse(
                'misc.New project has been created',
                'project',
                $project,
                201
            );
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage());
        }
    }

    public function delete(Project $project)
    {
        $this->authorize('delete', $project);
        $project->delete();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.The project has been deleted'),
        ]);
    }

    private function formatRedirect()
    {
        $url = '?group_type=project&group_id=' . request()->segment(2) . '&tool=' . request()->query('tool') . '&id=' . request()->query('id');

        return redirect($url);
    }
}
