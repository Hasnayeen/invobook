<?php

namespace App\Base\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('oauth/token', [AccessTokenController::class, 'issueToken'])->middleware('mobile');

Route::group(['prefix' => 'api', 'middleware' => 'auth:api'], function () {
    Route::get('me', [UserController::class, 'me']);

    Route::get('home', [HomeController::class, 'index']);

    // Group (Project/Team/Office)

    Route::get('groups/settings', [GroupSettingsController::class, 'index']);

    Route::put('groups/settings', [GroupSettingsController::class, 'update']);

    Route::get('groups/permissions', [GroupPermissionController::class, 'index']);

    Route::post('groups/permissions/{permission}/roles/{role}', [GroupPermissionController::class, 'store']);

    Route::delete('groups/permissions/{permission}/roles/{role}', [GroupPermissionController::class, 'delete']);

    Route::get('groups/tags', [GroupTagsController::class, 'index']);

    Route::post('groups/tags/{tag}', [GroupTagsController::class, 'store']);

    Route::delete('groups/tags/{tag}', [GroupTagsController::class, 'delete']);

    // Member

    Route::get('members', [MemberController::class, 'index']);

    Route::post('members', [MemberController::class, 'store']);

    Route::delete('members', [MemberController::class, 'destroy']);

    // Event

    Route::get('events', [EventController::class, 'index']);

    Route::post('events', [EventController::class, 'store']);

    Route::get('events/{event}', [EventController::class, 'index']);

    // File

    Route::get('files', [FileController::class, 'index']);

    Route::get('files/{file}', [FileController::class, 'index']);

    Route::post('files', [FileController::class, 'store']);

    // Message

    Route::get('messages', [MessageController::class, 'index']);

    Route::get('direct-messages', [DirectMessageController::class, 'index']);

    Route::delete('direct-messages/{directMessage}', [DirectMessageController::class, 'delete']);

    Route::post('messages', [MessageController::class, 'store']);

    Route::put('messages/{message}', [MessageController::class, 'update']);

    Route::delete('messages/{message}', [MessageController::class, 'delete']);

    // Comment

    Route::get('/comments', [CommentController::class, 'index']);

    Route::post('/comments', [CommentController::class, 'store']);

    Route::delete('/comments/{comment}', [CommentController::class, 'delete']);

    // Cycle

    Route::get('cycles', [CycleController::class, 'index']);

    Route::post('cycles', [CycleController::class, 'store']);

    // Status

    Route::get('statuses', [StatusController::class, 'index']);

    Route::post('statuses', [StatusController::class, 'store']);

    // Category

    Route::get('categories', [CategoryController::class, 'index']);

    Route::post('categories', [CategoryController::class, 'store']);

    // Roadmap

    Route::get('cycles/{cycle}/roadmap', [RoadmapController::class, 'show']);

    // Direct Message

    Route::get('direct-messages', [DirectMessageController::class, 'index']);

    Route::post('direct-messages', [DirectMessageController::class, 'store']);

    Route::get('unread-direct-messages/users', [UserUnreadDirectMessageController::class, 'index']);

    Route::put('unread-direct-messages/{user}', [UserUnreadDirectMessageController::class, 'update']);

    // Tags

    Route::get('tags', [TagController::class, 'index']);

    Route::post('tags', [TagController::class, 'store']);

    // Notification

    Route::get('notifications', [NotificationController::class, 'index']);

    Route::put('notifications', [NotificationController::class, 'update']);

    // User

    Route::get('users', [UserController::class, 'index']);

    Route::get('users/{user}', [UserController::class, 'show']);

    Route::get('username', [UserController::class, 'checkUsername']);

    Route::put('users/{user}/account', [UserAccountController::class, 'update']);

    Route::put('users/{user}/profile', [UserProfileController::class, 'update']);

    Route::post('users/{user}/avatar', [UserAvatarController::class, 'store']);

    // Github Service

    Route::get('services/github/repos', [GithubRepoController::class, 'index']);

    Route::get('services/github/connected-repos', [ConnectedGithubRepoController::class, 'index']);

    Route::post('services/github/connected-repos', [ConnectedGithubRepoController::class, 'store']);

    // Role

    Route::get('roles', [RoleController::class, 'index']);

    Route::get('activities', [ActivityController::class, 'index']);

    // Settings
});
