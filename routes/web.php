<?php

/**********************************
    Login
**********************************/

Route::get('login', 'Auth\LoginController@showLoginForm');

Route::post('login', 'Auth\LoginController@login');

Route::post('logout', 'Auth\LoginController@logout');

/**********************************
    Password
**********************************/

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');

Route::post('password/reset', 'Auth\ResetPasswordController@reset');

Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm');

/**********************************
    Registration
**********************************/

Route::post('register/invite', 'UserController@sentInvitationToRegister')->middleware('auth');

Route::get('register/{token}', 'Auth\RegisterController@showRegistrationForm');

Route::post('register/{token}', 'Auth\RegisterController@confirmNewRegistration');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', 'HomeController@index')->name('home');

    Route::get('search', 'SearchController@index');

    /**********************************
        Project
    **********************************/

    Route::get('projects', 'ProjectController@index');

    Route::post('projects', 'ProjectController@store');

    Route::get('projects/{project}', 'ProjectController@show');

    Route::delete('projects/{project}', 'ProjectController@delete');

    /**********************************
        Team
    **********************************/

    Route::get('teams', 'TeamController@index');

    Route::post('teams', 'TeamController@store');

    Route::get('teams/{team}', 'TeamController@show');

    Route::delete('teams/{team}', 'TeamController@delete');

    /**********************************
        Office
     **********************************/

    Route::get('offices', 'OfficeController@index');

    Route::post('offices', 'OfficeController@store');

    Route::get('offices/{office}', 'OfficeController@show');

    Route::delete('offices/{office}', 'OfficeController@delete');

    /**********************************
        Member
     **********************************/

    Route::get('members', 'MemberController@index');

    Route::post('members', 'MemberController@store');

    Route::delete('members', 'MemberController@destroy');

    /**********************************
        Discussion
     **********************************/

    Route::get('discussions', 'DiscussionController@index');

    Route::post('discussions', 'DiscussionController@store');

    Route::get('discussions/{discussion}', 'DiscussionController@show');

    Route::patch('discussions/{discussion}', 'DiscussionController@update');

    Route::delete('discussions/{discussion}', 'DiscussionController@delete');

    /**********************************
        Category
    **********************************/

    Route::get('categories', 'CategoryController@index');

    Route::post('categories', 'CategoryController@store');

    /**********************************
        Message
     **********************************/

    Route::get('messages', 'MessageController@index');

    Route::get('direct-messages', 'DirectMessageController@index');

    Route::post('messages', 'MessageController@store');

    Route::put('messages/{message}', 'MessageController@update');

    Route::delete('messages/{message}', 'MessageController@delete');

    /**********************************
        Event
     **********************************/

    Route::get('events', 'EventController@index');

    Route::post('events', 'EventController@store');

    Route::get('events/{event}', 'EventController@index');

    /**********************************
        Task
    **********************************/

    Route::get('tasks', 'TaskController@index');

    Route::post('tasks', 'TaskController@store');

    Route::get('tasks/{task}', 'TaskController@show');

    Route::put('tasks/{task}', 'TaskController@update');

    Route::delete('tasks/{task}', 'TaskController@delete');

    Route::put('tasks/{task}/statuses', 'TaskStatusController@update');

    /**********************************
        Tags
    **********************************/

    Route::get('tags', 'TagController@index');

    Route::post('tags', 'TagController@store');

    Route::post('tasks/{task}/tags', 'TaskTagController@store');

    Route::delete('tasks/{task}/tags/{tag}', 'TaskTagController@delete');

    /**********************************
        File
    **********************************/

    Route::get('files', 'FileController@index');

    Route::get('files/{file}', 'FileController@index');

    Route::post('files', 'FileController@store');

    /**********************************
        Comment
    **********************************/

    Route::get('/comments', 'CommentController@index');

    Route::post('/comments', 'CommentController@store');

    Route::delete('/comments/{comment}', 'CommentController@delete');

    /**********************************
        Notification
    **********************************/

    Route::get('notifications', 'NotificationController@index');

    Route::put('notifications', 'NotificationController@update');

    /**********************************
        User
    **********************************/

    Route::get('users', 'UserController@index');

    Route::get('users/{user}', 'UserController@show');

    Route::get('username', 'UserController@checkUsername');

    Route::put('users/{user}/account', 'UserAccountController@update');

    Route::put('users/{user}/profile', 'UserProfileController@update');

    Route::post('users/{user}/avatar', 'UserAvatarController@store');

    /**********************************
        Status
    **********************************/

    Route::get('statuses', 'StatusController@index');

    Route::post('statuses', 'StatusController@store');

    /**********************************
        Github Service
    **********************************/

    Route::get('services/github/repos', 'GithubRepoController@index');

    Route::get('services/github/connected-repos', 'ConnectedGithubRepoController@index');

    Route::post('services/github/connected-repos', 'ConnectedGithubRepoController@store');
});

    /**********************************
        Admin
    **********************************/

Route::group(['middleware' => ['auth', 'admin'], 'prefix' => 'admin'], function () {
    Route::get('/', 'AdminController@index');

    Route::get('roles', 'RoleController@index');

    Route::post('roles', 'RoleController@store');

    Route::delete('roles/{role}', 'RoleController@delete');

    Route::post('roles/{role}/permissions', 'RolePermissionController@store');

    Route::delete('roles/{role}/permissions', 'RolePermissionController@delete');

    Route::get('permissions', 'PermissionController@index');

    Route::get('activities', 'ActivityController@index');

    Route::get('services', 'ServiceController@index');

    Route::post('services', 'ServiceController@store');

    Route::put('services/{service}', 'ServiceController@update');

    Route::get('check-for-update', 'AboutController@checkForUpdate');
});
