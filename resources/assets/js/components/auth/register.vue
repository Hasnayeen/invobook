<template>
<div class="md:bg-white container md:mx-4 md:mx-auto md:shadow-lg rounded md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between">
  <div class="md:w-1/2 text-center px-8 py-4 md:block">
    <div class="text-teal-500 font-bold text-4xl md:pt-8">GOODWORK</div>
    <p class="text-teal-500 text-xl"> Sensible Approach to Work & Collaboration for Software Teams </p>
    <img src="/image/register.svg" alt="work desk" class="pt-16 hidden md:block">
  </div>
  <div class=""></div>
  <div class="w-full md:bg-indigo-100 md:w-1/2 p-8">
    <form role="form" method="POST" :action="url">
      <input type="hidden" name="_token" :value="token">
      <div class="">
        <p class="py-4">
          <input id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="name" placeholder="Full Name">
          <span class="text-red-400 block pt-2" v-if="errors">{{ errors.name }}</span>
        </p>
        <p class="py-4">
          <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="username" placeholder="Username">
          <span class="text-red-400 block pt-2" v-if="errors">{{ errors.username }}</span>
        </p>
        <p class="py-4">
          <input id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="text" name="email" placeholder="E-mail">
          <span class="text-red-400 block pt-2" v-if="errors">{{ errors.email }}</span>
        </p>
        <p class="py-4">
          <input id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800" type="password" name="password" placeholder="Password">
          <span class="text-red-400 block pt-2" v-if="errors">{{ errors.password }}</span>
        </p>
        <p class="py-4">
          <button type="submit" class="bg-teal-500 hover:bg-teal-600 text-white text-xl font-medium py-2 px-4 rounded">Register</button>
        </p>
      </div>
    </form>
  </div>
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
