<?php

Route::get('/', 'HomeController@index');

Route::post('login', 'Auth\LoginController@login');

Route::post('logout', 'Auth\LoginController@logout');
