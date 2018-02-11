<template>
    <div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center text-center rounded m-4">
        <header class="w-full relative border-b h-12 pt-4">
            <a :href="'/projects/' + project.slug + '/activities'" class="text-grey-darker font-medium no-underline">
                Activities
            </a>
            <span class="text-grey-darker absolute pin-r mr-2">
                <i class="fa fa-ellipsis-h"></i>
            </span>
        </header>
        <div class="w-full h-48 self-start text-left">
            <a href="#" class="flex flex-row p-4 no-underline text-grey-darker">
                <img src="http://placehold.it/34x34" class="rounded-full w-8 h-8 mr-2">
                <div class="text-sm">
                    <p>
                        <span class="text-pink">John</span><span> added a new task</span>
                    </p>
                    <p class="text-xs">15 min ago</p>
                </div>
            </a>
            <a href="#" class="flex flex-row p-4 no-underline text-grey-darker">
                <img src="http://placehold.it/34x34" class="rounded-full w-8 h-8 mr-2">
                <div class="text-sm">
                    <p>
                        <span class="text-pink">John</span><span> commented in </span><span class="text-pink">Review Meeting</span>
                    </p>
                    <p class="text-xs">20 min ago</p>
                </div>
            </a>
            <a href="#" class="flex flex-row p-4 no-underline text-grey-darker">
                <img src="http://placehold.it/34x34" class="rounded-full w-8 h-8 mr-2">
                <div class="text-sm">
                    <p>
                        <span class="text-pink">James</span><span> archived a discussion</span>
                    </p>
                    <p class="text-xs">1 hr ago</p>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['project'],
}
</script>
