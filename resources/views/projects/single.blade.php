<x-layout>
    <x-slot name="title">{{ $project->name }}</x-slot>

    <x-slot name="script">
        <script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
    </x-slot>
    
</x-layout>

