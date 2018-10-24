@component('layouts.app')
    @slot('title') Reset password @endslot

        <div class="bg-white container mx-4 md:mx-auto shadow-lg mt-32 flex flex-row md:w-3/5 xxl:w-2/5 justify-between">
            <div class="w-1/2 text-center bg-teal-light p-4 hidden md:block">
                <p class="text-white font-bold text-4xl pt-8 mt-8">GOODWORK</p>
                <p class="text-white text-xl pt-4">Sane way to manage work</p>
            </div>
            <div class=""></div>
            <div class="w-full md:w-1/2 p-8">
                <h3>Reset Password</h3>
                <hr>
                @if (session('status'))
                    <div class="alert alert-success">
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
                        <button type="submit" class="btn">Reset Password</button>
                    </p>
                </form>
            </div>
        </div>

    @slot('script') @endslot
@endcomponent
