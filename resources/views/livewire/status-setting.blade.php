<x-filament::section>
    <x-filament-panels::header :actions="$this->getCachedHeaderActions()">
        <x-slot name="heading">
            {{ __('Statuses') }}
        </x-slot>

        <x-slot name="subheading">
            {{ __('Configure status to use in tasks.') }}
        </x-slot>
    </x-filament-panels::header>

    {{ $this->table }}

    <x-filament-actions::modals />
</x-filament::section>
