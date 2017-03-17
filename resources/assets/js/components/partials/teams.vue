<template>
    <div class="column is-one-third">
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
          <div class="card-content">
            <div class="content">
                    <div v-for="team in teams">
                        <a class="is-block has-text-centered" :href="team.url">{{ team.name }}</a>
                    </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Create a New Team</a>
          </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            teams: data.teams.map((team) => {
                team.url = 'teams/' + team.slug;
                return team;
            })
        })
    }
</script>