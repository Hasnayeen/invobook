<template>
    <div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center rounded m-4">
        <header class="w-full relative border-b h-12 pt-4 text-center">
            <a :href="'/projects/' + resource.slug + '/files'" class="text-grey-darker font-medium no-underline">
                Files
            </a>
            <span class="text-grey-darker absolute pin-r mr-2">
                <i class="fa fa-ellipsis-h"></i>
            </span>
        </header>
        <div class="w-full h-48 self-start text-left">
            <a href="#" class="flex flex-row items-center p-4 no-underline text-grey-darker">
                <span class="pr-4">
                    <i class="text-xl fa fa-file-image-o"></i>
                </span>
                <div class="text-xs">
                    <p class="text-base">landing-page-v.1.png</p>
                    <p>
                        <span class="text-pink">John</span><span> uploaded 15 min ago</span>
                    </p>
                </div>
            </a>
            <a href="#" class="flex flex-row items-center p-4 no-underline text-grey-darker">
                <span class="pr-4">
                    <i class="text-xl fa fa-file-pdf-o"></i>
                </span>
                <div class="text-xs">
                    <p class="text-base">api-doc-v.1.pdf</p>
                    <p>
                        <span class="text-pink">John</span><span>  uploaded 15 min ago</span>
                    </p>
                </div>
            </a>
            <a href="#" class="flex flex-row items-center p-4 no-underline text-grey-darker">
                <span class="pr-4">
                    <i class="text-xl fa fa-file-text-o"></i>
                </span>
                <div class="text-xs">
                    <p class="text-base">features list.txt</p>
                    <p>
                        <span class="text-pink">James</span><span>  uploaded 15 min ago</span>
                    </p>
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
