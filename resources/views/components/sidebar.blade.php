<aside :class="{'flex': navMenuShown, 'hidden': !navMenuShown}" class="bg-indigo-1100 w-16 h-screen max-h-screen fixed md:flex flex-col justify-between z-50 shadow-dark">
    <div>
        <div class="h-16 flex justify-center items-center px-4">
            <a class="flex items-center text-indigo-500 no-underline" href="{{ url('/') }}">
                <x-logo :size="'w-6 h-6'" />
            </a>
        </div>
        <div class="text-gray-400">
            <div class="py-4">
                <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-o-briefcase />
                    </span>
                </a>
                <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-o-user-group />
                    </span>
                </a>
                <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-o-office-building />
                    </span>
                </a>
            </div>
            @if (is_admin_route())
                <div class="py-4">
                    <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-o-user />
                    </span>
                    </a>
                    <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-o-lock-open />
                    </span>
                    </a>
                    <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-activity-outline fill="currentColor" />
                    </span>
                    </a>
                    <a href="" class="flex flex-col items-center py-3 px-4">
                    <span class="bg-indigo-1300 p-2 rounded">
                        <x-i-o-cog />
                    </span>
                    </a>
                </div>
            @else
            @endif
        </div>
    </div>
    <div class="text-gray-400">
        <a href="" class="flex flex-col items-center py-3 px-4">
            <span class="bg-indigo-1300 p-2 rounded">
                <x-i-bell-outline fill="currentColor" />
            </span>
        </a>
        <a href="" class="flex flex-col items-center py-3 px-4">
            <span class="bg-indigo-1300 p-2 rounded">
                <x-i-o-mail />
            </span>
        </a>
        <div class="cursor-pointer mb-2 flex flex-col items-center py-3 px-4">
            <x-avatar :class="'w-8 h-8'" :url="url(auth()->user()->avatar)" />
        </div>
    </div>
</aside>