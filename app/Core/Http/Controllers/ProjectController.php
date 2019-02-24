<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Project;
use App\Core\Repositories\ProjectRepository;
use App\Core\Http\Requests\StoreProjectRequest;

class ProjectController extends Controller
{
    public function index()
    {
        abort(404);
    }

    public function show(Project $project)
    {
        $project->load('members');

        return view('projects.single', ['project' => $project]);
    }

    public function store(StoreProjectRequest $request, ProjectRepository $repository)
    {
        try {
            $project = $repository->storeProject($request->all());
            $project->members()->save(auth()->user());
            $project->load('members');
            create_permissions($project);

            return $this->successResponse(
                trans('misc.New project has been created'),
                'project',
                $project,
                201
            );
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    public function delete(Project $project)
    {
        $project->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.The project has been deleted'),
        ]);
    }
}
