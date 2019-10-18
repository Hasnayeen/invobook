<?php

namespace App\TaskManager\Controllers;

use Illuminate\Support\Facades\Route;

Route::get('tasks', [TaskController::class, 'index'])->middleware('web');

Route::middleware(['web', 'auth'])->group(function () {
    Route::post('tasks', [TaskController::class, 'store']);

    Route::get('tasks/{task}', [TaskController::class, 'show']);

    Route::put('tasks/{task}', [TaskController::class, 'update']);

    Route::delete('tasks/{task}', [TaskController::class, 'delete']);

    Route::put('tasks/{task}/statuses/{status}', [TaskStatusController::class, 'update']);

    Route::get('tasks/{task}/steps/', [TaskProgressController::class, 'index']);

    Route::post('tasks/{task}/steps/', [TaskProgressController::class, 'store']);

    Route::post('tasks/{task}/tags', [TaskTagController::class, 'store']);

    Route::delete('tasks/{task}/tags/{tag}', [TaskTagController::class, 'delete']);
});

    /**********************************
        Api
    **********************************/

Route::group(['prefix' => 'api', 'middleware' => 'api, auth:api'], function () {

    Route::get('tasks', [TaskController::class, 'index']);

    Route::post('tasks', [TaskController::class, 'store']);

    Route::get('tasks/{task}', [TaskController::class, 'show']);

    Route::put('tasks/{task}', [TaskController::class, 'update']);

    Route::delete('tasks/{task}', [TaskController::class, 'delete']);

    Route::put('tasks/{task}/statuses/{status}', [TaskStatusController::class, 'update']);

    Route::get('tasks/{task}/steps/', [TaskProgressController::class, 'index']);

    Route::post('tasks/{task}/steps/', [TaskProgressController::class, 'store']);

    Route::post('tasks/{task}/tags', [TaskTagController::class, 'store']);

    Route::delete('tasks/{task}/tags/{tag}', [TaskTagController::class, 'delete']);
});
