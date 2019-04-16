<?php

namespace App\Console\Commands;

use DB;
use Storage;
use ZipArchive;
use Illuminate\Console\Command;

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

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
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
        if (Storage::disk($this->disk)->exists($this->filename)) {
            $this->loadContentToLocalStorage();
            $this->unzipBackup();
            $this->restoreBackup();
        }
    }

    private function init()
    {
        $this->disk = $this->option('disk') != '' ? $this->option('disk'): 'local';
        $this->filename = $this->argument('filename');
        $this->time = time();
    }

    private function loadContentToLocalStorage()
    {
        $content = (Storage::disk($this->disk)->get($this->filename));
        Storage::disk('local')->put("backup-temp/".$this->time."/backup.zip", $content);
    }

    private function unzipBackup()
    {
        $zip = new ZipArchive;
        $zip->open(storage_path('app/backup-temp/'.$this->time.'/backup.zip'));
        $zip->extractTo(storage_path($this->getPath()));
        $zip->close();
    }

    private function restoreBackup()
    {
        DB::unprepared(Storage::disk('local')->get(storage_path($this->getPath('db-dumps/mysql-goodwork.sql'))));
    }

    private function getPath($extendedPath = '')
    {
        return implode('/', ['app/backup-temp', $this->time, 'backup', $extendedPath]);
    }
}
