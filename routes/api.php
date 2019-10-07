<?php

namespace App\Core\Http\Controllers;

use Illuminate\Support\Facades\Route;
use Laravel\Passport\Http\Controllers\AccessTokenController;

Route::post('oauth/token', [AccessTokenController::class, 'issueToken'])->middleware('mobile');

Route::group(['prefix' => 'api', 'middleware' => 'auth:api'], function () {
    Route::get('me', [UserController::class, 'me']);

    Route::get('home', [HomeController::class, 'index']);

    /**********************************
        Project
    **********************************/

    Route::get('projects/', [ProjectController::class, 'index']);

    Route::post('projects', [ProjectController::class, 'store']);

    Route::delete('projects/{project}', [ProjectController::class, 'delete']);

    Route::post('public-projects/{project}', [PublicProjectController::class, 'store']);

    Route::delete('public-projects/{project}', [PublicProjectController::class, 'delete']);

    /**********************************
        Office
    **********************************/

    Route::get('offices/', [OfficeController::class, 'index']);

    Route::post('offices', [OfficeController::class, 'store']);

    Route::delete('offices/{office}', [OfficeController::class, 'delete']);

    Route::post('public-offices/{office}', [PublicOfficeController::class, 'store']);

    Route::delete('public-offices/{office}', [PublicOfficeController::class, 'delete']);

    /**********************************
        Team
    **********************************/

    Route::get('teams/', [TeamController::class, 'index']);

    Route::post('teams', [TeamController::class, 'store']);

    Route::delete('teams/{team}', [TeamController::class, 'delete']);

    Route::post('public-teams/{team}', [PublicTeamController::class, 'store']);

    Route::delete('public-teams/{team}', [PublicTeamController::class, 'delete']);

    /**********************************
        Group (Project/Team/Office)
     **********************************/

    Route::get('groups/settings', [GroupSettingsController::class, 'index']);

    Route::put('groups/settings', [GroupSettingsController::class, 'update']);

    Route::get('groups/permissions', [GroupPermissionController::class, 'index']);

    Route::post('groups/permissions/{permission}/roles/{role}', [GroupPermissionController::class, 'store']);

    Route::delete('groups/permissions/{permission}/roles/{role}', [GroupPermissionController::class, 'delete']);

    Route::get('groups/tags', [GroupTagsController::class, 'index']);

    Route::post('groups/tags/{tag}', [GroupTagsController::class, 'store']);

    Route::delete('groups/tags/{tag}', [GroupTagsController::class, 'delete']);

    /**********************************
        Member
     **********************************/

    Route::get('members', [MemberController::class, 'index']);

    Route::post('members', [MemberController::class, 'store']);

    Route::delete('members', [MemberController::class, 'destroy']);

    /**********************************
        Discussion
     **********************************/

    Route::get('discussions', [DiscussionController::class, 'index']);

    Route::post('discussions', [DiscussionController::class, 'store']);

    Route::get('discussions/{discussion}', [DiscussionController::class, 'show']);

    Route::patch('discussions/{discussion}', [DiscussionController::class, 'update']);

    Route::delete('discussions/{discussion}', [DiscussionController::class, 'delete']);

    /**********************************
        Event
     **********************************/

    Route::get('events', [EventController::class, 'index']);

    Route::post('events', [EventController::class, 'store']);

    Route::get('events/{event}', [EventController::class, 'index']);

    /**********************************
        Task
    **********************************/

    Route::get('tasks', [TaskController::class, 'index']);

    Route::post('tasks', [TaskController::class, 'store']);

    Route::get('tasks/{task}', [TaskController::class, 'show']);

    Route::put('tasks/{task}', [TaskController::class, 'update']);

    Route::delete('tasks/{task}', [TaskController::class, 'delete']);

    Route::put('tasks/{task}/statuses/{status}', [TaskStatusController::class, 'update']);

    Route::get('tasks/{task}/steps/', [TaskProgressController::class, 'index']);

    Route::post('tasks/{task}/steps/', [TaskProgressController::class, 'store']);

    /**********************************
        File
    **********************************/

    Route::get('files', [FileController::class, 'index']);

    Route::get('files/{file}', [FileController::class, 'index']);

    Route::post('files', [FileController::class, 'store']);

    /**********************************
        Message
     **********************************/

    Route::get('messages', [MessageController::class, 'index']);

    Route::get('direct-messages', [DirectMessageController::class, 'index']);

    Route::delete('direct-messages/{directMessage}', [DirectMessageController::class, 'delete']);

    Route::post('messages', [MessageController::class, 'store']);

    Route::put('messages/{message}', [MessageController::class, 'update']);

    Route::delete('messages/{message}', [MessageController::class, 'delete']);

    /**********************************
        Comment
    **********************************/

    Route::get('/comments', [CommentController::class, 'index']);

    Route::post('/comments', [CommentController::class, 'store']);

    Route::delete('/comments/{comment}', [CommentController::class, 'delete']);

    /**********************************
        Cycle
    **********************************/

    Route::get('cycles', [CycleController::class, 'index']);

    Route::post('cycles', [CycleController::class, 'store']);

    /**********************************
        Status
    **********************************/

    Route::get('statuses', [StatusController::class, 'index']);

    Route::post('statuses', [StatusController::class, 'store']);

    /**********************************
        Category
    **********************************/

    Route::get('categories', [CategoryController::class, 'index']);

    Route::post('categories', [CategoryController::class, 'store']);

    /**********************************
        Roadmap
    **********************************/

    Route::get('cycles/{cycle}/roadmap', [RoadmapController::class, 'show']);

    /**********************************
        Direct Message
     **********************************/

    Route::get('direct-messages', [DirectMessageController::class, 'index']);

    Route::post('direct-messages', [DirectMessageController::class, 'store']);

    Route::get('unread-direct-messages/users', [UserUnreadDirectMessageController::class, 'index']);

    Route::put('unread-direct-messages/{user}', [UserUnreadDirectMessageController::class, 'update']);

    /**********************************
        Tags
    **********************************/

    Route::get('tags', [TagController::class, 'index']);

    Route::post('tags', [TagController::class, 'store']);

    Route::post('tasks/{task}/tags', [TaskTagController::class, 'store']);

    Route::delete('tasks/{task}/tags/{tag}', [TaskTagController::class, 'delete']);

    /**********************************
        Notification
    **********************************/

    Route::get('notifications', [NotificationController::class, 'index']);

    Route::put('notifications', [NotificationController::class, 'update']);

    /**********************************
        User
    **********************************/

    Route::get('users', [UserController::class, 'index']);

    Route::get('users/{user}', [UserController::class, 'show']);

    Route::get('username', [UserController::class, 'checkUsername']);

    Route::put('users/{user}/account', [UserAccountController::class, 'update']);

    Route::put('users/{user}/profile', [UserProfileController::class, 'update']);

    Route::post('users/{user}/avatar', [UserAvatarController::class, 'store']);

    /**********************************
        Github Service
    **********************************/

    Route::get('services/github/repos', [GithubRepoController::class, 'index']);

    Route::get('services/github/connected-repos', [ConnectedGithubRepoController::class, 'index']);

    Route::post('services/github/connected-repos', [ConnectedGithubRepoController::class, 'store']);

    /**********************************
        Role
    **********************************/

    Route::get('roles', [RoleController::class, 'index']);

    Route::get('activities', [ActivityController::class, 'index']);

    /**********************************
        Settings
    **********************************/

    Route::get('settings', function () {
        return view('users.settings');
    });
});
