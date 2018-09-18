<template>
<div class="bg-white container mx-4 md:mx-auto shadow-lg mt-32 flex flex-row md:w-3/5 xxl:w-2/5 justify-between">
    <div class="w-1/2 text-center bg-teal-light p-4 hidden md:block">
        <p class="text-white font-bold text-4xl pt-8 mt-8">GOODWORK</p>
        <p class="text-white text-xl pt-4">Sane way to manage work</p>
    </div>
    <div class=""></div>
    <div class="w-full md:w-1/2 p-8">
        <form role="form" method="POST" :action="url">
            <input type="hidden" name="_token" :value="token">
            <div class="">
                <div class="card-content">
                    <div class="content">
                        <p class="py-4">
                            <input id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" name="name" placeholder="Full Name">
                            <span class="text-red-light block pt-2" v-if="errors">{{ errors.name }}</span>
                        </p>
                        <p class="py-4">
                            <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" name="username" placeholder="Username">
                            <span class="text-red-light block pt-2" v-if="errors">{{ errors.username }}</span>
                        </p>
                        <p class="py-4">
                            <input id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" name="email" placeholder="E-mail">
                            <span class="text-red-light block pt-2" v-if="errors">{{ errors.email }}</span>
                        </p>
                        <p class="py-4">
                            <input id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="password" placeholder="Password">
                            <span class="text-red-light block pt-2" v-if="errors">{{ errors.password }}</span>
                        </p>
                        <p class="py-4">
                            <input id="password_confirmation" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="password_confirmation" placeholder="Confirm Your Password">
                            <span class="text-red-light block pt-2" v-if="errors">{{ errors.password_confirmation }}</span>
                        </p>
                        <p class="py-4">
                            <button type="submit" class="btn">Register</button>
                        </p>
                    </div>
                </div>
                <footer class="card-footer">
                </footer>
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
