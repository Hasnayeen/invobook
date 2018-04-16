window.Vue = require('vue');

window.axios = require('axios');

window.luxon = require('luxon');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from "laravel-echo"

if (typeof io !== 'undefined') {
  window.Echo = new Echo({
      broadcaster: 'socket.io',
      host: window.location.hostname + ':6001'
  });
}
