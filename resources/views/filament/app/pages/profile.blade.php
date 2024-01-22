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
                icon="lucide-lock"
                alpine-active="activeTab === 'updatePasswordForm'"
                x-on:click="activeTab = 'updatePasswordForm'"
            >
                {{ __('Update Password') }}
            </x-filament::tabs.item>

            <x-filament::tabs.item
                icon="lucide-banknote"
                alpine-active="activeTab === 'rateForm'"
                x-on:click="activeTab = 'rateForm'"
            >
                {{ __('Rate') }}
            </x-filament::tabs.item>
        </x-filament::tabs>

        <form x-ref="detailsForm" :class="activeTab === 'detailsForm' || 'hidden'" class="space-y-6" wire:submit="saveDetails">
            {{ $this->detailsForm }}
            <x-filament::button type="submit">
                {{ __('Save') }}
            </x-filament::button>
        </form>

        <form x-ref="updatePasswordForm" :class="activeTab === 'updatePasswordForm' || 'hidden'" class="space-y-6" wire:submit="savePassword">
            {{ $this->updatePasswordForm }}
            <x-filament::button type="submit">
                {{ __('Save') }}
            </x-filament::button>
        </form>

        <form x-ref="rateForm" :class="activeTab === 'rateForm' || 'hidden'" class="space-y-6" wire:submit="saveRates">
            {{ $this->rateForm }}
            <x-filament::button type="submit">
                {{ __('Save') }}
            </x-filament::button>
        </form>
    </div>
    <x-filament-actions::modals />
</x-filament::page>
