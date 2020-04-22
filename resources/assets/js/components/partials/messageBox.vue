<template>
<div id="direct-message-box" @focus="clearTitleNotification()" v-if="currentComponent === 'direct-message-box'">
  <div class="fixed top-0 z-40 inset-x-0 mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mt-16 md:mt-24 px-4">
    <div class="bg-white text-lg rounded shadow-lg">
      <div class="bg-white text-2xl text-gray-600 px-8 py-4 rounded-t shadow flex items-center justify-between">
        <div></div>
        <div>
          Messages
        </div>
        <div @click="hideMessageBox()" class="self-end cursor-pointer">
          <font-awesome-icon :icon="faTimes"
            class="text-sm">
          </font-awesome-icon>
        </div>
      </div>
      <div class="bg-gray-200">
        <div class="flex items-center overflow-x-auto p-2">
          <div @click="selectUserMessage(user, index)"
            v-for="(user, index) in users"
            v-if="user.id !== authUser.id"
            class="w-10 h-10 -mr-2 flex-none relative"
            :style="{zIndex: users.length - index}"
          >
            <img
              :class="[(user.id === selectedUser.id) ? 'border-indigo-500' : 'border-white', user.unread_messages_for_auth_user_count > 0 ? 'jelly border-indigo-500' : '']"
              class="w-10 h-10 rounded-full border-2 text-white cursor-pointer shadow"
              :title="user.name"
              :src="generateUrl(user.avatar)">
            <div :class="[user.online ? 'bg-indigo-500' : 'bg-gray-500']" :title="[user.online ? 'online' : 'offline']" class="absolute w-4 h-4 rounded-full border-2 border-white right-0 bottom-0"></div>
          </div>
        </div>
      </div>

      <div class="flex flex-row flex-grow border-t h-60-vh">
        <div  class="flex-grow overflow-y-auto">
          <div id="message-box"  v-if="selectedUser.id" class="w-full h-full">
            <div v-if="messages.length < 1" class="w-full h-full">
              <div v-if="!loading" class="flex flex-col items-center justify-center">
                <div class="text-gray-600 text-lg text-center py-16">
                  No messages yet! Say "Hi" to {{ selectedUser.name }}...
                </div>
                <img src="/image/dm.svg" alt="direct message" class="w-96">
              </div>
            </div>
            <div v-if="currentPage < lastPage">
              <a class="cursor-pointer flex flex-col items-center justify-center hover:text-indigo-600 hover:bg-white px-4 py-2" @click="loadPrevMessage">Load Previous Messages</a>
            </div>
            <message v-for="(message, index) in messages" :key="message.body + parseInt(index)" :message="message" :user="authUser" :index="parseInt(index)" @deleted="deleteMessage" @edit="editMessage" :last="messages.length === (index + 1)" :direct="true"></message>
          </div>
          <div v-else class="flex flex-col items-center justify-center">
            <div class="text-gray-600 text-lg text-center py-16">
              Click a profile picture to see your interactions with that user.
            </div>
            <img src="/image/select.svg" alt="direct message" class="w-64">
          </div>
        </div>
      </div>

      <div class="relative text-center p-4 border-t">
        <div v-if="isDisabled" class="absolute left-0 top-0 rounded-b w-full h-full bg-gray-800 opacity-25"></div>
        <div class="flex justify-between items-center">
          <textarea
            class="static textarea resize-none rounded w-full px-4 pt-2 text-gray-800 bg-white"
            id="send-direct-message"
            :style="{height: messageTextareaHeight}"
            ref="messageTextarea"
            :placeholder="'write your message here' | localize"
            rows=1
            v-model="message"
            :disabled="isDisabled"
            @keydown.enter.prevent="sendMessage($event)"></textarea>
          <div @click="sendMessage" class="bg-indigo-500 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
            <font-awesome-icon :icon="faPaperPlane"
              class="items-center text-white text-sm mr-1">
            </font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div @click="hideMessageBox()" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-30"></div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import message from './message'
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {message},

  data: () => ({
    authUser: user,
    isDisabled: true,
    message: '',
    messages: [],
    nextPageUrl: null,
    currentPage: 0,
    lastPage: 0,
    messageBoxShown: false,
    messageTextareaHeight: 'auto',
    title: '',
    unreadMessage: 0,
    users: [],
    selectedUser: {},
    editing: {},
    faPaperPlane,
    faTimes
  }),

  created () {
    axios.get('/unread-direct-messages/users')
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
    document.removeEventListener('visibilitychange', this.clearTitleNotification)
  },

  watch: {
    message (newVal) {
      // increase the height of textarea based on text present there
      this.messageTextareaHeight = newVal ? `${this.$refs.messageTextarea.scrollHeight}px` : 'auto'
    }
  },

  computed: {
    ...mapState({
      currentComponent: state => state.dropdown.currentComponent
    })
  },

  methods: {
    ...mapActions([
      'closeComponent',
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
    hideMessageBox () {
      this.closeComponent()
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
        if(this.editing.hasOwnProperty('messageIndex')) {
          this.sendEditedMessage(msg)
        } else {
          this.sendNewMessage(msg)
        }
      }
    },
    sendEditedMessage (msg) {
      axios.put('/direct-messages/' + this.editing.message.id, {
        body: msg,
        receiver_id: this.selectedUser.id
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
    sendNewMessage (msg) {
      axios.post('/direct-messages', {
        body: msg,
        receiver_id: this.selectedUser.id
      })
        .then((response) => {
          if (response.data.status === 'success') {
            response.data.message.user = user
            this.messages.push(response.data.message)
          }
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    selectUserMessage (user, index) {
      this.toggleLoading(true)
      this.selectedUser = user
      this.isDisabled = false
      axios.get('/direct-messages', {
        params: {
          receiver_id: user.id
        }
      })
        .then((response) => {
          this.messages = response.data.messages.data.reverse()
          this.nextPageUrl = response.data.messages.next_page_url
          this.currentPage = response.data.messages.current_page
          this.lastPage = response.data.messages.last_page
          this.scrollToBottom()
          this.toggleLoading(false)
        })
        .catch((error) => {
          this.toggleLoading(false)
          console.log(error)
        })
      axios.put('/unread-direct-messages/' + user.id)
        .then((response) => {
          this.users[index].unread_messages_for_auth_user_count = 0
          this.toggleLoading(false)
        })
        .catch((error) => {
          this.toggleLoading(false)
          console.log(error)
        })
    },
    paginationMessage (user) {
      this.toggleLoading(true)
      this.isDisabled = false
      axios.get(this.nextPageUrl, {
        params: {
          receiver_id: user.id
        }
      })
        .then((response) => {
          this.concatAllMessages(response)
          this.nextPageUrl = response.data.messages.next_page_url
          this.currentPage = response.data.messages.current_page
          this.toggleLoading(false)
        })
        .catch((error) => {
          this.toggleLoading(false)
          console.log(error)
        })
    },
    loadPrevMessage (){
      this.paginationMessage(this.selectedUser)
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
    deleteMessage (index) {
      this.messages.splice(index, 1)
    },
    editMessage (index) {
      document.getElementById('send-direct-message').focus()
      this.editing = {
        message: this.messages[index],
        messageIndex: index,
      }
      this.message =  this.messages[index].body
    },
    listen () {
      Echo.join('global')
        .here(users => {
          this.users = this.users.map(user => {
            user.online = users.includes(user.id)
            return user
          })
        })
        .joining((userId) => {
          this.users = this.users.map(user => {
            if (userId === user.id) {
              user.online = true
            }
            return user
          })          
        })
        .leaving((userId) => {
          this.users = this.users.map(user => {
            if (userId === user.id) {
              user.online = false
            }
            return user
          })          
        })
      Echo.private('User.' + this.authUser.id)
        .listen('DirectMessageCreated', event => {
          event.message.user = event.user
          if (!this.messageBoxShown) {
            EventBus.$emit('new-direct-message')
            this.users = this.users.map(user => {
              if (user.id === event.user.id) {
                user.unread_messages_for_auth_user_count += 1
              }
              return user
            })
          } else if (this.selectedUser.id === event.user.id) {
            axios.put('/unread-direct-messages/' + event.user.id)
              .catch((error) => {
                console.log(error)
              })
          } else if (this.selectedUser.id !== event.user.id) {
            this.users = this.users.map(user => {
              if (user.id === event.user.id) {
                user.unread_messages_for_auth_user_count += 1
              }
              return user
            })
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

<style>
.jelly {
  animation: jelly 2s infinite;
}

@keyframes jelly {
  0%,
  20% {
    transform: scale(0.9, 1.1);
  }
  40% {
    transform: scale(1.1, 0.9);
  }
  60% {
    transform: scale(0.95, 1.05);
  }
  80% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
