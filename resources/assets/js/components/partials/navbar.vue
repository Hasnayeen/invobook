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
            <div class="nav-menu-item">
                <a class="nav-item is-tab notification-link" href="#" @click="showNotification" v-bind:class="[hideNotificationList == false ? 'active' : '']">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                    Notification
                    <span class="has-notification"></span>
                </a>
                <div class="notification-box" v-bind:class="{ 'is-hidden-tablet': hideNotificationList }">
                    <div class="card">
                        <div class="card-content-item">
                            <a href="#">
                                <div class="icon">
                                    <i class="fa fa-user-circle-o"></i>
                                </div>
                                <div class="notify-content">
                                    <strong>John Doe</strong> created a new task <br>
                                    <span>15 minutes ago</span>
                                </div>
                            </a>
                        </div> <!-- ./card-content-item -->
                        
                        <div class="card-content-item">
                            <a href="#">
                                <div class="icon">
                                    <i class="fa fa-user-circle-o"></i>
                                </div>
                                <div class="notify-content">
                                    <strong>John Doe</strong> created a new task <br>
                                    <span>15 minutes ago</span>
                                </div>
                            </a>
                        </div> <!-- ./card-content-item -->
                        
                        <div class="card-content-item">
                            <a href="#">
                                <div class="icon">
                                    <i class="fa fa-user-circle-o"></i>
                                </div>
                                <div class="notify-content">
                                    <strong>John Doe</strong> created a new task <br>
                                    <span>15 minutes ago</span>
                                </div>
                            </a>
                        </div> <!-- ./card-content-item -->
                        
                    </div> <!-- ./card -->
                    <a href="#">View All</a>
                </div>
            </div> <!-- ./nav-menu-item -->

            <div class="nav-menu-item">
                <a class="nav-item is-tab avatar-link is-base-darker" href="#" @click="showMenus" v-bind:class="[hideSubMenu == false ? 'active' : '']">
                    <img :src="avatar">{{ user.name }} <i class="fa fa-angle-down" aria-hidden="true"></i>
                </a>
                <ul class="sub-nav-item " v-bind:class="{ 'is-hidden-tablet': hideSubMenu }">
                    <li><a href="#">Your profile</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Settings</a></li>
                    <li class="separator-menu"><a :href="url.logout" @click="logoutUser">Logout</a></li>
                </ul>            
                <form id="logout-form" :action="url.logout" method="POST" style="display: none;">
                    <input type="hidden" name="_token" :value="token">
                </form>
            </div> <!-- ./nav-menu-item -->
        </div> <!-- ./nav-right -->
    </nav>
</template>

<script> //avatar.jpg
    export default {
        data: () => ({
            user: navbar.user,
            token: Laravel.csrfToken,
            url: navbar.navUrl,
            hideSubMenu: true,
            avatar: '',
            hideNotificationList: true
        }),
        methods: {
            logoutUser(event){
                event.preventDefault();
                document.getElementById('logout-form').submit();
            },
            showMenus(event){
                event.preventDefault();
                event.stopPropagation();
                this.hideNotificationList = true; //Hide Notification on click
                this.hideSubMenu = !this.hideSubMenu;
            },
            showNotification(event){
                event.preventDefault();
                event.stopPropagation();
                this.hideSubMenu = true; //Hide profile sub menu on click
                this.hideNotificationList = !this.hideNotificationList;
            }
        },
        created(){
            if( this.user.avatar == null || this.user.avatar == '' ){
                this.avatar = '/image/avatar.jpg'; //default avatar
            }else{
                this.avatar = this.user.avatar;
            }
        },
        mounted(){
            var thisNav = this;
            document.addEventListener("click", function(){ //Hide sub menus on body click
                thisNav.hideSubMenu = true;
                thisNav.hideNotificationList = true;
            });
        }
    }
</script>
