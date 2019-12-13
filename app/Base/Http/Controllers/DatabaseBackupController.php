<?php

namespace App\Base\Http\Controllers;

use Illuminate\Http\Request;
use App\Base\Jobs\BackupDatabase;
use Illuminate\Contracts\Console\Kernel as Artisan;
use Illuminate\Contracts\Filesystem\Factory as Filesystem;

class DatabaseBackupController extends Controller
{
    protected $artisan;

    protected $storage;

    public function __construct(Filesystem $storage, Artisan $artisan)
    {
        $this->storage = $storage;
        $this->artisan = $artisan;
    }

    public function checkDropboxSetup()
    {
        $condition = (config('filesystems.disks.dropbox.key') != '' && config('filesystems.disks.dropbox.secret') != '');

        return ['status' => $condition];
    }

    public function takeBackupToDropbox()
    {
        BackupDatabase::dispatch();

        return response()->json([
            'status'  => 'success',
            'message' => 'Database backup process has been started',
        ]);
    }

    public function backupFileLists()
    {
        return $this->storage->disk('dropbox')->files(config('backup.backup.name'), true);
    }

    public function backupRestore(Request $request)
    {
        $exitCode = $this->artisan->call('backup:restore', ['filename' => $request->filename, '--disk' => 'dropbox']);
        $output = $this->artisan->output();

        return ['message' => 'Yes command run successfully', 'exitWith' => $exitCode, 'output' => $output];
    }
}
