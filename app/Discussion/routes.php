<?php

namespace App\Discussion\Controllers;

use Illuminate\Support\Facades\Route;

/**********************************
    Web
**********************************/

Route::middleware('web')->group(function () {
    Route::get('discussions', [DiscussionController::class, 'index']);

    Route::group(['middleware' => 'auth'], function () {
        Route::post('discussions', [DiscussionController::class, 'store']);

        Route::post('discussions/files', [DiscussionFileController::class, 'store']);

        Route::get('discussions/{discussion}', [DiscussionController::class, 'show']);

        Route::patch('discussions/{discussion}', [DiscussionController::class, 'update']);

        Route::delete('discussions/{discussion}', [DiscussionController::class, 'delete']);
    });
});

/**********************************
    Api
**********************************/

Route::middleware(['api', 'auth:api'])->prefix('api')->group(function () {
    Route::get('discussions', [DiscussionController::class, 'index']);

    Route::post('discussions', [DiscussionController::class, 'store']);

    Route::get('discussions/{discussion}', [DiscussionController::class, 'show']);

    Route::patch('discussions/{discussion}', [DiscussionController::class, 'update']);

    Route::delete('discussions/{discussion}', [DiscussionController::class, 'delete']);
});
