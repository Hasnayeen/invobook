<?php

namespace App\Office\Controllers;

use Illuminate\Support\Facades\Route;

/**********************************
    Web
**********************************/

Route::middleware('web')->group(function () {
    Route::get('offices/{office}', [OfficeController::class, 'show']);

    Route::group(['middleware' => 'auth'], function () {
        Route::get('offices', [OfficeController::class, 'index']);

        Route::post('offices', [OfficeController::class, 'store']);

        Route::delete('offices/{office}', [OfficeController::class, 'delete']);

        Route::post('public-offices/{office}', [PublicOfficeController::class, 'store']);

        Route::delete('public-offices/{office}', [PublicOfficeController::class, 'delete']);
    });
});

/**********************************
    Api
**********************************/

Route::middleware(['api', 'auth:api'])->prefix('api')->group(function () {
    Route::get('offices/', [OfficeController::class, 'index']);

    Route::post('offices', [OfficeController::class, 'store']);

    Route::delete('offices/{office}', [OfficeController::class, 'delete']);

    Route::post('public-offices/{office}', [PublicOfficeController::class, 'store']);

    Route::delete('public-offices/{office}', [PublicOfficeController::class, 'delete']);
});
