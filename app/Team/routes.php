<?php

namespace App\Team\Controllers;

use Illuminate\Support\Facades\Route;

/**********************************
    Web
**********************************/

Route::middleware('web')->group(function () {
    Route::get('teams/{team}', [TeamController::class, 'show']);

    Route::group(['middleware' => 'auth'], function () {
        Route::get('teams', [TeamController::class, 'index']);

        Route::post('teams', [TeamController::class, 'store']);

        Route::delete('teams/{team}', [TeamController::class, 'delete']);

        Route::post('public-teams/{team}', [PublicTeamController::class, 'store']);

        Route::delete('public-teams/{team}', [PublicTeamController::class, 'delete']);
    });
});

/**********************************
    Api
**********************************/

Route::middleware(['api', 'auth:api'])->prefix('api')->group(function () {
    Route::get('teams/', [TeamController::class, 'index']);

    Route::post('teams', [TeamController::class, 'store']);

    Route::delete('teams/{team}', [TeamController::class, 'delete']);

    Route::post('public-teams/{team}', [PublicTeamController::class, 'store']);

    Route::delete('public-teams/{team}', [PublicTeamController::class, 'delete']);
});
