<?php

namespace App\Repositories;

use App\Models\Event;

class EventRepository
{
    /**
     * @var mixed
     */
    protected $model;

    /**
     * @param Event $file
     */
    public function __construct(Event $event)
    {
        $this->model = $event;
    }

    /**
     * @param  mixed $data
     * @return mixed
     */
    public function create($data)
    {
        return Event::create($data);
    }

    /**
     * @param  mixed $data
     * @return mixed
     */
    public function getAllEvents()
    {
        return Event::get();
    }

    /**
     * @param  mixed $data
     * @param  mixed $event
     * @return mixed
     */
    public function update($data, $event)
    {
        $event->update($data);

        return $event;
    }
}
