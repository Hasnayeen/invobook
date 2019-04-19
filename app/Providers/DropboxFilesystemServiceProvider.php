<?php

namespace App\Providers;

use League\Flysystem\Filesystem;
use Illuminate\Support\ServiceProvider;
use Spatie\Dropbox\Client as DropboxClient;
use Spatie\FlysystemDropbox\DropboxAdapter;
use Illuminate\Contracts\Filesystem\Factory as Storage;

class DropboxFilesystemServiceProvider extends ServiceProvider
{
    protected $storage;

    public function __construct(Storage $storage)
    {
        $this->storage = $storage;
    }

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
        $this->storage->extend('dropbox', function ($app, $config) {
            $client = new DropboxClient($config['accessToken']);

            return new Filesystem(new DropboxAdapter($client));
        });
    }
}
