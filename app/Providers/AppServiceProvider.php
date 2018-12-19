<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Laravel\Telescope\TelescopeServiceProvider;
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
        if ($this->app->environment() !== 'production') {
            $this->app->register(TelescopeServiceProvider::class);
        }
    }
}
