<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TemplateController;

/*
|--------------------------------------------------------------------------
| Dev Routes
|--------------------------------------------------------------------------
|
| These routes are only for local development, and will be ignored in
| production.
|
*/

Route::get('templates/{template}', TemplateController::class)
    ->name('templates.preview')
    ->middleware('auth');

Route::get('test', function () {
    return 'test';
});
