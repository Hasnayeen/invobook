<?php

namespace App\Base\Utilities;

use Exception;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Foundation\PackageManifest;

class PluginManifest extends PackageManifest
{
    protected $plugins = [];

    /**
     * Create a new package manifest instance.
     *
     * @param  \Illuminate\Filesystem\Filesystem $files
     * @param  string                            $basePath
     * @param  string                            $manifestPath
     * @return void
     */
    public function __construct(Filesystem $files)
    {
        $this->files = $files;
        $this->basePath = base_path('plugins');
        $this->manifestPath = base_path('bootstrap/cache/packages.php');
        $this->vendorPath = base_path('plugins') . '/vendor';
    }

    /**
     * Build the manifest and write it to disk.
     */
    public function build(): void
    {
        if (! $this->files->exists($this->vendorPath.'/composer/installed.json')) {
            return;
        }
        if ($this->files->exists($path = $this->vendorPath.'/composer/installed.json')) {
            $plugins = json_decode($this->files->get($path), true);
        }

        $ignoreAll = in_array('*', $ignore = $this->packagesToIgnore());

        $this->write(collect($plugins)->mapWithKeys(function ($package) {
            return [$this->format($package['name']) => $package['extra']['laravel'] ?? []];
        })->each(function ($configuration) use (&$ignore) {
            $ignore = array_merge($ignore, $configuration['dont-discover'] ?? []);
        })->reject(function ($configuration, $package) use ($ignore, $ignoreAll) {
            return $ignoreAll || in_array($package, $ignore);
        })->filter()->all());
    }

    /**
     * Write the given manifest array to disk.
     *
     * @throws \Exception
     */
    protected function write(array $plugins): void
    {
        $packages = include $this->manifestPath;
        $this->plugins = $plugins;
        $this->manifest = array_merge($packages, $plugins);
        if (! is_writable($dirname = dirname($this->manifestPath))) {
            throw new Exception("The {$dirname} directory must be present and writable.");
        }

        $this->files->replace(
            $this->manifestPath, '<?php return '.var_export($this->manifest, true).';'
        );
    }

    public function getPlugins(): array
    {
        return $this->plugins;
    }
}
