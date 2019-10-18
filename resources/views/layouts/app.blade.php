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

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet"> 
    <link href="{{ mix('css/main.min.css') }}" rel="stylesheet">

    @yield('style')

    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
        let impersonating = false
        let user = {}
        let authenticated = false
    </script>

    @if (!Auth::guest())
    <script>
        authenticated = true
        user = authUser = {!! json_encode(Auth::user()->load('role')) !!}
        let navUrl = {!! json_encode([
            'site' => url('/'),
            'logout' => url('/logout')
        ]) !!};
    </script>
    @endif

    @impersonating
    <script>
        impersonating = true
    </script>
    @endImpersonating

</head>
<body class="bg-gray-200 text-gray-700">
    <main>
        <div id="app">
            <div class="h-1" style="background: linear-gradient(to right, #4DC0B5, #3490DC);"></div>
            @if (!Auth::guest())
            <loading-modal></loading-modal>
            <navbar></navbar>
            <notification-popup></notification-popup>
            <message-box></message-box>
            <timer></timer>
            @endif


            {{ $slot }}
        </div>
    </main>

    <script src="{{ asset('/js/manifest.js') }}"></script>
    <script src="{{ asset('/js/vendor.min.js') }}"></script>
    {{ $script }}
</body>
</html>
