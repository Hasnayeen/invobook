<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'GOODWORK') }} | {{ $title }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,600">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
    @yield('style')

    <!-- Scripts -->
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
        <invite-modal></invite-modal>
        @endif

        {{ $slot }}
    </div>
    <!-- Scripts -->
    {{ $script }}
</body>
</html>
