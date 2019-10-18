<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Status;
use App\Base\Repositories\StatusRepository;
use App\Base\Http\Requests\ValidateStatusCreation;

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
