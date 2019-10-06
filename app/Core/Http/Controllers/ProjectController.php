<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Project;
use App\Core\Repositories\ProjectRepository;
use App\Core\Http\Requests\StoreProjectRequest;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = auth()->user()->projects->load('members')->concat(
            Project::where('public', true)->with('members')->get()
        )->unique();

        return response()->json([
            'status'   => 'success',
            'projects' => $projects,
        ]);
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

        return response()->json([
            'status'  => 'success',
            'project' => $project,
        ]);
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
}
