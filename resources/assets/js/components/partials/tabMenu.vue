<template>
    <div class="flex flex-row justify-around my-6 py-4 bg-white shadow rounded text-grey">
      <div @click="activateThisTab('tasks')"
        :class="[(active === 'tasks') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
        <i class="fas fa-tasks text-2xl"></i>
        <span class="block text-xs font-regular pt-2">{{ 'Tasks' | localize }}</span>
      </div>
      <div @click="activateThisTab('discussions')"
        :class="[(active === 'discussions') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
        <i class="fas fa-clipboard-list text-2xl"></i>
        <span class="block text-xs font-regular pt-2">{{ 'Discussions' | localize }}</span>
      </div>
      <div @click="activateThisTab('messages')"
        :class="[(active === 'messages') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
        <i class="fas fa-comments text-2xl"></i>
        <span class="block text-xs font-regular pt-2">{{ 'Messages' | localize }}</span>
      </div>
      <div @click="activateThisTab('events')"
        :class="[(active === 'events') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
        <i class="fas fa-calendar-alt text-2xl"></i>
        <span class="block text-xs font-regular pt-2">{{ 'Events' | localize }}</span>
      </div>
      <div @click="activateThisTab('files')"
        :class="[(active === 'files') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
        <i class="fas fa-file-alt text-2xl"></i>
        <span class="block text-xs font-regular pt-2">{{ 'Files' | localize }}</span>
      </div>
      <div @click="activateThisTab('activities')"
        :class="[(active === 'activities') ? 'text-teal-dark font-semibold border-teal border-b-2 pb-4 -mb-4' : 'cursor-pointer', 'text-center w-1/6']">
        <i class="fas fa-bolt text-2xl"></i>
        <span class="block text-xs font-regular pt-2">{{ 'Activities' | localize }}</span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    active: {
      required: true,
      type: String
    }
  },
  methods: {
    activateThisTab (tab) {
      this.$emit('activate', tab)
    }
  }
}
</script>
