<?php

namespace App\Base\Http\Controllers;

use App\Base\Models\Service;
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
            $service = Service::where('name', $data['name'])->first();
            $service->access_token = encrypt($data['access_token']);
            $service->enabled = true;
            $service->active = true;
            $service->save();

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
        $services = Service::select(['name', 'enabled', 'active'])->get();

        return response()->json([
            'status'   => 'success',
            'services' => $services,
        ]);
    }

    public function update($service)
    {
        $service = Service::whereName($service)->first();
        $service->enabled = (bool) request('status');
        $service->save();

        return response()->json([
            'status'   => 'success',
            'message'  => ucfirst($service->name) . ' integration has been ' . ($service->enabled ? 'enabled' : 'disabled'),
        ]);
    }
}
