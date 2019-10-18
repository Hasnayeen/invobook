<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Project;

class PublicProjectController extends Controller
{
    public function store(Project $project)
    {
        try {
            $this->authorize('create', Project::class);
            $project->makePublic();

            return response()->json([
                'status'  => 'success',
                'message' => localize('project.Project has been made public'),
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }

    public function delete(Project $project)
    {
        try {
            $this->authorize('create', Project::class);
            $project->makePrivate();

            return response()->json([
                'status'  => 'success',
                'message' => localize('project.Project has been made private'),
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }
}
