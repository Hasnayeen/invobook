<template>
<div>
    <div class="absolute container mx-auto w-1/3 bg-white rounded shadow-lg z-10" style="top: 10vh;left: 0;right: 0;">
        <div class="p-4">
            <div class="p-4">
                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold text-center text-lg mb-4" for="user">
                    Add Member
                </label>
                <div class="flex flex-row items-center">
                    <select v-model="newMember" class="w-5/6 block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="user">
                        <option selected disabled hidden>Select User to Add</option>
                        <template v-for="user in users">
                            <option :value="user.id" class="my-2 text-lg">{{ user.name }}</option>
                        </template>
                    </select>
                    <i class="w-1/6 fa fa-chevron-down pointer-events-none flex items-center text-grey-darker -ml-8"></i>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-between py-4 px-8 bg-grey-lighter rounded">
            <button @click="closeAddMemberForm" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
            <button @click="addMember" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-4 px-8 rounded">Add</button>
        </div>
    </div>
    <div class="h-screen w-screen fixed pin bg-grey-darkest opacity-25"></div>
</div>
</template>

<script>
export default {
  props: ['project'],
  data: () => ({
    users: [],
    newMember: null
  }),
  created () {
    axios.get('/users')
      .then((response) => {
        this.users = response.data.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    addMember () {
      axios.post('/projects/' + this.project.slug + '/members', {
        user_id: this.newMember
      })
        .then((response) => {
          if (response.data.status == 'success') {
            this.$emit('addMember', response.data.user)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    closeAddMemberForm () {
      this.$emit('close')
    }
  }
}
</script>
