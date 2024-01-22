<x-filament::section>
    <x-slot name="heading">
        {{ __('Statuses') }}
    </x-slot>

    <x-slot name="description">
        {{ __('Configure status to use in tasks.') }}
    </x-slot>


    <x-slot name="headerEnd">
        <x-filament-actions::actions
            :actions="$this->getCachedHeaderActions()"
            class="shrink-0"
        />
    </x-slot>

    {{ $this->table }}

    <x-filament-actions::modals />
</x-filament::section>
