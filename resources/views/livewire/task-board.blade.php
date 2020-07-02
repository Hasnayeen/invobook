<div class="py-8 grid xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 2xl:gap-8">
    @if (count($groupedTasks) === 0)
        <div class="flex flex-col items-center pt-8">
            <div class="pb-4">{{ __('Don\'t you have Task to do? Go ahead, create one') }}</div>
            <img src="/image/tasks.svg" alt="task list" class="w-96">
        </div>
    @else
        <div class="{{ true ? '' : 'grid grid-cols-5 gap-8' }} xl:col-span-3 2xl:col-span-4">
            @foreach ($groupedTasks as $name => $tasks)
                <div class="pb-8">
                    <div class="pb-4 flex items-center font-semibold" style="color: {{ $tasks[0]['status']['color'] }}">
                        <span class="pr-1">
                            {{ $name }}
                        </span>
                        <span class="text-sm">
                            ({{ count($tasks) }})
                        </span>
                        <x-eva-arrowhead-right-outline class="w-6 h-6 fill-current" />
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-4 2xl:gap-8 row-gap-4">
                        @foreach ($tasks as $task)
                            <div class="bg-black rounded shadow-dark-md p-4 cursor-pointer">
                                <div class="flex justify-between items-center">
                                    <p class="text-xs text-gray-400 flex flex-col">
                                        <span class="text-xs">{{__('Due on') }}</span>
                                        <span class="text-sm text-pink-500 font-medium">{{ $task['due_on'] }}</span>
                                    </p>
                                    @if ($task['assigned_to'])
                                        <img src="{{ url($task['user']['avatar']) }}" class="rounded-full w-8 h-8" title="{{ $task['user']['name'] }}">
                                    @endif
                                </div>
                                <div class="text-gray-100 text-left pt-2">
                                    <p class="font-medium text-lg overflow-hidden">{{ str_limit($task['name']) }}</p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    @endif
    <div x-data="{hideFilter: true}" class="col-span-4 xl:col-span-1 row-start-1 xl:col-start-4 2xl:col-start-5 pb-8">
        <div class="flex items-center text-yellow-300 pb-4">
            <x-eva-funnel-outline class="w-5 h-5 fill-current" />
            <span class="">Filters</span>
            <button @click="hideFilter = false" :class="{'hidden': !hideFilter}" class="pl-2 xl:hidden">
                <x-heroicon-o-eye-off class="w-5 h-5" />
            </button>
            <button @click="hideFilter = true" :class="{'hidden': hideFilter}" class="pl-2 xl:hidden">
                <x-heroicon-o-eye class="w-5 h-5" />
            </button>
        </div>
        <div :class="{'hidden': hideFilter}" class="xl:block bg-indigo-1100 rounded-md px-8 py-8">
            <div class="text-gray-300 border-b border-gray-500 flex justify-between items-center pb-1">
                <span class="leading-none">Status</span>
                <x-eva-refresh-outline class="w-4 h-4 fill-current" />
            </div>
            <div class="flex flex-wrap -mx-2 text-xs pt-2">
                <button class="bg-black m-2 p-2 rounded font-bold">To Do</button>
                <button class="bg-yellow-300 text-gray-900 m-2 p-2 rounded font-bold">In Progress</button>
                <button class="bg-black m-2 p-2 rounded font-bold">In Review</button>
                <button class="bg-black m-2 p-2 rounded font-bold">Completed</button>
                <button class="bg-black m-2 p-2 rounded font-bold">Cancelled</button>
            </div>
            <div class="text-gray-300 border-b border-gray-500 flex justify-between items-center pt-4">
                <span>Assignee</span>
                <x-eva-refresh-outline class="w-4 h-4 fill-current" />
            </div>
            <div class="inline-block relative w-full mt-4">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <x-heroicon-o-chevron-down class="w-4 h-4" />
                </div>
            </div>
            <div class="text-gray-300 border-b border-gray-500 flex justify-between items-center pt-4">
                <span>Tags</span>
                <x-eva-refresh-outline class="w-4 h-4 fill-current" />
            </div>
            <div class="inline-block relative w-full mt-4">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <x-heroicon-o-chevron-down class="w-4 h-4" />
                </div>
            </div>
            <div class="text-gray-300 border-b border-gray-500 flex justify-between items-center pt-4">
                <span>Due on</span>
                <x-eva-refresh-outline class="w-4 h-4 fill-current" />
            </div>
            <div class="inline-block relative w-full mt-4">
                <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <x-heroicon-o-chevron-down class="w-4 h-4" />
                </div>
            </div>
        </div>
    </div>
</div>
