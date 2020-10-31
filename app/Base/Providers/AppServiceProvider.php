<?php

namespace App\Base\Providers;

use Illuminate\Routing\UrlGenerator;
use Illuminate\Filesystem\Filesystem;
use Livewire\Commands\ComponentParser;
use Livewire\LivewireComponentsFinder;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;
use App\Base\Utilities\ExtendedLivewireComponentsFinder;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(UrlGenerator $url)
    {
        $url->forceScheme(config('app.scheme'));

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
        $this->app->singleton(LivewireComponentsFinder::class, function () {
            return new ExtendedLivewireComponentsFinder(
                new Filesystem,
                config('livewire.manifest_path') ?: app()->bootstrapPath('cache/livewire-components.php'),
                collect(config('livewire.class_namespaces'))->map(function ($item) {
                    return ComponentParser::generatePathFromNamespace($item);
                })
            );
        });

        $this->app->bind(\Illuminate\Notifications\Channels\DatabaseChannel::class, function ($app) {
            return new \App\Base\Utilities\DatabaseNotificationChannel();
        });

        if ($this->app->environment() === 'local') {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(\App\Base\Providers\TelescopeServiceProvider::class);
        }
    }
}
