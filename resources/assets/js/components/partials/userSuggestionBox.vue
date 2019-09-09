<template>
<div v-if="suggestionShown && sortedUsers.length > 0" class="autocomplete container w-full shadow-md" :class="suggestionHighlightDirectionInverted ? 'rounded-t-lg' : 'rounded-b-lg'">
  <div class="autocomplete-results">
    <div @click="selectUser(user.username)"
      v-for="(user, index) in sortedUsers"
      :key="index"
      class="autocomplete-result flex items-center bg-white p-1 cursor-pointer hover:bg-gray-400"
      :class="{ 'text-white bg-teal-500 hover:bg-teal-600': index === highlightIndex, 'rounded-t-lg': index === 0 && suggestionHighlightDirectionInverted, 'rounded-b-lg': index === sortedUsers.length-1 && !suggestionHighlightDirectionInverted }">
      <div class="mx-2">
        <img :src="'/'+getUserAvatar(user.username)" class="rounded-full align-middle w-8 h-8">
      </div>
      <div class="mr-2">
       <span class="font-semibold">@{{ user.username }}</span>
       <span> ({{ user.name}})</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import fuzzysort from 'fuzzysort'
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    users: {
      required: true,
      type: Array
    },
    suggestionShown: {
      required: true,
      type: Boolean
    },
    suggestionSelected: {
      required: true,
      type: Boolean
    },
    suggestionHighlightIndex: {
      required: true,
      type: Number
    },
    suggestionHighlightDirection: {
      required: true,
      type: Number
    },
    suggestionHighlightDirectionInverted: {
      type: Boolean
    }
  },
  data: () => ({
    sortedUsers: [],
    highlightIndex: 0
  }),
  watch: {
    name: 'search',
    suggestionSelected: 'selectUserEnter',
    suggestionHighlightIndex: 'suggestionHighlightMove'
  },
  methods: {
    search () {
      let nameSortedUsers = fuzzysort.go(this.name, this.users, {
        key: 'name',
        limit: 5,
      }).map(x => x.obj)
      let usernameSortedUsers = fuzzysort.go(this.name, this.users, {
        key: 'username',
        limit: 5,
      }).map(x => x.obj)
      this.sortedUsers = [...new Set([...nameSortedUsers, ...usernameSortedUsers])]
      this.highlightIndex = 0
      if (this.suggestionHighlightDirectionInverted) {
        this.sortedUsers.reverse()
        this.highlightIndex = this.sortedUsers.length-1
      }
    },
    selectUser (text) {
      this.$emit('selected', text)
    },
    selectUserEnter () {
      if (this.suggestionSelected) {
        this.selectUser(this.sortedUsers[this.highlightIndex][1].target)
      }
    },
    getUserAvatar (username) {
      return this.users.find(function(user) {
        if (user.username === username) {
          return user.avatar
        }
      }).avatar
    },
    suggestionHighlightMove () {
      if (this.suggestionHighlightDirection === -1 && this.highlightIndex > 0) {
        this.highlightIndex -= 1
      } else if (this.suggestionHighlightDirection === 1 && this.highlightIndex < (this.sortedUsers.length-1)) {
        this.highlightIndex += 1
      }
    }
  }
}
</script>
