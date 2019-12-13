<template>
<div v-if="discussionDetailsShown">
  <div class="absolute container mx-auto md:w-5/6 lg:4/5 xl:w-3/4 xxl:w-2/3 z-30 mb-16" style="top: 12vh;left: 0;right: 0;">
    <div class="bg-gray-100 rounded shadow-lg py-8">
      <div class="flex flex-row justify-between relative px-8">
        <div @click="closeDiscussionDetails" class="cursor-pointer">
          <font-awesome-icon :icon="faArrowLeft"
            class="text-base text-gray-600">
          </font-awesome-icon>
        </div>
        <div @click="toggleMenu" v-click-outside="hideMenu" class="cursor-pointer">
          <font-awesome-icon :icon="faEllipsisH"
            class="text-base text-gray-600">
          </font-awesome-icon>
        </div>
        <div v-if="dropdownMenuShown" class="absolute rounded shadow-md right-0 top-0 mt-6 mr-4 py-1 text-indigo-800 bg-white">
          <div @click="editDiscussion" class="cursor-pointer hover:bg-indigo-200 px-4 py-2">
            Edit
          </div>
          <div @click="deleteDiscussion" class="cursor-pointer hover:bg-indigo-200 px-4 py-2">
            Delete
          </div>
        </div>
      </div>

      <div :data-discussion-id="discussion.id" class="text-gray-700 text-left text-3xl font-medium py-4 px-16">
        {{ discussion.name }}
      </div>
      <div class="flex flex-row justify-start items-center pb-4 px-16">
        <img :src="generateUrl(discussion.creator.avatar)" class="rounded-full w-10 h-10">
        <div class="text-gray-800 text-sm ml-4">
          <div>
            {{ discussion.creator.name }}
          </div>
          <div>
            {{ discussion.date }}
          </div>
        </div>
      </div>
      <div class="ql-snow">
        <div class="ql-editor -mx-3">
          <div v-html="discussion.content" class="py-8 px-16 bg-white text-gray-900"></div>
        </div>
      </div>

      <comment-box resourceType="discussion" :resourceId="discussion.id" :show="discussionDetailsShown" class="px-16"></comment-box>
    </div>
    <div class="h-16"></div>
  </div>

  <div @click="closeDiscussionDetails(false)" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import commentBox from './commentBox.vue'
import {
  faArrowLeft,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    commentBox
  },
  props: {
    discussionDetailsShown: {
      required: true,
      type: Boolean
    },
    discussion: {
      required: true,
      type: Object
    },
    index: {
      required: true
    }
  },

  data () {
    return {
      dropdownMenuShown: false,
      faArrowLeft,
      faEllipsisH
    }
  },

  mounted () {
    let topElement = document.getElementById('app')
    topElement.scrollIntoView({behavior: "smooth", block: "start"})
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    closeDiscussionDetails (editDiscussion = false) {
      this.dropdownMenuShown = false
      this.$emit('close', editDiscussion)
    },
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMenu () {
      this.dropdownMenuShown = false
    },
    deleteDiscussion () {
      axios.delete(`/discussions/${this.discussion.id}`)
        .then((response) => {
          this.$emit('deleted', this.index)
          this.closeDiscussionDetails()
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.closeDiscussionDetails()
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    editDiscussion () {
      this.closeDiscussionDetails(true)
    }
  }
}
</script>

<style src="./../../../css/editor.css">
</style>
