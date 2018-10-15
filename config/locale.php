<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Language Support
    |--------------------------------------------------------------------------
    |
    | This file contains all the available language support
    |
    */

    'lang' => [
        'en'    => 'English',
        'es-ES' => 'Spanish (Spain)',
        'pt-BR' => 'Portuguese (Brazil)',
        'nl-NL' => 'Dutch (Netherlands)',
        'ar'    => 'Arabic',
    ],

    'route_to_file' => [
        '/'                  => 'home',
        'projects/{project}' => 'project',
        'teams/{team}'       => 'project',
        'offices/{office}'   => 'project',
        'admin'              => 'admin',
        'users/{user}'       => 'user',
    ],
];
