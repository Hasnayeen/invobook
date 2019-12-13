<template>
<div v-if="loading || localLoadingState">
  <div :class="{'fixed': loading}" class="h-screen w-screen z-50 flex flex-row items-center justify-center">
    <div class="bg-white p-8 rounded-lg">
      <div class="dots w-32 flex flex-row justify-between items-center">
        <div class="w-8 h-8 bg-pink-500"></div>
        <div class="w-8 h-8 bg-pink-500"></div>
        <div class="w-8 h-8 bg-pink-500"></div>
      </div>
    </div>
  </div>
  <div class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-10"></div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    localLoadingState: {
      required: false,
      type: Boolean
    }
  },
  computed: mapState([
    'loading'
  ])
}
</script>

<style>
.dots div {
  border-radius: 50%;
  animation: fade 0.8s ease-in-out alternate infinite;
}

.dots div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.dots div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
