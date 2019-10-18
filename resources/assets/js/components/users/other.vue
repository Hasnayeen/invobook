<template>
<div>
  <div class="bg-white rounded shadow max-w-2xl mx-auto mt-16">
    <div class="flex flex-col items-center">
      <div class="w-full h-48 opacity-25 bg-cover rounded-t"
        :style="{backgroundImage: 'url(' + generateUrl(user.avatar) + ')'}">
      </div>
      <div class="absolute h-48">
        <div class="w-32 h-32 bg-cover bg-center mt-8 rounded-full"
          :style="{backgroundImage: 'url(' + generateUrl(user.avatar) + ')'}">
        </div>
      </div>
      <div class="flex flex-col items-center w-full py-8">
        <div class="text-gray-700 text-4xl font-semibold px-8 leading-none">
          {{user.name}}
        </div>
        <div class="text-gray-600 text-lg py-1 px-8">
          {{user.designation}}
        </div>
        <div class="text-gray-600 text-sm px-8">
          {{ user.location }} <span class="font-bold text-xl">{{user.location ? '•' : ''}}</span> {{userLocalTime}}
        </div>
      </div>
      <div class="p-8 pt-0 min-w-full">
        <div class="text-gray-800 bg-blue-100 px-8 pb-20 leading-normal rounded-lg">
          <div class="text-6xl text-gray-700 pt-2 -mb-8">❝</div>
          <div v-if="user.bio" class="px-8">
            {{user.bio}}
          </div>
          <div v-else class="text-center">
            User has not set their bio yet. ¯\_(ツ)_/¯
          </div>
          <div class="text-6xl text-gray-700 float-right">❞</div>
        </div>
      </div>
      <div class="text-gray-800 self-start p-8 bg-gray-100 w-full rounded-b">
        <div>
          <div class="flex items-center text-gray-700">
            <div class="pr-2">
              {{ 'Member of' | localize }}
            </div>
            <div v-if="user.projects.length > 0" class="flex items-center px-2">
              <div class="bg-teal-200 text-teal-700 font-bold flex justify-center items-center w-8 h-8 mr-2 rounded-full">{{ user.projects.length }}</div>
              <span>{{user.projects.length > 1 ? 'projects' : 'project'}}</span>
            </div>
            <div v-if="user.projects.length > 0 && user.teams.length > 0" class="flex items-center px-2">
              &
            </div>
            <div v-if="user.teams.length > 0" class="flex items-center px-2">
              <div class="bg-indigo-200 text-indigo-700 font-bold flex justify-center items-center w-8 h-8 mr-2 rounded-full">{{ user.teams.length }}</div>
              <div>{{user.teams.length > 1 ? 'teams' : 'team'}}</div>
            </div>
          </div>
          <div class="pt-4 -mx-2 flex flex-wrap">
            <div v-for="project in user.projects" class="px-2 py-4">
              <a :href="'/projects/' + project.id" class="bg-teal-400 text-white rounded-full font-medium px-3 py-2 no-underline">
                {{project.name}}
              </a>
            </div>
            <div v-for="team in user.teams" class="px-2 py-4">
              <a :href="'/teams/' + team.id" class="bg-indigo-400 text-white rounded-full font-medium px-3 py-2 no-underline">
                {{team.name}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="h-12"></div>
</div>
</template>

<script>
import { DateTime } from 'luxon'
export default {
  name: 'other',
  props: ['user'],
  computed: {
    userLocalTime () {
      return DateTime.local().setZone(this.user.timezone).toLocaleString(DateTime.TIME_SIMPLE) + ' (' + DateTime.local().setZone(this.user.timezone). offsetNameShort +')'
    }
  }
}
</script>
