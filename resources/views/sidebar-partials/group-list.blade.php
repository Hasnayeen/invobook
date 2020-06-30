<div class="bg-indigo-1000 w-64 ml-16 h-screen max-h-screen fixed z-40 md:flex flex-col shadow-dark-2xl">
    <div class="flex items-center h-16 px-4">
        <button wire:click="closeGroupList" class="flex items-center focus:outline-none">
            <x-eva-arrow-back-outline class="w-5 h-5 fill-current"/>
            <span class="pl-2">Back</span>
        </button>
    </div>
    <div class="pb-4 px-4">
        @if (count($group) === 0)
            <div>
                You're not part of any {{ $currentMenu }}
            </div>    
        @else
            @foreach ($group as $item)
                <div class="p-2 my-3 rounded bg-indigo-1100">
                    <div class="text-xl font-semibold">
                        <a href="{{ url($currentMenu . 's/' . $item['id']) }}">
                            {{ $item['name'] }}
                        </a>
                    </div>
                    <div class="text-sm">
                        {{ $item['description'] }}
                    </div>
                </div>
            @endforeach
        @endif
    </div>
</div>
