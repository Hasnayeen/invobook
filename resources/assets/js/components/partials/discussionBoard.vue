<template>
<div id="discussion-container" v-if="activeTab === 'discussions'" class="w-full">
  <create-discussion-form ref="discussionForm" :resourceId="resource.id" :resourceType="resourceType" :discussion="discussion" @close="closeCreateDiscussionForm" :form-shown="createDiscussionFormShown"></create-discussion-form>

  <discussion-details v-if="discussion" :discussionDetailsShown="discussionDetailsShown" :discussion="discussion" :index="index" @close="closeDiscussionDetails" @deleted="deleteDiscussion"></discussion-details>

  <div v-if="authenticated" class="text-center">
    <button @click="showCreateDiscussionForm" class="no-underline p-3 my-4 bg-white text-base text-indigo-500 rounded shadow">{{ 'Create New Post' | localize }}</button>
    <button v-if="showDraftPost" @click="toogleDiscussions" class="no-underline ml-2 p-3 my-4 bg-white text-base text-indigo-500 rounded shadow">{{ 'Show Draft Discussions' | localize }}</button>
    <button v-else @click="toogleDiscussions" class="no-underline ml-2 p-3 my-4 bg-white text-base text-indigo-500 rounded shadow">{{ 'Show Published Discussions' | localize }}</button>
  </div>
  <div class="flex flex-row flex-wrap items-start md:-mx-4">
    <div @click="showDiscussionDetails(index, discussion.id)" v-for="(discussion, index) in discussions" :key="index" class="w-full md:w-88 my-6 md:mx-4 bg-white shadow-md flex flex-col rounded cursor-pointer">
      <div class="bg-indigo-500 flex flex-col items-start w-full text-white rounded-t p-6 pb-4">
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
    <div class="pb-4 text-lg">{{ 'Have an idea or question? Create a Discussion' | localize }}</div>
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
    draftDiscussions: [],
    publishedDiscussions: [],
    discussionDetailsShown: false,
    index: null,
    authenticated,
    showDraftPost: true
  }),
  async created () {
    await this.getAllPublishedDiscussions(true)
    await this.getAllDraftDiscussions(true)
    const id = new URL(location.href).searchParams.get('id')
    this.discussion = this.discussions.find(discussion => discussion.id === parseInt(id))
    if (id) {
      this.discussionDetailsShown = true
    }
  },
  watch: {
    activeTab: function () {
      this.getAllPublishedDiscussions(false)
      this.getAllDraftDiscussions(false)
    },
    selectedCycleId: function () {
      this.getAllPublishedDiscussions(true)
      this.getAllDraftDiscussions(true)
      this.showDraftPost = true
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
      if (newDiscussion && !newDiscussion.draft && (this.selectedCycleId === 0 || this.selectedCycleId === newDiscussion.cycle_id)) {
        this.showDraftPost = false
        this.publishedDiscussions.push(newDiscussion)
        this.toogleDiscussions()
      } else if (newDiscussion && newDiscussion.draft && (this.selectedCycleId === 0 || this.selectedCycleId === newDiscussion.cycle_id)) {
        this.showDraftPost = true
        this.draftDiscussions.push(newDiscussion)
        this.toogleDiscussions()
      } else if (updatedDiscussion && (this.selectedCycleId === 0 || this.selectedCycleId === updatedDiscussion.cycle_id)) {
        this.updateDiscussionsData(updatedDiscussion)
      }
      this.createDiscussionFormShown = false
      this.discussion = null
    },
    async getAllPublishedDiscussions (update = false) {
      try {
        if (this.activeTab === 'discussions' && (this.discussions.length < 1 || update)) {
          let { data } = await axios({
            url: '/discussions',
            params: {
              group_type: this.resourceType,
              group_id: this.resource.id,
              cycle_id: this.selectedCycleId !== 0 ? this.selectedCycleId : null
            }})
          this.publishedDiscussions = data.discussions
          this.discussions = data.discussions
          return this.discussions
        }
      } catch (error) {
        console.error(error.response.data.message)
      }
    },
    async getAllDraftDiscussions (update = false) {
      try {
        if (this.activeTab === 'discussions'  && (this.discussions.length < 1 || update)) {
          let { data } = await axios({
            url: '/draft-discussions',
            params: {
              group_type: this.resourceType,
              group_id: this.resource.id,
              cycle_id: this.selectedCycleId !== 0 ? this.selectedCycleId : null
            }})
          this.draftDiscussions = data.draft_discussions
          return this.draftDiscussions
        }
      } catch (error) {
        console.error(error.response.data.message)
      }
    },
    showDiscussionDetails (index, id) {
      this.updateUrl({"id": id})
      this.index = index
      this.discussion = this.discussions[index]
      this.discussionDetailsShown = true
    },
    closeDiscussionDetails (editDiscussion = false) {
      this.updateUrl({"id": null})
      this.discussionDetailsShown = false
      if (editDiscussion) {
        this.createDiscussionFormShown = true
      } else {
        this.discussion = {}
      }
    },
    deleteDiscussion (index) {
      this.discussions.splice(index, 1)
    },
    updateDiscussionsData(updatedDiscussion){
      const foundDiscussion = this.publishedDiscussions.find(disc => disc.id === updatedDiscussion.id);

      if(foundDiscussion) {
        this.showDraftPost = false
        this.publishedDiscussions.splice(this.index, 1, updatedDiscussion)
        this.toogleDiscussions()
      } else {
        this.showDraftPost  = true
        this.publishedDiscussions.push(updatedDiscussion)
        this.draftDiscussions = this.draftDiscussions.filter(draft => draft.id !== updatedDiscussion.id)
        this.toogleDiscussions()
      }
    },
    toogleDiscussions() {
      if(this.showDraftPost === true){
        this.showDraftPost = false
        this.discussions = this.draftDiscussions
      } else {
        this.showDraftPost = true
        this.discussions = this.publishedDiscussions
      }
    }
  },
}
</script>
