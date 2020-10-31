<div>
    <x-slot name="title">{{ $project->name }}</x-slot>

    <livewire:header/>

    <div class="w-screen h-screen flex flex-col">
        <div class="mx-64 mt-20 flex-grow relative overflow-auto bg-white rounded-t-lg shadow-xl">
            <div class="h-full flex-grow overflow-auto">
                <main class="p-8 relative text-gray-800">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-2xl font-semibold text-gray-700">{{ $project->name }}</h1>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span class="text-gray-600 font-medium">Cycle:</span>
                            <div class="flex items-center">
                                <span class="font-semibold text-purple-700">October Release</span>
                                <button>
                                    <x-heroicon-s-chevron-down class="w-5 text-gray-600"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-gray-700">Members:</span>
                         <div class="flex flex-wrap relative py-1 overflow-hidden">
                            @foreach ($project->members as $member)
                                <a href="{{ url('/users/' . $member->username) }}" class="{{$loop->first ? '' : '-ml-2'}} w-8 h-8">
                                    <x-avatar :url="$member->avatar" class="relative z-10 inline-block h-8 w-8 text-white" />
                                </a>
                            @endforeach
                            <span class="bg-purple-600 relative z-30 -ml-2 h-8 w-8 flex justify-center items-center rounded-full text-white cursor-pointer text-center">
                                <x-heroicon-s-plus class="w-5 h-5" />
                            </span>
                        </div>
                    </div>
                    <div>
                        <livewire:task-board :tasks="$project->tasks" />
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
