<template>
<div id="direct-message-box" @focus="clearTitleNotification()" v-if="messageBoxShown" class="">
  <div class="fixed pin-t bg-white text-lg rounded mx-auto md:w-1/2 mt-16 pt-6 shadow-lg z-50 pin-x">
    <div class="bg-white text-2xl text-grey-dark text-center px-8 pb-2">
      Your Messages
    </div>
    <div class="py-2 bg-grey-lighter">
      <div class="text-sm text-center text-grey-dark">Send direct meesage</div>
      <div class="flex flex-row justify-center px-4 py-2">
        <div @click="selectUserMessage(user)" v-for="user in users" v-if="user.id !== authUser.id" class="relative">
          <img class="w-10 h-10 rounded-full md:mr-2 cursor-pointer" :title="user.name" :src="generateUrl(user.avatar)">
          <div :class="[user.online ? 'bg-teal' : 'bg-grey']" :title="[user.online ? 'online' : 'offline']" class="absolute w-4 h-4 rounded-full border-2 border-white mr-1 pin-r pin-b"></div>
        </div>
      </div>
    </div>

    <div id="message-box" class="h-50-vh overflow-y-auto">
      <div v-if="selectedUser.id">
        <div v-if="messages.length < 1" class="text-grey-dark text-sm text-center" style="margin-top: 20vh;">
          You've no message interaction with this user yet. Say "Hi" to {{ selectedUser.name }}
        </div>
        <message v-for="(message, index) in messages" :key="index" :message="message" :user="authUser" :index="index" @deleted="deleteMessage"></message>
      </div>
      <div v-else class="text-grey-dark text-sm text-center" style="margin-top: 20vh;">
        Click on the profile pic above to see interaction with that user
      </div>
    </div>

    <div class="relative bg-grey-light">
      <div class="static text-center p-4">
        <textarea class="static textarea resize-none rounded w-full p-4 text-grey-darker"
          id="send-message"
          :style="{height: messageTextareaHeight}"
          ref="messageTextarea"
          :placeholder="'write your message here' | localize"
          rows=1
          v-model="message"
          :disabled="isDisabled"
          @keydown.enter.prevent="sendMessage($event)"></textarea>
      </div>
    </div>
  </div>

  <div @click="hideMessageBox" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25 z-10"></div>
</div>
</template>

<script>
import message from './message'

export default {
  components: {message},
  data: () => ({
    authUser: user,
    isDisabled: true,
    message: '',
    messages: [],
    nextPageUrl: null,
    messageBoxShown: false,
    messageTextareaHeight: 'auto',
    title: '',
    unreadMessage: 0,
    users: [],
    selectedUser: {}
  }),
  created () {
    EventBus.$on('show-message-box', this.showMessageBox)
    axios.get('/users')
      .then((response) => {
        this.users = response.data.users
      })
      .catch((error) => {
        console.log(error)
      })
    this.title = document.title
    this.listen()
    document.addEventListener('visibilitychange', this.clearTitleNotification)
  },
  beforeDestroy () {
    EventBus.$off('show-message-box', this.showMessageBox)
    document.removeEventListener('visibilitychange', this.clearTitleNotification)
  },
  watch: {
    message (newVal) {
      // increase the height of textarea based on text present there
      this.messageTextareaHeight = newVal ? `${this.$refs.messageTextarea.scrollHeight}px` : 'auto'
    }
  },
  methods: {
    scrollToBottom () {
      this.$nextTick(() => {
        var messagesContainer = this.$el.querySelector('#message-box')
        messagesContainer.scrollTop = messagesContainer.lastElementChild.scrollHeight
      })
    },
    showMessageBox () {
      this.messageBoxShown = true
    },
    hideMessageBox () {
      this.messageBoxShown = false
    },
    sendMessage (e) {
      if (!this.selectedUser.id) {
        return false
      }
      if (e.shiftKey) {
        this.message = this.message + '\n'
      } else if (this.message.length > 0) {
        var msg = this.message
        this.message = ''
        axios.post('/messages', {
          message: msg,
          resource_type: 'user',
          resource_id: this.selectedUser.id
        })
          .then((response) => {
            if (response.data.status === 'success') {
              response.data.message.user = user
              this.messages.push(response.data.message)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    selectUserMessage (user) {
      this.selectedUser = user
      this.isDisabled = false
      axios.get('/direct-messages', {
        params: {
          resource_type: 'user',
          resource_id: user.id
        }
      })
        .then((response) => {
          this.messages = response.data.messages.data.reverse()
          this.nextPageUrl = response.data.messages.next_page_url
          this.scrollToBottom()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteMessage (index) {
      this.messages.splice(index, 1)
    },
    listen () {
      Echo.join('global')
        .here(users => {
          this.users = this.users.map(user => {
            user.online = users.includes(user.id)
            return user
          })
        })
      Echo.join('user.' + this.authUser.id)
        .listen('MessageCreated', event => {
          event.message.user = event.user
          if (!this.messageBoxShown) {
            EventBus.$emit('new-direct-message')
          }
          if (document.hidden) {
            this.unreadMessage += 1
            document.title = '(' + this.unreadMessage + ') ' + this.title
          }
          this.messages.push(event.message)
          this.scrollToBottom()
        })
    },
    clearTitleNotification () {
      if (!document.hidden) {
        document.title = this.title
        this.unreadMessage = 0
      }
    }
  }
}
</script>
