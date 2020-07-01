<x-layout>
    <x-slot name="title">{{ $project->name }}</x-slot>

    @push('script')
        <script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
    @endpush
    
</x-layout>

