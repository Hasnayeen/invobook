@if (count($group) === 0)
    <div>
        You're not part of any {{ $type }}
    </div>    
@else
    @foreach ($group as $item)
        <div class="p-2 my-3 rounded bg-indigo-1100">
            <div class="text-xl font-semibold">
                <a href="">
                    {{ $item['name'] }}
                </a>
            </div>
            <div class="text-sm">
                {{ $item['description'] }}
            </div>
        </div>
    @endforeach
@endif