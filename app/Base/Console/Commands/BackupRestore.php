<?php

namespace App\Base\Console\Commands;

use ZipArchive;
use Illuminate\Support\Carbon;
use Illuminate\Console\Command;
use Illuminate\Database\DatabaseManager as DB;
use Illuminate\Contracts\Filesystem\Factory as Filesystem;

class BackupRestore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backup:restore {filename} {--disk=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to restore backup';

    private $disk = 'local';

    private $filename = null;

    private $time = null;

    // Dependacy variables

    protected $database;

    protected $storage;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(DB $database, Filesystem $storage)
    {
        $this->database = $database;
        $this->storage = $storage;

        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->init();
        if ($this->storage->disk($this->disk)->exists($this->filename)) {
            $this->loadContentToLocalStorage();
            $this->unzipBackup();
            $this->restoreBackup();
        }
    }

    private function init()
    {
        $this->disk = $this->option('disk') != '' ? $this->option('disk') : 'local';
        $this->filename = $this->argument('filename');
        $this->time = Carbon::now()->format('j_M_Y_g_i_a');
    }

    private function loadContentToLocalStorage()
    {
        $content = ($this->storage->disk($this->disk)->get($this->filename));
        $this->storage->disk('local')->put('backup-temp/'.$this->time.'/backup.zip', $content);
    }

    private function unzipBackup()
    {
        $zip = new ZipArchive;
        $zip->open(storage_path('app/backup-temp/'.$this->time.'/backup.zip'));
        $zip->extractTo(storage_path('app/backup-temp/'.$this->time));
        $zip->close();
    }

    private function restoreBackup()
    {
        $this->database->unprepared(
            $this->storage->disk('local')->get(
                'backup-temp/'.$this->time.'/db-dumps/mysql-' . config('database.connections.mysql.database') . '.sql'
            )
        );
    }
}
