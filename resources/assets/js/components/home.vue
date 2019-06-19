<template>
<div class="container mx-auto w-3/4 2xl:w-3/5 mt-8">
  <div class="flex flex-row justify-around mb-8 pb-3 border-b-2 text-gray-500">
    <span @click="activeThisTab('projects')"
      :class="{'text-gray-800 font-semibold border-teal-500 border-b-4 pb-3 -mb-4':(active === 'projects'), 'cursor-pointer': (active != 'projects')}">
      {{ 'Projects' | localize }}
    </span>
    <span @click="activeThisTab('teams')"
      :class="{'text-gray-800 font-semibold border-teal-500 border-b-4 pb-3 -mb-4':(active === 'teams'), 'cursor-pointer': (active != 'teams')}">
      {{ 'Teams' | localize }}
    </span>
    <span @click="activeThisTab('offices')"
      :class="{'text-gray-800 font-semibold border-teal-500 border-b-4 pb-3 -mb-4':(active === 'offices'), 'cursor-pointer': (active != 'offices')}">
      {{ 'Offices' | localize }}
    </span>
  </div>
  <projects :active-tab="active"></projects>
  <teams :active-tab="active"></teams>
  <offices :active-tab="active"></offices>
</div>
</template>

<script>
import projects from './partials/projects.vue'
import teams from './partials/teams.vue'
import offices from './partials/offices.vue'

export default {
  components: {
    projects, teams, offices
  },
  data: () => ({
    active: 'projects'
  }),
  methods: {
    activeThisTab (tab) {
      if (tab !== this.active) {
        this.active = tab
      }
    }
  }
}
</script>
