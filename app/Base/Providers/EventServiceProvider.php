<?php

namespace App\Base\Providers;

use App\Project\Models\Project;
use App\Base\Models\Discussion;
use App\TaskManager\Models\Task;
use App\Base\Models\DirectMessage;
use App\Project\Observers\ProjectObserver;
use App\Base\Observers\DiscussionObserver;
use App\TaskManager\Observers\TaskObserver;
use App\Base\Observers\DirectMessageObserver;
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
