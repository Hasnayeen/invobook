@props([
    'tabs',
    'active' => null,
    'propname' => 'active',
])

<div x-data="{ {{ $propname }}: '{{ $active }}'}" @active-tab.window="$event.detail.propname === '{{ $propname }}' ? {{ $propname }} = $event.detail.id : null" class="border-b border-gray-200 dark:border-gray-700" wire:ignore>
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        @foreach ($tabs as $tab)
            <x-tab-item :propname="$propname" :id="$tab['id']" :icon="$tab['icon'] ?? null" :disabled="$tab['disabled'] ?? null">{{ $tab['label'] }}</x-tab-item>
        @endforeach
    </ul>
</div>
