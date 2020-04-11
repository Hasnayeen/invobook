<template>
<div v-if="loading || localLoadingState">
  <div class="fixed h-screen w-screen z-60 flex flex-row items-center justify-center">
    <div class="bg-white p-8 rounded-lg">
      <div class="circle w-32 h-32 flex flex-row justify-between items-center">
      </div>
    </div>
  </div>
  <div class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-50"></div>
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
.circle {
  border: 3px solid hsla(212, 100%, 62%, 0.2);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
