<template>
<div class="md:container md:mx-auto md:px-4 w-full lg:w-3/4 2xl:w-3/5 mt-8">
  <div class="flex flex-row justify-around mb-8 pb-3 pt-4 bg-white shadow md:rounded text-gray-700">
    <span @click="activeThisTab('home')" class="flex-grow text-center"
      :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(active === 'home'), 'cursor-pointer': (active != 'home')}">
      {{ 'Home' | localize }}
    </span>
    <span @click="activeThisTab('projects')" class="flex-grow text-center"
      :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(active === 'projects'), 'cursor-pointer': (active != 'projects')}">
      {{ 'Projects' | localize }}
    </span>
    <span @click="activeThisTab('teams')" class="flex-grow text-center"
      :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(active === 'teams'), 'cursor-pointer': (active != 'teams')}">
      {{ 'Teams' | localize }}
    </span>
    <span @click="activeThisTab('offices')" class="flex-grow text-center"
      :class="{'text-teal-800 font-semibold border-teal-500 border-b-2 pb-2 -mb-3':(active === 'offices'), 'cursor-pointer': (active != 'offices')}">
      {{ 'Offices' | localize }}
    </span>
  </div>
  <home :active-tab="active"></home>
  <projects :active-tab="active"></projects>
  <teams :active-tab="active"></teams>
  <offices :active-tab="active"></offices>
  
  <div class="h-16 md:hidden"></div>
</div>
</template>

<script>
import home from './home.vue'
import projects from './projects.vue'
import teams from './teams.vue'
import offices from './offices.vue'

export default {
  components: {
    home, projects, teams, offices
  },
  data: () => ({
    active: 'home'
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
