<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-version" content="{{ config('app.version') }}">

    <title>Reset Password | {{ config('app.name', 'Goodwork') }}</title>

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
    <link href="{{ mix('css/main.css') }}" rel="stylesheet">

</head>
<body class="bg-indigo-1300 text-gray-200">

    <div class="container mx-4 md:mx-auto md:shadow-lg rounded-md overflow-hidden md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between">
        <div class="bg-white md:w-1/2 text-center md:flex flex-col items-center px-8 py-4">
            <p class="text-indigo-600 font-bold text-4xl">GOODWORK</p>
            <p class="text-indigo-600 text-xl">@lang('auth.Sensible Approach to Work & Collaboration for Software Teams')</p>
            <img src="/image/password.svg" alt="work desk" class="pt-4 hidden md:block w-96">
        </div>
        <div class=""></div>
        <div class="w-full md:bg-indigo-1000 md:w-1/2 p-8">
            <h3 class="text-gray-200 font-medium">@lang('auth.Reset Password')</h3>
            @if (session('status'))
                <div class="">
                    {{ session('status') }}
                </div>
            @endif
            <form role="form" method="POST" action="{{ url('/password/reset') }}">
                {{ csrf_field() }}

                <input type="hidden" name="token" value="{{ $token }}">

                <p class="py-4">
                    <input id="email" type="email" name="email" placeholder="E-mail" value="{{ $email ?? old('email') }}" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  required>
                    @if ($errors->has('email'))
                        <span class="text-red-light block pt-5" style="font-size: 14px;">{{ $errors->first('email') }}</span>
                    @endif
                </p>
                <p class="py-4">
                    <input id="password" type="password" name="password" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  required>
                    @if ($errors->has('password'))
                        <span class="text-red-light block pt-5" style="font-size: 14px;">{{ $errors->first('password') }}</span>
                    @endif
                </p>
                <p class="py-4">
                    <input id="password-confirm" type="password" name="password_confirmation" placeholder="Password Confirmation" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  required>
                    @if ($errors->has('password_confirmation'))
                        <span class="text-red-light block pt-5" style="font-size: 14px;">{{ $errors->first('password_confirmation') }}</span>
                    @endif
                </p>
                <p class="py-4">
                    <button type="submit" class="text-indigo-600 font-semibold bg-white px-4 py-2 rounded">@lang('auth.Reset Password')</button>
                </p>
            </form>
        </div>
    </div>

</body>
</html>
