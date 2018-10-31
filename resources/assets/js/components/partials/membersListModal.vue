<template>
<div :class="{'hidden': !showMembersList}">
  <div @click="closeModal" class="absolute pin opacity-75 bg-grey z-10"></div>
  <div class="fixed md:w-1/3 md:mx-auto pin z-50 overflow-auto bg-grey-lighter flex" id="members-list-modal">
    <div class="relative p-8 w-full max-w-md m-auto flex-col flex">

      <h2 class="mb-5">Members List</h2>

      <ul v-for="member in members" :key="`member-${member.id}`" class="list-reset">
        <li class="mb-3">
          <a :href="'/users/' + member.username"  class="no-underline text-grey-dark">
            <img :src="generateUrl(member.avatar)" class="rounded-full w-12 h-12 mr-1 align-middle">
            <span>{{ member.name }}</span>
          </a>
        </li>
      </ul>

      <div class="flex flex-row-reverse pt-8 bg-grey-lighter rounded">
        <button @click="closeModal" class="text-red-light hover:font-bold">Close</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      showMembersList: false
    }
  },

  mounted () {
    EventBus.$on('show-members-list-modal', this.openModal)
  },

  methods: {
    openModal () {
      this.showMembersList = true
    },

    closeModal () {
      this.showMembersList = false
    }
  }
}
</script>

<style>
#members-list-modal {
  top: 25%;
  bottom: 25%;
  max-height: 300px;
}
</style>
