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
        if ($office->notOpenForPublic()) {
            return redirect('login');
        } elseif (auth()->user()) {
            $this->authorize('view', $office);
            auth()->user()->setAppends(['unread_direct_messages']);
        }
        $office->load('members:user_id,username,avatar,name', 'settings', 'tags:tag_id,label');

        return view('offices.single', ['office' => $office]);
    }

    public function store(StoreOfficeRequest $request, OfficeRepository $repository)
    {
        try {
            $this->authorize('create', Office::class);
            $office = $repository->store($request->all());
            $office->members()->save(auth()->user());
            $office->load('members:user_id,username,avatar,name');

            resolve('Authorization')->setupDefaultPermissions($office);

            return $this->successResponse(
                'misc.New office has been created',
                'office',
                $office,
                201
            );
        } catch (Exception $exception) {
            return $this->errorResponse($exception->getMessage());
        }
    }

    public function delete(Office $office)
    {
        $this->authorize('delete', $office);
        $office->delete();

        return response()->json([
            'status'  => 'success',
            'message' => localize('misc.The office has been deleted'),
        ]);
    }
}
