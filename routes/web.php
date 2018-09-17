<?php

Route::get('login', 'Auth\LoginController@showLoginForm');

Route::post('login', 'Auth\LoginController@login');

Route::post('logout', 'Auth\LoginController@logout');

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');

Route::post('password/reset', 'Auth\ForgotPasswordController@reset');

Route::get('password/reset/{token}', 'Auth\ForgotPasswordController@showResetForm');

Route::post('register/invite', 'UserController@sentInvitationToRegister')->middleware('auth');

Route::get('register/{token}', 'Auth\RegisterController@showRegistrationForm');

Route::post('register/{token}', 'Auth\RegisterController@confirmNewRegistration');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

    /**********************************
        Project
    **********************************/

    Route::get('projects', function () {
        return abort(404);
    });

    Route::post('projects', 'ProjectController@store')->middleware('permission:create project');

    Route::get('projects/{project}', 'ProjectController@show')->middleware('granular.permission:view project->');

    /**********************************
        Team
    **********************************/

    Route::get('teams', function () {
        return abort(404);
    });

    Route::post('teams', 'TeamController@store');

    Route::get('teams/{team}', 'TeamController@show')->middleware('granular.permission:view team->');

    /**********************************
     Office
     **********************************/

    Route::get('offices', function () {
        return abort(404);
    });

    Route::get('offices/{office}', 'OfficeController@show');

    Route::get('offices/{office}/tasks', 'TaskController@index');

    /**********************************
        Member
     **********************************/

    Route::get('members', 'MemberController@index');

    Route::post('members', 'MemberController@store');

    Route::get('discussions', 'DiscussionController@index');

    Route::get('discussions/{discussion}', 'DiscussionController@index');

    /**********************************
        Messages
     **********************************/

    Route::get('messages', 'MessageController@index');

    Route::post('messages', 'MessageController@store');

    Route::get('events', 'EventController@index');

    Route::get('events/{event}', 'EventController@index');

    Route::get('files', 'FileController@index');

    Route::get('files/{file}', 'FileController@index');

    /**********************************
        Task
    **********************************/

    Route::get('tasks', 'TaskController@index');

    Route::post('tasks', ['as' => 'tasks.store', 'uses' => 'TaskController@store']);

    Route::get('tasks/{task}', 'TaskController@show');

    /**********************************
        User
    **********************************/

    Route::get('users/{user}', 'UserController@profile');

    Route::put('users/{user}/account', 'UserAccountController@update');

    Route::post('users/{user}/avatar', 'UserAvatarController@store');
});

Route::group(['middleware' => ['auth', 'permission:view admin page'], 'prefix' => 'admin'], function () {
    Route::get('/', 'AdminController@index');

    Route::get('roles', 'RoleController@index');

    Route::post('roles', 'RoleController@store')->middleware('permission:create role');

    Route::delete('roles/{role}', 'RoleController@delete')->middleware('permission:delete role');

    Route::post('roles/{role}/permissions', 'RolePermissionController@store')->middleware('permission:assign permission');

    Route::delete('roles/{role}/permissions', 'RolePermissionController@delete')->middleware('permission:revoke permission');

    Route::get('permissions', 'PermissionController@index')->middleware('permission:view permissions');

    Route::get('check-for-update', 'AboutController@checkForUpdate');

    Route::get('update-software', 'AboutController@updateSoftware');
});
