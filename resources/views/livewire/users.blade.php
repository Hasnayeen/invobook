<div>
    <h1 class="h-16 flex items-center font-medium text-2xl text-gray-400">All Users</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 lg:gap-4 2xl:gap-12 text-gray-200 2xl:max-w-10xl">
            @foreach ($users as $user)
                <div class="rounded-lg shadow relative flex flex-col justify-between shadow-dark-md">
                    <div
                        class="absolute w-full h-full opacity-25 bg-cover bg-center rounded"
                        style="background-image: url({{ url($user->avatar) }}); z-index: -1;"></div>
                    <div>
                        <div class="flex justify-center items-center pt-8 px-6 w-full">
                            <a href="{{ url('/users/' . $user->username) }}">
                                <x-avatar :url="$user->avatar" class="w-32 h-32 bg-cover bg-center rounded-full shadow-outline" />
                            </a>
                        </div>
                        <div class="p-6 text-gray-200 text-center flex flex-col justify-between">
                            <div>
                                <div class="text-2xl leading-tight pb-1">
                                    {{ $user->name }}
                                </div>
                                <div class="pb-1">
                                    <a href="{{ url('/users/' . $user->username) }}" class="text-blue-400">
                                        <span>@</span>{{ $user->username }}
                                    </a>
                                </div>
                                @if ($user->designation)
                                    <div class="text-sm break-words pb-1" title="{{ $user->designation }}">
                                        {{ $user->designation }}
                                    </div>
                                @else
                                    <div class="text-sm break-words pb-1 invisible" title="No designation specified by user">
                                        No designation specified by user
                                    </div>
                                @endif
                                <div class="text-sm font-semibold pb-4" title="">
                                    <span class="text-xs">Local Time:</span> 5:06 pm
                                </div>
                            </div>
                            <div>
                                <span class="text-sm text-white font-medium bg-indigo-600 px-3 py-1 rounded-full">
                                    {{ $user->role->name }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center border-t border-indigo-600 rounded-b-md h-16 z-10 bg-indigo-1000 relative">
                        @if (auth()->user()->id !== $user->id)
                            <a href="{{ url('/impersonate/take/' . $user->id) }}" title="{{ __('Impersonate User') }}" class="text-white p-4 flex items-center justify-center cursor-pointer flex-grow">
                                <x-heroicon-s-users class="w-4 h-4" />
                                <span class="pl-2 text-sm font-semibold">Impersonate</span>
                            </a>
                        @else
                            <a title="{{ __('Disabled') }}" class="text-gray-600 p-4 flex items-center justify-center cursor-not-allowed flex-grow">
                                <x-heroicon-s-users class="w-4 h-4" />
                                <span class="pl-2 text-sm font-semibold">Impersonate</span>
                            </a>
                        @endif
                        <div class="border-l border-indigo-600 h-full"></div>
                        @if ($user->role->name === 'Owner')
                            <a title="{{ __('Disabled') }}" class="text-gray-600 p-4 flex items-center justify-center cursor-not-allowed flex-grow">
                                <x-heroicon-s-user-remove class="w-4 h-4" />
                                <span class="pl-2 text-sm font-semibold">Deactivate</span>
                            </a>
                        @else
                            <a title="{{ __('Deactivate User') }}" href="#" 
                                class="text-white p-4 flex items-center justify-center cursor-pointer flex-grow">
                                <x-heroicon-s-user-remove class="w-4 h-4" />
                                <span class="pl-2 text-sm font-semibold">Deactivate</span>
                            </a>
                        @endif
                    </div>
                </div>
            @endforeach
        </div>        
</div>
