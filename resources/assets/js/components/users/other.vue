<template>
<div class="pt-8 bg-white rounded shadow py-8">
  <div class="flex flex-col items-center">
    <img :src="generateUrl(user.avatar)" :alt="'Default avatar of ' + user.name" class="w-32 h-32 rounded-full">
    <div class="text-grey-darker text-2xl font-semibold py-2 px-8">
      {{user.name}}
    </div>
    <div class="text-grey-dark text-lg py-2 px-8">
      {{user.designation}}
    </div>
    <div class="text-grey-dark py-2 px-8">
      {{userLocalTime}}
    </div>
    <div class="text-grey-darker pt-2 pb-4 px-8 leading-normal">
      {{user.bio}}
    </div>
    <!-- <div class="border-t w-full"></div> -->
    <div class="text-grey-darker pt-8 self-start px-8 bg-grey-lighter w-full pb-8">
      <div>
        Belongs to:
        <a :href="'/projects/' + project.id" class="bg-pink-lighter hover:bg-pink rounded font-medium p-2 mx-2 no-underline text-white" v-for="project in user.projects">
          {{project.name}}
        </a>
        <a :href="'/teams/' + team.id" class="bg-pink-lighter hover:bg-pink rounded font-medium p-2 mx-2 no-underline text-white" v-for="team in user.teams">
          {{team.name}}
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { DateTime } from 'luxon'
export default {
  name: 'other',
  props: ['user'],
  computed: {
    userLocalTime () {
      return DateTime.local().setZone(this.user.timezone).toLocaleString(DateTime.TIME_SIMPLE)
    }
  }
}
</script>
