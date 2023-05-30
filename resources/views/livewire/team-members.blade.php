<x-filament::card>
    <x-filament::header :actions="$this->getCachedHeaderActions()">
        <x-slot name="heading">
            {{ __('Member Invitation') }}
        </x-slot>
    
        <x-slot name="subheading">
            {{ __('Invite new member to the team to collaborate with you.') }}
        </x-slot>
    </x-filament::header>

    <x-tabs :tabs="$this->tabs()" propname="activeTab" active="teamMembers"></x-tabs>

    <x-filament-actions::modals />
</x-filament::card>
