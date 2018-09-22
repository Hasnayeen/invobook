<template>
<div>
  <div :class="{'hidden': !taskDetailsShown}" class="absolute container mx-auto md:w-3/4 lg:2/3 xl:w-1/2 xxl:w-2/5 bg-white rounded shadow-lg z-10 pt-4 pb-8" style="top: 12vh;left: 0;right: 0;">
    <div class="flex flex-row justify-between px-8 relative">
      <div @click="closeTaskDetails" class="cursor-pointer">
        <i class="fas fa-arrow-left text-base text-grey-dark"></i>
      </div>
      <div @click="toggleMenu" class="cursor-pointer">
        <i class="fas fa-ellipsis-h text-base text-grey-dark"></i>
      </div>
      <div v-if="dropdownMenuShown" class="absolute rounded shadow-lg pin-r pin-t mt-4 mr-4 p-4 text-grey-darker">
        <div @click="deleteTask" class="cursor-pointer">
          Delete
        </div>
      </div>
    </div>
    <div class="text-2xl text-grey-darker text-center font-semibold px-8 py-4">
      {{ task.title }}
    </div>
    <div class="flex flex-row flex-wrap justify-between pt-4">
      <div>
        <div class="text-sm text-grey-dark px-8">
          Assignee
        </div>
        <div class="px-8 py-2">
          <a :href="'/users/' + task.user.username">
            <img v-if="task.assigned_to" :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8 mx-2 self-start">
          </a>
        </div>
      </div>
      <div class="text-center">
        <div class="text-sm text-grey-dark px-8">
          Due Date
        </div>
        <div class="px-8 py-2 text-grey-darkest">
          {{ task.due_on }}
        </div>
      </div>
      <div class="text-center">
        <div class="text-sm text-grey-dark px-8">
          Status
        </div>
        <div class="px-8 py-2 text-green-dark">
          In Progress
        </div>
      </div>
      <div class="text-center">
        <div class="text-sm text-grey-dark px-8">
          Related To
        </div>
        <div class="px-8 py-2" :class="[task.related_to ? 'text-blue underline' : 'text-grey-dark']">
          {{ task.related_to ? task.related_to : 'None' }}
        </div>
      </div>
    </div>
    <div class="text-sm text-grey-dark px-8 pt-4">
      Details
    </div>
    <div class="text-grey-darkest text-lg px-8 py-2">
      {{ task.notes }}
    </div>
    <div class="text-sm text-grey-dark px-8 pt-4">
      Tags
    </div>
    <div class="flex flex-row justify-start px-8 py-4 -ml-2">
      <div class="bg-blue-light px-2 py-1 rounded-full text-white text-sm mx-2">frontend</div>
      <div class="bg-blue-light px-2 py-1 rounded-full text-white text-sm mx-2">backend</div>
    </div>
    <div class="flex flex-row justify-around bg-grey-lighter py-4 mt-4 text-grey-dark text-center">
      <div class="w-1/2 border-teal border-b-2 pb-4 -mb-4">
        Comments
      </div>
      <div class="w-1/2">
        Progress
      </div>
    </div>
    <div class="px-8 pt-8">
      <div class="flex flex-row items-center text-grey-dark">
        <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mx-2 self-start">
        <div class="px-4">
          Olen Ulrich
        </div>
        <div class="px-4">
          12:34 am on Aug 3, 2018
        </div>
      </div>
    </div>
    <div class="px-8">
      <div class="ml-16 border-grey-light border rounded text-grey-darkest p-4">
        <span class="font-semibold text-blue">@Nehal</span> Should it be auto-filling component?
      </div>
    </div>
    <div class="px-8 pt-8">
      <div class="flex flex-row items-center text-grey-dark">
        <img :src="generateUrl(task.user.avatar)" class="rounded-full w-8 h-8 mx-2 self-start">
        <div class="px-4">
          Nehal Hasnayeen
        </div>
        <div class="px-4">
          12:34 am on Aug 3, 2018
        </div>
      </div>
    </div>
    <div class="px-8">
      <div class="ml-16 border-grey-light border rounded text-grey-darkest p-4">
        <span class="font-semibold text-blue">@Olan</span> yes please, make it auto-complete
      </div>
    </div>
  </div>
  <div @click="closeTaskDetails" :class="{'hidden': !taskDetailsShown}" class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
export default {
  props: {
    taskDetailsShown: {
      required: true,
      type: Boolean
    },
    task: {
      required: true,
      type: Object
    },
    index: {
      required: true,
      type: Number
    }
  },
  data: () => ({
    dropdownMenuShown: false
  }),
  methods: {
    closeTaskDetails () {
      this.dropdownMenuShown = false
      this.$emit('close')
    },
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    deleteTask () {
      axios.delete('/tasks/' + this.task.id)
        .then((response) => {
          this.$emit('delete', this.index)
          this.dropdownMenuShown = false
          EventBus.$emit('notification', response.data.message, response.data.status)
          this.$emit('close')
        })
          this.dropdownMenuShown = false
        .catch((error) => {
          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
          this.$emit('close')
        })
    }
  }
}
</script>
