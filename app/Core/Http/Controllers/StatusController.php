<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Status;
use App\Core\Repositories\StatusRepository;
use App\Core\Http\Requests\ValidateStatusCreation;

class StatusController extends Controller
{
    public function index(StatusRepository $statusRepository)
    {
        $statuses = $statusRepository->getAllStatus();

        return response()->json([
            'status'   => 'success',
            'statuses' => $statuses,
        ]);
    }

    public function store(ValidateStatusCreation $request)
    {
        $status = Status::create([
            'name'  => $request->input('name'),
            'color' => $request->input('color'),
        ]);
        $status->load([]);

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.New status has been created'),
            'task'    => $status,
        ], 201);
    }
}
