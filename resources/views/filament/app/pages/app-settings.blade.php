<x-filament::page>
    <form wire:submit="save" class="space-y-6">
        {{ $this->form }}
    
        <x-filament::button type="submit">
            Save
        </x-filament::button>
    </form>
    
    <x-filament-actions::modals />
</x-filament::page>
