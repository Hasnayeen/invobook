<?php

namespace App\Http\Controllers;

use App\Services\MessageService;
use App\Services\ProjectService;
use App\Http\Requests\StoreMessageRequest;

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

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        try {
            $projects = $this->projectService->getAllProjects()->toArray();

            return view('projects.index', compact('projects'));
        } catch (Exception $e) {
            throw $e;
        }
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function single()
    {
        return view('projects.single');
    }

    //View for task borard
    public function tasks()
    {
        return view('projects.tasks');
    }

    public function getAllMessages($project)
    {
        list($messages, $id) = $this->messageService->getAllMessages('project', $project);

        return view('projects.messages', compact('project', 'id', 'messages'));
    }

    public function storeMessage(StoreMessageRequest $request, $project)
    {
        try {
            $message = $this->messageService->saveMessage($request->all(), $project);

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
}
