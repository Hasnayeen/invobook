<template>
    <div class="container mx-auto w-3/5 mt-8">
        <div class="text-center text-grey-dark font-semibold text-3xl mb-4">
            Goodwork API
            <p class="text-base">December 5, 2017 - December 13, 2017</p>
        </div>

        <!-- Add Member Form -->
        <addMemberForm v-if="addMemberFormShown" @close="closeAddMemberForm" :project="project" @addMember="addMember"></addMemberForm>

        <div class="h-16 flex flex-row justify-center items-center px-2">
            <span @click="showAddMemberForm" class="bg-white shadow w-8 h-8 rounded-full text-teal hover:cursor-pointer text-center">
                <i class="fa fa-plus p-2"></i>
            </span>
            <a v-for="(member, index) in project.members" v-if="index < 5" :href="'/users/' + member.username" class="pl-2">
                <img src="/image/avatar.jpg" class="rounded-full w-8 h-8 mr-1">
            </a>
            <span v-if="project.members.length > 5" class="bg-grey-lighter border-teal border p-2 rounded-full">{{ project.members.length - 5 }}+</span>
        </div>

        <div class="flex flex-row flex-wrap justify-center">
            <taskBoard :project="project"></taskBoard>
            <discussionBoard :project="project"></discussionBoard>
            <messageBoard :project="project"></messageBoard>
            <schedule :project="project"></schedule>
            <files :project="project"></files>
            <activity :project="project"></activity>
        </div>
    </div>
</template>

<script>
import taskBoard from './../partials/projects/taskBoard.vue'
import discussionBoard from './../partials/projects/discussionBoard.vue'
import messageBoard from './../partials/projects/messageBoard.vue'
import schedule from './../partials/projects/schedule.vue'
import files from './../partials/projects/files.vue'
import activity from './../partials/projects/activity.vue'
import addMemberForm from "./../partials/addMemberForm.vue";

export default {
    components: {
        taskBoard, discussionBoard, messageBoard, schedule, files, activity, addMemberForm
    },
    props: ['project'],
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
            this.project.members.push(newMember);
            this.addMemberFormShown = false;
        }
    }
}
</script>
