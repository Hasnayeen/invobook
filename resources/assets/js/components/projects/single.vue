<template>
<div>
  <tab-menu :settings="settings" :active="active" @activate="activateTab"></tab-menu>
  <div class="container mx-auto my-4 px-4 w-full md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
    
    <!-- Modals for cycles -->
    <cycles-modal v-if="currentComponent === 'cycleModal'" resourceType="project" :resourceId="project.id" :currentCycleId="currentCycleId"></cycles-modal>
    <!-- Modals for cycles -->

    <!-- Modals for dropdown menu -->
      <roadmap-modal v-if="currentComponent === 'roadmapModal'" resourceType="project" :resourceId="project.id" :currentCycleId="currentCycleId"></roadmap-modal>

      <members-list-modal v-if="currentComponent === 'memberListModal'" resourceType="project" :resourceId="project.id" :members="project.members" ></members-list-modal>

      <add-member-form v-if="currentComponent === 'addMemberForm'" resourceType="project" :resource="project" @addMember="addMember"></add-member-form>

      <permission-settings-modal v-if="currentComponent === 'permissionSettingsModal'" resourceType="project" :resourceId="project.id" ></permission-settings-modal>

      <settings-modal v-if="currentComponent === 'settingsModal'" resourceType="project" :resourceId="project.id" :settings="settings" @update-settings="updateSettings" ></settings-modal>
    <!-- Modals for dropdown menu -->

    <div class="flex flex-row flex-wrap justify-center">
      <task-board v-if="settings.task_enabled" resourceType="project" :resource="project" :activeTab="active" :activeId="activeId"></task-board>
      <discussion-board v-if="settings.discussion_enabled" resourceType="project" :resource="project" :activeTab="active" :activeId="activeId"></discussion-board>
      <messages-board v-if="settings.message_enabled" resourceType="project" :resource="project" :activeTab="active"></messages-board>
      <event-board v-if="settings.event_enabled" resourceType="project" :resource="project" :activeTab="active"></event-board>
      <file-board v-if="settings.file_enabled" resourceType="project" :resource="project" :activeTab="active"></file-board>
      <activity-board resourceType="project" :resourceId="project.id" :activeTab="active"></activity-board>
    </div>
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
    this.updateUrl({'tool': this.active})
    this.updateBreadcrumb('projects')
    this.currentCycleId = this.selectedCycle ? this.selectedCycle.id : null
    this.getAllCycles()
  },

  computed: {
    ...mapState({
      currentView: state => state.currentView,
      breadcrumb: state => state.breadcrumb,
      project: state => state.project.project,
      settings: state => state.project.project.settings,
      selectedCycle: state => state.cycle.selectedCycle,
      currentComponent: state => state.dropdown.currentComponent
    })
  },

  methods: {
    ...mapActions([
      'setCurrentView',
      'getCycles',
      'refreshCycle',
      'setCurrentComponent',
      'closeComponent',
      'showNotification',
      'updateBreadcrumb',
      'updateProjectSettings',
    ]),
    setActiveView (view) {
      this.refreshCycle();
      if (view === 'home') {
        this.updateUrl({"group_type": null, "group_id": null, "tool": null})
      } else {
        this.updateUrl({"group_type": view, "group_id": null, "tool": null})
      }
      this.setCurrentView(view)
    },
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
        group_type: 'project',
        group_id: this.project.id,
      })
    },
    addMember (data) {
      var messageType
      if (data.user) {
        messageType = 'success'
        this.project.members.push(data.user)
      } else {
        messageType = 'error'
      }
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
      this.updateProjectSettings(settings)
      this.getActiveTool(null)
    },
    toggleVisibility () {
      if (this.project.public) {
        axios.delete('/public-projects/' + this.project.id)
          .then((response) => {
            this.project.public = false
            this.showNotification({type: response.data.status, message: response.data.message})
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      } else {
        axios.post('/public-projects/' + this.project.id)
          .then((response) => {
            this.project.public = true
            this.showNotification({type: response.data.status, message: response.data.message})
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
      }
    },
    deleteProject () {
        axios.delete('/projects/' + this.project.id)
          .then((response) => {
            this.showNotification({type: response.data.status, message: response.data.message})
            window.location.href = '/'
          })
          .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          })
    }
  }
}
</script>
 