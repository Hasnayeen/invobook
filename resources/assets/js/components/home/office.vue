<template>
<div class="relative bg-white shadow-lg w-full sm:w-64 md:w-80 h-48 sm:mx-4 md:mx-12 lg:mx-4 flex flex-col justify-center items-center rounded-lg m-3 xl:mx-10 md:my-8">
  <div class="w-full p-4 h-32 flex flex-col items-start">
    <div @click="showOffice(office.id)" class="text-pink-500 text-2xl no-underline cursor-pointer">{{ office.name }}</div>
    <span class="text-gray-500 text-sm self-start">{{ office.description }}</span>
  </div>
  <div class="border-t w-full h-16 flex flex-row justify-start items-center px-4">
    <div class="flex flex-row flex-row-reverse">
      <a v-if="index < 6" v-for="(member, index) in office.members" :href="'/users/' + member.username" class="-ml-2">
        <profile-card :user="member" :homePage="homePage"></profile-card></profile-card>
      </a>
    </div>
    <span v-if="office.members.length > 6" class="w-10 h-10 bg-indigo-100 text-indigo-700 border-white border font-semibold p-2 -ml-2 rounded-full">{{ office.members.length - 6 }}+</span>
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
      office: this.details,
      dropdownMenuShown: false,
      homePage: true,
      user,
      faEllipsisH
    }
  },
  methods: {
    ...mapActions([
      'getOffice',
      'setGroup',
      'updateBreadcrumb',
      'removeOffice'
    ]),
    showOffice (id) {
      this.updateUrl({'group_type': 'office', 'group_id': id})
      this.updateBreadcrumb('offices')
      this.getOffice(id)
      this.setGroup({type: 'office', id: id})
    },
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMenu () {
      this.dropdownMenuShown = false
    },
    deleteOffice () {
      this.removeOffice({
        id: this.office.id,
        index: this.index
      })
    }
  }
}
</script>
