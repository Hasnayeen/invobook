<x-filament::section>
    <x-filament-panels::header :actions="$this->getCachedHeaderActions()">
        <x-slot name="heading">
            {{ __('Member Invitation') }}
        </x-slot>
    
        <x-slot name="subheading">
            {{ __('Invite new member to the team to collaborate with you.') }}
        </x-slot>
    </x-filament-panels::header>

    <x-tabs :tabs="$this->tabs()" propname="activeTab" active="teamMembers"></x-tabs>

    <div x-ref="teamMembers" @active-tab.window="$event.detail.propname === 'activeTab' ? ($event.detail.id === 'teamMembers' ? $refs.teamMembers.classList.remove('hidden') : $el.classList.add('hidden')) : null" class="">
        {{ $this->table }}
    </div>

    <div x-ref="invitations" @active-tab.window="$event.detail.propname === 'activeTab' ? ($event.detail.id === 'invitations' ? $refs.invitations.classList.remove('hidden') : $el.classList.add('hidden')) : null" class="hidden">
        <livewire:team-invitation />
    </div>

    <x-filament-actions::modals />
</x-filament::section>
