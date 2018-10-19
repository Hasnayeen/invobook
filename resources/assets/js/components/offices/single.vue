<template>
  <div class="container mx-auto px-4 my-6 w-full md:w-md lg:w-lg xl:w-xl xxl:w-2xl">
    <notification-popup :messageType="messageType" :message="message" @close="closeNotification" :show-notification="showNotification"></notification-popup>
    <div class="text-center text-grey-dark font-semibold text-xl mb-4">
      {{office.name}}
      <p class="text-base pt-2">December 5, 2017 - December 13, 2017</p>
    </div>

    <!-- Add Member Form -->
    <addMemberForm v-if="addMemberFormShown" @close="closeAddMemberForm" resourceType="office" :resource="office" @addMember="addMember"></addMemberForm>

    <div class="h-16 flex flex-row justify-center items-center px-2">
      <span @click="showAddMemberForm" class="bg-white shadow w-8 h-8 rounded-full text-teal hover:cursor-pointer text-center p-2">
        <font-awesome-icon :icon="faPlus"></font-awesome-icon>
      </span>
      <a v-for="(member, index) in office.members" v-if="index < 5" :href="'/users/' + member.username" class="pl-2">
        <img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8 mr-1">
      </a>
      <span v-if="office.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ office.members.length - 5 }}+</span>
    </div>

    <tab-menu :active="active" @activate="activateTab"></tab-menu>

    <div class="flex flex-row flex-wrap justify-center">
      <taskBoard resourceType="office" :resource="office"  :activeTab="active"></taskBoard>
      <discussionBoard resourceType="office" :resource="office" :activeTab="active"></discussionBoard>
      <messagesBoard resourceType="office" :resource="office" :activeTab="active"></messagesBoard>
      <!-- <taskBoard resourceType="projects" :resource="project"></taskBoard>
      <messagesBoard resourceType="projects" :resource="project"></messagesBoard>
      <schedule resourceType="projects" :resource="project"></schedule>
      <files resourceType="projects" :resource="project"></files>
      <activity resourceType="projects" :resource="project"></activity> -->
    </div>
  </div>
</template>

<script>
import taskBoard from './../partials/taskBoard.vue'
import discussionBoard from './../partials/discussionBoard.vue'
import messagesBoard from './../partials/messagesBoard.vue'
import schedule from './../partials/schedule.vue'
import files from './../partials/files.vue'
import activity from './../partials/activity.vue'
import addMemberForm from './../partials/addMemberForm.vue'
import notificationPopup from '../partials/notificationPopup.vue'
import tabMenu from './../partials/tabMenu.vue'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    taskBoard, discussionBoard, messagesBoard, schedule, files, activity, addMemberForm, notificationPopup, tabMenu
  },
  props: ['office'],
  data: () => ({
    addMemberFormShown: false,
    active: 'tasks',
    showNotification: false,
    message: '',
    messageType: '',
    faPlus
  }),
  methods: {
    showAddMemberForm () {
      this.addMemberFormShown = true
    },
    closeAddMemberForm () {
      this.addMemberFormShown = false
    },
    addMember (data) {
      if (data.user) {
        this.message = data.message
        this.messageType = 'success'
        this.office.members.push(data.user)
      } else {
        this.messageType = 'error'
        this.message = data.message
      }
      this.showNotification = true
      this.addMemberFormShown = false
      setTimeout(() => {
        this.showNotification = false
      }, 3000)
    },
    activateTab (tab) {
      if (tab !== this.active) {
        this.active = tab
      }
    },
    closeNotification () {
      this.showNotification = false
    }
  }
}
</script>
