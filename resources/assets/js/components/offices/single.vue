<template>
  <div class="container mx-auto my-6 px-4 md:px-0 w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
    <div class="text-gray-600 font-semibold text-2xl mb-4 flex items-center justify-center">
      {{office.name}}
      <span v-if="authenticated" @click="toggleDropdownMenu" v-click-outside="closeDropdownMenu" class="bg-white p-1 text-sm rounded-full shadow ml-4 cursor-pointer flex items-center">
        <font-awesome-icon :icon="faCog"></font-awesome-icon>
      </span>
      <div v-if="authenticated && dropdownMenuShown" class="relative">
        <ul class="list-reset bg-white rounded shadow-lg py-2 absolute right-0 mt-4 text-base text-left font-normal whitespace-no-wrap z-30">
          <li @click="toggleVisibility" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            {{ office.public ? 'Make Private' : 'Make Public'}}
          </li>
          <li v-if="settings.roadmap_enabled" @click="showModal('roadmapModal')" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Roadmap
          </li>
          <li @click="showModal('memberListModal')" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Show All Members
          </li>
          <li @click="showModal('permissionSettingsModal')" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Permissions Settings
          </li>
          <li @click="showModal('settingsModal')" class="px-4 py-2 hover:bg-gray-400 cursor-pointer">
            Settings
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
      <span v-else @click="showModal('cycleModal')" class="p-2 ml-2 bg-gray-100 shadow rounded cursor-pointer text-sm text-teal-800">
        Click to set a Cycle
      </span>
    </div>

  <!-- Modals for cycles -->
  <cycles-modal v-if="currentComponent === 'cycleModal'" resourceType="office" :resourceId="office.id" :currentCycleId="currentCycleId"></cycles-modal>
  <!-- Modals for cycles -->

  <!-- Modals for dropdown menu -->
    <roadmap-modal v-if="currentComponent === 'roadmapModal'" resourceType="office" :resourceId="office.id" :currentCycleId="currentCycleId"></roadmap-modal>

    <members-list-modal v-if="currentComponent === 'memberListModal'" resourceType="office" :resourceId="office.id" :members="office.members" />

    <addMemberForm v-if="currentComponent === 'addMemberForm'"resourceType="office" :resource="office" @addMember="addMember"></addMemberForm>

    <permission-settings-modal v-if="currentComponent === 'permissionSettingsModal'" resourceType="office" :resourceId="office.id"></permission-settings-modal>

    <settings-modal v-if="currentComponent === 'settingsModal'" resourceType="office" :resourceId="office.id" :settings="settings" @update-settings="updateSettings" ></settings-modal>
  <!-- Modals for dropdown menu -->

    <div class="flex flex-row flex-wrap justify-center items-center px-2 pt-4">
      <span @click="showModal('addMemberForm')" class="bg-white shadow w-8 h-8 flex justify-center items-center rounded-full text-teal-500 cursor-pointer text-center p-2 mr-1">
        <font-awesome-icon :icon="faPlus"></font-awesome-icon>
      </span>
      <a v-for="(member, index) in office.members" :href="'/users/' + member.username" class="mx-1">
        <profile-card :user="member"></profile-card>
      </a>
      <span v-if="office.members.length > 5" class="bg-gray-200 border-teal-500 border p-2 rounded-full">{{ office.members.length - 5 }}+</span>
    </div>

    <tab-menu :settings="settings" :active="active" @activate="activateTab"></tab-menu>

    <div class="flex flex-row flex-wrap justify-center">
      <task-board v-if="settings.task_enabled" resourceType="office" :resource="office" :activeTab="active" :activeId="activeId"></task-board>
      <discussion-board v-if="settings.discussion_enabled" resourceType="office" :resource="office" :activeTab="active" :activeId="activeId"></discussion-board>
      <messages-board v-if="settings.message_enabled" resourceType="office" :resource="office" :activeTab="active"></messages-board>
      <event-board v-if="settings.event_enabled" resourceType="office" :resource="office" :activeTab="active"></event-board>
      <file-board v-if="settings.file_enabled" resourceType="office" :resource="office" :activeTab="active"></file-board>
      <activity-board resourceType="office" :resourceId="office.id" :activeTab="active"></activity-board>
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
import membersListModal from './../partials/membersListModal.vue'
import permissionSettingsModal from './../partials/permissionSettingsModal.vue'
import settingsModal from './../partials/settingsModal.vue'
import cyclesModal from './../partials/cyclesModal.vue'
import roadmapModal from './../partials/roadmapModal.vue'
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
    settingsModal,
    cyclesModal,
    roadmapModal,
    profileCard,
    tabMenu,
  },
  data: () => ({
    active: '',
    activeId: 0,
    dropdownMenuShown: false,
    currentCycleId: null,
    authenticated,
    faPlus,
    faCog
  }),
  created () {
    let tabs = ['tasks', 'discussions', 'messages', 'events', 'files', 'activities']
    let tool = new URL(location.href).searchParams.get('tool')
    let id = new URL(location.href).searchParams.get('id')
    this.getActiveTool(tool, tabs)
    if (id !== null) {
      this.activeId = parseInt(id)
    }
    this.currentCycleId = this.selectedCycle ? this.selectedCycle.id : null
    this.getAllCycles()
  },
  computed: {
    ...mapState({
      currentView: state => state.currentView,
      office: state => state.office.office,
      settings: state => state.office.office.settings,
      selectedCycle: state => state.cycle.selectedCycle,
      currentComponent: state => state.dropdown.currentComponent
    })
  },
  methods: {
    ...mapActions([
      'getCycles',
      'setCurrentComponent',
      'closeComponent',
      'showNotification',
    ]),
    showModal (modalName) {
      this.setCurrentComponent(modalName)
    },
    closeModal () {
      this.closeComponent()
    },
    getActiveTool (tool, tabs = null) {
      if (tool !== null && tabs.indexOf(tool) !== -1) {
        this.active = tool
      } else {
        if (this.settings.task_enabled) {
          this.active = 'tasks'
        } else if (this.settings.discussion_enabled) {
          this.active = 'discussions'
        } else if (this.settings.message_enabled) {
          this.active = 'messages'
        } else if (this.settings.event_enabled) {
          this.active = 'events'
        } else if (this.settings.file_enabled) {
          this.active = 'files'
        }
      }
    },
    getAllCycles () {
      this.getCycles({
        group_type: 'office',
        group_id: this.office.id,
      })
    },
    addMember (data) {
      let messageType
      if (data.user) {
        this.message = data.message
        messageType = 'success'
        this.office.members.push(data.user)
      } else {
        messageType = 'error'
        this.message = data.message
      }
      this.addMemberFormShown = false
      this.showNotification({type: messageType, message: data.message})
      this.closeComponent()
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
    updateSettings (settings) {
      this.settings = settings
      this.getActiveTool(null)
    },
    toggleVisibility () {
      if (this.office.public) {
        axios.delete('/public-offices/' + this.office.id)
          .then((response) => {
            this.office.public = false
            this.showNotification({type: response.data.status, message: response.data.message})
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      } else {
        axios.post('/public-offices/' + this.office.id)
          .then((response) => {
            this.office.public = true
            this.showNotification({type: response.data.status, message: response.data.message})
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      }
    }
  }
}
</script>
