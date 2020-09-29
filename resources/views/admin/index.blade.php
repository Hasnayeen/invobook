<x-layout>
    <x-slot name="title">Admin Panel</x-slot>

    <livewire:users :users="$users" />

    @push('plugin-scripts')
        @foreach (glob(base_path() . '/resources/views/plugin-scripts/admin/*.blade.php') as $file)
            @include('plugin-scripts.admin.' . basename(str_replace('.blade.php', '', $file)))
        @endforeach
    @endpush
    
</x-layout>
