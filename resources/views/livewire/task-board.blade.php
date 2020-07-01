<div class="py-8">
    <div class="{{ true ? '' : 'grid grid-cols-5 gap-4' }}">
        @foreach ($groupedTasks as $name => $tasks)
            <div class="pb-2">
                <div class="pb-4 flex items-center font-semibold" style="color: {{ $tasks[0]['status']['color'] }}">
                    <span class="pr-1">
                        {{ $name }}
                    </span>
                    <span class="text-sm">
                        ({{ count($tasks) }})
                    </span>
                    <x-eva-arrowhead-right-outline class="w-6 h-6 fill-current" />
                </div>
                <div class="flex flex-row flex-wrap items-start lg:-mx-2 xl:-mx-4 lg:-mt-4 pb-2">
                    @foreach ($tasks as $task)
                        <div @click="showTaskDetails(name, index, task.serial, task.id)" class="bg-black rounded shadow-dark-md my-4 md:mx-6 lg:mx-2 xl:mx-4 p-4 w-full md:w-72 lg:w-64  cursor-pointer">
                            <div class="flex justify-between items-center">
                                <p class="text-xs text-gray-400 flex flex-col">
                                    {{-- <span class="w-10 border-t-4" style="border-color: {{ $task['status']['color'] }}"></span> --}}
                                    <span class="text-xs">{{__('Due on') }}</span>
                                    <span class="text-sm text-pink-500 font-medium">{{ $task['due_on'] }}</span>
                                </p>
                                @if ($task['assigned_to'])
                                    <img src="{{ url($task['user']['avatar']) }}" class="rounded-full w-8 h-8" :title="task.user.name">
                                @endif
                            </div>
                            <div class="text-gray-100 text-left pt-2">
                                <p class="font-medium text-lg overflow-hidden">{{ $task['name'] }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endforeach
    </div>
    @if (count($groupedTasks) === 0)
        <div class="flex flex-col items-center pt-8">
            <div class="pb-4">{{ __('Don\'t you have Task to do? Go ahead, create one') }}</div>
            <img src="/image/tasks.svg" alt="task list" class="w-96">
        </div>
    @endif
</div>
