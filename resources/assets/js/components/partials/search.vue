<template>
  <div id="search" class="text-teal-400  text-base">
    <div class="flex items-center border-b border-b-2 border-teal-400 ">
      <input type="search" v-model="query" placeholder="Search..." class="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none" @keyup="search" @focus="show" v-click-outside="hide">
    </div>
    <div v-if="visible" class="absolute bg-white w-4/5 lg:w-5/6 mt-4 py-4 shadow-lg rounded z-50">
      <ul class="list-reset" v-if="results.length > 0">
        <li v-for="result in results" class="px-4 py-2 text-gray-600 hover:bg-gray-400 cursor-pointer" @click="visit(result.url)">
          <span>{{ result.name }}</span>
          <span class="text-xs">{{ result.description.replace(/(<([^>]+)>)/ig,"") }}</span>
          <span class="float-right">{{ result.type }}</span>
        </li>
      </ul>
      <div v-else class="px-4 py-2 text-sm text-gray-600 block">No results.</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        query: '',
        visible: false,
        results: []
      }
    },

    methods: {
      search () {
        if (this.query.length > 2) {
          axios.get('/search', {params: {query: this.query}})
            .then(({data}) => {
              this.results = data
            })
            .catch(error => {
              console.error(error)
            })
        }
      },

      show () {
        this.visible = true
      },

      hide () {
        this.visible = false
      },

      visit (url) {
        window.location.href = url;
      }
    },
  }
</script>
