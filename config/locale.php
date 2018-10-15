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
        'ar'    => 'Arabic',
        'en'    => 'English',
        'es-ES' => 'Spanish (Spain)',
        'fr-FR' => 'French (France)',
        'nl-NL' => 'Dutch (Netherlands)',
        'pt-BR' => 'Portuguese (Brazil)',
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
