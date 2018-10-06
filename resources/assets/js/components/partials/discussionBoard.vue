<template>
<div :class="{'hidden': (activeTab != 'discussions')}" class="w-full">
  <create-discussion-form :resourceId="resource.id" :resourceType="resourceType" @close="closeCreateDiscussionForm" :form-shown="createDiscussionFormShown"></create-discussion-form>
  <button @click="showCreateDiscussionForm" class="no-underline p-3 my-4 bg-white text-base text-teal rounded shadow">Create New Post</button>
  <div class="w-full bg-white shadow-md flex flex-row flex-wrap rounded mt-8">
    <a href="#" class="flex flex-row items-center px-6 py-4 no-underline">
      <div class="w-12 h-12 flex-none">
        <img src="http://placehold.it/34x34" class="rounded-full w-12 h-12">
      </div>
      <div class="text-grey-dark text-left pl-4">
        <p class="font-semibold text-grey-dark">
          John Smith
          <span class="text-xs px-2">11:03am</span>
          <span class="text-xs">
            6
            <i class="fas fa-comment-alt"></i>
          </span>
        </p>
        <p class="text-regular pt-3 text-grey-darker leading-normal">Differences in how writing systems represent language raise important questions about the extent to which the
        role of linguistic skills such as phonological awareness (PA) and morphological awareness (MA) in ...</p>
      </div>
    </a>
  </div>
  <div class="w-full bg-white shadow-md flex flex-row flex-wrap rounded mt-8">
    <a href="#" class="flex flex-row items-center px-6 py-4 no-underline">
      <div class="w-12 h-12 flex-none">
        <img src="http://placehold.it/34x34" class="rounded-full w-12 h-12">
      </div>
      <div class="text-grey-dark text-left pl-4">
        <p class="font-semibold text-grey-dark">
          John Smith
          <span class="text-xs px-2">11:03am</span>
          <span class="text-xs">
            6
            <i class="fas fa-comment-alt"></i>
          </span>
        </p>
        <p class="text-regular pt-3 text-grey-darker leading-normal">Differences in how writing systems represent language raise important questions about the extent to which the
        role of linguistic skills such as phonological awareness (PA) and morphological awareness (MA) in ...</p>
      </div>
    </a>
  </div>
  <div class="w-full bg-white shadow-md flex flex-row flex-wrap rounded mt-8">
    <a href="#" class="flex flex-row items-center px-6 py-4 no-underline">
      <div class="w-12 h-12 flex-none">
        <img src="http://placehold.it/34x34" class="rounded-full w-12 h-12">
      </div>
      <div class="text-grey-dark text-left pl-4">
        <p class="font-semibold text-grey-dark">
          John Smith
          <span class="text-xs px-2">11:03am</span>
          <span class="text-xs">
            6
            <i class="fas fa-comment-alt"></i>
          </span>
        </p>
        <p class="text-regular pt-3 text-grey-darker leading-normal">Differences in how writing systems represent language raise important questions about the extent to which the
        role of linguistic skills such as phonological awareness (PA) and morphological awareness (MA) in ...</p>
      </div>
    </a>
  </div>
</div>
</template>

<script>
import createDiscussionForm from '../forms/createDiscussionForm.vue'
export default {
  components: {createDiscussionForm},
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
    createDiscussionFormShown: false
  }),
  methods: {
    showCreateDiscussionForm () {
      this.createDiscussionFormShown = true
    },
    closeCreateDiscussionForm () {
      this.createDiscussionFormShown = false
    }
  }
}
</script>
