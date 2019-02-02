<template>
<div class="relative bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4">
  <span @click="toggleMenu" class="w-full h-8 pr-4 pt-2" v-click-outside="hideMenu">
    <font-awesome-icon :icon="faEllipsisH"
      class="float-right text-grey-darker cursor-pointer">
    </font-awesome-icon>
  </span>
  <div v-if="dropdownMenuShown" class="absolute rounded shadow-lg pin-r pin-t mt-8 mr-2 p-3 text-grey-darker hover:bg-grey-light">
    <div @click="deleteProject()" class="cursor-pointer">
      Delete
    </div>
  </div>
  <div class="w-full p-2 h-24 flex flex-col justify-end">
    <a class="text-pink text-xl no-underline" :href="'/projects/' + project.id">{{ project.name }}</a>
  </div>
  <span class="text-grey text-sm w-full px-2 h-16 self-start">{{ project.description }}</span>
  <div class="border-t w-full h-16 flex flex-row justify-start items-center px-4">
    <a v-if="index < 5" v-for="(member, index) in project.members" :href="'/users/' + member.username" class="pl-2">
      <profile-card :user="member"></profile-card></profile-card>
    </a>
    <span v-if="project.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ project.members.length - 5 }}+</span>
    <span v-if="project.members.length == 0" class="text-grey-dark text-center">No members yet</span>
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
      project: this.details,
      dropdownMenuShown: false,
      faEllipsisH
    }
  },
  methods: {
    ...mapActions([
      'removeProject'
    ]),
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMenu () {
      this.dropdownMenuShown = false
    },
    deleteProject () {
      this.removeProject({
        id: this.project.id,
        index: this.index
      })
    }
  }
}
</script>

