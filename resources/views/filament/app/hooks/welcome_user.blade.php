<div class="text-xs text-gray-600 dark:text-gray-300 flex flex-col w-full">
    <span class="font-semibold">Welcome, {{ auth()->user()->name }}</span>
    <span>{{ now()->toFormattedDateString() }}</span>
</div>
