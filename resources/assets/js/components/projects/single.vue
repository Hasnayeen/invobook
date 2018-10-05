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
        <i class="fas fa-plus"></i>
      </span>
      <a v-for="(member, index) in project.members" :href="'/users/' + member.username" class="pl-2">
        <img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8 mr-1">
      </a>
    </div>

    <tab-menu :active="active" @activate="activateTab"></tab-menu>

    <div class="flex flex-row flex-wrap justify-start">
      <taskBoard resourceType="project" :resource="project"  :activeTab="active"></taskBoard>
      <discussionBoard resourceType="project" :resource="project" :activeTab="active"></discussionBoard>
      <messagesBoard resourceType="project" :resource="project" :activeTab="active"></messagesBoard>
      <!-- <messagesBoard resourceType="projects" :resource="project"></messagesBoard>
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
import tabMenu from './../partials/tabMenu.vue'

export default {
  components: {
    taskBoard, discussionBoard, messagesBoard, schedule, files, activity, addMemberForm, tabMenu
  },
  props: ['project'],
  data: () => ({
    addMemberFormShown: false,
    active: 'tasks',
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
        var messageType = 'success'
        this.project.members.push(data.user)
      } else {
        var messageType = 'error'
      }
      EventBus.$emit('notification', data.message, messageType)
      this.addMemberFormShown = false
    },
    activateTab (tab) {
      if (tab != this.active) {
        this.active = tab
      }
    }
  }
}
</script>
