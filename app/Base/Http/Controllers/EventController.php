<?php

namespace App\Base\Http\Controllers;

use App\Base\Repositories\EventRepository;
use App\Base\Http\Requests\EventStoreRequest;

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
            'misc.New event has been created',
            'event',
            $event,
            201
        );
    }
}
