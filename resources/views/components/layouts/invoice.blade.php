@php
    use Illuminate\Support\Facades\Vite;
@endphp

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />

    <meta name="application-name" content="{{ config('app.name') }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>{{ config('app.name') }}</title>

    <style>
        [x-cloak] {
            display: none !important;
        }
    </style>

    @filamentStyles
    @if (isset($preview))
        @vite('resources/css/app.css')
    @else
        {!! Vite::content('resources/css/template/template.css') !!}
    @endif
</head>

<body class="w-[21cm] h-[29.7cm]">
    {{ $slot }}

    @filamentScripts
    @vite('resources/js/app.js')
</body>

</html>
