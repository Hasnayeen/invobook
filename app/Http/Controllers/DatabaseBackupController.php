<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
        $condition = (env('DROPBOX_ACCESS_TOKEN') != '' && env('DROPBOX_SECRET') != '');

        return ['status' => $condition];
    }

    public function takeBackupToDropbox()
    {
        $exitCode = $this->artisan->call('backup:run', ['--only-db' => true]);
        $output = $this->artisan->output();

        return ['message' => 'Yes command run successfully', 'exitWith' => $exitCode, 'output' => $output];
    }

    public function backupFileLists()
    {
        return $this->storage->disk('dropbox')->files(env('DROPBOX_APP_NAME'));
    }

    public function backupRestore(Request $request)
    {
        $exitCode = $this->artisan->call('backup:restore', ['filename' => $request->filename, '--disk' => 'dropbox']);
        $output = $this->artisan->output();

        return ['message' => 'Yes command run successfully', 'exitWith' => $exitCode, 'output' => $output];
    }
}
