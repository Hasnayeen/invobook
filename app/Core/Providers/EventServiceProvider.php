<?php

namespace App\Core\Providers;

use App\Core\Models\Task;
use App\Core\Models\Discussion;
use App\Core\Observers\TaskObserver;
use Illuminate\Auth\Events\Registered;
use App\Core\Observers\DiscussionObserver;
use App\Core\Listeners\LogUserRegistration;
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
    ];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Task::observe(TaskObserver::class);
        Discussion::observe(DiscussionObserver::class);
    }
}
