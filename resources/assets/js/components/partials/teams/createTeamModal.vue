<template>
<footer class="card-footer">
    <a class="card-footer-item" @click="openCreateTeamModal">Create a New Team</a>
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
</footer>
</template>

<script>
    export default {
        data: () => ({
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