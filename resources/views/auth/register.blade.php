<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-version" content="{{ config('app.version') }}">

    <title>Login | {{ config('app.name', 'Goodwork') }}</title>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
    <link href="{{ mix('css/main.css') }}" rel="stylesheet">

</head>
<body class="bg-indigo-1300 text-gray-200">
    <div class="container mx-4 md:mx-auto md:shadow-lg rounded-md overflow-hidden md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between">
        <div class="bg-white md:w-1/2 text-center px-8 py-4 md:block">
            <div class="text-indigo-500 font-bold text-4xl md:pt-8">GOODWORK</div>
            <p class="text-indigo-500 text-xl">{{ localize('auth.Sensible Approach to Work & Collaboration for Software Teams') }}</p>
            <img src="/image/register.svg" alt="work desk" class="pt-16 hidden md:block">
        </div>
        <div class=""></div>
        <div class="w-full md:bg-indigo-1000 md:w-1/2 p-8">
            <form role="form" method="POST" :action="url">
                @csrf
                <div class="">
                    <p class="py-4">
                        <input id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="name" placeholder="Full Name">
                        @error('name')
                            <span class="text-red-700 block pt-2">{{ $message }}</span>
                        @enderror
                    </p>
                    <p class="py-4">
                        <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="username" placeholder="Username">
                        @error('username')
                            <span class="text-red-700 block pt-2">{{ $message }}</span>
                        @enderror
                    </p>
                    <p class="py-4">
                        <input id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="email" placeholder="E-mail">
                        @error('email')
                            <span class="text-red-700 block pt-2">{{ $message }}</span>
                        @enderror
                    </p>
                    <p class="py-4">
                        <input id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="password" name="password" placeholder="Password">
                        @error('password')
                            <span class="text-red-700 block pt-2">{{ $message }}</span>
                        @enderror
                    </p>
                    <p class="py-4">
                        <button type="submit" class="text-indigo-600 bg-white font-medium py-2 px-6 rounded">{{ localize('auth.Register') }}</button>
                    </p>
                </div>
            </form>
        </div>
    </div>

</body>
</html>
