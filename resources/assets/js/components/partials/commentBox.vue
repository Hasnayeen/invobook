<template>
<div v-if="show">
  <div class="flex flex-row items-center border-b pt-8 pb-2">
    <div class="text-gray-600 text-xl pr-2">
      Comments 
    </div>
    <div class="rounded-full bg-teal-500 flex items-center justify-center w-8 h-8">
      <span class="text-white text-sm font-semibold">{{ comments.length }}</span>
    </div>
  </div>
  <div class="py-6">
    <textarea class="static bg-white textarea resize-none rounded w-full p-4 text-gray-800"
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
    <div v-if="name.length < 1" class="absolute text-xs text-gray-600 pt-2">Press enter <span class="bg-gray-500 px-2 py-1 rounded text-white font-bold">↵</span> to save</div>
  </div>
  <div>
    <div v-for="(comment, index) in comments" :key="comment.id" class="my-6">
      <div class="text-xs text-gray-600 pb-2 ml-10">
        {{ comment.user.name }} on {{ comment.date }}
      </div>
      <div class="flex flex-row items-center">
        <div class="z-10">
          <img :src="generateUrl(comment.user.avatar)" class="rounded-full w-8 h-8">
        </div>
        <div class="flex-1 bg-blue-100 text-gray-700 rounded ml-2 p-4 flex flex-row justify-between items-center">
          <div v-linkify class="w-11/12">
            {{ comment.body }}
          </div>
          <div v-if="user.id === comment.user_id" @click="deleteComment(comment,index)" class="text-xs text-red-700 bg-red-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
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
import { mapState, mapActions } from 'vuex'
import userSuggestionBox from './userSuggestionBox'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {userSuggestionBox},
  props: {
    resourceType: {
      required: true,
      type: String
    },
    resourceId: {
      required: true,
      type: Number
    },
    show: {
      required: true,
      type: Boolean
    }
  },

  data: () => ({
    body: '',
    comments: [],
    user: user,
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

  watch: {
    show: function (value) {
      if (value) {
        this.getComments()
      }
    }
  },

  computed: {
    ...mapState({
      users: state => state.members,
      groupType: state => state.groupType,
      groupId: state => state.groupId
    })
  },

  created () {
    this.getComments()
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    saveComment (e) {
      if (e.shiftKey) {
        this.body = this.body + '\n'
      } else if (this.mentionStarted) {
        this.suggestionSelected = true
      } else {
        axios.post('/comments', {
          body: this.body,
          commentable_type: this.resourceType,
          commentable_id: this.resourceId,
          group_type: this.groupType,
          group_id: this.groupId,
          mentions: this.mentions
        })
          .then((response) => {
            this.body = ''
            this.comments.push(response.data.comment)
            this.showNotification({type: response.data.status, message: response.data.message})
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      }
    },
    deleteComment (comment, index) {
      axios.delete('/comments/' + comment.id)
        .then((response) => {
          this.comments.splice(index, 1)
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
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
    },
    getComments () {
      if (this.comments.length === 0) {
        axios.get('/comments', {
          params: {
            commentable_type: this.resourceType,
            commentable_id: this.resourceId,
            group_type: this.groupType,
            group_id: this.groupId
          }
        })
          .then((response) => {
            this.comments = response.data.comments
          })
          .catch((error) => {
            console.log(error.response.data.message)
          })
      }
    },
  }
}
</script>
