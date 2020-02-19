<template>
<div id="main-container">
  <div v-if="showHome" class="bg-white shadow">
    <div id="group-menu" class="sm:container sm:mx-auto px-4 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl flex justify-start mb-8 pb-3 pt-4 text-gray-700">
      <span @click="setActiveView('home')" class="mr-4 sm:mr-8"
        :class="{'text-indigo-700 font-semibold border-indigo-500 border-b-2 pb-2 -mb-3':(currentView === 'home'), 'cursor-pointer': (currentView != 'home')}">
        {{ 'Home' | localize }}
      </span>
      <span @click="setActiveView('projects')" class="mr-4 sm:mr-8"
        :class="{'text-indigo-700 font-semibold border-indigo-500 border-b-2 pb-2 -mb-3':(currentView === 'projects'), 'cursor-pointer': (currentView != 'projects')}">
        {{ 'Projects' | localize }}
      </span>
      <span @click="setActiveView('teams')" class="mr-4 sm:mr-8"
        :class="{'text-indigo-700 font-semibold border-indigo-500 border-b-2 pb-2 -mb-3':(currentView === 'teams'), 'cursor-pointer': (currentView != 'teams')}">
        {{ 'Teams' | localize }}
      </span>
      <span @click="setActiveView('offices')" class="mr-4 sm:mr-8"
        :class="{'text-indigo-700 font-semibold border-indigo-500 border-b-2 pb-2 -mb-3':(currentView === 'offices'), 'cursor-pointer': (currentView != 'offices')}">
        {{ 'Offices' | localize }}
      </span>
    </div>
  </div>
  <div id="content-container" class="sm:container sm:mx-auto px-4 w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
    <home :active-tab="currentView"></home>
    <projects v-if="currentView === 'projects'"></projects>
    <teams v-if="currentView === 'teams'"></teams>
    <offices v-if="currentView === 'offices'"></offices>
  </div>

  <project v-if="currentView === 'project'"></project>
  <team v-if="currentView === 'team'"></team>
  <office v-if="currentView === 'office'"></office>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import home from './home.vue'
import projects from './projects.vue'
import teams from './teams.vue'
import offices from './offices.vue'
import project from './../projects/single.vue'
import team from './../teams/single.vue'
import office from './../offices/single.vue'

export default {
  components: {
    home, projects, teams, offices, project, team, office
  },

  created () {
    let groupType = new URL(location.href).searchParams.get('group_type')
    let groupId = new URL(location.href).searchParams.get('group_id')
    this.loadResource(groupType, groupId)
  },

  computed: {
    ...mapState({
      currentView: state => state.currentView,
      resourceName: state => state.resourceName
    }),
    showHome () {
      return ['home', 'projects', 'teams', 'offices'].includes(this.currentView)
    },
  },

  methods: {
    ...mapActions([
      'setCurrentView',
      'getProject',
      'getProjects',
      'getTeam',
      'getTeams',
      'getOffice',
      'getOffices',
      'setGroup',
    ]),
    setActiveView (view) {
      if (view === 'home') {
        this.updateUrl({"group_type": null, "group_id": null, "tool": null})
      } else {
        this.updateUrl({"group_type": view, "group_id": null, "tool": null})
      }
      this.setCurrentView(view)
    },
    showProject (id) {
      this.getProject(id)
      this.setGroup({type: 'project', id: id})
    },
    showTeam (id) {
      this.getTeam(id)
      this.setGroup({type: 'team', id: id})
    },
    showOffice (id) {
      this.getOffice(id)
      this.setGroup({type: 'office', id: id})
    },
    getAllProjects () {
      this.setCurrentView('projects')
      this.getProjects()
    },
    getAllTeams () {
      this.setCurrentView('teams')
      this.getTeams()
    },
    getAllOffices () {
      this.setCurrentView('offices')
      this.getOffices()
    },
    loadResource (groupType, groupId = null) {
      if (['projects', 'teams', 'offices'].includes(groupType)) {
        switch (groupType) {
          case 'projects':
            this.getAllProjects()
            break;
          case 'teams':
            this.getAllTeams()
            break;
          case 'offices':
            this.getAllOffices()
            break;
          default:
            break;
        }
      } else {
        switch (groupType) {
          case 'project':
            this.showProject(groupId)
            break;
          case 'team':
            this.showTeam(groupId)
            break;
          case 'office':
            this.showOffice(groupId)
            break;
          default:
            break;
        }
      }
    }
  }
}
</script>
