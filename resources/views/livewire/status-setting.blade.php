<x-filament::card>
    <x-filament::header :actions="$this->getCachedHeaderActions()">
        <x-slot name="heading">
            {{ __('Statuses') }}
        </x-slot>

        <x-slot name="subheading">
            {{ __('Configure status to use in tasks.') }}
        </x-slot>
    </x-filament::header>

    {{ $this->table }}

    <x-filament-actions::modals />
</x-filament::card>
