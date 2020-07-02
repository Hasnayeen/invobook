<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-version" content="{{ config('app.version') }}">
    <meta name="last-updated" content="{{ application_last_updated() }}">

    <title>{{ $title }} | {{ config('app.name', 'Goodwork') }}</title>

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

    <script src="{{ asset('js/alpine.min.js') }}" defer></script>
    @livewireStyles
</head>
<body class="bg-indigo-1300 text-gray-200">
    <div x-data="{...app()}" x-cloak id="app" class="flex">
        @if (!Auth::guest())
            <div class="fixed md:hidden flex items-center justify-end h-16 w-full px-4 bg-black z-40">
                <span @click="{navMenuShown = !navMenuShown}" class="bg-indigo-1000 p-1 rounded cursor-pointer">
                    <x-heroicon-o-menu class="w-6 h-6 text-white" />
                </span>
            </div>
            <livewire:sidebar />
        @endif
        <main class="w-full px-4 pb-12 md:px-8 md:ml-16 mt-16 md:mt-0">
            {{ $slot }}
        </main>
    </div>

    <script src="{{ asset('/js/manifest.js') }}"></script>
    <script src="{{ asset('/js/vendor.min.js') }}"></script>
    @livewireScripts
    @stack('script')

    @foreach (glob(base_path() . '/resources/views/plugin-scripts/global/*.blade.php') as $file)
        @include('plugin-scripts.global.' . basename(str_replace('.blade.php', '', $file)))
    @endforeach
    
    @stack('plugin-scripts')

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
