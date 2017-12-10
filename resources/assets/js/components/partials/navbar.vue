<template>
    <nav class="bg-white flex flex-row justify-between h-12 px-4 shadow">
        <a class="text-teal text-2xl no-underline self-center" :href="url.site">
            GOODWORK
        </a>

        <div class="flex flex-row border-l">
            <div class="px-4 self-center">
                <a class="text-teal-light text-base no-underline" href="#" @click="showNotification" v-bind:class="[hideNotificationList == false ? 'active' : '']">
                    <i class="fa fa-bell-o font-bold" aria-hidden="true"></i>
                </a>
                <div class="hidden absolute" v-bind:class="{ 'is-hidden-tablet': hideNotificationList }">
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
                        
                    </div> <!-- ./card -->
                    <a href="#">View All</a>
                </div>
            </div>

            <div class="px-4 border-l flex items-center cursor-pointer" @click="showMenus">
                <img class="w-8 rounded-full mr-2" :src="avatar">
                <span class="text-grey-darker text-base no-underline">
                    {{ user.name }}
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                <div id="profile-menu" class="hidden absolute bg-white w-32 pin-r mr-2 py-2 shadow-lg rounded" style="top:3.5rem;">
                    <a class="list-reset px-4 py-2 text-grey-dark no-underline block" :href="profileUrl">Your profile</a>
                    <a class="list-reset px-4 py-2 text-grey-dark no-underline block" href="#">Help</a>
                    <a class="list-reset px-4 py-2 text-grey-dark no-underline block" href="#">Settings</a>
                    <span class="block border-t"></span>
                    <a class="list-reset px-4 py-2 text-grey-dark no-underline block" :href="url.logout" @click="logoutUser">Logout</a>
                </div>            
                <form id="logout-form" :action="url.logout" method="POST" style="display: none;">
                    <input type="hidden" name="_token" :value="token">
                </form>
            </div>
        </div> <!-- ./nav-right -->
    </nav>
</template>

<script>
    export default {
        data: () => ({
            user: navbar.user,
            token: Laravel.csrfToken,
            url: navbar.navUrl,
            avatar: '',
            hideNotificationList: true,
            profileUrl: navbar.navUrl.site + '/users/' + navbar.user.id
        }),
        methods: {
            logoutUser(event){
                event.preventDefault();
                document.getElementById('logout-form').submit();
            },
            showMenus(event){
                document.getElementById('profile-menu').classList.remove('hidden');
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
