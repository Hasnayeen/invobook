<?php

namespace App\Base\Providers;

use App\Team\Models\Team;
use App\Office\Models\Office;
use App\Observers\TeamObserver;
use App\Project\Models\Project;
use App\TaskManager\Models\Task;
use App\Observers\OfficeObserver;
use App\Base\Models\DirectMessage;
use App\Discussion\Models\Discussion;
use App\Project\Observers\ProjectObserver;
use App\TaskManager\Observers\TaskObserver;
use App\Base\Observers\DirectMessageObserver;
use App\Discussion\Observers\DiscussionObserver;
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
        Office::observe(OfficeObserver::class);
        Team::observe(TeamObserver::class);
    }
}
