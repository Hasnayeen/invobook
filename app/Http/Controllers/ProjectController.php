<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Repositories\ProjectRepository;
use App\Http\Requests\StoreProjectRequest;

class ProjectController extends Controller
{
    private $projectRepository;

    /**
     * @param \App\Repositories\ProjectRepository $projectRepository
     */
    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    public function show(Project $project)
    {
        $this->authorize('view', $project);
        $project->load('members');

        return view('projects.single', ['project' => $project]);
    }

    public function store(StoreProjectRequest $request)
    {
        try {
            $project = $this->projectRepository->storeProject($request->all());
            $project->members()->save(auth()->user());
            $project->load('members');
            create_permissions($project);

            return response()->json([
                'status'  => 'success',
                'project' => $project,
                'message' => 'New project has been created',
                ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function delete(Project $project)
    {
        $project->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'The project has been deleted',
        ]);
    }
}
