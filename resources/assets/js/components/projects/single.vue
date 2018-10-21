<template>
  <div class="container mx-auto px-4 my-6 w-full md:w-md lg:w-lg xl:w-xl xxl:w-2xl">
    <div class="text-center text-grey-dark font-semibold text-xl mb-4">
      {{project.name}}
      <p class="text-sm">December 5, 2017 - December 13, 2017</p>
    </div>

    <!-- Add Member Form -->
    <addMemberForm v-if="addMemberFormShown" @close="closeAddMemberForm" resourceType="project" :resource="project" @addMember="addMember"></addMemberForm>

    <div class="h-16 flex flex-row justify-center items-center px-2">
      <span @click="showAddMemberForm" class="bg-white shadow w-8 h-8 rounded-full text-teal hover:cursor-pointer text-center p-2">
        <font-awesome-icon :icon="faPlus"></font-awesome-icon>
      </span>
      <a v-for="(member, index) in project.members" :href="'/users/' + member.username" class="pl-2">
        <img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8 mr-1">
      </a>
    </div>

    <tab-menu :active="active" @activate="activateTab"></tab-menu>

    <div class="flex flex-row flex-wrap">
      <taskBoard resourceType="project" :resource="project"  :activeTab="active"></taskBoard>
      <discussionBoard resourceType="project" :resource="project" :activeTab="active"></discussionBoard>
      <messagesBoard resourceType="project" :resource="project" :activeTab="active"></messagesBoard>
      <eventBoard resourceType="projects" :resource="project" :activeTab="active"></eventBoard>
      <file-board resourceType="projects" :resource="project" :activeTab="active"></file-board>
      <!-- <messagesBoard resourceType="projects" :resource="project"></messagesBoard>
      <activity resourceType="projects" :resource="project"></activity> -->
    </div>
  </div>
</template>

<script>
import taskBoard from './../partials/taskBoard.vue'
import discussionBoard from './../partials/discussionBoard.vue'
import messagesBoard from './../partials/messagesBoard.vue'
import eventBoard from './../partials/eventBoard.vue'
import fileBoard from './../partials/fileBoard.vue'
import activity from './../partials/activity.vue'
import addMemberForm from './../partials/addMemberForm.vue'
import tabMenu from './../partials/tabMenu.vue'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    taskBoard, discussionBoard, messagesBoard, eventBoard, fileBoard, activity, addMemberForm, tabMenu
  },
  props: ['project'],
  data: () => ({
    addMemberFormShown: false,
    active: 'tasks',
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
      var messageType
      if (data.user) {
        messageType = 'success'
        this.project.members.push(data.user)
      } else {
        messageType = 'error'
      }
      EventBus.$emit('notification', data.message, messageType)
      this.addMemberFormShown = false
    },
    activateTab (tab) {
      if (tab !== this.active) {
        this.active = tab
      }
    }
  }
}
</script>
