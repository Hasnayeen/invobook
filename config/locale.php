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
        'bn'    => 'Bengali',
        'bs'    => 'Bosnian',
        'da'    => 'Danish',
        'de'    => 'German',
        'en'    => 'English',
        'es-ES' => 'Spanish (Spain)',
        'es-MX' => 'Spanish (Mexican)',
        'fa'    => 'Farsi',
        'fi'    => 'Finnish',
        'fr-FR' => 'French (France)',
        'hi'    => 'Hindi (India)',
        'hr'    => 'Croatian',
        'id'    => 'Bahasa (Indonesia)',
        'it-IT' => 'Italian (Italy)',
        'jp'    => 'Japanese',
        'la'    => 'Latin',
        'ms'    => 'Malay',
        'ne'    => 'Nepali',
        'nl-NL' => 'Dutch (Netherlands)',
        'pl'    => 'Polish',
        'pt-BR' => 'Portuguese (Brazil)',
        'ru-RU' => 'Russian (Russia)',
        'sv-se' => 'Swedish (Sweden)',
        'th'    => 'Thai (Thai)',
        'tr-TR' => 'Turkish (Turkey)',
        'vi-VN' => 'Vietnamese',
    ],

    /*
    |--------------------------------------------------------------------------
    | Route to File mapping
    |--------------------------------------------------------------------------
    |
    | This settings determine which language file to load for a route.
    | Route name as key and file name as value.
    |
    */
    'route_to_file' => [
        '/'                  => 'home',
        'projects/{project}' => 'project',
        'teams/{team}'       => 'project',
        'offices/{office}'   => 'project',
        'admin'              => 'admin',
        'users/{user}'       => 'user',
        'settings'           => 'user',
    ],
];
