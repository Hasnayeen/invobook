<template>
<div class="md:bg-white container md:mx-4 md:mx-auto md:shadow-lg rounded md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between">
  <div class="md:w-1/2 text-center px-8 py-4 md:block">
    <p class="text-teal-500 font-bold text-4xl md:pt-8">GOODWORK</p>
    <p class="text-teal-500 text-xl"> Sensible Approach to Work & Collaboration for Software Teams </p>
    <img src="/image/register.svg" alt="work desk" class="pt-8 hidden md:block">
  </div>
  <div class=""></div>
  <div class="w-full md:bg-indigo-100 md:w-1/2 p-8">
    <form method="POST" :action="url">
      <input type="hidden" name="_token" :value="token">
      <p class="py-4">
        <input id="email" aria-label="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="email" placeholder="E-mail" :value="oldEmail" autofocus>
        <span class="text-red-400 block pt-2" v-if="errors.email">{{ errors.email[0] }}</span>
      </p>
      <p class="py-4">
        <input id="password" aria-label="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="password" name="password" placeholder="Password">
      </p>
      <p class="py-4 text-gray-500">
        <label>
          <input type="checkbox" aria-label="remember me" name="remember">
          Remember Me
        </label>
      </p>
      <p class="py-4">
        <button type="submit" class="bg-teal-500 hover:bg-teal-600 text-white text-xl font-medium py-2 px-4 rounded">LOGIN</button>
      </p>
      <a href="password/reset" class="no-underline text-teal-500 text-sm">Forgot Your Password?</a>
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
