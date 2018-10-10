<template>
<div>
  <div :class="{'hidden': !formShown}" class="absolute container mx-auto mb-8 w-5/6 md:w-md lg:w-lg xl:w-xl bg-white rounded shadow-lg z-10" style="top: 12vh;left: 0;right: 0;">
    <div class="">
      <div class="p-4 bg-grey-lighter">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Title <span class="text-grey capitalize">(required)</span>
        </label>
        <input v-model="name" class="appearance-none block w-full bg-white text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="New Discussion Post" required>
      </div>
      <div class="p-4 bg-grey-lighter">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Category <span class="text-grey capitalize">(required)</span>
        </label>
        <select class="appearance-none block w-full bg-white text-grey-darker border border-grey-lighter rounded py-3 px-4" v-model="categoryId">
          <option value="" disabled>Choose one</option>
          <option :value="category.id" v-for="category in categories">{{ category.name }}</option>
        </select>
      </div>
      <div class="p-4 bg-grey-lighter">
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
          Body <span class="text-grey capitalize">(required)</span>
        </label>
        <div id="editor" class="h-80 bg-white">
        </div>
      </div>
    </div>
    <div class="flex flex-row justify-between px-4 bg-white rounded-b">
      <button @click="closeEditor" class="no-underline px-3 py-2 my-4 bg-white text-base text-red-light rounded border-red-light border">Cancel</button>
      <div>
        <button @click="savePost(true)" class="no-underline px-3 py-2 mr-4 my-4 text-teal-light text-base bg-white font-medium rounded border-teal-light border">Save as a Draft</button>
        <button @click="savePost(false)" class="no-underline px-3 py-2 my-4 bg-teal-light text-base text-white font-medium rounded">Publish</button>
      </div>
    </div>
  </div>

  <div @click="closeEditor" :class="{'hidden': !formShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
let options = {
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['blockquote', 'code-block'],
      ['image', 'link']
    ]
  },
  theme: 'snow'
}
import Quill from 'quill'
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
    categoryId: '',
    categories: []
  }),
  mounted () {
    this.quill = new Quill('#editor', options)
  },
  methods: {
    savePost (draft = true) {
      axios.post('/discussions', {
        name: this.name,
        category_id: this.categoryId,
        content: this.quill.root.innerHTML,
        raw_content: JSON.stringify(this.quill.getContents()),
        draft: draft,
        discussionable_type: this.resourceType,
        discussionable_id: this.resourceId
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
    }
  },
  watch: {
    formShown: 'getCategories'
  }
}
</script>

<style src="./../../../css/editor.css">
</style>
