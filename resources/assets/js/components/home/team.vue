<template>
<div class="relative bg-white shadow-lg w-full sm:w-64 md:w-80 h-48 sm:mx-4 md:mx-12 lg:mx-4 flex flex-col justify-center items-center rounded-lg m-3 xl:mx-10 md:my-8">
  <div class="w-full p-4 h-32 flex flex-col items-start">
    <div @click="showTeam(team.id)" class="text-pink-500 text-2xl no-underline cursor-pointer">{{ team.name }}</div>
    <span class="text-gray-500 text-sm self-start">{{ team.description }}</span>
  </div>
  <div class="border-t w-full h-16 flex flex-row justify-start items-center px-4">
    <div class="flex flex-row flex-row-reverse">
      <a v-if="index < 6" v-for="(member, index) in team.members" :href="'/users/' + member.username" class="-ml-2">
        <profile-card :user="member" :homePage="homePage"></profile-card></profile-card>
      </a>
    </div>
    <span v-if="team.members.length > 6" class="w-10 h-10 bg-indigo-100 text-indigo-700 border-white border font-semibold p-2 -ml-2 rounded-full">{{ team.members.length - 6 }}+</span>
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
      homePage: true,
      user,
      faEllipsisH
    }
  },
  methods: {
    ...mapActions([
      'getTeam',
      'setGroup',
      'updateBreadcrumb',
      'removeTeam'
    ]),
    showTeam (id) {
      this.updateUrl({'group_type': 'team', 'group_id': id})
      this.updateBreadcrumb('teams')
      this.getTeam(id)
      this.setGroup({type: 'team', id: id})
    },
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
