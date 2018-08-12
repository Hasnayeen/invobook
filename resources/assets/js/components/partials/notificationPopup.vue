<template>
    <div :class="[showNotification ? '' : 'hidden', (messageType === 'success') ? 'text-green-light' : 'text-red' ]" class="fixed pin-t bg-white text-lg rounded container mx-auto mt-16 w-1/4 py-6 px-8 shadow-lg" style="left: 0; right: 0;">
        {{message}} <i class="fas fa-times float-right cursor-pointer" @click="closeNotification"></i>
    </div>
</template>

<script>
export default {
  props: ['message', 'messageType', 'showNotification'],
  methods: {
    closeNotification () {
      this.$emit('close')
    }
  }
}
</script>
