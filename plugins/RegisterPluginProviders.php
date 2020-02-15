<?php

namespace Goodwork\Plugins;

use Illuminate\Contracts\Foundation\Application;

class RegisterPluginProviders
{
    /**
     * Bootstrap the given application.
     *
     * @param  \Illuminate\Contracts\Foundation\Application  $app
     * @return void
     */
    public function bootstrap(Application $app)
    {
        $config = require_once(__DIR__.'/config.php');
        $config = array_merge($app->config['app.providers'], $config['providers']);
        config(['app.providers' => $config]);
    }
}
