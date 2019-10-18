<template>
<div class="">
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto w-5/6 md:w-3/5 lg:w-2/5 bg-white rounded shadow-lg z-40" style="top: 12vh;left: 0;right: 0;">
    <div class="p-4">
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="name">
          Name <span class="text-gray-500 capitalize">(required)</span>
        </label>
        <input ref="focusInput" v-model="name" id="name" class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4" type="text" placeholder="June Release" required>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="start_date">
          Start Date <span class="text-gray-500 capitalize">(required)</span>
        </label>
        <datepicker v-model="startDate" ref="startDate" id="start_date" placeholder="Select Date" format="yyyy-MM-dd" input-class="appearance-none bg-gray-200 text-gray-800 w-full" wrapper-class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4"></datepicker>
      </div>
      <div class="p-4">
        <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="end_date">
          End Date <span class="text-gray-500 capitalize">(required)</span>
        </label>
        <datepicker v-model="endDate" ref="endDate" :disabled-dates="disabledDates" id="end_date" placeholder="Select Date" format="yyyy-MM-dd" input-class="appearance-none bg-gray-200 text-gray-800 w-full" wrapper-class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4"></datepicker>
      </div>
    </div>
    <div class="flex flex-row justify-between py-4 px-8 bg-gray-200 rounded">
      <button @click="closeCreateForm" class="text-red-300 hover:font-bold hover:text-red-400">Cancel</button>
      <button @click="createCycle" class="bg-teal-400 text-white font-medium hover:bg-teal-600 py-4 px-8 rounded">Create</button>
    </div>
  </div>

  <div @click="closeCreateForm" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-30"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'

export default {
  components: {Datepicker},
  props: {
    formShown: {
      required: true,
      type: Boolean
    },
    resourceId: {
      required: true,
      type: Number
    },
    resourceType: {
      required: true,
      type: String
    }
  },

  data: () => ({
    name: '',
    startDate: null,
    endDate: null,
  }),

  computed: {
    disabledDates () {
      return {to: this.startDate}
    }
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    createCycle () {
      axios.post('/cycles', {
        name: this.name,
        start_date: window.luxon.DateTime.fromISO(this.startDate.toISOString()).toISODate(),
        end_date: window.luxon.DateTime.fromISO(this.endDate.toISOString()).toISODate(),
        group_id: this.resourceId,
        group_type: this.resourceType
      })
        .then((response) => {
          if (response.data.status === 'success') {
            this.name = ''
            this.startDate = null
            this.endDate = null
            this.showNotification({type: response.data.status, message: response.data.message})
            this.$emit('close-form', response.data.cycle)
          }
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
          this.$emit('close-form')
        })
    },
    closeCreateForm () {
      this.$emit('close-form')
    },
  },
}
</script>
