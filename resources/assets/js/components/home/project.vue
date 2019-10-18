<template>
<div class="relative bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4">
  <button v-if="user.role.slug === 'owner' || user.role.slug === 'admin'" @click="toggleMenu" class="w-full h-8 pr-4 pt-2" v-click-outside="hideMenu">
    <font-awesome-icon :icon="faEllipsisH"
      class="float-right text-gray-600 cursor-pointer">
    </font-awesome-icon>
  </button>
  <span v-else class="h-8"></span>
  <div v-if="dropdownMenuShown" class="absolute rounded shadow-lg right-0 top-0 mt-8 mr-2 p-3 text-gray-800 hover:bg-gray-400">
    <div @click="deleteProject()" class="cursor-pointer">
      Delete
    </div>
  </div>
  <div class="w-full p-2 h-20 flex flex-col justify-end">
    <div @click="showProject(project.id)" class="text-pink-500 text-xl no-underline cursor-pointer">{{ project.name }}</div>
  </div>
  <span class="text-gray-500 text-sm w-full px-2 h-20 self-start">{{ project.description }}</span>
  <div class="border-t w-full h-16 flex flex-row justify-start items-center px-4">
    <div class="flex flex-row flex-row-reverse">
      <a v-if="index < 6" v-for="(member, index) in project.members" :href="'/users/' + member.username" :key="member.id" class="-ml-2">
        <profile-card :user="member" :homePage="homePage"></profile-card></profile-card>
      </a>
    </div>
    <span v-if="project.members.length > 6" class="w-10 h-10 bg-teal-100 text-teal-700 border-white border font-semibold p-2 -ml-2 rounded-full">{{ project.members.length - 6 }}+</span>
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
      homePage: true,
      user,
      faEllipsisH
    }
  },

  methods: {
    ...mapActions([
      'getProject',
      'setGroup',
      'setCurrentView',
      'removeProject'
    ]),
    showProject (id) {
      this.getProject(id)
      this.setGroup({type: 'project', id: id})
    },
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
