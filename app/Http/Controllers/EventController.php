<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Repositories\EventRepository;
use App\Http\Requests\EventValidation;

class EventController extends Controller
{
    public function index(EventRepository $repository)
    {
        try {
            $events = $repository->getAllEvents();

            return response()->json([
                'status' => 'success',
                'total'  => count($events),
                'events' => $events,
            ]);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function store(EventValidation $request, EventRepository $repository)
    {
        try {
            $event = $repository->create($request->all());

            return response()->json([
                'status'  => 'success',
                'message' => $event->name . ' task has been created',
                'event'   => $event,
            ], 201);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function update(EventValidation $request, EventRepository $repository, Event $event)
    {
        try {
            $event = $repository->update($request->all(), $event);
            return response()->json([
                'status'  => 'success',
                'message' => $event->name . ' task has been updated',
                'event'   => $event,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'status'  => 'error',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function show(Event $event)
    {
        $event->load('user');

        return response()->json([
            'status' => 'success',
            'event'  => $event,
        ]);
    }

    public function destroy(Event $event)
    {
        $event->delete();

        return response()->json([
            'status'  => 'success',
            'message' => 'The event has been deleted',
        ]);
    }
}
