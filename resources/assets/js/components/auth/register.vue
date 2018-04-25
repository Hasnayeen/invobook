<template>
<div class="column is-6 is-offset-3 login-form">
    <form role="form" method="POST" :action="url">
        <input type="hidden" name="_token" :value="token">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title title has-text-centered">
                Register
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                    <p class="control">
                        <input id="name" class="input" type="text" name="name" placeholder="Full Name">
                        <span class="help is-danger" v-if="errors">{{ errors.name }}</span>
                    </p>
                    <p class="control">
                        <input id="username" class="input" type="text" name="username" placeholder="Username">
                        <span class="help is-danger" v-if="errors">{{ errors.username }}</span>
                    </p>
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
                        <button type="submit" class="button is-primary is-fullwidth">Register</button>
                    </p>
                </div>
            </div>
            <footer class="card-footer">
            </footer>
        </div>
    </form>
</div>
</template>

<script>
    export default {
      data: () => ({
        token: Laravel.csrfToken,
        errors: errors,
        url: url
      })
    }
</script>
