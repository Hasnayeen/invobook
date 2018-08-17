<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Goodwork') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body class="bg-teal-light font-sans font-normal antialiased">
    <div class="flex flex-col">
        <div class="min-h-screen flex justify-center mt-16">
            <div class="flex flex-col justify-around h-full">
                <div>
                    <h1 class="text-white text-center font-thin tracking-wide text-5xl mb-2">
                        {{ config('app.name', 'Goodwork') }}
                    </h1>
                    <h2 class="text-white text-center font-thin tracking-wide text-3xl mb-6">
                        Installation Wizard
                    </h2>
                    {{-- <ul class="list-reset">
                        <li class="inline pr-8">
                            <a href="https://laravel.com/docs" class="no-underline hover:underline text-sm font-normal text-teal-darker uppercase" title="Documentation">Documentation</a>
                        </li>
                        <li class="inline pr-8">
                            <a href="https://laracasts.com" class="no-underline hover:underline text-sm font-normal text-teal-darker uppercase" title="Laracasts">Laracasts</a>
                        </li>
                        <li class="inline pr-8">
                            <a href="https://laravel-news.com" class="no-underline hover:underline text-sm font-normal text-teal-darker uppercase" title="News">News</a>
                        </li>
                        <li class="inline pr-8">
                            <a href="https://forge.laravel.com" class="no-underline hover:underline text-sm font-normal text-teal-darker uppercase" title="Forge">Forge</a>
                        </li>
                        <li class="inline pr-8">
                            <a href="https://github.com/laravel/laravel" class="no-underline hover:underline text-sm font-normal text-teal-darker uppercase" title="GitHub">GitHub</a>
                        </li>
                    </ul> --}}
                </div>
            </div>
        </div>
    </div>
</body>
</html>