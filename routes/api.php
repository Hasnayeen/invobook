<?php

namespace App\Core\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('oauth/token', [AccessTokenController::class, 'issueToken'])->middleware('mobile');

Route::group(['prefix' => 'api', 'middleware' => 'auth:api'], function () {
    Route::get('me', [UserController::class, 'me']);
});
