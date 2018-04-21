<template>
    <div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center text-center rounded m-4">
        <header class="w-full relative border-b h-12 pt-4">
            <a :href="'/projects/' + resource.slug + '/messages'" class="text-grey-darker font-medium no-underline">
                Messages
            </a>
            <span class="text-grey-darker absolute pin-r mr-2">
                <i class="fa fa-ellipsis-h"></i>
            </span>
        </header>
        <div class="w-full h-48 self-start">
            <a href="#" class="flex flex-row items-center p-4 no-underline">
                <img src="http://placehold.it/34x34" class="rounded-full mr-2">
                <div class="w-4/5 text-grey-dark text-left pl-2">
                    <p class="">
                        <span class="text-xs">5 min ago</span>
                    </p>
                    <p class="text-sm">Lorem ipsum dolor st..</p>
                </div>
            </a>                                
            <a href="#" class="flex flex-row items-center p-4 no-underline">
                <img src="http://placehold.it/34x34" class="rounded-full mr-2">
                <div class="w-4/5 text-grey-dark text-left pl-2">
                    <p class="">
                        <span class="text-xs">5 min ago</span>
                    </p>
                    <p class="text-sm">Lorem ipsum dolor st..</p>
                </div>
            </a>                                
            <a href="#" class="flex flex-row items-center p-4 no-underline">
                <img src="http://placehold.it/34x34" class="rounded-full mr-2">
                <div class="w-4/5 text-grey-dark text-left pl-2">
                    <p class="">
                        <span class="text-xs">5 min ago</span>
                    </p>
                    <p class="text-sm">Lorem ipsum dolor st..</p>
                </div>
            </a>                                
        </div>
    </div>
</template>

<script>
export default {
    props: ['resource'],
}
</script>
