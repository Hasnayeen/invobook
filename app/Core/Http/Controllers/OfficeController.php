<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Office;
use App\Core\Repositories\OfficeRepository;
use App\Core\Http\Requests\StoreOfficeRequest;

class OfficeController extends Controller
{
    public function index()
    {
        abort(404);
    }

    public function show(Office $office)
    {
        $this->authorize('view', $office);
        $office->load('members');

        return view('offices.single', ['office' => $office]);
    }

    public function store(StoreOfficeRequest $request, OfficeRepository $repository)
    {
        try {
            $this->authorize('create', Office::class);
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
        $this->authorize('delete', $office);
        $office->delete();

        return response()->json([
            'status'  => 'success',
            'message' => trans('misc.The office has been deleted'),
        ]);
    }
}
