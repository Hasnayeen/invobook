@props([
    'id',
    'icon' => null,
    'disabled' => false,
    'badge' => null,
    'propname' => 'active',
])

<li class="mr-2">
    @if ($disabled)
        <button disabled class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</button>
    @else
        <button @click="$dispatch('active-tab', { propname: '{{ $propname }}', id: '{{ $id }}'})"
            :class="{{ $propname }} === '{{ $id }}'
                ? 'text-primary-600 border-primary-600 rounded-t-lg dark:text-primary-500 dark:border-primary-500'
                : 'border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'"
            class="inline-flex p-4 border-b group">
            @if ($icon)
                <x-dynamic-component :component="$icon"
                    :class="{{ $propname }} === '{{ $id }}'
                        ? 'text-primary-600 dark:text-primary-500'
                        : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'"
                    class="w-5 h-5" />
            @endif
            <span class="px-2">
                {{ $slot }}
            </span>
            @if ($badge)
                <span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-500">{{ $badge }}</span>
            @endif
        </button>
    @endif
</li>
