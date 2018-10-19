<template>
<div class="column is-4 is-offset-4">
  <form role="form" method="POST" action="password/email">
    <input type="hidden" name="_token" :value="token">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title title has-text-centered">
        Reset Password
        </p>
      </header>
      <div class="card-content">
        <div class="notification is-primary"  v-if="status">{{ status }}</div>
        <div class="content">
          <p class="control">
            <input id="email" class="input" type="text" name="email" placeholder="E-mail">
            <span class="help is-danger" v-if="errors">{{ errors.email }}</span>
          </p>
          <p class="control">
            <button type="submit" class="button is-primary is-fullwidth">Send Password Reset Link</button>
          </p>
        </div>
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
  data: () => ({
    token: Laravel.csrfToken,
    errors: errors,
    status: false
  }),
  mounted () {
    this.status = (status !== 'null') ? status : false
  }
}
</script>
