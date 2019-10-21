<template>
<div>
  <div class="md:container md:mx-auto md:px-4 mt-4 flex justify-center">
    <div class="bg-white shadow rounded flex justify-center flex-grow-0 px-4 py-1 text-sm">
      <div @click="setActiveView('home')" class="text-gray-700 hover:text-blue-700 cursor-pointer">
        Home
      </div>
      <div v-if="showSecondary || showTertiary" class="flex">
        <div class="pl-2">➤</div>
        <div @click="setActiveView(secondaryName)" class="text-gray-700 hover:text-blue-700 cursor-pointer pl-2">{{ secondaryName | capitalize }}</div>
      </div>
      <div v-if="showTertiary" class="flex">
        <div class="pl-2">➤</div>
        <div class="pl-2">{{ resourceName }}</div>
      </div>
    </div>
  </div>

  <div v-if="showHome" class="md:container md:mx-auto md:px-4 w-full lg:w-3/4 2xl:w-3/5 mt-8">
    <div class="flex flex-row justify-around mb-8 pb-3 pt-4 bg-white shadow md:rounded text-gray-700">
      <span @click="setActiveView('home')" class="flex-grow text-center"
        :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(currentView === 'home'), 'cursor-pointer': (currentView != 'home')}">
        {{ 'Home' | localize }}
      </span>
      <span @click="setActiveView('projects')" class="flex-grow text-center"
        :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(currentView === 'projects'), 'cursor-pointer': (currentView != 'projects')}">
        {{ 'Projects' | localize }}
      </span>
      <span @click="setActiveView('teams')" class="flex-grow text-center"
        :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(currentView === 'teams'), 'cursor-pointer': (currentView != 'teams')}">
        {{ 'Teams' | localize }}
      </span>
      <span @click="setActiveView('offices')" class="flex-grow text-center"
        :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(currentView === 'offices'), 'cursor-pointer': (currentView != 'offices')}">
        {{ 'Offices' | localize }}
      </span>
    </div>
    <home :active-tab="currentView"></home>
    <projects v-if="currentView === 'projects'"></projects>
    <teams v-if="currentView === 'teams'"></teams>
    <offices v-if="currentView === 'offices'"></offices>
    
    <div class="h-16 md:hidden"></div>
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
    showSecondary () {
      return ['projects', 'teams', 'offices'].includes(this.currentView)
    },
    secondaryName () {
      if (this.showSecondary) {
        return this.currentView
      } else if (this.showTertiary) {
        return this.currentView + 's'
      }
    },
    showTertiary () {
      return ['project', 'team', 'office'].includes(this.currentView)
    }
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
