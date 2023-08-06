<x-filament::page>
    <x-tabs :tabs="$this->tabs()" active="detailsForm"></x-tabs>
    <form x-ref="detailsForm" @active-tab.window="$event.detail.propname === 'active' ? ($event.detail.id === 'detailsForm' ? $refs.detailsForm.classList.remove('hidden') : $el.classList.add('hidden')) : null" wire:submit="create" class="space-y-6">
        {{ $this->form }}
        <x-filament::form.actions
            :actions="$this->getCachedFormActions()"
            :full-width="$this->hasFullWidthFormActions()"
        />
    </form>

    <div class="hidden" x-ref="members" @active-tab.window="$event.detail.propname === 'active' ? ($event.detail.id === 'members' ? $refs.members.classList.remove('hidden') : $el.classList.add('hidden')) : null">
        <livewire:team-members />
    </div>

    <div class="hidden" x-ref="status"
        @active-tab.window="$event.detail.propname === 'active' ? ($event.detail.id === 'status' ? $refs.status.classList.remove('hidden') : $el.classList.add('hidden')) : null">
        <livewire:status-setting />
    </div>

    <x-filament-actions::modals />
</x-filament::page>
