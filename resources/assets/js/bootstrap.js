import Echo from 'laravel-echo'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ClickOutside from 'vue-click-outside'
import * as linkify from 'linkifyjs'
import linkifyElement from 'linkifyjs/element'
import mention from 'linkifyjs/plugins/mention'
window.pusher = require('pusher-js')

mention(linkify)

window.Vue = require('vue')

window.axios = require('axios')

window.luxon = require('luxon')

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
}

window.Echo = new Echo({
  broadcaster: 'pusher',
  key: process.env.MIX_PUSHER_APP_KEY,
  host: window.location.hostname,
  wsHost: window.location.hostname,
  wsPort: 6001,
  enabledTransports: ['ws', 'wss'],
  disableStats: true,
  namespace: 'App.Base.Events',
  authEndpoint: 'https://goodwork.local/broadcasting/auth'
})

window.Vue.mixin({
  methods: {
    generateUrl: function (value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg'
      value = value.toString()
      return window.location.protocol + '//' + window.location.host + '/' + value
    },
    updateUrl: function (params) {
      const url = new URL(window.location.href)
      for (const key in params) {
        if (url.searchParams.has(key)) {
          url.searchParams.delete(key)
        }
        if (params[key] !== null) {
          url.searchParams.append(key, params[key])
        }
      }
      window.history.pushState({ path: url.href }, '', url.href)
    }
  }
})

window.Vue.filter('localize', function (value) {
  if (!value) return ''
  value = value.toString()
  return window.lang[value] ? window.lang[value] : value
})

window.Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

window.Vue.filter('clip', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.substr(0, 20) + '...'
})

window.Vue.directive('linkify', {
  inserted: function (el) {
    linkifyElement(el, {
      className: 'text-blue-500',
      formatHref: function (href, type) {
        if (type === 'mention') {
          return window.location.origin + '/users' + href
        }
        return href
      }
    })
  }
})

window.Vue.directive('click-outside', ClickOutside)

window.Vue.component('font-awesome-icon', FontAwesomeIcon)

window.EventBus = new Vue()
