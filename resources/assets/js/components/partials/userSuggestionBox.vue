<template>
<div v-if="suggestionShown && sortedUsers.length > 0" class="border-2 rounded bg-white shadow-xl py-2">
  <ul class="list-reset text-left">
    <li @click="selectUser(user[1].target)" v-for="user in sortedUsers" class="py-2 px-4 cursor-pointer hover:bg-grey-lighter">
      <span class="font-semibold text-grey-darker mr-2">{{ user[0].target }}</span>
      <span class="text-grey-dark">{{ user[1].target }}</span>
    </li>
  </ul>
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
    }
  },
  data: () => ({
    sortedUsers: []
  }),
  watch: {
    name: 'search'
  },
  methods: {
    search () {
      this.sortedUsers = fuzzysort.go(this.name, this.users, {
        keys: ['name', 'username']
      })
    },
    selectUser (text) {
      this.$emit('selected', text)
    }
  }
}
</script>
