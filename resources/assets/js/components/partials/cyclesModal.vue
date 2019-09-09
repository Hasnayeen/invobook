<template>
<div>
  <!-- Cycles List -->
  <div v-if="!createFormShown" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-40" style="top: 12vh;left: 0;right: 0;">
    <div class="py-4">
      <div v-if="cycles.length === 0" class="flex flex-col items-center pt-4">
        No cycle found! Create a New Cycle
        <img src="/image/cycle.svg" alt="calender" class="w-96">
      </div>
      <div v-for="(cycle, index) in cycles" :key="cycle.id">
        <div v-if="index !== 0" class="border-b border-gray-200 mx-8"></div>
        <a @click="chooseCycle(cycle)" class="flex flex-col items-center px-8 py-4 cursor-pointer" :class="{'bg-blue-100': selectedCycleId === cycle.id}">
          <div class="text-xl text-blue-600 font-medium">
            {{ cycle.name }}
            <span v-if="currentCycleId === cycle.id" class="absolute px-2 ml-1 bg-teal-500 text-white text-xs font-semibold rounded-full">current</span>
          </div>
          <div class="flex flex-row justify-center">
            <div>
              {{ cycle.start_date }}
            </div>
            <div class="px-1">-</div>
            <div>
              {{ cycle.end_date }}
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="flex justify-between p-8 bg-gray-100 rounded-b">
      <button @click="showCreateForm" class="text-blue-500 underline">Create New Cycle</button>
      <button @click="closeModal" class="text-red-400">Close</button>
    </div>
  </div>

  <!-- Create Cycle Form -->
  <create-cycle-form :formShown="createFormShown" :resourceType="resourceType" :resourceId="resourceId" @close-form="closeCreateForm"></create-cycle-form>

  <div v-if="!createFormShown" @click="closeModal" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-30"></div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import createCycleForm from "./../forms/createCycleForm"

export default {
  components: {createCycleForm},
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
    createFormShown: false
  }),

  computed: {
    ...mapState({
      cycles: state => state.cycle.cycles,
      selectedCycleId: state => state.cycle.selectedCycleId,
    })
  },

  methods: {
    ...mapActions([
      'getCycles',
      'selectCycle',
      'closeComponent'
    ]),
    getAllCycles () {
      if (this.cycles.length === 0 ) {
        this.getCycles({
          group_type: this.resourceType,
          group_id: this.resourceId,
        })
      }
    },
    closeModal () {
      this.closeComponent()
    },
    showCreateForm () {
      this.createFormShown = true
    },
    closeCreateForm (cycle = null) {
      if (cycle) {
        this.cycles.push(cycle)
      }
      this.createFormShown = false
    },
    chooseCycle (cycle) {
      this.selectCycle(cycle)
    }
  }
}
</script>
