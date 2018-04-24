<template>
    <div :class="{'hidden': (activeTab != 'teams')}">

        <!-- Create Team Form -->
        <div :class="{'hidden': !showCreateTeamForm}">
            <div class="absolute pin opacity-75 bg-grey"></div>
            <div id="create-project-form" class="fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded">
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" 
                    	type="text" placeholder="Name" v-model="name">
                    <span class="hidden"></span>
                </p>
                <p class="py-2">
                    <input class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker" 
                    	type="text" placeholder="Description" v-model="description">
                    <span class="hidden"></span>
                </p>
                <div class="flex flex-row justify-between pt-8 bg-grey-lighter rounded">
                    <button @click="closeCreateTeamModal" class="text-red-lighter hover:font-bold hover:text-red-light">Cancel</button>
                    <button @click="createNewTeam" class="bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded">Create</button>
                </div>
            </div>
        </div>

    	<div class="flex flex-row flex-wrap justify-center">
    		<div class="bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer" 
    			@click="openCreateTeamModal">
                <i class="fa fa-plus text-grey-dark text-4xl"></i>
                <span class="text-grey-darker pt-4">Add a new team</span>
            </div>

			<div class="bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4" 
				v-for="team in teams">
                <span class="w-full h-8 pr-4 pt-2">
                    <i class="fa fa-ellipsis-h float-right text-grey-darker cursor-pointer"></i>
                </span>
                <div class="w-full p-2 h-24 flex flex-col justify-end">
                    <a class="text-pink text-xl no-underline" :href="team.url">{{ team.name }}</a>
                </div>
                <span class="text-grey text-sm w-full px-2 h-16 self-start">{{ team.description }}</span>
                <div class="border-t w-full h-16 flex flex-row justify-around items-center px-2">
                    <a v-for="(member, index) in team.members" v-if="index < 5" :href="'/users/' + member.username">
                        <img :src="member.avatar" class="rounded-full w-8 h-8 mr-1">
                    </a>
                    <span v-if="team.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ team.members.length - 5 }}+</span>
                    <span v-if="team.members.length < 1" class="text-grey-dark text-center">No members yet</span>
                </div>
            </div>
    	</div>

    </div>
</template>

<script>
    export default {
        data: () => ({
            teams: data.teams.map((team) => {
                team.url = 'teams/' + team.slug;
                return team;
            }),
            showCreateTeamForm: false,
            name: '',
            description: ''
        }),
        props: {
            activeTab: {
                required: true,
                type: String
            }
        },
        methods: {
            openCreateTeamModal(){
                this.showCreateTeamForm = true;
            },
            closeCreateTeamModal(){
                this.showCreateTeamForm = false;
            },
            createNewTeam(){
                axios.post('/teams', {
                    name: this.name,
                    description: this.description
                }).then((response) => {
                    if (response.data.status == 'success') {
                        this.showCreateTeamForm = false;
                        this.teams.push(response.data.team);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>