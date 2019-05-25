<?php

namespace App\Core\Providers;

use App\Core\Events\DiscussionCreated;
use App\Core\Listeners\LogUserRegistration;
use Illuminate\Auth\Events\Registered;
use App\Core\Listeners\NotifyDiscussionParticipants;
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
