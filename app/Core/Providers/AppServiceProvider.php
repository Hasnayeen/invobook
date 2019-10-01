<?php

namespace App\Core\Providers;

use Laravel\Passport\Passport;
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
            'project'    => 'App\Core\Models\Project',
            'team'       => 'App\Core\Models\Team',
            'office'     => 'App\Core\Models\Office',
            'task'       => 'App\Core\Models\Task',
            'event'      => 'App\Core\Models\Event',
            'discussion' => 'App\Core\Models\Discussion',
            'user'       => 'App\Core\Models\User',
            'comment'    => 'App\Core\Models\Comment',
            'mention'    => 'App\Core\Models\Mention',
            'message'    => 'App\Core\Models\Message',
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Passport::routes();

        $this->app->bind(\Illuminate\Notifications\Channels\DatabaseChannel::class, function ($app) {
            return new \App\Core\Utilities\DatabaseNotificationChannel();
        });

        if ($this->app->environment() === 'local') {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(\App\Core\Providers\TelescopeServiceProvider::class);
        }
    }
}
