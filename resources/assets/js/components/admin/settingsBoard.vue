<template>
<div :class="{'hidden': (activeTab != 'settings')}" class="w-full mb-8">

  <div class="container mx-4 md:mx-auto py-8 bg-white rounded shadow text-center text-grey-darker">
    <div class="pb-4 text-3xl">
      Settings
    </div>

  </div>
</div>  
</template>

<script>

export default {
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  data: () => ({

  }),
  created () {
  },
  methods: {

  }
}
</script>
