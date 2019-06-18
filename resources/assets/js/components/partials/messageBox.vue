<template>
<div id="direct-message-box" @focus="clearTitleNotification()" v-if="messageBoxShown" class="">
  <div class="fixed top-0 bg-white text-lg rounded mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mt-16 md:mt-32 shadow-lg z-40 inset-x-0">
    <div class="bg-white text-2xl text-gray-600 text-center px-8 py-4 rounded-t shadow">
      Your Messages
    </div>
    <div class="flex flex-row">
      <div class="bg-blue-200">
        <div class="overflow-auto overflow-y-scroll h-70-vh">
          <div @click="selectUserMessage(user)"
            v-for="user in users"
            v-if="user.id !== authUser.id"
            class="relative p-4"
            :class="{'bg-white': user.id === selectedUser.id}">
            <img class="w-12 h-12 rounded-full cursor-pointer" :title="user.name" :src="generateUrl(user.avatar)">
            <div :class="[user.online ? 'bg-teal-500' : 'bg-gray-500']" :title="[user.online ? 'online' : 'offline']" class="absolute w-4 h-4 rounded-full border-2 border-white mb-4 mr-4 right-0 bottom-0"></div>
          </div>
        </div>
      </div>

      <div id="message-box" class="flex-grow h-70-vh overflow-y-auto">
        <div v-if="selectedUser.id" class="w-full h-full">
          <div v-if="messages.length < 1" class="w-full h-full">
            <loading-modal :localLoadingState="loading"></loading-modal>
            <div v-if="!loading" class="flex flex-col items-center justify-center">
              <div class="text-gray-600 text-lg text-center py-16">
                No message yet!!! Say "Hi" to {{ selectedUser.name }}
              </div>
              <img src="/image/dm.svg" alt="direct message" class="w-96">
            </div>
          </div>
          <message v-for="(message, index) in messages" :key="index" :message="message" :user="authUser" :index="index" @deleted="deleteMessage" :last="messages.length === (index + 1)"></message>
        </div>
        <div v-else class="flex flex-col items-center justify-center">
          <div class="text-gray-600 text-lg text-center py-16">
            Click on the profile pic on left to see interaction with that user
          </div>
          <img src="/image/select.svg" alt="direct message" class="w-64">
        </div>
      </div>
    </div>

    <div class="relative bg-gray-200">
      <div class="static text-center p-4">
        <textarea class="static textarea resize-none rounded w-full p-4 text-gray-800"
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

  <div @click="hideMessageBox" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import message from './message'
import loadingModal from './loadingModal'

export default {
  components: {message, loadingModal},
  data: () => ({
    loading: false,
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
  updated () {
    if (this.messageBoxShown) {
      this.scrollToBottom()
    }
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
          group_type: 'user',
          group_id: this.selectedUser.id
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
      this.loading = true
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
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
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
