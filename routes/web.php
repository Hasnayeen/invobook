<?php

Route::get('login', 'Auth\LoginController@showLoginForm');

Route::post('login', 'Auth\LoginController@login');

Route::post('logout', 'Auth\LoginController@logout');

Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');

Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm');

Route::post('password/reset', 'Auth\ForgotPasswordController@reset');

Route::get('password/reset/{token}', 'Auth\ForgotPasswordController@showResetForm');

Route::group(['middleware' => 'auth'], function() {

    Route::get('/', 'HomeController@index');

    Route::get('projects', 'ProjectController@index');

    Route::get('projects/{project}', 'ProjectController@index');

    Route::get('teams', 'TeamController@index');
    
    Route::get('teams/{team}', 'TeamController@index');

    Route::get('offices', 'OfficeController@index');
    
    Route::get('offices/{office}', 'OfficeController@index');

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