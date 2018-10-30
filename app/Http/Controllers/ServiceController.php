<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function store(Request $request)
    {
        try {
            $data = $request->validate([
                'name'         => 'required|string',
                'access_token' => 'required|string',
            ]);
            Service::create([
                'name'         => $data['name'],
                'access_token' => encrypt($data['access_token']),
                'enabled'      => true,
            ]);

            return response()->json([
                'status'  => 'success',
                'message' => 'Service added successfully',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status'  => 'error',
                'message' => $exception->getMessage(),
            ]);
        }
    }

    public function index()
    {
        $services = Service::select(['name', 'enabled'])->get();

        return response()->json([
            'status'   => 'success',
            'services' => $services,
        ]);
    }
}
