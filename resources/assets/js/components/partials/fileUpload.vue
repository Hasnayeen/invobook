<template>
    <div>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" id="avatar" accept="image/*" @change="selectFile" class="hidden">
            <button onclick="document.getElementById('avatar').click(); return false;" class="bg-transparent text-grey-darker hover:text-teal py-2 px-4 border border-grey-light hover:border-teal rounded">Change Your Avatar</button>
        </form>
    </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
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
        .then(res => {
          console.log(res)
        })
        .catch(err => {

        })
    }
  }
}
</script>
