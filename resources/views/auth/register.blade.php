@component('layouts.app')

@slot('title') Register @endslot
<div class="md:bg-white container md:mx-4 md:mx-auto md:shadow-lg rounded md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between">
    <div class="md:w-1/2 text-center px-8 py-4 md:block">
        <div class="text-indigo-500 font-bold text-4xl md:pt-8">GOODWORK</div>
        <p class="text-indigo-500 text-xl">{{ localize('auth.Sensible Approach to Work & Collaboration for Software Teams') }}</p>
        <img src="/image/register.svg" alt="work desk" class="pt-16 hidden md:block">
    </div>
    <div class=""></div>
    <div class="w-full md:bg-indigo-100 md:w-1/2 p-8">
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
                    <button type="submit" class="bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-medium py-2 px-4 rounded">{{ localize('auth.Register') }}</button>
                </p>
            </div>
        </form>
    </div>
</div>

@slot('script')
@endslot
@endcomponent
