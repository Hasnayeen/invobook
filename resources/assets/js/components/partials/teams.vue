<template>
    <div class="hidden">
        <div class="card justified">
          <header class="card-header">
            <a href="teams" class="card-header-title">
              Teams
            </a>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content homepage">
            <div class="content">
                <div class="menu-list" v-for="team in teams">
                    <a class="has-text-centered" :href="team.url">{{ team.name }}</a>
                </div>
            </div>
          </div>
          <footer class="card-footer">
              <a class="card-footer-item" @click="openCreateTeamModal">Create a New Team</a>
          </footer>
          <!-- modla for create team form -->
          <div class="modal" :class="{'is-active': isActive}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Create New Team</p>
                        <button class="delete" @click="closeCreateTeamModal"></button>
                    </header>
                    <section class="modal-card-body">
                        <p class="control has-icon has-icon-right">
                            <input class="input" type="text" placeholder="Name" v-model="name">
                        </p>
                        <p class="control has-icon has-icon-right">
                            <input class="input" type="text" placeholder="Description" v-model="description">
                        </p>
                    </section>
                    <footer class="modal-card-foot">
                        <button type="submit" class="button is-primary" @click="createNewTeam">Add New Team</button>
                        <a class="button" @click="closeCreateTeamModal">Cancel</a>
                    </footer>
                </div> <!-- ./modal-card -->
            </div>
            <button class="modal-close" @click="closeCreateTeamModal"></button>
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
            isActive: false,
            name: '',
            description: ''
        }),
        methods: {
            openCreateTeamModal () {
                this.isActive = true;
            },
            closeCreateTeamModal () {
                this.isActive = false;
            },
            createNewTeam () {
                axios.post('/teams', {
                    name: this.name,
                    description: this.description
                })
                .then((response) => {
                    if (response.data.status == 'success') {
                        this.isActive = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>