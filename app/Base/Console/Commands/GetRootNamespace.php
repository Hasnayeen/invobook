<?php

namespace App\Base\Console\Commands;

use Illuminate\Support\Str;

trait GetRootNamespace
{
    /**
     * Get the root namespace for the class.
     *
     * @return string
     */
    protected function rootNamespace()
    {
        if ($module = $this->option('namespace')) {
            return "App\\$module\\";
        }

        return 'App\Base\\';
    }

    /**
     * Get the destination class path.
     *
     * @param  string $name
     * @return string
     */
    protected function getPath($name)
    {
        $name = Str::replaceFirst('App', '', $name);

        return $this->laravel['path'].'/'.str_replace('\\', '/', $name).'.php';
    }
}
