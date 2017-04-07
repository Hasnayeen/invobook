<template>
    <div class="column is-one-third">
        <div class="card justified">
          <header class="card-header">
            <a href="offices" class="card-header-title">
              Offices
            </a>
            <a class="card-header-icon">
              <span class="icon">
                <i class="fa fa-angle-down"></i>
              </span>
            </a>
          </header>
          <div class="card-content homepage">
            <div class="content">
                <div class="menu-list" v-for="office in offices">
                    <a class="has-text-centered" :href="office.url">{{ office.name }}</a>
                </div>
            </div>
          </div>
          <footer class="card-footer">
            <a class="card-footer-item">Create a New Office</a>
          </footer>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            offices: data.offices.map((office) => {
                office.url = 'offices/' + office.slug;
                return office;
            })
        })
    }
</script>