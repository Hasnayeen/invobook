<template>
  <div class="container mx-auto px-4 my-6 w-full md:w-md lg:w-lg xl:w-xl xxl:w-2xl">
    <div class="text-grey-dark font-semibold text-2xl mb-4 flex items-center justify-center">
      {{project.name}}
      <span @click="toggleDropdownMenu" v-click-outside="closeDropdownMenu" class="bg-white p-1 text-sm rounded-full shadow ml-4 cursor-pointer flex items-center">
        <font-awesome-icon :icon="faCog"></font-awesome-icon>
      </span>
      <div v-if="dropdownMenuShown" class="relative">
        <ul class="list-reset bg-white rounded shadow-lg py-2 absolute pin-r mt-4 text-base text-left font-normal whitespace-no-wrap z-10">
          <li class="px-4 py-2 hover:bg-grey-light cursor-pointer">
            <a href="#" class="no-underline text-grey-dark" @click.prevent="showMembersListModal">
              Show All Members
            </a>
          </li>
          <li @click="showGithubRepoModal" class="px-4 py-2 hover:bg-grey-light cursor-pointer">
            Connect Github Repository
          </li>
          <li class="px-4 py-2 hover:bg-grey-light cursor-pointer">
            Delete
          </li>
        </ul>
      </div>
    </div>

    <div class="text-grey-dark flex flex-row justify-center items-center">
      <span class="text-lg">
        Cycle: 
      </span>
      <span class="p-2 ml-2 bg-grey-lightest shadow rounded cursor-pointer text-sm text-teal-darker">
        {{startDate}} - {{endDate}}
      </span>
    </div>

  <!-- Modals for dropdown menu -->
    <members-list-modal resourceType="project" :resourceId="project.id" :show="membersListModalShown" :members="project.members" @close="closeMembersListModal" ></members-list-modal>

    <add-member-form v-if="addMemberFormShown" @close="closeAddMemberForm" resourceType="project" :resource="project" @addMember="addMember"></add-member-form>

    <show-github-repo entityType="project" :entityId="project.id" v-if="githubRepoModalShown" @close-github-repo-modal="closeGithubRepoModal"></show-github-repo>
  <!-- Modals for dropdown menu -->

    <div class="h-16 flex flex-row justify-center items-center px-2">
      <span @click="showAddMemberForm" class="bg-white shadow w-8 h-8 rounded-full text-teal hover:cursor-pointer text-center p-2">
        <font-awesome-icon :icon="faPlus"></font-awesome-icon>
      </span>
      <a v-for="(member, index) in project.members" :href="'/users/' + member.username" class="pl-2">
        <profile-card :user="member"></profile-card>
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
import { mapState } from 'vuex'
import taskBoard from './../partials/taskBoard.vue'
import discussionBoard from './../partials/discussionBoard.vue'
import messagesBoard from './../partials/messagesBoard.vue'
import eventBoard from './../partials/eventBoard.vue'
import fileBoard from './../partials/fileBoard.vue'
import activity from './../partials/activity.vue'
import addMemberForm from './../partials/addMemberForm.vue'
import showGithubRepo from './../partials/showGithubRepo.vue'
import membersListModal from './../partials/membersListModal.vue'
import profileCard from './../partials/profileCard.vue'
import tabMenu from './../partials/tabMenu.vue'
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog'

export default {
  components: {
    taskBoard,
    discussionBoard,
    messagesBoard,
    eventBoard,
    fileBoard,
    activity,
    addMemberForm,
    membersListModal,
    profileCard,
    tabMenu,
    showGithubRepo
  },
  data: () => ({
    addMemberFormShown: false,
    active: 'tasks',
    dropdownMenuShown: false,
    githubRepoModalShown: false,
    membersListModalShown: false,
    faPlus,
    faCog
  }),
  created () {
    let tabs = ['tasks', 'discussions', 'messages', 'events', 'files', 'activities']
    let tool = new URL(location.href).searchParams.get('tool')
    if (tool !== null && tabs.indexOf(tool) !== -1) {
      this.active = tool
    }
  },
  computed: {
    startDate: function () {
      if (this.project.current_cycle) {
        return window.luxon.DateTime.fromISO(this.project.current_cycle.start_date).toLocaleString(window.luxon.DateTime.DATE_MED)
      }
      return 'Set start date'
    },
    endDate: function () {
      if (this.project.current_cycle) {
        return window.luxon.DateTime.fromISO(this.project.current_cycle.end_date).toLocaleString(window.luxon.DateTime.DATE_MED)
      }
      return 'Set end date'
    },
    ...mapState({
      project: state => state.project
    })
  },
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
    showMembersListModal () {
      this.membersListModalShown = true
    },
    closeMembersListModal () {
      this.membersListModalShown = false
    },
    activateTab (tab) {
      if (tab !== this.active) {
        this.active = tab
      }
    },
    toggleDropdownMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    closeDropdownMenu () {
      this.dropdownMenuShown = false
    },
    showGithubRepoModal () {
      this.githubRepoModalShown = true
    },
    closeGithubRepoModal () {
      this.githubRepoModalShown = false
    }
  }
}
</script>
