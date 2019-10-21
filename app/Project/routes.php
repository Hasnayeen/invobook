<?php

namespace App\Project\Controllers;

use Illuminate\Support\Facades\Route;

// Web

Route::middleware('web')->group(function () {
    Route::get('projects/{project}', [ProjectController::class, 'show']);

    Route::middleware(['auth'])->group(function () {
        Route::get('projects', [ProjectController::class, 'index']);

        Route::post('projects', [ProjectController::class, 'store']);

        Route::delete('projects/{project}', [ProjectController::class, 'delete']);

        Route::post('public-projects/{project}', [PublicProjectController::class, 'store']);

        Route::delete('public-projects/{project}', [PublicProjectController::class, 'delete']);
    });
});

// Api

Route::middleware(['api', 'auth:api'])->prefix('api')->group(function () {
    Route::get('projects/', [ProjectController::class, 'index']);

    Route::post('projects', [ProjectController::class, 'store']);

    Route::delete('projects/{project}', [ProjectController::class, 'delete']);

    Route::post('public-projects/{project}', [PublicProjectController::class, 'store']);

    Route::delete('public-projects/{project}', [PublicProjectController::class, 'delete']);
});
