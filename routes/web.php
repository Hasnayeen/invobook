<?php

Route::get('login', 'Auth\LoginController@showLoginForm');

Route::post('login', 'Auth\LoginController@login');

Route::post('logout', 'Auth\LoginController@logout');

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');

Route::post('password/reset', 'Auth\ForgotPasswordController@reset');

Route::get('password/reset/{token}', 'Auth\ForgotPasswordController@showResetForm');

Route::post('register/invite', 'UserController@sentInvitationToRegister')
    ->middleware('auth');

Route::get('register/{token}', 'Auth\RegisterController@showRegistrationForm');

Route::post('register/{token}', 'Auth\RegisterController@confirmNewRegistration');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/', ['as' => 'home', 'uses' => 'HomeController@index']);

    Route::get('projects', 'ProjectController@index');

    Route::get('projects/{project}', 'ProjectController@single');

    Route::get('projects/{project}/tasks', 'ProjectController@tasks');

    Route::get('teams', 'TeamController@index');

    Route::get('teams/{team}', 'TeamController@index');

    Route::get('offices', 'OfficeController@index');

    Route::get('offices/{office}', 'OfficeController@index');

    Route::get('tasks/create', ['as' => 'tasks.create', 'uses' => 'TaskController@create']);

    Route::post('tasks', ['as' => 'tasks.store', 'uses' => 'TaskController@store']);

    Route::get('tasks', 'TaskController@index');

    Route::get('tasks/{task}', 'TaskController@index');

    Route::get('discussions', 'DiscussionController@index');

    Route::get('discussions/{discussion}', 'DiscussionController@index');

    Route::get('messages', 'MessageController@index');

    Route::get('messages/{message}', 'MessageController@index');

    Route::get('events', 'EventController@index');

    Route::get('events/{event}', 'EventController@index');

    Route::get('files', 'FileController@index');

    Route::get('files/{file}', 'FileController@index');

    Route::get('users', 'UserController@index');

    Route::get('users/{user}', 'UserController@index');

    Route::get('users/{user}/settings', 'UserController@index');

    Route::get('settings', 'UserController@index');
});
