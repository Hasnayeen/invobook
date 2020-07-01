<x-layout>
    <x-slot name="title">{{ $project->name }}</x-slot>

    <div class="relative z-20 pt-8">
        <div class="bg-indigo-1000 rounded px-8 py-4 flex justify-between items-start">
            <div>
                <h1 class="flex items-center font-medium leading-none text-3xl text-gray-400">{{ $project->name }}</h1>
                <div class="py-2">
                    <div class="flex items-center">
                        <span class="text-sm text-gray-400 pr-2">Cycle:</span>
                        <span class="pr-2 text-green-500 font-semibold">June Release</span>
                        <button class="bg-indigo-1300 p-2 rounded focus:outline-none">
                            <x-heroicon-o-selector class="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap relative py-1 overflow-hidden">
                @foreach ($project->members as $member)
                    <a href="{{ url('/users/' . $member->username) }}" class="{{$loop->first ? '' : '-ml-2'}} w-10 h-10">
                        <x-avatar :url="$member->avatar" class="relative z-10 inline-block h-10 w-10 text-white" />
                    </a>
                @endforeach
                <span class="bg-white relative z-30 -ml-2 h-10 w-10 flex justify-center items-center rounded-full text-indigo-600 cursor-pointer text-center">
                    <x-heroicon-s-plus class="w-5 h-5" />
                </span>
            </div>
            <div class="">
                <button class="bg-indigo-1300 px-6 py-3 rounded cursor-pointer flex items-center">
                    <x-heroicon-o-cog class="w-5 h-5" />
                    <span class="pl-2">
                        Settings
                    </span>
                </button>
            </div>
        </div>
    </div>

    <livewire:task-board :tasks="$project->tasks" />

    @push('script')
        <script src="//{{ Request::getHost() }}:6001/socket.io/socket.io.js"></script>
    @endpush
    
</x-layout>

