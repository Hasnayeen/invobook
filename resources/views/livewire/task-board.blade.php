<div class="py-8 grid xl:grid-cols-4 xl:gap-4 2xl:grid-cols-5 2xl:gap-8">
    @if (count($groupedTasks) === 0)
        <div class="flex flex-col items-center pt-8">
            <div class="pb-4">{{ __('Don\'t you have Task to do? Go ahead, create one') }}</div>
            <img src="/image/tasks.svg" alt="task list" class="w-96">
        </div>
    @else
        <div class="{{ true ? '' : 'grid grid-cols-5 gap-8' }} xl:col-span-4 2xl:col-span-5">
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
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 sm:gap-4 2xl:gap-8 row-gap-4">
                        @foreach ($tasks as $task)
                            @isset($task)
                                
                        {{-- @foreach ($tasks as $task) --}}
                            <div class="bg-azure-100 rounded shadow-md p-4 cursor-pointer">
                                <div class="flex justify-between items-center">
                                    <p class="text-xs text-gray-700 flex flex-col">
                                        <span class="text-xs">{{__('Due on') }}</span>
                                        <span class="text-sm text-purple-800 font-medium">{{ $task['due_on'] }}</span>
                                    </p>
                                    @if ($task['assigned_to'])
                                        <img src="{{ url($task['user']['avatar']) }}" class="rounded-full w-8 h-8" title="{{ $task['user']['name'] }}">
                                    @endif
                                </div>
                                <div class="text-gray-800 text-left pt-2">
                                    <p class="font-medium text-lg overflow-hidden">{{ str_limit($task['name']) }}</p>
                                </div>
                            </div>
                            @endisset
                        {{-- @endforeach --}}
                        @endforeach
                    </div>
                </div>
            @endforeach
        </div>
    @endif
</div>
