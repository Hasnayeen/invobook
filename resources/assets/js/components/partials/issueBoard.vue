<template>
    <div v-if="activeTab === 'issues'" class="w-full">
        <div v-if="issues.length === 0" class="flex flex-col items-center pt-8">
            <div class="pb-4">No issues</div>
            <img src="/image/events.svg" alt="event calender" class="w-96">
        </div>
        <div v-else>
            <ol>
                <li v-for="issue in issues" v-text="issue.title"></li>
            </ol>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            resourceType: {
                required: true,
                type: String
            },
            resource: {
                required: true,
                type: Object
            },
            activeTab: {
                required: true,
                type: String
            }
        },
        data: () => ({
            issues: [],
            user,
            authenticated,
        }),

        mounted() {
            this.getIssues()
        },
        watch: {
            activeTab: function () {
                this.getIssues()
            }
        },
        methods: {
            getIssues() {
                if (this.activeTab === 'issues' && (this.issues.length === 0)) {
                    axios.get('/issues', {
                        params: {
                            group_type: this.resourceType,
                            group_id: this.resource.id,
                        }
                    })
                        .then((response) => {
                            this.issues = response.data.issues.data.node.issues.nodes
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }
            },
        }
    }
</script>
