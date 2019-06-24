<template>
  <div class="container mx-auto my-6 px-4 md:px-0 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
    <div class="text-gray-600 font-semibold text-2xl mb-4 flex items-center justify-center">
      {{ team.name }}
      <span @click="toggleDropdownMenu" v-click-outside="closeDropdownMenu" class="bg-white p-1 text-sm rounded-full shadow ml-4 cursor-pointer flex items-center">
        <font-awesome-icon :icon="faCog"></font-awesome-icon>
      </span>
      <!-- Dropdown Menu -->
      <div v-if="dropdownMenuShown" class="relative">
        <ul class="list-reset bg-white rounded shadow-lg py-2 absolute right-0 mt-4 text-base text-left font-normal whitespace-no-wrap z-10">
          <li class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            <a href="#" class="no-underline text-gray-600" @click="showMembersListModal">
              Show All Members
            </a>
          </li>
          <li @click="showGithubRepoModal" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Connect Github Repository
          </li>
          <li @click="showPermissionsSettings" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Permissions Settings
          </li>
          <li class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Delete
          </li>
        </ul>
      </div>
    </div>

    <div class="text-gray-600 flex flex-row justify-center items-center">
      <span class="text-lg">
        Cycle: 
      </span>
      <div v-if="this.selectedCycle" @click="showCyclesModal" class="p-2 ml-2 bg-gray-100 shadow rounded cursor-pointer text-sm text-teal-800 inline">
        <span v-if="this.selectedCycle.name">
          {{ this.selectedCycle.name }}
        </span>
        <span v-else>
          {{this.selectedCycle.start_date}} - {{this.selectedCycle.end_date}}
        </span>
      </div>
      <span v-else @click="showCyclesModal" class="p-2 ml-2 bg-gray-100 shadow rounded cursor-pointer text-sm text-teal-800">
        Click to set a Cycle
      </span>
    </div>

  <!-- Modals for cycles -->
  <cycles-modal resourceType="team" :resourceId="team.id" :currentCycleId="currentCycleId" :modalShown="cyclesModalShown" @close="closeCyclesModal"></cycles-modal>
  <!-- Modals for cycles -->

  <!-- Modals for dropdown menu -->
    <members-list-modal resourceType="team" :resourceId="team.id" :show="membersListModalShown" :members="team.members" @close="closeMembersListModal" />

    <addMemberForm v-if="addMemberFormShown" @close="closeAddMemberForm" resourceType="team" :resource="team" @addMember="addMember"></addMemberForm>

    <show-github-repo entityType="team" :entityId="team.id" v-if="githubRepoModalShown" @close-github-repo-modal="closeGithubRepoModal"></show-github-repo>
    
    <permission-settings-modal resourceType="team" :resourceId="team.id" :show="permissionSettingsModalShown" @close="closePermissionsSettings" ></permission-settings-modal>
  <!-- Modals for dropdown menu -->

    <div class="flex flex-row flex-wrap justify-center items-center px-2 pt-4">
      <span @click="showAddMemberForm" class="bg-white shadow w-8 h-8 flex justify-center items-center rounded-full text-teal-500 cursor-pointer text-center p-2 mr-1">
        <font-awesome-icon :icon="faPlus"></font-awesome-icon>
      </span>
      <a v-for="(member, index) in team.members" :href="'/users/' + member.username" class="mx-1">
        <profile-card :user="member"></profile-card>
      </a>
      <span v-if="team.members.length > 5" class="bg-gray-200 border-teal-500 border p-2 rounded-full">{{ team.members.length - 5 }}+</span>
    </div>

    <tab-menu :active="active" @activate="activateTab"></tab-menu>

    <div class="flex flex-row flex-wrap justify-center">
      <taskBoard resourceType="team" :resource="team"  :activeTab="active"></taskBoard>
      <discussionBoard resourceType="team" :resource="team" :activeTab="active"></discussionBoard>
      <messagesBoard resourceType="team" :resource="team" :activeTab="active"></messagesBoard>
      <eventBoard resourceType="team" :resource="team" :activeTab="active"></eventBoard>
      <file-board resourceType="team" :resource="team" :activeTab="active"></file-board>
      <activity-board resourceType="team" :resourceId="team.id" :activeTab="active"></activity-board>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import taskBoard from './../partials/taskBoard.vue'
import discussionBoard from './../partials/discussionBoard.vue'
import messagesBoard from './../partials/messagesBoard.vue'
import eventBoard from './../partials/eventBoard.vue'
import fileBoard from './../partials/fileBoard.vue'
import activityBoard from './../partials/activityBoard.vue'
import addMemberForm from './../partials/addMemberForm.vue'
import showGithubRepo from './../partials/showGithubRepo.vue'
import membersListModal from './../partials/membersListModal.vue'
import permissionSettingsModal from './../partials/permissionSettingsModal.vue'
import cyclesModal from './../partials/cyclesModal.vue'
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
    activityBoard,
    addMemberForm,
    membersListModal,
    permissionSettingsModal,
    cyclesModal,
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
    permissionSettingsModalShown: false,
    cyclesModalShown: false,
    currentCycleId: null,
    faPlus,
    faCog
  }),
  created () {
    let tabs = ['tasks', 'discussions', 'messages', 'events', 'files', 'activities']
    let tool = new URL(location.href).searchParams.get('tool')
    let id = new URL(location.href).searchParams.get('id')
    if (tool !== null && tabs.indexOf(tool) !== -1) {
      this.active = tool
    }
    if (id !== null) {
      this.activeId = parseInt(id)
    }
    this.currentCycleId = this.selectedCycle ? this.selectedCycle.id : null
    this.getAllCycles()
  },
  computed: {
    ...mapState({
      team: state => state.team,
      selectedCycle: state => state.cycle.selectedCycle
    })
  },
  methods: {
    ...mapActions([
      'getCycles'
    ]),
    getAllCycles () {
      this.getCycles({
        group_type: 'team',
        group_id: this.team.id,
      })
    },
    showAddMemberForm () {
      this.addMemberFormShown = true
    },
    closeAddMemberForm () {
      this.addMemberFormShown = false
    },
    addMember (data) {
      let messageType
      if (data.user) {
        messageType = 'success'
        this.team.members.push(data.user)
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
    },
    showPermissionsSettings () {
      this.permissionSettingsModalShown = true
    },
    closePermissionsSettings () {
      this.permissionSettingsModalShown = false
    },
    showCyclesModal () {
      this.cyclesModalShown = true
    },
    closeCyclesModal () {
      this.cyclesModalShown = false
    },
  }
}
</script>
