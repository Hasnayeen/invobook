<?php

namespace App\Office\Controllers;

use App\Office\Models\Office;
use App\Base\Http\Controllers\Controller;
use App\Office\Requests\StoreOfficeRequest;
use App\Office\Repositories\OfficeRepository;

class OfficeController extends Controller
{
    public function index()
    {
        $offices = auth()->user()->offices->load('members')->concat(
            Office::where('public', true)->with('members')->get()
        )->unique();

        if (request()->expectsJson()) {
            return response()->json([
                'status'   => 'success',
                'offices'  => $offices,
            ]);
        }

        return redirect('?group_type=offices');
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

        if (request()->expectsJson()) {
            return response()->json([
                'status'        => 'success',
                'office'        => $office,
                'current_cycle' => $office->current_cycle,
            ]);
        }

        return $this->formatRedirect();
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

    private function formatRedirect()
    {
        $url = '?group_type=project&group_id=' . request()->segment(2) . '&tool=' . request()->query('tool') . '&id=' . request()->query('id');

        return redirect($url);
    }
}
