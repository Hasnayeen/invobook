<template>
<div>
  <div class="border-b pt-8 pb-2 text-grey-dark font-medium">
    Comments
  </div>
  <div class="pt-6">
    <textarea class="static bg-grey-lighter textarea resize-none rounded w-full p-4 text-grey-darker"
      id="save-comment"
      placeholder="write your comment here"
      rows=1
      v-model="comment"
      @keydown.enter.prevent="saveComment($event)"></textarea>
    <div class="text-xs text-grey-dark pt-2">Press enter <span class="bg-grey p-1 rounded text-white font-bold">↵</span> to save</div>
  </div>
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
  data: () => ({
    comment: ''
  }),
  methods: {
    saveComment (e) {
      if (e.shiftKey) {
        this.comment = this.comment + '\n'
      } else {
        axios.post('/comments', {
          body: this.comment,
          commentable_type: 'discussion',
          commentable_id: this.discussion.id
        })
          .then((response) => {
            this.comment = ''
            EventBus.$emit('notification', response.data.message, response.data.status)
          })
          .catch((error) => {
            EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          })
      }
    },
  }
}
</script>
