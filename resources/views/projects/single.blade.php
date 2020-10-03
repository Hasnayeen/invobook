<x-layout>
    <x-slot name="title">{{ $project->name }}</x-slot>

    <livewire:project :project="$project"/>

</x-layout>
