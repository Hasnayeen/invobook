<x-filament-panels::page>
    <div x-data="{
        active: 'kanban'
    }">
        <div class="pb-8 flex justify-end space-x-4">
            <button class="fa-link text-gray-500 bg-transparent ring-0" @click="active = 'table'">
                <x-lucide-table />
            </button>
            <button class="fa-link text-gray-500 bg-transparent ring-0" @click="active = 'kanban'">
                <x-lucide-layout-grid />
            </button>
        </div>
        <template x-if="active === 'kanban'">
            {{ $this->infolist }}
        </template>
        <template x-if="active === 'table'">
            {{ $this->table }}
        </template>
    </div>
</x-filament-panels::page>
