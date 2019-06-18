<template>
  <div class="">
    <template v-if="user.id === authUser.id">
      <div class="flex flex-col mx-4 md:mx-auto my-8 max-w-xl">
        <div class="bg-white rounded shadow flex flex-row text-center text-gray-800">
          <div @click="activateTab('profile')" class="w-1/2 p-4" :class="[(activeTab === 'profile') ? 'text-white bg-teal-400 rounded-l' : 'cursor-pointer']">
            {{ 'Profile' | localize }}
          </div>
          <div @click="activateTab('account')" class="w-1/2 p-4" :class="[(activeTab === 'account') ? 'text-white bg-teal-400 rounded-r' : 'cursor-pointer']">
            {{ 'Account' | localize }}
          </div>
        </div>
        <account v-if="activeTab === 'account'" :user="authUser"></account>
        <own v-if="activeTab === 'profile'" :user="authUser" :timezones="timezones" :locales="locales"></own>
      </div>
    </template>
    <other v-else :user="user"></other>
  </div>
</template>

<script>
import Account from './account'
import Own from './own'
import Other from './other'
export default {
  components: {Account, Own, Other},
  props: ['user', 'timezones', 'locales'],
  data: () => ({
    activeTab: 'profile',
    authUser: user
  }),
  methods: {
    activateTab (tab) {
      this.activeTab = tab
    }
  }
}
</script>
