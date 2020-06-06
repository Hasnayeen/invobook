<?php

namespace App\Base\Console\Commands;

use Illuminate\Console\Command;
use App\Base\Utilities\PluginManifest;

class PluginDiscoverCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'plugin:discover';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Rebuild the cached plugin manifest';

    /**
     * Execute the console command.
     */
    public function handle(PluginManifest $manifest): void
    {
        $manifest->build();

        foreach (array_keys($manifest->getPlugins()) as $plugin) {
            $this->line("Discovered Plugin: <info>{$plugin}</info>");
        }

        $this->info('Plugin manifest generated successfully.');
    }
}
