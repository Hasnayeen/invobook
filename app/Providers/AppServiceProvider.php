<?php

namespace App\Providers;

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
            'project'    => 'App\Models\Project',
            'team'       => 'App\Models\Team',
            'office'     => 'App\Models\Office',
            'task'       => 'App\Models\Task',
            'event'      => 'App\Models\Event',
            'discussion' => 'App\Models\Discussion',
            'user'       => 'App\Models\User',
            'comment'    => 'App\Models\Comment',
            'mention'    => 'App\Models\Mention',
            'message'    => 'App\Models\Message',
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment() === 'local') {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(\App\Providers\TelescopeServiceProvider::class);
        }
    }
}
