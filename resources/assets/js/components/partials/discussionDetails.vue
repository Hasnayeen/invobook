<template>
<div v-if="discussionDetailsShown">
  <div class="absolute container mx-auto md:w-5/6 lg:4/5 xl:w-3/4 xxl:w-2/3 bg-white rounded shadow-lg z-10 py-8 px-16 mb-16" style="top: 12vh;left: 0;right: 0;">
      <div class="flex flex-row justify-between relative">
        <div @click="closeDiscussionDetails" class="cursor-pointer">
          <i class="fas fa-arrow-left text-base text-grey-dark"></i>
        </div>
        <div @click="toggleMenu" class="cursor-pointer">
          <i class="fas fa-ellipsis-h text-base text-grey-dark"></i>
        </div>
        <div v-if="dropdownMenuShown" class="absolute rounded shadow-lg pin-r pin-t mt-4 p-3 text-grey-darker hover:bg-grey-light">
          <div @click="deleteDiscussion" class="cursor-pointer">
            Delete
          </div>
        </div>
      </div>
    <div :data-discussion-id="discussion.id" class="text-grey-darkest text-left text-3xl font-medium py-4">
      {{ discussion.name }}
    </div>
    <div class="flex flex-row justify-start items-center pb-4 border-b">
      <img :src="generateUrl(discussion.creator.avatar)" class="rounded-full w-10 h-10">
      <div class="text-grey-darker text-sm ml-4">
        <div class="pb-1">
          {{ discussion.creator.name }}
        </div>
        <div>
          {{ discussion.date }}
        </div>
      </div>
    </div>
    <div v-html="discussion.content" class="py-8 text-grey-darkest"></div>

    <comment-box resourceType="discussion" :resource="discussion" :detailsShown="discussionDetailsShown"></comment-box>
  </div>

  <div @click="closeDiscussionDetails" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
import commentBox from './commentBox.vue'
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
  data() {
    return {
      dropdownMenuShown: false,
    }
  },
  methods: {
    closeDiscussionDetails () {
      this.dropdownMenuShown = false
      this.$emit('close')
    },
    toggleMenu() {
      this.dropdownMenuShown = ! this.dropdownMenuShown
    },
    deleteDiscussion() {
      axios.delete(`/discussions/${this.discussion.id}`)
        .then((response) => {
          this.$emit('deleted', this.index);

          this.closeDiscussionDetails()

          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          this.closeDiscussionDetails()

          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    }
  }
}
</script>
