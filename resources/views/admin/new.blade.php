<x-layout>
    <x-slot name="title">Admin Panel</x-slot>

    <livewire:users :users="$users" />

    <x-slot name="script">
        <script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
    </x-slot>
    
</x-layout>
