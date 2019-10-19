<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Cycle;
use App\Base\Http\Requests\ValidateCycleCreation;

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
        if ($this->requestedCycleOverlapWithOtherCycle($request)) {
            return response()->json([
                'status'  => 'error',
                'message' => 'This cycle overlap another cycle, try again',
            ], 409);
        }

        $cycle = Cycle::create([
            'name'           => $request->name,
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

    private function requestedCycleOverlapWithOtherCycle($request)
    {
        return Cycle::where('cyclable_type', $request->group_type)
                    ->where('cyclable_id', $request->group_id)
                    ->where(function ($query) use ($request) {
                        $query->where(function ($query) use ($request) {
                            $query->where('start_date', '<=', $request->start_date)
                                ->where('end_date', '>=', $request->start_date);
                        })
                        ->orWhere(function ($query) use ($request) {
                            $query->where('start_date', '<=', $request->end_date)
                                ->where('end_date', '>=', $request->end_date);
                        })
                        ->orWhere(function ($query) use ($request) {
                            $query->where('start_date', '>=', $request->start_date)
                                ->where('end_date', '<=', $request->end_date);
                        })
                        ->orWhere(function ($query) use ($request) {
                            $query->where('start_date', '<=', $request->start_date)
                                ->where('end_date', '>=', $request->end_date);
                        });
                    })
                    ->exists();
    }
}
