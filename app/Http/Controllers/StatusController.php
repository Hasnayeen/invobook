<?php

namespace App\Http\Controllers;

use App\Models\Status;
use App\Repositories\StatusRepository;
use App\Http\Requests\ValidateStatusCreation;

class StatusController extends Controller
{
    public function index(StatusRepository $statusRepository)
    {
        $status = $statusRepository->getAllStatus();

        return response()->json([
            'status' => 'success',
            'data'   => $status,
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
            'message' => trans('misc.New status has been created'),
            'task'    => $status,
        ], 201);
    }
}
