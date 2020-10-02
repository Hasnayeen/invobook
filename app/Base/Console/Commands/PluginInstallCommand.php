<?php

namespace App\Base\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Process\Process;

class PluginInstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'plugin:install
                            {name : Name of the package (e.g goodwork/calendar)}
                            {--r|require= : Specify the version for the package (e.g 1, dev-master)}
                            {--u|url= : Specify the repository url of the package (e.g https://github.com/goodwork/calendar)}
                            {--p|path= : Specify the path of the package (e.g ../plugins/calendar)}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Install a plugin';

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
        if ($this->validateArguments()) {
            $composerJson = $this->getComposerJson();
            $this->addPluginToComposerFile($composerJson);
            $this->runComposerCommand();
            $this->dumpAutoloadFile();
        }
    }

    private function validateArguments(): bool
    {
        if (! $this->argument('name')) {
            $this->error('Not enough argument (missing: "name").');

            return false;
        }
        if (($this->option('url') || $this->option('path')) && ! $this->option('require')) {
            $this->error('Not enough options (missing: "require").');

            return false;
        }

        return true;
    }

    private function addPluginToComposerFile(array &$composerJson): void
    {
        if ($this->option('url') || $this->option('path')) {
            $composerJson['require'][$this->argument('name')] = $this->option('require');
            $this->addToJsonSchema($composerJson, $this->getRepositoryValueForPackage());
            $this->files->put(base_path('plugins/composer.json'), json_encode($composerJson, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        }
    }

    private function addToJsonSchema(array &$composerJson, array $value): void
    {
        if (! isset($composerJson['repositories'])) {
            $composerJson['repositories'] = [$value];
        } elseif (array_search($value, $composerJson['repositories']) === false) {
            $composerJson['repositories'][] = $value;
        }
    }

    private function getRepositoryValueForPackage(): array
    {
        if ($url = $this->option('url')) {
            return [
                'type' => 'vcs',
                'url'  => $url,
            ];
        }

        return [
            'type' => 'path',
            'url'  => $this->option('path'),
        ];
    }

    private function runComposerCommand(): void
    {
        if ($this->option('url') || $this->option('path')) {
            $process = new Process([
                'composer',
                'update',
                '--ansi',
            ], 'plugins');
            $this->runProcessCommand($process);

            return;
        }
        $process = new Process([
            'composer',
            'require',
            $this->argument('name'),
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
        $process->wait();
    }

    private function getComposerJson(): array
    {
        if (file_exists(base_path('plugins/composer.json'))) {
            return json_decode($this->files->get(base_path('/plugins/composer.json')), true);
        }
        $stub = $this->files->get(base_path('/stubs/composer.json.stub'));
        $this->files->put(base_path('plugins/composer.json'), $stub);

        return json_decode($stub, true);
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
