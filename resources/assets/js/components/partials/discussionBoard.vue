<template>
<div v-if="activeTab === 'discussions'" class="w-full">
  <create-discussion-form ref="discussionForm" :resourceId="resource.id" :resourceType="resourceType" :discussion="discussion" @close="closeCreateDiscussionForm" :form-shown="createDiscussionFormShown"></create-discussion-form>

  <discussion-details v-if="discussion" :discussionDetailsShown="discussionDetailsShown" :discussion="discussion" :index="index" @close="closeDiscussionDetails" @deleted="deleteDiscussion"></discussion-details>

  <div v-if="authenticated" class="text-center">
    <button @click="showCreateDiscussionForm" class="no-underline p-3 my-4 bg-white text-base text-teal-500 rounded shadow">{{ 'Create New Post' | localize }}</button>
  </div>
  <div class="flex flex-row flex-wrap items-start lg:-mx-2 xl:-mx-3">
    <div @click="showDiscussionDetails(index)" v-for="(discussion, index) in discussions" :key="index" class="w-full md:w-72 xl:w-88 my-6 md:m-6 lg:mx-2 xl:mx-5 bg-white shadow-md flex flex-col rounded cursor-pointer">
      <div class="bg-teal-500 flex flex-col items-start w-full text-white rounded-t p-6 pb-4">
        <div class="text-white text-xl font-semibold">{{ discussion.name }}</div>
        <div class="flex flex-row pt-2">
          <div class="w-10 h-10 mr-2">
            <a :href="'/users/' + discussion.creator.username">
              <img :src="generateUrl(discussion.creator.avatar)" class="rounded-full w-10 h-10">
            </a>
          </div>
          <div class="text-xs font-bold flex flex-col justify-center">
            <div>
              {{ discussion.category.name }}
            </div>
            <div>
              {{ discussion.date }}
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm my-4 mx-6 text-gray-800 leading-normal overflow-hidden" style="max-height: 12rem;">
        <div v-html="discussion.content"></div>
      </div>
    </div>
  </div>
  <div v-if="discussions.length === 0" class="flex flex-col items-center pt-8">
    <div class="pb-4 text-lg">Have an idea or question? Create a Discussion</div>
    <img src="/image/discussions.svg" alt="discussion post" class="w-80">
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
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
    },
    activeId: {
      required: false,
      type: Number
    }
  },
  data: () => ({
    createDiscussionFormShown: false,
    discussions: [],
    discussion: {},
    discussionDetailsShown: false,
    index: null,
    authenticated
  }),
  async created () {
    await this.getAllDiscussions(true)
    const id = new URL(location.href).searchParams.get('id')
    this.discussion = this.discussions.find(discussion => discussion.id === parseInt(id))
    if (id) {
      this.discussionDetailsShown = true
    }
  },
  watch: {
    activeTab: function () {
      this.getAllDiscussions(false)
    },
    selectedCycleId: function () {
      this.getAllDiscussions(true)
    }
  },
  computed: {
    ...mapState({
      selectedCycleId: state => state.cycle.selectedCycle ? state.cycle.selectedCycle.id : 0
    })
  },
  methods: {
    showCreateDiscussionForm () {
      this.createDiscussionFormShown = true
      this.$nextTick(() => {
        this.$refs.discussionForm.$refs.inputFocus.focus();
      })
    },
    closeCreateDiscussionForm (newDiscussion = null, updatedDiscussion = null) {
      if (newDiscussion && (this.selectedCycleId === 0 || this.selectedCycleId === newDiscussion.cycle_id)) {
        this.discussions.push(newDiscussion)
      } else if (updatedDiscussion && (this.selectedCycleId === 0 || this.selectedCycleId === updatedDiscussion.cycle_id)) {
        this.discussions.splice(this.index, 1, updatedDiscussion)
      }
      this.createDiscussionFormShown = false
      this.discussion = null
    },
    async getAllDiscussions (update = false) {
      try {
        if (this.activeTab === 'discussions' && (this.discussions.length < 1 || update)) {
          let { data } = await axios({
            url: '/discussions',
            params: {
              group_type: this.resourceType,
              group_id: this.resource.id,
              cycle_id: this.selectedCycleId !== 0 ? this.selectedCycleId : null
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
    closeDiscussionDetails (editDiscussion = false) {
      this.discussionDetailsShown = false
      if (editDiscussion) {
        this.createDiscussionFormShown = true
      } else {
        this.discussion = {}
      }
    },
    deleteDiscussion (index) {
      this.discussions.splice(index, 1)
    }
  },
}
</script>
