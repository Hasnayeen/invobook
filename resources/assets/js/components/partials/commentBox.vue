<template>
<div>
  <div class="border-b pt-8 pb-2 text-grey-dark font-medium">
    Comments <span class="rounded-full py-1 px-2 bg-teal-lighter">{{ comments.length }}</span>
  </div>
  <div class="py-6">
    <textarea class="static bg-grey-lighter textarea resize-none rounded w-full p-4 text-grey-darker"
      :id="'save-comment'"
      placeholder="write your comment here"
      rows=1
      v-model="body"
      @keyup="checkForMention($event)"
      @keydown="mentionHighlightMove($event)"
      @keydown.enter.prevent="saveComment($event)"></textarea>
    <user-suggestion-box
      :users="users"
      :name="name"
      :suggestionShown="suggestionShown"
      :suggestionSelected="suggestionSelected"
      :suggestionHighlightIndex="suggestionHighlightIndex"
      :suggestionHighlightDirection="suggestionHighlightDirection"
      @selected="userSelected"></user-suggestion-box>
    <div v-if="name.length < 1" class="absolute text-xs text-grey-dark pt-2">Press enter <span class="bg-grey p-1 rounded text-white font-bold">↵</span> to save</div>
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
        <div class="flex-1 bg-grey-lighter text-grey-darker rounded ml-2 p-4 flex flex-row justify-between">
          <div v-linkified:options="{ className: 'text-blue italic' }" >
            {{ comment.body }}
          </div>
          <div v-if="user.id === comment.user_id" @click="deleteComment(comment,index)" class="text-xs text-red pb-2 ml-10 cursor-pointer">
            <font-awesome-icon :icon="faTrashAlt">
            </font-awesome-icon>
          </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import userSuggestionBox from './userSuggestionBox'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
export default {
  components: {userSuggestionBox},
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
    comments: [],
    user: user,
    users: [],
    name: '',
    mentionStarted: false,
    startIndex: 0,
    suggestionHighlightDirection: 1,
    suggestionHighlightIndex: 0,
    suggestionSelected: false,
    suggestionShown: false,
    mentions: [],
    faTrashAlt
  }),
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
        console.log(error.response.data.message)
      })
    axios.get('/users')
      .then((response) => {
        this.users = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    saveComment (e) {
      if (e.shiftKey) {
        this.body = this.body + '\n'
      } else if (this.mentionStarted) {
        this.suggestionSelected = true
      } else {
        axios.post('/comments', {
          body: this.body,
          commentable_type: this.resourceType,
          commentable_id: this.resource.id,
          mentions: this.mentions
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
    },
    deleteComment (comment, index) {
      axios.delete('/comments/' + comment.id)
        .then((response) => {
          this.comments.splice(index, 1)
          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    },
    checkForMention (e) {
      if (e.key === "@") {
        this.suggestionShown = true
        this.mentionStarted = true
        this.startIndex = document.getElementById('save-comment').selectionStart
      } else if (e.keyCode === 32 || e.keyCode === 27 || (e.keyCode === 8 && document.getElementById('save-comment').selectionStart < this.startIndex)) {
        this.mentionStarted = false
        this.suggestionShown = false
        this.suggestionHighlightIndex = 0
        this.name = ''
      } else if (this.mentionStarted) {
        this.name = e.target.value.substring(this.startIndex)
      }
    },
    mentionHighlightMove (e) {
      if (this.mentionStarted && (e.keyCode === 38 || e.keyCode === 40)) {
        if (e.keyCode === 38) {
          this.suggestionHighlightIndex -= 1
          this.suggestionHighlightDirection = -1
        } else if (e.keyCode === 40) {
          this.suggestionHighlightIndex += 1
          this.suggestionHighlightDirection = 1
        }
        e.preventDefault()
      }
    },
    userSelected (text) {
      this.body = this.body.substring(0, this.startIndex) + text
      this.mentions.push(text)
      this.mentionStarted = false
      this.suggestionShown = false
      this.suggestionSelected = false
      this.suggestionHighlightIndex = 0
      this.name = ''
      document.getElementById('save-comment').focus()
    }
  }
}
</script>
