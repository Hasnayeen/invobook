<x-layout>
    <x-slot name="title">{{ $project->name }}</x-slot>

    <livewire:project :project="$project"/>

    {{-- <div class="relative z-20 pt-8 flex flex-col xl:grid grid-cols-4 2xl:grid-cols-5 xl:gap-4 2xl:gap-8">
        <div class="bg-indigo-1100 rounded px-4 sm:px-8 py-4 flex flex-col lg:flex-row justify-between items-start col-span-3 2xl:col-span-4">
            <div class="flex flex-col justify-between h-full">
                <h1 class="flex items-center font-medium leading-none text-4xl text-gray-400">{{ $project->name }}</h1>
                <div class="pt-2">
                    <div class="flex items-center">
                        <span class="text-sm text-gray-400 pr-2">Cycle:</span>
                        <span class="pr-2 text-green-500 font-semibold">June Release</span>
                        <button class="bg-indigo-1300 p-2 rounded focus:outline-none">
                            <x-heroicon-o-selector class="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row lg:flex-col w-full lg:w-auto pt-2">
                <div class="">
                    <button class="bg-indigo-1300 px-6 py-2 rounded cursor-pointer flex justify-center items-center w-full lg:w-auto">
                        <x-heroicon-o-cog class="w-5 h-5" />
                        <span class="pl-2 text-lg">
                            Settings
                        </span>
                    </button>
                </div>
                <div class="py-1 px-2"></div>
                <div x-data="{showDropdown: false}" class="border-2 border-dashed border-indigo-500 px-4 py-2 rounded flex items-center justify-center relative">
                    <div class="flex items-center">
                        <x-heroicon-o-plus class="w-4 h-4" />
                        <span class="px-1">Create</span>
                    </div>
                    <button @click="showDropdown = !showDropdown" class="bg-indigo-1300 rounded p-1 focus:outline-none">
                        <x-heroicon-o-chevron-down class="w-4 h-4" />
                    </button>
                    <div :class="{'hidden': !showDropdown}" class="absolute z-30 bg-indigo-800 top-0 right-0 rounded-md shadow-dark-2xl w-48 mt-12">
                        <div>
                            <button class="flex items-center p-4 hover:bg-indigo-1300 w-full rounded-t-md">
                                <x-eva-list-outline class="w-5 h-5 fill-current" />
                                <span class="pl-2">New Task</span>
                            </button>
                        </div>
                        <div>
                            <button class="flex items-center p-4 hover:bg-indigo-1300 w-full">
                                <x-heroicon-o-clipboard-list class="w-5 h-5" />
                                <span class="pl-2">New Discussion</span>
                            </button>
                        </div>
                        <div>
                            <button class="flex items-center p-4 hover:bg-indigo-1300 w-full rounded-b-md">
                                <x-heroicon-o-calendar class="w-5 h-5" />
                                <span class="pl-2">New Event</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-indigo-1100 rounded py-3 my-4 xl:my-0 flex flex-col justify-between items-start">
            <div class="flex flex-wrap relative py-1 px-4 sm:px-8 overflow-hidden">
                @foreach ($project->members as $member)
                    <a href="{{ url('/users/' . $member->username) }}" class="-ml-2 my-1 w-10 h-10">
                        <x-avatar :url="$member->avatar" class="relative z-10 inline-block h-10 w-10 text-white" />
                    </a>
                @endforeach
                <span class="bg-white relative -ml-2 my-1 h-10 w-10 flex justify-center items-center rounded-full text-indigo-600 cursor-pointer text-center">
                    <x-heroicon-s-plus class="w-5 h-5" />
                </span>
            </div>
        </div>

    </div> --}}
</x-layout>
