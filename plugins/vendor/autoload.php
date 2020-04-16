<?php

/*
|--------------------------------------------------------------------------
| Include The Compiled Class File
|--------------------------------------------------------------------------
|
| To dramatically increase your application's performance, you may use a
| compiled class file which contains all of the classes commonly used
| by a request. The Artisan "optimize" is used to create this file.
|
*/

$compiledPath = __DIR__.'/cache/compiled.php';

if (file_exists($compiledPath)) {
    require $compiledPath;
}