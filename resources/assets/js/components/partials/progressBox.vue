<template>
  <div v-if="show">
    <div>
      <button @click="toggleForm" class="no-underline px-3 py-2 my-4 bg-white text-center text-base text-teal-500 rounded shadow">{{ 'Add New Step' | localize }}</button>
      <div v-if="formShown" class="border-2 border-indigo-300 bg-white p-4 rounded">
        <div @click="toggleForm" class="flex justify-end">
          <font-awesome-icon :icon="faTimesCircle" class="text-base text-red-500 cursor-pointer"></font-awesome-icon>
        </div>
        <div class="">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="description">
            Description
          </label>
          <input ref="focusInput" v-model="description" id="description" class="appearance-none block w-full bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4" type="text" placeholder="Describe the step" required>
        </div>
        <div>
          <div class="py-4 text-gray-700">
            <input v-model="unknown" type="checkbox" id="unknown" class="checkbox">
            <label for="unknown">Step is not clear yet and have unknown</label>
          </div>
        </div>
        <button @click="saveStep" class="px-4 py-2 text-white text-center text-base font-semibold bg-teal-600 rounded">{{ 'Save' | localize }}</button>
      </div>
    </div>
    <div>
      <div v-for="step in steps" class="bg-white rounded shadow px-4 py-2 my-4">
        <div class="text-xs text-indigo-700">
          <span class="text-gray-700">Last updated:</span> {{ step.updated_at }}
        </div>
        <div class="text-2xl">
          {{ step.description }}
        </div>
        <div class="flex">
          <div class="py-2 pr-4 text-gray-700">
            <input type="checkbox" :id="'step-done-' + step.id" class="checkbox" :checked="step.done">
            <label :for="'step-done-' + step.id">Done</label>
          </div>
          <div class="py-2 text-gray-700">
            <input type="checkbox" :id="'step-unknown-' + step.id" class="checkbox" :checked="step.unknown">
            <label :for="'step-unknown-' + step.id">Unknown</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle'

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
    show: {
      required: true,
      type: Boolean
    }
  },

  data: () => ({
    formShown: false,
    description: '',
    steps: [],
    unknown: false,
    faTimesCircle
  }),

  watch: {
    show: function (value) {
      if (value) {
        this.getSteps()
      }
    }
  },

  computed: {
    ...mapState({
      groupType: state => state.groupType,
      groupId: state => state.groupId,
    })
  },

  created () {
    this.getSteps()
  },

  methods: {
    ...mapActions([
      'showNotification'
    ]),
    toggleForm () {
      this.formShown = ! this.formShown
    },
    saveStep () {
      axios.post('/tasks/' + this.resourceId + '/steps', {
        description: this.description,
        unknown: this.unknown,
        group_type: this.groupType,
        group_id: this.groupId,
      })
        .then((response) => {
          this.description = ''
          this.formShown = false
          this.steps.push(response.data.step)
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    getSteps () {
      if (this.steps.length === 0) {
        axios.get('/tasks/' + this.resourceId + '/steps', {
          params: {
            group_type: this.groupType,
            group_id: this.groupId
          }
        })
          .then((response) => {
            this.steps = response.data.steps
          })
          .catch((error) => {
            console.log(error.response.data.message)
          })
      }
    }
  }
}
</script>
