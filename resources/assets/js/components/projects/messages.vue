<template>
    <messages type="project" :id="id" :project="project"></messages>
</template>

<script>
import messages from './../partials/messages'
export default {
  props: ['id', 'project'],
  components: {
    messages
  }
}
</script>