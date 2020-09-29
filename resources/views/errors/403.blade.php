<x-layout>
    <x-slot name="title">403 - Unauthorized access</x-slot>

    <div class="text-4xl text-gray-200 container mx-auto mt-16 flex flex-col items-center justify-center font-bold min-h-screen">
        <div class="bg-indigo-900 w-64 h-64 rounded-full shadow-outline flex justify-center items-center text-6xl font-bold">
            403
        </div>
        <div class="my-8">Access Denied</div>
        <a href="{{ url('/') }}" class="bg-white text-indigo-600 no-underline text-lg font-semibold px-8 py-2 rounded-md">← Go To Home</a>
    </div>

</x-layout>
