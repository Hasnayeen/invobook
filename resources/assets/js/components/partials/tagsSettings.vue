<template>
  <div v-if="shown" class="bg-gray-100 rounded-b p-8">
    <div>
      <div class="pb-6 px-2 flex items-center">
        <div class="w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center">
          <font-awesome-icon :icon="faTags" class="text-white fa-xs"></font-awesome-icon>
        </div>
        <div class="pl-2 text-lg text-gray-600">
          Select tags you want to be available in this {{ resourceType }}
        </div>
      </div>
      <div class="flex">
        <div v-click-outside="hideTagsSuggestion">
          <div class="px-2 flex items-center">
            <input
              @click="toggleTagsSuggestion"
              type="text"
              readonly
              :value="[availableTags.length === 0 ? 'No tag left to add' : 'Add from list of all tags']"
              :class="[availableTags.length === 0 ? 'border-gray-300 border-2' : 'border-indigo-400 border-2']"
              class="px-3 py-2 rounded-l w-64">
            <div @click="toggleTagsSuggestion" :class="[availableTags.length === 0 ? 'border-gray-300 border-2 bg-gray-300' : 'border-indigo-400 border-2 bg-indigo-400']" class="px-3 py-2 rounded-r text-white -ml-1 cursor-pointer">
              <font-awesome-icon :icon="faCaretDown" class=""></font-awesome-icon>
            </div>
          </div>
          <div class="mx-2 w-64 bg-white">
            <div v-if="tagSuggestionShown && availableTags.length !== 0" class="shadow-md border py-1 rounded-b">
              <div @click="addTag(tag)" v-for="tag in availableTags" class="px-4 py-2 cursor-pointer -mt-1 hover:bg-teal-400 hover:text-white">
                {{ tag.label }}
              </div>
            </div>
          </div>
        </div>

        <div class="pl-8" v-click-outside="hideCreateForm">
          <div class="py-2">
            or,
            <button @click="toggleCreateForm" class="text-lg text-teal-500 underline pl-2">Create a New Tag</button>
          </div>
          <div v-if="createFormShown" class="flex shadow-lg">
            <input v-model="label" type="text" class="px-3 py-2 rounded-l w-64 border-teal-400 border-2">
            <div @click="createNewTag" class="px-3 py-2 rounded-r text-white -ml-1 cursor-pointer border-teal-400 border-2 bg-teal-400">
              <font-awesome-icon :icon="faPlus" class=""></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>

      <div class="px-2 pt-8">Tags available in this {{ this.resourceType }}</div>
      <div class="flex flex-row flex-wrap border border-gray-300 rounded mx-2 m-4 p-2">
        <div v-if="tags.length === 0">No tags selected.</div>
        <div v-else v-for="tag in tags" class="flex items-center mx-1 my-1 py-1 px-3 bg-indigo-200 font-semibold text-indigo-700 rounded-full">
          <span class="text-sm">
            {{ tag.label }}
          </span>
          <font-awesome-icon @click="deleteTag(tag)" :icon="faTimesCircle" class="text-sm text-indigo-700 ml-1 cursor-pointer"></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import {
  faTimesCircle,
  faTags,
  faPlus,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'

export default {
  props: {
    shown: {
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
    },
  },

  data: () => ({
    tagSuggestionShown: false,
    createFormShown: false,
    availableTags: [],
    tags: [],
    label: '',
    faTimesCircle,
    faTags,
    faPlus,
    faCaretDown
  }),

  watch: {
    shown: function (value) {
      if (value) {
        this.getTags()
      }
    }
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    async getTags () {
      if (this.availableTags.length === 0) {
        let {data} = await axios({
          url: '/groups/tags',
          params: {
            group_type: this.resourceType,
            group_id: this.resourceId,
          }})
        this.tags = data.tags
        axios.get('/tags')
          .then((response) => {
            this.availableTags = response.data.tags.filter(el => this.tags.findIndex(x => x.id === el.id) === -1)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    addTag (tag) {
      axios.post('/groups/tags/' + tag.id, {
        group_type: this.resourceType,
        group_id: this.resourceId,
      })
        .then((response) => {
          this.tags.push(response.data.tag)
          this.availableTags = this.availableTags.filter(x => x.id !== tag.id)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    toggleTagsSuggestion () {
      this.tagSuggestionShown = ! this.tagSuggestionShown
    },
    hideTagsSuggestion () {
      this.tagSuggestionShown = false
    },
    deleteTag (tag) {
      axios.delete('/groups/tags/' + tag.id, {
        params: {
          group_type: this.resourceType,
          group_id: this.resourceId,
        }
      })
        .then((response) => {
          let index = this.tags.indexOf(tag)
          if (index !== -1) { 
            this.tags.splice(index, 1)
            this.availableTags.push(tag)
          }
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    toggleCreateForm () {
      this.createFormShown = ! this.createFormShown
    },
    hideCreateForm () {
      this.createFormShown = false
    },
    createNewTag () {
      axios.post('/tags', {
        label: this.label
      })
        .then((response) => {
          this.availableTags.push(response.data.tag)
          this.createFormShown = false
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
}
</script>
