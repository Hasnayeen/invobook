<div class="py-4">
    <button wire:click="showGroup('project')" class="flex flex-col items-center w-16 py-2 px-4 focus:outline-none {{ $currentMenu === 'project' ? 'bg-indigo-1000' : '' }}" title="Projects">
        <span class="bg-indigo-1300 p-2 rounded">
            <x-heroicon-o-briefcase class="w-5 h-5" />
        </span>
    </button>
    <button wire:click="showGroup('team')" class="flex flex-col items-center w-16 py-2 px-4 focus:outline-none {{ $currentMenu === 'team' ? 'bg-indigo-1000' : '' }}" title="Teams">
        <span class="bg-indigo-1300 p-2 rounded">
            <x-heroicon-o-user-group class="w-5 h-5" />
        </span>
    </button>
    <button wire:click="showGroup('office')" class="flex flex-col items-center w-16 py-2 px-4 focus:outline-none {{ $currentMenu === 'office' ? 'bg-indigo-1000' : '' }}" title="Offices">
        <span class="bg-indigo-1300 p-2 rounded">
            <x-heroicon-o-office-building class="w-5 h-5" />
        </span>
    </button>
</div>
