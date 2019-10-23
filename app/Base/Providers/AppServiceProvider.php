<?php

namespace App\Base\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Relation::morphMap([
            'project'    => 'App\Project\Models\Project',
            'team'       => 'App\Team\Models\Team',
            'office'     => 'App\Office\Models\Office',
            'task'       => 'App\TaskManager\Models\Task',
            'event'      => 'App\Base\Models\Event',
            'discussion' => 'App\Discussion\Models\Discussion',
            'user'       => 'App\Base\Models\User',
            'comment'    => 'App\Base\Models\Comment',
            'mention'    => 'App\Base\Models\Mention',
            'message'    => 'App\Base\Models\Message',
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\Illuminate\Notifications\Channels\DatabaseChannel::class, function ($app) {
            return new \App\Base\Utilities\DatabaseNotificationChannel();
        });

        if ($this->app->environment() === 'local') {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(\App\Base\Providers\TelescopeServiceProvider::class);
        }
    }
}
