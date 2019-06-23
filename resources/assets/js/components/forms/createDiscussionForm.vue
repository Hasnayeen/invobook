<template>
<div>
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto mb-8 w-5/6 md:w-md lg:w-lg xl:w-xl z-10" style="top: 12vh;left: 0;right: 0;">
    <div class="bg-white rounded shadow-lg">
      <div class="">
        <div class="px-8 pt-8 bg-gray-200 rounded-t">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Title <span class="text-gray-500 capitalize">(required)</span>
          </label>
          <input ref="inputFocus" v-model="name" class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4" id="grid-last-name" type="text" placeholder="New Discussion Post" required>
        </div>
        <div class="px-8 py-4 bg-gray-200">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Category <span class="text-gray-500 capitalize">(required)</span>
          </label>
          <div class="flex flex-row items-center">
            <select class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4" v-model="categoryId">
              <option value="" disabled>Choose one</option>
              <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="w-1/6 pointer-events-none flex items-center text-gray-700 -ml-8">
            </font-awesome-icon>
          </div>
        </div>
        <div class="px-8 pb-4 bg-gray-200">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Cycle
          </label>
          <div class="flex flex-row items-center">
            <select class="appearance-none block w-full bg-white text-gray-800 border border-gray-200 rounded py-3 px-4" v-model="cycleId">
              <option value="" select hidden disabled>Choose one</option>
              <option :value="cycle.id" v-for="cycle in cycles">{{ cycle.name }}</option>
            </select>
            <font-awesome-icon :icon="faChevronDown"
              class="w-1/6 pointer-events-none flex items-center text-gray-700 -ml-8">
            </font-awesome-icon>
          </div>

        </div>
        <div class="px-8 pb-8 bg-gray-200">
          <label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2" for="grid-first-name">
            Body <span class="text-gray-500 capitalize">(required)</span>
          </label>
          <div id="editor" class="h-80 bg-white">
          </div>
        </div>
      </div>
      <div class="flex flex-row justify-between px-8 py-4 bg-white rounded-b">
        <button @click="closeEditor" class="no-underline px-3 py-2 my-4 bg-white text-base text-red-400 rounded border-red-400 border">Cancel</button>
        <div>
          <button @click="savePost(true)" class="no-underline px-3 py-2 mr-4 my-4 text-teal-400  text-base bg-white font-medium rounded border-teal-400  border">Save as a Draft</button>
          <button @click="savePost(false)" class="no-underline px-3 py-2 my-4 bg-teal-400 text-base text-white font-medium rounded">Publish</button>
        </div>
      </div>
    </div>
    <div class="h-16"></div>
  </div>

  <div @click="closeEditor" :class="{'hidden': !formShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25"></div>
</div>
</template>

<script>
import Quill from 'quill'
import { mapState, mapActions } from 'vuex'
import imageUpload from 'quill-plugin-image-upload'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default {
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
    quill: null,
    name: '',
    cycleId: '',
    categoryId: '',
    categories: [],
    faChevronDown
  }),
  mounted () {
    Quill.register('modules/imageUpload', imageUpload)
    this.quill = new Quill('#editor', {
      modules: {
        toolbar: [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['blockquote', 'code-block'],
          ['image', 'link']
        ],
        imageUpload: {
          upload: file => {
            let formData = new FormData()
            formData.append('files[0]', file)
            formData.append('group_type', this.resourceType)
            formData.append('group_id', this.resourceId)
            formData.append('for_editor', true)
            
            // return a Promise that resolves in a link to the uploaded image
            return new Promise((resolve, reject) => {
              axios.post('/files',
                formData,
                {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                })
                .then((response) => {
                  EventBus.$emit('notification', response.data.message, response.data.status)
                  resolve(response.data.url)
                })
                .catch((error) => {
                  EventBus.$emit('notification', error.response.data.message, error.response.data.status)
                })
            });
          }
        },
      },
      theme: 'snow'
    })
  },
  computed: {
    ...mapState({
      cycles: state => state.cycles
    })
  },
  methods: {
    savePost (draft = true) {
      axios.post('/discussions', {
        name: this.name,
        category_id: this.categoryId,
        content: this.quill.root.innerHTML,
        raw_content: JSON.stringify(this.quill.getContents()),
        draft: draft,
        cycle_id: this.cycleId,
        group_type: this.resourceType,
        group_id: this.resourceId
      })
        .then((response) => {
          this.name = ''
          this.categoryId = ''
          this.quill.setContents([])
          EventBus.$emit('notification', response.data.message, response.data.status)
          this.$emit('close', response.data.discussion)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          this.$emit('close')
        })
    },
    closeEditor () {
      this.$emit('close')
    },
    getCategories () {
      if (this.formShown && this.categories.length < 1) {
        axios.get('/categories')
          .then((response) => {
            this.categories = response.data.categories
          })
          .catch((error) => {})
      }
    },
  },
  watch: {
    formShown: 'getCategories'
  }
}
</script>

<style src="./../../../css/editor.css">
</style>
