<template>
<div class="columns">
    <div class="column is-2 is-offset-5">
        <a class="button is-base is-outlined is-fullwidth" @click="openModal">Invite New Member</a>
    </div>
    <div class="modal" :class="{'is-active': isActive}">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Invite New Member</p>
                    <button class="delete" @click="closeModal"></button>
                </header>
                <section class="modal-card-body">
                    <p class="control has-icon has-icon-right">
                        <input class="input" type="text" placeholder="Name" v-model="name">
                    </p>
                    <p class="control has-icon has-icon-right">
                        <input class="input" type="text" placeholder="Email Address" v-model="email">
                    </p>
                </section>
                <footer class="modal-card-foot">
                    <button type="submit" class="button is-primary" @click="sendInvitation">Send Invitation</button>
                    <a class="button" @click="closeModal">Cancel</a>
                </footer>
            </div> <!-- ./modal-card -->
        </div>
        <button class="modal-close" @click="closeModal"></button>
    </div>
    <!-- ./modal -->

</div>
</template>

<script>
    export default {
        data: () => ({
            isActive: false,
            name: '',
            email: ''
        }),
        methods: {
            openModal () {
                this.isActive = true;
            },
            closeModal () {
                this.isActive = false;
            },
            sendInvitation () {
                axios.post('/register/invite', {
                    name: this.name,
                    email: this.email
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