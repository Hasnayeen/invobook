<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Cycle;
use App\Core\Http\Requests\ValidateCycleCreation;

class CycleController extends Controller
{
    public function index()
    {
        $cycles = Cycle::where([
            'cyclable_type' => request('group_type'),
            'cyclable_id'   => request('group_id'),
        ])->get();

        return response()->json([
            'status'     => 'success',
            'cycles'     => $cycles,
        ]);
    }

    public function store(ValidateCycleCreation $request)
    {
        $this->authorize('create', Cycle::class);
        $cycle = Cycle::create([
            'name'           => $request->name ?? null,
            'start_date'     => $request->start_date,
            'end_date'       => $request->end_date,
            'cyclable_type'  => $request->group_type,
            'cyclable_id'    => $request->group_id,
        ]);

        return $this->successResponse(
            'misc.New cycle has been created',
            'cycle',
            $cycle,
            201
        );
    }
}
