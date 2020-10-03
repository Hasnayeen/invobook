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
            <img src="/image/email.svg" alt="work desk" class="pt-4 hidden md:block w-64">
        </div>
        <div class=""></div>
        <div class="w-full md:bg-indigo-1000 md:w-1/2 p-8">
            <p class="text-sm text-white pb-2">@lang('auth.Forgot your account’s password or having trouble logging into your account?')</p>
            <p class="text-sm text-white pb-8">@lang('auth.Enter your email address and we’ll send you a recovery link.')</p>
            <h3 class="font-medium">Email</h3>
            @if (session('status'))
                <div class="bg-teal-100 text-teal-800 border-teal-500 border-l-2 p-2 mt-2">
                    {{ session('status') }}
                </div>
            @endif
            <form role="form" method="POST" action="{{ url('/password/email') }}">
                {{ csrf_field() }}

                <p class="py-4">
                    <input id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="email" placeholder="john.doe@example.com" name="email" value="{{ old('email') }}" required>
                    @if ($errors->has('email'))
                        <span class="text-red-light block pt-5" style="font-size: 14px;">{{ $errors->first('email') }}</span>
                    @endif
                </p>
                <p class="py-4">
                    <button type="submit" class="bg-white text-indigo-600 font-semibold px-4 py-2 rounded">Send Reset Link</button>
                </p>
            </form>
        </div>
    </div>

</body>
</html>

