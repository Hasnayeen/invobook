<template>
    <messages type="office" :id="id" :office="office"></messages>
</template>

<script>
import messages from './../partials/messages'
export default {
  props: ['id', 'office'],
  components: {
    messages
  }
}
</script>