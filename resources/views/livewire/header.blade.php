<header class="absolute top-0 h-screen w-screen flex flex-col">
    <aside class="h-72 bg-gradient-to-r from-indigo-800 to-purple-700 flex">
        <div class="w-64 h-full flex flex-col">

            {{-- Logo --}}
            <a href="/" class="flex items-center space-x-2 p-4">
                <x-logo size="w-10 h-10"/>
                <span class="text-2xl">Goodwork</span>
            </a>

            {{-- Notification/Message --}}
            <div class="pt-4 flex-grow flex flex-col items-center justify-between">
                <div class="flex flex-col items-center space-y-2">
                    <x-avatar class="w-16 h-16" url="{{ user()->avatar }}"/>
                    <span>11:38 pm</span>
                    <span class="w-56 bg-black bg-opacity-25 px-4 py-1 rounded-md border border-indigo-1300 text-xs font-semibold text-center">My status goes here</span>
                </div>
                <div class="w-full px-4 border-t flex items-center justify-around">
                    <a href="" class="py-3">
                        <x-heroicon-o-bell class="w-6"/>
                    </a>
                    <div class="border-l h-full"></div>
                    <a href="" class="py-3">
                        <x-heroicon-o-mail class="w-6"/>
                    </a>
                    <div class="border-r h-full"></div>
                    <a href="" class="py-3">
                        <x-heroicon-o-cog class="w-6"/>
                    </a>
                </div>
            </div>
        </div>

        <div class="h-20 flex-grow px-8 flex items-center justify-between">
            {{-- Primary Nav --}}
            <nav class="text-gray-400 flex items-center space-x-8">
                <button wire:click="showProjects" class="text-white bg-black bg-opacity-25 px-3 py-1 rounded-md">Projects</button>
                <button wire:click="" class="">Teams</button>
            </nav>

            {{-- Search Bar --}}
            <div>
                <form action="" class="flex items-center justify-between bg-black bg-opacity-25 px-4 rounded-md shadow-lg sm:w-full space-x-4">
                    <label class="flex-grow flex items-center">
                        <span class="text-gray-700 hidden">Search</span>
                        <input type="text" class="w-32 sm:w-full bg-transparent placeholder-gray-200 text-white font-semibold text-sm sm:text-base" placeholder="Type something here" autofocus="">
                    </label>
                    <button type="submit" class="sm:bg-fuchsia-600 sm:text-white text-fuchsia-700 text-sm font-bold sm:py-2 rounded">
                        <svg class="w-4 sm:w-6 text-gray-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg> 
                    </button>
                </form>
            </div>
        </div>

        <div class="w-64">
            {{-- Language Selector --}}
            <div class="h-20 flex items-center justify-center">
                <div x-data="{showMenu: false}" class="flex items-center focus:outline-none relative text-gray-200 border border-gray-500 rounded-md px-2 space-x-1">
                    <svg class="w-5 text-gray-200 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFa3bf" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 7h7m-2 -2v2a5 8 0 0 1 -5 8m1 -4a7 4 0 0 0 6.7 4" />
                        <path d="M11 19l4 -9l4 9m-.9 -2h-6.2" />
                    </svg>
                    <span class="text-xs font-semibold">English</span>
                    <span class="inline-block h-6 pl-2 pr-1 border-r border-gray-500"></span>
                    <button aria-label="dropdown menu" @click.prevent="showMenu = !showMenu" class="focus:outline-none">
                        <x-heroicon-o-chevron-down class="w-4"/>
                    </button>
                    <template x-if="showMenu">
                        <div class="absolute top-0 right-0 mt-8 w-32">
                            <div class="bg-white text-gray-800 shadow-xl rounded-md flex flex-col space-y-4 py-4">
                                <a href="https://zukoni.com/changelog" class="text-sm font-semibold px-4 hover:text-purple-600">French</a>
                                <a href="https://zukoni.com/feedbacks" class="text-sm font-semibold px-4 hover:text-purple-600">Spanish</a>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            {{-- Create Menu --}}
            <div class="p-4">
                <div class="bg-black bg-opacity-25 rounded-md p-4">
                    <div class="border-b text-sm text-center">Create</div>
                    <div class="grid grid-cols-2 gap-4 pt-4">
                        <button class="flex flex-col items-center justify-center bg-white text-purple-600 w-full px-4 py-1 rounded-md">
                            <x-heroicon-o-clipboard-list class="w-5"/>
                            <span class="font-semibold text-xs">Task</span>
                        </button>
                        <button class="flex flex-col items-center justify-center bg-white text-purple-600 w-full px-4 py-1 rounded-md">
                            <x-heroicon-o-document-text class="w-5"/>
                            <span class="font-semibold text-xs">Discussion</span>
                        </button>
                        <button class="flex flex-col items-center justify-center bg-white text-purple-600 w-full px-4 py-1 rounded-md">
                            <x-heroicon-o-briefcase class="w-5"/>
                            <span class="font-semibold text-xs">Project</span>
                        </button>
                        <button class="flex flex-col items-center justify-center bg-white text-purple-600 w-full px-4 py-1 rounded-md">
                            <x-heroicon-o-user-group class="w-5"/>
                            <span class="font-semibold text-xs">Team</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </aside>

    {{-- Tools Menu --}}
    <aside class="flex-grow">
        <nav class="h-full w-64 py-2">
            <a href="" class="flex flex-col items-start py-2 px-4" title="Tasks">
                <span class="text-purple-700 bg-purple-200 bg-opacity-50 w-full p-3 rounded-lg flex items-center space-x-2">
                    <x-heroicon-o-clipboard-list class="w-5 h-5" />
                    <span class="font-semibold">Tasks</span>
                </span>
            </a>

            <a href="" class="flex flex-col items-start py-2 px-4" title="Discussions">
                <span class="text-gray-600 w-full p-3 rounded-lg flex items-center space-x-2">
                    <x-heroicon-o-document-text class="w-5 h-5" />
                    <span class="font-semibold">Discussions</span>
                </span>
            </a>

            <a href="" class="flex flex-col items-start py-2 px-4" title="Messages">
                <span class="text-gray-600 w-full p-3 rounded-lg flex items-center space-x-2">
                    <x-heroicon-o-chat-alt-2 class="w-5 h-5" />
                    <span class="font-semibold">Messages</span>
                </span>
            </a>

            <a href="" class="flex flex-col items-start py-2 px-4" title="Events">
                <span class="text-gray-600 w-full p-3 rounded-lg flex items-center space-x-2">
                    <x-heroicon-o-calendar class="w-5 h-5" />
                    <span class="font-semibold">Events</span>
                </span>
            </a>

            <a href="" class="flex flex-col items-start py-2 px-4" title="Files">
                <span class="text-gray-600 w-full p-3 rounded-lg flex items-center space-x-2">
                    <x-eva-file-outline class="w-5 h-5 fill-current" />
                    <span class="font-semibold">Files</span>
                </span>
            </a>
            <a href="" class="flex flex-col items-start py-2 px-4" title="Activities">
                <span class="text-gray-600 w-full p-3 rounded-lg flex items-center space-x-2">
                    <x-eva-activity-outline class="w-5 h-5 fill-current" />
                    <span class="font-semibold">Activities</span>
                </span>
            </a>
        </nav>
    </aside>
</header>
