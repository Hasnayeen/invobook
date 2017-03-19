<template>
<footer class="card-footer">
    <a class="card-footer-item" @click="openCreateTeamModal">Create a New Team</a>
    <div class="modal" :class="{'is-active': isActive}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <p class="control has-icon has-icon-right">
                <input class="input is-danger" type="text" placeholder="Name" v-model="name">
            </p>
            <p class="control has-icon has-icon-right">
                <input class="input is-danger" type="text" placeholder="Description" v-model="description">
            </p>
            <p class="control">
                <button type="submit" class="button is-primary is-fullwidth" @click="createNewTeam">Add New Team</button>
            </p>
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