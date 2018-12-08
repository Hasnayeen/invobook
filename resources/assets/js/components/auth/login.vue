<template>
<div class="bg-white container mx-4 md:mx-auto shadow-lg mt-32 flex flex-row md:w-3/5 xxl:w-2/5 justify-between">
  <div class="w-1/2 text-center bg-teal-light p-4 hidden md:block">
    <p class="text-white font-bold text-4xl pt-8 mt-8">GOODWORK</p>
    <p class="text-white text-xl pt-4">Sane way to manage work</p>
  </div>
  <div class=""></div>
  <div class="w-full md:w-1/2 p-8">
    <form method="POST" :action="url">
      <input type="hidden" name="_token" :value="token">
      <p class="py-4">
        <input id="email" aria-label="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" name="email" placeholder="E-mail" :value="oldEmail">
        <span class="text-red-light block pt-2" v-if="errors.email">{{ errors.email[0] }}</span>
      </p>
      <p class="py-4">
        <input id="password" aria-label="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="password" placeholder="Password">
      </p>
      <p class="py-4 text-grey">
        <input type="checkbox" aria-label="remember me" name="remember">
        Remember Me
      </p>
      <p class="py-4">
        <button type="submit" class="btn">LOGIN</button>
      </p>
      <a href="password/reset" class="no-underline text-teal text-sm">Forgot Your Password?</a>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    token: Laravel.csrfToken,
    errors,
    oldEmail,
    url
  })
}
</script>
