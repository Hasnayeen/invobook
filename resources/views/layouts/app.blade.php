<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-version" content="{{ about('current_version') }}">
    <meta name="last-updated" content="{{ about('last_updated') }}">

    <title>{{ config('app.name', 'GOODWORK') }} | {{ $title }}</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600">
    <link href="{{ mix('css/main.min.css') }}" rel="stylesheet">

    <script defer src="{{ asset('js/fontawesome-all.min.js') }}" integrity="sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB" crossorigin="anonymous"></script>

    @yield('style')

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    @if (!Auth::guest())
    <script>
        window.navbar = {!! json_encode([
            'user' => Auth::user(),
            'navUrl' => ['site' => url('/'), 'logout' => url('/logout')]
        ]) !!};
    </script>
    @endif
</head>
<body class="bg-grey-lighter">
    <div id="app">
        <div class="h-1" style="background: linear-gradient(to right, #4DC0B5, #3490DC);"></div>
        @if (!Auth::guest())
        <navbar></navbar>
        <notification-popup></notification-popup>
        @endif


        {{ $slot }}
    </div>

    <script src="{{ asset('/js/manifest.js') }}"></script>
    <script src="{{ asset('/js/vendor.min.js') }}"></script>
    {{ $script }}
</body>
</html>
