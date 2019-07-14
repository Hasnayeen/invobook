<?php

namespace App\Core\Providers;

use App\Core\Models\Task;
use App\Core\Models\Project;
use App\Core\Models\Discussion;
use App\Core\Models\DirectMessage;
use App\Core\Observers\TaskObserver;
use App\Core\Observers\ProjectObserver;
use App\Core\Observers\DiscussionObserver;
use App\Core\Observers\DirectMessageObserver;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Task::observe(TaskObserver::class);
        Discussion::observe(DiscussionObserver::class);
        DirectMessage::observe(DirectMessageObserver::class);
        Project::observe(ProjectObserver::class);
    }
}
