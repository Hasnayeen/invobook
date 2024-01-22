<x-filament::page>
    <div x-data="{ activeTab: 'detailsForm' }" class="space-y-6">
        <x-filament::tabs label="Content tabs" contained>
            <x-filament::tabs.item
                icon="lucide-file-text"
                alpine-active="activeTab === 'detailsForm'"
                x-on:click="activeTab = 'detailsForm'"
            >
                {{ __('Details') }}
            </x-filament::tabs.item>

            <x-filament::tabs.item
                icon="lucide-users-2"
                alpine-active="activeTab === 'members'"
                x-on:click="activeTab = 'members'"
            >
                {{ __('Members') }}
            </x-filament::tabs.item>

            <x-filament::tabs.item
                icon="lucide-list-todo"
                alpine-active="activeTab === 'status'"
                x-on:click="activeTab = 'status'"
            >
                {{ __('Status') }}
            </x-filament::tabs.item>
        </x-filament::tabs>

        <form x-ref="detailsForm" :class="activeTab === 'detailsForm' || 'hidden'" wire:submit="create" class="space-y-6">
            {{ $this->form }}
            <x-filament::button type="submit">
                {{ __('Save') }}
            </x-filament::button>
        </form>

        <div x-ref="members" :class="activeTab === 'members' || 'hidden'">
            <livewire:team-members />
        </div>

        <div x-ref="status" :class="activeTab === 'status' || 'hidden'">
            <livewire:status-setting />
        </div>
    </div>
</x-filament::page>
