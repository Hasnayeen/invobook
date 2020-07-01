<div id="user-extra-menu" :class="[!userMenuShown ? 'hidden' : 'md:flex']" class="bg-indigo-1000 w-64 ml-16 h-screen max-h-screen fixed z-40 flex-col justify-end items-start shadow-dark-2xl">
    <div class="w-full text-gray-400 py-2">
        <a href="{{ url('admin') }}" class="flex flex-col p-4 hover:bg-indigo-1300" title="Admin">
            <div class="flex items-center">
                <x-eva-shield-outline class="w-5 h-5 fill-current" />
                <span class="pl-4 font-semibold">Admin</span>
            </div>
        </a>
        <a href="" class="flex flex-col p-4 hover:bg-indigo-1300" title="Settings">
            <div class="flex items-center">
                <x-heroicon-o-adjustments class="w-5 h-5" />
                <span class="pl-4 font-semibold">Settings</span>
            </div>
        </a>
        <a href="" class="flex flex-col p-4 hover:bg-indigo-1300" title="About">
            <div class="flex items-center">
                <x-eva-info-outline class="w-5 h-5 fill-current" />
                <span class="pl-4 font-semibold">About</span>
            </div>
        </a>
        @impersonating
            <a href="" class="flex flex-col p-4 hover:bg-indigo-1300" title="Leave User">
                <div class="flex items-center">
                    <x-eva-log-out-outline class="w-5 h-5 fill-current" />
                    <span class="pl-4 font-semibold">Leave User</span>
                </div>
            </a>
        @endImpersonating
        <form action="{{ url('logout') }}" method="POST">
            @csrf
            <div class="hover:bg-indigo-1300">
                <button class="p-4 flex items-center w-full" type="submit">
                    <x-eva-power-outline class="w-5 h-5 fill-current" />
                    <span class="pl-4 font-semibold">Logout</span>
                </button>
            </div>
        </form>
    </div>
</div>
