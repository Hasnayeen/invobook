<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Repositories\OfficeRepository;
use App\Http\Requests\StoreOfficeRequest;

class OfficeController extends Controller
{
    public function index()
    {
        abort(404);
    }

    public function show(Office $office)
    {
        $office->load('members');

        return view('offices.single', ['office' => $office]);
    }

    public function store(StoreOfficeRequest $request, OfficeRepository $repository)
    {
        try {
            $office = $repository->store($request->all());
            $office->members()->save(auth()->user());
            $office->load('members');
            create_permissions($office);

            return $this->successResponse(
                trans('misc.New office has been created'),
                'office',
                $office,
                201
            );
        } catch (Exception $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    public function delete(Office $office)
    {
        $office->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.The office has been deleted'),
        ]);
    }
}
