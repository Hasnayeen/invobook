<template>
<div class="absolute container mx-auto md:w-5/6 lg:4/5 xl:w-3/4 xxl:w-2/3 bg-white rounded shadow-lg z-10 py-8 px-16 mb-8" style="top: 12vh;left: 0;right: 0;">
    <div class="flex flex-row justify-between relative">
      <div @click="closeDiscussionDetails" class="cursor-pointer">
        <i class="fas fa-arrow-left text-base text-grey-dark"></i>
      </div>
      <div class="cursor-pointer">
        <i class="fas fa-ellipsis-h text-base text-grey-dark"></i>
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
</div>  
</template>

<script>
export default {
  props: {
    discussion: {
      required: true,
      type: Object
    }
  },
  methods: {
    closeDiscussionDetails () {
      this.$emit('close')
    }
  }
}
</script>
