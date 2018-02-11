<template>
    <div :class="{'hidden': !showNotification}" class="fixed pin-t bg-white text-green text-lg rounded container mx-auto mt-16 w-1/4 py-6 px-8 shadow-lg" style="left: 0; right: 0;">
        {{message}} <i class="fa fa-close float-right cursor-pointer" @click="closeNotification"></i>
    </div>
</template>

<script>
export default {
    props: ['message', 'showNotification'],
    methods: {
        closeNotification () {
            this.$emit('close');
        }
    }
}
</script>
