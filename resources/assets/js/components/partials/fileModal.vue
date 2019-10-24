<template>
<div v-if="fileModalShown">
  <div class="absolute container mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl z-40 mt-20 pb-20 top-0">
    <div class="bg-gray-100 rounded-lg shadow-xl overflow-hidden">
      <div class="px-8 py-6 flex items-center">
        <div>
          <img :src="generateUrl(file.owner.avatar)" class="rounded-full w-12 h-12 mr-2 self-start">
        </div>
        <div class="flex flex-col flex-grow">
          <div class="text-lg">
            {{ file.name }}
          </div>
          <div class="text-sm">
            by
            <a :href="file.owner.username" class="text-blue-700 font-medium text-base"> {{ file.owner.name }}</a> on 
            <span class="text-base"> {{ file.date }}</span>
          </div>
        </div>
        <div @click="closeFileModal()" class="cursor-pointer">
          <font-awesome-icon :icon="faTimes" class="text-base text-gray-700"></font-awesome-icon>
        </div>
      </div>
      <object v-if="file.mime_type === 'application/pdf'" :data="'/storage/' + file.path" type="application/pdf" class="w-full h-80-vh"></object>
      <img v-else :src="'/storage/' + file.path" alt="file.name" class="w-full object-cover">
    </div>
  </div>

  <div @click="closeFileModal()" :class="{'hidden': !fileModalShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    file: {
      required: true,
      type: Object
    },
    fileModalShown: {
      required: true,
      type: Boolean
    },
  },

  data: () => ({
    faTimes
  }),

  methods: {
    closeFileModal () {
      this.$emit('close')
    }
  }
}
</script>
