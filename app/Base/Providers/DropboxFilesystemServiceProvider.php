<?php

namespace App\Base\Providers;

use League\Flysystem\Filesystem;
use Illuminate\Support\ServiceProvider;
use Spatie\Dropbox\Client as DropboxClient;
use Spatie\FlysystemDropbox\DropboxAdapter;

class DropboxFilesystemServiceProvider extends ServiceProvider
{
    protected $storage;

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->storage = app('filesystem');
        $this->storage->extend('dropbox', function ($app, $config) {
            $client = new DropboxClient($config['access_token']);

            return new Filesystem(new DropboxAdapter($client));
        });
    }
}
