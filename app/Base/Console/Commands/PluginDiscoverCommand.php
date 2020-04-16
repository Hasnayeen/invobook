<?php

namespace App\Console\Commands;

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
     *
     * @param  \App\Base\Utilities\PluginManifest  $manifest
     * @return void
     */
    public function handle(PluginManifest $manifest)
    {
        $manifest->build();

        foreach (array_keys($manifest->manifest) as $plugin) {
            $this->line("Discovered Plugin: <info>{$plugin}</info>");
        }

        $this->info('Plugin manifest generated successfully.');
    }
}
