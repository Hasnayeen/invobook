<template>
	<div class="relative bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4">
		<span @click="toggleMenu" class="w-full h-8 pr-4 pt-2">
			<i class="fa fa-ellipsis-h float-right text-grey-darker cursor-pointer"></i>
		</span>
		<div v-if="dropdownMenuShown" class="absolute rounded shadow-lg pin-r pin-t mt-4 mr-2 p-4 text-grey-darker">
			<div @click="deleteOffice(office)" class="cursor-pointer">
				Delete
			</div>
		</div>
		<div class="w-full p-2 h-24 flex flex-col justify-end">
			<a class="text-pink text-xl no-underline" :href="office.url">{{ office.name }}</a>
		</div>
		<span class="text-grey text-sm w-full px-2 h-16 self-start">{{ office.description }}</span>
		<div class="border-t w-full h-16 flex flex-row justify-around items-center px-2">
			<a v-for="(member, index) in office.members" :key="index" v-if="index < 5" :href="'/users/' + member.username">
				<img :src="generateUrl(member.avatar)" class="rounded-full w-8 h-8 mr-1">
			</a>
			<span v-if="office.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ office.members.length - 5 }}+</span>
			<span v-if="office.members.length == 0" class="text-grey-dark text-center">No members yet</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['details'],
		data() {
			return {
				office: this.details,
				dropdownMenuShown: false
			}
		},
		methods: {
			toggleMenu() {
				this.dropdownMenuShown = ! this.dropdownMenuShown
			},
			deleteOffice(office) {
				axios.delete(`/offices/${office.id}`)
					.then((response) => {
						this.$emit('deleted')

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

