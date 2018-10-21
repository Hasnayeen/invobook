<?php

namespace App\Http\Controllers;

use App\Repositories\EventRepository;
use App\Http\Requests\EventStoreRequest;

class EventController extends Controller
{
    private $repository;

    public function __construct(EventRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $events = $this->repository->getAllEvents();

        return response()->json([
            'status' => 'success',
            'events' => $events,
        ]);
    }

    public function store(EventStoreRequest $request)
    {
        $event = $this->repository->create($request->all());

        return $this->successResponse(
            trans('misc.New event has been created'),
            'event',
            $event,
            201
        );
    }
}
