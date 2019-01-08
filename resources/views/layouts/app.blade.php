<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-version" content="{{ config('app.version') }}">
    <meta name="last-updated" content="{{ application_last_updated() }}">

    <title>{{ config('app.name', 'GOODWORK') }} | {{ $title }}</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600">
    <link href="{{ mix('css/main.min.css') }}" rel="stylesheet">

    @yield('style')

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
    @if (!Auth::guest())
    <script>
        let user = {!! json_encode(Auth::user()) !!}
        let navUrl = {!! json_encode([
            'site' => url('/'),
            'logout' => url('/logout')
        ]) !!};
    </script>
    @endif
</head>
<body class="bg-grey-lighter">
    <main>
        <div id="app">
            <div class="h-1" style="background: linear-gradient(to right, #4DC0B5, #3490DC);"></div>
            @if (!Auth::guest())
            <loading-modal></loading-modal>
            <navbar></navbar>
            <notification-popup></notification-popup>
            <message-box></message-box>
            @endif


            {{ $slot }}
        </div>
    </main>

    <script src="{{ asset('/js/manifest.js') }}"></script>
    <script src="{{ asset('/js/vendor.min.js') }}"></script>
    {{ $script }}
</body>
</html>
