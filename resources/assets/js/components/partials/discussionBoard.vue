<template>
<div :class="{'hidden': (activeTab != 'discussions')}" class="w-full">
  <create-discussion-form ref="discussionForm" :resourceId="resource.id" :resourceType="resourceType" @close="closeCreateDiscussionForm" :form-shown="createDiscussionFormShown"></create-discussion-form>

  <discussion-details v-if="discussion" :discussionDetailsShown="discussionDetailsShown" :discussion="discussion" :index="index" @close="closeDiscussionDetails" @deleted="deleteDiscussion"></discussion-details>

  <div class="text-center">
    <button @click="showCreateDiscussionForm" class="no-underline p-3 my-4 bg-white text-base text-teal rounded shadow">{{ 'Create New Post' | localize }}</button>
  </div>
  <div class="flex flex-row flex-wrap justify-center items-start">
    <div @click="showDiscussionDetails(index)" v-for="(discussion, index) in discussions" :key="index" class="w-80 my-6 md:m-6 bg-white shadow-md flex flex-col items-center rounded cursor-pointer">
      <div class="bg-teal flex flex-col items-start w-full text-white rounded-t p-6 pb-4">
        <div class="text-white text-2xl text-center font-semibold">{{ discussion.name }}</div>
        <div class="flex flex-row pt-4">
          <div class="w-8 h-8 mr-2">
            <a :href="'/users/' + discussion.creator.username">
              <img :src="generateUrl(discussion.creator.avatar)" class="rounded-full w-8 h-8">
            </a>
          </div>
          <div class="text-xs font-bold flex flex-col justify-between">
            <div>
              {{ discussion.category.name }}
            </div>
            <div>
              {{ discussion.date }}
            </div>
          </div>
        </div>
      </div>
      <div class="text-regular my-4 mx-6 text-grey-darker leading-normal overflow-hidden" style="max-height: 12rem;">
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
  async created () {
    await this.getAllDiscussions()
    const id = new URL(location.href).searchParams.get('id')
    this.discussion = this.discussions.find(discussion => discussion.id === parseInt(id))
    if (id) {
      this.discussionDetailsShown = true
    }
  },
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
    async getAllDiscussions () {
      try {
        if (this.activeTab === 'discussions' && this.discussions.length < 1) {
          let { data } = await axios({
            url: '/discussions',
            params: {
              resource_type: this.resourceType,
              resource_id: this.resource.id
            }})
          this.discussions = data.discussions
          return this.discussions
        }
      } catch (error) {
        console.error(error.response.data.message)
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
