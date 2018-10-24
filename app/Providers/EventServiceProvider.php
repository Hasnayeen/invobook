<?php

namespace App\Providers;

use App\Events\DiscussionCreated;
use App\Listeners\LogUserRegistration;
use Illuminate\Auth\Events\Registered;
use App\Listeners\NotifyDiscussionParticipants;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            LogUserRegistration::class,
        ],
        DiscussionCreated::class => [
            NotifyDiscussionParticipants::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }
}
