<template>
<div class="column is-4 is-offset-4">
  <form role="form" method="POST" action="password/reset">
    <input type="hidden" name="_token" :value="csrfToken">
    <input type="hidden" name="token" :value="token">
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
            <input id="password" class="input" type="password" name="password" placeholder="Password">
            <span class="help is-danger" v-if="errors">{{ errors.password }}</span>
          </p>
          <p class="control">
            <input id="password_confirmation" class="input" type="password" name="password_confirmation" placeholder="Confirm Your Password">
            <span class="help is-danger" v-if="errors">{{ errors.password_confirmation }}</span>
          </p>
          <p class="control">
            <button type="submit" class="button is-primary is-fullwidth">Reset Password</button>
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
    csrfToken: Laravel.csrfToken,
    token: token,
    errors: errors,
    status: false
  }),
  mounted () {
    this.status = (status !== 'null') ? status : false
  }
}
</script>
