<template>
	<div class="relative bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4">
		<span @click="toggleMenu" class="w-full h-8 pr-4 pt-2" v-click-outside="hideMenu">
			<font-awesome-icon :icon="faEllipsisH"
				class="float-right text-grey-darker cursor-pointer">
			</font-awesome-icon>
		</span>
		<div v-if="dropdownMenuShown" class="absolute rounded shadow-lg pin-r pin-t mt-8 mr-2 p-3 text-grey-darker hover:bg-grey-light">
			<div @click="deleteOffice(office)" class="cursor-pointer">
				Delete
			</div>
		</div>
		<div class="w-full p-2 h-24 flex flex-col justify-end">
			<a class="text-pink text-xl no-underline" :href="'/offices/' + office.id">{{ office.name }}</a>
		</div>
		<span class="text-grey text-sm w-full px-2 h-16 self-start">{{ office.description }}</span>
		<div class="border-t w-full h-16 flex flex-row justify-start items-center px-2">
			<a v-for="(member, index) in office.members" :key="index" v-if="index < 5" :href="'/users/' + member.username" class="px-1">
				<img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8">
			</a>
			<span v-if="office.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ office.members.length - 5 }}+</span>
			<span v-if="office.members.length == 0" class="text-grey-dark text-center">No members yet</span>
		</div>
	</div>
</template>

<script>
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'

export default {
  props: ['details', 'index'],
  data () {
    return {
      office: this.details,
      dropdownMenuShown: false,
      faEllipsisH
    }
  },
  methods: {
    toggleMenu () {
      this.dropdownMenuShown = !this.dropdownMenuShown
    },
    hideMenu () {
      this.dropdownMenuShown = false
    },
    deleteOffice (office) {
      axios.delete(`/offices/${office.id}`)
        .then((response) => {
          this.$emit('deleted', this.index)

          this.dropdownMenuShown = false

          EventBus.$emit('notification', response.data.message, response.data.status)
        })
        .catch((error) => {
          this.dropdownMenuShown = false

          EventBus.$emit('notification', error.response.data.message, error.response.data.status)
        })
    }
  }
}
</script>

