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
        'es-CR' => 'Spanish (Costa Rica)',
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
        'ko-Kr' => 'Korean',
        'la'    => 'Latin',
        'ms'    => 'Malay',
        'ne'    => 'Nepali',
        'nl-NL' => 'Dutch (Netherlands)',
        'pl'    => 'Polish',
        'pt-BR' => 'Portuguese (Brazil)',
        'ru-RU' => 'Russian (Russia)',
        'sr'    => 'Serbian',
        'sv-se' => 'Swedish (Sweden)',
        'th'    => 'Thai (Thai)',
        'tr-TR' => 'Turkish (Turkey)',
        'vi-VN' => 'Vietnamese',
        'zh-CN' => 'Simplified Chinese',
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
        'admin'              => 'admin',
        'users/{user}'       => 'user',
        'settings'           => 'user',
    ],
];
