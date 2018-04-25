<template>
    <div class="flex flex-col bg-white mx-auto my-8 max-w-md shadow rounded">
        <own v-if="user.id === authUser.id" :user="authUser"></own>
        <other v-else :user="user"></other>
    </div>
</template>

<script>
import Own from './own'
import Other from './other'
export default {
  components: {Own, Other},
  props: ['user'],
  data: () => ({
    authUser: navbar.user
  })
}
</script>
