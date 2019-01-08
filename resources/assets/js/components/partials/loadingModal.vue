<template>
  <div v-if="loading" class="absolute w-full h-full bg-grey-dark opacity-75 z-50 flex flex-row items-center justify-center">
    <font-awesome-icon :icon="faSpinner" class="text-white text-5xl fa-spin"></font-awesome-icon>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default {
  data: () => ({
    faSpinner
  }),
  computed: mapState([
    'loading'
  ])
}
</script>
