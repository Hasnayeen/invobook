<?php

namespace App\Base\Console;

use Illuminate\Console\Scheduling\Schedule;
use App\Base\Console\Commands\PluginInstallCommand;
use App\Base\Console\Commands\PluginDiscoverCommand;
use App\Base\Console\Commands\UnreadDirectMessageCommand;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        PluginDiscoverCommand::class,
        PluginInstallCommand::class,
        UnreadDirectMessageCommand::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('email:unread-direct-message');
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
        $this->load(__DIR__ . '/Commands');
    }
}
