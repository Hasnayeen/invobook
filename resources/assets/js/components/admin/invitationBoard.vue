<template>
<div :class="{'hidden': (activeColumn !== 'invitations')}" class="bg-gray-100 rounded-b">
  <div class="text-gray-700 text-xl font-medium px-8 pt-6">{{ 'Create a shareable invite link' | localize }}</div>
  <div class="text-gray-700 text-sm px-8 pb-6">{{ 'User can register using this link and will be assigned the selected role' | localize }}</div>
  <div class="bg-white p-8 pt-4 rounded-b">
    <div class="py-4 rounded-b">
      <div class="inline text-lg text-gray-700">{{ 'Select Role' | localize }}:</div>
      <template v-for="role in roles">
        <div @click="selectRole(role)" class="rounded inline border p-3 mx-2 relative cursor-pointer"
          :class="[selectedRole === role.slug ? 'bg-indigo-100 border-indigo-400 shadow-md' : 'bg-gray-100 border-gray-400']">
          <span class="cursor-pointer">{{ role.name }}</span>
        </div>
      </template>
    </div>
    <div class="flex flex-row items-center py-4">
      <label for="datepicker" class="text-gray-700 text-lg pr-4">{{ 'Expiry Date' | localize }} <span class="text-sm">{{ '(optional)' | localize }}</span>:</label>
      <datepicker v-model="expiryDate" :placeholder="'Select Date' | localize" ref="dueOnDate" :disabled-dates="disabledDates" name="datepicker" format="yyyy-MM-dd" input-class="appearance-none bg-gray-200 text-gray-800" wrapper-class="appearance-none block w-80 bg-gray-200 text-gray-800 border border-gray-200 rounded py-3 px-4"></datepicker>
    </div>
    <div class="flex flex-row items-center pt-4">
      <input :placeholder="'click generate to create link' | localize" :value="shareableLink" type="text" name="" id="shareableLink" class="border-gray-500 border bg-gray-200 text-indigo-700 w-96 px-4 py-3 rounded-l" readonly>
      <div v-if="shareableLink" @click="copyToClipboard" class="px-5 py-3 border-t border-b border-gray-500 cursor-pointer" :title="'COPY' | localize">
        <font-awesome-icon :icon="faCopy" class="text-indigo-500 text-xl"></font-awesome-icon>
      </div>
      <div v-if="!shareableLink" class="px-5 py-3 border-t border-b bg-gray-200 border-gray-500">
        <font-awesome-icon :icon="faCopy" class="text-gray-400 text-xl"></font-awesome-icon>
      </div>
      <button @click="generateLink" class="bg-indigo-500 border-indigo-500 border-2 text-white text-xl font-medium px-4 py-2 rounded-r inline">
        {{ 'Generate' | localize }}
      </button>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Datepicker from 'vuejs-datepicker'
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy'

export default {
  components: {Datepicker},
  props: {
    activeColumn: {
      required: true,
      type: String
    }
  },

  data: () => ({
    roles: [],
    shareableLink: '',
    selectedRole: '',
    roleId: 0,
    expiryDate: '',
    disabledDates: {
      to: new Date()
    },
    faCopy,
  }),

 created () {
    if (this.roles.length < 1) {
      axios.get('/roles')
        .then((response) => {
          this.roles = response.data.roles
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    selectRole (role) {
      this.selectedRole = role.slug
      this.roleId = role.id
      axios.get('/register/invite-link', {
          params: {
            role_id: this.roleId,
          }
        })
        .then((response) => {
          this.shareableLink = response.data.link
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    },
    copyToClipboard () {
      var copyText = document.getElementById("shareableLink")
      copyText.focus()
      copyText.select()
      document.execCommand("copy")
      this.showNotification({type: 'Link copied to clipboard', message: 'success'})
    },
    generateLink () {
      if (this.roleId === 0) {
        this.showNotification({type: 'A role must be selected', message: 'error'})
        return false
      }
      axios.post('/register/invite-link', {
          role_id: this.roleId,
          expiry_date: luxon.DateTime.fromJSDate(this.expiryDate).toFormat('y-L-d')
        })
        .then((response) => {
          this.shareableLink = response.data.link
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
}
</script>
