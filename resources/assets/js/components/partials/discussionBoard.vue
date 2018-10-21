<template>
<div :class="{'hidden': (activeTab != 'discussions')}" class="w-full">
  <create-discussion-form ref="discussionForm" :resourceId="resource.id" :resourceType="resourceType" @close="closeCreateDiscussionForm" :form-shown="createDiscussionFormShown"></create-discussion-form>

  <discussion-details :discussionDetailsShown="discussionDetailsShown" :discussion="discussion" :index="index" @close="closeDiscussionDetails" @deleted="deleteDiscussion"></discussion-details>

  <div class="text-center">
    <button @click="showCreateDiscussionForm" class="no-underline p-3 my-4 bg-white text-base text-teal rounded shadow">{{ 'Create New Post' | localize }}</button>
  </div>
  <div class="flex flex-row flex-wrap justify-center items-start">
    <div @click="showDiscussionDetails(index)" v-for="(discussion, index) in discussions" :key="index" class="w-80 my-6 md:m-6 bg-white shadow-md flex flex-col items-center rounded cursor-pointer">
      <div class="bg-teal flex flex-col items-center w-full text-white rounded-t">
        <div class="w-10 h-10 flex-none py-4">
          <img :src="generateUrl(discussion.creator.avatar)" class="rounded-full w-10 h-10">
        </div>
        <div class="mt-6 text-xs">
          by <a :href="'/users/' + discussion.creator.username" class="text-sm text-white font-bold cursor-pointer no-underline">{{ discussion.creator.name }}</a> on <span class="text-sm font-bold">{{ discussion.date }}</span> in <span class="text-sm font-bold">{{ discussion.category.name }}</span>
        </div>
        <div class="text-white text-3xl text-center font-semibold p-4">{{ discussion.name }}</div>
      </div>
      <div class="text-regular m-4 text-grey-darker leading-normal overflow-hidden" style="max-height: 12rem;">
        <div v-html="discussion.content"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import createDiscussionForm from '../forms/createDiscussionForm.vue'
import discussionDetails from './discussionDetails'
export default {
  components: {
    createDiscussionForm,
    discussionDetails
  },
  props: {
    resource: {
      required: true,
      type: Object
    },
    resourceType: {
      required: true,
      type: String
    },
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({
    createDiscussionFormShown: false,
    discussions: [],
    discussion: {},
    discussionDetailsShown: false,
    index: null
  }),
  methods: {
    showCreateDiscussionForm () {
      this.createDiscussionFormShown = true
      this.$nextTick(() => {
        this.$refs.discussionForm.$refs.inputFocus.focus();
      })
    },
    closeCreateDiscussionForm (newDiscussion = null) {
      if (newDiscussion) this.discussions.push(newDiscussion)
      this.createDiscussionFormShown = false
    },
    getAllDiscussions () {
      if (this.activeTab === 'discussions' && this.discussions.length < 1) {
        axios.get('/discussions', {
          params: {
            resource_type: this.resourceType,
            resource_id: this.resource.id
          }
        })
          .then((response) => {
            this.discussions = response.data.discussions
          })
          .catch((error) => {
            console.log(error.response.data.message)
          })
      }
    },
    showDiscussionDetails (index) {
      this.index = index
      this.discussion = this.discussions[index]
      this.discussionDetailsShown = true
    },
    closeDiscussionDetails () {
      this.discussionDetailsShown = false
      this.discussion = {}
    },
    deleteDiscussion (index) {
      this.discussions.splice(index, 1)
    }
  },
  watch: {
    activeTab: 'getAllDiscussions'
  }
}
</script>
