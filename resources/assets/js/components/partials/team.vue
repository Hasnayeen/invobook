<template>
  <div class="relative bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4">
    <span @click="toggleMenu" class="w-full h-8 pr-4 pt-2" v-click-outside="hideMenu">
      <font-awesome-icon :icon="faEllipsisH"
        class="float-right text-gray-800 cursor-pointer">
      </font-awesome-icon>
    </span>
    <div v-if="dropdownMenuShown" class="absolute rounded shadow-lg right-0 top-0 mt-8 mr-2 p-3 text-gray-800 hover:bg-gray-400">
      <div @click="deleteTeam()" class="cursor-pointer">
        Delete
      </div>
    </div>
    <div class="w-full p-2 h-24 flex flex-col justify-end">
      <a class="text-pink-500 text-xl no-underline" :href="'/teams/' + team.id">{{ team.name }}</a>
    </div>
    <span class="text-gray-500 text-sm w-full px-2 h-16 self-start">{{ team.description }}</span>
    <div class="border-t w-full h-16 flex flex-row justify-start items-center px-2">
      <a v-if="index < 5" v-for="(member, index) in team.members" :href="'/users/' + member.username" class="pl-2">
        <profile-card :user="member"></profile-card>
      </a>
      <span v-if="team.members.length > 5" class="bg-gray-200 border-teal-500 border p-2 rounded-full">{{ team.members.length - 5 }}+</span>
      <span v-if="team.members.length < 1" class="text-gray-600 text-center">No members yet</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import profileCard from './../partials/profileCard.vue'

export default {
  components: {profileCard},
  props: ['details', 'index'],
  data () {
    return {
      team: this.details,
      dropdownMenuShown: false,
      faEllipsisH
    }
  },
  methods: {
    ...mapActions([
      'removeTeam'
    ]),
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMenu () {
      this.dropdownMenuShown = false
    },
    deleteTeam () {
      this.removeTeam({
        id: this.team.id,
        index: this.index
      })
    }
  }
}
</script>
