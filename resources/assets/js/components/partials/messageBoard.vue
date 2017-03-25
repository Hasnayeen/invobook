<template>
    <div class="column is-fullwidth tasks-list">
        <div class="card">
            <header class="card-header">
                <a class="card-header-title has-text-centered">Message Board</a>
            </header>
            <div class="message-box">
                <div class="card-content-item" v-for="message in messages" :class="{ 'is-primary': message.user_id == user.id }">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-48x48">
                                <img src="/image/avatar.jpg">
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>{{ message.user.name }}</strong> <small>@{{ message.user.username }} </small> <small>{{ message.created_at }}</small>
                                    <br>
                                    {{ message.body }}
                                </p>
                            </div>
                        </div>
                        <div class="media-right" v-if="message.user_id == user.id">
                            <button class="delete"></button>
                        </div>
                    </article>
                </div>
            </div>
            <footer class="card-footer">
                <p class="control card-footer-item send-message-box">
                    <textarea class="textarea" id="send-message" placeholder="write your message here" v-model="message" @keydown.enter.prevent="sendMessage($event)" @focus="clearTitleNotification()"></textarea>
                </p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['type', 'id', 'project'],
        data: () => ({
            messages: data.messages.reverse(),
            message: '',
            user: navbar.user,
            unreadMessage: 0,
            title: ''
        }),
        mounted () {
            this.title = document.title;
            this.listen();
        },
        methods: {
            sendMessage (e) {
                if (e.shiftKey) {
                    this.message = this.message + "\n";
                } else {
                    var msg = this.message;
                    this.message = '';
                    axios.post('messages', {
                        message: msg,
                        type: this.type
                    })
                    .then((response) => {
                        if (response.data.status == 'success') {
                            response.data.message.user = navbar.user;
                            this.messages.push(response.data.message);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
            },
            listen () {
                Echo.channel(this.type + '.' + this.id)
                    .listen('MessageCreated', event => {
                        event.message.user = event.user;
                        this.messages.push(event.message);
                        if (document.activeElement != document.getElementById("send-message")) {
                            this.unreadMessage += 1;
                            document.title = '(' + this.unreadMessage + ') ' + this.title;
                        }
                    });
            },
            clearTitleNotification () {
                document.title = this.title;
                this.unreadMessage = 0;
            }
        }
    }
</script>