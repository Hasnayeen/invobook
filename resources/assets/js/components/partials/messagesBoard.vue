<template>
<div id="message-container" v-if="activeTab === 'messages'" class="w-full">
  <div class="flex flex-col bg-white mx-auto my-8 shadow rounded-lg">

    <div class="text-gray-600 bg-white shadow p-4 text-xl flex flex-row items-center z-10 rounded-t-lg">
      <div class="pr-2">
        {{ 'Currently in room' | localize }}:
      </div>
      <template v-for="user in users">
        <img :src="generateUrl(user.avatar)" alt="" class="w-8 h-8 rounded-full mr-2" :title="user.name" :key="user.id">
      </template>
    </div>

    <div class="h-50-vh overflow-auto">
      <div id="message-box" class="">
        <div v-if="currentPage < lastPage">
            <a class="cursor-pointer flex flex-col items-center justify-center hover:text-indigo-600 hover:bg-white px-4 py-2" @click="paginationMessage">Load Previous Messages</a>
        </div>
        <message v-for="(message, index) in messages" :key="message.body + parseInt(index)" :message="message" :user="user" :index="parseInt(index)" @deleted="deleteMessage" @edit="editMessage" :last="messages.length === (index + 1)"></message>
        <div class="flex flex-row justify-center h-8">
          <div class="text-gray-800 text-xs text-center px-4 rounded p-2">
            {{ notificationMessage }}
          </div>
        </div>
      </div>
      <div v-if="messages.length === 0" class="flex flex-col justify-center items-center">
        <div class="text-gray-600 text-lg text-center py-8">
          Talk to your team members about {{ resource.name }}.
        </div>
        <img src="/image/work_chat.svg" alt="direct message" class="w-96">
      </div>
    </div>

    <div v-if="authenticated" class="w-full message-box-max lg:max-w-4xl xl:max-w-6xl p-4 border-t-2 rounded-b-lg">
      <div class="static text-center">
        <div class="relative">
          <user-suggestion-box
            :users="members"
            :name="name"
            :suggestionShown="suggestionShown"
            :suggestionSelected="suggestionSelected"
            :suggestionHighlightIndex="suggestionHighlightIndex"
            :suggestionHighlightDirection="suggestionHighlightDirection"
            :suggestionHighlightDirectionInverted="true"
            @selected="userSelected"
            class="absolute mb-2 w-full bottom-0"></user-suggestion-box>
        </div>
        <div class="flex justify-between">
          <textarea class="static textarea resize-none rounded w-full px-4 pt-2 text-gray-800"
            id="send-message"
            :style="{height: messageTextareaHeight}"
            ref="messageTextarea"
            :placeholder="'write your message here' | localize"
            rows=1
            v-model="message"
            @keyup="checkForMention($event)"
            @keydown="mentionHighlightMove($event)"
            @keydown.enter.prevent="sendMessage($event)"
            @focus="clearTitleNotification()"></textarea>
          <div @click="sendMessage" class="bg-indigo-500 flex-shrink-0 rounded-full w-8 h-8 sm:w-12 sm:h-12 px-3 flex justify-center items-center cursor-pointer">
            <font-awesome-icon :icon="faPaperPlane"
              class="items-center text-white mr-1 text-xs sm:text-base">
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
import message from './message'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {message, userSuggestionBox},
  props: ['resource', 'resourceType', 'activeTab'],

  data: () => ({
    messages: [],
    notificationMessage: '',
    loading: false,
    nextPageUrl: null,
    currentPage: 0,
    lastPage: 0,
    message: '',
    messageTextareaHeight: 'auto',
    title: '',
    unreadMessage: 0,
    name: '',
    mentionStarted: false,
    startIndex: 0,
    suggestionHighlightDirection: 1,
    suggestionHighlightIndex: 0,
    suggestionSelected: false,
    suggestionShown: false,
    mentions: [],
    typingNotificationSent: false,
    users: [],
    user,
    authenticated,
    editing: {},
    faPaperPlane
  }),

  created () {
    EventBus.$on('clear-title-notification', this.clearTitleNotification)
  },

  beforeDestroy () {
    EventBus.$off('clear-title-notification', this.clearTitleNotification)
  },

  mounted () {
    this.getMessages()
    this.title = document.title
    this.listen()
    let messageBoxElement = document.getElementById('message-box')
    if (messageBoxElement) {
      messageBoxElement.scrollIntoView({behavior: 'smooth', block: 'end'})
    }
  },

  updated () {
    let messageBoxElement = document.getElementById('message-box')
    if (messageBoxElement) {
      messageBoxElement.scrollIntoView({behavior: 'smooth', block: 'end'})
    }
  },

 computed: {
    ...mapState({
      members: state => state.members
    })
  },

  watch: {
    message (newVal) {
      // increase the height of textarea based on text present there
      this.messageTextareaHeight = newVal ? `${this.$refs.messageTextarea.scrollHeight}px` : 'auto'
    },
    activeTab() {
      this.getMessages()
    }
  },

  methods: {
    ...mapActions([
      'showNotification',
      'toggleLoading'
    ]),
    scrollToBottom () {
      this.$nextTick(() => {
        if (document.getElementById("message-box")) {
          var messagesContainer = this.$el.querySelector('#message-box')
          messagesContainer = messagesContainer.lastElementChild
          messagesContainer.scrollIntoView()
        }
      })
    },
    scrollToNthChild (nthChild) {
      this.$nextTick(() => {
        if (document.getElementById("message-box")) {
          var messagesContainer = this.$el.querySelector('#message-box')
          messagesContainer = messagesContainer.children[nthChild]
          messagesContainer.scrollIntoView();
        }
      })
    },
    getMessages () {
      if (this.activeTab === 'messages' && this.messages.length < 1) {
        axios.get('/messages', {
          params: {
            group_type: this.resourceType,
            group_id: this.resource.id
          }
        })
        .then((response) => {
          this.messages = response.data.messages.data.reverse()
          this.nextPageUrl = response.data.messages.next_page_url
          this.currentPage = response.data.messages.current_page
          this.lastPage = response.data.messages.last_page
          this.scrollToBottom()
        })
        .catch((error) => {
          console.log(error)
        })
      }
    },
    sendMessage (e) {
      if (e.shiftKey) {
        this.message = this.message + '\n'
      } else if (this.mentionStarted) {
        this.suggestionSelected = true
      } else if (this.message.length > 0) {
        var msg = this.message
        this.message = ''
        if(this.editing.hasOwnProperty('messageIndex')) {
          this.sendEditedMessage(msg)
        } else {
          this.sendNewMessage(msg)
        }
      }
    },
    sendEditedMessage(message) {
        axios.put('/messages/' + this.editing.message.id, {
          message: message,
        })
        .then((response) => {
            if (response.data.status === 'success') {
              response.data.message.user = user
              this.messages.splice(this.editing.messageIndex, 1, response.data.message)
              this.editing = {}
            }
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    sendNewMessage(message) {
        axios.post('/messages', {
          message: message,
          group_type: this.resourceType,
          group_id: this.resource.id,
          mentions: this.mentions
        })
          .then((response) => {
            if (response.data.status === 'success') {
              response.data.message.user = user
              this.pushMessage(response.data.message)
            }
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    paginationMessage () {
      this.toggleLoading(true)
      if (this.activeTab === 'messages' && this.messages.length > 1) {
        axios.get(this.nextPageUrl).then((response) => {
          this.concatAllMessages(response)
          this.nextPageUrl = response.data.messages.next_page_url
          this.currentPage = response.data.messages.current_page
          this.toggleLoading(false)
        })
        .catch((error) => {
          this.toggleLoading(false)
          console.log(error)
        })
      }
    },
    concatAllMessages (response){
      let currentMessageArray = JSON.parse(JSON.stringify(response.data.messages.data.reverse()))
      let previousMessagesArray = JSON.parse(JSON.stringify(this.messages))
      
      let i = 0
      const result = [];
      currentMessageArray.forEach(arrayObject => result[i++] = arrayObject)
      previousMessagesArray.forEach(arrayObject => result[i++] = arrayObject)
      
      this.messages = result
      i = 0
  
      let length = Object.keys(response.data.messages.data).length
      this.scrollToNthChild(length)
    },
    listen () {
      Echo.join(this.resourceType + '.' + this.resource.id)
        .here(users => {
          this.users = users
        })
        .joining(user => {
          this.users.push(user)
          this.pushSystemMessage(`${user.name} has joined`)
          if ((document.activeElement !== document.getElementById('send-message')) || (!document.hasFocus())) {
            this.unreadMessage += 1
            document.title = '(' + this.unreadMessage + ') ' + this.title
          }
        })
        .leaving(user => {
          this.users = this.users.filter(u => u.username !== user.username)
          this.pushSystemMessage(`${user.name} has left`)
          if ((document.activeElement !== document.getElementById('send-message')) || (!document.hasFocus())) {
            this.unreadMessage += 1
            document.title = '(' + this.unreadMessage + ') ' + this.title
          }
        })
        .listen('MessageCreated', event => {
          event.message.user = event.user
          this.pushMessage(event.message)
          if ((document.activeElement !== document.getElementById('send-message')) || (!document.hasFocus())) {
            this.unreadMessage += 1
            document.title = '(' + this.unreadMessage + ') ' + this.title
          }
        })
        .listenForWhisper('typing', (e) => {
          this.pushSystemMessage(`${e.name} is typing`)
        })
    },
    typing () {
      if (! this.typingNotificationSent) {
        Echo.join(this.resourceType + '.' + this.resource.id)
          .whisper('typing', {
            name: this.user.name
          })
        this.typingNotificationSent = true
        setTimeout(this.setTypingNotification, 4000)
      }
    },
    setTypingNotification () {
      this.typingNotificationSent = false
    },
    clearTitleNotification () {
      document.title = this.title
      this.unreadMessage = 0
    },
    editMessage (index) {
      document.getElementById('send-message').focus()
      this.editing = {
        message: this.messages[index],
        messageIndex: index,
      }
      this.message =  this.messages[index].body
    },
    deleteMessage (index) {
      this.messages.splice(index, 1)
    },
    pushMessage (message) {
      this.messages.push(message)
      EventBus.$emit('messagePushed')
    },
    pushSystemMessage (body) {
      this.notificationMessage = body
      setTimeout(() => {
        this.notificationMessage = ''
      }, 3000);
    },
    checkForMention (e) {
      if (this.message.length > 2) {
        this.typing()
      }
      if (e.key === "@") {
        this.suggestionShown = true
        this.mentionStarted = true
        this.startIndex = document.getElementById('send-message').selectionStart
      } else if (e.keyCode === 32 || e.keyCode === 27 || (e.keyCode === 8 && document.getElementById('send-message').selectionStart < this.startIndex)) {
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
      this.message = this.message.substring(0, this.startIndex) + text
      if (this.mentions.every(mention => mention !== text)) {
        this.mentions.push(text)
      }
      this.mentionStarted = false
      this.suggestionShown = false
      this.suggestionSelected = false
      this.suggestionHighlightIndex = 0
      this.name = ''
      document.getElementById('send-message').focus()
    }
  }
}
</script>
