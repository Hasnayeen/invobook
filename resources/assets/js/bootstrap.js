import Echo from 'laravel-echo'
window.Vue = require('vue')

window.axios = require('axios')

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

if (typeof io !== 'undefined') {
  window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
  })
}

window.Vue.mixin({
  methods: {
    generateUrl: function (value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg'
      value = value.toString()
      return window.location.protocol + '//' + window.location.host + '/' + value
    }
  }
})

window.EventBus = new Vue()
