<template>
<div>
  <form method="post" enctype="multipart/form-data">
    <input type="file" name="avatar" id="avatar" accept="image/*" @change="selectFile" class="hidden">
    <button onclick="document.getElementById('avatar').click(); return false;" 
      class="bg-transparent text-gray-800 hover:text-teal-500 py-2 px-4 border border-gray-400 hover:border-teal-500 rounded">
      {{ 'Change Your Avatar' | localize }}
    </button>
  </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    user: user
  }),

  methods: {
    ...mapActions([
      'showNotification',
    ]),
    selectFile (e) {
      if (!e.target.files.length) return
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onload = e => {
        this.$emit('image-loaded', e.target.result)
      }

      this.uploadImage(file)
    },
    uploadImage (file) {
      let data = new FormData()
      data.append('avatar', file)
      axios.post('/users/' + this.user.username + '/avatar', data)
        .then((response) => {
          this.showNotification({type: response.data.status, message: response.data.message})
          this.user.avatar = response.data.avatar
        })
        .catch((error) => {
          this.showNotification({type: error.response.data.status, message: error.response.data.message})
        })
    }
  }
}
</script>
