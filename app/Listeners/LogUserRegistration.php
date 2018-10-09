<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Registered;
use Spatie\Activitylog\ActivityLogger;

class LogUserRegistration
{
    /**
     * @var ActivityLogger
     */
    private $logger;

    /**
     * @param ActivityLogger $logger
     */
    public function __construct(ActivityLogger $logger)
    {
        $this->logger = $logger;
    }

    /**
     * @param Registered $event
     */
    public function handle(Registered $event)
    {
        $this->logger
            ->by($event->user)
            ->performedOn($event->user)
            ->log('User ' . $event->user->name . ' has registered');
    }
}
