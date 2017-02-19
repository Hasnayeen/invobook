<template>
    <nav class="nav has-shadow">
        <div class="nav-left">
        <a class="nav-item is-base-darker" :href="url.site">
        GOODWORK
        </a>
        </div>
        <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
        </span>
        <div class="nav-right nav-menu">
           
            <a class="nav-item is-tab avatar-link  is-base-darker" href="#" @click="showMenus"><img :src="avater">{{ user.name }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul v-show="showSubMenu" class="sub-nav-item">
                <li><a href="#">Settings</a></li>
                <li><a :href="url.logout" @click="logoutUser">Logout</a></li>
            </ul>
            
            <form id="logout-form" :action="url.logout" method="POST" style="display: none;">
                <input type="hidden" name="_token" :value="token">
            </form>
        </div>
    </nav>
</template>

<script> //avater.jpg
    export default {
        data: () => ({
            user: data.user,
            token: Laravel.csrfToken,
            url: data.navUrl,
            showSubMenu: false,
            avater: ''
        }),
        methods: {
            logoutUser(event){
                event.preventDefault();
                document.getElementById('logout-form').submit();
            },
            showMenus(event){
                event.preventDefault();
                this.showSubMenu = !this.showSubMenu;
            }
        },
        created(){
            if( this.user.avater == null ){
                this.avater = '/image/avater.jpg';
            }else{
                this.avater = this.user.avater;
            }
        }
    }
</script>
