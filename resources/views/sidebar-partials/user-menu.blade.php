<div class="text-gray-400 py-2">
    <a href="" class="flex flex-col items-center py-2 px-4" title="Notifications">
        <span class="bg-indigo-1300 p-2 rounded">
            <x-eva-bell-outline class="w-5 h-5 fill-current" />
        </span>
    </a>
    <a href="" class="flex flex-col items-center py-2 px-4" title="Messages">
        <span class="bg-indigo-1300 p-2 rounded">
            <x-heroicon-o-chat class="w-5 h-5" />
        </span>
    </a>
    <div @click="userMenuShown = !userMenuShown" :class="{'bg-indigo-1000': userMenuShown}" class="cursor-pointer mb-2 flex flex-col items-center py-2 px-4">
        <x-avatar :class="'w-8 h-8'" :url="url(auth()->user()->avatar)" />
    </div>
</div>
