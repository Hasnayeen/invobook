<aside :class="{'flex': navMenuShown, 'hidden': !navMenuShown}" class="md:flex">
    <div class="bg-indigo-1100 w-16 h-screen max-h-screen fixed z-50 md:flex flex-col justify-between  {{ $showGroupList ? '' : 'shadow-dark-2xl' }}">
        <div>
            <div class="h-16 flex justify-center items-center px-4">
                <a href="/" class="flex items-center text-indigo-500 no-underline">
                    <x-logo :size="'w-6 h-6'" />
                </a>
            </div>
            <div class="text-gray-400">
                <div class="py-4">
                    <button wire:click="showGroup('project')" class="flex flex-col items-center py-3 px-4 focus:outline-none {{ $currentMenu === 'project' ? 'bg-indigo-1000' : '' }}" title="Projects">
                        <span class="bg-indigo-1300 p-2 rounded">
                            <x-heroicon-o-briefcase />
                        </span>
                    </button>
                    <button wire:click="showGroup('team')" class="flex flex-col items-center py-3 px-4 focus:outline-none {{ $currentMenu === 'team' ? 'bg-indigo-1000' : '' }}" title="Teams">
                        <span class="bg-indigo-1300 p-2 rounded">
                            <x-heroicon-o-user-group />
                        </span>
                    </button>
                    <button wire:click="showGroup('office')" class="flex flex-col items-center py-3 px-4 focus:outline-none {{ $currentMenu === 'office' ? 'bg-indigo-1000' : '' }}" title="Offices">
                        <span class="bg-indigo-1300 p-2 rounded">
                            <x-heroicon-o-office-building />
                        </span>
                    </button>
                </div>
                @if ($isAdminRoute)
                    <div class="py-4">
                        <a href="" class="flex flex-col items-center py-3 px-4" title="Users">
                            <span class="bg-indigo-1300 p-2 rounded">
                                <x-heroicon-o-user />
                            </span>
                        </a>
                        <a href="" class="flex flex-col items-center py-3 px-4" title="Permissions">
                            <span class="bg-indigo-1300 p-2 rounded">
                                <x-heroicon-o-lock-open />
                            </span>
                        </a>
                        <a href="" class="flex flex-col items-center py-3 px-4" title="Activities">
                            <span class="bg-indigo-1300 p-2 rounded">
                                <x-eva-activity-outline fill="currentColor" />
                            </span>
                        </a>
                        <a href="" class="flex flex-col items-center py-3 px-4" title="Settings">
                            <span class="bg-indigo-1300 p-2 rounded">
                                <x-heroicon-o-cog />
                            </span>
                        </a>
                    </div>
                @else
                @endif
            </div>
        </div>
        <div class="text-gray-400">
            <a href="" class="flex flex-col items-center py-3 px-4" title="Notifications">
                <span class="bg-indigo-1300 p-2 rounded">
                    <x-eva-bell-outline fill="currentColor" />
                </span>
            </a>
            <a href="" class="flex flex-col items-center py-3 px-4" title="Messages">
                <span class="bg-indigo-1300 p-2 rounded">
                    <x-heroicon-o-chat />
                </span>
            </a>
            <div class="cursor-pointer mb-2 flex flex-col items-center py-3 px-4">
                <x-avatar :class="'w-8 h-8'" :url="url(auth()->user()->avatar)" />
            </div>
        </div>
    </div>
    @if ($showGroupList)
        <div class="bg-indigo-1000 w-64 ml-16 h-screen max-h-screen fixed z-40 md:flex flex-col shadow-dark-2xl">
            <div class="flex items-center h-16 px-4">
                <button wire:click="closeGroupList" class="flex items-center focus:outline-none">
                    <x-eva-arrow-back-outline class="w-6 h-6 fill-current"/>
                    <span class="pl-2">Back</span>
                </button>
            </div>
            <div class="pb-4 px-4">
                @include('sidebar-partials.group-list', ['group' => $group, 'type' => $currentMenu])
            </div>
        </div>
    @endif
</aside>