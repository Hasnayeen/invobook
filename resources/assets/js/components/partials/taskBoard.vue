<template>
    <div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center text-center rounded m-4">
        <header class="w-full relative border-b h-12 pt-4">
            <a :href="'/' + resourceType + '/' + resource.slug + '/tasks'" class="text-grey-darker font-medium no-underline">
                Tasks
            </a>
            <span class="text-grey-darker absolute pin-r mr-2">
                <i class="fa fa-ellipsis-h"></i>
            </span>
        </header>
        <div class="w-full h-48 self-start">
            <a href="#" class="flex flex-row p-4 no-underline items-center">
                <input type="checkbox" name="" id="" class="bg-white rounded appearance-none border border-grey w-4 h-4">
                <div class="w-4/5 text-grey-dark text-left pl-2">
                    <p class="text-base">Lorem ipsum dolor st..</p>
                    <p class="text-sm">
                        John Smith
                    </p>
                </div>
            </a>                                
            <a href="#" class="flex flex-row p-4 no-underline items-center">
                <input type="checkbox" name="" id="" class="bg-white rounded appearance-none border border-grey w-4 h-4">
                <div class="w-4/5 text-grey-dark text-left pl-2">
                    <p class="text-base">Lorem ipsum dolor st..</p>
                    <p class="text-sm">
                        John Smith
                    </p>
                </div>
            </a>                                
            <a href="#" class="flex flex-row p-4 no-underline items-center">
                <input type="checkbox" name="" id="" class="bg-white rounded appearance-none border border-grey w-4 h-4">
                <div class="w-4/5 text-grey-dark text-left pl-2">
                    <p class="text-base">Lorem ipsum dolor st..</p>
                    <p class="text-sm">
                        John Smith
                    </p>
                </div>
            </a>                                
        </div>
    </div>
</template>

<script>
export default {
    props: ['resource', 'resourceType'],
}
</script>
