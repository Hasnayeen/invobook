<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Artisan;
use Storage;
use ZipArchive;
use DB;


class DatabaseBackupController extends Controller
{
    //
    public function checkDropboxSetup(Request $request) {
    	$condition = (env('DROPBOX_ACCESS_TOKEN') != '' && env('DROPBOX_SECRET') != '');
    	return ['status' => $condition];
    }

    public function takeBackupToDropbox(Request $request) {
	    $exitCode = Artisan::call('backup:run', ['--only-db' => true]);
	    $output = Artisan::output();
	    return ['message' => "Yes command run successfully", 'exitWith' => $exitCode, 'output' => $output];
    }

    public function backupFileLists(Request $request) {
    	return Storage::disk('dropbox')->files(env('DROPBOX_APP_NAME'));
    }

    public function backupRestore(Request $request) {
	    $exitCode = Artisan::call('backup:restore', ['filename' => $request->filename, '--disk' => "dropbox"]);
	    $output = Artisan::output();
	    return ['message' => "Yes command run successfully", 'exitWith' => $exitCode, 'output' => $output];
    }
}
