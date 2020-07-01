<x-layout>
    <x-slot name="title">Admin Panel</x-slot>

    <livewire:users :users="$users" />

    @push('script')
        <script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
    @endpush
    
</x-layout>
