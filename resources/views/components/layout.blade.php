<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-version" content="{{ config('app.version') }}">

    <title>{{ $title }} | {{ config('app.name', 'Goodwork') }}</title>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
    <link href="{{ mix('css/main.css') }}" rel="stylesheet">

    @yield('style')

    @livewireStyles
    @bukStyles

    @livewireScripts
    <script src="{{ asset('js/alpine.min.js') }}" defer></script>
</head>
<body class="bg-gray-100 text-gray-200">

    {{ $slot }}

    @stack('script')

    @foreach (glob(base_path() . '/resources/views/plugin-scripts/global/*.blade.php') as $file)
        @include('plugin-scripts.global.' . basename(str_replace('.blade.php', '', $file)))
    @endforeach
    
    @stack('plugin-scripts')
    @bukScripts
    <script>
        function app() {
            return {
                navMenuShown: false,
                userMenuShown: false,
            }
        }
        window.livewire.on('sidebarDomUpdated', () => {
            document.getElementById('user-extra-menu').classList.add('hidden')
        })
    </script>
</body>
</html>
