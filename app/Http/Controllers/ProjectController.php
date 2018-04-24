<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Services\MessageService;
use App\Services\ProjectService;
use App\Http\Requests\StoreMessageRequest;
use App\Http\Requests\StoreProjectRequest;

class ProjectController extends Controller
{
    /**
     * @var ProjectService
     */
    private $projectService;
    private $messageService;

    /**
     * @param ProjectService $projectService
     */
    public function __construct(ProjectService $projectService, MessageService $messageService)
    {
        $this->projectService = $projectService;
        $this->messageService = $messageService;
    }

    public function single(Project $project)
    {
        $project->load('members');

        return view('projects.single', ['project' => $project]);
    }

    public function tasks(Project $project)
    {
        return view('projects.tasks', ['project' => $project]);
    }

    public function getAllMessages(Project $project)
    {
        list($messages, $id) = $this->messageService->getAllMessages('project', $project->slug);

        return view('projects.messages', compact('project', 'id', 'messages'));
    }

    public function storeMessage(StoreMessageRequest $request, $project)
    {
        try {
            $message = $this->messageService->saveMessage($request->all(), $project);
            $message->load('user');

            return response()->json([
                'status'  => 'success',
                'message' => $message,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(StoreProjectRequest $request)
    {
        try {
            $project = $this->projectService->storeProject($request->all());

            return response()->json([
                'status'  => 'success',
                'project' => $project,
                ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }
}
