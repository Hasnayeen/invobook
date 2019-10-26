<template>
<div v-if="taskDetailsShown">
  <div class="absolute container mx-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl z-40 mb-16" style="top: 12vh;left: 0;right: 0;">
    <div class="bg-gray-100 rounded shadow-lg py-4">
      <div class="flex flex-row justify-between px-8 pb-2 relative">
        <div @click="closeTaskDetails" class="cursor-pointer">
          <font-awesome-icon :icon="faArrowLeft" class="text-base text-gray-600"></font-awesome-icon>
        </div>
        <div @click="toggleMenu" v-click-outside="hideMenu" class="cursor-pointer">
          <font-awesome-icon :icon="faEllipsisH" class="text-base text-gray-600"></font-awesome-icon>
        </div>
        <div v-if="dropdownMenuShown" class="absolute rounded shadow-md right-0 top-0 mt-6 mr-4 py-1 text-indigo-800 bg-white">
          <div @click="editTask" class="cursor-pointer hover:bg-indigo-200 px-4 py-2">
            Edit
          </div>
          <div @click="deleteTask" class="cursor-pointer hover:bg-indigo-200 px-4 py-2">
            Delete
          </div>
        </div>
      </div>
      <div class="text-2xl text-gray-700 text-center font-semibold px-8 py-4">
        {{ task.name }}
      </div>
      <div class="bg-white flex flex-row flex-wrap lg:flex-no-wrap justify-between pt-4">
        <div>
          <div class="text-sm text-gray-600 px-8">
            Assignee
          </div>
          <div class="px-8">
            <a v-if="task.assigned_to" :href="'/users/' + task.user.username" class="py-2">
              <img v-if="task.assigned_to" :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8 mx-2 self-start">
            </a>
            <div v-else class="border-2 rounded-full text-xs w-8 h-8 flex items-center justify-center">N/A</div>
          </div>
        </div>
        <div class="text-center">
          <div class="text-sm text-gray-600 px-8">
            Due Date
          </div>
          <div class="px-8 py-2 text-gray-900">
            {{ dueOn(task.due_on) }}
          </div>
        </div>
        <div class="text-center relative">
          <div class="text-sm text-gray-600 px-8">
            Status
          </div>
          <div @click="toggleStatusMenu" v-click-outside="closeStatusMenu" :style="'background-color: ' + task.status.color" class="px-4 py-1 mt-1 text-gray-900 font-semibold rounded-full cursor-pointer">
            {{ task.status.name }}
          </div>
          <div v-if="statusMenuShown" class="absolute rounded shadow-md mt-2 py-1 text-left text-indigo-800 bg-gray-900">
            <div v-for="status in statuses"  :style="'color: ' + status.color" @click="changeStatus(status.id)" class="cursor-pointer hover:bg-white font-semibold px-4 py-2">
              {{ status.name }}
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="text-sm text-gray-600 px-8">
            Related To
          </div>
          <a v-if="task.related_to && task.related" :href="'/' + resourceType + 's/' + resourceId + '?tool=tasks&id=' + task.related_to" class="px-8 py-2 flex items-center justify-center" :class="[task.related_to ? 'text-blue-500 underline' : 'text-gray-600']" :title="task.related.name">
            {{ task.related.name | clip }}
          </a>
          <span v-else>None</span>
        </div>
      </div>
      <div class="bg-white text-sm text-gray-600 px-8 pt-4">
        Details
      </div>
      <div class="bg-white text-gray-900 text-lg px-8 py-2">
        {{ task.notes }}
      </div>
      <div class="bg-white text-sm text-gray-600 px-8 pt-4">
        Tags
      </div>
      <div class="bg-white flex flex-row flex-wrap justify-start px-8 py-2 pb-8">
        <div v-if="task.tags.length === 0" class="text-gray-700">No Tags</div>
        <div v-else v-for="tag in task.tags" class="bg-teal-200 px-3 py-1 rounded-full text-teal-800 font-medium text-sm mr-4">{{ tag.label }}</div>
      </div>
      <div class="flex flex-row justify-around bg-gray-200 py-4 text-gray-600 text-center">
        <div @click="showColumn('comments')" :class="[activeColumn === 'comments' ? 'border-teal-500 text-teal-500 border-b-2 pb-4 -mb-4' : 'cursor-pointer']" class="w-1/2">
          Comments
        </div>
        <div @click="showColumn('progress')" :class="[activeColumn === 'progress' ? 'border-teal-500 text-teal-500 border-b-2 pb-4 -mb-4': 'cursor-pointer']" class="w-1/2">
          Progress
        </div>
      </div>
      <div class="px-2 md:px-8">
        <comment-box :show="activeColumn === 'comments'" resourceType="task" :resourceId="task.id"></comment-box>
        <progress-box :show="activeColumn === 'progress'" resourceType="task" :resourceId="task.id"></progress-box>
      </div>
    </div>
    <div class="h-16"></div>
  </div>
  <div @click="closeTaskDetails(false)" :class="{'hidden': !taskDetailsShown}" class="h-screen w-screen fixed inset-0 bg-gray-900 opacity-25 z-20"></div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import commentBox from './commentBox.vue'
import progressBox from './progressBox.vue'
import {
  faArrowLeft,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    commentBox, progressBox
  },
  props: {
    resourceId: {
      required: true,
      type: Number
    },
    resourceType: {
      required: true,
      type: String
    },
    taskDetailsShown: {
      required: true,
      type: Boolean
    },
    task: {
      required: true,
      type: Object
    },
    index: {
      required: true
    },
    statuses: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    dropdownMenuShown: false,
    statusMenuShown: false,
    activeColumn: 'comments',
    faArrowLeft,
    faEllipsisH
  }),

  mounted () {
    let topElement = document.getElementById('app')
    topElement.scrollIntoView({behavior: "smooth", block: "start"})
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    dueOn: function (value) {
      return luxon.DateTime.fromSQL(value).toFormat('d LLL')
    },
    closeTaskDetails (editTask = false) {
      this.dropdownMenuShown = false
      this.$emit('close', editTask)
    },
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMenu () {
      this.dropdownMenuShown = false
    },
    deleteTask () {
      axios.delete('/tasks/' + this.task.id, {
          params: {
            group_type: this.resourceType,
            group_id: this.resourceId,
          }
        })
        .then((response) => {
          this.$emit('delete', this.index)
          this.dropdownMenuShown = false
          this.showNotification({type: response.data.status, message: response.data.message})
          this.$emit('close')
        })
        .catch((error) => {
            this.showNotification({type: error.response.data.status, message: error.response.data.message})
          this.$emit('close')
        })
      this.dropdownMenuShown = false
    },
    toggleStatusMenu () {
      this.statusMenuShown = !this.statusMenuShown
    },
    closeStatusMenu () {
      this.statusMenuShown = false
    },
    changeStatus (id) {
      axios.put('/tasks/' + this.task.id + '/statuses/' + id, {
          group_type: this.resourceType,
          group_id: this.resourceId,
        })
        .then((response) => {
          this.statusMenuShown = false
          this.$emit('status-change', {index: this.index, task: response.data.task})
          this.showNotification({type: response.data.status, message: response.data.message})
        })
        .catch((error) => {
          this.statusMenuShown = false
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    editTask () {
      this.closeTaskDetails(true)
    },
    showColumn (column) {
      this.activeColumn = column
    }
  }
}
</script>
