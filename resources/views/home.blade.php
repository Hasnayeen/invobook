<x-layout>
    <x-slot name="title">Home</x-slot>

    <div class="relative z-20">
        <h1 class="h-16 flex items-center font-medium text-2xl text-gray-400">Your Work</h1>

        <div class="py-4">
            <div class="w-full shadow-dark-md overflow-x-auto bg-indigo-1100 rounded-md 2xl:max-w-10xl">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 border-b-2 border-indigo-1300 text-gray-400 text-left text-sm leading-4 font-semibold uppercase tracking-wider">
                                Task in progress ({{ $currentWork->count() }})
                            </th>
                            <th class="px-6 py-3 border-b-2 border-indigo-1300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"></th>
                            <th class="px-6 py-3 border-b-2 border-indigo-1300 w-6"></th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-500">
                        @foreach ($currentWork as $task)
                            <tr>
                                <td class="px-6 py-4 whitespace-no-wrap {{ $loop->last ? '' : 'border-b-2 border-indigo-1300' }}">
                                    <div class="flex items-center">
                                        <div class="">
                                            <div class="text-xs">Due on</div>
                                            <div class="font-medium text-green-500 text-sm lg:text-base">
                                                {{ $task->due_on }}
                                            </div>
                                        </div>
                                        <div class="text-xl lg:text-4xl text-white ml-8">
                                            {{ $task->name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap text-gray-300 lg:text-lg {{ $loop->last ? '' : 'border-b-2 border-indigo-1300' }}">
                                    {{ $task->taskable->name }}
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium {{ $loop->last ? '' : 'border-b-2 border-indigo-1300' }}">
                                    <a href="{{ url('projects/' . $task->taskable->id) }}" class="hover:text-indigo-300">
                                        <x-eva-chevron-right-outline class="w-8 h-8 fill-current" />
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</x-layout>
