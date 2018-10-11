<?php

namespace App\Http\Controllers;

use App\Models\Office;
use App\Repositories\OfficeRepository;
use App\Http\Requests\StoreOfficeRequest;

class OfficeController extends Controller
{
    public function show(Office $office)
    {
        $office->load('members');

        return view('offices.single', ['office' => $office]);
    }

    public function store(StoreOfficeRequest $request, OfficeRepository $repository)
    {
        try {
            $office = $repository->store($request->all());
            $office->load('members');
            create_permissions($office);

            return response()->json([
                'status'  => 'success',
                'office'  => $office,
                'message' => 'New office has been created',
                ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function delete(Office $office)
    {
        $office->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'The office has been deleted',
        ]);
    }
}
