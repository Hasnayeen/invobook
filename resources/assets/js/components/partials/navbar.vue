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
           
            <a class="nav-item is-tab avatar-link  is-base-darker" href="#" @click="showMenus"><img :src="avatar">{{ user.name }} <i class="fa fa-angle-down" aria-hidden="true"></i></a>
            <ul class="sub-nav-item " v-bind:class="{ 'is-hidden-tablet': hideSubMenu }">
                <li><a href="#">Your profile</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Settings</a></li>
                <li class="separator-menu"><a :href="url.logout" @click="logoutUser">Logout</a></li>
            </ul>
            
            <form id="logout-form" :action="url.logout" method="POST" style="display: none;">
                <input type="hidden" name="_token" :value="token">
            </form>
        </div>
    </nav>
</template>

<script> //avatar.jpg
    export default {
        data: () => ({
            user: navbar.user,
            token: Laravel.csrfToken,
            url: navbar.navUrl,
            hideSubMenu: true,
            avatar: ''
        }),
        methods: {
            logoutUser(event){
                event.preventDefault();
                document.getElementById('logout-form').submit();
            },
            showMenus(event){
                event.preventDefault();
                event.stopPropagation();
                this.hideSubMenu = !this.hideSubMenu;
            }
        },
        created(){
            if( this.user.avatar == null ){
                this.avatar = '/image/avatar.jpg';
            }else{
                this.avatar = this.user.avatar;
            }
        },
        mounted(){
            var thisNav = this;
            document.addEventListener("click", function(){
                if( thisNav.hideSubMenu == false ){
                    thisNav.hideSubMenu = true;
                }
            });
        }
    }
</script>
