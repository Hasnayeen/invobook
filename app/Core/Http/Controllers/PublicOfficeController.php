<?php

namespace App\Core\Http\Controllers;

use App\Core\Models\Office;

class PublicOfficeController extends Controller
{
    public function store(Office $office)
    {
        try {
            $this->authorize('create', Office::class);
            $office->makePublic();

            return response()->json([
                'status'  => 'success',
                'message' => localize('office.Office has been made public'),
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }

    public function delete(Office $office)
    {
        try {
            $this->authorize('create', Office::class);
            $office->makePrivate();

            return response()->json([
                'status'  => 'success',
                'message' => localize('office.Office has been made private')
            ]);
        } catch (Exception $exception) {
            throw $exception;
        }
    }
}
