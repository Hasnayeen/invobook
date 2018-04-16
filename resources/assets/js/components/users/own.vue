<template>
    <div class="my-8">
        <div class="flex flex-col items-center">
            <img src="/image/avatar-profile.png" :alt="'Default avatar of ' + user.name" class="w-32 h-32 rounded-full">
            <div class="text-grey-darker text-2xl font-semibold py-4">
                {{user.name}}
            </div>
            <div class="">
                <input type="file" name="file" id="select-file" class="hidden" />
                <button class="bg-transparent text-grey-darker hover:text-teal py-2 px-4 border border-grey-light hover:border-teal rounded">Change Your Avatar</button>
            </div>
        </div>
        <form class="px-8 pt-6">
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
                    Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Nehal Hasnayeen">
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="title">
                    Title at Goodwork
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="title" type="text" placeholder="Developer">
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="title">
                    Short Bio
                </label>
                <textarea class="shadow appearance-none resize-none border rounded w-full py-2 px-3 text-grey-darker" id="bio" type="text" rows="3" placeholder="About Yourself"></textarea>
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="timezone">
                    Time Zone
                </label>
                <div class="relative">
                    <select class="shadow appearance-none border rounded w-full px-3 py-2 text-grey-darker bg-grey-lighter text-grey-darker" id="grid-state">
                        <option>Asia/Dhaka (+6)</option>
                        <option>Missouri</option>
                        <option>Texas</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <label class="block text-grey-darker text-sm font-bold mb-2" for="weekstart">
                    First Day of the Week
                </label>
                <div class="relative">
                    <select class="shadow appearance-none border rounded w-full px-3 py-2 text-grey-darker bg-grey-lighter text-grey-darker" id="weekstart">
                        <option>Saturday</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div class="mt-8">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
                    Save
                </button>
            </div>
            <div class="mt-4">
                <a class="font-bold text-sm text-red-lighter hover:text-red no-underline" href="#">
                    Delete account
                </a>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Own',
    props: ['user'],
}
</script>
