<div>
    <livewire:header/>

    <div class="w-screen h-screen flex flex-col">
        <main class="mx-64 mt-20 p-8 flex-grow bg-white relative rounded-t-lg shadow-xl text-gray-800">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-2xl font-semibold text-gray-700">{{ $project->name }}</h1>
                </div>
                <div class="">

                </div>
            </div>
            <div>
                <livewire:task-board :tasks="$project->tasks" />
            </div>
        </main>
    </div>
</div>
