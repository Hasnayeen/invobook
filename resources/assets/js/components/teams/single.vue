<template>
    <div class="container mx-auto w-3/5 mt-8">
        <div class="text-center text-grey-dark font-semibold text-3xl mb-4">
            {{ team.name }}
            <p class="text-base">December 5, 2017 - December 13, 2017</p>
        </div>

        <!-- Add Member Form -->
        <addMemberForm v-if="addMemberFormShown" @close="closeAddMemberForm" :team="team" @addMember="addMember"></addMemberForm>

        <div class="h-16 flex flex-row justify-center items-center px-2">
            <span @click="showAddMemberForm" class="bg-white shadow w-8 h-8 rounded-full text-teal hover:cursor-pointer text-center p-2">
                <i class="fas fa-plus"></i>
            </span>
            <a v-for="(member, index) in team.members" v-if="index < 5" :href="'/users/' + member.username" class="pl-2">
                <img :src="member.avatar" class="rounded-full w-8 h-8 mr-1">
            </a>
            <span v-if="team.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ team.members.length - 5 }}+</span>
        </div>

        <div class="flex flex-row flex-wrap justify-center">
            <taskBoard :resource="team"></taskBoard>
            <discussionBoard :resource="team"></discussionBoard>
            <messagesBoard :resource="team"></messagesBoard>
            <schedule :resource="team"></schedule>
            <files :resource="team"></files>
            <activity :resource="team"></activity>
        </div>
    </div>
</template>

<script>
import taskBoard from './../partials/taskBoard.vue'
import discussionBoard from './../partials/discussionBoard.vue'
import messagesBoard from './../partials/messagesBoard.vue'
import schedule from './../partials/schedule.vue'
import files from './../partials/files.vue'
import activity from './../partials/activity.vue'
import addMemberForm from "./../partials/addMemberForm.vue";

export default {
    components: {
        taskBoard, discussionBoard, messagesBoard, schedule, files, activity, addMemberForm
    },
    props: ['team'],
    data: () => ({
        addMemberFormShown: false,
    }),
    methods: {
        showAddMemberForm () {
            this.addMemberFormShown = true;
        },
        closeAddMemberForm () {
            this.addMemberFormShown = false;
        },
        addMember (newMember) {
            this.team.members.push(newMember);
            this.addMemberFormShown = false;
        }
    }
}
</script>
