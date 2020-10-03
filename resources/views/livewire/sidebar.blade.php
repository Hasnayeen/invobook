<aside :class="{'flex': navMenuShown, 'hidden': !navMenuShown}" class="md:flex">
    <div :class="[userMenuShown || '{{ $showGroupList }}' ? '' : 'shadow-dark-2xl']" class="bg-indigo-1100 w-16 h-screen max-h-screen fixed z-50 md:flex flex-col justify-between overflow-y-auto overflow-x-hidden">
        <div>
            <div class="h-16 flex justify-center items-center px-4">
                <a href="/" class="flex items-center text-indigo-500 no-underline">
                    <x-logo :size="'w-6 h-6'" />
                </a>
            </div>

            <div class="text-gray-400">
                @include('sidebar-partials.group-menu')
                @includeWhen($isAdminRoute, 'sidebar-partials.admin-menu')
                @includeWhen($isSingleResourceRoute, 'sidebar-partials.tools-menu')
            </div>
        </div>

        @include('sidebar-partials.user-menu')
    </div>

    @includeWhen($showGroupList, 'sidebar-partials.group-list')
    @include('sidebar-partials.user-extra-menu')

</aside>
