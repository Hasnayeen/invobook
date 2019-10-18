<template>
<div>
  <div class="absolute container mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl z-40" style="top: 12vh;left: 0;right: 0;">
    <div class="bg-white rounded shadow-lg">
      <div class="bg-gray-100 p-4 text-gray-700 text-center text-lg font-semibold rounded-t shadow">Roadmap</div>

      <div class="p-4 flex flex-col items-start">
        <template v-for="(cycle, key) in roadmap">
          <div class="flex items-start p-4">
            <div class="border-l border-gray-400 -my-8 self-stretch"></div>
            <div class="self-center flex items-center">
              <div :class="[currentCycleId === cycle.cycle_id ? 'bg-teal-500' : 'bg-gray-500']" class="rounded-full w-2 h-2 -ml-1 z-10"></div>
              <div class="border-t border-gray-400 w-8 -ml-1"></div>
            </div>
            <div :class="[currentCycleId === cycle.cycle_id ? 'text-teal-500 border-teal-500' : 'text-gray-800 border-gray-800']" class="border rounded px-4 py-2">
              {{ key }}
            </div>
          </div>

          <div class="flex px-4 py-2 self-stretch">
            <div class="border-l border-gray-400"></div>
            <div class="ml-8 bg-indigo-100 rounded w-full">
              <div class="text-xl font-semibold p-4 rounded-t bg-indigo-500 text-white">{{ cycle.name }}</div>
              <div class="p-4">

                <div v-for="feature in cycle.items" class="flex py-2">
                  <div class="pr-3 text-lg">
                    <font-awesome-icon :icon="faCheckCircle" :class="[feature.implemented ? 'text-green-400' : 'text-gray-500']"></font-awesome-icon>
                  </div>
                  <div>
                    <div class="text-lg font-medium pb-2">
                      {{ feature.name }}
                    </div>
                    <details v-if="feature.content">
                      <summary>Show Details</summary>
                      <div class="py-1" v-html="feature.content"></div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <div class="flex items-start px-4 py-2">
          <div class="border-l border-gray-400 -my-6 self-stretch"></div>
        </div>
      </div>
    </div>
    <div class="h-16"></div>
  </div>

  <div @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-30"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle'

export default {
  props: {
    resourceType: {
      required: true,
      type: String
    },
    resourceId: {
      required: true,
      type: Number
    },
    currentCycleId: {
      required: false,
      type: Number
    }
  },

  data: () => ({
    roadmap: null,
    faCheckCircle
  }),

  created () {
    this.getRoadmap()
  },

  methods: {
    ...mapActions([
      'closeComponent',
      'showNotification',
    ]),
    getRoadmap () {
      if (!this.currentCycleId) {
        this.showNotification({type: 'error', message: 'No cycle is selected. Please select a cycle.'})
        this.closeComponent()
        return false
      }
      if (this.roadmap === null ) {
        axios.get('/cycles/' + this.currentCycleId + '/roadmap', {
            params: {
              group_type: this.resourceType,
              group_id: this.resourceId,
            }
          })
          .then((response) => {
            this.roadmap = response.data.roadmap
          })
          .catch((error) => {
            console.error(error.response.data.message)
          })
      }
    },
    closeModal () {
      this.closeComponent()
    },
  }
}
</script>
