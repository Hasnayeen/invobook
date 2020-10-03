<?php

namespace App\Base\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Process\Process;

class PluginUninstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'plugin:uninstall
                            {name? : Name of the package (e.g goodwork/calendar)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Uninstall plugin from project';

    /**
     * The filesystem instance.
     *
     * @var \Illuminate\Filesystem\Filesystem
     */
    protected $files;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(Filesystem $files)
    {
        parent::__construct();

        $this->files = $files;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->dumpAutoloadFile();
        $composerJson = $this->getComposerJson();
        if ($composerJson) {
            $this->removePackageFromCacheFile();
            $this->removeCacheServicesFile();
            $this->removePluginFromComposerFile($composerJson);
            $this->runComposerCommand();
        }
    }

    private function removePackageFromCacheFile()
    {
        $packages = include base_path('bootstrap/cache/packages.php');
        unset($packages[$this->argument('name')]);
        $this->files->put(base_path('bootstrap/cache/packages.php'), '<?php return ' . var_export($packages, true) . ';');
    }

    private function removeCacheServicesFile()
    {
        $this->files->delete(base_path('bootstrap/cache/services.php'));
    }

    private function removePluginFromComposerFile(array &$composerJson): void
    {
        unset($composerJson['require'][$this->argument('name')]);
        if (empty($composerJson['require'])) {
            unset($composerJson['require']);
        }
        $this->files->put(base_path('plugins/composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    }

    private function runComposerCommand(): void
    {
        $process = new Process([
            'composer',
            'update',
            '--ansi',
        ], 'plugins');
        $this->runProcessCommand($process);
    }

    private function runProcessCommand(Process $process): void
    {
        $process->setTimeout(null);
        $process->start();

        foreach ($process as $type => $data) {
            if ($process::OUT === $type) {
                echo $data;
            } else {
                echo $data;
            }
        }
    }

    private function getComposerJson(): ?array
    {
        if (! file_exists(base_path('plugins/composer.json'))) {
            $this->error('No plugin to uninstall');

            return null;
        }
        $composerJson = $this->files->get(base_path('/plugins/composer.json'));

        return json_decode($composerJson, true);
    }

    private function dumpAutoloadFile()
    {
        $process = new Process([
            'composer',
            'dump',
            '--ansi',
        ]);
        $process->run();
    }
}
