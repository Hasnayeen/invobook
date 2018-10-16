<template>
<div>
  <div class="border-b pt-8 pb-2 text-grey-dark font-medium">
    Comments <span class="rounded-full py-1 px-2 bg-teal-lighter">{{ comments.length }}</span>
  </div>
  <div class="py-6">
    <textarea class="static bg-grey-lighter textarea resize-none rounded w-full p-4 text-grey-darker"
      id="save-comment"
      placeholder="write your comment here"
      rows=1
      v-model="body"
      @keydown.enter.prevent="saveComment($event)"></textarea>
    <div class="text-xs text-grey-dark pt-2">Press enter <span class="bg-grey p-1 rounded text-white font-bold">↵</span> to save</div>
  </div>
  <div>
    <div v-for="(comment, index) in comments" class="my-6">
      <div class="text-xs text-grey-dark pb-2 ml-10">
        {{ comment.user.name }} on {{ comment.date }}
      </div>
      <div class="flex flex-row items-center">
        <div class="z-10">
          <img :src="generateUrl(comment.user.avatar)" class="rounded-full w-8 h-8">
        </div>
        <div class="flex-1 bg-grey-lighter text-grey-darker rounded ml-2 p-4">
          {{ comment.body }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    resourceType: {
      required: true,
      type: String
    },
    resource: {
      required: true,
      type: Object
    },
    detailsShown: {
      required: true,
      type: Boolean
    }
  },
  data: () => ({
    body: '',
    comments: []
  }),
  methods: {
    saveComment (e) {
      if (e.shiftKey) {
        this.body = this.body + '\n'
      } else {
        axios.post('/comments', {
          body: this.body,
          commentable_type: this.resourceType,
          commentable_id: this.resource.id
        })
          .then((response) => {
            this.body = ''
            this.comments.push(response.data.comment)
            EventBus.$emit('notification', response.data.message, response.data.status)
          })
          .catch((error) => {
            EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          })
      }
    }
  },
  created () {
    axios.get('/comments', {
      params: {
        commentable_type: this.resourceType,
        commentable_id: this.resource.id
      }
    })
    .then((response) => {
      this.comments = response.data.comments
    })
    .catch((error) => {
      
    })
  }
}
</script>
