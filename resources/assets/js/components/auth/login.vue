<template>
    <div class="bg-white container mx-auto shadow-lg mt-32 flex flex-row w-2/5 justify-between">
        <div class="w-1/2 text-center bg-teal-light p-4">
            <p class="text-white font-bold text-4xl pt-8 mt-8">GOODWORK</p>
            <p class="text-white text-xl pt-4">Sane way to manage work</p>
        </div>
        <div class=""></div>
        <div class="w-1/2 p-8">
            <form role="form" method="POST" :action="url">
                <input type="hidden" name="_token" :value="token">
                <p class="py-4">
                    <input id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" name="email" placeholder="E-mail">
                    <span class="" v-if="errors">{{ errors.email }}</span>
                </p>
                <p class="py-4">
                    <input id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="password" name="password" placeholder="Password">
                    <span class="" v-if="errors">{{ errors.password }}</span>
                </p>
                <p class="py-4 text-grey">
                    <input type="checkbox" name="remember">
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
            errors: errors,
            url: url
        })
    }
</script>
