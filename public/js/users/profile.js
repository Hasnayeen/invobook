webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/fileUpload.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['user'],
  methods: {
    selectFile: function selectFile(e) {
      var _this = this;

      if (!e.target.files.length) return;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        _this.$emit('image-loaded', e.target.result);
      };

      this.uploadImage(file);
    },
    uploadImage: function uploadImage(file) {
      var data = new FormData();
      data.append('avatar', file);
      axios.post('/users/' + this.user.username + '/avatar', data).then(function (res) {}).catch(function (err) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/navbar.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notificationDropdown__ = __webpack_require__("./resources/assets/js/components/partials/notificationDropdown.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notificationDropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notificationDropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profileDropdown__ = __webpack_require__("./resources/assets/js/components/partials/profileDropdown.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profileDropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__profileDropdown__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { notificationDropdown: __WEBPACK_IMPORTED_MODULE_0__notificationDropdown___default.a, profileDropdown: __WEBPACK_IMPORTED_MODULE_1__profileDropdown___default.a },
  data: function data() {
    return {
      user: navbar.user,
      token: Laravel.csrfToken,
      url: navbar.navUrl
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationDropdown.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: navbar.user,
      token: Laravel.csrfToken,
      url: navbar.navUrl,
      notificationShown: false,
      unreadNotification: false
    };
  },
  methods: {
    toggleNotification: function toggleNotification(event) {
      if (this.notificationShown) {
        document.body.removeEventListener("keyup", this.hideNotification);
        this.hideNotification(event);
      } else {
        document.body.addEventListener("keyup", this.hideNotification);
        this.showNotification();
      }
    },
    showNotification: function showNotification(event) {
      if (this.profileDropdownShown) {
        this.profileDropdownShown = false;
      }
      this.notificationShown = true;
    },
    hideNotification: function hideNotification(event) {
      if (event.type === "keyup" && event.key !== "Escape") {
        return false;
      }
      this.notificationShown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationPopup.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notificationShown: false,
      message: '',
      messageType: ''
    };
  },
  methods: {
    closeNotification: function closeNotification() {
      this.notificationShown = false;
    },
    showNotification: function showNotification(message, messageType) {
      var _this = this;

      this.message = message;
      this.messageType = messageType;
      this.notificationShown = true;
      setTimeout(function () {
        _this.closeNotification();
      }, 3000);
    }
  },
  created: function created() {
    EventBus.$on('notification', this.showNotification);
  },
  beforeDestroy: function beforeDestroy() {
    EventBus.$off('notification', this.showNotification);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/profileDropdown.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: navbar.user,
      token: Laravel.csrfToken,
      url: navbar.navUrl,
      avatar: "",
      profileUrl: navbar.navUrl.site + "/users/" + navbar.user.username,
      profileDropdownShown: false
    };
  },
  methods: {
    logoutUser: function logoutUser(event) {
      event.preventDefault();
      document.getElementById("logout-form").submit();
    },
    toggleProfileDropdown: function toggleProfileDropdown(event) {
      if (this.profileDropdownShown) {
        this.hideProfileDropdown(event);
        document.body.removeEventListener("keyup", this.hideProfileDropdown);
      } else {
        this.showProfileDropdown();
        document.body.addEventListener("keyup", this.hideProfileDropdown);
      }
    },
    showProfileDropdown: function showProfileDropdown(event) {
      if (this.notificationShown) {
        this.notificationShown = false;
      }
      this.profileDropdownShown = true;
    },
    hideProfileDropdown: function hideProfileDropdown(event) {
      if (event.type === "keyup" && event.key !== "Escape") {
        return false;
      }
      this.profileDropdownShown = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/account.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data: function data() {
    return {
      email: '',
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
      errorMessage: {
        email: '',
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      }
    };
  },
  methods: {
    update: function update() {
      var _this = this;

      var params = {};
      if (this.email !== '') {
        params.email = this.email;
      }
      if (this.newPassword !== '') {
        params.current_password = this.currentPassword;
        params.new_password = this.newPassword;
        params.new_password_confirmation = this.newPasswordConfirmation;
      }
      axios.put('/users/' + this.user.username + '/account', params).then(function (response) {
        EventBus.$emit('notification', response.data.message, response.data.status);
        _this.email = '', _this.currentPassword = '', _this.newPassword = '', _this.newPasswordConfirmation = '';
      }).catch(function (error) {
        for (var prop in error.response.data.errors) {
          if (error.response.data.errors.hasOwnProperty(prop)) {
            _this.$set(_this.errorMessage, prop, error.response.data.errors[prop][0]);
          }
        }
        setTimeout(function () {
          _this.errorMessage = {
            email: '',
            current_password: '',
            new_password: '',
            new_password_confirmation: ''
          };
        }, 2000);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/other.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon__ = __webpack_require__("./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_luxon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_luxon__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'other',
  props: ['user'],
  computed: {
    userLocalTime: function userLocalTime() {
      return __WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].local().setZone(this.user.timezone).toLocaleString(__WEBPACK_IMPORTED_MODULE_0_luxon__["DateTime"].TIME_SIMPLE);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/own.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_fileUpload__ = __webpack_require__("./resources/assets/js/components/partials/fileUpload.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_fileUpload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_fileUpload__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Own',
  components: { FileUpload: __WEBPACK_IMPORTED_MODULE_0__partials_fileUpload___default.a },
  props: ['user'],
  data: function data() {
    return {
      avatar: null
    };
  },
  methods: {
    updateImage: function updateImage(imageUrl) {
      this.avatar = imageUrl;
    }
  },
  mounted: function mounted() {
    this.avatar = this.generateUrl(this.user.avatar);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/profile.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account__ = __webpack_require__("./resources/assets/js/components/users/account.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__account__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__own__ = __webpack_require__("./resources/assets/js/components/users/own.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__own___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__own__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other__ = __webpack_require__("./resources/assets/js/components/users/other.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__other___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__other__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: { Account: __WEBPACK_IMPORTED_MODULE_0__account___default.a, Own: __WEBPACK_IMPORTED_MODULE_1__own___default.a, Other: __WEBPACK_IMPORTED_MODULE_2__other___default.a },
  props: ['user'],
  data: function data() {
    return {
      activeTab: 'profile',
      authUser: navbar.user
    };
  },
  methods: {
    activateTab: function activateTab(tab) {
      this.activeTab = tab;
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/***/ (function(module, exports) {

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    function Connector(options) {
        classCallCheck(this, Connector);

        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }

    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

var Channel = function () {
    function Channel() {
        classCallCheck(this, Channel);
    }

    createClass(Channel, [{
        key: 'notification',
        value: function notification(callback) {
            return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
        }
    }, {
        key: 'listenForWhisper',
        value: function listenForWhisper(event, callback) {
            return this.listen('.client-' + event, callback);
        }
    }]);
    return Channel;
}();

var EventFormatter = function () {
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }

    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }

    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

var PusherPrivateChannel = function (_PusherChannel) {
    inherits(PusherPrivateChannel, _PusherChannel);

    function PusherPrivateChannel() {
        classCallCheck(this, PusherPrivateChannel);
        return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
    }

    createClass(PusherPrivateChannel, [{
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPrivateChannel;
}(PusherChannel);

var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }

    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        var _ref;

        classCallCheck(this, PusherConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = possibleConstructorReturn(this, (_ref = PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).call.apply(_ref, [this].concat(args)));

        _this.channels = {};
        return _this;
    }

    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            this.pusher = new Pusher(this.options.key, this.options);
        }
    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                if (_this2.channels[name]) {
                    _this2.channels[name].unsubscribe();
                    delete _this2.channels[name];
                }
            });
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        var _ref;

        classCallCheck(this, SocketIoConnector);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = possibleConstructorReturn(this, (_ref = SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).call.apply(_ref, [this].concat(args)));

        _this.channels = {};
        return _this;
    }

    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof io !== 'undefined') {
                return io;
            }
            if (this.options.client !== 'undefined') {
                return this.options.client;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                if (_this2.channels[name]) {
                    _this2.channels[name].unsubscribe();
                    delete _this2.channels[name];
                }
            });
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

var Echo = function () {
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        if (typeof Vue === 'function' && Vue.http) {
            this.registerVueRequestInterceptor();
        }
        if (typeof axios === 'function') {
            this.registerAxiosRequestInterceptor();
        }
        if (typeof jQuery === 'function') {
            this.registerjQueryAjaxSetup();
        }
        if (this.options.broadcaster == 'pusher') {
            this.connector = new PusherConnector(this.options);
        } else if (this.options.broadcaster == 'socket.io') {
            this.connector = new SocketIoConnector(this.options);
        }
    }

    createClass(Echo, [{
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
    }, {
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
    }]);
    return Echo;
}();

module.exports = Echo;

/***/ }),

/***/ "./node_modules/luxon/build/cjs-browser/luxon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/

/**
 * @private
 */

// TYPES

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isString(o) {
  return typeof o === 'string';
}

function isDate(o) {
  return Object.prototype.toString.call(o) === '[object Date]';
}

// CAPABILITIES

function hasIntl() {
  return typeof Intl !== 'undefined' && Intl.DateTimeFormat;
}

function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
}

// OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}

function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.reduce(function (best, next) {
    var pair = [by(next), next];
    if (!best) {
      return pair;
    } else if (compare.apply(null, [best[0], pair[0]]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}

function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
}

// NUMBERS AND STRINGS

function numberBetween(thing, bottom, top) {
  return isNumber(thing) && thing >= bottom && thing <= top;
}

// x % n but takes the sign of n instead of x
function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}

function padStart(input) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  if (input.toString().length < n) {
    return ('0'.repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}

function parseMillis(fraction) {
  if (isUndefined(fraction)) {
    return NaN;
  } else {
    var f = parseFloat('0.' + fraction) * 1000;
    return Math.floor(f);
  }
}

function roundTo(number, digits) {
  var factor = Math.pow(10, digits);
  return Math.round(number * factor) / factor;
}

// DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}

function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
}

// PARSING

function parseZoneInfo(ts, offsetFormat, locale) {
  var timeZone = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({ timeZoneName: offsetFormat }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === 'timezonename';
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, ]+/, '');
    return trimmed;
  } else {
    return null;
  }
}

// signedOffset('-5', '30') -> -330
function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10) || 0,
      offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
}

// COERCION

function normalizeObject(obj, normalizer) {
  var ignoreUnknown = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var normalized = {};
  for (var u in obj) {
    if (obj.hasOwnProperty(u)) {
      var v = obj[u];
      if (v !== null && !isUndefined(v) && !Number.isNaN(v)) {
        var mapped = normalizer(u, ignoreUnknown);
        if (mapped) {
          normalized[mapped] = v;
        }
      }
    }
  }
  return normalized;
}

function timeObject(obj) {
  return pick(obj, ['hour', 'minute', 'second', 'millisecond']);
}

/**
 * @private
 */

var n = 'numeric',
    s = 'short',
    l = 'long',
    d2 = '2-digit';

var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};

var DATE_MED = {
  year: n,
  month: s,
  day: n
};

var DATE_FULL = {
  year: n,
  month: l,
  day: n
};

var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};

var TIME_SIMPLE = {
  hour: n,
  minute: d2
};

var TIME_WITH_SECONDS = {
  hour: n,
  minute: d2,
  second: d2
};

var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: s
};

var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: l
};

var TIME_24_SIMPLE = {
  hour: n,
  minute: d2,
  hour12: false
};

/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */
var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false
};

/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */
var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false,
  timeZoneName: s
};

/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */
var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false,
  timeZoneName: l
};

/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */
var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: d2
};

/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */
var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: d2,
  second: d2
};

var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: d2
};

var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: d2,
  second: d2
};

var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: d2,
  timeZoneName: s
};

var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: s
};

var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: d2,
  timeZoneName: l
};

var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: l
};

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}

/**
 * @private
 */

var monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var monthsNarrow = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function months(length) {
  switch (length) {
    case 'narrow':
      return monthsNarrow;
    case 'short':
      return monthsShort;
    case 'long':
      return monthsLong;
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    case '2-digit':
      return ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    default:
      return null;
  }
}

var weekdaysLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var weekdaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

var weekdaysNarrow = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function weekdays(length) {
  switch (length) {
    case 'narrow':
      return weekdaysNarrow;
    case 'short':
      return weekdaysShort;
    case 'long':
      return weekdaysLong;
    case 'numeric':
      return ['1', '2', '3', '4', '5', '6', '7'];
    default:
      return null;
  }
}

var meridiems = ['AM', 'PM'];

var erasLong = ['Before Christ', 'Anno Domini'];

var erasShort = ['BC', 'AD'];

var erasNarrow = ['B', 'A'];

function eras(length) {
  switch (length) {
    case 'narrow':
      return erasNarrow;
    case 'short':
      return erasShort;
    case 'long':
      return erasLong;
    default:
      return null;
  }
}

function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}

function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}

function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}

function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}

function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ['weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hour12']),
      key = stringify(filtered),
      dateTimeHuge = 'EEEE, LLLL d, yyyy, h:mm a';
  switch (key) {
    case stringify(DATE_SHORT):
      return 'M/d/yyyy';
    case stringify(DATE_MED):
      return 'LLL d, yyyy';
    case stringify(DATE_FULL):
      return 'LLLL d, yyyy';
    case stringify(DATE_HUGE):
      return 'EEEE, LLLL d, yyyy';
    case stringify(TIME_SIMPLE):
      return 'h:mm a';
    case stringify(TIME_WITH_SECONDS):
      return 'h:mm:ss a';
    case stringify(TIME_WITH_SHORT_OFFSET):
      return 'h:mm a';
    case stringify(TIME_WITH_LONG_OFFSET):
      return 'h:mm a';
    case stringify(TIME_24_SIMPLE):
      return 'HH:mm';
    case stringify(TIME_24_WITH_SECONDS):
      return 'HH:mm:ss';
    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return 'HH:mm';
    case stringify(TIME_24_WITH_LONG_OFFSET):
      return 'HH:mm';
    case stringify(DATETIME_SHORT):
      return 'M/d/yyyy, h:mm a';
    case stringify(DATETIME_MED):
      return 'LLL d, yyyy, h:mm a';
    case stringify(DATETIME_FULL):
      return 'LLLL d, yyyy, h:mm a';
    case stringify(DATETIME_HUGE):
      return dateTimeHuge;
    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return 'M/d/yyyy, h:mm:ss a';
    case stringify(DATETIME_MED_WITH_SECONDS):
      return 'LLL d, yyyy, h:mm:ss a';
    case stringify(DATETIME_FULL_WITH_SECONDS):
      return 'LLLL d, yyyy, h:mm:ss a';
    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return 'EEEE, LLLL d, yyyy, h:mm:ss a';
    default:
      return dateTimeHuge;
  }
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError = function (_Error) {
  inherits(LuxonError, _Error);

  function LuxonError() {
    classCallCheck(this, LuxonError);
    return possibleConstructorReturn(this, _Error.apply(this, arguments));
  }

  return LuxonError;
}(Error);

/**
 * @private
 */


var InvalidDateTimeError = function (_LuxonError) {
  inherits(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    classCallCheck(this, InvalidDateTimeError);
    return possibleConstructorReturn(this, _LuxonError.call(this, 'Invalid DateTime: ' + reason));
  }

  return InvalidDateTimeError;
}(LuxonError);

/**
 * @private
 */
var InvalidIntervalError = function (_LuxonError2) {
  inherits(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    classCallCheck(this, InvalidIntervalError);
    return possibleConstructorReturn(this, _LuxonError2.call(this, 'Invalid Interval: ' + reason));
  }

  return InvalidIntervalError;
}(LuxonError);

/**
 * @private
 */
var InvalidDurationError = function (_LuxonError3) {
  inherits(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    classCallCheck(this, InvalidDurationError);
    return possibleConstructorReturn(this, _LuxonError3.call(this, 'Invalid Duration: ' + reason));
  }

  return InvalidDurationError;
}(LuxonError);

/**
 * @private
 */
var ConflictingSpecificationError = function (_LuxonError4) {
  inherits(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    classCallCheck(this, ConflictingSpecificationError);
    return possibleConstructorReturn(this, _LuxonError4.apply(this, arguments));
  }

  return ConflictingSpecificationError;
}(LuxonError);

/**
 * @private
 */
var InvalidUnitError = function (_LuxonError5) {
  inherits(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    classCallCheck(this, InvalidUnitError);
    return possibleConstructorReturn(this, _LuxonError5.call(this, 'Invalid unit ' + unit));
  }

  return InvalidUnitError;
}(LuxonError);

/**
 * @private
 */
var InvalidArgumentError = function (_LuxonError6) {
  inherits(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    classCallCheck(this, InvalidArgumentError);
    return possibleConstructorReturn(this, _LuxonError6.apply(this, arguments));
  }

  return InvalidArgumentError;
}(LuxonError);

/**
 * @private
 */
var ZoneIsAbstractError = function (_LuxonError7) {
  inherits(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    classCallCheck(this, ZoneIsAbstractError);
    return possibleConstructorReturn(this, _LuxonError7.call(this, 'Zone is an abstract class'));
  }

  return ZoneIsAbstractError;
}(LuxonError);

/* eslint no-unused-vars: "off" */

/**
 * @interface
*/

var Zone = function () {
  function Zone() {
    classCallCheck(this, Zone);
  }

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.localeCode - What locale to return the offset name in. Defaults to us-en
   * @return {string}
   */
  Zone.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  };

  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */


  Zone.prototype.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  };

  /**
   * Return whether this Zone is equal to another zoner
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */


  Zone.prototype.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  };

  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */


  createClass(Zone, [{
    key: 'type',

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: 'name',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }

    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: 'universal',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      throw new ZoneIsAbstractError();
    }
  }]);
  return Zone;
}();

var singleton = null;

/**
 * @private
 */

var LocalZone = function (_Zone) {
  inherits(LocalZone, _Zone);

  function LocalZone() {
    classCallCheck(this, LocalZone);
    return possibleConstructorReturn(this, _Zone.apply(this, arguments));
  }

  LocalZone.prototype.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;

    return parseZoneInfo(ts, format, locale);
  };

  LocalZone.prototype.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  };

  LocalZone.prototype.equals = function equals(otherZone) {
    return otherZone.type === 'local';
  };

  createClass(LocalZone, [{
    key: 'type',
    get: function get$$1() {
      return 'local';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return 'local';
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return true;
    }
  }], [{
    key: 'instance',
    get: function get$$1() {
      if (singleton === null) {
        singleton = new LocalZone();
      }
      return singleton;
    }
  }]);
  return LocalZone;
}(Zone);

var dtfCache = {};
function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: zone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ''),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];

  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];


    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }
  return filled;
}

/**
 * @private
 */

var IANAZone = function (_Zone) {
  inherits(IANAZone, _Zone);

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return s && s.match(/^[a-z_+-]{1,256}\/[a-z_+-]{1,256}$/i);
  };

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat('en-US', { timeZone: zone }).format();
      return true;
    } catch (e) {
      return false;
    }
  };

  // Etc/GMT+8 -> 480


  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);
      if (match) {
        return 60 * parseInt(match[1]);
      }
    }
    return null;
  };

  function IANAZone(name) {
    classCallCheck(this, IANAZone);

    var _this = possibleConstructorReturn(this, _Zone.call(this));

    _this.zoneName = name;
    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }

  IANAZone.prototype.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;

    return parseZoneInfo(ts, format, locale, this.zoneName);
  };

  IANAZone.prototype.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.zoneName),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        fYear = _ref2[0],
        fMonth = _ref2[1],
        fDay = _ref2[2],
        fHour = _ref2[3],
        fMinute = _ref2[4],
        fSecond = _ref2[5],
        asUTC = Date.UTC(fYear, fMonth - 1, fDay, fHour, fMinute, fSecond);

    var asTS = date.valueOf();
    asTS -= asTS % 1000;
    return (asUTC - asTS) / (60 * 1000);
  };

  IANAZone.prototype.equals = function equals(otherZone) {
    return otherZone.type === 'iana' && otherZone.zoneName === this.zoneName;
  };

  createClass(IANAZone, [{
    key: 'type',
    get: function get$$1() {
      return 'iana';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.zoneName;
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.valid;
    }
  }]);
  return IANAZone;
}(Zone);

var singleton$1 = null;

function hoursMinutesOffset(z) {
  var hours = Math.trunc(z.fixed / 60),
      minutes = Math.abs(z.fixed % 60),
      sign = hours > 0 ? '+' : '-',
      base = sign + Math.abs(hours);
  return minutes > 0 ? base + ':' + padStart(minutes, 2) : base;
}

/**
 * @private
 */

var FixedOffsetZone = function (_Zone) {
  inherits(FixedOffsetZone, _Zone);

  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  };

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }
    return null;
  };

  createClass(FixedOffsetZone, null, [{
    key: 'utcInstance',
    get: function get$$1() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }
      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    classCallCheck(this, FixedOffsetZone);

    var _this = possibleConstructorReturn(this, _Zone.call(this));

    _this.fixed = offset;
    return _this;
  }

  FixedOffsetZone.prototype.offsetName = function offsetName() {
    return this.name;
  };

  FixedOffsetZone.prototype.offset = function offset() {
    return this.fixed;
  };

  FixedOffsetZone.prototype.equals = function equals(otherZone) {
    return otherZone.type === 'fixed' && otherZone.fixed === this.fixed;
  };

  createClass(FixedOffsetZone, [{
    key: 'type',
    get: function get$$1() {
      return 'fixed';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return this.fixed === 0 ? 'UTC' : 'UTC' + hoursMinutesOffset(this);
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return true;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return true;
    }
  }]);
  return FixedOffsetZone;
}(Zone);

var singleton$2 = null;

var InvalidZone = function (_Zone) {
  inherits(InvalidZone, _Zone);

  function InvalidZone() {
    classCallCheck(this, InvalidZone);
    return possibleConstructorReturn(this, _Zone.apply(this, arguments));
  }

  InvalidZone.prototype.offsetName = function offsetName() {
    return null;
  };

  InvalidZone.prototype.offset = function offset() {
    return NaN;
  };

  InvalidZone.prototype.equals = function equals() {
    return false;
  };

  createClass(InvalidZone, [{
    key: 'type',
    get: function get$$1() {
      return 'invalid';
    }
  }, {
    key: 'name',
    get: function get$$1() {
      return null;
    }
  }, {
    key: 'universal',
    get: function get$$1() {
      return false;
    }
  }, {
    key: 'isValid',
    get: function get$$1() {
      return false;
    }
  }], [{
    key: 'instance',
    get: function get$$1() {
      if (singleton$2 === null) {
        singleton$2 = new InvalidZone();
      }
      return singleton$2;
    }
  }]);
  return InvalidZone;
}(Zone);

/**
 * @private
 */

function normalizeZone(input, defaultZone) {
  var offset = void 0;
  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === 'local') return LocalZone.instance;else if (lowered === 'utc') return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return new IANAZone(input);else return FixedOffsetZone.parseSpecifier(lowered) || InvalidZone.instance;
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.offset) {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return InvalidZone.instance;
  }
}

var now = function now() {
  return new Date().valueOf();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;

/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */

var Settings = function () {
  function Settings() {
    classCallCheck(this, Settings);
  }

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
  };

  createClass(Settings, null, [{
    key: 'now',

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get$$1() {
      return now;
    }

    /**
     * Set the callback for returning the current timestamp.
     * @type {function}
     */
    ,
    set: function set$$1(n) {
      now = n;
    }

    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: 'defaultZoneName',
    get: function get$$1() {
      return (defaultZone || LocalZone.instance).name;
    }

    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }

    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: 'defaultZone',
    get: function get$$1() {
      return defaultZone || LocalZone.instance;
    }

    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultLocale',
    get: function get$$1() {
      return defaultLocale;
    }

    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(locale) {
      defaultLocale = locale;
    }

    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultNumberingSystem',
    get: function get$$1() {
      return defaultNumberingSystem;
    }

    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }

    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: 'defaultOutputCalendar',
    get: function get$$1() {
      return defaultOutputCalendar;
    }

    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set$$1(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }

    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: 'throwOnInvalid',
    get: function get$$1() {
      return throwOnInvalid;
    }

    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set$$1(t) {
      throwOnInvalid = t;
    }
  }]);
  return Settings;
}();

function stringifyTokens(splits, tokenToString) {
  var s = '';
  for (var _iterator = splits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var token = _ref;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }
  return s;
}

var tokenToObject = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};

/**
 * @private
 */

var Formatter = function () {
  Formatter.create = function create(locale) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var formatOpts = Object.assign({}, { round: true }, opts);
    return new Formatter(locale, formatOpts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = '',
        bracketed = false;
    var splits = [];
    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);
      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({ literal: bracketed, val: currentFull });
        }
        current = null;
        currentFull = '';
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({ literal: false, val: currentFull });
        }
        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({ literal: bracketed, val: currentFull });
    }

    return splits;
  };

  function Formatter(locale, formatOpts) {
    classCallCheck(this, Formatter);

    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  Formatter.prototype.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }
    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  Formatter.prototype.formatDateTime = function formatDateTime(dt) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  Formatter.prototype.formatDateTimeParts = function formatDateTimeParts(dt) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  Formatter.prototype.resolvedOptions = function resolvedOptions(dt) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  Formatter.prototype.num = function num(n) {
    var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  Formatter.prototype.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === 'en';
    var string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return 'Z';
      }

      var hours = Math.trunc(dt.offset / 60),
          minutes = Math.abs(dt.offset % 60),
          sign = hours >= 0 ? '+' : '-',
          base = '' + sign + Math.abs(hours);

      switch (opts.format) {
        case 'short':
          return '' + sign + _this.num(Math.abs(hours), 2) + ':' + _this.num(minutes, 2);
        case 'narrow':
          return minutes > 0 ? base + ':' + minutes : base;
        case 'techie':
          return '' + sign + _this.num(Math.abs(hours), 2) + _this.num(minutes, 2);
        default:
          throw new RangeError('Value format ' + opts.format + ' is out of range for property format');
      }
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({ hour: 'numeric', hour12: true }, 'dayperiod');
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? { month: length } : { month: length, day: 'numeric' }, 'month');
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? { weekday: length } : { weekday: length, month: 'long', day: 'numeric' }, 'weekday');
    },
        maybeMacro = function maybeMacro(token) {
      var macro = tokenToObject[token];
      if (macro) {
        return _this.formatWithSystemDefault(dt, macro);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({ era: length }, 'era');
    },
        tokenToString = function tokenToString(token) {
      var outputCal = _this.loc.outputCalendar;

      // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles
      switch (token) {
        // ms
        case 'S':
          return _this.num(dt.millisecond);
        case 'u':
        // falls through
        case 'SSS':
          return _this.num(dt.millisecond, 3);
        // seconds
        case 's':
          return _this.num(dt.second);
        case 'ss':
          return _this.num(dt.second, 2);
        // minutes
        case 'm':
          return _this.num(dt.minute);
        case 'mm':
          return _this.num(dt.minute, 2);
        // hours
        case 'h':
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);
        case 'hh':
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);
        case 'H':
          return _this.num(dt.hour);
        case 'HH':
          return _this.num(dt.hour, 2);
        // offset
        case 'Z':
          // like +6
          return formatOffset({ format: 'narrow', allowZ: true });
        case 'ZZ':
          // like +06:00
          return formatOffset({ format: 'short', allowZ: true });
        case 'ZZZ':
          // like +0600
          return formatOffset({ format: 'techie', allowZ: false });
        case 'ZZZZ':
          // like EST
          return dt.offsetNameShort;
        case 'ZZZZZ':
          // like Eastern Standard Time
          return dt.offsetNameLong;
        // zone
        case 'z':
          // like America/New_York
          return dt.zoneName;
        // meridiems
        case 'a':
          return meridiem();
        // dates
        case 'd':
          return outputCal ? string({ day: 'numeric' }, 'day') : _this.num(dt.day);
        case 'dd':
          return outputCal ? string({ day: '2-digit' }, 'day') : _this.num(dt.day, 2);
        // weekdays - standalone
        case 'c':
          // like 1
          return _this.num(dt.weekday);
        case 'ccc':
          // like 'Tues'
          return weekday('short', true);
        case 'cccc':
          // like 'Tuesday'
          return weekday('long', true);
        case 'ccccc':
          // like 'T'
          return weekday('narrow', true);
        // weekdays - format
        case 'E':
          // like 1
          return _this.num(dt.weekday);
        case 'EEE':
          // like 'Tues'
          return weekday('short', false);
        case 'EEEE':
          // like 'Tuesday'
          return weekday('long', false);
        case 'EEEEE':
          // like 'T'
          return weekday('narrow', false);
        // months - standalone
        case 'L':
          // like 1
          return outputCal ? string({ month: 'numeric', day: 'numeric' }, 'month') : _this.num(dt.month);
        case 'LL':
          // like 01, doesn't seem to work
          return outputCal ? string({ month: '2-digit', day: 'numeric' }, 'month') : _this.num(dt.month, 2);
        case 'LLL':
          // like Jan
          return month('short', true);
        case 'LLLL':
          // like January
          return month('long', true);
        case 'LLLLL':
          // like J
          return month('narrow', true);
        // months - format
        case 'M':
          // like 1
          return outputCal ? string({ month: 'numeric' }, 'month') : _this.num(dt.month);
        case 'MM':
          // like 01
          return outputCal ? string({ month: '2-digit' }, 'month') : _this.num(dt.month, 2);
        case 'MMM':
          // like Jan
          return month('short', false);
        case 'MMMM':
          // like January
          return month('long', false);
        case 'MMMMM':
          // like J
          return month('narrow', false);
        // years
        case 'y':
          // like 2014
          return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year);
        case 'yy':
          // like 14
          return outputCal ? string({ year: '2-digit' }, 'year') : _this.num(dt.year.toString().slice(-2), 2);
        case 'yyyy':
          // like 0012
          return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year, 4);
        case 'yyyyyy':
          // like 000012
          return outputCal ? string({ year: 'numeric' }, 'year') : _this.num(dt.year, 6);
        // eras
        case 'G':
          // like AD
          return era('short');
        case 'GG':
          // like Anno Domini
          return era('long');
        case 'GGGGG':
          return era('narrow');
        case 'kk':
          return _this.num(dt.weekYear.toString().slice(-2), 2);
        case 'kkkk':
          return _this.num(dt.weekYear, 4);
        case 'W':
          return _this.num(dt.weekNumber);
        case 'WW':
          return _this.num(dt.weekNumber, 2);
        case 'o':
          return _this.num(dt.ordinal);
        case 'ooo':
          return _this.num(dt.ordinal, 3);
        case 'q':
          // like 1
          return _this.num(dt.quarter);
        case 'qq':
          // like 01
          return _this.num(dt.quarter, 2);
        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  Formatter.prototype.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case 'S':
          return 'millisecond';
        case 's':
          return 'second';
        case 'm':
          return 'minute';
        case 'h':
          return 'hour';
        case 'd':
          return 'day';
        case 'M':
          return 'month';
        case 'y':
          return 'year';
        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);
        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref2) {
      var literal = _ref2.literal,
          val = _ref2.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));
    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var sysLocaleCache = null;
function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale;
    // node sometimes defaults to "und". Override that because that is dumb
    sysLocaleCache = computedSys === 'und' ? 'en-US' : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = 'en-US';
    return sysLocaleCache;
  }
}

function intlConfigString(locale, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    locale = Array.isArray(locale) ? locale : [locale];

    if (outputCalendar || numberingSystem) {
      locale = locale.map(function (l) {
        l += '-u';

        if (outputCalendar) {
          l += '-ca-' + outputCalendar;
        }

        if (numberingSystem) {
          l += '-nu-' + numberingSystem;
        }
        return l;
      });
    }
    return locale;
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];
  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }
  return ms;
}

function mapWeekdays(f) {
  var ms = [];
  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }
  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === 'error') {
    return null;
  } else if (mode === 'en') {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== 'latn') {
    return false;
  } else {
    return loc.numberingSystem === 'latn' || !loc.locale || loc.locale.startsWith('en') || hasIntl() && Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === 'latn';
  }
}

/**
 * @private
 */

var SimpleNumberFormatter = function () {
  function SimpleNumberFormatter(opts) {
    classCallCheck(this, SimpleNumberFormatter);

    this.padTo = opts.padTo || 0;
    this.round = opts.round || false;
  }

  SimpleNumberFormatter.prototype.format = function format(i) {
    // to match the browser's numberformatter defaults
    var digits = this.round ? 0 : 3,
        rounded = roundTo(i, digits);
    return padStart(rounded, this.padTo);
  };

  return SimpleNumberFormatter;
}();

/**
 * @private
 */

var PolyDateFormatter = function () {
  function PolyDateFormatter(dt, intl, opts) {
    classCallCheck(this, PolyDateFormatter);

    this.opts = opts;
    this.hasIntl = hasIntl();

    var z = void 0;
    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = 'UTC';
      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === 'local') {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var realIntlOpts = Object.assign({}, this.opts);
      if (z) {
        realIntlOpts.timeZone = z;
      }
      this.dtf = new Intl.DateTimeFormat(intl, realIntlOpts);
    }
  }

  PolyDateFormatter.prototype.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create('en-US');
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  PolyDateFormatter.prototype.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  PolyDateFormatter.prototype.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: 'en-US',
        numberingSystem: 'latn',
        outputCalendar: 'gregory'
      };
    }
  };

  return PolyDateFormatter;
}();

/**
 * @private
 */

var Locale = function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar) {
    var defaultToEN = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var specifiedLocale = locale || Settings.defaultLocale,

    // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? 'en-US' : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
  };

  Locale.fromObject = function fromObject() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    classCallCheck(this, Locale);

    this.locale = locale;
    this.numberingSystem = numbering;
    this.outputCalendar = outputCalendar;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);

    this.weekdaysCache = { format: {}, standalone: {} };
    this.monthsCache = { format: {}, standalone: {} };
    this.meridiemCache = null;
    this.eraCache = {};

    this.specifiedLocale = specifiedLocale;
    this.fastNumbers = supportsFastNumbers(this);
  }

  // todo: cache me


  Locale.prototype.listingMode = function listingMode() {
    var defaultOk = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.locale === 'en' || this.locale.toLowerCase() === 'en-us' || intl && Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us'),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === 'latn') && (this.outputCalendar === null || this.outputCalendar === 'gregory');

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOk) {
      return 'error';
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return 'en';
    } else {
      return 'intl';
    }
  };

  Locale.prototype.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  Locale.prototype.redefaultToEN = function redefaultToEN() {
    var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.clone(Object.assign({}, alts, { defaultToEN: true }));
  };

  Locale.prototype.redefaultToSystem = function redefaultToSystem() {
    var alts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.clone(Object.assign({}, alts, { defaultToEN: false }));
  };

  Locale.prototype.months = function months$$1(length) {
    var _this = this;

    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? { month: length, day: 'numeric' } : { month: length },
          formatStr = format ? 'format' : 'standalone';
      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, 'month');
        });
      }
      return _this.monthsCache[formatStr][length];
    });
  };

  Locale.prototype.weekdays = function weekdays$$1(length) {
    var _this2 = this;

    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var defaultOK = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? { weekday: length, year: 'numeric', month: 'long', day: 'numeric' } : { weekday: length },
          formatStr = format ? 'format' : 'standalone';
      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, 'weekday');
        });
      }
      return _this2.weekdaysCache[formatStr][length];
    });
  };

  Locale.prototype.meridiems = function meridiems$$1() {
    var _this3 = this;

    var defaultOK = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = { hour: 'numeric', hour12: true };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, 'dayperiod');
        });
      }

      return _this3.meridiemCache;
    });
  };

  Locale.prototype.eras = function eras$$1(length) {
    var _this4 = this;

    var defaultOK = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = { era: length };

      // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.
      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, 'era');
        });
      }

      return _this4.eraCache[length];
    });
  };

  Locale.prototype.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });

    return matching ? matching.value : null;
  };

  Locale.prototype.numberFormatter = function numberFormatter() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // this option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the || is used heavily)
    if (opts.forceSimple || this.fastNumbers) {
      return new SimpleNumberFormatter(opts);
    } else if (hasIntl()) {
      var intlOpts = { useGrouping: false };

      if (opts.padTo > 0) {
        intlOpts.minimumIntegerDigits = opts.padTo;
      }

      if (opts.round) {
        intlOpts.maximumFractionDigits = 0;
      }

      return new Intl.NumberFormat(this.intl, intlOpts);
    } else {
      return new SimpleNumberFormatter(opts);
    }
  };

  Locale.prototype.dtFormatter = function dtFormatter(dt) {
    var intlOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  Locale.prototype.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, '');
  return RegExp('^' + full + '$');
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _iterator = patterns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref3 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref3 = _i.value;
    }

    var _ref2 = _ref3;
    var regex = _ref2[0];
    var extractor = _ref2[1];

    var m = regex.exec(s);
    if (m) {
      return extractor(m);
    }
  }
  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i = void 0;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInt(match[cursor + i]);
    }
    return [ret, null, cursor + i];
  };
}

// ISO and SQL parsing
var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp('' + isoTimeBaseRegex.source + offsetRegex.source + '?'),
    isoTimeExtensionRegex = RegExp('(?:T' + isoTimeRegex.source + ')?'),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)-?(\d)/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse('weekYear', 'weekNumber', 'weekDay'),
    extractISOOrdinalData = simpleParse('year', 'ordinal'),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + ' ?(?:' + offsetRegex.source + '|([a-zA-Z_]{1,256}/[a-zA-Z_]{1,256}))?'),
    sqlTimeExtensionRegex = RegExp('(?: ' + sqlTimeRegex.source + ')?');

function extractISOYmd(match, cursor) {
  var item = {
    year: parseInt(match[cursor]),
    month: parseInt(match[cursor + 1]) || 1,
    day: parseInt(match[cursor + 2]) || 1
  };

  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: parseInt(match[cursor]) || 0,
    minute: parseInt(match[cursor + 1]) || 0,
    second: parseInt(match[cursor + 2]) || 0,
    millisecond: parseMillis(match[cursor + 3])
  };

  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? new IANAZone(match[cursor]) : null;
  return [{}, zone, cursor + 1];
}

// ISO duration parsing

var isoDuration = /^P(?:(?:(\d{1,9})Y)?(?:(\d{1,9})M)?(?:(\d{1,9})D)?(?:T(?:(\d{1,9})H)?(?:(\d{1,9})M)?(?:(\d{1,9})(?:[.,](\d{1,9}))?S)?)?|(\d{1,9})W)$/;

function extractISODuration(match) {
  var yearStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      millisecondsStr = match[7],
      weekStr = match[8];


  return [{
    years: parseInt(yearStr),
    months: parseInt(monthStr),
    weeks: parseInt(weekStr),
    days: parseInt(dayStr),
    hours: parseInt(hourStr),
    minutes: parseInt(minuteStr),
    seconds: parseInt(secondStr),
    milliseconds: parseMillis(millisecondsStr)
  }];
}

// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInt(yearStr)) : parseInt(yearStr),
    month: monthStr.length === 2 ? parseInt(monthStr, 10) : monthsShort.indexOf(monthStr) + 1,
    day: parseInt(dayStr),
    hour: parseInt(hourStr),
    minute: parseInt(minuteStr)
  };

  if (secondStr) result.second = parseInt(secondStr);
  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
}

// RFC 2822/5322
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);


  var offset = void 0;
  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').trim();
}

// http date

var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);

  return [result, FixedOffsetZone.utcInstance];
}

/**
 * @private
 */

function parseISODate(s) {
  return parse(s, [combineRegexes(isoYmdRegex, isoTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset)], [combineRegexes(isoWeekRegex, isoTimeExtensionRegex), combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset)], [combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex), combineExtractors(extractISOOrdinalData, extractISOTime)], [combineRegexes(isoTimeRegex), combineExtractors(extractISOTime, extractISOOffset)]);
}

function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}

function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}

function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}

function parseSQL(s) {
  return parse(s, [combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone)], [combineRegexes(sqlTimeRegex), combineExtractors(extractISOTime, extractISOOffset, extractIANAZone)]);
}

var INVALID = 'Invalid Duration',
    UNPARSABLE = 'unparsable';

// unit conversion constants
var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1000 },
  minutes: { seconds: 60, milliseconds: 60 * 1000 },
  seconds: { milliseconds: 1000 }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix);

// units ordered by size
var orderedUnits = ['years', 'quarters', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds'];

var reverseUnits = orderedUnits.slice(0).reverse();

// clone really means "create another instance just like this one, but with these changes"
function clone(dur, alts) {
  var clear = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

// some functions really care about the absolute value of a duration, so combined with
// normalize() this tells us whether this duration is positive or negative
function isHighOrderNegative(obj) {
  // only rule is that the highest-order part must be non-negative
  for (var _iterator = orderedUnits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var k = _ref;

    if (obj[k]) return obj[k] < 0;
  }
  return false;
}

// NB: mutates parameters
function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      added = Math.floor(fromMap[fromUnit] / conv);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
}

// NB: mutates parameters
function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }
      return current;
    } else {
      return previous;
    }
  }, null);
}

/**
 * @private
 */
function friendlyDuration(duration) {
  if (isNumber(duration)) {
    return Duration.fromMillis(duration);
  } else if (duration instanceof Duration) {
    return duration;
  } else if (duration instanceof Object) {
    return Duration.fromObject(duration);
  } else {
    throw new InvalidArgumentError('Unknown duration argument');
  }
}

/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link years}, {@link months}, {@link weeks}, {@link days}, {@link hours}, {@link minutes}, {@link seconds}, {@link milliseconds} accessors.
 * * **Configuration** See  {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link plus}, {@link minus}, {@link normalize}, {@link set}, {@link reconfigure}, {@link shiftTo}, and {@link negate}.
 * * **Output** To convert the Duration into other representations, see {@link as}, {@link toISO}, {@link toFormat}, and {@link toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */

var Duration = function () {
  /**
   * @private
   */
  function Duration(config) {
    classCallCheck(this, Duration);

    var accurate = config.conversionAccuracy === 'longterm' || false;
    /**
     * @access private
     */
    this.values = config.values;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.conversionAccuracy = accurate ? 'longterm' : 'casual';
    /**
     * @access private
     */
    this.invalid = config.invalidReason || null;
    /**
     * @access private
     */
    this.matrix = accurate ? accurateMatrix : casualMatrix;
  }

  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({ milliseconds: count }, opts));
  };

  /**
   * Create an Duration from a Javascript object with keys like 'years' and 'hours'.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromObject = function fromObject(obj) {
    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, true),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  };

  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M4DT12H30M5S').toObject() //=> { years: 3, months: 6, day: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */


  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid(UNPARSABLE);
    }
  };

  /**
   * Create an invalid Duration.
   * @param {string} reason - reason this is invalid
   * @return {Duration}
   */


  Duration.invalid = function invalid(reason) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the Duration is invalid');
    }
    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(reason);
    } else {
      return new Duration({ invalidReason: reason });
    }
  };

  /**
   * @private
   */


  Duration.normalizeUnit = function normalizeUnit(unit) {
    var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var normalized = {
      year: 'years',
      years: 'years',
      quarter: 'quarters',
      quarters: 'quarters',
      month: 'months',
      months: 'months',
      week: 'weeks',
      weeks: 'weeks',
      day: 'days',
      days: 'days',
      hour: 'hours',
      hours: 'hours',
      minute: 'minutes',
      minutes: 'minutes',
      second: 'seconds',
      seconds: 'seconds',
      millisecond: 'milliseconds',
      milliseconds: 'milliseconds'
    }[unit ? unit.toLowerCase() : unit];

    if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);

    return normalized;
  };

  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */


  /**
   * Returns a string representation of this Duration formatted according to the specified format string.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} opts.round - round numerical values
   * @return {string}
   */
  Duration.prototype.toFormat = function toFormat(fmt) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.isValid ? Formatter.create(this.loc, opts).formatDurationFromString(this, fmt) : INVALID;
  };

  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */


  Duration.prototype.toObject = function toObject() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.isValid) return {};

    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  };

  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @return {string}
   */


  Duration.prototype.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;

    var s = 'P',
        norm = this.normalize();

    // ISO durations are always positive, so take the absolute value
    norm = isHighOrderNegative(norm.values) ? norm.negate() : norm;

    if (norm.years > 0) s += norm.years + 'Y';
    if (norm.months > 0 || norm.quarters > 0) s += norm.months + norm.quarters * 3 + 'M';
    if (norm.days > 0 || norm.weeks > 0) s += norm.days + norm.weeks * 7 + 'D';
    if (norm.hours > 0 || norm.minutes > 0 || norm.seconds > 0 || norm.milliseconds > 0) s += 'T';
    if (norm.hours > 0) s += norm.hours + 'H';
    if (norm.minutes > 0) s += norm.minutes + 'M';
    if (norm.seconds > 0) s += norm.seconds + 'S';
    return s;
  };

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */


  Duration.prototype.toJSON = function toJSON() {
    return this.toISO();
  };

  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */


  Duration.prototype.toString = function toString() {
    return this.toISO();
  };

  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */


  Duration.prototype.inspect = function inspect() {
    if (this.isValid) {
      var valsInspect = JSON.stringify(this.toObject());
      return 'Duration {\n  values: ' + valsInspect + ',\n  locale: ' + this.locale + ',\n  conversionAccuracy: ' + this.conversionAccuracy + ' }';
    } else {
      return 'Duration { Invalid, reason: ' + this.invalidReason + ' }';
    }
  };

  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */


  Duration.prototype.plus = function plus(duration) {
    if (!this.isValid) return this;

    var dur = friendlyDuration(duration),
        result = {};

    for (var _iterator2 = orderedUnits, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var k = _ref2;

      var val = dur.get(k) + this.get(k);
      if (val !== 0) {
        result[k] = val;
      }
    }

    return clone(this, { values: result }, true);
  };

  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */


  Duration.prototype.minus = function minus(duration) {
    if (!this.isValid) return this;

    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  };

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */


  Duration.prototype.get = function get$$1(unit) {
    return this[Duration.normalizeUnit(unit)];
  };

  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */


  Duration.prototype.set = function set$$1(values) {
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit));
    return clone(this, { values: mixed });
  };

  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */


  Duration.prototype.reconfigure = function reconfigure() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref3.locale,
        numberingSystem = _ref3.numberingSystem,
        conversionAccuracy = _ref3.conversionAccuracy;

    var loc = this.loc.clone({ locale: locale, numberingSystem: numberingSystem }),
        opts = { loc: loc };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  };

  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */


  Duration.prototype.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  };

  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */


  Duration.prototype.normalize = function normalize() {
    if (!this.isValid) return this;

    var neg = isHighOrderNegative(this.values),
        vals = (neg ? this.negate() : this).toObject();
    normalizeValues(this.matrix, vals);
    var dur = Duration.fromObject(vals);
    return neg ? dur.negate() : dur;
  };

  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */


  Duration.prototype.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });

    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit = void 0;

    normalizeValues(this.matrix, vals);

    for (var _iterator3 = orderedUnits, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref4 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref4 = _i3.value;
      }

      var k = _ref4;

      if (units.indexOf(k) >= 0) {
        lastUnit = k;

        var own = 0;

        // anything we haven't boiled down yet should get boiled to this unit
        for (var ak in accumulated) {
          if (accumulated.hasOwnProperty(ak)) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          }
        }

        // plus anything that's already in this unit
        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i;

        // plus anything further down the chain that should be rolled up in to this
        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        }
        // otherwise, keep it in the wings to boil it later
      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    }

    // anything leftover becomes the decimal for the last unit
    if (lastUnit) {
      for (var key in accumulated) {
        if (accumulated.hasOwnProperty(key)) {
          if (accumulated[key] > 0) {
            built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
          }
        }
      }
    }
    return clone(this, { values: built }, true);
  };

  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */


  Duration.prototype.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};
    for (var _iterator4 = Object.keys(this.values), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref5 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref5 = _i4.value;
      }

      var k = _ref5;

      negated[k] = -this.values[k];
    }
    return clone(this, { values: negated }, true);
  };

  /**
   * Get the years.
   * @type {number}
   */


  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  Duration.prototype.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _iterator5 = orderedUnits, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref6 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref6 = _i5.value;
      }

      var u = _ref6;

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }
    return true;
  };

  createClass(Duration, [{
    key: 'locale',
    get: function get$$1() {
      return this.isValid ? this.loc.locale : null;
    }

    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: 'numberingSystem',
    get: function get$$1() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: 'years',
    get: function get$$1() {
      return this.isValid ? this.values.years || 0 : NaN;
    }

    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: 'quarters',
    get: function get$$1() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }

    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: 'months',
    get: function get$$1() {
      return this.isValid ? this.values.months || 0 : NaN;
    }

    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: 'weeks',
    get: function get$$1() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }

    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: 'days',
    get: function get$$1() {
      return this.isValid ? this.values.days || 0 : NaN;
    }

    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: 'hours',
    get: function get$$1() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }

    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: 'minutes',
    get: function get$$1() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }

    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: 'seconds',
    get: function get$$1() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }

    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: 'milliseconds',
    get: function get$$1() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }

    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalid;
    }
  }]);
  return Duration;
}();

var INVALID$1 = 'Invalid Interval';

// checks if the start is equal to or before the end
function validateStartEnd(start, end) {
  return !!start && !!end && start.isValid && end.isValid && start <= end;
}

/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output*** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toFormat}, and {@link toDuration}.
 */

var Interval = function () {
  /**
   * @private
   */
  function Interval(config) {
    classCallCheck(this, Interval);

    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */
    this.e = config.end;
    /**
     * @access private
     */
    this.invalid = config.invalidReason || null;
  }

  /**
   * Create an invalid Interval.
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
    }
    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(reason);
    } else {
      return new Interval({ invalidReason: reason });
    }
  };

  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */


  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);

    return new Interval({
      start: builtStart,
      end: builtEnd,
      invalidReason: validateStartEnd(builtStart, builtEnd) ? null : 'invalid endpoints'
    });
  };

  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */


  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  };

  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */


  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  };

  /**
   * Create an Interval from an ISO 8601 string
   * @param {string} string - the ISO string to parse
   * @param {Object} opts - options to pass {@see DateTime.fromISO}
   * @return {Interval}
   */


  Interval.fromISO = function fromISO(string, opts) {
    if (string) {
      var _string$split = string.split(/\//),
          s = _string$split[0],
          e = _string$split[1];

      if (s && e) {
        return Interval.fromDateTimes(DateTime.fromISO(s, opts), DateTime.fromISO(e, opts));
      }
    }
    return Interval.invalid('invalid ISO format');
  };

  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */


  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  Interval.prototype.length = function length() {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  };

  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */


  Interval.prototype.count = function count() {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  };

  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */


  Interval.prototype.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  };

  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */


  Interval.prototype.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  };

  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */


  Interval.prototype.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  };

  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */


  Interval.prototype.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  };

  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */


  Interval.prototype.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  };

  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */


  Interval.prototype.set = function set$$1() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  };

  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */


  Interval.prototype.splitAt = function splitAt() {
    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).sort(),
        results = [];
    var s = this.s,
        i = 0;


    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  };

  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */


  Interval.prototype.splitBy = function splitBy(duration) {
    if (!this.isValid) return [];
    var dur = friendlyDuration(duration),
        results = [];
    var s = this.s,
        added = void 0,
        next = void 0;


    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  };

  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */


  Interval.prototype.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  };

  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */


  Interval.prototype.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  };

  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */


  Interval.prototype.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  };

  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */


  Interval.prototype.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  };

  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */


  Interval.prototype.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  };

  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */


  Interval.prototype.equals = function equals(other) {
    return this.s.equals(other.s) && this.e.equals(other.e);
  };

  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, i.e., the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */


  Interval.prototype.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  };

  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */


  Interval.prototype.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  };

  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */


  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }
    return found;
  };

  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */


  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;
    var results = [],
        ends = intervals.map(function (i) {
      return [{ time: i.s, type: 's' }, { time: i.e, type: 'e' }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var i = _ref3;

      currentCount += i.type === 's' ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  };

  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */


  Interval.prototype.difference = function difference() {
    var _this = this;

    for (var _len2 = arguments.length, intervals = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  };

  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */


  Interval.prototype.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return '[' + this.s.toISO() + ' \u2013 ' + this.e.toISO() + ')';
  };

  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */


  Interval.prototype.inspect = function inspect() {
    if (this.isValid) {
      return 'Interval {\n  start: ' + this.start.toISO() + ',\n  end: ' + this.end.toISO() + ',\n  zone:   ' + this.start.zone.name + ',\n  locale:   ' + this.start.locale + ' }';
    } else {
      return 'Interval { Invalid, reason: ' + this.invalidReason + ' }';
    }
  };

  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */


  Interval.prototype.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + '/' + this.e.toISO(opts);
  };

  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */


  Interval.prototype.toFormat = function toFormat(dateFormat) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$separator = _ref4.separator,
        separator = _ref4$separator === undefined ? ' – ' : _ref4$separator;

    if (!this.isValid) return INVALID$1;
    return '' + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  };

  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */


  Interval.prototype.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }
    return this.e.diff(this.s, unit, opts);
  };

  createClass(Interval, [{
    key: 'start',
    get: function get$$1() {
      return this.isValid ? this.s : null;
    }

    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: 'end',
    get: function get$$1() {
      return this.isValid ? this.e : null;
    }

    /**
     * Returns whether this Interval's end is at least its start, i.e. that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalid;
    }
  }]);
  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info = function () {
  function Info() {
    classCallCheck(this, Info);
  }

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST() {
    var zone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Settings.defaultZone;

    var proto = DateTime.local().setZone(zone).set({ month: 12 });

    return !zone.universal && proto.offset !== proto.set({ month: 6 }).offset;
  };

  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */


  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return !!IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  };

  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */


  Info.months = function months() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$locale = _ref.locale,
        locale = _ref$locale === undefined ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === undefined ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === undefined ? 'gregory' : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  };

  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */


  Info.monthsFormat = function monthsFormat() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === undefined ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === undefined ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === undefined ? 'gregory' : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  };

  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */


  Info.weekdays = function weekdays() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

    var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === undefined ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === undefined ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  };

  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */


  Info.weekdaysFormat = function weekdaysFormat() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'long';

    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === undefined ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === undefined ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  };

  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'de' }) //=> [ 'vorm.', 'nachm.' ]
   * @return {[string]}
   */


  Info.meridiems = function meridiems() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === undefined ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  };

  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */


  Info.eras = function eras() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'short';

    var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === undefined ? null : _ref6$locale;

    return Locale.create(locale, null, 'gregory').eras(length);
  };

  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true }
   * @return {Object}
   */


  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();

      try {
        zones = new Intl.DateTimeFormat('en', { timeZone: 'America/New_York' }).resolvedOptions().timeZone === 'America/New_York';
      } catch (e) {
        zones = false;
      }
    }

    return { intl: intl, intlTokens: intlTokens, zones: zones };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, { keepLocalTime: true }).startOf('day').valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);
  return Math.floor(Duration.fromMillis(ms).as('days'));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [['years', function (a, b) {
    return b.year - a.year;
  }], ['months', function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ['weeks', function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ['days', dayDiff]];

  var results = {};
  var lowestOrder = void 0,
      highWater = void 0;

  for (var _iterator = differs, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var _ref = _ref2;
    var unit = _ref[0];
    var differ = _ref[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;

      var delta = differ(cursor, later);

      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _highWater$minus;

        cursor = highWater.minus((_highWater$minus = {}, _highWater$minus[unit] = 1, _highWater$minus));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      if (delta > 0) {
        results[unit] = delta;
      }
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;

  var lowerOrderUnits = units.filter(function (u) {
    return ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus2;

      highWater = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[lowestOrder] = 1, _cursor$plus2));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var MISSING_FTP = 'missing Intl.DateTimeFormat.formatToParts support';

function intUnit(regex) {
  var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (i) {
    return i;
  };

  return { regex: regex, deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseInt(s));
    } };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, '\\.?');
}

function stripInsensitivities(s) {
  return s.replace(/\./, '').toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join('|')),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return { regex: regex, deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    }, groups: groups };
}

function simple(regex) {
  return { regex: regex, deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    } };
}

function unitForToken(token, loc) {
  var one = /\d/,
      two = /\d{2}/,
      three = /\d{3}/,
      four = /\d{4}/,
      oneOrTwo = /\d{1,2}/,
      oneToThree = /\d{1,3}/,
      twoToFour = /\d{2,4}/,
      literal = function literal(t) {
    return { regex: RegExp(t.val), deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      }, literal: true };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }
    switch (t.val) {
      // era
      case 'G':
        return oneOf(loc.eras('short', false), 0);
      case 'GG':
        return oneOf(loc.eras('long', false), 0);
      // years
      case 'y':
        return intUnit(/\d{1,6}/);
      case 'yy':
        return intUnit(twoToFour, untruncateYear);
      case 'yyyy':
        return intUnit(four);
      case 'yyyyy':
        return intUnit(/\d{4,6}/);
      case 'yyyyyy':
        return intUnit(/\d{6}/);
      // months
      case 'M':
        return intUnit(oneOrTwo);
      case 'MM':
        return intUnit(two);
      case 'MMM':
        return oneOf(loc.months('short', false, false), 1);
      case 'MMMM':
        return oneOf(loc.months('long', false, false), 1);
      case 'L':
        return intUnit(oneOrTwo);
      case 'LL':
        return intUnit(two);
      case 'LLL':
        return oneOf(loc.months('short', true, false), 1);
      case 'LLLL':
        return oneOf(loc.months('long', true, false), 1);
      // dates
      case 'd':
        return intUnit(oneOrTwo);
      case 'dd':
        return intUnit(two);
      // ordinals
      case 'o':
        return intUnit(oneToThree);
      case 'ooo':
        return intUnit(three);
      // time
      case 'HH':
        return intUnit(two);
      case 'H':
        return intUnit(oneOrTwo);
      case 'hh':
        return intUnit(two);
      case 'h':
        return intUnit(oneOrTwo);
      case 'mm':
        return intUnit(two);
      case 'm':
        return intUnit(oneOrTwo);
      case 's':
        return intUnit(oneOrTwo);
      case 'ss':
        return intUnit(two);
      case 'S':
        return intUnit(oneToThree);
      case 'SSS':
        return intUnit(three);
      case 'u':
        return simple(/\d{1,9}/);
      // meridiem
      case 'a':
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)
      case 'kkkk':
        return intUnit(four);
      case 'kk':
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)
      case 'W':
        return intUnit(oneOrTwo);
      case 'WW':
        return intUnit(two);
      // weekdays
      case 'E':
      case 'c':
        return intUnit(one);
      case 'EEE':
        return oneOf(loc.weekdays('short', false, false), 1);
      case 'EEEE':
        return oneOf(loc.weekdays('long', false, false), 1);
      case 'ccc':
        return oneOf(loc.weekdays('short', true, false), 1);
      case 'cccc':
        return oneOf(loc.weekdays('long', true, false), 1);
      // offset/zone
      case 'Z':
      case 'ZZ':
        return offset(/([+-]\d{1,2})(?::(\d{2}))?/, 2);
      case 'ZZZ':
        return offset(/([+-]\d{1,2})(\d{2})?/, 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are
      case 'z':
        return simple(/[A-Za-z_]{1,256}\/[A-Za-z_]{1,256}/);
      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };

  unit.token = token;

  return unit;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + '(' + r.source + ')';
  }, '');
  return ['^' + re + '$', units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;
    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;
        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }
        matchIndex += groups;
      }
    }
    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case 'S':
        return 'millisecond';
      case 's':
        return 'second';
      case 'm':
        return 'minute';
      case 'h':
      case 'H':
        return 'hour';
      case 'd':
        return 'day';
      case 'o':
        return 'ordinal';
      case 'L':
      case 'M':
        return 'month';
      case 'y':
        return 'year';
      case 'E':
      case 'c':
        return 'weekday';
      case 'W':
        return 'weekNumber';
      case 'k':
        return 'weekYear';
      default:
        return null;
    }
  };

  var zone = void 0;
  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = new IANAZone(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);
    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});

  return [vals, zone];
}

/**
 * @private
 */

function explainFromTokens(locale, input, format) {
  var tokens = Formatter.parseFormat(format),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return { input: input, tokens: tokens, invalidReason: disqualifyingUnit.invalidReason };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, 'i'),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    return { input: input, tokens: tokens, regex: regex, rawMatches: rawMatches, matches: matches, result: result, zone: zone };
  }
}

function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function lastWeekNumber(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return { month: month0 + 1, day: day };
}

/**
 * @private
 */

function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);


  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear = void 0;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = lastWeekNumber(weekYear);
  } else if (weekNumber > lastWeekNumber(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({ weekYear: weekYear, weekNumber: weekNumber, weekday: weekday }, timeObject(gregObj));
}

function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);

  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year = void 0;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(year);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({ year: year, month: month, day: day }, timeObject(weekData));
}

function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);


  return Object.assign({ year: year, ordinal: ordinal }, timeObject(gregData));
}

function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({ year: year, month: month, day: day }, timeObject(ordinalData));
}

function hasInvalidWeekData(obj) {
  var validYear = isNumber(obj.weekYear),
      validWeek = numberBetween(obj.weekNumber, 1, lastWeekNumber(obj.weekYear)),
      validWeekday = numberBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return 'weekYear out of range';
  } else if (!validWeek) {
    return 'week out of range';
  } else if (!validWeekday) {
    return 'weekday out of range';
  } else return false;
}

function hasInvalidOrdinalData(obj) {
  var validYear = isNumber(obj.year),
      validOrdinal = numberBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return 'year out of range';
  } else if (!validOrdinal) {
    return 'ordinal out of range';
  } else return false;
}

function hasInvalidGregorianData(obj) {
  var validYear = isNumber(obj.year),
      validMonth = numberBetween(obj.month, 1, 12),
      validDay = numberBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return 'year out of range';
  } else if (!validMonth) {
    return 'month out of range';
  } else if (!validDay) {
    return 'day out of range';
  } else return false;
}

function hasInvalidTimeData(obj) {
  var validHour = numberBetween(obj.hour, 0, 23),
      validMinute = numberBetween(obj.minute, 0, 59),
      validSecond = numberBetween(obj.second, 0, 59),
      validMillisecond = numberBetween(obj.millisecond, 0, 999);

  if (!validHour) {
    return 'hour out of range';
  } else if (!validMinute) {
    return 'minute out of range';
  } else if (!validSecond) {
    return 'second out of range';
  } else if (!validMillisecond) {
    return 'millisecond out of range';
  } else return false;
}

var INVALID$2 = 'Invalid DateTime',
    INVALID_INPUT = 'invalid input',
    UNSUPPORTED_ZONE = 'unsupported zone',
    UNPARSABLE$1 = 'unparsable';

// we cache week data on the DT object and this intermediates the cache
function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }
  return dt.weekData;
}

// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalidReason: inst.invalidReason
  };
  return new DateTime(Object.assign({}, current, alts, { old: current }));
}

// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000;

  // Test whether the zone matches the offset for this ts
  var o2 = tz.offset(utcGuess);

  // If so, offset didn't change and we're done
  if (o === o2) {
    return [utcGuess, o];
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= (o2 - o) * 60 * 1000;

  // If that gives us the local time we want, we're done
  var o3 = tz.offset(utcGuess);
  if (o2 === o3) {
    return [utcGuess, o2];
  }

  // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time
  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
}

// convert an epoch timestamp into a calendar object with the given offset
function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;

  var d = new Date(ts);

  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
}

// covert a calendar object to a local timestamp (epoch, but with the offset baked in)
function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond);

  // javascript is stupid and i hate it
  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(obj.year);
  }
  return +d;
}

// convert a calendar object to a epoch timestamp
function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
}

// create a new DT instance by adding a duration, adjusting for DSTs
function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as('milliseconds'),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd;
    // that could have changed the offset by going over a DST, but we want to keep the ts the same
    o = inst.zone.offset(ts);
  }

  return { ts: ts, o: o };
}

// helper useful in turning the results of parsing into real dates
// by handling the zone options
function parseDataToDateTime(parsed, parsedZone, opts) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(UNPARSABLE$1);
  }
}

// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function toTechFormat(dt, format) {
  return dt.isValid ? Formatter.create(Locale.create('en-US'), { forceSimple: true }).formatDateTimeFromString(dt, format) : null;
}

// technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling
function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === undefined ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === undefined ? false : _ref$suppressMillisec,
      _ref$includeOffset = _ref.includeOffset,
      includeOffset = _ref$includeOffset === undefined ? true : _ref$includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === undefined ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === undefined ? false : _ref$spaceZone;

  var fmt = 'HH:mm';

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += ':ss';
    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += '.SSS';
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += ' ';
  }

  if (includeZone) {
    fmt += 'z';
  } else if (includeOffset) {
    fmt += 'ZZ';
  }

  return toTechFormat(dt, fmt);
}

// defaults for unspecified units in the supported calendars
var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
};

// Units in the supported calendars, sorted by bigness
var orderedUnits$1 = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
    orderedWeekUnits = ['weekYear', 'weekNumber', 'weekday', 'hour', 'minute', 'second', 'millisecond'],
    orderedOrdinalUnits = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];

// standardize case and plurality in units
function normalizeUnit(unit) {
  var ignoreUnknown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var normalized = {
    year: 'year',
    years: 'year',
    month: 'month',
    months: 'month',
    day: 'day',
    days: 'day',
    hour: 'hour',
    hours: 'hour',
    minute: 'minute',
    minutes: 'minute',
    second: 'second',
    seconds: 'second',
    millisecond: 'millisecond',
    milliseconds: 'millisecond',
    weekday: 'weekday',
    weekdays: 'weekday',
    weeknumber: 'weekNumber',
    weeksnumber: 'weekNumber',
    weeknumbers: 'weekNumber',
    weekyear: 'weekYear',
    weekyears: 'weekYear',
    ordinal: 'ordinal'
  }[unit ? unit.toLowerCase() : unit];

  if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);

  return normalized;
}

// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _iterator = orderedUnits$1, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var u = _ref2;

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalidReason = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);
  if (invalidReason) {
    return DateTime.invalid(invalidReason);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];


  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}

/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link valueOf} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */

var DateTime = function () {
  /**
   * @access private
   */
  function DateTime(config) {
    classCallCheck(this, DateTime);

    var zone = config.zone || Settings.defaultZone,
        invalidReason = config.invalidReason || (Number.isNaN(config.ts) ? INVALID_INPUT : null) || (!zone.isValid ? UNSUPPORTED_ZONE : null);
    /**
     * @access private
     */
    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;

    var c = null,
        o = null;
    if (!invalidReason) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      c = unchanged ? config.old.c : tsToObj(this.ts, zone.offset(this.ts));
      o = unchanged ? config.old.o : zone.offset(this.ts);
    }

    /**
     * @access private
     */
    this.zone = zone;
    /**
     * @access private
     */
    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */
    this.invalid = invalidReason;
    /**
     * @access private
     */
    this.weekData = null;
    /**
     * @access private
     */
    this.c = c;
    /**
     * @access private
     */
    this.o = o;
  }

  // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} year - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.675
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({ ts: Settings.now() });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  };

  /**
   * Create a DateTime in UTC
   * @param {number} year - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.675Z
   * @return {DateTime}
   */


  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  };

  /**
   * Create an DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */


  DateTime.fromJSDate = function fromJSDate(date) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new DateTime({
      ts: isDate(date) ? date.valueOf() : NaN,
      zone: normalizeZone(options.zone, Settings.defaultZone),
      loc: Locale.fromObject(options)
    });
  };

  /**
   * Create an DateTime from a count of epoch milliseconds. Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */


  DateTime.fromMillis = function fromMillis(milliseconds) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return new DateTime({
      ts: milliseconds,
      zone: normalizeZone(options.zone, Settings.defaultZone),
      loc: Locale.fromObject(options)
    });
  };

  /**
   * Create an DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01T00'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */


  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);
    if (!zoneToUse.isValid) {
      return DateTime.invalid(UNSUPPORTED_ZONE);
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, true),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj);

    // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor;

    // configure ourselves to deal with gregorian dates or week stuff
    var units = void 0,
        defaultValues = void 0,
        objNow = tsToObj(tsNow, offsetProvis);
    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    }

    // set default values for missing stuff
    var foundFirst = false;
    for (var _iterator2 = units, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var u = _ref3;

      var v = normalized[u];
      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    }

    // make sure the values we have are in range
    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalidReason = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalidReason) {
      return DateTime.invalid(invalidReason);
    }

    // compute the actual time
    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    });

    // gregorian data + weekday serves only to validate
    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid('mismatched weekday');
    }

    return inst;
  };

  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */


  DateTime.fromISO = function fromISO(text) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts);
  };

  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Tue, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */


  DateTime.fromRFC2822 = function fromRFC2822(text) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts);
  };

  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} options - options to affect the creation
   * @param {string|Zone} [options.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [options.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [options.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */


  DateTime.fromHTTP = function fromHTTP(text) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, options);
  };

  /**
   * Create a DateTime from an input string and format string
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options to affect the creation
   * @param {string|Zone} [options.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [options.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [options.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} options.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */


  DateTime.fromFormat = function fromFormat(text, fmt) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError('fromFormat requires an input string and a format');
    }

    var _options$locale = options.locale,
        locale = _options$locale === undefined ? null : _options$locale,
        _options$numberingSys = options.numberingSystem,
        numberingSystem = _options$numberingSys === undefined ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({ locale: locale, numberingSystem: numberingSystem, defaultToEN: true }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalidReason = _parseFromTokens[2];

    if (invalidReason) {
      return DateTime.invalid(invalidReason);
    } else {
      return parseDataToDateTime(vals, parsedZone, options);
    }
  };

  /**
   * @deprecated use fromFormat instead
   */


  DateTime.fromString = function fromString(text, fmt) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return DateTime.fromFormat(text, fmt, opts);
  };

  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} options - options to affect the creation
   * @param {string|Zone} [options.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [options.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [options.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} options.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */


  DateTime.fromSQL = function fromSQL(text) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, options);
  };

  /**
   * Create an invalid DateTime.
   * @return {DateTime}
   */


  DateTime.invalid = function invalid(reason) {
    if (!reason) {
      throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
    }
    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(reason);
    } else {
      return new DateTime({ invalidReason: reason });
    }
  };

  // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */


  DateTime.prototype.get = function get$$1(unit) {
    return this[unit];
  };

  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */


  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  DateTime.prototype.resolvedLocaleOpts = function resolvedLocaleOpts() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return { locale: locale, numberingSystem: numberingSystem, outputCalendar: calendar };
  };

  // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */


  DateTime.prototype.toUTC = function toUTC() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  };

  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */


  DateTime.prototype.toLocal = function toLocal() {
    return this.setZone(new LocalZone());
  };

  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same UTC timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'utc+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */


  DateTime.prototype.setZone = function setZone(zone) {
    var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref4$keepLocalTime = _ref4.keepLocalTime,
        keepLocalTime = _ref4$keepLocalTime === undefined ? false : _ref4$keepLocalTime,
        _ref4$keepCalendarTim = _ref4.keepCalendarTime,
        keepCalendarTime = _ref4$keepCalendarTim === undefined ? false : _ref4$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);
    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(UNSUPPORTED_ZONE);
    } else {
      var newTS = keepLocalTime || keepCalendarTime // keepCalendarTime is the deprecated name for keepLocalTime
      ? this.ts + (this.o - zone.offset(this.ts)) * 60 * 1000 : this.ts;
      return clone$1(this, { ts: newTS, zone: zone });
    }
  };

  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */


  DateTime.prototype.reconfigure = function reconfigure() {
    var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        locale = _ref5.locale,
        numberingSystem = _ref5.numberingSystem,
        outputCalendar = _ref5.outputCalendar;

    var loc = this.loc.clone({ locale: locale, numberingSystem: numberingSystem, outputCalendar: outputCalendar });
    return clone$1(this, { loc: loc });
  };

  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */


  DateTime.prototype.setLocale = function setLocale(locale) {
    return this.reconfigure({ locale: locale });
  };

  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */


  DateTime.prototype.set = function set$$1(values) {
    if (!this.isValid) return this;

    var normalized = normalizeObject(values, normalizeUnit),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);

    var mixed = void 0;
    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized);

      // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month
      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS3 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS3[0],
        o = _objToTS3[1];

    return clone$1(this, { ts: ts, o: o });
  };

  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 1 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 1 hr, 13 min
   * @return {DateTime}
   */


  DateTime.prototype.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  };

  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */


  DateTime.prototype.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  };

  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */


  DateTime.prototype.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);
    switch (normalizedUnit) {
      case 'years':
        o.month = 1;
      // falls through
      case 'quarters':
      case 'months':
        o.day = 1;
      // falls through
      case 'weeks':
      case 'days':
        o.hour = 0;
      // falls through
      case 'hours':
        o.minute = 0;
      // falls through
      case 'minutes':
        o.second = 0;
      // falls through
      case 'seconds':
        o.millisecond = 0;
        break;
      case 'milliseconds':
        break;
      default:
        throw new InvalidUnitError(unit);
    }

    if (normalizedUnit === 'weeks') {
      o.weekday = 1;
    }

    if (normalizedUnit === 'quarters') {
      o.month = Math.floor(this.month / 3) * 3 + 1;
    }

    return this.set(o);
  };

  /**
   * "Set" this DateTime to the end (i.e. the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-03T00:00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */


  DateTime.prototype.endOf = function endOf(unit) {
    var _startOf$plus;

    return this.isValid ? this.startOf(unit).plus((_startOf$plus = {}, _startOf$plus[unit] = 1, _startOf$plus)).minus(1) : this;
  };

  // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. See the documentation for the specific format tokens supported.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} opts.round - round numerical values
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */


  DateTime.prototype.toFormat = function toFormat(fmt) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(), opts).formatDateTimeFromString(this, fmt) : INVALID$2;
  };

  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation.
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit'}); //=> 'Thu, Apr 20'
   * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}); //=> 'Thu, Apr 20, 11:27'
   * @example DateTime.local().toLocaleString({hour: '2-digit', minute: '2-digit'}); //=> '11:32'
   * @return {string}
   */


  DateTime.prototype.toLocaleString = function toLocaleString() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DATE_SHORT;

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  };

  /**
   * Returns an array of format "parts", i.e. individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleString(); //=> [
   *                                    //=>   { type: 'day', value: '25' },
   *                                    //=>   { type: 'literal', value: '/' },
   *                                    //=>   { type: 'month', value: '05' },
   *                                    //=>   { type: 'literal', value: '/' },
   *                                    //=>   { type: 'year', value: '1982' }
   *                                    //=> ]
   */


  DateTime.prototype.toLocaleParts = function toLocaleParts() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  };

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @return {string}
   */


  DateTime.prototype.toISO = function toISO() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.isValid) {
      return null;
    }

    return this.toISODate() + 'T' + this.toISOTime(opts);
  };

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @return {string}
   */


  DateTime.prototype.toISODate = function toISODate() {
    return toTechFormat(this, 'yyyy-MM-dd');
  };

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */


  DateTime.prototype.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  };

  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().hour(7).minute(34).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().hour(7).minute(34).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @return {string}
   */


  DateTime.prototype.toISOTime = function toISOTime() {
    var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref6$suppressMillise = _ref6.suppressMilliseconds,
        suppressMilliseconds = _ref6$suppressMillise === undefined ? false : _ref6$suppressMillise,
        _ref6$suppressSeconds = _ref6.suppressSeconds,
        suppressSeconds = _ref6$suppressSeconds === undefined ? false : _ref6$suppressSeconds,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === undefined ? true : _ref6$includeOffset;

    return toTechTimeFormat(this, { suppressSeconds: suppressSeconds, suppressMilliseconds: suppressMilliseconds, includeOffset: includeOffset });
  };

  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */


  DateTime.prototype.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, 'EEE, dd LLL yyyy hh:mm:ss ZZZ');
  };

  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */


  DateTime.prototype.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  };

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */


  DateTime.prototype.toSQLDate = function toSQLDate() {
    return toTechFormat(this, 'yyyy-MM-dd');
  };

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */


  DateTime.prototype.toSQLTime = function toSQLTime() {
    var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref7$includeOffset = _ref7.includeOffset,
        includeOffset = _ref7$includeOffset === undefined ? true : _ref7$includeOffset,
        _ref7$includeZone = _ref7.includeZone,
        includeZone = _ref7$includeZone === undefined ? false : _ref7$includeZone;

    return toTechTimeFormat(this, { includeOffset: includeOffset, includeZone: includeZone, spaceZone: true });
  };

  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: false }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */


  DateTime.prototype.toSQL = function toSQL() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + ' ' + this.toSQLTime(opts);
  };

  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */


  DateTime.prototype.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  };

  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */


  DateTime.prototype.inspect = function inspect() {
    if (this.isValid) {
      return 'DateTime {\n  ts: ' + this.toISO() + ',\n  zone: ' + this.zone.name + ',\n  locale: ' + this.locale + ' }';
    } else {
      return 'DateTime { Invalid, reason: ' + this.invalidReason + ' }';
    }
  };

  /**
   * Returns the epoch milliseconds of this DateTime
   * @return {number}
   */


  DateTime.prototype.valueOf = function valueOf() {
    return this.isValid ? this.ts : NaN;
  };

  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */


  DateTime.prototype.toJSON = function toJSON() {
    return this.toISO();
  };

  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */


  DateTime.prototype.toObject = function toObject() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.isValid) return {};

    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }
    return base;
  };

  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */


  DateTime.prototype.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  };

  // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */


  DateTime.prototype.diff = function diff(otherDateTime) {
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'milliseconds';
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!this.isValid || !otherDateTime.isValid) return Duration.invalid(this.invalidReason || otherDateTime.invalidReason);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, opts);

    return otherIsLater ? diffed.negate() : diffed;
  };

  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  DateTime.prototype.diffNow = function diffNow() {
    var unit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'milliseconds';
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return this.diff(DateTime.local(), unit, opts);
  };

  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */


  DateTime.prototype.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  };

  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */


  DateTime.prototype.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;
    if (unit === 'millisecond') {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  };

  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */


  DateTime.prototype.equals = function equals(other) {
    return this.isValid && other.isValid ? this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc) : false;
  };

  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */


  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  };

  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */


  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  };

  // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */


  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$locale2 = options.locale,
        locale = _options$locale2 === undefined ? null : _options$locale2,
        _options$numberingSys2 = options.numberingSystem,
        numberingSystem = _options$numberingSys2 === undefined ? null : _options$numberingSys2,
        localeToUse = Locale.fromOpts({ locale: locale, numberingSystem: numberingSystem, defaultToEN: true });

    return explainFromTokens(localeToUse, text, fmt);
  };

  /**
   * @deprecated use fromFormatExplain instead
   */


  DateTime.fromStringExplain = function fromStringExplain(text, fmt) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return DateTime.fromFormatExplain(text, fmt, options);
  };

  // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */


  createClass(DateTime, [{
    key: 'isValid',
    get: function get$$1() {
      return this.invalidReason === null;
    }

    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: 'invalidReason',
    get: function get$$1() {
      return this.invalid;
    }

    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: 'locale',
    get: function get$$1() {
      return this.isValid ? this.loc.locale : null;
    }

    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: 'numberingSystem',
    get: function get$$1() {
      return this.isValid ? this.loc.numberingSystem : null;
    }

    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: 'outputCalendar',
    get: function get$$1() {
      return this.isValid ? this.loc.outputCalendar : null;
    }

    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: 'zoneName',
    get: function get$$1() {
      return this.isValid ? this.zone.name : null;
    }

    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: 'year',
    get: function get$$1() {
      return this.isValid ? this.c.year : NaN;
    }

    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: 'quarter',
    get: function get$$1() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: 'month',
    get: function get$$1() {
      return this.isValid ? this.c.month : NaN;
    }

    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: 'day',
    get: function get$$1() {
      return this.isValid ? this.c.day : NaN;
    }

    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: 'hour',
    get: function get$$1() {
      return this.isValid ? this.c.hour : NaN;
    }

    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: 'minute',
    get: function get$$1() {
      return this.isValid ? this.c.minute : NaN;
    }

    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: 'second',
    get: function get$$1() {
      return this.isValid ? this.c.second : NaN;
    }

    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: 'millisecond',
    get: function get$$1() {
      return this.isValid ? this.c.millisecond : NaN;
    }

    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: 'weekYear',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }

    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: 'weekNumber',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }

    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: 'weekday',
    get: function get$$1() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }

    /**
     * Get the ordinal (i.e. the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: 'ordinal',
    get: function get$$1() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }

    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: 'monthShort',
    get: function get$$1() {
      return this.isValid ? Info.months('short', { locale: this.locale })[this.month - 1] : null;
    }

    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: 'monthLong',
    get: function get$$1() {
      return this.isValid ? Info.months('long', { locale: this.locale })[this.month - 1] : null;
    }

    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: 'weekdayShort',
    get: function get$$1() {
      return this.isValid ? Info.weekdays('short', { locale: this.locale })[this.weekday - 1] : null;
    }

    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: 'weekdayLong',
    get: function get$$1() {
      return this.isValid ? Info.weekdays('long', { locale: this.locale })[this.weekday - 1] : null;
    }

    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: 'offset',
    get: function get$$1() {
      return this.isValid ? this.zone.offset(this.ts) : NaN;
    }

    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: 'offsetNameShort',
    get: function get$$1() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: 'short',
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: 'offsetNameLong',
    get: function get$$1() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: 'long',
          locale: this.locale
        });
      } else {
        return null;
      }
    }

    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: 'isOffsetFixed',
    get: function get$$1() {
      return this.isValid ? this.zone.universal : null;
    }

    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: 'isInDST',
    get: function get$$1() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({ month: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
      }
    }

    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: 'isInLeapYear',
    get: function get$$1() {
      return isLeapYear(this.year);
    }

    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: 'daysInMonth',
    get: function get$$1() {
      return daysInMonth(this.year, this.month);
    }

    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: 'daysInYear',
    get: function get$$1() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
  }], [{
    key: 'DATE_SHORT',
    get: function get$$1() {
      return DATE_SHORT;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: 'DATE_MED',
    get: function get$$1() {
      return DATE_MED;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: 'DATE_FULL',
    get: function get$$1() {
      return DATE_FULL;
    }

    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: 'DATE_HUGE',
    get: function get$$1() {
      return DATE_HUGE;
    }

    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'TIME_SIMPLE',
    get: function get$$1() {
      return TIME_SIMPLE;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'TIME_WITH_SECONDS',
    get: function get$$1() {
      return TIME_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'TIME_WITH_SHORT_OFFSET',
    get: function get$$1() {
      return TIME_WITH_SHORT_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'TIME_WITH_LONG_OFFSET',
    get: function get$$1() {
      return TIME_WITH_LONG_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: 'TIME_24_SIMPLE',
    get: function get$$1() {
      return TIME_24_SIMPLE;
    }

    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: 'TIME_24_WITH_SECONDS',
    get: function get$$1() {
      return TIME_24_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: 'TIME_24_WITH_SHORT_OFFSET',
    get: function get$$1() {
      return TIME_24_WITH_SHORT_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: 'TIME_24_WITH_LONG_OFFSET',
    get: function get$$1() {
      return TIME_24_WITH_LONG_OFFSET;
    }

    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_SHORT',
    get: function get$$1() {
      return DATETIME_SHORT;
    }

    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_SHORT_WITH_SECONDS',
    get: function get$$1() {
      return DATETIME_SHORT_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_MED',
    get: function get$$1() {
      return DATETIME_MED;
    }

    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_MED_WITH_SECONDS',
    get: function get$$1() {
      return DATETIME_MED_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_FULL',
    get: function get$$1() {
      return DATETIME_FULL;
    }

    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:303 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_FULL_WITH_SECONDS',
    get: function get$$1() {
      return DATETIME_FULL_WITH_SECONDS;
    }

    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_HUGE',
    get: function get$$1() {
      return DATETIME_HUGE;
    }

    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: 'DATETIME_HUGE_WITH_SECONDS',
    get: function get$$1() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);
  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (dateTimeish instanceof DateTime) {
    return dateTimeish;
  } else if (dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish instanceof Object) {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError('Unknown datetime argument');
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.Interval = Interval;
exports.Info = Info;
exports.Zone = Zone;
exports.Settings = Settings;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/component-normalizer.js":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05456f18\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/profileDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "px-4 border-l flex items-center cursor-pointer p-4" },
    [
      _c(
        "div",
        {
          staticClass: "flex flex-row items-center",
          attrs: { id: "profile-dropdown" },
          on: { click: _vm.toggleProfileDropdown }
        },
        [
          _c("img", {
            staticClass: "w-10 h-10 rounded-full md:mr-2",
            attrs: { src: _vm.generateUrl(_vm.user.avatar) }
          }),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "text-grey-darker text-base no-underline hidden md:block"
            },
            [
              _vm._v("\n      " + _vm._s(_vm.user.name) + "\n      "),
              _c("i", {
                staticClass: "fa fa-angle-down",
                attrs: { "aria-hidden": "true" }
              })
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.profileDropdownShown
        ? _c(
            "div",
            {
              staticClass:
                "absolute bg-white w-48 pin-r mr-2 py-1 shadow-lg rounded",
              staticStyle: { top: "3.5rem" },
              attrs: { id: "profile-menu" }
            },
            [
              _c(
                "a",
                {
                  staticClass:
                    "px-4 py-2 hover:bg-teal hover:text-white no-underline text-grey-dark block font-medium",
                  attrs: { href: _vm.profileUrl }
                },
                [_vm._m(0), _vm._v("\n          Your profile\n    ")]
              ),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("span", { staticClass: "block border-t" }),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass:
                    "px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block",
                  attrs: { href: _vm.url.logout },
                  on: { click: _vm.logoutUser }
                },
                [_vm._m(3), _vm._v("\n      Logout\n    ")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticStyle: { display: "none" },
          attrs: { id: "logout-form", action: _vm.url.logout, method: "POST" }
        },
        [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.token }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "w-6 inline-block" }, [
      _c("i", { staticClass: "pr-1 fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block",
        attrs: { href: "/admin" }
      },
      [
        _c("span", { staticClass: "w-6 inline-block" }, [
          _c("i", { staticClass: "pr-1 fas fa-shield-alt font-regular" })
        ]),
        _vm._v("\n      Admin\n    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "px-4 py-2 hover:bg-teal hover:text-white text-grey-dark font-medium no-underline block",
        attrs: { href: "#" }
      },
      [
        _c("span", { staticClass: "w-6 inline-block" }, [
          _c("i", { staticClass: "pr-1 fa fa-cog font-regular" })
        ]),
        _vm._v("\n      Settings\n    ")
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "w-6 inline-block" }, [
      _c("i", { staticClass: "pr-1 fas fa-sign-out-alt font-regular" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-05456f18", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-13ba2b73\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/fileUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("form", { attrs: { method: "post", enctype: "multipart/form-data" } }, [
      _c("input", {
        staticClass: "hidden",
        attrs: {
          type: "file",
          name: "avatar",
          id: "avatar",
          accept: "image/*"
        },
        on: { change: _vm.selectFile }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass:
            "bg-transparent text-grey-darker hover:text-teal py-2 px-4 border border-grey-light hover:border-teal rounded",
          attrs: {
            onclick: "document.getElementById('avatar').click(); return false;"
          }
        },
        [_vm._v("Change Your Avatar")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-13ba2b73", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ee39b82\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/other.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pt-8 bg-white rounded shadow py-8" }, [
    _c("div", { staticClass: "flex flex-col items-center" }, [
      _c("img", {
        staticClass: "w-32 h-32 rounded-full",
        attrs: {
          src: "/image/avatar-profile.png",
          alt: "Default avatar of " + _vm.user.name
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-grey-darker text-2xl font-semibold py-2 px-8" },
        [_vm._v("\n            " + _vm._s(_vm.user.name) + "\n        ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "text-grey-dark text-lg py-2 px-8" }, [
        _vm._v("\n            " + _vm._s(_vm.user.designation) + "\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-grey-dark py-2 px-8" }, [
        _vm._v("\n            " + _vm._s(_vm.userLocalTime) + "\n        ")
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-grey-darker pt-2 pb-4 px-8 leading-normal" },
        [_vm._v("\n            " + _vm._s(_vm.user.bio) + "\n        ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "text-grey-darker pt-8 self-start px-8 bg-grey-lighter w-full pb-8"
        },
        [
          _c(
            "div",
            [
              _vm._v("\n                Belongs to:\n                "),
              _vm._l(_vm.user.projects, function(project) {
                return _c(
                  "a",
                  {
                    staticClass:
                      "bg-pink-lighter hover:bg-pink rounded font-medium p-2 mx-2 no-underline text-white",
                    attrs: { href: "/projects/" + project.slug }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(project.name) +
                        "\n                "
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _vm._l(_vm.user.teams, function(team) {
                return _c(
                  "a",
                  {
                    staticClass:
                      "bg-pink-lighter hover:bg-pink rounded font-medium p-2 mx-2 no-underline text-white",
                    attrs: { href: "/teams/" + team.slug }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(team.name) +
                        "\n                "
                    )
                  ]
                )
              })
            ],
            2
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1ee39b82", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3cd7fe1b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationPopup.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "fixed pin-t bg-white text-lg rounded container mx-auto md:w-1/2 mt-16 py-6 px-8 shadow-lg",
      class: [
        _vm.notificationShown ? "" : "hidden",
        _vm.messageType === "success" ? "text-teal-light" : "text-red"
      ],
      staticStyle: { left: "0", right: "0", "max-width": "640px" }
    },
    [
      _vm._v("\n    " + _vm._s(_vm.message) + " \n    "),
      _c(
        "div",
        { staticClass: "inline", on: { click: _vm.closeNotification } },
        [_c("i", { staticClass: "fas fa-times float-right cursor-pointer" })]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3cd7fe1b", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46c8fb34\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "bg-white flex flex-row justify-between h-12 pl-4 md:px-4 shadow"
    },
    [
      _c(
        "a",
        {
          staticClass: "text-teal text-2xl no-underline self-center",
          attrs: { href: _vm.url.site }
        },
        [_vm._v("\n      GOODWORK\n  ")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "md:flex" }, [
        _c(
          "div",
          { staticClass: "flex flex-row border-l h-full" },
          [_c("notification-dropdown"), _vm._v(" "), _c("profile-dropdown")],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-46c8fb34", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67aa7cc2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/account.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-white rounded shadow py-8 mt-8" }, [
    _c("div", { staticClass: "flex flex-col py-4" }, [
      _c("div", { staticClass: "mb-4 px-8" }, [
        _c(
          "label",
          {
            staticClass: "block text-grey-darker text-sm font-bold mb-2",
            attrs: { for: "username" }
          },
          [_vm._v("\n        Email\n      ")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.email,
              expression: "email"
            }
          ],
          staticClass:
            "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
          attrs: {
            id: "email",
            type: "email",
            placeholder: "john@example.com"
          },
          domProps: { value: _vm.email },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.email = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.errorMessage.email
          ? _c("div", { staticClass: "text-red text-base pt-2" }, [
              _vm._v("\n        " + _vm._s(_vm.errorMessage.email) + "\n      ")
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "border-half mt-4 mb-8" }),
      _vm._v(" "),
      _c("div", { staticClass: "mb-8 px-8" }, [
        _c(
          "label",
          {
            staticClass: "block text-grey-darker text-sm font-bold mb-2",
            attrs: { for: "username" }
          },
          [_vm._v("\n        Current Password\n      ")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.currentPassword,
              expression: "currentPassword"
            }
          ],
          staticClass:
            "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
          attrs: {
            id: "current_password",
            type: "password",
            placeholder: "******"
          },
          domProps: { value: _vm.currentPassword },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.currentPassword = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.errorMessage.current_password
          ? _c("div", { staticClass: "text-red text-base pt-2" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.errorMessage.current_password) +
                  "\n      "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-8 px-8" }, [
        _c(
          "label",
          {
            staticClass: "block text-grey-darker text-sm font-bold mb-2",
            attrs: { for: "username" }
          },
          [_vm._v("\n        New Password\n      ")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newPassword,
              expression: "newPassword"
            }
          ],
          staticClass:
            "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
          attrs: {
            id: "new_password",
            type: "password",
            placeholder: "******"
          },
          domProps: { value: _vm.newPassword },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newPassword = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.errorMessage.new_password
          ? _c("div", { staticClass: "text-red text-base pt-2" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.errorMessage.new_password) +
                  "\n      "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-8 px-8" }, [
        _c(
          "label",
          {
            staticClass: "block text-grey-darker text-sm font-bold mb-2",
            attrs: { for: "username" }
          },
          [_vm._v("\n        Confirm Password\n      ")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newPasswordConfirmation,
              expression: "newPasswordConfirmation"
            }
          ],
          staticClass:
            "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
          attrs: {
            id: "confirm_password",
            type: "password",
            placeholder: "******"
          },
          domProps: { value: _vm.newPasswordConfirmation },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newPasswordConfirmation = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.errorMessage.new_password_confirmation
          ? _c("div", { staticClass: "text-red text-base pt-2" }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.errorMessage.new_password_confirmation) +
                  "\n      "
              )
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "my-6 px-8" }, [
        _c(
          "a",
          {
            staticClass:
              "font-bold rounded shadow bg-teal-light p-4 text-white hover:shadow-lg hover:font-bold hover:bg-teal-dark no-underline",
            attrs: { href: "#" },
            on: { click: _vm.update }
          },
          [_vm._v("\n        Update\n      ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "border-half mt-4 mb-8" }),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-4 px-8" }, [
      _c(
        "a",
        {
          staticClass:
            "rounded p-4 text-red-light border border-grey-light hover:font-bold hover:border-0 hover:shadow-lg hover:bg-red-light hover:text-white no-underline",
          attrs: { href: "#" }
        },
        [_vm._v("\n        Delete account\n      ")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-67aa7cc2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b9bcb9ca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/profile.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "flex flex-col mx-4 md:mx-auto my-8 max-w-md" },
    [
      _vm.user.id === _vm.authUser.id
        ? [
            _c(
              "div",
              {
                staticClass:
                  "bg-white rounded shadow flex flex-row text-center text-grey-darker"
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "w-1/2 p-4",
                    class: [
                      _vm.activeTab === "profile"
                        ? "text-white bg-teal-light"
                        : "cursor-pointer"
                    ],
                    on: {
                      click: function($event) {
                        _vm.activateTab("profile")
                      }
                    }
                  },
                  [_vm._v("\n        Profile\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "w-1/2 p-4",
                    class: [
                      _vm.activeTab === "account"
                        ? "text-white bg-teal-light"
                        : "cursor-pointer"
                    ],
                    on: {
                      click: function($event) {
                        _vm.activateTab("account")
                      }
                    }
                  },
                  [_vm._v("\n        Account\n      ")]
                )
              ]
            ),
            _vm._v(" "),
            _vm.activeTab === "account"
              ? _c("account", { attrs: { user: _vm.authUser } })
              : _vm._e(),
            _vm._v(" "),
            _vm.activeTab === "profile"
              ? _c("own", { attrs: { user: _vm.authUser } })
              : _vm._e()
          ]
        : _c("other", { attrs: { user: _vm.user } })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9bcb9ca", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5af9c1c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "px-4 self-center" }, [
    _c(
      "div",
      {
        staticClass: "text-teal-light text-base no-underline cursor-pointer",
        attrs: { id: "notification" },
        on: { click: _vm.toggleNotification }
      },
      [
        _c("i", {
          staticClass: "far fa-bell font-bold text-xl",
          attrs: { "aria-hidden": "true" }
        }),
        _vm._v(" "),
        _vm.unreadNotification
          ? _c("i", {
              staticClass:
                "fa fa-circle text-red-light text-sm absolute pin-t mt-3 ml-3",
              attrs: { "aria-hidden": "true" }
            })
          : _vm._e()
      ]
    ),
    _vm._v(" "),
    _vm.notificationShown
      ? _c(
          "div",
          {
            staticClass:
              "absolute bg-white w-64 mt-6 mr-8 py-4 shadow-lg rounded",
            staticStyle: { right: "5%" }
          },
          [
            _c(
              "a",
              {
                staticClass:
                  "flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block",
                attrs: { href: "#" }
              },
              [
                _c("img", {
                  staticClass: "w-10 h-10 rounded-full mr-2",
                  attrs: { src: _vm.generateUrl(_vm.user.avatar) }
                }),
                _vm._v(" "),
                _vm._m(0)
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "flex flex-row items-center list-reset px-4 py-2 text-grey-dark no-underline block",
                attrs: { href: "#" }
              },
              [
                _c("img", {
                  staticClass: "w-10 h-10 rounded-full mr-2",
                  attrs: { src: _vm.generateUrl(_vm.user.avatar) }
                }),
                _vm._v(" "),
                _vm._m(1)
              ]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "block border-t" }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "list-reset px-4 pt-2 text-blue-light text-center no-underline block",
                attrs: { href: "/notifications" }
              },
              [_vm._v("\n            View All\n        ")]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "py-1 text-sm" }, [
        _vm._v("\n                    commented on your post\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-1 text-xs" }, [
        _vm._v("\n                    2 min ago\n                ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "py-1 text-sm" }, [
        _vm._v("\n                    commented on your post\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "py-1 text-xs" }, [
        _vm._v("\n                    2 min ago\n                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e5af9c1c", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f57f6110\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/own.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-white rounded shadow py-8 mt-8" }, [
    _c("div", { staticClass: "flex flex-col items-center" }, [
      _c("img", {
        staticClass: "w-32 h-32 rounded-full",
        attrs: { src: _vm.avatar, alt: "Default avatar of " + _vm.user.name }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-grey-darker text-2xl font-semibold py-4" },
        [_vm._v("\n            " + _vm._s(_vm.user.name) + "\n        ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {},
        [
          _c("file-upload", {
            attrs: { user: _vm.user },
            on: { "image-loaded": _vm.updateImage }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("form", { staticClass: "px-8 pt-6" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "mb-6" }, [
        _c(
          "label",
          {
            staticClass: "block text-grey-darker text-sm font-bold mb-2",
            attrs: { for: "timezone" }
          },
          [_vm._v("\n                Time Zone\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "relative" }, [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current h-4 w-4",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    }
                  })
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mb-6" }, [
        _c(
          "label",
          {
            staticClass: "block text-grey-darker text-sm font-bold mb-2",
            attrs: { for: "weekstart" }
          },
          [_vm._v("\n                First Day of the Week\n            ")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "relative" }, [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"
            },
            [
              _c(
                "svg",
                {
                  staticClass: "fill-current h-4 w-4",
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20"
                  }
                },
                [
                  _c("path", {
                    attrs: {
                      d:
                        "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    }
                  })
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(5)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-6" }, [
      _c(
        "label",
        {
          staticClass: "block text-grey-darker text-sm font-bold mb-2",
          attrs: { for: "username" }
        },
        [_vm._v("\n                Name\n            ")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
        attrs: { id: "username", type: "text", placeholder: "Nehal Hasnayeen" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-6" }, [
      _c(
        "label",
        {
          staticClass: "block text-grey-darker text-sm font-bold mb-2",
          attrs: { for: "title" }
        },
        [_vm._v("\n                Title at Goodwork\n            ")]
      ),
      _vm._v(" "),
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
        attrs: { id: "title", type: "text", placeholder: "Developer" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mb-6" }, [
      _c(
        "label",
        {
          staticClass: "block text-grey-darker text-sm font-bold mb-2",
          attrs: { for: "title" }
        },
        [_vm._v("\n                Short Bio\n            ")]
      ),
      _vm._v(" "),
      _c("textarea", {
        staticClass:
          "shadow appearance-none resize-none border rounded w-full py-2 px-3 text-grey-darker",
        attrs: {
          id: "bio",
          type: "text",
          rows: "3",
          placeholder: "About Yourself"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "select",
      {
        staticClass:
          "shadow appearance-none border rounded w-full px-3 py-2 text-grey-darker bg-grey-lighter text-grey-darker",
        attrs: { id: "grid-state" }
      },
      [
        _c("option", [_vm._v("Asia/Dhaka (+6)")]),
        _vm._v(" "),
        _c("option", [_vm._v("Missouri")]),
        _vm._v(" "),
        _c("option", [_vm._v("Texas")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "select",
      {
        staticClass:
          "shadow appearance-none border rounded w-full px-3 py-2 text-grey-darker bg-grey-lighter text-grey-darker",
        attrs: { id: "weekstart" }
      },
      [
        _c("option", [_vm._v("Saturday")]),
        _vm._v(" "),
        _c("option", [_vm._v("Sunday")]),
        _vm._v(" "),
        _c("option", [_vm._v("Monday")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-8" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-teal hover:bg-teal-dark text-white font-bold p-4 rounded shadow hover:shadow-lg",
          attrs: { type: "button" }
        },
        [_vm._v("\n                Update\n            ")]
      ),
      _vm._v(" "),
      _c("div")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f57f6110", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_echo__ = __webpack_require__("./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_laravel_echo__);

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'

  /**
   * Echo exposes an expressive API for subscribing to channels and listening
   * for events that are broadcast by Laravel. Echo and event broadcasting
   * allows your team to easily build robust real-time web applications.
   */

};if (typeof io !== 'undefined') {
  window.Echo = new __WEBPACK_IMPORTED_MODULE_0_laravel_echo___default.a({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001'
  });
}

window.Vue.mixin({
  methods: {
    generateUrl: function generateUrl(value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg';
      value = value.toString();
      return window.location.protocol + '//' + window.location.host + '/' + value;
    }
  }
});

window.EventBus = new Vue();

/***/ }),

/***/ "./resources/assets/js/components/partials/fileUpload.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/fileUpload.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-13ba2b73\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/fileUpload.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/fileUpload.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13ba2b73", Component.options)
  } else {
    hotAPI.reload("data-v-13ba2b73", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/navbar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/navbar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-46c8fb34\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/navbar.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/navbar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46c8fb34", Component.options)
  } else {
    hotAPI.reload("data-v-46c8fb34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/notificationDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationDropdown.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5af9c1c\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationDropdown.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/notificationDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5af9c1c", Component.options)
  } else {
    hotAPI.reload("data-v-e5af9c1c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/notificationPopup.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/notificationPopup.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3cd7fe1b\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/notificationPopup.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/notificationPopup.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3cd7fe1b", Component.options)
  } else {
    hotAPI.reload("data-v-3cd7fe1b", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/profileDropdown.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/profileDropdown.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-05456f18\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/profileDropdown.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/partials/profileDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05456f18", Component.options)
  } else {
    hotAPI.reload("data-v-05456f18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/users/account.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/account.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-67aa7cc2\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/account.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/users/account.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67aa7cc2", Component.options)
  } else {
    hotAPI.reload("data-v-67aa7cc2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/users/other.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/other.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1ee39b82\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/other.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/users/other.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ee39b82", Component.options)
  } else {
    hotAPI.reload("data-v-1ee39b82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/users/own.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/own.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-f57f6110\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/own.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/users/own.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f57f6110", Component.options)
  } else {
    hotAPI.reload("data-v-f57f6110", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/users/profile.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/users/profile.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b9bcb9ca\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/users/profile.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/users/profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9bcb9ca", Component.options)
  } else {
    hotAPI.reload("data-v-b9bcb9ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/users/profile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__("./resources/assets/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_partials_navbar_vue__ = __webpack_require__("./resources/assets/js/components/partials/navbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_partials_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_partials_navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_profile_vue__ = __webpack_require__("./resources/assets/js/components/users/profile.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_users_profile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue__ = __webpack_require__("./resources/assets/js/components/partials/notificationPopup.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue__);





/* eslint-disable no-unused-vars */
var app = new Vue({
  el: '#app',
  components: {
    navbar: __WEBPACK_IMPORTED_MODULE_1__components_partials_navbar_vue___default.a, profile: __WEBPACK_IMPORTED_MODULE_2__components_users_profile_vue___default.a, notificationPopup: __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue___default.a
  }
});

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pages/users/profile.js");


/***/ })

},[6]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ZpbGVVcGxvYWQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9hY2NvdW50LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL290aGVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL293bi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9wcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGFyYXZlbC1lY2hvL2Rpc3QvZWNoby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbHV4b24vYnVpbGQvY2pzLWJyb3dzZXIvbHV4b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlPzdiMGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ZpbGVVcGxvYWQudnVlPzFkZjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL290aGVyLnZ1ZT8zMmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWU/YmY5MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZT9lOWE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9hY2NvdW50LnZ1ZT9mNDY4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9wcm9maWxlLnZ1ZT85NTMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWU/OWY1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvb3duLnZ1ZT9mMmE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9maWxlVXBsb2FkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL2FjY291bnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9vdGhlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL293bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL3Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvdXNlcnMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJWdWUiLCJyZXF1aXJlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiaW8iLCJFY2hvIiwiYnJvYWRjYXN0ZXIiLCJob3N0IiwibG9jYXRpb24iLCJob3N0bmFtZSIsIm1peGluIiwibWV0aG9kcyIsImdlbmVyYXRlVXJsIiwidmFsdWUiLCJ0b1N0cmluZyIsInByb3RvY29sIiwiRXZlbnRCdXMiLCJhcHAiLCJlbCIsImNvbXBvbmVudHMiLCJuYXZiYXIiLCJwcm9maWxlIiwibm90aWZpY2F0aW9uUG9wdXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7VUFFQTs7O0FBRUE7O2tDQUNBO2dDQUNBO3VCQUNBOzJCQUVBOzttQ0FDQTs2Q0FDQTtBQUVBOzt1QkFDQTtBQUNBOzRDQUNBO3FCQUNBOzRCQUNBOzZEQUNBLDBCQUNBLENBQ0Esd0JBRUEsQ0FDQTtBQUVBO0FBdkJBO0FBRkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQTtBQUNBO0FBQ0E7cUdBRUE7OzttQkFF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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQsc0I7Ozs7Ozs7O0FDeHhCQTs7QUFFQSw4Q0FBOEMsY0FBYzs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTtBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyw2QkFBNkI7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzQkFBc0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksc0JBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNCQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyxNQUFNLFdBQVcsTUFBTTtBQUMxRDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLGlCQUFpQjtBQUN6RDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxvREFBb0QsSUFBSTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQyxJQUFJLFNBQVMsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1REFBdUQsK0RBQStEO0FBQ3RIO0FBQ0E7QUFDQSxLQUFLLHlFQUF5RTtBQUM5RSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNklBQTZJO0FBQzdJOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsR0FBRyxjQUFjO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVDQUF1QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1Q0FBdUM7QUFDMUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOERBQThELGdDQUFnQztBQUM5RixLQUFLO0FBQ0w7QUFDQSxnRkFBZ0YsZ0JBQWdCLElBQUksZ0NBQWdDO0FBQ3BJLEtBQUs7QUFDTDtBQUNBLGtGQUFrRixrQkFBa0IsSUFBSSxpREFBaUQ7QUFDekosS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpRUFBaUUsY0FBYztBQUMvRSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQ0FBaUM7QUFDaEU7QUFDQTtBQUNBLCtCQUErQixnQ0FBZ0M7QUFDL0Q7QUFDQTtBQUNBLCtCQUErQixrQ0FBa0M7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNBLHFDQUFxQyxpQkFBaUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxtQ0FBbUM7QUFDeEU7QUFDQTtBQUNBLHFDQUFxQyxtQ0FBbUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQjtBQUN4RDtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQSxxQ0FBcUMsa0JBQWtCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixXQUFXLGdCQUFnQjtBQUNyRCx3QkFBd0IsV0FBVyxnQkFBZ0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxTQUFTLG9CQUFvQjtBQUNuRTs7QUFFQTtBQUNBOztBQUVBLHNDQUFzQyxTQUFTLHFCQUFxQjtBQUNwRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsZ0NBQWdDLElBQUksZ0JBQWdCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtFQUFrRSxJQUFJLGtCQUFrQjtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRix3QkFBd0I7QUFDekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxhQUFhO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLGVBQWU7QUFDekY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSyxLQUFLO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0RkFBNEYsZUFBZTtBQUMzRztBQUNBOztBQUVBLCtJQUErSTtBQUMvSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0VBQW9FLGVBQWU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0RBQStELElBQUk7QUFDbkU7QUFDQTtBQUNBLDJCQUEyQixFQUFFLElBQUksRUFBRTtBQUNuQyx3QkFBd0IsRUFBRTtBQUMxQiwyQkFBMkIsRUFBRSxPQUFPLEVBQUU7QUFDdEM7QUFDQTtBQUNBLHVCQUF1QixFQUFFO0FBQ3pCO0FBQ0EsNEZBQTRGLE1BQU0sV0FBVyxNQUFNO0FBQ25IOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTs7QUFFQSwrQkFBK0IsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLGVBQWUsSUFBSSxXQUFXLElBQUksV0FBVyxJQUFJLFlBQVksSUFBSSxhQUFhLElBQUk7O0FBRW5KO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseURBQXlELElBQUksMERBQTBELElBQUk7O0FBRTNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRHQUE0RyxFQUFFO0FBQzlHO0FBQ0Esa0lBQWtJLEVBQUU7O0FBRXBJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFVBQVUsOERBQThEO0FBQ3hFLFlBQVksdUNBQXVDO0FBQ25ELFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsK0JBQStCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSkFBbUo7QUFDbko7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMlZBQTJWLDJCQUEyQixvQkFBb0I7QUFDMVk7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDBCQUEwQixHQUFHLDBCQUEwQixNQUFNLHVCQUF1QjtBQUNqSSw4QkFBOEIsWUFBWSxHQUFHLGFBQWEsR0FBRyxZQUFZLEdBQUcsV0FBVyxHQUFHLFlBQVksR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLG1CQUFtQjtBQUM5Siw2QkFBNkIsYUFBYSxNQUFNLHNCQUFzQjtBQUN0RSxxRUFBcUUsV0FBVyxHQUFHLFlBQVksR0FBRyxnQkFBZ0IsR0FBRyxVQUFVLEdBQUcsa0JBQWtCLEdBQUcsY0FBYyxPQUFPLGFBQWE7QUFDekwseUVBQXlFLFNBQVMsR0FBRyxZQUFZLEdBQUcsZUFBZSxPQUFPO0FBQzFIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBLDhDQUE4QyxzQkFBc0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQSxvRUFBb0U7QUFDcEUseURBQXlEO0FBQ3pELHlEQUF5RDtBQUN6RCxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsMkJBQTJCLHdCQUF3QjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixtQ0FBbUMsZ0NBQWdDLG1CQUFtQjtBQUN0RixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNELG1DQUFtQyx5QkFBeUI7QUFDNUQsbUNBQW1DLFlBQVk7QUFDL0MsbUNBQW1DLGFBQWE7QUFDaEQsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5SEFBeUg7QUFDakosS0FBSztBQUNMLHdCQUF3Qiw4Q0FBOEM7QUFDdEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsY0FBYztBQUNkOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNkpBQTZKO0FBQzdKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixtQ0FBbUMsa0JBQWtCO0FBQ3JELG1DQUFtQyxrQkFBa0I7QUFDckQsbUNBQW1DLGtCQUFrQjtBQUNyRCxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLHVCQUF1QixjQUFjO0FBQ3JDLHVCQUF1Qix3QkFBd0I7QUFDL0MsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRCxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsbURBQW1EO0FBQ2pGLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsVUFBVTtBQUM3QyxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLHVCQUF1QiwrQkFBK0I7QUFDekYsbUNBQW1DLDBCQUEwQiwrQkFBK0I7QUFDNUYsY0FBYztBQUNkOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QixzREFBc0Q7QUFDakgsY0FBYztBQUNkOzs7QUFHQTtBQUNBLG9FQUFvRSxhQUFhO0FBQ2pGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTs7QUFFQSw2SkFBNko7QUFDN0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0IsNEJBQTRCO0FBQ3ZGLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EseUtBQXlLO0FBQ3pLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZKQUE2SjtBQUM3Sjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlGQUF5RixlQUFlO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxvQkFBb0IsR0FBRyxZQUFZLEdBQUcsYUFBYSxNQUFNLGNBQWM7QUFDckgsd0JBQXdCLFlBQVksTUFBTSxVQUFVO0FBQ3BELHFEQUFxRCxZQUFZLEdBQUcsYUFBYSxHQUFHLGNBQWMsR0FBRyxlQUFlLEdBQUcsY0FBYyxNQUFNLGVBQWU7QUFDMUosd0VBQXdFLFVBQVUsR0FBRyxjQUFjLEdBQUcsY0FBYyxHQUFHLG9CQUFvQixHQUFHLFlBQVksR0FBRyxVQUFVLEdBQUcsWUFBWSxHQUFHLG1CQUFtQixNQUFNLGlCQUFpQjtBQUNuTyxrRUFBa0UsYUFBYSxHQUFHLGVBQWUsR0FBRyxpQkFBaUIsR0FBRyxlQUFlLEdBQUc7QUFDMUksMEVBQTBFLGVBQWUsR0FBRyxZQUFZLEdBQUcsZUFBZSxPQUFPLGlCQUFpQjtBQUNsSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSxxQkFBcUI7QUFDbEMsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEsdUJBQXVCO0FBQ3BDLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxxQkFBcUI7QUFDbEMsYUFBYSx1QkFBdUI7QUFDcEMsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPLHlCQUF5QjtBQUM3QyxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7OztBQUdBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUI7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsY0FBYztBQUMzQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7O0FBRUEsd0VBQXdFLGFBQWE7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFNBQVM7QUFDdEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHVCQUF1QixHQUFHLHVCQUF1QjtBQUNoRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCw0SUFBNEk7QUFDNUk7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsY0FBYztBQUNkOzs7QUFHQTtBQUNBOztBQUVBLDJFQUEyRSxlQUFlO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0Esd0JBQXdCLDBKQUEwSjtBQUNsTCxLQUFLO0FBQ0wsd0JBQXdCLDhDQUE4QztBQUN0RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTyw2QkFBNkI7QUFDakQsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPLGtGQUFrRix3QkFBd0I7QUFDOUgsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLDZFQUE2RTtBQUM3RSxtRkFBbUY7QUFDbkYsaUdBQWlHO0FBQ2pHLDRHQUE0RztBQUM1RyxzRkFBc0Y7QUFDdEYsY0FBYztBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0QsWUFBWTs7QUFFaEUsMERBQTBELFdBQVc7QUFDckU7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0I7QUFDdEQsc0NBQXNDLGVBQWU7QUFDckQsbUNBQW1DLDRCQUE0QjtBQUMvRCxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7O0FBRUEscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsY0FBYztBQUNkOzs7QUFHQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLHNDQUFzQyxrQkFBa0I7QUFDeEQsc0NBQXNDLGVBQWU7QUFDckQsY0FBYztBQUNkOzs7QUFHQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7OztBQUdBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QyxjQUFjO0FBQ2Q7OztBQUdBO0FBQ0Esc0ZBQXNGO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGlDQUFpQyxlQUFlO0FBQ2hELGNBQWM7QUFDZDs7O0FBR0E7QUFDQTs7QUFFQSxzRkFBc0Y7QUFDdEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGNBQWM7QUFDZDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLCtCQUErQjtBQUM5RSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLDhJQUE4STtBQUM5STs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsZ0RBQWdEOztBQUVoRDtBQUNBOztBQUVBLHVEQUF1RDtBQUN2RDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEIsa0JBQWtCLEVBQUU7QUFDcEIsaUJBQWlCLEVBQUU7QUFDbkIscUJBQXFCLElBQUk7QUFDekIsdUJBQXVCLElBQUk7QUFDM0Isc0JBQXNCLElBQUk7QUFDMUI7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLElBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixJQUFJO0FBQy9CO0FBQ0EsMkJBQTJCLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixJQUFJLFNBQVMsRUFBRTtBQUM5QztBQUNBLCtCQUErQixJQUFJLEtBQUssRUFBRTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsTUFBTSxZQUFZLE1BQU07QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLElBQUk7O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHdCQUF3QiwrREFBK0Q7QUFDdkY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHFDQUFxQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx3QkFBd0IsK0JBQStCO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUNBQXFDO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxrQkFBa0IsZUFBZTtBQUN2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxvQkFBb0I7QUFDcEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxSkFBcUo7QUFDcko7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FB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Q0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGtEQUFrRCxzQkFBc0I7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxpREFBaUQsc0JBQXNCO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0RBQW9ELHNCQUFzQjtBQUMxRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG1EQUFtRCxzQkFBc0I7QUFDekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCx1Q0FBdUMsV0FBVyxvQ0FBb0MsV0FBVztBQUNqRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUJBQXFCO0FBQzdCLGNBQWM7QUFDZDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFCQUFxQjtBQUM3QixjQUFjO0FBQ2Q7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQkFBcUI7QUFDN0IsY0FBYztBQUNkOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlzTkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG9FQUFvRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlCQUF5QjtBQUMzQyxlQUFlO0FBQ2YsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QyxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0NBQWdDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix1QkFBdUI7QUFDakQsdUJBQXVCO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQsZUFBZSxpQ0FBaUM7QUFDaEQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBLG9CQUFvQixrQ0FBa0M7QUFDdEQsbUJBQW1CLHFEQUFxRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RCxtQkFBbUIsNkNBQTZDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RCxlQUFlLHVEQUF1RDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVMsaURBQWlELEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxjQUFjO0FBQzlFO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFtRDtBQUN2RSxlQUFlLDRDQUE0QztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtRUFBbUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFrRDtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMENBQTBDO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLGdFQUFnRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw2QkFBNkIsK0JBQStCLEVBQUU7QUFDdkUsa0JBQWtCLHlEQUF5RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBLFdBQVcsK0NBQStDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBbUQ7QUFDdkUsZUFBZSxvQ0FBb0M7QUFDbkQsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVDQUF1QztBQUN4RDtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIseUNBQXlDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDLGlCQUFpQjtBQUNqQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUNBQXVDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw2REFBNkQ7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUyxxQkFBcUIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxxQkFBcUIsRUFBRTtBQUMzRDtBQUNBO0FBQ0EsdUJBQXVCLFNBQVMsaUJBQWlCLEVBQUU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckMsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQ0FBZ0M7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw4QkFBOEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbURBQW1EO0FBQ3ZFLGVBQWUsNENBQTRDO0FBQzNEO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsOERBQThEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJCQUEyQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDdFFBO0FBQ0FBLE9BQU9DLEdBQVAsR0FBYSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFiOztBQUVBRixPQUFPRyxLQUFQLEdBQWUsbUJBQUFELENBQVEsK0JBQVIsQ0FBZjs7QUFFQUYsT0FBT0csS0FBUCxDQUFhQyxRQUFiLENBQXNCQyxPQUF0QixDQUE4QkMsTUFBOUIsR0FBdUM7QUFDckMsa0JBQWdCTixPQUFPTyxPQUFQLENBQWVDLFNBRE07QUFFckMsc0JBQW9COztBQUd0Qjs7Ozs7O0FBTHVDLENBQXZDLENBV0EsSUFBSSxPQUFPQyxFQUFQLEtBQWMsV0FBbEIsRUFBK0I7QUFDN0JULFNBQU9VLElBQVAsR0FBYyxJQUFJLG9EQUFKLENBQVM7QUFDckJDLGlCQUFhLFdBRFE7QUFFckJDLFVBQU1aLE9BQU9hLFFBQVAsQ0FBZ0JDLFFBQWhCLEdBQTJCO0FBRlosR0FBVCxDQUFkO0FBSUQ7O0FBRURkLE9BQU9DLEdBQVAsQ0FBV2MsS0FBWCxDQUFpQjtBQUNmQyxXQUFTO0FBQ1BDLGlCQUFhLHFCQUFVQyxLQUFWLEVBQWlCO0FBQzVCLFVBQUksQ0FBQ0EsS0FBTCxFQUFZLE9BQU8sWUFBWWxCLE9BQU9hLFFBQVAsQ0FBZ0JELElBQTVCLEdBQW1DLG1CQUExQztBQUNaTSxjQUFRQSxNQUFNQyxRQUFOLEVBQVI7QUFDQSxhQUFPbkIsT0FBT2EsUUFBUCxDQUFnQk8sUUFBaEIsR0FBMkIsSUFBM0IsR0FBa0NwQixPQUFPYSxRQUFQLENBQWdCRCxJQUFsRCxHQUF5RCxHQUF6RCxHQUErRE0sS0FBdEU7QUFDRDtBQUxNO0FBRE0sQ0FBakI7O0FBVUFsQixPQUFPcUIsUUFBUCxHQUFrQixJQUFJcEIsR0FBSixFQUFsQixDOzs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBLG9pQkFBc1k7QUFDdFk7QUFDQSw2U0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSxnaUJBQXNZO0FBQ3RZO0FBQ0EseVNBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0EsOGlCQUFzWTtBQUN0WTtBQUNBLHVUQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDJpQkFBc1k7QUFDdFk7QUFDQSxvVEFBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSx5aUJBQXNZO0FBQ3RZO0FBQ0Esa1RBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0EsOGhCQUFzWTtBQUN0WTtBQUNBLHVTQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDRoQkFBc1k7QUFDdFk7QUFDQSxxU0FBbUw7QUFDbkw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSwwaEJBQXNZO0FBQ3RZO0FBQ0EsbVNBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0EsOGhCQUFzWTtBQUN0WTtBQUNBLHVTQUFtTDtBQUNuTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBTXFCLE1BQU0sSUFBSXJCLEdBQUosQ0FBUTtBQUNsQnNCLE1BQUksTUFEYztBQUVsQkMsY0FBWTtBQUNWQyxZQUFBLHVFQURVLEVBQ0ZDLFNBQUEscUVBREUsRUFDT0MsbUJBQUEsa0ZBQUFBO0FBRFA7QUFGTSxDQUFSLENBQVosQyIsImZpbGUiOiIvanMvdXNlcnMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJhdmF0YXJcIiBpZD1cImF2YXRhclwiIGFjY2VwdD1cImltYWdlLypcIiBAY2hhbmdlPVwic2VsZWN0RmlsZVwiIGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXZhdGFyJykuY2xpY2soKTsgcmV0dXJuIGZhbHNlO1wiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnQgdGV4dC1ncmV5LWRhcmtlciBob3Zlcjp0ZXh0LXRlYWwgcHktMiBweC00IGJvcmRlciBib3JkZXItZ3JleS1saWdodCBob3Zlcjpib3JkZXItdGVhbCByb3VuZGVkXCI+Q2hhbmdlIFlvdXIgQXZhdGFyPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbJ3VzZXInXSxcbiAgbWV0aG9kczoge1xuICAgIHNlbGVjdEZpbGUgKGUpIHtcbiAgICAgIGlmICghZS50YXJnZXQuZmlsZXMubGVuZ3RoKSByZXR1cm5cbiAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF1cbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuXG4gICAgICByZWFkZXIub25sb2FkID0gZSA9PiB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2ltYWdlLWxvYWRlZCcsIGUudGFyZ2V0LnJlc3VsdClcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGxvYWRJbWFnZShmaWxlKVxuICAgIH0sXG4gICAgdXBsb2FkSW1hZ2UgKGZpbGUpIHtcbiAgICAgIGxldCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgIGRhdGEuYXBwZW5kKCdhdmF0YXInLCBmaWxlKVxuICAgICAgYXhpb3MucG9zdCgnL3VzZXJzLycgKyB0aGlzLnVzZXIudXNlcm5hbWUgKyAnL2F2YXRhcicsIGRhdGEpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuXG4gICAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvZmlsZVVwbG9hZC52dWUiLCI8dGVtcGxhdGU+XG4gIDxuYXYgY2xhc3M9XCJiZy13aGl0ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBoLTEyIHBsLTQgbWQ6cHgtNCBzaGFkb3dcIj5cbiAgICA8YSBjbGFzcz1cInRleHQtdGVhbCB0ZXh0LTJ4bCBuby11bmRlcmxpbmUgc2VsZi1jZW50ZXJcIiA6aHJlZj1cInVybC5zaXRlXCI+XG4gICAgICAgIEdPT0RXT1JLXG4gICAgPC9hPlxuXG4gICAgPGRpdiBjbGFzcz1cIm1kOmZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGJvcmRlci1sIGgtZnVsbFwiPlxuICAgICAgICA8bm90aWZpY2F0aW9uLWRyb3Bkb3duPjwvbm90aWZpY2F0aW9uLWRyb3Bkb3duPlxuICAgICAgICA8cHJvZmlsZS1kcm9wZG93bj48L3Byb2ZpbGUtZHJvcGRvd24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IG5vdGlmaWNhdGlvbkRyb3Bkb3duIGZyb20gXCIuL25vdGlmaWNhdGlvbkRyb3Bkb3duXCI7XG5pbXBvcnQgcHJvZmlsZURyb3Bkb3duIGZyb20gXCIuL3Byb2ZpbGVEcm9wZG93blwiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7bm90aWZpY2F0aW9uRHJvcGRvd24sIHByb2ZpbGVEcm9wZG93bn0sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgdXNlcjogbmF2YmFyLnVzZXIsXG4gICAgdG9rZW46IExhcmF2ZWwuY3NyZlRva2VuLFxuICAgIHVybDogbmF2YmFyLm5hdlVybCxcbiAgfSlcbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlIiwiPHRlbXBsYXRlPlxuPGRpdiBjbGFzcz1cInB4LTQgc2VsZi1jZW50ZXJcIj5cbiAgICA8ZGl2IGlkPVwibm90aWZpY2F0aW9uXCIgY2xhc3M9XCJ0ZXh0LXRlYWwtbGlnaHQgdGV4dC1iYXNlIG5vLXVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cInRvZ2dsZU5vdGlmaWNhdGlvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1iZWxsIGZvbnQtYm9sZCB0ZXh0LXhsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8aSB2LWlmPVwidW5yZWFkTm90aWZpY2F0aW9uXCIgY2xhc3M9XCJmYSBmYS1jaXJjbGUgdGV4dC1yZWQtbGlnaHQgdGV4dC1zbSBhYnNvbHV0ZSBwaW4tdCBtdC0zIG1sLTNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwibm90aWZpY2F0aW9uU2hvd25cIiBjbGFzcz1cImFic29sdXRlIGJnLXdoaXRlIHctNjQgbXQtNiBtci04IHB5LTQgc2hhZG93LWxnIHJvdW5kZWRcIiBzdHlsZT1cInJpZ2h0OiA1JTtcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBsaXN0LXJlc2V0IHB4LTQgcHktMiB0ZXh0LWdyZXktZGFyayBuby11bmRlcmxpbmUgYmxvY2tcIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiIDpzcmM9XCJnZW5lcmF0ZVVybCh1c2VyLmF2YXRhcilcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTEgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91ciBwb3N0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB5LTEgdGV4dC14c1wiPlxuICAgICAgICAgICAgICAgICAgICAyIG1pbiBhZ29cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGlzdC1yZXNldCBweC00IHB5LTIgdGV4dC1ncmV5LWRhcmsgbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTJcIiA6c3JjPVwiZ2VuZXJhdGVVcmwodXNlci5hdmF0YXIpXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweS0xIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgY29tbWVudGVkIG9uIHlvdXIgcG9zdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweS0xIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgMiBtaW4gYWdvXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGJvcmRlci10XCI+PC9zcGFuPlxuICAgICAgICA8YSBjbGFzcz1cImxpc3QtcmVzZXQgcHgtNCBwdC0yIHRleHQtYmx1ZS1saWdodCB0ZXh0LWNlbnRlciBuby11bmRlcmxpbmUgYmxvY2tcIiBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cbiAgICAgICAgICAgIFZpZXcgQWxsXG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogKCkgPT4gKHtcbiAgICB1c2VyOiBuYXZiYXIudXNlcixcbiAgICB0b2tlbjogTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgdXJsOiBuYXZiYXIubmF2VXJsLFxuICAgIG5vdGlmaWNhdGlvblNob3duOiBmYWxzZSxcbiAgICB1bnJlYWROb3RpZmljYXRpb246IGZhbHNlLFxuICB9KSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZU5vdGlmaWNhdGlvbihldmVudCkge1xuICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uU2hvd24pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oaWRlTm90aWZpY2F0aW9uKVxuICAgICAgICB0aGlzLmhpZGVOb3RpZmljYXRpb24oZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhpZGVOb3RpZmljYXRpb24pXG4gICAgICAgIHRoaXMuc2hvd05vdGlmaWNhdGlvbigpXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9maWxlRHJvcGRvd25TaG93bikge1xuICAgICAgICB0aGlzLnByb2ZpbGVEcm9wZG93blNob3duID0gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMubm90aWZpY2F0aW9uU2hvd24gPSB0cnVlXG4gICAgfSxcbiAgICBoaWRlTm90aWZpY2F0aW9uKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiICYmIGV2ZW50LmtleSAhPT0gXCJFc2NhcGVcIikge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRoaXMubm90aWZpY2F0aW9uU2hvd24gPSBmYWxzZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cIltub3RpZmljYXRpb25TaG93biA/ICcnIDogJ2hpZGRlbicsIChtZXNzYWdlVHlwZSA9PT0gJ3N1Y2Nlc3MnKSA/ICd0ZXh0LXRlYWwtbGlnaHQnIDogJ3RleHQtcmVkJyBdXCIgY2xhc3M9XCJmaXhlZCBwaW4tdCBiZy13aGl0ZSB0ZXh0LWxnIHJvdW5kZWQgY29udGFpbmVyIG14LWF1dG8gbWQ6dy0xLzIgbXQtMTYgcHktNiBweC04IHNoYWRvdy1sZ1wiIHN0eWxlPVwibGVmdDogMDsgcmlnaHQ6IDA7IG1heC13aWR0aDogNjQwcHg7XCI+XG4gICAgICAgIHt7bWVzc2FnZX19IFxuICAgICAgICA8ZGl2IEBjbGljaz1cImNsb3NlTm90aWZpY2F0aW9uXCIgY2xhc3M9XCJpbmxpbmVcIj48aSBjbGFzcz1cImZhcyBmYS10aW1lcyBmbG9hdC1yaWdodCBjdXJzb3ItcG9pbnRlclwiPjwvaT48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgbm90aWZpY2F0aW9uU2hvd246IGZhbHNlLFxuICAgIG1lc3NhZ2U6ICcnLFxuICAgIG1lc3NhZ2VUeXBlOiAnJyxcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICBjbG9zZU5vdGlmaWNhdGlvbiAoKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblNob3duID0gZmFsc2VcbiAgICB9LFxuICAgIHNob3dOb3RpZmljYXRpb24gKG1lc3NhZ2UsIG1lc3NhZ2VUeXBlKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICB0aGlzLm1lc3NhZ2VUeXBlID0gbWVzc2FnZVR5cGVcbiAgICAgIHRoaXMubm90aWZpY2F0aW9uU2hvd24gPSB0cnVlXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZU5vdGlmaWNhdGlvbigpXG4gICAgICB9LCAzMDAwKVxuICAgIH1cbiAgfSxcbiAgY3JlYXRlZCAoKSB7XG4gICAgRXZlbnRCdXMuJG9uKCdub3RpZmljYXRpb24nLCB0aGlzLnNob3dOb3RpZmljYXRpb24pXG4gIH0sXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIEV2ZW50QnVzLiRvZmYoJ25vdGlmaWNhdGlvbicsIHRoaXMuc2hvd05vdGlmaWNhdGlvbilcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZSIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJweC00IGJvcmRlci1sIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHAtNFwiPlxuICA8ZGl2IGlkPVwicHJvZmlsZS1kcm9wZG93blwiIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIiBAY2xpY2s9XCJ0b2dnbGVQcm9maWxlRHJvcGRvd25cIj5cbiAgICA8aW1nIGNsYXNzPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtZDptci0yXCIgOnNyYz1cImdlbmVyYXRlVXJsKHVzZXIuYXZhdGFyKVwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LWJhc2Ugbm8tdW5kZXJsaW5lIGhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAge3sgdXNlci5uYW1lIH19XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiB2LWlmPVwicHJvZmlsZURyb3Bkb3duU2hvd25cIiBpZD1cInByb2ZpbGUtbWVudVwiIGNsYXNzPVwiYWJzb2x1dGUgYmctd2hpdGUgdy00OCBwaW4tciBtci0yIHB5LTEgc2hhZG93LWxnIHJvdW5kZWRcIiBzdHlsZT1cInRvcDozLjVyZW07XCI+XG4gICAgPGEgY2xhc3M9XCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSB0ZXh0LWdyZXktZGFyayBibG9jayBmb250LW1lZGl1bVwiIDpocmVmPVwicHJvZmlsZVVybFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3LTYgaW5saW5lLWJsb2NrXCI+PGkgY2xhc3M9XCJwci0xIGZhIGZhLXVzZXJcIj48L2k+PC9zcGFuPlxuICAgICAgICAgIFlvdXIgcHJvZmlsZVxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIi9hZG1pblwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3LTYgaW5saW5lLWJsb2NrXCI+PGkgY2xhc3M9XCJwci0xIGZhcyBmYS1zaGllbGQtYWx0IGZvbnQtcmVndWxhclwiPjwvaT48L3NwYW4+XG4gICAgICBBZG1pblxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIiNcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidy02IGlubGluZS1ibG9ja1wiPjxpIGNsYXNzPVwicHItMSBmYSBmYS1jb2cgZm9udC1yZWd1bGFyXCI+PC9pPjwvc3Bhbj5cbiAgICAgIFNldHRpbmdzXG4gICAgPC9hPlxuICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgYm9yZGVyLXRcIj48L3NwYW4+XG4gICAgPGEgY2xhc3M9XCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtZ3JleS1kYXJrIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZSBibG9ja1wiIDpocmVmPVwidXJsLmxvZ291dFwiIEBjbGljaz1cImxvZ291dFVzZXJcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidy02IGlubGluZS1ibG9ja1wiPjxpIGNsYXNzPVwicHItMSBmYXMgZmEtc2lnbi1vdXQtYWx0IGZvbnQtcmVndWxhclwiPjwvaT48L3NwYW4+XG4gICAgICBMb2dvdXRcbiAgICA8L2E+XG4gIDwvZGl2PiAgICAgICAgICAgIFxuICA8Zm9ybSBpZD1cImxvZ291dC1mb3JtXCIgOmFjdGlvbj1cInVybC5sb2dvdXRcIiBtZXRob2Q9XCJQT1NUXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgOnZhbHVlPVwidG9rZW5cIj5cbiAgPC9mb3JtPlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIHVzZXI6IG5hdmJhci51c2VyLFxuICAgIHRva2VuOiBMYXJhdmVsLmNzcmZUb2tlbixcbiAgICB1cmw6IG5hdmJhci5uYXZVcmwsXG4gICAgYXZhdGFyOiBcIlwiLFxuICAgIHByb2ZpbGVVcmw6IG5hdmJhci5uYXZVcmwuc2l0ZSArIFwiL3VzZXJzL1wiICsgbmF2YmFyLnVzZXIudXNlcm5hbWUsXG4gICAgcHJvZmlsZURyb3Bkb3duU2hvd246IGZhbHNlXG4gIH0pLFxuICBtZXRob2RzOiB7XG4gICAgbG9nb3V0VXNlcihldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvdXQtZm9ybVwiKS5zdWJtaXQoKVxuICAgIH0sXG4gICAgdG9nZ2xlUHJvZmlsZURyb3Bkb3duKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5wcm9maWxlRHJvcGRvd25TaG93bikge1xuICAgICAgICB0aGlzLmhpZGVQcm9maWxlRHJvcGRvd24oZXZlbnQpXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGlkZVByb2ZpbGVEcm9wZG93bilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvd1Byb2ZpbGVEcm9wZG93bigpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGlkZVByb2ZpbGVEcm9wZG93bilcbiAgICAgIH1cbiAgICB9LFxuICAgIHNob3dQcm9maWxlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvblNob3duKSB7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2hvd24gPSBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5wcm9maWxlRHJvcGRvd25TaG93biA9IHRydWVcbiAgICB9LFxuICAgIGhpZGVQcm9maWxlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgZXZlbnQua2V5ICE9PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhpcy5wcm9maWxlRHJvcGRvd25TaG93biA9IGZhbHNlXG4gICAgfVxuICB9LFxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWUiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyBweS04IG10LThcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBweS00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWItNCBweC04XCI+XG4gICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgRW1haWxcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJlbWFpbFwiIGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJqb2huQGV4YW1wbGUuY29tXCI+XG4gICAgICAgIDxkaXYgdi1pZj1cImVycm9yTWVzc2FnZS5lbWFpbFwiIGNsYXNzPVwidGV4dC1yZWQgdGV4dC1iYXNlIHB0LTJcIj5cbiAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UuZW1haWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItaGFsZiBtdC00IG1iLThcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1iLTggcHgtOFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgIEN1cnJlbnQgUGFzc3dvcmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJjdXJyZW50UGFzc3dvcmRcIiBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIgaWQ9XCJjdXJyZW50X3Bhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIqKioqKipcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwiZXJyb3JNZXNzYWdlLmN1cnJlbnRfcGFzc3dvcmRcIiBjbGFzcz1cInRleHQtcmVkIHRleHQtYmFzZSBwdC0yXCI+XG4gICAgICAgICAge3sgZXJyb3JNZXNzYWdlLmN1cnJlbnRfcGFzc3dvcmQgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYi04IHB4LThcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgdGV4dC1ncmV5LWRhcmtlciB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgZm9yPVwidXNlcm5hbWVcIj5cbiAgICAgICAgICBOZXcgUGFzc3dvcmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJuZXdQYXNzd29yZFwiIGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cIm5ld19wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKioqKioqXCI+XG4gICAgICAgIDxkaXYgdi1pZj1cImVycm9yTWVzc2FnZS5uZXdfcGFzc3dvcmRcIiBjbGFzcz1cInRleHQtcmVkIHRleHQtYmFzZSBwdC0yXCI+XG4gICAgICAgICAge3sgZXJyb3JNZXNzYWdlLm5ld19wYXNzd29yZCB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1iLTggcHgtOFwiPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgIENvbmZpcm0gUGFzc3dvcmRcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJuZXdQYXNzd29yZENvbmZpcm1hdGlvblwiIGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cImNvbmZpcm1fcGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIioqKioqKlwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJlcnJvck1lc3NhZ2UubmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvblwiIGNsYXNzPVwidGV4dC1yZWQgdGV4dC1iYXNlIHB0LTJcIj5cbiAgICAgICAgICB7eyBlcnJvck1lc3NhZ2UubmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvbiB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm15LTYgcHgtOFwiPlxuICAgICAgICA8YSBAY2xpY2s9XCJ1cGRhdGVcIiBjbGFzcz1cImZvbnQtYm9sZCByb3VuZGVkIHNoYWRvdyBiZy10ZWFsLWxpZ2h0IHAtNCB0ZXh0LXdoaXRlIGhvdmVyOnNoYWRvdy1sZyBob3Zlcjpmb250LWJvbGQgaG92ZXI6YmctdGVhbC1kYXJrIG5vLXVuZGVybGluZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgVXBkYXRlXG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci1oYWxmIG10LTQgbWItOFwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXQtNCBweC04XCI+XG4gICAgICAgIDxhIGNsYXNzPVwicm91bmRlZCBwLTQgdGV4dC1yZWQtbGlnaHQgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0IGhvdmVyOmZvbnQtYm9sZCBob3Zlcjpib3JkZXItMCBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6YmctcmVkLWxpZ2h0IGhvdmVyOnRleHQtd2hpdGUgbm8tdW5kZXJsaW5lXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICBEZWxldGUgYWNjb3VudFxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHVzZXI6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdHlwZTogT2JqZWN0XG4gICAgfVxuICB9LFxuICBkYXRhOiAoKSA9PiAoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBjdXJyZW50UGFzc3dvcmQ6ICcnLFxuICAgIG5ld1Bhc3N3b3JkOiAnJyxcbiAgICBuZXdQYXNzd29yZENvbmZpcm1hdGlvbjogJycsXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBjdXJyZW50X3Bhc3N3b3JkOiAnJyxcbiAgICAgIG5ld19wYXNzd29yZDogJycsXG4gICAgICBuZXdfcGFzc3dvcmRfY29uZmlybWF0aW9uOiAnJ1xuICAgIH1cbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGUgKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IHt9XG4gICAgICBpZiAodGhpcy5lbWFpbCAhPT0gJycpIHtcbiAgICAgICAgcGFyYW1zLmVtYWlsID0gdGhpcy5lbWFpbFxuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmV3UGFzc3dvcmQgIT09ICcnKSB7XG4gICAgICAgIHBhcmFtcy5jdXJyZW50X3Bhc3N3b3JkID0gdGhpcy5jdXJyZW50UGFzc3dvcmRcbiAgICAgICAgcGFyYW1zLm5ld19wYXNzd29yZCA9IHRoaXMubmV3UGFzc3dvcmRcbiAgICAgICAgcGFyYW1zLm5ld19wYXNzd29yZF9jb25maXJtYXRpb24gPSB0aGlzLm5ld1Bhc3N3b3JkQ29uZmlybWF0aW9uXG4gICAgICB9XG4gICAgICBheGlvcy5wdXQoJy91c2Vycy8nICsgdGhpcy51c2VyLnVzZXJuYW1lICsgJy9hY2NvdW50JyAsIHBhcmFtcylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBFdmVudEJ1cy4kZW1pdCgnbm90aWZpY2F0aW9uJywgcmVzcG9uc2UuZGF0YS5tZXNzYWdlLCByZXNwb25zZS5kYXRhLnN0YXR1cylcbiAgICAgICAgdGhpcy5lbWFpbCA9ICcnLFxuICAgICAgICB0aGlzLmN1cnJlbnRQYXNzd29yZCA9ICcnLFxuICAgICAgICB0aGlzLm5ld1Bhc3N3b3JkID0gJycsXG4gICAgICAgIHRoaXMubmV3UGFzc3dvcmRDb25maXJtYXRpb24gPSAnJ1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgIHRoaXMuJHNldCh0aGlzLmVycm9yTWVzc2FnZSwgcHJvcCwgZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbcHJvcF1bMF0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0ge1xuICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgY3VycmVudF9wYXNzd29yZDogJycsXG4gICAgICAgICAgICBuZXdfcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgbmV3X3Bhc3N3b3JkX2NvbmZpcm1hdGlvbjogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL2FjY291bnQudnVlIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwdC04IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93IHB5LThcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZS9hdmF0YXItcHJvZmlsZS5wbmdcIiA6YWx0PVwiJ0RlZmF1bHQgYXZhdGFyIG9mICcgKyB1c2VyLm5hbWVcIiBjbGFzcz1cInctMzIgaC0zMiByb3VuZGVkLWZ1bGxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWdyZXktZGFya2VyIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgcHktMiBweC04XCI+XG4gICAgICAgICAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LWRhcmsgdGV4dC1sZyBweS0yIHB4LThcIj5cbiAgICAgICAgICAgICAgICB7e3VzZXIuZGVzaWduYXRpb259fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmV5LWRhcmsgcHktMiBweC04XCI+XG4gICAgICAgICAgICAgICAge3t1c2VyTG9jYWxUaW1lfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgcHQtMiBwYi00IHB4LTggbGVhZGluZy1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICB7e3VzZXIuYmlvfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYm9yZGVyLXQgdy1mdWxsXCI+PC9kaXY+IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgcHQtOCBzZWxmLXN0YXJ0IHB4LTggYmctZ3JleS1saWdodGVyIHctZnVsbCBwYi04XCI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgQmVsb25ncyB0bzpcbiAgICAgICAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL3Byb2plY3RzLycgKyBwcm9qZWN0LnNsdWdcIiBjbGFzcz1cImJnLXBpbmstbGlnaHRlciBob3ZlcjpiZy1waW5rIHJvdW5kZWQgZm9udC1tZWRpdW0gcC0yIG14LTIgbm8tdW5kZXJsaW5lIHRleHQtd2hpdGVcIiB2LWZvcj1cInByb2plY3QgaW4gdXNlci5wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3twcm9qZWN0Lm5hbWV9fVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy90ZWFtcy8nICsgdGVhbS5zbHVnXCIgY2xhc3M9XCJiZy1waW5rLWxpZ2h0ZXIgaG92ZXI6YmctcGluayByb3VuZGVkIGZvbnQtbWVkaXVtIHAtMiBteC0yIG5vLXVuZGVybGluZSB0ZXh0LXdoaXRlXCIgdi1mb3I9XCJ0ZWFtIGluIHVzZXIudGVhbXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dGVhbS5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSAnbHV4b24nXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdvdGhlcicsXG4gIHByb3BzOiBbJ3VzZXInXSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB1c2VyTG9jYWxUaW1lICgpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5sb2NhbCgpLnNldFpvbmUodGhpcy51c2VyLnRpbWV6b25lKS50b0xvY2FsZVN0cmluZyhEYXRlVGltZS5USU1FX1NJTVBMRSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9vdGhlci52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHJvdW5kZWQgc2hhZG93IHB5LTggbXQtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImF2YXRhclwiIDphbHQ9XCInRGVmYXVsdCBhdmF0YXIgb2YgJyArIHVzZXIubmFtZVwiIGNsYXNzPVwidy0zMiBoLTMyIHJvdW5kZWQtZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBweS00XCI+XG4gICAgICAgICAgICAgICAge3t1c2VyLm5hbWV9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGZpbGUtdXBsb2FkIDp1c2VyPVwidXNlclwiIEBpbWFnZS1sb2FkZWQ9XCJ1cGRhdGVJbWFnZVwiPjwvZmlsZS11cGxvYWQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwicHgtOCBwdC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOZWhhbCBIYXNuYXllZW5cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBUaXRsZSBhdCBHb29kd29ya1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRldmVsb3BlclwiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3J0IEJpb1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSByZXNpemUtbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cImJpb1wiIHR5cGU9XCJ0ZXh0XCIgcm93cz1cIjNcIiBwbGFjZWhvbGRlcj1cIkFib3V0IFlvdXJzZWxmXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBmb3I9XCJ0aW1lem9uZVwiPlxuICAgICAgICAgICAgICAgICAgICBUaW1lIFpvbmVcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JleS1kYXJrZXIgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cImdyaWQtc3RhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+QXNpYS9EaGFrYSAoKzYpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk1pc3NvdXJpPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlRleGFzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBwaW4teSBwaW4tciBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZpbGwtY3VycmVudCBoLTQgdy00XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNlwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiIGZvcj1cIndlZWtzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICBGaXJzdCBEYXkgb2YgdGhlIFdlZWtcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHgtMyBweS0yIHRleHQtZ3JleS1kYXJrZXIgYmctZ3JleS1saWdodGVyIHRleHQtZ3JleS1kYXJrZXJcIiBpZD1cIndlZWtzdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TYXR1cmRheTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TdW5kYXk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+TW9uZGF5PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBwaW4teSBwaW4tciBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImZpbGwtY3VycmVudCBoLTQgdy00XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIj48cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtOFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiZy10ZWFsIGhvdmVyOmJnLXRlYWwtZGFyayB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBwLTQgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LWxnXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBVcGRhdGVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgRmlsZVVwbG9hZCBmcm9tICcuLy4uL3BhcnRpYWxzL2ZpbGVVcGxvYWQnXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdPd24nLFxuICBjb21wb25lbnRzOiB7RmlsZVVwbG9hZH0sXG4gIHByb3BzOiBbJ3VzZXInXSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhdmF0YXI6IG51bGxcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVJbWFnZSAoaW1hZ2VVcmwpIHtcbiAgICAgIHRoaXMuYXZhdGFyID0gaW1hZ2VVcmxcbiAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuYXZhdGFyID0gdGhpcy5nZW5lcmF0ZVVybCh0aGlzLnVzZXIuYXZhdGFyKVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvb3duLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgbXgtNCBtZDpteC1hdXRvIG15LTggbWF4LXctbWRcIj5cbiAgICA8dGVtcGxhdGUgdi1pZj1cInVzZXIuaWQgPT09IGF1dGhVc2VyLmlkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgZmxleCBmbGV4LXJvdyB0ZXh0LWNlbnRlciB0ZXh0LWdyZXktZGFya2VyXCI+XG4gICAgICAgIDxkaXYgQGNsaWNrPVwiYWN0aXZhdGVUYWIoJ3Byb2ZpbGUnKVwiIGNsYXNzPVwidy0xLzIgcC00XCIgOmNsYXNzPVwiWyhhY3RpdmVUYWIgPT09ICdwcm9maWxlJykgPyAndGV4dC13aGl0ZSBiZy10ZWFsLWxpZ2h0JyA6ICdjdXJzb3ItcG9pbnRlciddXCI+XG4gICAgICAgICAgUHJvZmlsZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBAY2xpY2s9XCJhY3RpdmF0ZVRhYignYWNjb3VudCcpXCIgY2xhc3M9XCJ3LTEvMiBwLTRcIiA6Y2xhc3M9XCJbKGFjdGl2ZVRhYiA9PT0gJ2FjY291bnQnKSA/ICd0ZXh0LXdoaXRlIGJnLXRlYWwtbGlnaHQnIDogJ2N1cnNvci1wb2ludGVyJ11cIj5cbiAgICAgICAgICBBY2NvdW50XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YWNjb3VudCB2LWlmPVwiYWN0aXZlVGFiID09PSAnYWNjb3VudCdcIiA6dXNlcj1cImF1dGhVc2VyXCI+PC9hY2NvdW50PlxuICAgICAgPG93biB2LWlmPVwiYWN0aXZlVGFiID09PSAncHJvZmlsZSdcIiA6dXNlcj1cImF1dGhVc2VyXCI+PC9vd24+XG4gICAgPC90ZW1wbGF0ZT5cbiAgICA8b3RoZXIgdi1lbHNlIDp1c2VyPVwidXNlclwiPjwvb3RoZXI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBBY2NvdW50IGZyb20gJy4vYWNjb3VudCdcbmltcG9ydCBPd24gZnJvbSAnLi9vd24nXG5pbXBvcnQgT3RoZXIgZnJvbSAnLi9vdGhlcidcbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge0FjY291bnQsIE93biwgT3RoZXJ9LFxuICBwcm9wczogWyd1c2VyJ10sXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgYWN0aXZlVGFiOiAncHJvZmlsZScsXG4gICAgYXV0aFVzZXI6IG5hdmJhci51c2VyXG4gIH0pLFxuICBtZXRob2RzOiB7XG4gICAgYWN0aXZhdGVUYWIgKHRhYikge1xuICAgICAgdGhpcy5hY3RpdmVUYWIgPSB0YWJcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9wcm9maWxlLnZ1ZSIsInZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBDb25uZWN0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29ubmVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgICAgICB0aGlzLl9kZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGF1dGg6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludDogJy9icm9hZGNhc3RpbmcvYXV0aCcsXG4gICAgICAgICAgICBicm9hZGNhc3RlcjogJ3B1c2hlcicsXG4gICAgICAgICAgICBjc3JmVG9rZW46IG51bGwsXG4gICAgICAgICAgICBob3N0OiBudWxsLFxuICAgICAgICAgICAga2V5OiBudWxsLFxuICAgICAgICAgICAgbmFtZXNwYWNlOiAnQXBwLkV2ZW50cydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ3NldE9wdGlvbnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh0aGlzLl9kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGhpcy5jc3JmVG9rZW4oKSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hdXRoLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmVG9rZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjc3JmVG9rZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3NyZlRva2VuKCkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdG9yID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvd1snTGFyYXZlbCddICYmIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0xhcmF2ZWwnXS5jc3JmVG9rZW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5jc3JmVG9rZW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAoc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENvbm5lY3Rvcjtcbn0oKTtcblxudmFyIENoYW5uZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2hhbm5lbCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnbm90aWZpY2F0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuSWxsdW1pbmF0ZVxcXFxOb3RpZmljYXRpb25zXFxcXEV2ZW50c1xcXFxCcm9hZGNhc3ROb3RpZmljYXRpb25DcmVhdGVkJywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW5Gb3JXaGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbkZvcldoaXNwZXIoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5jbGllbnQtJyArIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIENoYW5uZWw7XG59KCk7XG5cbnZhciBFdmVudEZvcm1hdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEZvcm1hdHRlcihuYW1lc3BhY2UpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRGb3JtYXR0ZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRXZlbnRGb3JtYXR0ZXIsIFt7XG4gICAgICAgIGtleTogJ2Zvcm1hdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFyQXQoMCkgPT09ICcuJyB8fCBldmVudC5jaGFyQXQoMCkgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSB0aGlzLm5hbWVzcGFjZSArICcuJyArIGV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXROYW1lc3BhY2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0TmFtZXNwYWNlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFdmVudEZvcm1hdHRlcjtcbn0oKTtcblxudmFyIFB1c2hlckNoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJDaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJDaGFubmVsKHB1c2hlciwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDaGFubmVsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIudW5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmJpbmQoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJDaGFubmVsO1xufShDaGFubmVsKTtcblxudmFyIFB1c2hlclByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcml2YXRlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJQcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByaXZhdGVDaGFubmVsO1xufShQdXNoZXJDaGFubmVsKTtcblxudmFyIFB1c2hlclByZXNlbmNlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyUHJlc2VuY2VDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJQcmVzZW5jZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyUHJlc2VuY2VDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdoZXJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhlcmUoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhPYmplY3Qua2V5cyhkYXRhLm1lbWJlcnMpLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5tZW1iZXJzW2tdO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9hZGRlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICd3aGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci5jaGFubmVscy5jaGFubmVsc1t0aGlzLm5hbWVdLnRyaWdnZXIoJ2NsaWVudC0nICsgZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJQcmVzZW5jZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG52YXIgU29ja2V0SW9DaGFubmVsID0gZnVuY3Rpb24gKF9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9DaGFubmVsLCBfQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9DaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9DaGFubmVsKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRzID0ge307XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICBfdGhpcy5jb25maWd1cmVSZWNvbm5lY3RvcigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3Vuc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKGNoYW5uZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLm5hbWUgPT0gY2hhbm5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYmluZChldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25maWd1cmVSZWNvbm5lY3RvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25maWd1cmVSZWNvbm5lY3RvcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgICAgICBfdGhpczMuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYmluZCgncmVjb25uZWN0JywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdiaW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJpbmQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0gfHwgW107XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczQuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnY2xpZW50IGV2ZW50Jywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBldmVudDogJ2NsaWVudC0nICsgZXZlbnROYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJpdmF0ZUNoYW5uZWw7XG59KFNvY2tldElvQ2hhbm5lbCk7XG5cbnZhciBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9Qcml2YXRlQ2hhbm4pIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgX1NvY2tldElvUHJpdmF0ZUNoYW5uKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvUHJlc2VuY2VDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ2hlcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6am9pbmluZycsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVtYmVyLnVzZXJfaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3ByZXNlbmNlOmxlYXZpbmcnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lbWJlci51c2VyX2luZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWw7XG59KFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuXG52YXIgUHVzaGVyQ29ubmVjdG9yID0gZnVuY3Rpb24gKF9Db25uZWN0b3IpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJDb25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyQ29ubmVjdG9yKCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDb25uZWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IFB1c2hlckNvbm5lY3Rvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlckNvbm5lY3RvcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKG5hbWUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbChuYW1lKS5saXN0ZW4oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbbmFtZV0gPSBuZXcgUHVzaGVyQ2hhbm5lbCh0aGlzLnB1c2hlciwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgUHVzaGVyUHJpdmF0ZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcml2YXRlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVzZW5jZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdID0gbmV3IFB1c2hlclByZXNlbmNlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByZXNlbmNlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUobmFtZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IFtuYW1lLCAncHJpdmF0ZS0nICsgbmFtZSwgJ3ByZXNlbmNlLScgKyBuYW1lXTtcbiAgICAgICAgICAgIGNoYW5uZWxzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc29ja2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG52YXIgU29ja2V0SW9Db25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ29ubmVjdG9yKCkge1xuICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gU29ja2V0SW9Db25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0Nvbm5lY3RvcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb0Nvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgdmFyIGlvID0gdGhpcy5nZXRTb2NrZXRJTygpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBpbyh0aGlzLm9wdGlvbnMuaG9zdCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvY2tldDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U29ja2V0SU8nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SU8oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xpZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb2NrZXQuaW8gY2xpZW50IG5vdCBmb3VuZC4gU2hvdWxkIGJlIGdsb2JhbGx5IGF2YWlsYWJsZSBvciBwYXNzZWQgdmlhIG9wdGlvbnMuY2xpZW50Jyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBTb2NrZXRJb0NoYW5uZWwodGhpcy5zb2NrZXQsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFNvY2tldElvUHJpdmF0ZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcml2YXRlLScgKyBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcmVzZW5jZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJlc2VuY2VDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdID0gbmV3IFNvY2tldElvUHJlc2VuY2VDaGFubmVsKHRoaXMuc29ja2V0LCAncHJlc2VuY2UtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gW25hbWUsICdwcml2YXRlLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczIuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG52YXIgRWNobyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFY2hvKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRWNobyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgaWYgKHR5cGVvZiBWdWUgPT09ICdmdW5jdGlvbicgJiYgVnVlLmh0dHApIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGF4aW9zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3B1c2hlcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IFB1c2hlckNvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnc29ja2V0LmlvJykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgU29ja2V0SW9Db25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKEVjaG8sIFt7XG4gICAgICAgIGtleTogJ3JlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyVnVlUmVxdWVzdEludGVyY2VwdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgVnVlLmh0dHAuaW50ZXJjZXB0b3JzLnB1c2goZnVuY3Rpb24gKHJlcXVlc3QsIG5leHQpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnMuc2V0KCdYLVNvY2tldC1JRCcsIF90aGlzLnNvY2tldElkKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzWydYLVNvY2tldC1JZCddID0gX3RoaXMyLnNvY2tldElkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJqUXVlcnlBamF4U2V0dXAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkuYWpheCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5hamF4U2V0dXAoe1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiBiZWZvcmVTZW5kKHhocikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzMy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtU29ja2V0LUlkJywgX3RoaXMzLnNvY2tldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IubGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChfY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoX2NoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9wcml2YXRlKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcml2YXRlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5wcmVzZW5jZUNoYW5uZWwoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5zb2NrZXRJZCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEVjaG87XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gRWNobztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sYXJhdmVsLWVjaG8vZGlzdC9lY2hvLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9sYXJhdmVsLWVjaG8vZGlzdC9lY2hvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyA4IDkiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8qXG4gIFRoaXMgaXMganVzdCBhIGp1bmsgZHJhd2VyLCBjb250YWluaW5nIGFueXRoaW5nIHVzZWQgYWNyb3NzIG11bHRpcGxlIGNsYXNzZXMuXG4gIEJlY2F1c2UgTHV4b24gaXMgc21hbGwoaXNoKSwgdGhpcyBzaG91bGQgc3RheSBzbWFsbCBhbmQgd2Ugd29uJ3Qgd29ycnkgYWJvdXQgc3BsaXR0aW5nXG4gIGl0IHVwIGludG8sIHNheSwgcGFyc2luZ1V0aWwuanMgYW5kIGJhc2ljVXRpbC5qcyBhbmQgc28gb24uIEJ1dCB0aGV5IGFyZSBkaXZpZGVkIHVwIGJ5IGZlYXR1cmUgYXJlYS5cbiovXG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG4vLyBUWVBFU1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKSB7XG4gIHJldHVybiB0eXBlb2YgbyA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG8pIHtcbiAgcmV0dXJuIHR5cGVvZiBvID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcobykge1xuICByZXR1cm4gdHlwZW9mIG8gPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8vIENBUEFCSUxJVElFU1xuXG5mdW5jdGlvbiBoYXNJbnRsKCkge1xuICByZXR1cm4gdHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmIEludGwuRGF0ZVRpbWVGb3JtYXQ7XG59XG5cbmZ1bmN0aW9uIGhhc0Zvcm1hdFRvUGFydHMoKSB7XG4gIHJldHVybiAhaXNVbmRlZmluZWQoSW50bC5EYXRlVGltZUZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VG9QYXJ0cyk7XG59XG5cbi8vIE9CSkVDVFMgQU5EIEFSUkFZU1xuXG5mdW5jdGlvbiBtYXliZUFycmF5KHRoaW5nKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHRoaW5nKSA/IHRoaW5nIDogW3RoaW5nXTtcbn1cblxuZnVuY3Rpb24gYmVzdEJ5KGFyciwgYnksIGNvbXBhcmUpIHtcbiAgaWYgKGFyci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChiZXN0LCBuZXh0KSB7XG4gICAgdmFyIHBhaXIgPSBbYnkobmV4dCksIG5leHRdO1xuICAgIGlmICghYmVzdCkge1xuICAgICAgcmV0dXJuIHBhaXI7XG4gICAgfSBlbHNlIGlmIChjb21wYXJlLmFwcGx5KG51bGwsIFtiZXN0WzBdLCBwYWlyWzBdXSkgPT09IGJlc3RbMF0pIHtcbiAgICAgIHJldHVybiBiZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGFpcjtcbiAgICB9XG4gIH0sIG51bGwpWzFdO1xufVxuXG5mdW5jdGlvbiBwaWNrKG9iaiwga2V5cykge1xuICByZXR1cm4ga2V5cy5yZWR1Y2UoZnVuY3Rpb24gKGEsIGspIHtcbiAgICBhW2tdID0gb2JqW2tdO1xuICAgIHJldHVybiBhO1xuICB9LCB7fSk7XG59XG5cbi8vIE5VTUJFUlMgQU5EIFNUUklOR1NcblxuZnVuY3Rpb24gbnVtYmVyQmV0d2Vlbih0aGluZywgYm90dG9tLCB0b3ApIHtcbiAgcmV0dXJuIGlzTnVtYmVyKHRoaW5nKSAmJiB0aGluZyA+PSBib3R0b20gJiYgdGhpbmcgPD0gdG9wO1xufVxuXG4vLyB4ICUgbiBidXQgdGFrZXMgdGhlIHNpZ24gb2YgbiBpbnN0ZWFkIG9mIHhcbmZ1bmN0aW9uIGZsb29yTW9kKHgsIG4pIHtcbiAgcmV0dXJuIHggLSBuICogTWF0aC5mbG9vcih4IC8gbik7XG59XG5cbmZ1bmN0aW9uIHBhZFN0YXJ0KGlucHV0KSB7XG4gIHZhciBuID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gIGlmIChpbnB1dC50b1N0cmluZygpLmxlbmd0aCA8IG4pIHtcbiAgICByZXR1cm4gKCcwJy5yZXBlYXQobikgKyBpbnB1dCkuc2xpY2UoLW4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpbnB1dC50b1N0cmluZygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlTWlsbGlzKGZyYWN0aW9uKSB7XG4gIGlmIChpc1VuZGVmaW5lZChmcmFjdGlvbikpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9IGVsc2Uge1xuICAgIHZhciBmID0gcGFyc2VGbG9hdCgnMC4nICsgZnJhY3Rpb24pICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3VuZFRvKG51bWJlciwgZGlnaXRzKSB7XG4gIHZhciBmYWN0b3IgPSBNYXRoLnBvdygxMCwgZGlnaXRzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyICogZmFjdG9yKSAvIGZhY3Rvcjtcbn1cblxuLy8gREFURSBCQVNJQ1NcblxuZnVuY3Rpb24gaXNMZWFwWWVhcih5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNCA9PT0gMCAmJiAoeWVhciAlIDEwMCAhPT0gMCB8fCB5ZWFyICUgNDAwID09PSAwKTtcbn1cblxuZnVuY3Rpb24gZGF5c0luWWVhcih5ZWFyKSB7XG4gIHJldHVybiBpc0xlYXBZZWFyKHllYXIpID8gMzY2IDogMzY1O1xufVxuXG5mdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyLCBtb250aCkge1xuICB2YXIgbW9kTW9udGggPSBmbG9vck1vZChtb250aCAtIDEsIDEyKSArIDEsXG4gICAgICBtb2RZZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xuXG4gIGlmIChtb2RNb250aCA9PT0gMikge1xuICAgIHJldHVybiBpc0xlYXBZZWFyKG1vZFllYXIpID8gMjkgOiAyODtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV1bbW9kTW9udGggLSAxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyKSB7XG4gIGlmICh5ZWFyID4gOTkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHJldHVybiB5ZWFyID4gNjAgPyAxOTAwICsgeWVhciA6IDIwMDAgKyB5ZWFyO1xufVxuXG4vLyBQQVJTSU5HXG5cbmZ1bmN0aW9uIHBhcnNlWm9uZUluZm8odHMsIG9mZnNldEZvcm1hdCwgbG9jYWxlKSB7XG4gIHZhciB0aW1lWm9uZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRzKSxcbiAgICAgIGludGxPcHRzID0ge1xuICAgIGhvdXIxMjogZmFsc2UsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICAgIG1vbnRoOiAnMi1kaWdpdCcsXG4gICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgaG91cjogJzItZGlnaXQnLFxuICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gIH07XG5cbiAgaWYgKHRpbWVab25lKSB7XG4gICAgaW50bE9wdHMudGltZVpvbmUgPSB0aW1lWm9uZTtcbiAgfVxuXG4gIHZhciBtb2RpZmllZCA9IE9iamVjdC5hc3NpZ24oeyB0aW1lWm9uZU5hbWU6IG9mZnNldEZvcm1hdCB9LCBpbnRsT3B0cyksXG4gICAgICBpbnRsID0gaGFzSW50bCgpO1xuXG4gIGlmIChpbnRsICYmIGhhc0Zvcm1hdFRvUGFydHMoKSkge1xuICAgIHZhciBwYXJzZWQgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIG1vZGlmaWVkKS5mb3JtYXRUb1BhcnRzKGRhdGUpLmZpbmQoZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RpbWV6b25lbmFtZSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIHBhcnNlZCA/IHBhcnNlZC52YWx1ZSA6IG51bGw7XG4gIH0gZWxzZSBpZiAoaW50bCkge1xuICAgIC8vIHRoaXMgcHJvYmFibHkgZG9lc24ndCB3b3JrIGZvciBhbGwgbG9jYWxlc1xuICAgIHZhciB3aXRob3V0ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCBpbnRsT3B0cykuZm9ybWF0KGRhdGUpLFxuICAgICAgICBpbmNsdWRlZCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgbW9kaWZpZWQpLmZvcm1hdChkYXRlKSxcbiAgICAgICAgZGlmZmVkID0gaW5jbHVkZWQuc3Vic3RyaW5nKHdpdGhvdXQubGVuZ3RoKSxcbiAgICAgICAgdHJpbW1lZCA9IGRpZmZlZC5yZXBsYWNlKC9eWywgXSsvLCAnJyk7XG4gICAgcmV0dXJuIHRyaW1tZWQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gc2lnbmVkT2Zmc2V0KCctNScsICczMCcpIC0+IC0zMzBcbmZ1bmN0aW9uIHNpZ25lZE9mZnNldChvZmZIb3VyU3RyLCBvZmZNaW51dGVTdHIpIHtcbiAgdmFyIG9mZkhvdXIgPSBwYXJzZUludChvZmZIb3VyU3RyLCAxMCkgfHwgMCxcbiAgICAgIG9mZk1pbiA9IHBhcnNlSW50KG9mZk1pbnV0ZVN0ciwgMTApIHx8IDAsXG4gICAgICBvZmZNaW5TaWduZWQgPSBvZmZIb3VyIDwgMCA/IC1vZmZNaW4gOiBvZmZNaW47XG4gIHJldHVybiBvZmZIb3VyICogNjAgKyBvZmZNaW5TaWduZWQ7XG59XG5cbi8vIENPRVJDSU9OXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdChvYmosIG5vcm1hbGl6ZXIpIHtcbiAgdmFyIGlnbm9yZVVua25vd24gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBub3JtYWxpemVkID0ge307XG4gIGZvciAodmFyIHUgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSh1KSkge1xuICAgICAgdmFyIHYgPSBvYmpbdV07XG4gICAgICBpZiAodiAhPT0gbnVsbCAmJiAhaXNVbmRlZmluZWQodikgJiYgIU51bWJlci5pc05hTih2KSkge1xuICAgICAgICB2YXIgbWFwcGVkID0gbm9ybWFsaXplcih1LCBpZ25vcmVVbmtub3duKTtcbiAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgIG5vcm1hbGl6ZWRbbWFwcGVkXSA9IHY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG59XG5cbmZ1bmN0aW9uIHRpbWVPYmplY3Qob2JqKSB7XG4gIHJldHVybiBwaWNrKG9iaiwgWydob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXSk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbiA9ICdudW1lcmljJyxcbiAgICBzID0gJ3Nob3J0JyxcbiAgICBsID0gJ2xvbmcnLFxuICAgIGQyID0gJzItZGlnaXQnO1xuXG52YXIgREFURV9TSE9SVCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IG4sXG4gIGRheTogblxufTtcblxudmFyIERBVEVfTUVEID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuXG59O1xuXG52YXIgREFURV9GVUxMID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuXG59O1xuXG52YXIgREFURV9IVUdFID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsXG59O1xuXG52YXIgVElNRV9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDJcbn07XG5cbnZhciBUSU1FX1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBkMixcbiAgc2Vjb25kOiBkMlxufTtcblxudmFyIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDIsXG4gIHNlY29uZDogZDIsXG4gIHRpbWVab25lTmFtZTogc1xufTtcblxudmFyIFRJTUVfV0lUSF9MT05HX09GRlNFVCA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBkMixcbiAgc2Vjb25kOiBkMixcbiAgdGltZVpvbmVOYW1lOiBsXG59O1xuXG52YXIgVElNRV8yNF9TSU1QTEUgPSB7XG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDIsXG4gIGhvdXIxMjogZmFsc2Vcbn07XG5cbi8qKlxuICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfTsgZm9ybWF0IGxpa2UgJzA5OjMwOjIzJywgYWx3YXlzIDI0LWhvdXIuXG4gKi9cbnZhciBUSU1FXzI0X1dJVEhfU0VDT05EUyA9IHtcbiAgaG91cjogbixcbiAgbWludXRlOiBkMixcbiAgc2Vjb25kOiBkMixcbiAgaG91cjEyOiBmYWxzZVxufTtcblxuLyoqXG4gKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9OyBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gKi9cbnZhciBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IGQyLFxuICBzZWNvbmQ6IGQyLFxuICBob3VyMTI6IGZhbHNlLFxuICB0aW1lWm9uZU5hbWU6IHNcbn07XG5cbi8qKlxuICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfTsgZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScsIGFsd2F5cyAyNC1ob3VyLlxuICovXG52YXIgVElNRV8yNF9XSVRIX0xPTkdfT0ZGU0VUID0ge1xuICBob3VyOiBuLFxuICBtaW51dGU6IGQyLFxuICBzZWNvbmQ6IGQyLFxuICBob3VyMTI6IGZhbHNlLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG5cbi8qKlxuICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfTsgZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAqL1xudmFyIERBVEVUSU1FX1NIT1JUID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbixcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IGQyXG59O1xuXG4vKipcbiAqIHtAbGluayB0b0xvY2FsZVN0cmluZ307IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwOjMzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gKi9cbnZhciBEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBuLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDIsXG4gIHNlY29uZDogZDJcbn07XG5cbnZhciBEQVRFVElNRV9NRUQgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBzLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDJcbn07XG5cbnZhciBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogcyxcbiAgZGF5OiBuLFxuICBob3VyOiBuLFxuICBtaW51dGU6IGQyLFxuICBzZWNvbmQ6IGQyXG59O1xuXG52YXIgREFURVRJTUVfRlVMTCA9IHtcbiAgeWVhcjogbixcbiAgbW9udGg6IGwsXG4gIGRheTogbixcbiAgaG91cjogbixcbiAgbWludXRlOiBkMixcbiAgdGltZVpvbmVOYW1lOiBzXG59O1xuXG52YXIgREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDIsXG4gIHNlY29uZDogZDIsXG4gIHRpbWVab25lTmFtZTogc1xufTtcblxudmFyIERBVEVUSU1FX0hVR0UgPSB7XG4gIHllYXI6IG4sXG4gIG1vbnRoOiBsLFxuICBkYXk6IG4sXG4gIHdlZWtkYXk6IGwsXG4gIGhvdXI6IG4sXG4gIG1pbnV0ZTogZDIsXG4gIHRpbWVab25lTmFtZTogbFxufTtcblxudmFyIERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTID0ge1xuICB5ZWFyOiBuLFxuICBtb250aDogbCxcbiAgZGF5OiBuLFxuICB3ZWVrZGF5OiBsLFxuICBob3VyOiBuLFxuICBtaW51dGU6IGQyLFxuICBzZWNvbmQ6IGQyLFxuICB0aW1lWm9uZU5hbWU6IGxcbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgT2JqZWN0LmtleXMob2JqKS5zb3J0KCkpO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1vbnRoc0xvbmcgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxudmFyIG1vbnRoc1Nob3J0ID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddO1xuXG52YXIgbW9udGhzTmFycm93ID0gWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddO1xuXG5mdW5jdGlvbiBtb250aHMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAnbmFycm93JzpcbiAgICAgIHJldHVybiBtb250aHNOYXJyb3c7XG4gICAgY2FzZSAnc2hvcnQnOlxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0O1xuICAgIGNhc2UgJ2xvbmcnOlxuICAgICAgcmV0dXJuIG1vbnRoc0xvbmc7XG4gICAgY2FzZSAnbnVtZXJpYyc6XG4gICAgICByZXR1cm4gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddO1xuICAgIGNhc2UgJzItZGlnaXQnOlxuICAgICAgcmV0dXJuIFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxudmFyIHdlZWtkYXlzTG9uZyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcblxudmFyIHdlZWtkYXlzU2hvcnQgPSBbJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JywgJ1N1biddO1xuXG52YXIgd2Vla2RheXNOYXJyb3cgPSBbJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJywgJ1MnXTtcblxuZnVuY3Rpb24gd2Vla2RheXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAnbmFycm93JzpcbiAgICAgIHJldHVybiB3ZWVrZGF5c05hcnJvdztcbiAgICBjYXNlICdzaG9ydCc6XG4gICAgICByZXR1cm4gd2Vla2RheXNTaG9ydDtcbiAgICBjYXNlICdsb25nJzpcbiAgICAgIHJldHVybiB3ZWVrZGF5c0xvbmc7XG4gICAgY2FzZSAnbnVtZXJpYyc6XG4gICAgICByZXR1cm4gWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3J107XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbnZhciBtZXJpZGllbXMgPSBbJ0FNJywgJ1BNJ107XG5cbnZhciBlcmFzTG9uZyA9IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddO1xuXG52YXIgZXJhc1Nob3J0ID0gWydCQycsICdBRCddO1xuXG52YXIgZXJhc05hcnJvdyA9IFsnQicsICdBJ107XG5cbmZ1bmN0aW9uIGVyYXMobGVuZ3RoKSB7XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAnbmFycm93JzpcbiAgICAgIHJldHVybiBlcmFzTmFycm93O1xuICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgIHJldHVybiBlcmFzU2hvcnQ7XG4gICAgY2FzZSAnbG9uZyc6XG4gICAgICByZXR1cm4gZXJhc0xvbmc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIHtcbiAgcmV0dXJuIG1lcmlkaWVtc1tkdC5ob3VyIDwgMTIgPyAwIDogMV07XG59XG5cbmZ1bmN0aW9uIHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiB3ZWVrZGF5cyhsZW5ndGgpW2R0LndlZWtkYXkgLSAxXTtcbn1cblxuZnVuY3Rpb24gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBtb250aHMobGVuZ3RoKVtkdC5tb250aCAtIDFdO1xufVxuXG5mdW5jdGlvbiBlcmFGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSB7XG4gIHJldHVybiBlcmFzKGxlbmd0aClbZHQueWVhciA8IDAgPyAwIDogMV07XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFN0cmluZyhrbm93bkZvcm1hdCkge1xuICAvLyB0aGVzZSBhbGwgaGF2ZSB0aGUgb2Zmc2V0cyByZW1vdmVkIGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSBhY2Nlc3MgdG8gdGhlbVxuICAvLyB3aXRob3V0IGFsbCB0aGUgaW50bCBzdHVmZiB0aGlzIGlzIGJhY2tmaWxsaW5nXG4gIHZhciBmaWx0ZXJlZCA9IHBpY2soa25vd25Gb3JtYXQsIFsnd2Vla2RheScsICdlcmEnLCAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ3RpbWVab25lTmFtZScsICdob3VyMTInXSksXG4gICAgICBrZXkgPSBzdHJpbmdpZnkoZmlsdGVyZWQpLFxuICAgICAgZGF0ZVRpbWVIdWdlID0gJ0VFRUUsIExMTEwgZCwgeXl5eSwgaDptbSBhJztcbiAgc3dpdGNoIChrZXkpIHtcbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFX1NIT1JUKTpcbiAgICAgIHJldHVybiAnTS9kL3l5eXknO1xuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVfTUVEKTpcbiAgICAgIHJldHVybiAnTExMIGQsIHl5eXknO1xuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVfRlVMTCk6XG4gICAgICByZXR1cm4gJ0xMTEwgZCwgeXl5eSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoREFURV9IVUdFKTpcbiAgICAgIHJldHVybiAnRUVFRSwgTExMTCBkLCB5eXl5JztcbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FX1NJTVBMRSk6XG4gICAgICByZXR1cm4gJ2g6bW0gYSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuICdoOm1tOnNzIGEnO1xuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQpOlxuICAgICAgcmV0dXJuICdoOm1tIGEnO1xuICAgIGNhc2Ugc3RyaW5naWZ5KFRJTUVfV0lUSF9MT05HX09GRlNFVCk6XG4gICAgICByZXR1cm4gJ2g6bW0gYSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9TSU1QTEUpOlxuICAgICAgcmV0dXJuICdISDptbSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuICdISDptbTpzcyc7XG4gICAgY2FzZSBzdHJpbmdpZnkoVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCk6XG4gICAgICByZXR1cm4gJ0hIOm1tJztcbiAgICBjYXNlIHN0cmluZ2lmeShUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQpOlxuICAgICAgcmV0dXJuICdISDptbSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfU0hPUlQpOlxuICAgICAgcmV0dXJuICdNL2QveXl5eSwgaDptbSBhJztcbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9NRUQpOlxuICAgICAgcmV0dXJuICdMTEwgZCwgeXl5eSwgaDptbSBhJztcbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9GVUxMKTpcbiAgICAgIHJldHVybiAnTExMTCBkLCB5eXl5LCBoOm1tIGEnO1xuICAgIGNhc2Ugc3RyaW5naWZ5KERBVEVUSU1FX0hVR0UpOlxuICAgICAgcmV0dXJuIGRhdGVUaW1lSHVnZTtcbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuICdNL2QveXl5eSwgaDptbTpzcyBhJztcbiAgICBjYXNlIHN0cmluZ2lmeShEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTKTpcbiAgICAgIHJldHVybiAnTExMIGQsIHl5eXksIGg6bW06c3MgYSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuICdMTExMIGQsIHl5eXksIGg6bW06c3MgYSc7XG4gICAgY2FzZSBzdHJpbmdpZnkoREFURVRJTUVfSFVHRV9XSVRIX1NFQ09ORFMpOlxuICAgICAgcmV0dXJuICdFRUVFLCBMTExMIGQsIHl5eXksIGg6bW06c3MgYSc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBkYXRlVGltZUh1Z2U7XG4gIH1cbn1cblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vLyB0aGVzZSBhcmVuJ3QgcmVhbGx5IHByaXZhdGUsIGJ1dCBub3IgYXJlIHRoZXkgcmVhbGx5IHVzZWZ1bCB0byBkb2N1bWVudFxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBMdXhvbkVycm9yID0gZnVuY3Rpb24gKF9FcnJvcikge1xuICBpbmhlcml0cyhMdXhvbkVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIEx1eG9uRXJyb3IoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTHV4b25FcnJvcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0Vycm9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIEx1eG9uRXJyb3I7XG59KEVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIEludmFsaWREYXRlVGltZUVycm9yID0gZnVuY3Rpb24gKF9MdXhvbkVycm9yKSB7XG4gIGluaGVyaXRzKEludmFsaWREYXRlVGltZUVycm9yLCBfTHV4b25FcnJvcik7XG5cbiAgZnVuY3Rpb24gSW52YWxpZERhdGVUaW1lRXJyb3IocmVhc29uKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSW52YWxpZERhdGVUaW1lRXJyb3IpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9MdXhvbkVycm9yLmNhbGwodGhpcywgJ0ludmFsaWQgRGF0ZVRpbWU6ICcgKyByZWFzb24pKTtcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkRGF0ZVRpbWVFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIEludmFsaWRJbnRlcnZhbEVycm9yID0gZnVuY3Rpb24gKF9MdXhvbkVycm9yMikge1xuICBpbmhlcml0cyhJbnZhbGlkSW50ZXJ2YWxFcnJvciwgX0x1eG9uRXJyb3IyKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkSW50ZXJ2YWxFcnJvcihyZWFzb24pIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkSW50ZXJ2YWxFcnJvcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0x1eG9uRXJyb3IyLmNhbGwodGhpcywgJ0ludmFsaWQgSW50ZXJ2YWw6ICcgKyByZWFzb24pKTtcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkSW50ZXJ2YWxFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIEludmFsaWREdXJhdGlvbkVycm9yID0gZnVuY3Rpb24gKF9MdXhvbkVycm9yMykge1xuICBpbmhlcml0cyhJbnZhbGlkRHVyYXRpb25FcnJvciwgX0x1eG9uRXJyb3IzKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkRHVyYXRpb25FcnJvcihyZWFzb24pIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkRHVyYXRpb25FcnJvcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0x1eG9uRXJyb3IzLmNhbGwodGhpcywgJ0ludmFsaWQgRHVyYXRpb246ICcgKyByZWFzb24pKTtcbiAgfVxuXG4gIHJldHVybiBJbnZhbGlkRHVyYXRpb25FcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yID0gZnVuY3Rpb24gKF9MdXhvbkVycm9yNCkge1xuICBpbmhlcml0cyhDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvciwgX0x1eG9uRXJyb3I0KTtcblxuICBmdW5jdGlvbiBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0x1eG9uRXJyb3I0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yO1xufShMdXhvbkVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgSW52YWxpZFVuaXRFcnJvciA9IGZ1bmN0aW9uIChfTHV4b25FcnJvcjUpIHtcbiAgaW5oZXJpdHMoSW52YWxpZFVuaXRFcnJvciwgX0x1eG9uRXJyb3I1KTtcblxuICBmdW5jdGlvbiBJbnZhbGlkVW5pdEVycm9yKHVuaXQpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkVW5pdEVycm9yKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfTHV4b25FcnJvcjUuY2FsbCh0aGlzLCAnSW52YWxpZCB1bml0ICcgKyB1bml0KSk7XG4gIH1cblxuICByZXR1cm4gSW52YWxpZFVuaXRFcnJvcjtcbn0oTHV4b25FcnJvcik7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xudmFyIEludmFsaWRBcmd1bWVudEVycm9yID0gZnVuY3Rpb24gKF9MdXhvbkVycm9yNikge1xuICBpbmhlcml0cyhJbnZhbGlkQXJndW1lbnRFcnJvciwgX0x1eG9uRXJyb3I2KTtcblxuICBmdW5jdGlvbiBJbnZhbGlkQXJndW1lbnRFcnJvcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkQXJndW1lbnRFcnJvcik7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0x1eG9uRXJyb3I2LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIEludmFsaWRBcmd1bWVudEVycm9yO1xufShMdXhvbkVycm9yKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgWm9uZUlzQWJzdHJhY3RFcnJvciA9IGZ1bmN0aW9uIChfTHV4b25FcnJvcjcpIHtcbiAgaW5oZXJpdHMoWm9uZUlzQWJzdHJhY3RFcnJvciwgX0x1eG9uRXJyb3I3KTtcblxuICBmdW5jdGlvbiBab25lSXNBYnN0cmFjdEVycm9yKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFpvbmVJc0Fic3RyYWN0RXJyb3IpO1xuICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9MdXhvbkVycm9yNy5jYWxsKHRoaXMsICdab25lIGlzIGFuIGFic3RyYWN0IGNsYXNzJykpO1xuICB9XG5cbiAgcmV0dXJuIFpvbmVJc0Fic3RyYWN0RXJyb3I7XG59KEx1eG9uRXJyb3IpO1xuXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IFwib2ZmXCIgKi9cblxuLyoqXG4gKiBAaW50ZXJmYWNlXG4qL1xuXG52YXIgWm9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gWm9uZSgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBab25lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBvZmZzZXQncyBjb21tb24gbmFtZSAoc3VjaCBhcyBFU1QpIGF0IHRoZSBzcGVjaWZpZWQgdGltZXN0YW1wXG4gICAqIEBhYnN0cmFjdFxuICAgKiBAcGFyYW0ge251bWJlcn0gdHMgLSBFcG9jaCBtaWxsaXNlY29uZHMgZm9yIHdoaWNoIHRvIGdldCB0aGUgbmFtZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIE9wdGlvbnMgdG8gYWZmZWN0IHRoZSBmb3JtYXRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMuZm9ybWF0IC0gV2hhdCBzdHlsZSBvZiBvZmZzZXQgdG8gcmV0dXJuLiBBY2NlcHRzICdsb25nJyBvciAnc2hvcnQnLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5sb2NhbGVDb2RlIC0gV2hhdCBsb2NhbGUgdG8gcmV0dXJuIHRoZSBvZmZzZXQgbmFtZSBpbi4gRGVmYXVsdHMgdG8gdXMtZW5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgWm9uZS5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgb3B0cykge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgZm9yIHRoaXMgem9uZSBhdCB0aGUgc3BlY2lmaWVkIHRpbWVzdGFtcC5cbiAgICogQGFic3RyYWN0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0cyAtIEVwb2NoIG1pbGxpc2Vjb25kcyBmb3Igd2hpY2ggdG8gY29tcHV0ZSB0aGUgb2Zmc2V0XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG5cblxuICBab25lLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHtcbiAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIFpvbmUgaXMgZXF1YWwgdG8gYW5vdGhlciB6b25lclxuICAgKiBAYWJzdHJhY3RcbiAgICogQHBhcmFtIHtab25lfSBvdGhlclpvbmUgLSB0aGUgem9uZSB0byBjb21wYXJlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgWm9uZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgWm9uZSBpcyB2YWxpZC5cbiAgICogQGFic3RyYWN0XG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKi9cblxuXG4gIGNyZWF0ZUNsYXNzKFpvbmUsIFt7XG4gICAga2V5OiAndHlwZScsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiB6b25lXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHRocm93IG5ldyBab25lSXNBYnN0cmFjdEVycm9yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhpcyB6b25lLlxuICAgICAqIEBhYnN0cmFjdFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ25hbWUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIG9mZnNldCBpcyBrbm93biB0byBiZSBmaXhlZCBmb3IgdGhlIHdob2xlIHllYXIuXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3VuaXZlcnNhbCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICB0aHJvdyBuZXcgWm9uZUlzQWJzdHJhY3RFcnJvcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgdGhyb3cgbmV3IFpvbmVJc0Fic3RyYWN0RXJyb3IoKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFpvbmU7XG59KCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIExvY2FsWm9uZSA9IGZ1bmN0aW9uIChfWm9uZSkge1xuICBpbmhlcml0cyhMb2NhbFpvbmUsIF9ab25lKTtcblxuICBmdW5jdGlvbiBMb2NhbFpvbmUoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxab25lKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfWm9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIExvY2FsWm9uZS5wcm90b3R5cGUub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUodHMsIF9yZWYpIHtcbiAgICB2YXIgZm9ybWF0ID0gX3JlZi5mb3JtYXQsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlO1xuXG4gICAgcmV0dXJuIHBhcnNlWm9uZUluZm8odHMsIGZvcm1hdCwgbG9jYWxlKTtcbiAgfTtcblxuICBMb2NhbFpvbmUucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCh0cykge1xuICAgIHJldHVybiAtbmV3IERhdGUodHMpLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gIH07XG5cbiAgTG9jYWxab25lLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAnbG9jYWwnO1xuICB9O1xuXG4gIGNyZWF0ZUNsYXNzKExvY2FsWm9uZSwgW3tcbiAgICBrZXk6ICd0eXBlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiAnbG9jYWwnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ25hbWUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgaWYgKGhhc0ludGwoKSkge1xuICAgICAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcbiAgICAgIH0gZWxzZSByZXR1cm4gJ2xvY2FsJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1bml2ZXJzYWwnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdpbnN0YW5jZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAoc2luZ2xldG9uID09PSBudWxsKSB7XG4gICAgICAgIHNpbmdsZXRvbiA9IG5ldyBMb2NhbFpvbmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaW5nbGV0b247XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbFpvbmU7XG59KFpvbmUpO1xuXG52YXIgZHRmQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIG1ha2VEVEYoem9uZSkge1xuICBpZiAoIWR0ZkNhY2hlW3pvbmVdKSB7XG4gICAgZHRmQ2FjaGVbem9uZV0gPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7XG4gICAgICBob3VyMTI6IGZhbHNlLFxuICAgICAgdGltZVpvbmU6IHpvbmUsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJzItZGlnaXQnLFxuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIHNlY29uZDogJzItZGlnaXQnXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGR0ZkNhY2hlW3pvbmVdO1xufVxuXG52YXIgdHlwZVRvUG9zID0ge1xuICB5ZWFyOiAwLFxuICBtb250aDogMSxcbiAgZGF5OiAyLFxuICBob3VyOiAzLFxuICBtaW51dGU6IDQsXG4gIHNlY29uZDogNVxufTtcblxuZnVuY3Rpb24gaGFja3lPZmZzZXQoZHRmLCBkYXRlKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSBkdGYuZm9ybWF0KGRhdGUpLnJlcGxhY2UoL1xcdTIwMEUvZywgJycpLFxuICAgICAgcGFyc2VkID0gLyhcXGQrKVxcLyhcXGQrKVxcLyhcXGQrKSw/IChcXGQrKTooXFxkKyk6KFxcZCspLy5leGVjKGZvcm1hdHRlZCksXG4gICAgICBmTW9udGggPSBwYXJzZWRbMV0sXG4gICAgICBmRGF5ID0gcGFyc2VkWzJdLFxuICAgICAgZlllYXIgPSBwYXJzZWRbM10sXG4gICAgICBmSG91ciA9IHBhcnNlZFs0XSxcbiAgICAgIGZNaW51dGUgPSBwYXJzZWRbNV0sXG4gICAgICBmU2Vjb25kID0gcGFyc2VkWzZdO1xuXG4gIHJldHVybiBbZlllYXIsIGZNb250aCwgZkRheSwgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmRdO1xufVxuXG5mdW5jdGlvbiBwYXJ0c09mZnNldChkdGYsIGRhdGUpIHtcbiAgdmFyIGZvcm1hdHRlZCA9IGR0Zi5mb3JtYXRUb1BhcnRzKGRhdGUpLFxuICAgICAgZmlsbGVkID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZm9ybWF0dGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIF9mb3JtYXR0ZWQkaSA9IGZvcm1hdHRlZFtpXSxcbiAgICAgICAgdHlwZSA9IF9mb3JtYXR0ZWQkaS50eXBlLFxuICAgICAgICB2YWx1ZSA9IF9mb3JtYXR0ZWQkaS52YWx1ZSxcbiAgICAgICAgcG9zID0gdHlwZVRvUG9zW3R5cGVdO1xuXG5cbiAgICBpZiAoIWlzVW5kZWZpbmVkKHBvcykpIHtcbiAgICAgIGZpbGxlZFtwb3NdID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbGxlZDtcbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBJQU5BWm9uZSA9IGZ1bmN0aW9uIChfWm9uZSkge1xuICBpbmhlcml0cyhJQU5BWm9uZSwgX1pvbmUpO1xuXG4gIElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIgPSBmdW5jdGlvbiBpc1ZhbGlkU3BlY2lmaWVyKHMpIHtcbiAgICByZXR1cm4gcyAmJiBzLm1hdGNoKC9eW2Etel8rLV17MSwyNTZ9XFwvW2Etel8rLV17MSwyNTZ9JC9pKTtcbiAgfTtcblxuICBJQU5BWm9uZS5pc1ZhbGlkWm9uZSA9IGZ1bmN0aW9uIGlzVmFsaWRab25lKHpvbmUpIHtcbiAgICB0cnkge1xuICAgICAgbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeyB0aW1lWm9uZTogem9uZSB9KS5mb3JtYXQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRXRjL0dNVCs4IC0+IDQ4MFxuXG5cbiAgSUFOQVpvbmUucGFyc2VHTVRPZmZzZXQgPSBmdW5jdGlvbiBwYXJzZUdNVE9mZnNldChzcGVjaWZpZXIpIHtcbiAgICBpZiAoc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBzcGVjaWZpZXIubWF0Y2goL15FdGNcXC9HTVQoWystXVxcZHsxLDJ9KSQvaSk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIDYwICogcGFyc2VJbnQobWF0Y2hbMV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBmdW5jdGlvbiBJQU5BWm9uZShuYW1lKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSUFOQVpvbmUpO1xuXG4gICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfWm9uZS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnpvbmVOYW1lID0gbmFtZTtcbiAgICBfdGhpcy52YWxpZCA9IElBTkFab25lLmlzVmFsaWRab25lKG5hbWUpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIElBTkFab25lLnByb3RvdHlwZS5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSh0cywgX3JlZikge1xuICAgIHZhciBmb3JtYXQgPSBfcmVmLmZvcm1hdCxcbiAgICAgICAgbG9jYWxlID0gX3JlZi5sb2NhbGU7XG5cbiAgICByZXR1cm4gcGFyc2Vab25lSW5mbyh0cywgZm9ybWF0LCBsb2NhbGUsIHRoaXMuem9uZU5hbWUpO1xuICB9O1xuXG4gIElBTkFab25lLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbiBvZmZzZXQodHMpIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRzKSxcbiAgICAgICAgZHRmID0gbWFrZURURih0aGlzLnpvbmVOYW1lKSxcbiAgICAgICAgX3JlZjIgPSBkdGYuZm9ybWF0VG9QYXJ0cyA/IHBhcnRzT2Zmc2V0KGR0ZiwgZGF0ZSkgOiBoYWNreU9mZnNldChkdGYsIGRhdGUpLFxuICAgICAgICBmWWVhciA9IF9yZWYyWzBdLFxuICAgICAgICBmTW9udGggPSBfcmVmMlsxXSxcbiAgICAgICAgZkRheSA9IF9yZWYyWzJdLFxuICAgICAgICBmSG91ciA9IF9yZWYyWzNdLFxuICAgICAgICBmTWludXRlID0gX3JlZjJbNF0sXG4gICAgICAgIGZTZWNvbmQgPSBfcmVmMls1XSxcbiAgICAgICAgYXNVVEMgPSBEYXRlLlVUQyhmWWVhciwgZk1vbnRoIC0gMSwgZkRheSwgZkhvdXIsIGZNaW51dGUsIGZTZWNvbmQpO1xuXG4gICAgdmFyIGFzVFMgPSBkYXRlLnZhbHVlT2YoKTtcbiAgICBhc1RTIC09IGFzVFMgJSAxMDAwO1xuICAgIHJldHVybiAoYXNVVEMgLSBhc1RTKSAvICg2MCAqIDEwMDApO1xuICB9O1xuXG4gIElBTkFab25lLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXJab25lKSB7XG4gICAgcmV0dXJuIG90aGVyWm9uZS50eXBlID09PSAnaWFuYScgJiYgb3RoZXJab25lLnpvbmVOYW1lID09PSB0aGlzLnpvbmVOYW1lO1xuICB9O1xuXG4gIGNyZWF0ZUNsYXNzKElBTkFab25lLCBbe1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuICdpYW5hJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICduYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvbmVOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VuaXZlcnNhbCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNWYWxpZCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy52YWxpZDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIElBTkFab25lO1xufShab25lKTtcblxudmFyIHNpbmdsZXRvbiQxID0gbnVsbDtcblxuZnVuY3Rpb24gaG91cnNNaW51dGVzT2Zmc2V0KHopIHtcbiAgdmFyIGhvdXJzID0gTWF0aC50cnVuYyh6LmZpeGVkIC8gNjApLFxuICAgICAgbWludXRlcyA9IE1hdGguYWJzKHouZml4ZWQgJSA2MCksXG4gICAgICBzaWduID0gaG91cnMgPiAwID8gJysnIDogJy0nLFxuICAgICAgYmFzZSA9IHNpZ24gKyBNYXRoLmFicyhob3Vycyk7XG4gIHJldHVybiBtaW51dGVzID4gMCA/IGJhc2UgKyAnOicgKyBwYWRTdGFydChtaW51dGVzLCAyKSA6IGJhc2U7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgRml4ZWRPZmZzZXRab25lID0gZnVuY3Rpb24gKF9ab25lKSB7XG4gIGluaGVyaXRzKEZpeGVkT2Zmc2V0Wm9uZSwgX1pvbmUpO1xuXG4gIEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZSA9IGZ1bmN0aW9uIGluc3RhbmNlKG9mZnNldCkge1xuICAgIHJldHVybiBvZmZzZXQgPT09IDAgPyBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UgOiBuZXcgRml4ZWRPZmZzZXRab25lKG9mZnNldCk7XG4gIH07XG5cbiAgRml4ZWRPZmZzZXRab25lLnBhcnNlU3BlY2lmaWVyID0gZnVuY3Rpb24gcGFyc2VTcGVjaWZpZXIocykge1xuICAgIGlmIChzKSB7XG4gICAgICB2YXIgciA9IHMubWF0Y2goL151dGMoPzooWystXVxcZHsxLDJ9KSg/OjooXFxkezJ9KSk/KT8kL2kpO1xuICAgICAgaWYgKHIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBGaXhlZE9mZnNldFpvbmUoc2lnbmVkT2Zmc2V0KHJbMV0sIHJbMl0pKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBudWxsLCBbe1xuICAgIGtleTogJ3V0Y0luc3RhbmNlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIGlmIChzaW5nbGV0b24kMSA9PT0gbnVsbCkge1xuICAgICAgICBzaW5nbGV0b24kMSA9IG5ldyBGaXhlZE9mZnNldFpvbmUoMCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2luZ2xldG9uJDE7XG4gICAgfVxuICB9XSk7XG5cbiAgZnVuY3Rpb24gRml4ZWRPZmZzZXRab25lKG9mZnNldCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEZpeGVkT2Zmc2V0Wm9uZSk7XG5cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9ab25lLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuZml4ZWQgPSBvZmZzZXQ7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgRml4ZWRPZmZzZXRab25lLnByb3RvdHlwZS5vZmZzZXROYW1lID0gZnVuY3Rpb24gb2Zmc2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9O1xuXG4gIEZpeGVkT2Zmc2V0Wm9uZS5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24gb2Zmc2V0KCkge1xuICAgIHJldHVybiB0aGlzLmZpeGVkO1xuICB9O1xuXG4gIEZpeGVkT2Zmc2V0Wm9uZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyWm9uZSkge1xuICAgIHJldHVybiBvdGhlclpvbmUudHlwZSA9PT0gJ2ZpeGVkJyAmJiBvdGhlclpvbmUuZml4ZWQgPT09IHRoaXMuZml4ZWQ7XG4gIH07XG5cbiAgY3JlYXRlQ2xhc3MoRml4ZWRPZmZzZXRab25lLCBbe1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuICdmaXhlZCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbmFtZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXhlZCA9PT0gMCA/ICdVVEMnIDogJ1VUQycgKyBob3Vyc01pbnV0ZXNPZmZzZXQodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndW5pdmVyc2FsJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGaXhlZE9mZnNldFpvbmU7XG59KFpvbmUpO1xuXG52YXIgc2luZ2xldG9uJDIgPSBudWxsO1xuXG52YXIgSW52YWxpZFpvbmUgPSBmdW5jdGlvbiAoX1pvbmUpIHtcbiAgaW5oZXJpdHMoSW52YWxpZFpvbmUsIF9ab25lKTtcblxuICBmdW5jdGlvbiBJbnZhbGlkWm9uZSgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbnZhbGlkWm9uZSk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1pvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBJbnZhbGlkWm9uZS5wcm90b3R5cGUub2Zmc2V0TmFtZSA9IGZ1bmN0aW9uIG9mZnNldE5hbWUoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgSW52YWxpZFpvbmUucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uIG9mZnNldCgpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9O1xuXG4gIEludmFsaWRab25lLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNyZWF0ZUNsYXNzKEludmFsaWRab25lLCBbe1xuICAgIGtleTogJ3R5cGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuICdpbnZhbGlkJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICduYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VuaXZlcnNhbCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNWYWxpZCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdpbnN0YW5jZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAoc2luZ2xldG9uJDIgPT09IG51bGwpIHtcbiAgICAgICAgc2luZ2xldG9uJDIgPSBuZXcgSW52YWxpZFpvbmUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzaW5nbGV0b24kMjtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEludmFsaWRab25lO1xufShab25lKTtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVpvbmUoaW5wdXQsIGRlZmF1bHRab25lKSB7XG4gIHZhciBvZmZzZXQgPSB2b2lkIDA7XG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkgfHwgaW5wdXQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZGVmYXVsdFpvbmU7XG4gIH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBab25lKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xuICAgIHZhciBsb3dlcmVkID0gaW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobG93ZXJlZCA9PT0gJ2xvY2FsJykgcmV0dXJuIExvY2FsWm9uZS5pbnN0YW5jZTtlbHNlIGlmIChsb3dlcmVkID09PSAndXRjJykgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS51dGNJbnN0YW5jZTtlbHNlIGlmICgob2Zmc2V0ID0gSUFOQVpvbmUucGFyc2VHTVRPZmZzZXQoaW5wdXQpKSAhPSBudWxsKSB7XG4gICAgICAvLyBoYW5kbGUgRXRjL0dNVC00LCB3aGljaCBWOCBjaG9rZXMgb25cbiAgICAgIHJldHVybiBGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KTtcbiAgICB9IGVsc2UgaWYgKElBTkFab25lLmlzVmFsaWRTcGVjaWZpZXIobG93ZXJlZCkpIHJldHVybiBuZXcgSUFOQVpvbmUoaW5wdXQpO2Vsc2UgcmV0dXJuIEZpeGVkT2Zmc2V0Wm9uZS5wYXJzZVNwZWNpZmllcihsb3dlcmVkKSB8fCBJbnZhbGlkWm9uZS5pbnN0YW5jZTtcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcbiAgICByZXR1cm4gRml4ZWRPZmZzZXRab25lLmluc3RhbmNlKGlucHV0KTtcbiAgfSBlbHNlIGlmICgodHlwZW9mIGlucHV0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihpbnB1dCkpID09PSAnb2JqZWN0JyAmJiBpbnB1dC5vZmZzZXQpIHtcbiAgICAvLyBUaGlzIGlzIGR1bWIsIGJ1dCB0aGUgaW5zdGFuY2VvZiBjaGVjayBhYm92ZSBkb2Vzbid0IHNlZW0gdG8gcmVhbGx5IHdvcmtcbiAgICAvLyBzbyB3ZSdyZSBkdWNrIGNoZWNraW5nIGl0XG4gICAgcmV0dXJuIGlucHV0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBJbnZhbGlkWm9uZS5pbnN0YW5jZTtcbiAgfVxufVxuXG52YXIgbm93ID0gZnVuY3Rpb24gbm93KCkge1xuICByZXR1cm4gbmV3IERhdGUoKS52YWx1ZU9mKCk7XG59LFxuICAgIGRlZmF1bHRab25lID0gbnVsbCxcbiAgICAvLyBub3Qgc2V0dGluZyB0aGlzIGRpcmVjdGx5IHRvIExvY2FsWm9uZS5pbnN0YW5jZSBiYyBsb2FkaW5nIG9yZGVyIGlzc3Vlc1xuZGVmYXVsdExvY2FsZSA9IG51bGwsXG4gICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bGwsXG4gICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gbnVsbCxcbiAgICB0aHJvd09uSW52YWxpZCA9IGZhbHNlO1xuXG4vKipcbiAqIFNldHRpbmdzIGNvbnRhaW5zIHN0YXRpYyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIHRoYXQgY29udHJvbCBMdXhvbidzIG92ZXJhbGwgYmVoYXZpb3IuIEx1eG9uIGlzIGEgc2ltcGxlIGxpYnJhcnkgd2l0aCBmZXcgb3B0aW9ucywgYnV0IHRoZSBvbmVzIGl0IGRvZXMgaGF2ZSBsaXZlIGhlcmUuXG4gKi9cblxudmFyIFNldHRpbmdzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXR0aW5ncygpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTZXR0aW5ncyk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgTHV4b24ncyBnbG9iYWwgY2FjaGVzLiBTaG91bGQgb25seSBiZSBuZWNlc3NhcnkgaW4gdGVzdGluZyBzY2VuYXJpb3MuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBTZXR0aW5ncy5yZXNldENhY2hlcyA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGVzKCkge1xuICAgIExvY2FsZS5yZXNldENhY2hlKCk7XG4gIH07XG5cbiAgY3JlYXRlQ2xhc3MoU2V0dGluZ3MsIG51bGwsIFt7XG4gICAga2V5OiAnbm93JyxcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2FsbGJhY2sgZm9yIHJldHVybmluZyB0aGUgY3VycmVudCB0aW1lc3RhbXAuXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIG5vdztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNhbGxiYWNrIGZvciByZXR1cm5pbmcgdGhlIGN1cnJlbnQgdGltZXN0YW1wLlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEobikge1xuICAgICAgbm93ID0gbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgdGltZSB6b25lIHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVmYXVsdFpvbmVOYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiAoZGVmYXVsdFpvbmUgfHwgTG9jYWxab25lLmluc3RhbmNlKS5uYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgdG8gY3JlYXRlIERhdGVUaW1lcyBpbi4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh6KSB7XG4gICAgICBpZiAoIXopIHtcbiAgICAgICAgZGVmYXVsdFpvbmUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmYXVsdFpvbmUgPSBub3JtYWxpemVab25lKHopO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZGVmYXVsdCB0aW1lIHpvbmUgb2JqZWN0IHRvIGNyZWF0ZSBEYXRlVGltZXMgaW4uIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge1pvbmV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RlZmF1bHRab25lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBkZWZhdWx0Wm9uZSB8fCBMb2NhbFpvbmUuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IGxvY2FsZSB0byBjcmVhdGUgRGF0ZVRpbWVzIHdpdGguIERvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGVmYXVsdExvY2FsZScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdExvY2FsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgbG9jYWxlIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShsb2NhbGUpIHtcbiAgICAgIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RlZmF1bHROdW1iZXJpbmdTeXN0ZW0nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHROdW1iZXJpbmdTeXN0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IG51bWJlcmluZyBzeXN0ZW0gdG8gY3JlYXRlIERhdGVUaW1lcyB3aXRoLiBEb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKG51bWJlcmluZ1N5c3RlbSkge1xuICAgICAgZGVmYXVsdE51bWJlcmluZ1N5c3RlbSA9IG51bWJlcmluZ1N5c3RlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWZhdWx0T3V0cHV0Q2FsZW5kYXInLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIGRlZmF1bHRPdXRwdXRDYWxlbmRhcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGRlZmF1bHQgb3V0cHV0IGNhbGVuZGFyIHRvIGNyZWF0ZSBEYXRlVGltZXMgd2l0aC4gRG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuICAgICxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShvdXRwdXRDYWxlbmRhcikge1xuICAgICAgZGVmYXVsdE91dHB1dENhbGVuZGFyID0gb3V0cHV0Q2FsZW5kYXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHdoZXRoZXIgTHV4b24gd2lsbCB0aHJvdyB3aGVuIGl0IGVuY291bnRlcnMgaW52YWxpZCBEYXRlVGltZXMsIER1cmF0aW9ucywgb3IgSW50ZXJ2YWxzXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3Rocm93T25JbnZhbGlkJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aHJvd09uSW52YWxpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgd2hldGhlciBMdXhvbiB3aWxsIHRocm93IHdoZW4gaXQgZW5jb3VudGVycyBpbnZhbGlkIERhdGVUaW1lcywgRHVyYXRpb25zLCBvciBJbnRlcnZhbHNcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodCkge1xuICAgICAgdGhyb3dPbkludmFsaWQgPSB0O1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU2V0dGluZ3M7XG59KCk7XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVRva2VucyhzcGxpdHMsIHRva2VuVG9TdHJpbmcpIHtcbiAgdmFyIHMgPSAnJztcbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gc3BsaXRzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgIHZhciBfcmVmO1xuXG4gICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIHRva2VuID0gX3JlZjtcblxuICAgIGlmICh0b2tlbi5saXRlcmFsKSB7XG4gICAgICBzICs9IHRva2VuLnZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcyArPSB0b2tlblRvU3RyaW5nKHRva2VuLnZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzO1xufVxuXG52YXIgdG9rZW5Ub09iamVjdCA9IHtcbiAgRDogREFURV9TSE9SVCxcbiAgREQ6IERBVEVfTUVELFxuICBEREQ6IERBVEVfRlVMTCxcbiAgRERERDogREFURV9IVUdFLFxuICB0OiBUSU1FX1NJTVBMRSxcbiAgdHQ6IFRJTUVfV0lUSF9TRUNPTkRTLFxuICB0dHQ6IFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQsXG4gIHR0dHQ6IFRJTUVfV0lUSF9MT05HX09GRlNFVCxcbiAgVDogVElNRV8yNF9TSU1QTEUsXG4gIFRUOiBUSU1FXzI0X1dJVEhfU0VDT05EUyxcbiAgVFRUOiBUSU1FXzI0X1dJVEhfU0hPUlRfT0ZGU0VULFxuICBUVFRUOiBUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQsXG4gIGY6IERBVEVUSU1FX1NIT1JULFxuICBmZjogREFURVRJTUVfTUVELFxuICBmZmY6IERBVEVUSU1FX0ZVTEwsXG4gIGZmZmY6IERBVEVUSU1FX0hVR0UsXG4gIEY6IERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUyxcbiAgRkY6IERBVEVUSU1FX01FRF9XSVRIX1NFQ09ORFMsXG4gIEZGRjogREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFMsXG4gIEZGRkY6IERBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTXG59O1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEZvcm1hdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgRm9ybWF0dGVyLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShsb2NhbGUpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgZm9ybWF0T3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHsgcm91bmQ6IHRydWUgfSwgb3B0cyk7XG4gICAgcmV0dXJuIG5ldyBGb3JtYXR0ZXIobG9jYWxlLCBmb3JtYXRPcHRzKTtcbiAgfTtcblxuICBGb3JtYXR0ZXIucGFyc2VGb3JtYXQgPSBmdW5jdGlvbiBwYXJzZUZvcm1hdChmbXQpIHtcbiAgICB2YXIgY3VycmVudCA9IG51bGwsXG4gICAgICAgIGN1cnJlbnRGdWxsID0gJycsXG4gICAgICAgIGJyYWNrZXRlZCA9IGZhbHNlO1xuICAgIHZhciBzcGxpdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZtdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBmbXQuY2hhckF0KGkpO1xuICAgICAgaWYgKGMgPT09IFwiJ1wiKSB7XG4gICAgICAgIGlmIChjdXJyZW50RnVsbC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRGdWxsID0gJyc7XG4gICAgICAgIGJyYWNrZXRlZCA9ICFicmFja2V0ZWQ7XG4gICAgICB9IGVsc2UgaWYgKGJyYWNrZXRlZCkge1xuICAgICAgICBjdXJyZW50RnVsbCArPSBjO1xuICAgICAgfSBlbHNlIGlmIChjID09PSBjdXJyZW50KSB7XG4gICAgICAgIGN1cnJlbnRGdWxsICs9IGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNwbGl0cy5wdXNoKHsgbGl0ZXJhbDogZmFsc2UsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudEZ1bGwgPSBjO1xuICAgICAgICBjdXJyZW50ID0gYztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudEZ1bGwubGVuZ3RoID4gMCkge1xuICAgICAgc3BsaXRzLnB1c2goeyBsaXRlcmFsOiBicmFja2V0ZWQsIHZhbDogY3VycmVudEZ1bGwgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwbGl0cztcbiAgfTtcblxuICBmdW5jdGlvbiBGb3JtYXR0ZXIobG9jYWxlLCBmb3JtYXRPcHRzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRm9ybWF0dGVyKTtcblxuICAgIHRoaXMub3B0cyA9IGZvcm1hdE9wdHM7XG4gICAgdGhpcy5sb2MgPSBsb2NhbGU7XG4gICAgdGhpcy5zeXN0ZW1Mb2MgPSBudWxsO1xuICB9XG5cbiAgRm9ybWF0dGVyLnByb3RvdHlwZS5mb3JtYXRXaXRoU3lzdGVtRGVmYXVsdCA9IGZ1bmN0aW9uIGZvcm1hdFdpdGhTeXN0ZW1EZWZhdWx0KGR0LCBvcHRzKSB7XG4gICAgaWYgKHRoaXMuc3lzdGVtTG9jID09PSBudWxsKSB7XG4gICAgICB0aGlzLnN5c3RlbUxvYyA9IHRoaXMubG9jLnJlZGVmYXVsdFRvU3lzdGVtKCk7XG4gICAgfVxuICAgIHZhciBkZiA9IHRoaXMuc3lzdGVtTG9jLmR0Rm9ybWF0dGVyKGR0LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLm9wdHMsIG9wdHMpKTtcbiAgICByZXR1cm4gZGYuZm9ybWF0KCk7XG4gIH07XG5cbiAgRm9ybWF0dGVyLnByb3RvdHlwZS5mb3JtYXREYXRlVGltZSA9IGZ1bmN0aW9uIGZvcm1hdERhdGVUaW1lKGR0KSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXQoKTtcbiAgfTtcblxuICBGb3JtYXR0ZXIucHJvdG90eXBlLmZvcm1hdERhdGVUaW1lUGFydHMgPSBmdW5jdGlvbiBmb3JtYXREYXRlVGltZVBhcnRzKGR0KSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgdmFyIGRmID0gdGhpcy5sb2MuZHRGb3JtYXR0ZXIoZHQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cywgb3B0cykpO1xuICAgIHJldHVybiBkZi5mb3JtYXRUb1BhcnRzKCk7XG4gIH07XG5cbiAgRm9ybWF0dGVyLnByb3RvdHlwZS5yZXNvbHZlZE9wdGlvbnMgPSBmdW5jdGlvbiByZXNvbHZlZE9wdGlvbnMoZHQpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgZGYgPSB0aGlzLmxvYy5kdEZvcm1hdHRlcihkdCwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzLCBvcHRzKSk7XG4gICAgcmV0dXJuIGRmLnJlc29sdmVkT3B0aW9ucygpO1xuICB9O1xuXG4gIEZvcm1hdHRlci5wcm90b3R5cGUubnVtID0gZnVuY3Rpb24gbnVtKG4pIHtcbiAgICB2YXIgcCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcblxuICAgIC8vIHdlIGdldCBzb21lIHBlcmYgb3V0IG9mIGRvaW5nIHRoaXMgaGVyZSwgYW5ub3lpbmdseVxuICAgIGlmICh0aGlzLm9wdHMuZm9yY2VTaW1wbGUpIHtcbiAgICAgIHJldHVybiBwYWRTdGFydChuLCBwKTtcbiAgICB9XG5cbiAgICB2YXIgb3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0cyk7XG5cbiAgICBpZiAocCA+IDApIHtcbiAgICAgIG9wdHMucGFkVG8gPSBwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxvYy5udW1iZXJGb3JtYXR0ZXIob3B0cykuZm9ybWF0KG4pO1xuICB9O1xuXG4gIEZvcm1hdHRlci5wcm90b3R5cGUuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nID0gZnVuY3Rpb24gZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmbXQpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIGtub3duRW5nbGlzaCA9IHRoaXMubG9jLmxpc3RpbmdNb2RlKCkgPT09ICdlbic7XG4gICAgdmFyIHN0cmluZyA9IGZ1bmN0aW9uIHN0cmluZyhvcHRzLCBleHRyYWN0KSB7XG4gICAgICByZXR1cm4gX3RoaXMubG9jLmV4dHJhY3QoZHQsIG9wdHMsIGV4dHJhY3QpO1xuICAgIH0sXG4gICAgICAgIGZvcm1hdE9mZnNldCA9IGZ1bmN0aW9uIGZvcm1hdE9mZnNldChvcHRzKSB7XG4gICAgICBpZiAoZHQuaXNPZmZzZXRGaXhlZCAmJiBkdC5vZmZzZXQgPT09IDAgJiYgb3B0cy5hbGxvd1opIHtcbiAgICAgICAgcmV0dXJuICdaJztcbiAgICAgIH1cblxuICAgICAgdmFyIGhvdXJzID0gTWF0aC50cnVuYyhkdC5vZmZzZXQgLyA2MCksXG4gICAgICAgICAgbWludXRlcyA9IE1hdGguYWJzKGR0Lm9mZnNldCAlIDYwKSxcbiAgICAgICAgICBzaWduID0gaG91cnMgPj0gMCA/ICcrJyA6ICctJyxcbiAgICAgICAgICBiYXNlID0gJycgKyBzaWduICsgTWF0aC5hYnMoaG91cnMpO1xuXG4gICAgICBzd2l0Y2ggKG9wdHMuZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgJ3Nob3J0JzpcbiAgICAgICAgICByZXR1cm4gJycgKyBzaWduICsgX3RoaXMubnVtKE1hdGguYWJzKGhvdXJzKSwgMikgKyAnOicgKyBfdGhpcy5udW0obWludXRlcywgMik7XG4gICAgICAgIGNhc2UgJ25hcnJvdyc6XG4gICAgICAgICAgcmV0dXJuIG1pbnV0ZXMgPiAwID8gYmFzZSArICc6JyArIG1pbnV0ZXMgOiBiYXNlO1xuICAgICAgICBjYXNlICd0ZWNoaWUnOlxuICAgICAgICAgIHJldHVybiAnJyArIHNpZ24gKyBfdGhpcy5udW0oTWF0aC5hYnMoaG91cnMpLCAyKSArIF90aGlzLm51bShtaW51dGVzLCAyKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVmFsdWUgZm9ybWF0ICcgKyBvcHRzLmZvcm1hdCArICcgaXMgb3V0IG9mIHJhbmdlIGZvciBwcm9wZXJ0eSBmb3JtYXQnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBtZXJpZGllbSA9IGZ1bmN0aW9uIG1lcmlkaWVtKCkge1xuICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IG1lcmlkaWVtRm9yRGF0ZVRpbWUoZHQpIDogc3RyaW5nKHsgaG91cjogJ251bWVyaWMnLCBob3VyMTI6IHRydWUgfSwgJ2RheXBlcmlvZCcpO1xuICAgIH0sXG4gICAgICAgIG1vbnRoID0gZnVuY3Rpb24gbW9udGgobGVuZ3RoLCBzdGFuZGFsb25lKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gbW9udGhGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8geyBtb250aDogbGVuZ3RoIH0gOiB7IG1vbnRoOiBsZW5ndGgsIGRheTogJ251bWVyaWMnIH0sICdtb250aCcpO1xuICAgIH0sXG4gICAgICAgIHdlZWtkYXkgPSBmdW5jdGlvbiB3ZWVrZGF5KGxlbmd0aCwgc3RhbmRhbG9uZSkge1xuICAgICAgcmV0dXJuIGtub3duRW5nbGlzaCA/IHdlZWtkYXlGb3JEYXRlVGltZShkdCwgbGVuZ3RoKSA6IHN0cmluZyhzdGFuZGFsb25lID8geyB3ZWVrZGF5OiBsZW5ndGggfSA6IHsgd2Vla2RheTogbGVuZ3RoLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9LCAnd2Vla2RheScpO1xuICAgIH0sXG4gICAgICAgIG1heWJlTWFjcm8gPSBmdW5jdGlvbiBtYXliZU1hY3JvKHRva2VuKSB7XG4gICAgICB2YXIgbWFjcm8gPSB0b2tlblRvT2JqZWN0W3Rva2VuXTtcbiAgICAgIGlmIChtYWNybykge1xuICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0V2l0aFN5c3RlbURlZmF1bHQoZHQsIG1hY3JvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgIH1cbiAgICB9LFxuICAgICAgICBlcmEgPSBmdW5jdGlvbiBlcmEobGVuZ3RoKSB7XG4gICAgICByZXR1cm4ga25vd25FbmdsaXNoID8gZXJhRm9yRGF0ZVRpbWUoZHQsIGxlbmd0aCkgOiBzdHJpbmcoeyBlcmE6IGxlbmd0aCB9LCAnZXJhJyk7XG4gICAgfSxcbiAgICAgICAgdG9rZW5Ub1N0cmluZyA9IGZ1bmN0aW9uIHRva2VuVG9TdHJpbmcodG9rZW4pIHtcbiAgICAgIHZhciBvdXRwdXRDYWwgPSBfdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXI7XG5cbiAgICAgIC8vIFdoZXJlIHBvc3NpYmxlOiBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9kYXRlLXRpbWUjVE9DLVN0YW5kLUFsb25lLXZzLi1Gb3JtYXQtU3R5bGVzXG4gICAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAgIC8vIG1zXG4gICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWlsbGlzZWNvbmQpO1xuICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgICBjYXNlICdTU1MnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQubWlsbGlzZWNvbmQsIDMpO1xuICAgICAgICAvLyBzZWNvbmRzXG4gICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kKTtcbiAgICAgICAgY2FzZSAnc3MnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuc2Vjb25kLCAyKTtcbiAgICAgICAgLy8gbWludXRlc1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbnV0ZSk7XG4gICAgICAgIGNhc2UgJ21tJzpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm1pbnV0ZSwgMik7XG4gICAgICAgIC8vIGhvdXJzXG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91ciAlIDEyID09PSAwID8gMTIgOiBkdC5ob3VyICUgMTIpO1xuICAgICAgICBjYXNlICdoaCc6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5ob3VyICUgMTIgPT09IDAgPyAxMiA6IGR0LmhvdXIgJSAxMiwgMik7XG4gICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQuaG91cik7XG4gICAgICAgIGNhc2UgJ0hIJzpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LmhvdXIsIDIpO1xuICAgICAgICAvLyBvZmZzZXRcbiAgICAgICAgY2FzZSAnWic6XG4gICAgICAgICAgLy8gbGlrZSArNlxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6ICduYXJyb3cnLCBhbGxvd1o6IHRydWUgfSk7XG4gICAgICAgIGNhc2UgJ1paJzpcbiAgICAgICAgICAvLyBsaWtlICswNjowMFxuICAgICAgICAgIHJldHVybiBmb3JtYXRPZmZzZXQoeyBmb3JtYXQ6ICdzaG9ydCcsIGFsbG93WjogdHJ1ZSB9KTtcbiAgICAgICAgY2FzZSAnWlpaJzpcbiAgICAgICAgICAvLyBsaWtlICswNjAwXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdE9mZnNldCh7IGZvcm1hdDogJ3RlY2hpZScsIGFsbG93WjogZmFsc2UgfSk7XG4gICAgICAgIGNhc2UgJ1paWlonOlxuICAgICAgICAgIC8vIGxpa2UgRVNUXG4gICAgICAgICAgcmV0dXJuIGR0Lm9mZnNldE5hbWVTaG9ydDtcbiAgICAgICAgY2FzZSAnWlpaWlonOlxuICAgICAgICAgIC8vIGxpa2UgRWFzdGVybiBTdGFuZGFyZCBUaW1lXG4gICAgICAgICAgcmV0dXJuIGR0Lm9mZnNldE5hbWVMb25nO1xuICAgICAgICAvLyB6b25lXG4gICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgIC8vIGxpa2UgQW1lcmljYS9OZXdfWW9ya1xuICAgICAgICAgIHJldHVybiBkdC56b25lTmFtZTtcbiAgICAgICAgLy8gbWVyaWRpZW1zXG4gICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgIHJldHVybiBtZXJpZGllbSgpO1xuICAgICAgICAvLyBkYXRlc1xuICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0Q2FsID8gc3RyaW5nKHsgZGF5OiAnbnVtZXJpYycgfSwgJ2RheScpIDogX3RoaXMubnVtKGR0LmRheSk7XG4gICAgICAgIGNhc2UgJ2RkJzpcbiAgICAgICAgICByZXR1cm4gb3V0cHV0Q2FsID8gc3RyaW5nKHsgZGF5OiAnMi1kaWdpdCcgfSwgJ2RheScpIDogX3RoaXMubnVtKGR0LmRheSwgMik7XG4gICAgICAgIC8vIHdlZWtkYXlzIC0gc3RhbmRhbG9uZVxuICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICBjYXNlICdjY2MnOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ3Nob3J0JywgdHJ1ZSk7XG4gICAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXNkYXknXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ2xvbmcnLCB0cnVlKTtcbiAgICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICAgIC8vIGxpa2UgJ1QnXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ25hcnJvdycsIHRydWUpO1xuICAgICAgICAvLyB3ZWVrZGF5cyAtIGZvcm1hdFxuICAgICAgICBjYXNlICdFJzpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtkYXkpO1xuICAgICAgICBjYXNlICdFRUUnOlxuICAgICAgICAgIC8vIGxpa2UgJ1R1ZXMnXG4gICAgICAgICAgcmV0dXJuIHdlZWtkYXkoJ3Nob3J0JywgZmFsc2UpO1xuICAgICAgICBjYXNlICdFRUVFJzpcbiAgICAgICAgICAvLyBsaWtlICdUdWVzZGF5J1xuICAgICAgICAgIHJldHVybiB3ZWVrZGF5KCdsb25nJywgZmFsc2UpO1xuICAgICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgICAgLy8gbGlrZSAnVCdcbiAgICAgICAgICByZXR1cm4gd2Vla2RheSgnbmFycm93JywgZmFsc2UpO1xuICAgICAgICAvLyBtb250aHMgLSBzdGFuZGFsb25lXG4gICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgIHJldHVybiBvdXRwdXRDYWwgPyBzdHJpbmcoeyBtb250aDogJ251bWVyaWMnLCBkYXk6ICdudW1lcmljJyB9LCAnbW9udGgnKSA6IF90aGlzLm51bShkdC5tb250aCk7XG4gICAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgICAvLyBsaWtlIDAxLCBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICAgICAgICAgIHJldHVybiBvdXRwdXRDYWwgPyBzdHJpbmcoeyBtb250aDogJzItZGlnaXQnLCBkYXk6ICdudW1lcmljJyB9LCAnbW9udGgnKSA6IF90aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICByZXR1cm4gbW9udGgoJ3Nob3J0JywgdHJ1ZSk7XG4gICAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgICAgIC8vIGxpa2UgSmFudWFyeVxuICAgICAgICAgIHJldHVybiBtb250aCgnbG9uZycsIHRydWUpO1xuICAgICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgICAgLy8gbGlrZSBKXG4gICAgICAgICAgcmV0dXJuIG1vbnRoKCduYXJyb3cnLCB0cnVlKTtcbiAgICAgICAgLy8gbW9udGhzIC0gZm9ybWF0XG4gICAgICAgIGNhc2UgJ00nOlxuICAgICAgICAgIC8vIGxpa2UgMVxuICAgICAgICAgIHJldHVybiBvdXRwdXRDYWwgPyBzdHJpbmcoeyBtb250aDogJ251bWVyaWMnIH0sICdtb250aCcpIDogX3RoaXMubnVtKGR0Lm1vbnRoKTtcbiAgICAgICAgY2FzZSAnTU0nOlxuICAgICAgICAgIC8vIGxpa2UgMDFcbiAgICAgICAgICByZXR1cm4gb3V0cHV0Q2FsID8gc3RyaW5nKHsgbW9udGg6ICcyLWRpZ2l0JyB9LCAnbW9udGgnKSA6IF90aGlzLm51bShkdC5tb250aCwgMik7XG4gICAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgICAgLy8gbGlrZSBKYW5cbiAgICAgICAgICByZXR1cm4gbW9udGgoJ3Nob3J0JywgZmFsc2UpO1xuICAgICAgICBjYXNlICdNTU1NJzpcbiAgICAgICAgICAvLyBsaWtlIEphbnVhcnlcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ2xvbmcnLCBmYWxzZSk7XG4gICAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgICAvLyBsaWtlIEpcbiAgICAgICAgICByZXR1cm4gbW9udGgoJ25hcnJvdycsIGZhbHNlKTtcbiAgICAgICAgLy8geWVhcnNcbiAgICAgICAgY2FzZSAneSc6XG4gICAgICAgICAgLy8gbGlrZSAyMDE0XG4gICAgICAgICAgcmV0dXJuIG91dHB1dENhbCA/IHN0cmluZyh7IHllYXI6ICdudW1lcmljJyB9LCAneWVhcicpIDogX3RoaXMubnVtKGR0LnllYXIpO1xuICAgICAgICBjYXNlICd5eSc6XG4gICAgICAgICAgLy8gbGlrZSAxNFxuICAgICAgICAgIHJldHVybiBvdXRwdXRDYWwgPyBzdHJpbmcoeyB5ZWFyOiAnMi1kaWdpdCcgfSwgJ3llYXInKSA6IF90aGlzLm51bShkdC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoLTIpLCAyKTtcbiAgICAgICAgY2FzZSAneXl5eSc6XG4gICAgICAgICAgLy8gbGlrZSAwMDEyXG4gICAgICAgICAgcmV0dXJuIG91dHB1dENhbCA/IHN0cmluZyh7IHllYXI6ICdudW1lcmljJyB9LCAneWVhcicpIDogX3RoaXMubnVtKGR0LnllYXIsIDQpO1xuICAgICAgICBjYXNlICd5eXl5eXknOlxuICAgICAgICAgIC8vIGxpa2UgMDAwMDEyXG4gICAgICAgICAgcmV0dXJuIG91dHB1dENhbCA/IHN0cmluZyh7IHllYXI6ICdudW1lcmljJyB9LCAneWVhcicpIDogX3RoaXMubnVtKGR0LnllYXIsIDYpO1xuICAgICAgICAvLyBlcmFzXG4gICAgICAgIGNhc2UgJ0cnOlxuICAgICAgICAgIC8vIGxpa2UgQURcbiAgICAgICAgICByZXR1cm4gZXJhKCdzaG9ydCcpO1xuICAgICAgICBjYXNlICdHRyc6XG4gICAgICAgICAgLy8gbGlrZSBBbm5vIERvbWluaVxuICAgICAgICAgIHJldHVybiBlcmEoJ2xvbmcnKTtcbiAgICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICAgIHJldHVybiBlcmEoJ25hcnJvdycpO1xuICAgICAgICBjYXNlICdrayc6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrWWVhci50b1N0cmluZygpLnNsaWNlKC0yKSwgMik7XG4gICAgICAgIGNhc2UgJ2tra2snOlxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQud2Vla1llYXIsIDQpO1xuICAgICAgICBjYXNlICdXJzpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LndlZWtOdW1iZXIpO1xuICAgICAgICBjYXNlICdXVyc6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC53ZWVrTnVtYmVyLCAyKTtcbiAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm51bShkdC5vcmRpbmFsKTtcbiAgICAgICAgY2FzZSAnb29vJzpcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0Lm9yZGluYWwsIDMpO1xuICAgICAgICBjYXNlICdxJzpcbiAgICAgICAgICAvLyBsaWtlIDFcbiAgICAgICAgICByZXR1cm4gX3RoaXMubnVtKGR0LnF1YXJ0ZXIpO1xuICAgICAgICBjYXNlICdxcSc6XG4gICAgICAgICAgLy8gbGlrZSAwMVxuICAgICAgICAgIHJldHVybiBfdGhpcy5udW0oZHQucXVhcnRlciwgMik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG1heWJlTWFjcm8odG9rZW4pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKEZvcm1hdHRlci5wYXJzZUZvcm1hdChmbXQpLCB0b2tlblRvU3RyaW5nKTtcbiAgfTtcblxuICBGb3JtYXR0ZXIucHJvdG90eXBlLmZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZvcm1hdER1cmF0aW9uRnJvbVN0cmluZyhkdXIsIGZtdCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHRva2VuVG9GaWVsZCA9IGZ1bmN0aW9uIHRva2VuVG9GaWVsZCh0b2tlbikge1xuICAgICAgc3dpdGNoICh0b2tlblswXSkge1xuICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICByZXR1cm4gJ21pbGxpc2Vjb25kJztcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgcmV0dXJuICdzZWNvbmQnO1xuICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICByZXR1cm4gJ21pbnV0ZSc7XG4gICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgIHJldHVybiAnaG91cic7XG4gICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgIHJldHVybiAnZGF5JztcbiAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgcmV0dXJuICdtb250aCc7XG4gICAgICAgIGNhc2UgJ3knOlxuICAgICAgICAgIHJldHVybiAneWVhcic7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICAgICAgdG9rZW5Ub1N0cmluZyA9IGZ1bmN0aW9uIHRva2VuVG9TdHJpbmcobGlsZHVyKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIHZhciBtYXBwZWQgPSB0b2tlblRvRmllbGQodG9rZW4pO1xuICAgICAgICBpZiAobWFwcGVkKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5udW0obGlsZHVyLmdldChtYXBwZWQpLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgICAgICB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm10KSxcbiAgICAgICAgcmVhbFRva2VucyA9IHRva2Vucy5yZWR1Y2UoZnVuY3Rpb24gKGZvdW5kLCBfcmVmMikge1xuICAgICAgdmFyIGxpdGVyYWwgPSBfcmVmMi5saXRlcmFsLFxuICAgICAgICAgIHZhbCA9IF9yZWYyLnZhbDtcbiAgICAgIHJldHVybiBsaXRlcmFsID8gZm91bmQgOiBmb3VuZC5jb25jYXQodmFsKTtcbiAgICB9LCBbXSksXG4gICAgICAgIGNvbGxhcHNlZCA9IGR1ci5zaGlmdFRvLmFwcGx5KGR1ciwgcmVhbFRva2Vucy5tYXAodG9rZW5Ub0ZpZWxkKS5maWx0ZXIoZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0pKTtcbiAgICByZXR1cm4gc3RyaW5naWZ5VG9rZW5zKHRva2VucywgdG9rZW5Ub1N0cmluZyhjb2xsYXBzZWQpKTtcbiAgfTtcblxuICByZXR1cm4gRm9ybWF0dGVyO1xufSgpO1xuXG52YXIgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuZnVuY3Rpb24gc3lzdGVtTG9jYWxlKCkge1xuICBpZiAoc3lzTG9jYWxlQ2FjaGUpIHtcbiAgICByZXR1cm4gc3lzTG9jYWxlQ2FjaGU7XG4gIH0gZWxzZSBpZiAoaGFzSW50bCgpKSB7XG4gICAgdmFyIGNvbXB1dGVkU3lzID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS5sb2NhbGU7XG4gICAgLy8gbm9kZSBzb21ldGltZXMgZGVmYXVsdHMgdG8gXCJ1bmRcIi4gT3ZlcnJpZGUgdGhhdCBiZWNhdXNlIHRoYXQgaXMgZHVtYlxuICAgIHN5c0xvY2FsZUNhY2hlID0gY29tcHV0ZWRTeXMgPT09ICd1bmQnID8gJ2VuLVVTJyA6IGNvbXB1dGVkU3lzO1xuICAgIHJldHVybiBzeXNMb2NhbGVDYWNoZTtcbiAgfSBlbHNlIHtcbiAgICBzeXNMb2NhbGVDYWNoZSA9ICdlbi1VUyc7XG4gICAgcmV0dXJuIHN5c0xvY2FsZUNhY2hlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGxDb25maWdTdHJpbmcobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKSB7XG4gIGlmIChoYXNJbnRsKCkpIHtcbiAgICBsb2NhbGUgPSBBcnJheS5pc0FycmF5KGxvY2FsZSkgPyBsb2NhbGUgOiBbbG9jYWxlXTtcblxuICAgIGlmIChvdXRwdXRDYWxlbmRhciB8fCBudW1iZXJpbmdTeXN0ZW0pIHtcbiAgICAgIGxvY2FsZSA9IGxvY2FsZS5tYXAoZnVuY3Rpb24gKGwpIHtcbiAgICAgICAgbCArPSAnLXUnO1xuXG4gICAgICAgIGlmIChvdXRwdXRDYWxlbmRhcikge1xuICAgICAgICAgIGwgKz0gJy1jYS0nICsgb3V0cHV0Q2FsZW5kYXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtYmVyaW5nU3lzdGVtKSB7XG4gICAgICAgICAgbCArPSAnLW51LScgKyBudW1iZXJpbmdTeXN0ZW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxvY2FsZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwTW9udGhzKGYpIHtcbiAgdmFyIG1zID0gW107XG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgaSwgMSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBtYXBXZWVrZGF5cyhmKSB7XG4gIHZhciBtcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICB2YXIgZHQgPSBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzICsgaSk7XG4gICAgbXMucHVzaChmKGR0KSk7XG4gIH1cbiAgcmV0dXJuIG1zO1xufVxuXG5mdW5jdGlvbiBsaXN0U3R1ZmYobG9jLCBsZW5ndGgsIGRlZmF1bHRPSywgZW5nbGlzaEZuLCBpbnRsRm4pIHtcbiAgdmFyIG1vZGUgPSBsb2MubGlzdGluZ01vZGUoZGVmYXVsdE9LKTtcblxuICBpZiAobW9kZSA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2UgaWYgKG1vZGUgPT09ICdlbicpIHtcbiAgICByZXR1cm4gZW5nbGlzaEZuKGxlbmd0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGludGxGbihsZW5ndGgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzRmFzdE51bWJlcnMobG9jKSB7XG4gIGlmIChsb2MubnVtYmVyaW5nU3lzdGVtICYmIGxvYy5udW1iZXJpbmdTeXN0ZW0gIT09ICdsYXRuJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbG9jLm51bWJlcmluZ1N5c3RlbSA9PT0gJ2xhdG4nIHx8ICFsb2MubG9jYWxlIHx8IGxvYy5sb2NhbGUuc3RhcnRzV2l0aCgnZW4nKSB8fCBoYXNJbnRsKCkgJiYgSW50bC5EYXRlVGltZUZvcm1hdChsb2MuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubnVtYmVyaW5nU3lzdGVtID09PSAnbGF0bic7XG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBTaW1wbGVOdW1iZXJGb3JtYXR0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNpbXBsZU51bWJlckZvcm1hdHRlcihvcHRzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU2ltcGxlTnVtYmVyRm9ybWF0dGVyKTtcblxuICAgIHRoaXMucGFkVG8gPSBvcHRzLnBhZFRvIHx8IDA7XG4gICAgdGhpcy5yb3VuZCA9IG9wdHMucm91bmQgfHwgZmFsc2U7XG4gIH1cblxuICBTaW1wbGVOdW1iZXJGb3JtYXR0ZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdChpKSB7XG4gICAgLy8gdG8gbWF0Y2ggdGhlIGJyb3dzZXIncyBudW1iZXJmb3JtYXR0ZXIgZGVmYXVsdHNcbiAgICB2YXIgZGlnaXRzID0gdGhpcy5yb3VuZCA/IDAgOiAzLFxuICAgICAgICByb3VuZGVkID0gcm91bmRUbyhpLCBkaWdpdHMpO1xuICAgIHJldHVybiBwYWRTdGFydChyb3VuZGVkLCB0aGlzLnBhZFRvKTtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlTnVtYmVyRm9ybWF0dGVyO1xufSgpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIFBvbHlEYXRlRm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBQb2x5RGF0ZUZvcm1hdHRlcihkdCwgaW50bCwgb3B0cykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFBvbHlEYXRlRm9ybWF0dGVyKTtcblxuICAgIHRoaXMub3B0cyA9IG9wdHM7XG4gICAgdGhpcy5oYXNJbnRsID0gaGFzSW50bCgpO1xuXG4gICAgdmFyIHogPSB2b2lkIDA7XG4gICAgaWYgKGR0LnpvbmUudW5pdmVyc2FsICYmIHRoaXMuaGFzSW50bCkge1xuICAgICAgLy8gQ2hyb21pdW0gZG9lc24ndCBzdXBwb3J0IGZpeGVkLW9mZnNldCB6b25lcyBsaWtlIEV0Yy9HTVQrOCBpbiBpdHMgZm9ybWF0dGVyLFxuICAgICAgLy8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM2NDM3NC5cbiAgICAgIC8vIFNvIHdlIGhhdmUgdG8gbWFrZSBkby4gVHdvIGNhc2VzOlxuICAgICAgLy8gMS4gVGhlIGZvcm1hdCBvcHRpb25zIHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gV2UgY2FuJ3QgZG8gdGhhdCwgc28gdGhlIGJlc3RcbiAgICAgIC8vIHdlIGNhbiBkbyBpcyBmb3JtYXQgdGhlIGRhdGUgaW4gVVRDLlxuICAgICAgLy8gMi4gVGhlIGZvcm1hdCBvcHRpb25zIGRvbid0IHRlbGwgdXMgdG8gc2hvdyB0aGUgem9uZS4gVGhlbiB3ZSBjYW4gYWRqdXN0IHRoZW1cbiAgICAgIC8vIHRoZSB0aW1lIGFuZCB0ZWxsIHRoZSBmb3JtYXR0ZXIgdG8gc2hvdyBpdCB0byB1cyBpbiBVVEMsIHNvIHRoYXQgdGhlIHRpbWUgaXMgcmlnaHRcbiAgICAgIC8vIGFuZCB0aGUgYmFkIHpvbmUgZG9lc24ndCBzaG93IHVwLlxuICAgICAgLy8gV2UgY2FuIGNsZWFuIGFsbCB0aGlzIHVwIHdoZW4gQ2hyb21lIGZpeGVzIHRoaXMuXG4gICAgICB6ID0gJ1VUQyc7XG4gICAgICBpZiAob3B0cy50aW1lWm9uZU5hbWUpIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kdCA9IGR0Lm9mZnNldCA9PT0gMCA/IGR0IDogRGF0ZVRpbWUuZnJvbU1pbGxpcyhkdC50cyArIGR0Lm9mZnNldCAqIDYwICogMTAwMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkdC56b25lLnR5cGUgPT09ICdsb2NhbCcpIHtcbiAgICAgIHRoaXMuZHQgPSBkdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kdCA9IGR0O1xuICAgICAgeiA9IGR0LnpvbmUubmFtZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNJbnRsKSB7XG4gICAgICB2YXIgcmVhbEludGxPcHRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRzKTtcbiAgICAgIGlmICh6KSB7XG4gICAgICAgIHJlYWxJbnRsT3B0cy50aW1lWm9uZSA9IHo7XG4gICAgICB9XG4gICAgICB0aGlzLmR0ZiA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGludGwsIHJlYWxJbnRsT3B0cyk7XG4gICAgfVxuICB9XG5cbiAgUG9seURhdGVGb3JtYXR0ZXIucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAodGhpcy5oYXNJbnRsKSB7XG4gICAgICByZXR1cm4gdGhpcy5kdGYuZm9ybWF0KHRoaXMuZHQudG9KU0RhdGUoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b2tlbkZvcm1hdCA9IGZvcm1hdFN0cmluZyh0aGlzLm9wdHMpLFxuICAgICAgICAgIGxvYyA9IExvY2FsZS5jcmVhdGUoJ2VuLVVTJyk7XG4gICAgICByZXR1cm4gRm9ybWF0dGVyLmNyZWF0ZShsb2MpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLmR0LCB0b2tlbkZvcm1hdCk7XG4gICAgfVxuICB9O1xuXG4gIFBvbHlEYXRlRm9ybWF0dGVyLnByb3RvdHlwZS5mb3JtYXRUb1BhcnRzID0gZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cygpIHtcbiAgICBpZiAodGhpcy5oYXNJbnRsICYmIGhhc0Zvcm1hdFRvUGFydHMoKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZHRmLmZvcm1hdFRvUGFydHModGhpcy5kdC50b0pTRGF0ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhpcyBpcyBraW5kIG9mIGEgY29wIG91dC4gV2UgYWN0dWFsbHkgY291bGQgZG8gdGhpcyBmb3IgRW5nbGlzaC4gSG93ZXZlciwgd2UgY291bGRuJ3QgZG8gaXQgZm9yIGludGwgc3RyaW5nc1xuICAgICAgLy8gYW5kIElNTyBpdCdzIHRvbyB3ZWlyZCB0byBoYXZlIGFuIHVuY2FubnkgdmFsbGV5IGxpa2UgdGhhdFxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfTtcblxuICBQb2x5RGF0ZUZvcm1hdHRlci5wcm90b3R5cGUucmVzb2x2ZWRPcHRpb25zID0gZnVuY3Rpb24gcmVzb2x2ZWRPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLmhhc0ludGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmR0Zi5yZXNvbHZlZE9wdGlvbnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbG9jYWxlOiAnZW4tVVMnLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06ICdsYXRuJyxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXI6ICdncmVnb3J5J1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBvbHlEYXRlRm9ybWF0dGVyO1xufSgpO1xuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIExvY2FsZSA9IGZ1bmN0aW9uICgpIHtcbiAgTG9jYWxlLmZyb21PcHRzID0gZnVuY3Rpb24gZnJvbU9wdHMob3B0cykge1xuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKG9wdHMubG9jYWxlLCBvcHRzLm51bWJlcmluZ1N5c3RlbSwgb3B0cy5vdXRwdXRDYWxlbmRhciwgb3B0cy5kZWZhdWx0VG9FTik7XG4gIH07XG5cbiAgTG9jYWxlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3V0cHV0Q2FsZW5kYXIpIHtcbiAgICB2YXIgZGVmYXVsdFRvRU4gPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IGZhbHNlO1xuXG4gICAgdmFyIHNwZWNpZmllZExvY2FsZSA9IGxvY2FsZSB8fCBTZXR0aW5ncy5kZWZhdWx0TG9jYWxlLFxuXG4gICAgLy8gdGhlIHN5c3RlbSBsb2NhbGUgaXMgdXNlZnVsIGZvciBodW1hbiByZWFkYWJsZSBzdHJpbmdzIGJ1dCBhbm5veWluZyBmb3IgcGFyc2luZy9mb3JtYXR0aW5nIGtub3duIGZvcm1hdHNcbiAgICBsb2NhbGVSID0gc3BlY2lmaWVkTG9jYWxlIHx8IChkZWZhdWx0VG9FTiA/ICdlbi1VUycgOiBzeXN0ZW1Mb2NhbGUoKSksXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbVIgPSBudW1iZXJpbmdTeXN0ZW0gfHwgU2V0dGluZ3MuZGVmYXVsdE51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXJSID0gb3V0cHV0Q2FsZW5kYXIgfHwgU2V0dGluZ3MuZGVmYXVsdE91dHB1dENhbGVuZGFyO1xuICAgIHJldHVybiBuZXcgTG9jYWxlKGxvY2FsZVIsIG51bWJlcmluZ1N5c3RlbVIsIG91dHB1dENhbGVuZGFyUiwgc3BlY2lmaWVkTG9jYWxlKTtcbiAgfTtcblxuICBMb2NhbGUucmVzZXRDYWNoZSA9IGZ1bmN0aW9uIHJlc2V0Q2FjaGUoKSB7XG4gICAgc3lzTG9jYWxlQ2FjaGUgPSBudWxsO1xuICB9O1xuXG4gIExvY2FsZS5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdCgpIHtcbiAgICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmLm91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKTtcbiAgfTtcblxuICBmdW5jdGlvbiBMb2NhbGUobG9jYWxlLCBudW1iZXJpbmcsIG91dHB1dENhbGVuZGFyLCBzcGVjaWZpZWRMb2NhbGUpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbGUpO1xuXG4gICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSBudW1iZXJpbmc7XG4gICAgdGhpcy5vdXRwdXRDYWxlbmRhciA9IG91dHB1dENhbGVuZGFyO1xuICAgIHRoaXMuaW50bCA9IGludGxDb25maWdTdHJpbmcodGhpcy5sb2NhbGUsIHRoaXMubnVtYmVyaW5nU3lzdGVtLCB0aGlzLm91dHB1dENhbGVuZGFyKTtcblxuICAgIHRoaXMud2Vla2RheXNDYWNoZSA9IHsgZm9ybWF0OiB7fSwgc3RhbmRhbG9uZToge30gfTtcbiAgICB0aGlzLm1vbnRoc0NhY2hlID0geyBmb3JtYXQ6IHt9LCBzdGFuZGFsb25lOiB7fSB9O1xuICAgIHRoaXMubWVyaWRpZW1DYWNoZSA9IG51bGw7XG4gICAgdGhpcy5lcmFDYWNoZSA9IHt9O1xuXG4gICAgdGhpcy5zcGVjaWZpZWRMb2NhbGUgPSBzcGVjaWZpZWRMb2NhbGU7XG4gICAgdGhpcy5mYXN0TnVtYmVycyA9IHN1cHBvcnRzRmFzdE51bWJlcnModGhpcyk7XG4gIH1cblxuICAvLyB0b2RvOiBjYWNoZSBtZVxuXG5cbiAgTG9jYWxlLnByb3RvdHlwZS5saXN0aW5nTW9kZSA9IGZ1bmN0aW9uIGxpc3RpbmdNb2RlKCkge1xuICAgIHZhciBkZWZhdWx0T2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHRydWU7XG5cbiAgICB2YXIgaW50bCA9IGhhc0ludGwoKSxcbiAgICAgICAgaGFzRlRQID0gaW50bCAmJiBoYXNGb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIGlzQWN0dWFsbHlFbiA9IHRoaXMubG9jYWxlID09PSAnZW4nIHx8IHRoaXMubG9jYWxlLnRvTG93ZXJDYXNlKCkgPT09ICdlbi11cycgfHwgaW50bCAmJiBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMuaW50bCkucmVzb2x2ZWRPcHRpb25zKCkubG9jYWxlLnN0YXJ0c1dpdGgoJ2VuLXVzJyksXG4gICAgICAgIGhhc05vV2VpcmRuZXNzID0gKHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBudWxsIHx8IHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSAnbGF0bicpICYmICh0aGlzLm91dHB1dENhbGVuZGFyID09PSBudWxsIHx8IHRoaXMub3V0cHV0Q2FsZW5kYXIgPT09ICdncmVnb3J5Jyk7XG5cbiAgICBpZiAoIWhhc0ZUUCAmJiAhKGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcykgJiYgIWRlZmF1bHRPaykge1xuICAgICAgcmV0dXJuICdlcnJvcic7XG4gICAgfSBlbHNlIGlmICghaGFzRlRQIHx8IGlzQWN0dWFsbHlFbiAmJiBoYXNOb1dlaXJkbmVzcykge1xuICAgICAgcmV0dXJuICdlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaW50bCc7XG4gICAgfVxuICB9O1xuXG4gIExvY2FsZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiBjbG9uZShhbHRzKSB7XG4gICAgaWYgKCFhbHRzIHx8IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGFsdHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGFsdHMubG9jYWxlIHx8IHRoaXMuc3BlY2lmaWVkTG9jYWxlLCBhbHRzLm51bWJlcmluZ1N5c3RlbSB8fCB0aGlzLm51bWJlcmluZ1N5c3RlbSwgYWx0cy5vdXRwdXRDYWxlbmRhciB8fCB0aGlzLm91dHB1dENhbGVuZGFyLCBhbHRzLmRlZmF1bHRUb0VOIHx8IGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgTG9jYWxlLnByb3RvdHlwZS5yZWRlZmF1bHRUb0VOID0gZnVuY3Rpb24gcmVkZWZhdWx0VG9FTigpIHtcbiAgICB2YXIgYWx0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICByZXR1cm4gdGhpcy5jbG9uZShPYmplY3QuYXNzaWduKHt9LCBhbHRzLCB7IGRlZmF1bHRUb0VOOiB0cnVlIH0pKTtcbiAgfTtcblxuICBMb2NhbGUucHJvdG90eXBlLnJlZGVmYXVsdFRvU3lzdGVtID0gZnVuY3Rpb24gcmVkZWZhdWx0VG9TeXN0ZW0oKSB7XG4gICAgdmFyIGFsdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuY2xvbmUoT2JqZWN0LmFzc2lnbih7fSwgYWx0cywgeyBkZWZhdWx0VG9FTjogZmFsc2UgfSkpO1xuICB9O1xuXG4gIExvY2FsZS5wcm90b3R5cGUubW9udGhzID0gZnVuY3Rpb24gbW9udGhzJCQxKGxlbmd0aCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgZm9ybWF0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgICB2YXIgZGVmYXVsdE9LID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB0cnVlO1xuXG4gICAgcmV0dXJuIGxpc3RTdHVmZih0aGlzLCBsZW5ndGgsIGRlZmF1bHRPSywgbW9udGhzLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW50bCA9IGZvcm1hdCA/IHsgbW9udGg6IGxlbmd0aCwgZGF5OiAnbnVtZXJpYycgfSA6IHsgbW9udGg6IGxlbmd0aCB9LFxuICAgICAgICAgIGZvcm1hdFN0ciA9IGZvcm1hdCA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnO1xuICAgICAgaWYgKCFfdGhpcy5tb250aHNDYWNoZVtmb3JtYXRTdHJdW2xlbmd0aF0pIHtcbiAgICAgICAgX3RoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdID0gbWFwTW9udGhzKGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5leHRyYWN0KGR0LCBpbnRsLCAnbW9udGgnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMubW9udGhzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuXG4gIExvY2FsZS5wcm90b3R5cGUud2Vla2RheXMgPSBmdW5jdGlvbiB3ZWVrZGF5cyQkMShsZW5ndGgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBmb3JtYXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciBkZWZhdWx0T0sgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHRydWU7XG5cbiAgICByZXR1cm4gbGlzdFN0dWZmKHRoaXMsIGxlbmd0aCwgZGVmYXVsdE9LLCB3ZWVrZGF5cywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGludGwgPSBmb3JtYXQgPyB7IHdlZWtkYXk6IGxlbmd0aCwgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9IDogeyB3ZWVrZGF5OiBsZW5ndGggfSxcbiAgICAgICAgICBmb3JtYXRTdHIgPSBmb3JtYXQgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJztcbiAgICAgIGlmICghX3RoaXMyLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdKSB7XG4gICAgICAgIF90aGlzMi53ZWVrZGF5c0NhY2hlW2Zvcm1hdFN0cl1bbGVuZ3RoXSA9IG1hcFdlZWtkYXlzKGZ1bmN0aW9uIChkdCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIuZXh0cmFjdChkdCwgaW50bCwgJ3dlZWtkYXknKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX3RoaXMyLndlZWtkYXlzQ2FjaGVbZm9ybWF0U3RyXVtsZW5ndGhdO1xuICAgIH0pO1xuICB9O1xuXG4gIExvY2FsZS5wcm90b3R5cGUubWVyaWRpZW1zID0gZnVuY3Rpb24gbWVyaWRpZW1zJCQxKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGRlZmF1bHRPSyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdHJ1ZTtcblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgdW5kZWZpbmVkLCBkZWZhdWx0T0ssIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBtZXJpZGllbXM7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gSW4gdGhlb3J5IHRoZXJlIGNvdWxkIGJlIGFyaWJpdHJhcnkgZGF5IHBlcmlvZHMuIFdlJ3JlIGdvbm5hIGFzc3VtZSB0aGVyZSBhcmUgZXhhY3RseSB0d29cbiAgICAgIC8vIGZvciBBTSBhbmQgUE0uIFRoaXMgaXMgcHJvYmFibHkgd3JvbmcsIGJ1dCBpdCdzIG1ha2VzIHBhcnNpbmcgd2F5IGVhc2llci5cbiAgICAgIGlmICghX3RoaXMzLm1lcmlkaWVtQ2FjaGUpIHtcbiAgICAgICAgdmFyIGludGwgPSB7IGhvdXI6ICdudW1lcmljJywgaG91cjEyOiB0cnVlIH07XG4gICAgICAgIF90aGlzMy5tZXJpZGllbUNhY2hlID0gW0RhdGVUaW1lLnV0YygyMDE2LCAxMSwgMTMsIDkpLCBEYXRlVGltZS51dGMoMjAxNiwgMTEsIDEzLCAxOSldLm1hcChmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLmV4dHJhY3QoZHQsIGludGwsICdkYXlwZXJpb2QnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczMubWVyaWRpZW1DYWNoZTtcbiAgICB9KTtcbiAgfTtcblxuICBMb2NhbGUucHJvdG90eXBlLmVyYXMgPSBmdW5jdGlvbiBlcmFzJCQxKGxlbmd0aCkge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIGRlZmF1bHRPSyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICAgIHJldHVybiBsaXN0U3R1ZmYodGhpcywgbGVuZ3RoLCBkZWZhdWx0T0ssIGVyYXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnRsID0geyBlcmE6IGxlbmd0aCB9O1xuXG4gICAgICAvLyBUaGlzIGlzIHV0dGVyIGJ1bGxzaGl0LiBEaWZmZXJlbnQgY2FsZW5kYXJzIGFyZSBnb2luZyB0byBkZWZpbmUgZXJhcyB0b3RhbGx5IGRpZmZlcmVudGx5LiBXaGF0IEkgbmVlZCBpcyB0aGUgbWluaW11bSBzZXQgb2YgZGF0ZXNcbiAgICAgIC8vIHRvIGRlZmluaXRlbHkgZW51bWVyYXRlIHRoZW0uXG4gICAgICBpZiAoIV90aGlzNC5lcmFDYWNoZVtsZW5ndGhdKSB7XG4gICAgICAgIF90aGlzNC5lcmFDYWNoZVtsZW5ndGhdID0gW0RhdGVUaW1lLnV0YygtNDAsIDEsIDEpLCBEYXRlVGltZS51dGMoMjAxNywgMSwgMSldLm1hcChmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXM0LmV4dHJhY3QoZHQsIGludGwsICdlcmEnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpczQuZXJhQ2FjaGVbbGVuZ3RoXTtcbiAgICB9KTtcbiAgfTtcblxuICBMb2NhbGUucHJvdG90eXBlLmV4dHJhY3QgPSBmdW5jdGlvbiBleHRyYWN0KGR0LCBpbnRsT3B0cywgZmllbGQpIHtcbiAgICB2YXIgZGYgPSB0aGlzLmR0Rm9ybWF0dGVyKGR0LCBpbnRsT3B0cyksXG4gICAgICAgIHJlc3VsdHMgPSBkZi5mb3JtYXRUb1BhcnRzKCksXG4gICAgICAgIG1hdGNoaW5nID0gcmVzdWx0cy5maW5kKGZ1bmN0aW9uIChtKSB7XG4gICAgICByZXR1cm4gbS50eXBlLnRvTG93ZXJDYXNlKCkgPT09IGZpZWxkO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoaW5nID8gbWF0Y2hpbmcudmFsdWUgOiBudWxsO1xuICB9O1xuXG4gIExvY2FsZS5wcm90b3R5cGUubnVtYmVyRm9ybWF0dGVyID0gZnVuY3Rpb24gbnVtYmVyRm9ybWF0dGVyKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIC8vIHRoaXMgb3B0aW9uIGlzIG5ldmVyIHVzZWQgKHRoZSBvbmx5IGNhbGxlciBzaG9ydC1jaXJjdWl0cyBvbiBpdCwgYnV0IGl0IHNlZW1zIHNhZmVyIHRvIGxlYXZlKVxuICAgIC8vIChpbiBjb250cmFzdCwgdGhlIHx8IGlzIHVzZWQgaGVhdmlseSlcbiAgICBpZiAob3B0cy5mb3JjZVNpbXBsZSB8fCB0aGlzLmZhc3ROdW1iZXJzKSB7XG4gICAgICByZXR1cm4gbmV3IFNpbXBsZU51bWJlckZvcm1hdHRlcihvcHRzKTtcbiAgICB9IGVsc2UgaWYgKGhhc0ludGwoKSkge1xuICAgICAgdmFyIGludGxPcHRzID0geyB1c2VHcm91cGluZzogZmFsc2UgfTtcblxuICAgICAgaWYgKG9wdHMucGFkVG8gPiAwKSB7XG4gICAgICAgIGludGxPcHRzLm1pbmltdW1JbnRlZ2VyRGlnaXRzID0gb3B0cy5wYWRUbztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdHMucm91bmQpIHtcbiAgICAgICAgaW50bE9wdHMubWF4aW11bUZyYWN0aW9uRGlnaXRzID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmludGwsIGludGxPcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBTaW1wbGVOdW1iZXJGb3JtYXR0ZXIob3B0cyk7XG4gICAgfVxuICB9O1xuXG4gIExvY2FsZS5wcm90b3R5cGUuZHRGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkdEZvcm1hdHRlcihkdCkge1xuICAgIHZhciBpbnRsT3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gbmV3IFBvbHlEYXRlRm9ybWF0dGVyKGR0LCB0aGlzLmludGwsIGludGxPcHRzKTtcbiAgfTtcblxuICBMb2NhbGUucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmxvY2FsZSA9PT0gb3RoZXIubG9jYWxlICYmIHRoaXMubnVtYmVyaW5nU3lzdGVtID09PSBvdGhlci5udW1iZXJpbmdTeXN0ZW0gJiYgdGhpcy5vdXRwdXRDYWxlbmRhciA9PT0gb3RoZXIub3V0cHV0Q2FsZW5kYXI7XG4gIH07XG5cbiAgcmV0dXJuIExvY2FsZTtcbn0oKTtcblxuLypcbiAqIFRoaXMgZmlsZSBoYW5kbGVzIHBhcnNpbmcgZm9yIHdlbGwtc3BlY2lmaWVkIGZvcm1hdHMuIEhlcmUncyBob3cgaXQgd29ya3M6XG4gKiBUd28gdGhpbmdzIGdvIGludG8gcGFyc2luZzogYSByZWdleCB0byBtYXRjaCB3aXRoIGFuZCBhbiBleHRyYWN0b3IgdG8gdGFrZSBhcGFydCB0aGUgZ3JvdXBzIGluIHRoZSBtYXRjaC5cbiAqIEFuIGV4dHJhY3RvciBpcyBqdXN0IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHJlZ2V4IG1hdGNoIGFycmF5IGFuZCByZXR1cm5zIGEgeyB5ZWFyOiAuLi4sIG1vbnRoOiAuLi4gfSBvYmplY3RcbiAqIHBhcnNlKCkgZG9lcyB0aGUgd29yayBvZiBleGVjdXRpbmcgdGhlIHJlZ2V4IGFuZCBhcHBseWluZyB0aGUgZXh0cmFjdG9yLiBJdCB0YWtlcyBtdWx0aXBsZSByZWdleC9leHRyYWN0b3IgcGFpcnMgdG8gdHJ5IGluIHNlcXVlbmNlLlxuICogRXh0cmFjdG9ycyBjYW4gdGFrZSBhIFwiY3Vyc29yXCIgcmVwcmVzZW50aW5nIHRoZSBvZmZzZXQgaW4gdGhlIG1hdGNoIHRvIGxvb2sgYXQuIFRoaXMgbWFrZXMgaXQgZWFzeSB0byBjb21iaW5lIGV4dHJhY3RvcnMuXG4gKiBjb21iaW5lRXh0cmFjdG9ycygpIGRvZXMgdGhlIHdvcmsgb2YgY29tYmluaW5nIHRoZW0sIGtlZXBpbmcgdHJhY2sgb2YgdGhlIGN1cnNvciB0aHJvdWdoIG11bHRpcGxlIGV4dHJhY3Rpb25zLlxuICogU29tZSBleHRyYWN0aW9ucyBhcmUgc3VwZXIgZHVtYiBhbmQgc2ltcGxlUGFyc2UgYW5kIGZyb21TdHJpbmdzIGhlbHAgRFJZIHRoZW0uXG4gKi9cblxuZnVuY3Rpb24gY29tYmluZVJlZ2V4ZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZWdleGVzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVnZXhlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBmdWxsID0gcmVnZXhlcy5yZWR1Y2UoZnVuY3Rpb24gKGYsIHIpIHtcbiAgICByZXR1cm4gZiArIHIuc291cmNlO1xuICB9LCAnJyk7XG4gIHJldHVybiBSZWdFeHAoJ14nICsgZnVsbCArICckJyk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVFeHRyYWN0b3JzKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGV4dHJhY3RvcnMgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGV4dHJhY3RvcnNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBleHRyYWN0b3JzLnJlZHVjZShmdW5jdGlvbiAoX3JlZiwgZXgpIHtcbiAgICAgIHZhciBtZXJnZWRWYWxzID0gX3JlZlswXSxcbiAgICAgICAgICBtZXJnZWRab25lID0gX3JlZlsxXSxcbiAgICAgICAgICBjdXJzb3IgPSBfcmVmWzJdO1xuXG4gICAgICB2YXIgX2V4ID0gZXgobSwgY3Vyc29yKSxcbiAgICAgICAgICB2YWwgPSBfZXhbMF0sXG4gICAgICAgICAgem9uZSA9IF9leFsxXSxcbiAgICAgICAgICBuZXh0ID0gX2V4WzJdO1xuXG4gICAgICByZXR1cm4gW09iamVjdC5hc3NpZ24obWVyZ2VkVmFscywgdmFsKSwgbWVyZ2VkWm9uZSB8fCB6b25lLCBuZXh0XTtcbiAgICB9LCBbe30sIG51bGwsIDFdKS5zbGljZSgwLCAyKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2Uocykge1xuICBpZiAocyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtudWxsLCBudWxsXTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgcGF0dGVybnMgPSBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgcGF0dGVybnNbX2tleTMgLSAxXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBwYXR0ZXJucywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICB2YXIgX3JlZjM7XG5cbiAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWYzID0gX2l0ZXJhdG9yW19pKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmMyA9IF9pLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciBfcmVmMiA9IF9yZWYzO1xuICAgIHZhciByZWdleCA9IF9yZWYyWzBdO1xuICAgIHZhciBleHRyYWN0b3IgPSBfcmVmMlsxXTtcblxuICAgIHZhciBtID0gcmVnZXguZXhlYyhzKTtcbiAgICBpZiAobSkge1xuICAgICAgcmV0dXJuIGV4dHJhY3RvcihtKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIFtudWxsLCBudWxsXTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlUGFyc2UoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwga2V5cyA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAga2V5c1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXRjaCwgY3Vyc29yKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBpID0gdm9pZCAwO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJldFtrZXlzW2ldXSA9IHBhcnNlSW50KG1hdGNoW2N1cnNvciArIGldKTtcbiAgICB9XG4gICAgcmV0dXJuIFtyZXQsIG51bGwsIGN1cnNvciArIGldO1xuICB9O1xufVxuXG4vLyBJU08gYW5kIFNRTCBwYXJzaW5nXG52YXIgb2Zmc2V0UmVnZXggPSAvKD86KFopfChbKy1dXFxkXFxkKSg/Ojo/KFxcZFxcZCkpPykvLFxuICAgIGlzb1RpbWVCYXNlUmVnZXggPSAvKFxcZFxcZCkoPzo6PyhcXGRcXGQpKD86Oj8oXFxkXFxkKSg/OlsuLF0oXFxkezEsOX0pKT8pPyk/LyxcbiAgICBpc29UaW1lUmVnZXggPSBSZWdFeHAoJycgKyBpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZSArIG9mZnNldFJlZ2V4LnNvdXJjZSArICc/JyksXG4gICAgaXNvVGltZUV4dGVuc2lvblJlZ2V4ID0gUmVnRXhwKCcoPzpUJyArIGlzb1RpbWVSZWdleC5zb3VyY2UgKyAnKT8nKSxcbiAgICBpc29ZbWRSZWdleCA9IC8oWystXVxcZHs2fXxcXGR7NH0pKD86LT8oXFxkXFxkKSg/Oi0/KFxcZFxcZCkpPyk/LyxcbiAgICBpc29XZWVrUmVnZXggPSAvKFxcZHs0fSktP1coXFxkXFxkKS0/KFxcZCkvLFxuICAgIGlzb09yZGluYWxSZWdleCA9IC8oXFxkezR9KS0/KFxcZHszfSkvLFxuICAgIGV4dHJhY3RJU09XZWVrRGF0YSA9IHNpbXBsZVBhcnNlKCd3ZWVrWWVhcicsICd3ZWVrTnVtYmVyJywgJ3dlZWtEYXknKSxcbiAgICBleHRyYWN0SVNPT3JkaW5hbERhdGEgPSBzaW1wbGVQYXJzZSgneWVhcicsICdvcmRpbmFsJyksXG4gICAgc3FsWW1kUmVnZXggPSAvKFxcZHs0fSktKFxcZFxcZCktKFxcZFxcZCkvLFxuICAgIC8vIGR1bWJlZC1kb3duIHZlcnNpb24gb2YgdGhlIElTTyBvbmVcbnNxbFRpbWVSZWdleCA9IFJlZ0V4cChpc29UaW1lQmFzZVJlZ2V4LnNvdXJjZSArICcgPyg/OicgKyBvZmZzZXRSZWdleC5zb3VyY2UgKyAnfChbYS16QS1aX117MSwyNTZ9L1thLXpBLVpfXXsxLDI1Nn0pKT8nKSxcbiAgICBzcWxUaW1lRXh0ZW5zaW9uUmVnZXggPSBSZWdFeHAoJyg/OiAnICsgc3FsVGltZVJlZ2V4LnNvdXJjZSArICcpPycpO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPWW1kKG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIGl0ZW0gPSB7XG4gICAgeWVhcjogcGFyc2VJbnQobWF0Y2hbY3Vyc29yXSksXG4gICAgbW9udGg6IHBhcnNlSW50KG1hdGNoW2N1cnNvciArIDFdKSB8fCAxLFxuICAgIGRheTogcGFyc2VJbnQobWF0Y2hbY3Vyc29yICsgMl0pIHx8IDFcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDNdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPVGltZShtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciBpdGVtID0ge1xuICAgIGhvdXI6IHBhcnNlSW50KG1hdGNoW2N1cnNvcl0pIHx8IDAsXG4gICAgbWludXRlOiBwYXJzZUludChtYXRjaFtjdXJzb3IgKyAxXSkgfHwgMCxcbiAgICBzZWNvbmQ6IHBhcnNlSW50KG1hdGNoW2N1cnNvciArIDJdKSB8fCAwLFxuICAgIG1pbGxpc2Vjb25kOiBwYXJzZU1pbGxpcyhtYXRjaFtjdXJzb3IgKyAzXSlcbiAgfTtcblxuICByZXR1cm4gW2l0ZW0sIG51bGwsIGN1cnNvciArIDRdO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0SVNPT2Zmc2V0KG1hdGNoLCBjdXJzb3IpIHtcbiAgdmFyIGxvY2FsID0gIW1hdGNoW2N1cnNvcl0gJiYgIW1hdGNoW2N1cnNvciArIDFdLFxuICAgICAgZnVsbE9mZnNldCA9IHNpZ25lZE9mZnNldChtYXRjaFtjdXJzb3IgKyAxXSwgbWF0Y2hbY3Vyc29yICsgMl0pLFxuICAgICAgem9uZSA9IGxvY2FsID8gbnVsbCA6IEZpeGVkT2Zmc2V0Wm9uZS5pbnN0YW5jZShmdWxsT2Zmc2V0KTtcbiAgcmV0dXJuIFt7fSwgem9uZSwgY3Vyc29yICsgM107XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RJQU5BWm9uZShtYXRjaCwgY3Vyc29yKSB7XG4gIHZhciB6b25lID0gbWF0Y2hbY3Vyc29yXSA/IG5ldyBJQU5BWm9uZShtYXRjaFtjdXJzb3JdKSA6IG51bGw7XG4gIHJldHVybiBbe30sIHpvbmUsIGN1cnNvciArIDFdO1xufVxuXG4vLyBJU08gZHVyYXRpb24gcGFyc2luZ1xuXG52YXIgaXNvRHVyYXRpb24gPSAvXlAoPzooPzooXFxkezEsOX0pWSk/KD86KFxcZHsxLDl9KU0pPyg/OihcXGR7MSw5fSlEKT8oPzpUKD86KFxcZHsxLDl9KUgpPyg/OihcXGR7MSw5fSlNKT8oPzooXFxkezEsOX0pKD86Wy4sXShcXGR7MSw5fSkpP1MpPyk/fChcXGR7MSw5fSlXKSQvO1xuXG5mdW5jdGlvbiBleHRyYWN0SVNPRHVyYXRpb24obWF0Y2gpIHtcbiAgdmFyIHllYXJTdHIgPSBtYXRjaFsxXSxcbiAgICAgIG1vbnRoU3RyID0gbWF0Y2hbMl0sXG4gICAgICBkYXlTdHIgPSBtYXRjaFszXSxcbiAgICAgIGhvdXJTdHIgPSBtYXRjaFs0XSxcbiAgICAgIG1pbnV0ZVN0ciA9IG1hdGNoWzVdLFxuICAgICAgc2Vjb25kU3RyID0gbWF0Y2hbNl0sXG4gICAgICBtaWxsaXNlY29uZHNTdHIgPSBtYXRjaFs3XSxcbiAgICAgIHdlZWtTdHIgPSBtYXRjaFs4XTtcblxuXG4gIHJldHVybiBbe1xuICAgIHllYXJzOiBwYXJzZUludCh5ZWFyU3RyKSxcbiAgICBtb250aHM6IHBhcnNlSW50KG1vbnRoU3RyKSxcbiAgICB3ZWVrczogcGFyc2VJbnQod2Vla1N0ciksXG4gICAgZGF5czogcGFyc2VJbnQoZGF5U3RyKSxcbiAgICBob3VyczogcGFyc2VJbnQoaG91clN0ciksXG4gICAgbWludXRlczogcGFyc2VJbnQobWludXRlU3RyKSxcbiAgICBzZWNvbmRzOiBwYXJzZUludChzZWNvbmRTdHIpLFxuICAgIG1pbGxpc2Vjb25kczogcGFyc2VNaWxsaXMobWlsbGlzZWNvbmRzU3RyKVxuICB9XTtcbn1cblxuLy8gVGhlc2UgYXJlIGEgbGl0dGxlIGJyYWluZGVhZC4gRURUICpzaG91bGQqIHRlbGwgdXMgdGhhdCB3ZSdyZSBpbiwgc2F5LCBBbWVyaWNhL05ld19Zb3JrXG4vLyBhbmQgbm90IGp1c3QgdGhhdCB3ZSdyZSBpbiAtMjQwICpyaWdodCBub3cqLiBCdXQgc2luY2UgSSBkb24ndCB0aGluayB0aGVzZSBhcmUgdXNlZCB0aGF0IG9mdGVuXG4vLyBJJ20ganVzdCBnb2luZyB0byBpZ25vcmUgdGhhdFxudmFyIG9ic09mZnNldHMgPSB7XG4gIEdNVDogMCxcbiAgRURUOiAtNCAqIDYwLFxuICBFU1Q6IC01ICogNjAsXG4gIENEVDogLTUgKiA2MCxcbiAgQ1NUOiAtNiAqIDYwLFxuICBNRFQ6IC02ICogNjAsXG4gIE1TVDogLTcgKiA2MCxcbiAgUERUOiAtNyAqIDYwLFxuICBQU1Q6IC04ICogNjBcbn07XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKSB7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgeWVhcjogeWVhclN0ci5sZW5ndGggPT09IDIgPyB1bnRydW5jYXRlWWVhcihwYXJzZUludCh5ZWFyU3RyKSkgOiBwYXJzZUludCh5ZWFyU3RyKSxcbiAgICBtb250aDogbW9udGhTdHIubGVuZ3RoID09PSAyID8gcGFyc2VJbnQobW9udGhTdHIsIDEwKSA6IG1vbnRoc1Nob3J0LmluZGV4T2YobW9udGhTdHIpICsgMSxcbiAgICBkYXk6IHBhcnNlSW50KGRheVN0ciksXG4gICAgaG91cjogcGFyc2VJbnQoaG91clN0ciksXG4gICAgbWludXRlOiBwYXJzZUludChtaW51dGVTdHIpXG4gIH07XG5cbiAgaWYgKHNlY29uZFN0cikgcmVzdWx0LnNlY29uZCA9IHBhcnNlSW50KHNlY29uZFN0cik7XG4gIGlmICh3ZWVrZGF5U3RyKSB7XG4gICAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrZGF5U3RyLmxlbmd0aCA+IDMgPyB3ZWVrZGF5c0xvbmcuaW5kZXhPZih3ZWVrZGF5U3RyKSArIDEgOiB3ZWVrZGF5c1Nob3J0LmluZGV4T2Yod2Vla2RheVN0cikgKyAxO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUkZDIDI4MjIvNTMyMlxudmFyIHJmYzI4MjIgPSAvXig/OihNb258VHVlfFdlZHxUaHV8RnJpfFNhdHxTdW4pLFxccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoPzooWystXVxcZFxcZCkoXFxkXFxkKSkpJC87XG5cbmZ1bmN0aW9uIGV4dHJhY3RSRkMyODIyKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgICBkYXlTdHIgPSBtYXRjaFsyXSxcbiAgICAgIG1vbnRoU3RyID0gbWF0Y2hbM10sXG4gICAgICB5ZWFyU3RyID0gbWF0Y2hbNF0sXG4gICAgICBob3VyU3RyID0gbWF0Y2hbNV0sXG4gICAgICBtaW51dGVTdHIgPSBtYXRjaFs2XSxcbiAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzddLFxuICAgICAgb2JzT2Zmc2V0ID0gbWF0Y2hbOF0sXG4gICAgICBtaWxPZmZzZXQgPSBtYXRjaFs5XSxcbiAgICAgIG9mZkhvdXJTdHIgPSBtYXRjaFsxMF0sXG4gICAgICBvZmZNaW51dGVTdHIgPSBtYXRjaFsxMV0sXG4gICAgICByZXN1bHQgPSBmcm9tU3RyaW5ncyh3ZWVrZGF5U3RyLCB5ZWFyU3RyLCBtb250aFN0ciwgZGF5U3RyLCBob3VyU3RyLCBtaW51dGVTdHIsIHNlY29uZFN0cik7XG5cblxuICB2YXIgb2Zmc2V0ID0gdm9pZCAwO1xuICBpZiAob2JzT2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gb2JzT2Zmc2V0c1tvYnNPZmZzZXRdO1xuICB9IGVsc2UgaWYgKG1pbE9mZnNldCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgb2Zmc2V0ID0gc2lnbmVkT2Zmc2V0KG9mZkhvdXJTdHIsIG9mZk1pbnV0ZVN0cik7XG4gIH1cblxuICByZXR1cm4gW3Jlc3VsdCwgbmV3IEZpeGVkT2Zmc2V0Wm9uZShvZmZzZXQpXTtcbn1cblxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIocykge1xuICAvLyBSZW1vdmUgY29tbWVudHMgYW5kIGZvbGRpbmcgd2hpdGVzcGFjZSBhbmQgcmVwbGFjZSBtdWx0aXBsZS1zcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICByZXR1cm4gcy5yZXBsYWNlKC9cXChbXildKlxcKXxbXFxuXFx0XS9nLCAnICcpLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpLnRyaW0oKTtcbn1cblxuLy8gaHR0cCBkYXRlXG5cbnZhciByZmMxMTIzID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSwgKFxcZFxcZCkgKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKSAoXFxkezR9KSAoXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKSBHTVQkLyxcbiAgICByZmM4NTAgPSAvXihNb25kYXl8VHVlc2RheXxXZWRzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheXxTdW5kYXkpLCAoXFxkXFxkKS0oSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpLShcXGRcXGQpIChcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpIEdNVCQvLFxuICAgIGFzY2lpID0gL14oTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSAoSmFufEZlYnxNYXJ8QXByfE1heXxKdW58SnVsfEF1Z3xTZXB8T2N0fE5vdnxEZWMpICggXFxkfFxcZFxcZCkgKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkgKFxcZHs0fSkkLztcblxuZnVuY3Rpb24gZXh0cmFjdFJGQzExMjNPcjg1MChtYXRjaCkge1xuICB2YXIgd2Vla2RheVN0ciA9IG1hdGNoWzFdLFxuICAgICAgZGF5U3RyID0gbWF0Y2hbMl0sXG4gICAgICBtb250aFN0ciA9IG1hdGNoWzNdLFxuICAgICAgeWVhclN0ciA9IG1hdGNoWzRdLFxuICAgICAgaG91clN0ciA9IG1hdGNoWzVdLFxuICAgICAgbWludXRlU3RyID0gbWF0Y2hbNl0sXG4gICAgICBzZWNvbmRTdHIgPSBtYXRjaFs3XSxcbiAgICAgIHJlc3VsdCA9IGZyb21TdHJpbmdzKHdlZWtkYXlTdHIsIHllYXJTdHIsIG1vbnRoU3RyLCBkYXlTdHIsIGhvdXJTdHIsIG1pbnV0ZVN0ciwgc2Vjb25kU3RyKTtcblxuICByZXR1cm4gW3Jlc3VsdCwgRml4ZWRPZmZzZXRab25lLnV0Y0luc3RhbmNlXTtcbn1cblxuZnVuY3Rpb24gZXh0cmFjdEFTQ0lJKG1hdGNoKSB7XG4gIHZhciB3ZWVrZGF5U3RyID0gbWF0Y2hbMV0sXG4gICAgICBtb250aFN0ciA9IG1hdGNoWzJdLFxuICAgICAgZGF5U3RyID0gbWF0Y2hbM10sXG4gICAgICBob3VyU3RyID0gbWF0Y2hbNF0sXG4gICAgICBtaW51dGVTdHIgPSBtYXRjaFs1XSxcbiAgICAgIHNlY29uZFN0ciA9IG1hdGNoWzZdLFxuICAgICAgeWVhclN0ciA9IG1hdGNoWzddLFxuICAgICAgcmVzdWx0ID0gZnJvbVN0cmluZ3Mod2Vla2RheVN0ciwgeWVhclN0ciwgbW9udGhTdHIsIGRheVN0ciwgaG91clN0ciwgbWludXRlU3RyLCBzZWNvbmRTdHIpO1xuXG4gIHJldHVybiBbcmVzdWx0LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VdO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VJU09EYXRlKHMpIHtcbiAgcmV0dXJuIHBhcnNlKHMsIFtjb21iaW5lUmVnZXhlcyhpc29ZbWRSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KSwgY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1ltZCwgZXh0cmFjdElTT1RpbWUsIGV4dHJhY3RJU09PZmZzZXQpXSwgW2NvbWJpbmVSZWdleGVzKGlzb1dlZWtSZWdleCwgaXNvVGltZUV4dGVuc2lvblJlZ2V4KSwgY29tYmluZUV4dHJhY3RvcnMoZXh0cmFjdElTT1dlZWtEYXRhLCBleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCldLCBbY29tYmluZVJlZ2V4ZXMoaXNvT3JkaW5hbFJlZ2V4LCBpc29UaW1lRXh0ZW5zaW9uUmVnZXgpLCBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPT3JkaW5hbERhdGEsIGV4dHJhY3RJU09UaW1lKV0sIFtjb21iaW5lUmVnZXhlcyhpc29UaW1lUmVnZXgpLCBjb21iaW5lRXh0cmFjdG9ycyhleHRyYWN0SVNPVGltZSwgZXh0cmFjdElTT09mZnNldCldKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VSRkMyODIyRGF0ZShzKSB7XG4gIHJldHVybiBwYXJzZShwcmVwcm9jZXNzUkZDMjgyMihzKSwgW3JmYzI4MjIsIGV4dHJhY3RSRkMyODIyXSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSFRUUERhdGUocykge1xuICByZXR1cm4gcGFyc2UocywgW3JmYzExMjMsIGV4dHJhY3RSRkMxMTIzT3I4NTBdLCBbcmZjODUwLCBleHRyYWN0UkZDMTEyM09yODUwXSwgW2FzY2lpLCBleHRyYWN0QVNDSUldKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VJU09EdXJhdGlvbihzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbaXNvRHVyYXRpb24sIGV4dHJhY3RJU09EdXJhdGlvbl0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZVNRTChzKSB7XG4gIHJldHVybiBwYXJzZShzLCBbY29tYmluZVJlZ2V4ZXMoc3FsWW1kUmVnZXgsIHNxbFRpbWVFeHRlbnNpb25SZWdleCksIGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09ZbWQsIGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpXSwgW2NvbWJpbmVSZWdleGVzKHNxbFRpbWVSZWdleCksIGNvbWJpbmVFeHRyYWN0b3JzKGV4dHJhY3RJU09UaW1lLCBleHRyYWN0SVNPT2Zmc2V0LCBleHRyYWN0SUFOQVpvbmUpXSk7XG59XG5cbnZhciBJTlZBTElEID0gJ0ludmFsaWQgRHVyYXRpb24nLFxuICAgIFVOUEFSU0FCTEUgPSAndW5wYXJzYWJsZSc7XG5cbi8vIHVuaXQgY29udmVyc2lvbiBjb25zdGFudHNcbnZhciBsb3dPcmRlck1hdHJpeCA9IHtcbiAgd2Vla3M6IHtcbiAgICBkYXlzOiA3LFxuICAgIGhvdXJzOiA3ICogMjQsXG4gICAgbWludXRlczogNyAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogNyAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIGRheXM6IHtcbiAgICBob3VyczogMjQsXG4gICAgbWludXRlczogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIGhvdXJzOiB7IG1pbnV0ZXM6IDYwLCBzZWNvbmRzOiA2MCAqIDYwLCBtaWxsaXNlY29uZHM6IDYwICogNjAgKiAxMDAwIH0sXG4gIG1pbnV0ZXM6IHsgc2Vjb25kczogNjAsIG1pbGxpc2Vjb25kczogNjAgKiAxMDAwIH0sXG4gIHNlY29uZHM6IHsgbWlsbGlzZWNvbmRzOiAxMDAwIH1cbn0sXG4gICAgY2FzdWFsTWF0cml4ID0gT2JqZWN0LmFzc2lnbih7XG4gIHllYXJzOiB7XG4gICAgbW9udGhzOiAxMixcbiAgICB3ZWVrczogNTIsXG4gICAgZGF5czogMzY1LFxuICAgIGhvdXJzOiAzNjUgKiAyNCxcbiAgICBtaW51dGVzOiAzNjUgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfSxcbiAgcXVhcnRlcnM6IHtcbiAgICBtb250aHM6IDMsXG4gICAgd2Vla3M6IDEzLFxuICAgIGRheXM6IDkxLFxuICAgIGhvdXJzOiA5MSAqIDI0LFxuICAgIG1pbnV0ZXM6IDkxICogMjQgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IDkxICogMjQgKiA2MCAqIDYwICogMTAwMFxuICB9LFxuICBtb250aHM6IHtcbiAgICB3ZWVrczogNCxcbiAgICBkYXlzOiAzMCxcbiAgICBob3VyczogMzAgKiAyNCxcbiAgICBtaW51dGVzOiAzMCAqIDI0ICogNjAsXG4gICAgc2Vjb25kczogMzAgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfVxufSwgbG93T3JkZXJNYXRyaXgpLFxuICAgIGRheXNJblllYXJBY2N1cmF0ZSA9IDE0NjA5Ny4wIC8gNDAwLFxuICAgIGRheXNJbk1vbnRoQWNjdXJhdGUgPSAxNDYwOTcuMCAvIDQ4MDAsXG4gICAgYWNjdXJhdGVNYXRyaXggPSBPYmplY3QuYXNzaWduKHtcbiAgeWVhcnM6IHtcbiAgICBtb250aHM6IDEyLFxuICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA3LFxuICAgIGRheXM6IGRheXNJblllYXJBY2N1cmF0ZSxcbiAgICBob3VyczogZGF5c0luWWVhckFjY3VyYXRlICogMjQsXG4gICAgbWludXRlczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCxcbiAgICBzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAsXG4gICAgbWlsbGlzZWNvbmRzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwICogNjAgKiAxMDAwXG4gIH0sXG4gIHF1YXJ0ZXJzOiB7XG4gICAgbW9udGhzOiAzLFxuICAgIHdlZWtzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyAyOCxcbiAgICBkYXlzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgLyA0LFxuICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAvIDQsXG4gICAgbWludXRlczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAvIDQsXG4gICAgc2Vjb25kczogZGF5c0luWWVhckFjY3VyYXRlICogMjQgKiA2MCAqIDYwIC8gNCxcbiAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDAgLyA0XG4gIH0sXG4gIG1vbnRoczoge1xuICAgIHdlZWtzOiBkYXlzSW5Nb250aEFjY3VyYXRlIC8gNyxcbiAgICBkYXlzOiBkYXlzSW5Nb250aEFjY3VyYXRlLFxuICAgIGhvdXJzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCxcbiAgICBtaW51dGVzOiBkYXlzSW5ZZWFyQWNjdXJhdGUgKiAyNCAqIDYwLFxuICAgIHNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCxcbiAgICBtaWxsaXNlY29uZHM6IGRheXNJblllYXJBY2N1cmF0ZSAqIDI0ICogNjAgKiA2MCAqIDEwMDBcbiAgfVxufSwgbG93T3JkZXJNYXRyaXgpO1xuXG4vLyB1bml0cyBvcmRlcmVkIGJ5IHNpemVcbnZhciBvcmRlcmVkVW5pdHMgPSBbJ3llYXJzJywgJ3F1YXJ0ZXJzJywgJ21vbnRocycsICd3ZWVrcycsICdkYXlzJywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnXTtcblxudmFyIHJldmVyc2VVbml0cyA9IG9yZGVyZWRVbml0cy5zbGljZSgwKS5yZXZlcnNlKCk7XG5cbi8vIGNsb25lIHJlYWxseSBtZWFucyBcImNyZWF0ZSBhbm90aGVyIGluc3RhbmNlIGp1c3QgbGlrZSB0aGlzIG9uZSwgYnV0IHdpdGggdGhlc2UgY2hhbmdlc1wiXG5mdW5jdGlvbiBjbG9uZShkdXIsIGFsdHMpIHtcbiAgdmFyIGNsZWFyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAvLyBkZWVwIG1lcmdlIGZvciB2YWxzXG4gIHZhciBjb25mID0ge1xuICAgIHZhbHVlczogY2xlYXIgPyBhbHRzLnZhbHVlcyA6IE9iamVjdC5hc3NpZ24oe30sIGR1ci52YWx1ZXMsIGFsdHMudmFsdWVzIHx8IHt9KSxcbiAgICBsb2M6IGR1ci5sb2MuY2xvbmUoYWx0cy5sb2MpLFxuICAgIGNvbnZlcnNpb25BY2N1cmFjeTogYWx0cy5jb252ZXJzaW9uQWNjdXJhY3kgfHwgZHVyLmNvbnZlcnNpb25BY2N1cmFjeVxuICB9O1xuICByZXR1cm4gbmV3IER1cmF0aW9uKGNvbmYpO1xufVxuXG4vLyBzb21lIGZ1bmN0aW9ucyByZWFsbHkgY2FyZSBhYm91dCB0aGUgYWJzb2x1dGUgdmFsdWUgb2YgYSBkdXJhdGlvbiwgc28gY29tYmluZWQgd2l0aFxuLy8gbm9ybWFsaXplKCkgdGhpcyB0ZWxscyB1cyB3aGV0aGVyIHRoaXMgZHVyYXRpb24gaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmVcbmZ1bmN0aW9uIGlzSGlnaE9yZGVyTmVnYXRpdmUob2JqKSB7XG4gIC8vIG9ubHkgcnVsZSBpcyB0aGF0IHRoZSBoaWdoZXN0LW9yZGVyIHBhcnQgbXVzdCBiZSBub24tbmVnYXRpdmVcbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gb3JkZXJlZFVuaXRzLCBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoX2l0ZXJhdG9yKSwgX2kgPSAwLCBfaXRlcmF0b3IgPSBfaXNBcnJheSA/IF9pdGVyYXRvciA6IF9pdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdKCk7Oykge1xuICAgIHZhciBfcmVmO1xuXG4gICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICBfcmVmID0gX2l0ZXJhdG9yW19pKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGsgPSBfcmVmO1xuXG4gICAgaWYgKG9ialtrXSkgcmV0dXJuIG9ialtrXSA8IDA7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBjb252ZXJ0KG1hdHJpeCwgZnJvbU1hcCwgZnJvbVVuaXQsIHRvTWFwLCB0b1VuaXQpIHtcbiAgdmFyIGNvbnYgPSBtYXRyaXhbdG9Vbml0XVtmcm9tVW5pdF0sXG4gICAgICBhZGRlZCA9IE1hdGguZmxvb3IoZnJvbU1hcFtmcm9tVW5pdF0gLyBjb252KTtcbiAgdG9NYXBbdG9Vbml0XSArPSBhZGRlZDtcbiAgZnJvbU1hcFtmcm9tVW5pdF0gLT0gYWRkZWQgKiBjb252O1xufVxuXG4vLyBOQjogbXV0YXRlcyBwYXJhbWV0ZXJzXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZXMobWF0cml4LCB2YWxzKSB7XG4gIHJldmVyc2VVbml0cy5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgaWYgKCFpc1VuZGVmaW5lZCh2YWxzW2N1cnJlbnRdKSkge1xuICAgICAgaWYgKHByZXZpb3VzKSB7XG4gICAgICAgIGNvbnZlcnQobWF0cml4LCB2YWxzLCBwcmV2aW91cywgdmFscywgY3VycmVudCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHByZXZpb3VzO1xuICAgIH1cbiAgfSwgbnVsbCk7XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbikge1xuICBpZiAoaXNOdW1iZXIoZHVyYXRpb24pKSB7XG4gICAgcmV0dXJuIER1cmF0aW9uLmZyb21NaWxsaXMoZHVyYXRpb24pO1xuICB9IGVsc2UgaWYgKGR1cmF0aW9uIGluc3RhbmNlb2YgRHVyYXRpb24pIHtcbiAgICByZXR1cm4gZHVyYXRpb247XG4gIH0gZWxzZSBpZiAoZHVyYXRpb24gaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICByZXR1cm4gRHVyYXRpb24uZnJvbU9iamVjdChkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdVbmtub3duIGR1cmF0aW9uIGFyZ3VtZW50Jyk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIER1cmF0aW9uIG9iamVjdCByZXByZXNlbnRzIGEgcGVyaW9kIG9mIHRpbWUsIGxpa2UgXCIyIG1vbnRoc1wiIG9yIFwiMSBkYXksIDEgaG91clwiLiBDb25jZXB0dWFsbHksIGl0J3MganVzdCBhIG1hcCBvZiB1bml0cyB0byB0aGVpciBxdWFudGl0aWVzLCBhY2NvbXBhbmllZCBieSBzb21lIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBhbmQgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIHRyYW5zZm9ybWluZywgYW5kIGZvcm1hdHRpbmcgdGhlbS4gVGhleSBjYW4gYmUgdXNlZCBvbiB0aGVpciBvd24gb3IgaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBMdXhvbiB0eXBlczsgZm9yIGV4YW1wbGUsIHlvdSBjYW4gdXNlIHtAbGluayBEYXRlVGltZS5wbHVzfSB0byBhZGQgYSBEdXJhdGlvbiBvYmplY3QgdG8gYSBEYXRlVGltZSwgcHJvZHVjaW5nIGFub3RoZXIgRGF0ZVRpbWUuXG4gKlxuICogSGVyZSBpcyBhIGJyaWVmIG92ZXJ2aWV3IG9mIGNvbW1vbmx5IHVzZWQgbWV0aG9kcyBhbmQgZ2V0dGVycyBpbiBEdXJhdGlvbjpcbiAqXG4gKiAqICoqQ3JlYXRpb24qKiBUbyBjcmVhdGUgYSBEdXJhdGlvbiwgdXNlIHtAbGluayBEdXJhdGlvbi5mcm9tTWlsbGlzfSwge0BsaW5rIER1cmF0aW9uLmZyb21PYmplY3R9LCBvciB7QGxpbmsgRHVyYXRpb24uZnJvbUlTT30uXG4gKiAqICoqVW5pdCB2YWx1ZXMqKiBTZWUgdGhlIHtAbGluayB5ZWFyc30sIHtAbGluayBtb250aHN9LCB7QGxpbmsgd2Vla3N9LCB7QGxpbmsgZGF5c30sIHtAbGluayBob3Vyc30sIHtAbGluayBtaW51dGVzfSwge0BsaW5rIHNlY29uZHN9LCB7QGxpbmsgbWlsbGlzZWNvbmRzfSBhY2Nlc3NvcnMuXG4gKiAqICoqQ29uZmlndXJhdGlvbioqIFNlZSAge0BsaW5rIGxvY2FsZX0gYW5kIHtAbGluayBudW1iZXJpbmdTeXN0ZW19IGFjY2Vzc29ycy5cbiAqICogKipUcmFuc2Zvcm1hdGlvbioqIFRvIGNyZWF0ZSBuZXcgRHVyYXRpb25zIG91dCBvZiBvbGQgb25lcyB1c2Uge0BsaW5rIHBsdXN9LCB7QGxpbmsgbWludXN9LCB7QGxpbmsgbm9ybWFsaXplfSwge0BsaW5rIHNldH0sIHtAbGluayByZWNvbmZpZ3VyZX0sIHtAbGluayBzaGlmdFRvfSwgYW5kIHtAbGluayBuZWdhdGV9LlxuICogKiAqKk91dHB1dCoqIFRvIGNvbnZlcnQgdGhlIER1cmF0aW9uIGludG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCBzZWUge0BsaW5rIGFzfSwge0BsaW5rIHRvSVNPfSwge0BsaW5rIHRvRm9ybWF0fSwgYW5kIHtAbGluayB0b0pTT059XG4gKlxuICogVGhlcmUncyBhcmUgbW9yZSBtZXRob2RzIGRvY3VtZW50ZWQgYmVsb3cuIEluIGFkZGl0aW9uLCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBzdWJ0bGVyIHRvcGljcyBsaWtlIGludGVybmF0aW9uYWxpemF0aW9uIGFuZCB2YWxpZGl0eSwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5cbnZhciBEdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBEdXJhdGlvbihjb25maWcpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBEdXJhdGlvbik7XG5cbiAgICB2YXIgYWNjdXJhdGUgPSBjb25maWcuY29udmVyc2lvbkFjY3VyYWN5ID09PSAnbG9uZ3Rlcm0nIHx8IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMudmFsdWVzID0gY29uZmlnLnZhbHVlcztcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmxvYyA9IGNvbmZpZy5sb2MgfHwgTG9jYWxlLmNyZWF0ZSgpO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ID0gYWNjdXJhdGUgPyAnbG9uZ3Rlcm0nIDogJ2Nhc3VhbCc7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gY29uZmlnLmludmFsaWRSZWFzb24gfHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLm1hdHJpeCA9IGFjY3VyYXRlID8gYWNjdXJhdGVNYXRyaXggOiBjYXN1YWxNYXRyaXg7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIER1cmF0aW9uIGZyb20gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY291bnQgb2YgbWlsbGlzZWNvbmRzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9ucyBmb3IgcGFyc2luZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlPSdlbi1VUyddIC0gdGhlIGxvY2FsZSB0byB1c2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdHMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG5cblxuICBEdXJhdGlvbi5mcm9tTWlsbGlzID0gZnVuY3Rpb24gZnJvbU1pbGxpcyhjb3VudCwgb3B0cykge1xuICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KE9iamVjdC5hc3NpZ24oeyBtaWxsaXNlY29uZHM6IGNvdW50IH0sIG9wdHMpKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIER1cmF0aW9uIGZyb20gYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIGtleXMgbGlrZSAneWVhcnMnIGFuZCAnaG91cnMnLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnF1YXJ0ZXJzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubW9udGhzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoud2Vla3NcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXlzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91cnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5taW51dGVzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouc2Vjb25kc1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbGxpc2Vjb25kc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5sb2NhbGU9J2VuLVVTJ10gLSB0aGUgbG9jYWxlIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29iai5jb252ZXJzaW9uQWNjdXJhY3k9J2Nhc3VhbCddIC0gdGhlIGNvbnZlcnNpb24gc3lzdGVtIHRvIHVzZVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG5cblxuICBEdXJhdGlvbi5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gZnJvbU9iamVjdChvYmopIHtcbiAgICByZXR1cm4gbmV3IER1cmF0aW9uKHtcbiAgICAgIHZhbHVlczogbm9ybWFsaXplT2JqZWN0KG9iaiwgRHVyYXRpb24ubm9ybWFsaXplVW5pdCwgdHJ1ZSksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9iaiksXG4gICAgICBjb252ZXJzaW9uQWNjdXJhY3k6IG9iai5jb252ZXJzaW9uQWNjdXJhY3lcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgRHVyYXRpb24gZnJvbSBhbiBJU08gODYwMSBkdXJhdGlvbiBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGV4dCB0byBwYXJzZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgZm9yIHBhcnNpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIHRoZSBsb2NhbGUgdG8gdXNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMSNEdXJhdGlvbnNcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDNZNk00RFQxMkgzME01UycpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAzLCBtb250aHM6IDYsIGRheTogNCwgaG91cnM6IDEyLCBtaW51dGVzOiAzMCwgc2Vjb25kczogNSB9XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21JU08oJ1BUMjNIJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDIzIH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbUlTTygnUDVZM00nKS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogNSwgbW9udGhzOiAzIH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuXG5cbiAgRHVyYXRpb24uZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08odGV4dCwgb3B0cykge1xuICAgIHZhciBfcGFyc2VJU09EdXJhdGlvbiA9IHBhcnNlSVNPRHVyYXRpb24odGV4dCksXG4gICAgICAgIHBhcnNlZCA9IF9wYXJzZUlTT0R1cmF0aW9uWzBdO1xuXG4gICAgaWYgKHBhcnNlZCkge1xuICAgICAgdmFyIG9iaiA9IE9iamVjdC5hc3NpZ24ocGFyc2VkLCBvcHRzKTtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tT2JqZWN0KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKFVOUEFSU0FCTEUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgRHVyYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSByZWFzb24gdGhpcyBpcyBpbnZhbGlkXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cblxuXG4gIER1cmF0aW9uLmludmFsaWQgPSBmdW5jdGlvbiBpbnZhbGlkKHJlYXNvbikge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ25lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRHVyYXRpb24gaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkRHVyYXRpb25FcnJvcihyZWFzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IER1cmF0aW9uKHsgaW52YWxpZFJlYXNvbjogcmVhc29uIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG5cblxuICBEdXJhdGlvbi5ub3JtYWxpemVVbml0ID0gZnVuY3Rpb24gbm9ybWFsaXplVW5pdCh1bml0KSB7XG4gICAgdmFyIGlnbm9yZVVua25vd24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgICB5ZWFyOiAneWVhcnMnLFxuICAgICAgeWVhcnM6ICd5ZWFycycsXG4gICAgICBxdWFydGVyOiAncXVhcnRlcnMnLFxuICAgICAgcXVhcnRlcnM6ICdxdWFydGVycycsXG4gICAgICBtb250aDogJ21vbnRocycsXG4gICAgICBtb250aHM6ICdtb250aHMnLFxuICAgICAgd2VlazogJ3dlZWtzJyxcbiAgICAgIHdlZWtzOiAnd2Vla3MnLFxuICAgICAgZGF5OiAnZGF5cycsXG4gICAgICBkYXlzOiAnZGF5cycsXG4gICAgICBob3VyOiAnaG91cnMnLFxuICAgICAgaG91cnM6ICdob3VycycsXG4gICAgICBtaW51dGU6ICdtaW51dGVzJyxcbiAgICAgIG1pbnV0ZXM6ICdtaW51dGVzJyxcbiAgICAgIHNlY29uZDogJ3NlY29uZHMnLFxuICAgICAgc2Vjb25kczogJ3NlY29uZHMnLFxuICAgICAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnLFxuICAgICAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmRzJ1xuICAgIH1bdW5pdCA/IHVuaXQudG9Mb3dlckNhc2UoKSA6IHVuaXRdO1xuXG4gICAgaWYgKCFpZ25vcmVVbmtub3duICYmICFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgIHRoZSBsb2NhbGUgb2YgYSBEdXJhdGlvbiwgc3VjaCAnZW4tR0InXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEdXJhdGlvbiBmb3JtYXR0ZWQgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgZm9ybWF0IHN0cmluZy5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGZtdCAtIHRoZSBmb3JtYXQgc3RyaW5nXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wdHMucm91bmQgLSByb3VuZCBudW1lcmljYWwgdmFsdWVzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIER1cmF0aW9uLnByb3RvdHlwZS50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGZtdCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLCBvcHRzKS5mb3JtYXREdXJhdGlvbkZyb21TdHJpbmcodGhpcywgZm10KSA6IElOVkFMSUQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhc2NyaXB0IG9iamVjdCB3aXRoIHRoaXMgRHVyYXRpb24ncyB2YWx1ZXMuXG4gICAqIEBwYXJhbSBvcHRzIC0gb3B0aW9ucyBmb3IgZ2VuZXJhdGluZyB0aGUgb2JqZWN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZUNvbmZpZz1mYWxzZV0gLSBpbmNsdWRlIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlcyBpbiB0aGUgb3V0cHV0XG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9KS50b09iamVjdCgpIC8vPT4geyB5ZWFyczogMSwgZGF5czogNiwgc2Vjb25kczogMiB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG5cblxuICBEdXJhdGlvbi5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdCgpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHt9O1xuXG4gICAgdmFyIGJhc2UgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZhbHVlcyk7XG5cbiAgICBpZiAob3B0cy5pbmNsdWRlQ29uZmlnKSB7XG4gICAgICBiYXNlLmNvbnZlcnNpb25BY2N1cmFjeSA9IHRoaXMuY29udmVyc2lvbkFjY3VyYWN5O1xuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIER1cmF0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT184NjAxI0R1cmF0aW9uc1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgeWVhcnM6IDMsIHNlY29uZHM6IDQ1IH0pLnRvSVNPKCkgLy89PiAnUDNZVDQ1UydcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IG1vbnRoczogNCwgc2Vjb25kczogNDUgfSkudG9JU08oKSAvLz0+ICdQNE1UNDVTJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbW9udGhzOiA1IH0pLnRvSVNPKCkgLy89PiAnUDVNJ1xuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHsgbWludXRlczogNSB9KS50b0lTTygpIC8vPT4gJ1BUNU0nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBEdXJhdGlvbi5wcm90b3R5cGUudG9JU08gPSBmdW5jdGlvbiB0b0lTTygpIHtcbiAgICAvLyB3ZSBjb3VsZCB1c2UgdGhlIGZvcm1hdHRlciwgYnV0IHRoaXMgaXMgYW4gZWFzaWVyIHdheSB0byBnZXQgdGhlIG1pbmltdW0gc3RyaW5nXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBudWxsO1xuXG4gICAgdmFyIHMgPSAnUCcsXG4gICAgICAgIG5vcm0gPSB0aGlzLm5vcm1hbGl6ZSgpO1xuXG4gICAgLy8gSVNPIGR1cmF0aW9ucyBhcmUgYWx3YXlzIHBvc2l0aXZlLCBzbyB0YWtlIHRoZSBhYnNvbHV0ZSB2YWx1ZVxuICAgIG5vcm0gPSBpc0hpZ2hPcmRlck5lZ2F0aXZlKG5vcm0udmFsdWVzKSA/IG5vcm0ubmVnYXRlKCkgOiBub3JtO1xuXG4gICAgaWYgKG5vcm0ueWVhcnMgPiAwKSBzICs9IG5vcm0ueWVhcnMgKyAnWSc7XG4gICAgaWYgKG5vcm0ubW9udGhzID4gMCB8fCBub3JtLnF1YXJ0ZXJzID4gMCkgcyArPSBub3JtLm1vbnRocyArIG5vcm0ucXVhcnRlcnMgKiAzICsgJ00nO1xuICAgIGlmIChub3JtLmRheXMgPiAwIHx8IG5vcm0ud2Vla3MgPiAwKSBzICs9IG5vcm0uZGF5cyArIG5vcm0ud2Vla3MgKiA3ICsgJ0QnO1xuICAgIGlmIChub3JtLmhvdXJzID4gMCB8fCBub3JtLm1pbnV0ZXMgPiAwIHx8IG5vcm0uc2Vjb25kcyA+IDAgfHwgbm9ybS5taWxsaXNlY29uZHMgPiAwKSBzICs9ICdUJztcbiAgICBpZiAobm9ybS5ob3VycyA+IDApIHMgKz0gbm9ybS5ob3VycyArICdIJztcbiAgICBpZiAobm9ybS5taW51dGVzID4gMCkgcyArPSBub3JtLm1pbnV0ZXMgKyAnTSc7XG4gICAgaWYgKG5vcm0uc2Vjb25kcyA+IDApIHMgKz0gbm9ybS5zZWNvbmRzICsgJ1MnO1xuICAgIHJldHVybiBzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBKU09OLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRHVyYXRpb24ucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIElTTyA4NjAxIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBkZWJ1Z2dpbmcuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBEdXJhdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy50b0lTTygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRHVyYXRpb24gYXBwcm9wcmlhdGUgZm9yIHRoZSBSRVBMLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRHVyYXRpb24ucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0KCkge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHZhciB2YWxzSW5zcGVjdCA9IEpTT04uc3RyaW5naWZ5KHRoaXMudG9PYmplY3QoKSk7XG4gICAgICByZXR1cm4gJ0R1cmF0aW9uIHtcXG4gIHZhbHVlczogJyArIHZhbHNJbnNwZWN0ICsgJyxcXG4gIGxvY2FsZTogJyArIHRoaXMubG9jYWxlICsgJyxcXG4gIGNvbnZlcnNpb25BY2N1cmFjeTogJyArIHRoaXMuY29udmVyc2lvbkFjY3VyYWN5ICsgJyB9JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdEdXJhdGlvbiB7IEludmFsaWQsIHJlYXNvbjogJyArIHRoaXMuaW52YWxpZFJlYXNvbiArICcgfSc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNYWtlIHRoaXMgRHVyYXRpb24gbG9uZ2VyIGJ5IHRoZSBzcGVjaWZpZWQgYW1vdW50LiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBhbW91bnQgdG8gYWRkLiBFaXRoZXIgYSBMdXhvbiBEdXJhdGlvbiwgYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLCB0aGUgb2JqZWN0IGFyZ3VtZW50IHRvIER1cmF0aW9uLmZyb21PYmplY3QoKVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG5cblxuICBEdXJhdGlvbi5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbiksXG4gICAgICAgIHJlc3VsdCA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IG9yZGVyZWRVbml0cywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBrID0gX3JlZjI7XG5cbiAgICAgIHZhciB2YWwgPSBkdXIuZ2V0KGspICsgdGhpcy5nZXQoayk7XG4gICAgICBpZiAodmFsICE9PSAwKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmUodGhpcywgeyB2YWx1ZXM6IHJlc3VsdCB9LCB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogTWFrZSB0aGlzIER1cmF0aW9uIHNob3J0ZXIgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQuIFJldHVybiBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuXG5cbiAgRHVyYXRpb24ucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMucGx1cyhkdXIubmVnYXRlKCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIG9mIHVuaXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gYSB1bml0IHN1Y2ggYXMgJ21pbnV0ZScgb3IgJ2RheSdcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS55ZWFycyAvLz0+IDJcbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7eWVhcnM6IDIsIGRheXM6IDN9KS5tb250aHMgLy89PiAwXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAyLCBkYXlzOiAzfSkuZGF5cyAvLz0+IDNcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cblxuXG4gIER1cmF0aW9uLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQkJDEodW5pdCkge1xuICAgIHJldHVybiB0aGlzW0R1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCldO1xuICB9O1xuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSB2YWx1ZXMgb2Ygc3BlY2lmaWVkIHVuaXRzLiBSZXR1cm4gYSBuZXdseS1jb25zdHJ1Y3RlZCBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR1ci5zZXQoeyB5ZWFyczogMjAxNyB9KVxuICAgKiBAZXhhbXBsZSBkdXIuc2V0KHsgaG91cnM6IDgsIG1pbnV0ZXM6IDMwIH0pXG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cblxuXG4gIER1cmF0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQkJDEodmFsdWVzKSB7XG4gICAgdmFyIG1peGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLnZhbHVlcywgbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgRHVyYXRpb24ubm9ybWFsaXplVW5pdCkpO1xuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogbWl4ZWQgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIGxvY2FsZSBhbmQvb3IgbnVtYmVyaW5nU3lzdGVtLiAgUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIER1cmF0aW9uLlxuICAgKiBAZXhhbXBsZSBkdXIucmVjb25maWd1cmUoeyBsb2NhbGU6ICdlbi1HQicgfSlcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuXG5cbiAgRHVyYXRpb24ucHJvdG90eXBlLnJlY29uZmlndXJlID0gZnVuY3Rpb24gcmVjb25maWd1cmUoKSB7XG4gICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgbG9jYWxlID0gX3JlZjMubG9jYWxlLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGNvbnZlcnNpb25BY2N1cmFjeSA9IF9yZWYzLmNvbnZlcnNpb25BY2N1cmFjeTtcblxuICAgIHZhciBsb2MgPSB0aGlzLmxvYy5jbG9uZSh7IGxvY2FsZTogbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSB9KSxcbiAgICAgICAgb3B0cyA9IHsgbG9jOiBsb2MgfTtcblxuICAgIGlmIChjb252ZXJzaW9uQWNjdXJhY3kpIHtcbiAgICAgIG9wdHMuY29udmVyc2lvbkFjY3VyYWN5ID0gY29udmVyc2lvbkFjY3VyYWN5O1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZSh0aGlzLCBvcHRzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGR1cmF0aW9uIGluIHRoZSBzcGVjaWZpZWQgdW5pdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBhIHVuaXQgc3VjaCBhcyAnbWludXRlcycgb3IgJ2RheXMnXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe3llYXJzOiAxfSkuYXMoJ2RheXMnKSAvLz0+IDM2NVxuICAgKiBAZXhhbXBsZSBEdXJhdGlvbi5mcm9tT2JqZWN0KHt5ZWFyczogMX0pLmFzKCdtb250aHMnKSAvLz0+IDEyXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3Qoe2hvdXJzOiA2MH0pLmFzKCdkYXlzJykgLy89PiAyLjVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cblxuXG4gIER1cmF0aW9uLnByb3RvdHlwZS5hcyA9IGZ1bmN0aW9uIGFzKHVuaXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5zaGlmdFRvKHVuaXQpLmdldCh1bml0KSA6IE5hTjtcbiAgfTtcblxuICAvKipcbiAgICogUmVkdWNlIHRoaXMgRHVyYXRpb24gdG8gaXRzIGNhbm9uaWNhbCByZXByZXNlbnRhdGlvbiBpbiBpdHMgY3VycmVudCB1bml0cy5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IHllYXJzOiAyLCBkYXlzOiA1MDAwIH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IHllYXJzOiAxNSwgZGF5czogMjU1IH1cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxMiwgbWludXRlczogLTQ1IH0pLm5vcm1hbGl6ZSgpLnRvT2JqZWN0KCkgLy89PiB7IGhvdXJzOiAxMSwgbWludXRlczogMTUgfVxuICAgKiBAcmV0dXJuIHtEdXJhdGlvbn1cbiAgICovXG5cblxuICBEdXJhdGlvbi5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBuZWcgPSBpc0hpZ2hPcmRlck5lZ2F0aXZlKHRoaXMudmFsdWVzKSxcbiAgICAgICAgdmFscyA9IChuZWcgPyB0aGlzLm5lZ2F0ZSgpIDogdGhpcykudG9PYmplY3QoKTtcbiAgICBub3JtYWxpemVWYWx1ZXModGhpcy5tYXRyaXgsIHZhbHMpO1xuICAgIHZhciBkdXIgPSBEdXJhdGlvbi5mcm9tT2JqZWN0KHZhbHMpO1xuICAgIHJldHVybiBuZWcgPyBkdXIubmVnYXRlKCkgOiBkdXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhpcyBEdXJhdGlvbiBpbnRvIGl0cyByZXByZXNlbnRhdGlvbiBpbiBhIGRpZmZlcmVudCBzZXQgb2YgdW5pdHMuXG4gICAqIEBleGFtcGxlIER1cmF0aW9uLmZyb21PYmplY3QoeyBob3VyczogMSwgc2Vjb25kczogMzAgfSkuc2hpZnRUbygnbWludXRlcycsICdtaWxsaXNlY29uZHMnKS50b09iamVjdCgpIC8vPT4geyBtaW51dGVzOiA2MCwgbWlsbGlzZWNvbmRzOiAzMDAwMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cblxuXG4gIER1cmF0aW9uLnByb3RvdHlwZS5zaGlmdFRvID0gZnVuY3Rpb24gc2hpZnRUbygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdW5pdHMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHVuaXRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIGlmICh1bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHVuaXRzID0gdW5pdHMubWFwKGZ1bmN0aW9uICh1KSB7XG4gICAgICByZXR1cm4gRHVyYXRpb24ubm9ybWFsaXplVW5pdCh1KTtcbiAgICB9KTtcblxuICAgIHZhciBidWlsdCA9IHt9LFxuICAgICAgICBhY2N1bXVsYXRlZCA9IHt9LFxuICAgICAgICB2YWxzID0gdGhpcy50b09iamVjdCgpO1xuICAgIHZhciBsYXN0VW5pdCA9IHZvaWQgMDtcblxuICAgIG5vcm1hbGl6ZVZhbHVlcyh0aGlzLm1hdHJpeCwgdmFscyk7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gb3JkZXJlZFVuaXRzLCBfaXNBcnJheTMgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvcjMpLCBfaTMgPSAwLCBfaXRlcmF0b3IzID0gX2lzQXJyYXkzID8gX2l0ZXJhdG9yMyA6IF9pdGVyYXRvcjNbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmNDtcblxuICAgICAgaWYgKF9pc0FycmF5Mykge1xuICAgICAgICBpZiAoX2kzID49IF9pdGVyYXRvcjMubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZjQgPSBfaXRlcmF0b3IzW19pMysrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pMyA9IF9pdGVyYXRvcjMubmV4dCgpO1xuICAgICAgICBpZiAoX2kzLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmNCA9IF9pMy52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGsgPSBfcmVmNDtcblxuICAgICAgaWYgKHVuaXRzLmluZGV4T2YoaykgPj0gMCkge1xuICAgICAgICBsYXN0VW5pdCA9IGs7XG5cbiAgICAgICAgdmFyIG93biA9IDA7XG5cbiAgICAgICAgLy8gYW55dGhpbmcgd2UgaGF2ZW4ndCBib2lsZWQgZG93biB5ZXQgc2hvdWxkIGdldCBib2lsZWQgdG8gdGhpcyB1bml0XG4gICAgICAgIGZvciAodmFyIGFrIGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgICAgaWYgKGFjY3VtdWxhdGVkLmhhc093blByb3BlcnR5KGFrKSkge1xuICAgICAgICAgICAgb3duICs9IHRoaXMubWF0cml4W2FrXVtrXSAqIGFjY3VtdWxhdGVkW2FrXTtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkW2FrXSA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyB0aGF0J3MgYWxyZWFkeSBpbiB0aGlzIHVuaXRcbiAgICAgICAgaWYgKGlzTnVtYmVyKHZhbHNba10pKSB7XG4gICAgICAgICAgb3duICs9IHZhbHNba107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaSA9IE1hdGgudHJ1bmMob3duKTtcbiAgICAgICAgYnVpbHRba10gPSBpO1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IG93biAtIGk7XG5cbiAgICAgICAgLy8gcGx1cyBhbnl0aGluZyBmdXJ0aGVyIGRvd24gdGhlIGNoYWluIHRoYXQgc2hvdWxkIGJlIHJvbGxlZCB1cCBpbiB0byB0aGlzXG4gICAgICAgIGZvciAodmFyIGRvd24gaW4gdmFscykge1xuICAgICAgICAgIGlmIChvcmRlcmVkVW5pdHMuaW5kZXhPZihkb3duKSA+IG9yZGVyZWRVbml0cy5pbmRleE9mKGspKSB7XG4gICAgICAgICAgICBjb252ZXJ0KHRoaXMubWF0cml4LCB2YWxzLCBkb3duLCBidWlsdCwgayk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG90aGVyd2lzZSwga2VlcCBpdCBpbiB0aGUgd2luZ3MgdG8gYm9pbCBpdCBsYXRlclxuICAgICAgfSBlbHNlIGlmIChpc051bWJlcih2YWxzW2tdKSkge1xuICAgICAgICBhY2N1bXVsYXRlZFtrXSA9IHZhbHNba107XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYW55dGhpbmcgbGVmdG92ZXIgYmVjb21lcyB0aGUgZGVjaW1hbCBmb3IgdGhlIGxhc3QgdW5pdFxuICAgIGlmIChsYXN0VW5pdCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGFjY3VtdWxhdGVkKSB7XG4gICAgICAgIGlmIChhY2N1bXVsYXRlZC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKGFjY3VtdWxhdGVkW2tleV0gPiAwKSB7XG4gICAgICAgICAgICBidWlsdFtsYXN0VW5pdF0gKz0ga2V5ID09PSBsYXN0VW5pdCA/IGFjY3VtdWxhdGVkW2tleV0gOiBhY2N1bXVsYXRlZFtrZXldIC8gdGhpcy5tYXRyaXhbbGFzdFVuaXRdW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogYnVpbHQgfSwgdHJ1ZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbmVnYXRpdmUgb2YgdGhpcyBEdXJhdGlvbi5cbiAgICogQGV4YW1wbGUgRHVyYXRpb24uZnJvbU9iamVjdCh7IGhvdXJzOiAxLCBzZWNvbmRzOiAzMCB9KS5uZWdhdGUoKS50b09iamVjdCgpIC8vPT4geyBob3VyczogLTEsIHNlY29uZHM6IC0zMCB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cblxuXG4gIER1cmF0aW9uLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiBuZWdhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBuZWdhdGVkID0ge307XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yNCA9IE9iamVjdC5rZXlzKHRoaXMudmFsdWVzKSwgX2lzQXJyYXk0ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I0KSwgX2k0ID0gMCwgX2l0ZXJhdG9yNCA9IF9pc0FycmF5NCA/IF9pdGVyYXRvcjQgOiBfaXRlcmF0b3I0W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjU7XG5cbiAgICAgIGlmIChfaXNBcnJheTQpIHtcbiAgICAgICAgaWYgKF9pNCA+PSBfaXRlcmF0b3I0Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWY1ID0gX2l0ZXJhdG9yNFtfaTQrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTQgPSBfaXRlcmF0b3I0Lm5leHQoKTtcbiAgICAgICAgaWYgKF9pNC5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjUgPSBfaTQudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBrID0gX3JlZjU7XG5cbiAgICAgIG5lZ2F0ZWRba10gPSAtdGhpcy52YWx1ZXNba107XG4gICAgfVxuICAgIHJldHVybiBjbG9uZSh0aGlzLCB7IHZhbHVlczogbmVnYXRlZCB9LCB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSB5ZWFycy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG5cblxuICAvKipcbiAgICogRXF1YWxpdHkgY2hlY2tcbiAgICogVHdvIER1cmF0aW9ucyBhcmUgZXF1YWwgaWZmIHRoZXkgaGF2ZSB0aGUgc2FtZSB1bml0cyBhbmQgdGhlIHNhbWUgdmFsdWVzIGZvciBlYWNoIHVuaXQuXG4gICAqIEBwYXJhbSB7RHVyYXRpb259IG90aGVyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBEdXJhdGlvbi5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yNSA9IG9yZGVyZWRVbml0cywgX2lzQXJyYXk1ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3I1KSwgX2k1ID0gMCwgX2l0ZXJhdG9yNSA9IF9pc0FycmF5NSA/IF9pdGVyYXRvcjUgOiBfaXRlcmF0b3I1W1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjY7XG5cbiAgICAgIGlmIChfaXNBcnJheTUpIHtcbiAgICAgICAgaWYgKF9pNSA+PSBfaXRlcmF0b3I1Lmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWY2ID0gX2l0ZXJhdG9yNVtfaTUrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTUgPSBfaXRlcmF0b3I1Lm5leHQoKTtcbiAgICAgICAgaWYgKF9pNS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjYgPSBfaTUudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB1ID0gX3JlZjY7XG5cbiAgICAgIGlmICh0aGlzLnZhbHVlc1t1XSAhPT0gb3RoZXIudmFsdWVzW3VdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY3JlYXRlQ2xhc3MoRHVyYXRpb24sIFt7XG4gICAga2V5OiAnbG9jYWxlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIER1cmF0aW9uLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIER1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdudW1iZXJpbmdTeXN0ZW0nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAneWVhcnMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLnllYXJzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBxdWFydGVycy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdxdWFydGVycycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMucXVhcnRlcnMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRocy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdtb250aHMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1vbnRocyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2Vla3NcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd3ZWVrcycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMud2Vla3MgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheXMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZGF5cycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy52YWx1ZXMuZGF5cyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaG91cnMuXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaG91cnMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLmhvdXJzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGVzLlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21pbnV0ZXMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbnV0ZXMgfHwgMCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZWNvbmRzJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnZhbHVlcy5zZWNvbmRzIHx8IDAgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZHMuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdtaWxsaXNlY29uZHMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudmFsdWVzLm1pbGxpc2Vjb25kcyB8fCAwIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgd2hldGhlciB0aGUgRHVyYXRpb24gaXMgaW52YWxpZC4gSW52YWxpZCBkdXJhdGlvbnMgYXJlIHJldHVybmVkIGJ5IGRpZmYgb3BlcmF0aW9uc1xuICAgICAqIG9uIGludmFsaWQgRGF0ZVRpbWVzIG9yIEludGVydmFscy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc1ZhbGlkJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEdXJhdGlvbiBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRHVyYXRpb24gaXMgdmFsaWRcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2ludmFsaWRSZWFzb24nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIER1cmF0aW9uO1xufSgpO1xuXG52YXIgSU5WQUxJRCQxID0gJ0ludmFsaWQgSW50ZXJ2YWwnO1xuXG4vLyBjaGVja3MgaWYgdGhlIHN0YXJ0IGlzIGVxdWFsIHRvIG9yIGJlZm9yZSB0aGUgZW5kXG5mdW5jdGlvbiB2YWxpZGF0ZVN0YXJ0RW5kKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuICEhc3RhcnQgJiYgISFlbmQgJiYgc3RhcnQuaXNWYWxpZCAmJiBlbmQuaXNWYWxpZCAmJiBzdGFydCA8PSBlbmQ7XG59XG5cbi8qKlxuICogQW4gSW50ZXJ2YWwgb2JqZWN0IHJlcHJlc2VudHMgYSBoYWxmLW9wZW4gaW50ZXJ2YWwgb2YgdGltZSwgd2hlcmUgZWFjaCBlbmRwb2ludCBpcyBhIHtAbGluayBEYXRlVGltZX0uIENvbmNlcHR1YWxseSwgaXQncyBhIGNvbnRhaW5lciBmb3IgdGhvc2UgdHdvIGVuZHBvaW50cywgYWNjb21wYW5pZWQgYnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcsIHBhcnNpbmcsIGludGVycm9nYXRpbmcsIGNvbXBhcmluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEhlcmUgaXMgYSBicmllZiBvdmVydmlldyBvZiB0aGUgbW9zdCBjb21tb25seSB1c2VkIG1ldGhvZHMgYW5kIGdldHRlcnMgaW4gSW50ZXJ2YWw6XG4gKlxuICogKiAqKkNyZWF0aW9uKiogVG8gY3JlYXRlIGFuIEludGVydmFsLCB1c2Uge0BsaW5rIGZyb21EYXRlVGltZXN9LCB7QGxpbmsgYWZ0ZXJ9LCB7QGxpbmsgYmVmb3JlfSwgb3Ige0BsaW5rIGZyb21JU099LlxuICogKiAqKkFjY2Vzc29ycyoqIFVzZSB7QGxpbmsgc3RhcnR9IGFuZCB7QGxpbmsgZW5kfSB0byBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG4gKiAqICoqSW50ZXJyb2dhdGlvbioqIFRvIGFuYWx5emUgdGhlIEludGVydmFsLCB1c2Uge0BsaW5rIGNvdW50fSwge0BsaW5rIGxlbmd0aH0sIHtAbGluayBoYXNTYW1lfSwge0BsaW5rIGNvbnRhaW5zfSwge0BsaW5rIGlzQWZ0ZXJ9LCBvciB7QGxpbmsgaXNCZWZvcmV9LlxuICogKiAqKlRyYW5zZm9ybWF0aW9uKiogVG8gY3JlYXRlIG90aGVyIEludGVydmFscyBvdXQgb2YgdGhpcyBvbmUsIHVzZSB7QGxpbmsgc2V0fSwge0BsaW5rIHNwbGl0QXR9LCB7QGxpbmsgc3BsaXRCeX0sIHtAbGluayBkaXZpZGVFcXVhbGx5fSwge0BsaW5rIG1lcmdlfSwge0BsaW5rIHhvcn0sIHtAbGluayB1bmlvbn0sIHtAbGluayBpbnRlcnNlY3Rpb259LCBvciB7QGxpbmsgZGlmZmVyZW5jZX0uXG4gKiAqICoqQ29tcGFyaXNvbioqIFRvIGNvbXBhcmUgdGhpcyBJbnRlcnZhbCB0byBhbm90aGVyIG9uZSwgdXNlIHtAbGluayBlcXVhbHN9LCB7QGxpbmsgb3ZlcmxhcHN9LCB7QGxpbmsgYWJ1dHNTdGFydH0sIHtAbGluayBhYnV0c0VuZH0sIHtAbGluayBlbmd1bGZzfVxuICogKiAqKk91dHB1dCoqKiBUbyBjb252ZXJ0IHRoZSBJbnRlcnZhbCBpbnRvIG90aGVyIHJlcHJlc2VudGF0aW9ucywgc2VlIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0lTT30sIHtAbGluayB0b0Zvcm1hdH0sIGFuZCB7QGxpbmsgdG9EdXJhdGlvbn0uXG4gKi9cblxudmFyIEludGVydmFsID0gZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIEludGVydmFsKGNvbmZpZykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEludGVydmFsKTtcblxuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMucyA9IGNvbmZpZy5zdGFydDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmUgPSBjb25maWcuZW5kO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuaW52YWxpZCA9IGNvbmZpZy5pbnZhbGlkUmVhc29uIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGludmFsaWQgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cblxuXG4gIEludGVydmFsLmludmFsaWQgPSBmdW5jdGlvbiBpbnZhbGlkKHJlYXNvbikge1xuICAgIGlmICghcmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXJyb3IoJ25lZWQgdG8gc3BlY2lmeSBhIHJlYXNvbiB0aGUgRGF0ZVRpbWUgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICBpZiAoU2V0dGluZ3MudGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkSW50ZXJ2YWxFcnJvcihyZWFzb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEludGVydmFsKHsgaW52YWxpZFJlYXNvbjogcmVhc29uIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYSBzdGFydCBEYXRlVGltZSBhbmQgYW4gZW5kIERhdGVUaW1lLiBJbmNsdXNpdmUgb2YgdGhlIHN0YXJ0IGJ1dCBub3QgdGhlIGVuZC5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gZW5kXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cblxuXG4gIEludGVydmFsLmZyb21EYXRlVGltZXMgPSBmdW5jdGlvbiBmcm9tRGF0ZVRpbWVzKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgYnVpbHRTdGFydCA9IGZyaWVuZGx5RGF0ZVRpbWUoc3RhcnQpLFxuICAgICAgICBidWlsdEVuZCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcblxuICAgIHJldHVybiBuZXcgSW50ZXJ2YWwoe1xuICAgICAgc3RhcnQ6IGJ1aWx0U3RhcnQsXG4gICAgICBlbmQ6IGJ1aWx0RW5kLFxuICAgICAgaW52YWxpZFJlYXNvbjogdmFsaWRhdGVTdGFydEVuZChidWlsdFN0YXJ0LCBidWlsdEVuZCkgPyBudWxsIDogJ2ludmFsaWQgZW5kcG9pbnRzJ1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gSW50ZXJ2YWwgZnJvbSBhIHN0YXJ0IERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCB0by5cbiAgICogQHBhcmFtIHtEYXRlVGltZXxEYXRlfE9iamVjdH0gc3RhcnRcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIHRoZSBsZW5ndGggb2YgdGhlIEludGVydmFsLlxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG5cblxuICBJbnRlcnZhbC5hZnRlciA9IGZ1bmN0aW9uIGFmdGVyKHN0YXJ0LCBkdXJhdGlvbikge1xuICAgIHZhciBkdXIgPSBmcmllbmRseUR1cmF0aW9uKGR1cmF0aW9uKSxcbiAgICAgICAgZHQgPSBmcmllbmRseURhdGVUaW1lKHN0YXJ0KTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdCwgZHQucGx1cyhkdXIpKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIEludGVydmFsIGZyb20gYW4gZW5kIERhdGVUaW1lIGFuZCBhIER1cmF0aW9uIHRvIGV4dGVuZCBiYWNrd2FyZHMgdG8uXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV8RGF0ZXxPYmplY3R9IGVuZFxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge0ludGVydmFsfVxuICAgKi9cblxuXG4gIEludGVydmFsLmJlZm9yZSA9IGZ1bmN0aW9uIGJlZm9yZShlbmQsIGR1cmF0aW9uKSB7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLFxuICAgICAgICBkdCA9IGZyaWVuZGx5RGF0ZVRpbWUoZW5kKTtcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdC5taW51cyhkdXIpLCBkdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBJbnRlcnZhbCBmcm9tIGFuIElTTyA4NjAxIHN0cmluZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gdGhlIElTTyBzdHJpbmcgdG8gcGFyc2VcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRvIHBhc3Mge0BzZWUgRGF0ZVRpbWUuZnJvbUlTT31cbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwuZnJvbUlTTyA9IGZ1bmN0aW9uIGZyb21JU08oc3RyaW5nLCBvcHRzKSB7XG4gICAgaWYgKHN0cmluZykge1xuICAgICAgdmFyIF9zdHJpbmckc3BsaXQgPSBzdHJpbmcuc3BsaXQoL1xcLy8pLFxuICAgICAgICAgIHMgPSBfc3RyaW5nJHNwbGl0WzBdLFxuICAgICAgICAgIGUgPSBfc3RyaW5nJHNwbGl0WzFdO1xuXG4gICAgICBpZiAocyAmJiBlKSB7XG4gICAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKERhdGVUaW1lLmZyb21JU08ocywgb3B0cyksIERhdGVUaW1lLmZyb21JU08oZSwgb3B0cykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSW50ZXJ2YWwuaW52YWxpZCgnaW52YWxpZCBJU08gZm9ybWF0Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHN0YXJ0IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgSW50ZXJ2YWwgaW4gdGhlIHNwZWNpZmllZCB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byByZXR1cm4gdGhlIGxlbmd0aCBpbi5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgSW50ZXJ2YWwucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uIGxlbmd0aCgpIHtcbiAgICB2YXIgdW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ21pbGxpc2Vjb25kcyc7XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50b0R1cmF0aW9uLmFwcGx5KHRoaXMsIFt1bml0XSkuZ2V0KHVuaXQpIDogTmFOO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjb3VudCBvZiBtaW51dGVzLCBob3VycywgZGF5cywgbW9udGhzLCBvciB5ZWFycyBpbmNsdWRlZCBpbiB0aGUgSW50ZXJ2YWwsIGV2ZW4gaW4gcGFydC5cbiAgICogVW5saWtlIHtAbGluayBsZW5ndGh9IHRoaXMgY291bnRzIHNlY3Rpb25zIG9mIHRoZSBjYWxlbmRhciwgbm90IHBlcmlvZHMgb2YgdGltZSwgZS5nLiBzcGVjaWZ5aW5nICdkYXknXG4gICAqIGFza3MgJ3doYXQgZGF0ZXMgYXJlIGluY2x1ZGVkIGluIHRoaXMgaW50ZXJ2YWw/Jywgbm90ICdob3cgbWFueSBkYXlzIGxvbmcgaXMgdGhpcyBpbnRlcnZhbD8nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdW5pdD0nbWlsbGlzZWNvbmRzJ10gLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24gY291bnQoKSB7XG4gICAgdmFyIHVuaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdtaWxsaXNlY29uZHMnO1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBOYU47XG4gICAgdmFyIHN0YXJ0ID0gdGhpcy5zdGFydC5zdGFydE9mKHVuaXQpLFxuICAgICAgICBlbmQgPSB0aGlzLmVuZC5zdGFydE9mKHVuaXQpO1xuICAgIHJldHVybiBNYXRoLmZsb29yKGVuZC5kaWZmKHN0YXJ0LCB1bml0KS5nZXQodW5pdCkpICsgMTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBzdGFydCBhbmQgZW5kIGFyZSBib3RoIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIHRoZSB1bml0IG9mIHRpbWUgdG8gY2hlY2sgc2FtZW5lc3Mgb25cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuaGFzU2FtZSA9IGZ1bmN0aW9uIGhhc1NhbWUodW5pdCkge1xuICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmUubWludXMoMSkuaGFzU2FtZSh0aGlzLnMsIHVuaXQpIDogZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgaGFzIHRoZSBzYW1lIHN0YXJ0IGFuZCBlbmQgRGF0ZVRpbWVzLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zLnZhbHVlT2YoKSA9PT0gdGhpcy5lLnZhbHVlT2YoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIHN0YXJ0IGlzIGFmdGVyIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwucHJvdG90eXBlLmlzQWZ0ZXIgPSBmdW5jdGlvbiBpc0FmdGVyKGRhdGVUaW1lKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy5zID4gZGF0ZVRpbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYmVmb3JlIHRoZSBzcGVjaWZpZWQgRGF0ZVRpbWUuXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IGRhdGVUaW1lXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwucHJvdG90eXBlLmlzQmVmb3JlID0gZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZVRpbWUpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLmUgPD0gZGF0ZVRpbWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwgY29udGFpbnMgdGhlIHNwZWNpZmllZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gZGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhkYXRlVGltZSkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMucyA8PSBkYXRlVGltZSAmJiB0aGlzLmUgPiBkYXRlVGltZTtcbiAgfTtcblxuICAvKipcbiAgICogXCJTZXRzXCIgdGhlIHN0YXJ0IGFuZC9vciBlbmQgZGF0ZXMuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIHRoZSB2YWx1ZXMgdG8gc2V0XG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IHZhbHVlcy5zdGFydCAtIHRoZSBzdGFydGluZyBEYXRlVGltZVxuICAgKiBAcGFyYW0ge0RhdGVUaW1lfSB2YWx1ZXMuZW5kIC0gdGhlIGVuZGluZyBEYXRlVGltZVxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0JCQxKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fSxcbiAgICAgICAgc3RhcnQgPSBfcmVmLnN0YXJ0LFxuICAgICAgICBlbmQgPSBfcmVmLmVuZDtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhzdGFydCB8fCB0aGlzLnMsIGVuZCB8fCB0aGlzLmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGF0IGVhY2ggb2YgdGhlIHNwZWNpZmllZCBEYXRlVGltZXNcbiAgICogQHBhcmFtIHsuLi5bRGF0ZVRpbWVdfSBkYXRlVGltZXMgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNvdW50LlxuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS5zcGxpdEF0ID0gZnVuY3Rpb24gc3BsaXRBdCgpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIFtdO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBzb3J0ZWQgPSBkYXRlVGltZXMubWFwKGZyaWVuZGx5RGF0ZVRpbWUpLnNvcnQoKSxcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgIHZhciBzID0gdGhpcy5zLFxuICAgICAgICBpID0gMDtcblxuXG4gICAgd2hpbGUgKHMgPCB0aGlzLmUpIHtcbiAgICAgIHZhciBhZGRlZCA9IHNvcnRlZFtpXSB8fCB0aGlzLmUsXG4gICAgICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcbiAgICAgIHMgPSBuZXh0O1xuICAgICAgaSArPSAxO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gc21hbGxlciBJbnRlcnZhbHMsIGVhY2ggb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gICAqIExlZnQgb3ZlciB0aW1lIGlzIGdyb3VwZWQgaW50byBhIHNtYWxsZXIgaW50ZXJ2YWxcbiAgICogQHBhcmFtIHtEdXJhdGlvbnxPYmplY3R8bnVtYmVyfSBkdXJhdGlvbiAtIFRoZSBsZW5ndGggb2YgZWFjaCByZXN1bHRpbmcgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge1tJbnRlcnZhbF19XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwucHJvdG90eXBlLnNwbGl0QnkgPSBmdW5jdGlvbiBzcGxpdEJ5KGR1cmF0aW9uKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICB2YXIgZHVyID0gZnJpZW5kbHlEdXJhdGlvbihkdXJhdGlvbiksXG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICB2YXIgcyA9IHRoaXMucyxcbiAgICAgICAgYWRkZWQgPSB2b2lkIDAsXG4gICAgICAgIG5leHQgPSB2b2lkIDA7XG5cblxuICAgIHdoaWxlIChzIDwgdGhpcy5lKSB7XG4gICAgICBhZGRlZCA9IHMucGx1cyhkdXIpO1xuICAgICAgbmV4dCA9ICthZGRlZCA+ICt0aGlzLmUgPyB0aGlzLmUgOiBhZGRlZDtcbiAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIG5leHQpKTtcbiAgICAgIHMgPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTcGxpdCB0aGlzIEludGVydmFsIGludG8gdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygc21hbGxlciBpbnRlcnZhbHMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXJPZlBhcnRzIC0gVGhlIG51bWJlciBvZiBJbnRlcnZhbHMgdG8gZGl2aWRlIHRoZSBJbnRlcnZhbCBpbnRvLlxuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS5kaXZpZGVFcXVhbGx5ID0gZnVuY3Rpb24gZGl2aWRlRXF1YWxseShudW1iZXJPZlBhcnRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gdGhpcy5zcGxpdEJ5KHRoaXMubGVuZ3RoKCkgLyBudW1iZXJPZlBhcnRzKS5zbGljZSgwLCBudW1iZXJPZlBhcnRzKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBvdmVybGFwcyB3aXRoIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxcbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUub3ZlcmxhcHMgPSBmdW5jdGlvbiBvdmVybGFwcyhvdGhlcikge1xuICAgIHJldHVybiB0aGlzLmUgPiBvdGhlci5zICYmIHRoaXMucyA8IG90aGVyLmU7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoaXMgSW50ZXJ2YWwncyBlbmQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIHN0YXJ0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS5hYnV0c1N0YXJ0ID0gZnVuY3Rpb24gYWJ1dHNTdGFydChvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICt0aGlzLmUgPT09ICtvdGhlci5zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsJ3Mgc3RhcnQgaXMgYWRqYWNlbnQgdG8gdGhlIHNwZWNpZmllZCBJbnRlcnZhbCdzIGVuZC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuYWJ1dHNFbmQgPSBmdW5jdGlvbiBhYnV0c0VuZChvdGhlcikge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuICtvdGhlci5lID09PSArdGhpcy5zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIEludGVydmFsIGVuZ3VsZnMgdGhlIHN0YXJ0IGFuZCBlbmQgb2YgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuZW5ndWxmcyA9IGZ1bmN0aW9uIGVuZ3VsZnMob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnMgPD0gb3RoZXIucyAmJiB0aGlzLmUgPj0gb3RoZXIuZTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCBoYXMgdGhlIHNhbWUgc3RhcnQgYW5kIGVuZCBhcyB0aGUgc3BlY2lmaWVkIEludGVydmFsLlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zLmVxdWFscyhvdGhlci5zKSAmJiB0aGlzLmUuZXF1YWxzKG90aGVyLmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgcmVwcmVzZW50aW5nIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWF4aW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWluaW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogUmV0dXJucyBudWxsIGlmIHRoZSBpbnRlcnNlY3Rpb24gaXMgZW1wdHksIGkuZS4sIHRoZSBpbnRlcnZhbHMgZG9uJ3QgaW50ZXJzZWN0LlxuICAgKiBAcGFyYW0ge0ludGVydmFsfSBvdGhlclxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuaW50ZXJzZWN0aW9uID0gZnVuY3Rpb24gaW50ZXJzZWN0aW9uKG90aGVyKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB0aGlzO1xuICAgIHZhciBzID0gdGhpcy5zID4gb3RoZXIucyA/IHRoaXMucyA6IG90aGVyLnMsXG4gICAgICAgIGUgPSB0aGlzLmUgPCBvdGhlci5lID8gdGhpcy5lIDogb3RoZXIuZTtcblxuICAgIGlmIChzID4gZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGFuIEludGVydmFsIHJlcHJlc2VudGluZyB0aGUgdW5pb24gb2YgdGhpcyBJbnRlcnZhbCBhbmQgdGhlIHNwZWNpZmllZCBJbnRlcnZhbC5cbiAgICogU3BlY2lmaWNhbGx5LCB0aGUgcmVzdWx0aW5nIEludGVydmFsIGhhcyB0aGUgbWluaW11bSBzdGFydCB0aW1lIGFuZCB0aGUgbWF4aW11bSBlbmQgdGltZSBvZiB0aGUgdHdvIEludGVydmFscy5cbiAgICogQHBhcmFtIHtJbnRlcnZhbH0gb3RoZXJcbiAgICogQHJldHVybiB7SW50ZXJ2YWx9XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwucHJvdG90eXBlLnVuaW9uID0gZnVuY3Rpb24gdW5pb24ob3RoZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIHMgPSB0aGlzLnMgPCBvdGhlci5zID8gdGhpcy5zIDogb3RoZXIucyxcbiAgICAgICAgZSA9IHRoaXMuZSA+IG90aGVyLmUgPyB0aGlzLmUgOiBvdGhlci5lO1xuICAgIHJldHVybiBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHMsIGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNZXJnZSBhbiBhcnJheSBvZiBJbnRlcnZhbHMgaW50byBhIGVxdWl2YWxlbnQgbWluaW1hbCBzZXQgb2YgSW50ZXJ2YWxzLlxuICAgKiBDb21iaW5lcyBvdmVybGFwcGluZyBhbmQgYWRqYWNlbnQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge1tJbnRlcnZhbF19IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cblxuXG4gIEludGVydmFsLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UoaW50ZXJ2YWxzKSB7XG4gICAgdmFyIF9pbnRlcnZhbHMkc29ydCRyZWR1YyA9IGludGVydmFscy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gYS5zIC0gYi5zO1xuICAgIH0pLnJlZHVjZShmdW5jdGlvbiAoX3JlZjIsIGl0ZW0pIHtcbiAgICAgIHZhciBzb2ZhciA9IF9yZWYyWzBdLFxuICAgICAgICAgIGN1cnJlbnQgPSBfcmVmMlsxXTtcblxuICAgICAgaWYgKCFjdXJyZW50KSB7XG4gICAgICAgIHJldHVybiBbc29mYXIsIGl0ZW1dO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm92ZXJsYXBzKGl0ZW0pIHx8IGN1cnJlbnQuYWJ1dHNTdGFydChpdGVtKSkge1xuICAgICAgICByZXR1cm4gW3NvZmFyLCBjdXJyZW50LnVuaW9uKGl0ZW0pXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbc29mYXIuY29uY2F0KFtjdXJyZW50XSksIGl0ZW1dO1xuICAgICAgfVxuICAgIH0sIFtbXSwgbnVsbF0pLFxuICAgICAgICBmb3VuZCA9IF9pbnRlcnZhbHMkc29ydCRyZWR1Y1swXSxcbiAgICAgICAgZmluYWwgPSBfaW50ZXJ2YWxzJHNvcnQkcmVkdWNbMV07XG5cbiAgICBpZiAoZmluYWwpIHtcbiAgICAgIGZvdW5kLnB1c2goZmluYWwpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBJbnRlcnZhbHMgcmVwcmVzZW50aW5nIHRoZSBzcGFucyBvZiB0aW1lIHRoYXQgb25seSBhcHBlYXIgaW4gb25lIG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0ge1tJbnRlcnZhbF19IGludGVydmFsc1xuICAgKiBAcmV0dXJuIHtbSW50ZXJ2YWxdfVxuICAgKi9cblxuXG4gIEludGVydmFsLnhvciA9IGZ1bmN0aW9uIHhvcihpbnRlcnZhbHMpIHtcbiAgICB2YXIgX0FycmF5JHByb3RvdHlwZTtcblxuICAgIHZhciBzdGFydCA9IG51bGwsXG4gICAgICAgIGN1cnJlbnRDb3VudCA9IDA7XG4gICAgdmFyIHJlc3VsdHMgPSBbXSxcbiAgICAgICAgZW5kcyA9IGludGVydmFscy5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBbeyB0aW1lOiBpLnMsIHR5cGU6ICdzJyB9LCB7IHRpbWU6IGkuZSwgdHlwZTogJ2UnIH1dO1xuICAgIH0pLFxuICAgICAgICBmbGF0dGVuZWQgPSAoX0FycmF5JHByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZSkuY29uY2F0LmFwcGx5KF9BcnJheSRwcm90b3R5cGUsIGVuZHMpLFxuICAgICAgICBhcnIgPSBmbGF0dGVuZWQuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEudGltZSAtIGIudGltZTtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IGFyciwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICAgIHZhciBfcmVmMztcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZjMgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChfaS5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjMgPSBfaS52YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGkgPSBfcmVmMztcblxuICAgICAgY3VycmVudENvdW50ICs9IGkudHlwZSA9PT0gJ3MnID8gMSA6IC0xO1xuXG4gICAgICBpZiAoY3VycmVudENvdW50ID09PSAxKSB7XG4gICAgICAgIHN0YXJ0ID0gaS50aW1lO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHN0YXJ0ICYmICtzdGFydCAhPT0gK2kudGltZSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKHN0YXJ0LCBpLnRpbWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXJ0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gSW50ZXJ2YWwubWVyZ2UocmVzdWx0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBJbnRlcnZhbCByZXByZXNlbnRpbmcgdGhlIHNwYW4gb2YgdGltZSBpbiB0aGlzIEludGVydmFsIHRoYXQgZG9lc24ndCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBzcGVjaWZpZWQgSW50ZXJ2YWxzLlxuICAgKiBAcGFyYW0gey4uLkludGVydmFsfSBpbnRlcnZhbHNcbiAgICogQHJldHVybiB7W0ludGVydmFsXX1cbiAgICovXG5cblxuICBJbnRlcnZhbC5wcm90b3R5cGUuZGlmZmVyZW5jZSA9IGZ1bmN0aW9uIGRpZmZlcmVuY2UoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgaW50ZXJ2YWxzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGludGVydmFsc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHJldHVybiBJbnRlcnZhbC54b3IoW3RoaXNdLmNvbmNhdChpbnRlcnZhbHMpKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBfdGhpcy5pbnRlcnNlY3Rpb24oaSk7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChpKSB7XG4gICAgICByZXR1cm4gaSAmJiAhaS5pc0VtcHR5KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBJbnRlcnZhbCBhcHByb3ByaWF0ZSBmb3IgZGVidWdnaW5nLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgSW50ZXJ2YWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBJTlZBTElEJDE7XG4gICAgcmV0dXJuICdbJyArIHRoaXMucy50b0lTTygpICsgJyBcXHUyMDEzICcgKyB0aGlzLmUudG9JU08oKSArICcpJztcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIEludGVydmFsIGFwcHJvcHJpYXRlIGZvciB0aGUgUkVQTC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gJ0ludGVydmFsIHtcXG4gIHN0YXJ0OiAnICsgdGhpcy5zdGFydC50b0lTTygpICsgJyxcXG4gIGVuZDogJyArIHRoaXMuZW5kLnRvSVNPKCkgKyAnLFxcbiAgem9uZTogICAnICsgdGhpcy5zdGFydC56b25lLm5hbWUgKyAnLFxcbiAgbG9jYWxlOiAgICcgKyB0aGlzLnN0YXJ0LmxvY2FsZSArICcgfSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnSW50ZXJ2YWwgeyBJbnZhbGlkLCByZWFzb246ICcgKyB0aGlzLmludmFsaWRSZWFzb24gKyAnIH0nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwuXG4gICAqIEBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDEjVGltZV9pbnRlcnZhbHNcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBUaGUgc2FtZSBvcHRpb25zIGFzIHtAbGluayBEYXRlVGltZS50b0lTT31cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS50b0lTTyA9IGZ1bmN0aW9uIHRvSVNPKG9wdHMpIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIElOVkFMSUQkMTtcbiAgICByZXR1cm4gdGhpcy5zLnRvSVNPKG9wdHMpICsgJy8nICsgdGhpcy5lLnRvSVNPKG9wdHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgSW50ZXJ2YWwgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkYXRlRm9ybWF0IC0gdGhlIGZvcm1hdCBzdHJpbmcuIFRoaXMgc3RyaW5nIGZvcm1hdHMgdGhlIHN0YXJ0IGFuZCBlbmQgdGltZS4gU2VlIHtAbGluayBEYXRlVGltZS50b0Zvcm1hdH0gZm9yIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuc2VwYXJhdG9yID0gICcg4oCTICddIC0gYSBzZXBhcmF0b3IgdG8gcGxhY2UgYmV0d2VlbiB0aGUgc3RhcnQgYW5kIGVuZCByZXByZXNlbnRhdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS50b0Zvcm1hdCA9IGZ1bmN0aW9uIHRvRm9ybWF0KGRhdGVGb3JtYXQpIHtcbiAgICB2YXIgX3JlZjQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmNCRzZXBhcmF0b3IgPSBfcmVmNC5zZXBhcmF0b3IsXG4gICAgICAgIHNlcGFyYXRvciA9IF9yZWY0JHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJyDigJMgJyA6IF9yZWY0JHNlcGFyYXRvcjtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gSU5WQUxJRCQxO1xuICAgIHJldHVybiAnJyArIHRoaXMucy50b0Zvcm1hdChkYXRlRm9ybWF0KSArIHNlcGFyYXRvciArIHRoaXMuZS50b0Zvcm1hdChkYXRlRm9ybWF0KTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGEgRHVyYXRpb24gcmVwcmVzZW50aW5nIHRoZSB0aW1lIHNwYW5uZWQgYnkgdGhpcyBpbnRlcnZhbC5cbiAgICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IFt1bml0PVsnbWlsbGlzZWNvbmRzJ11dIC0gdGhlIHVuaXQgb3IgdW5pdHMgKHN1Y2ggYXMgJ2hvdXJzJyBvciAnZGF5cycpIHRvIGluY2x1ZGUgaW4gdGhlIGR1cmF0aW9uLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbigpLnRvT2JqZWN0KCkgLy89PiB7IG1pbGxpc2Vjb25kczogODg0ODkyNTcgfVxuICAgKiBAZXhhbXBsZSBJbnRlcnZhbC5mcm9tRGF0ZVRpbWVzKGR0MSwgZHQyKS50b0R1cmF0aW9uKCdkYXlzJykudG9PYmplY3QoKSAvLz0+IHsgZGF5czogMS4wMjQxODEyMTUyNzc3Nzc4IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbihbJ2hvdXJzJywgJ21pbnV0ZXMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNC44MjA5NSB9XG4gICAqIEBleGFtcGxlIEludGVydmFsLmZyb21EYXRlVGltZXMoZHQxLCBkdDIpLnRvRHVyYXRpb24oWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnXSkudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDI0LCBtaW51dGVzOiAzNCwgc2Vjb25kczogNDkuMjU3IH1cbiAgICogQGV4YW1wbGUgSW50ZXJ2YWwuZnJvbURhdGVUaW1lcyhkdDEsIGR0MikudG9EdXJhdGlvbignc2Vjb25kcycpLnRvT2JqZWN0KCkgLy89PiB7IHNlY29uZHM6IDg4NDg5LjI1NyB9XG4gICAqIEByZXR1cm4ge0R1cmF0aW9ufVxuICAgKi9cblxuXG4gIEludGVydmFsLnByb3RvdHlwZS50b0R1cmF0aW9uID0gZnVuY3Rpb24gdG9EdXJhdGlvbih1bml0LCBvcHRzKSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBEdXJhdGlvbi5pbnZhbGlkKHRoaXMuaW52YWxpZFJlYXNvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmUuZGlmZih0aGlzLnMsIHVuaXQsIG9wdHMpO1xuICB9O1xuXG4gIGNyZWF0ZUNsYXNzKEludGVydmFsLCBbe1xuICAgIGtleTogJ3N0YXJ0JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnMgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVuZCBvZiB0aGUgSW50ZXJ2YWxcbiAgICAgKiBAdHlwZSB7RGF0ZVRpbWV9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2VuZCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5lIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhpcyBJbnRlcnZhbCdzIGVuZCBpcyBhdCBsZWFzdCBpdHMgc3RhcnQsIGkuZS4gdGhhdCB0aGUgSW50ZXJ2YWwgaXNuJ3QgJ2JhY2t3YXJkcycuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzVmFsaWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZFJlYXNvbiA9PT0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGV4cGxhbmF0aW9uIG9mIHdoeSB0aGlzIEludGVydmFsIGJlY2FtZSBpbnZhbGlkLCBvciBudWxsIGlmIHRoZSBJbnRlcnZhbCBpcyB2YWxpZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2ludmFsaWRSZWFzb24nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZDtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEludGVydmFsO1xufSgpO1xuXG4vKipcbiAqIFRoZSBJbmZvIGNsYXNzIGNvbnRhaW5zIHN0YXRpYyBtZXRob2RzIGZvciByZXRyaWV2aW5nIGdlbmVyYWwgdGltZSBhbmQgZGF0ZSByZWxhdGVkIGRhdGEuIEZvciBleGFtcGxlLCBpdCBoYXMgbWV0aG9kcyBmb3IgZmluZGluZyBvdXQgaWYgYSB0aW1lIHpvbmUgaGFzIGEgRFNULCBmb3IgbGlzdGluZyB0aGUgbW9udGhzIGluIGFueSBzdXBwb3J0ZWQgbG9jYWxlLCBhbmQgZm9yIGRpc2NvdmVyaW5nIHdoaWNoIG9mIEx1eG9uIGZlYXR1cmVzIGFyZSBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgZW52aXJvbm1lbnQuXG4gKi9cblxudmFyIEluZm8gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEluZm8oKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5mbyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGNvbnRhaW5zIGEgRFNULlxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbem9uZT0nbG9jYWwnXSAtIFpvbmUgdG8gY2hlY2suIERlZmF1bHRzIHRvIHRoZSBlbnZpcm9ubWVudCdzIGxvY2FsIHpvbmUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBJbmZvLmhhc0RTVCA9IGZ1bmN0aW9uIGhhc0RTVCgpIHtcbiAgICB2YXIgem9uZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogU2V0dGluZ3MuZGVmYXVsdFpvbmU7XG5cbiAgICB2YXIgcHJvdG8gPSBEYXRlVGltZS5sb2NhbCgpLnNldFpvbmUoem9uZSkuc2V0KHsgbW9udGg6IDEyIH0pO1xuXG4gICAgcmV0dXJuICF6b25lLnVuaXZlcnNhbCAmJiBwcm90by5vZmZzZXQgIT09IHByb3RvLnNldCh7IG1vbnRoOiA2IH0pLm9mZnNldDtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHNwZWNpZmllZCB6b25lIGlzIGEgdmFsaWQgSUFOQSBzcGVjaWZpZXIuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB6b25lIC0gWm9uZSB0byBjaGVja1xuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIEluZm8uaXNWYWxpZElBTkFab25lID0gZnVuY3Rpb24gaXNWYWxpZElBTkFab25lKHpvbmUpIHtcbiAgICByZXR1cm4gISFJQU5BWm9uZS5pc1ZhbGlkU3BlY2lmaWVyKHpvbmUpICYmIElBTkFab25lLmlzVmFsaWRab25lKHpvbmUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2Ygc3RhbmRhbG9uZSBtb250aCBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJudW1lcmljXCIsIFwiMi1kaWdpdFwiLCBcIm5hcnJvd1wiLCBcInNob3J0XCIsIFwibG9uZ1wiXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubnVtYmVyaW5nU3lzdGVtPW51bGxdIC0gdGhlIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm91dHB1dENhbGVuZGFyPSdncmVnb3J5J10gLSB0aGUgY2FsZW5kYXJcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoKVswXSAvLz0+ICdKYW51YXJ5J1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnc2hvcnQnKVswXSAvLz0+ICdKYW4nXG4gICAqIEBleGFtcGxlIEluZm8ubW9udGhzKCdudW1lcmljJylbMF0gLy89PiAnMSdcbiAgICogQGV4YW1wbGUgSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6ICdmci1DQScgfSApWzBdIC8vPT4gJ2phbnYuJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbnVtZXJpYycsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9mhJ1xuICAgKiBAZXhhbXBsZSBJbmZvLm1vbnRocygnbG9uZycsIHsgb3V0cHV0Q2FsZW5kYXI6ICdpc2xhbWljJyB9KVswXSAvLz0+ICdSYWJpyrsgSSdcbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuXG5cbiAgSW5mby5tb250aHMgPSBmdW5jdGlvbiBtb250aHMoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2xvbmcnO1xuXG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmJGxvY2FsZSA9IF9yZWYubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmJGxvY2FsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkbG9jYWxlLFxuICAgICAgICBfcmVmJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmJG51bWJlcmluZ1N5c3RlbSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkbnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBfcmVmJG91dHB1dENhbGVuZGFyID0gX3JlZi5vdXRwdXRDYWxlbmRhcixcbiAgICAgICAgb3V0cHV0Q2FsZW5kYXIgPSBfcmVmJG91dHB1dENhbGVuZGFyID09PSB1bmRlZmluZWQgPyAnZ3JlZ29yeScgOiBfcmVmJG91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIGZvcm1hdCBtb250aCBuYW1lcy5cbiAgICogRm9ybWF0IG1vbnRocyBkaWZmZXIgZnJvbSBzdGFuZGFsb25lIG1vbnRocyBpbiB0aGF0IHRoZXkncmUgbWVhbnQgdG8gYXBwZWFyIG5leHQgdG8gdGhlIGRheSBvZiB0aGUgbW9udGguIEluIHNvbWUgbGFuZ3VhZ2VzLCB0aGF0XG4gICAqIGNoYW5nZXMgdGhlIHN0cmluZy5cbiAgICogU2VlIHtAbGluayBtb250aHN9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGVuZ3RoPSdsb25nJ10gLSB0aGUgbGVuZ3RoIG9mIHRoZSBtb250aCByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcIm51bWVyaWNcIiwgXCIyLWRpZ2l0XCIsIFwibmFycm93XCIsIFwic2hvcnRcIiwgXCJsb25nXCJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMub3V0cHV0Q2FsZW5kYXI9J2dyZWdvcnknXSAtIHRoZSBjYWxlbmRhclxuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG5cblxuICBJbmZvLm1vbnRoc0Zvcm1hdCA9IGZ1bmN0aW9uIG1vbnRoc0Zvcm1hdCgpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnbG9uZyc7XG5cbiAgICB2YXIgX3JlZjIgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmMiRsb2NhbGUgPSBfcmVmMi5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWYyJGxvY2FsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYyJGxvY2FsZSxcbiAgICAgICAgX3JlZjIkbnVtYmVyaW5nU3lzdGVtID0gX3JlZjIubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmMiRudW1iZXJpbmdTeXN0ZW0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmMiRudW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIF9yZWYyJG91dHB1dENhbGVuZGFyID0gX3JlZjIub3V0cHV0Q2FsZW5kYXIsXG4gICAgICAgIG91dHB1dENhbGVuZGFyID0gX3JlZjIkb3V0cHV0Q2FsZW5kYXIgPT09IHVuZGVmaW5lZCA/ICdncmVnb3J5JyA6IF9yZWYyJG91dHB1dENhbGVuZGFyO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG91dHB1dENhbGVuZGFyKS5tb250aHMobGVuZ3RoLCB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIHN0YW5kYWxvbmUgd2VlayBuYW1lcy5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9EYXRlVGltZUZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5udW1iZXJpbmdTeXN0ZW09bnVsbF0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKClbMF0gLy89PiAnTW9uZGF5J1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcpWzBdIC8vPT4gJ01vbidcbiAgICogQGV4YW1wbGUgSW5mby53ZWVrZGF5cygnc2hvcnQnLCB7IGxvY2FsZTogJ2ZyLUNBJyB9KVswXSAvLz0+ICdsdW4uJ1xuICAgKiBAZXhhbXBsZSBJbmZvLndlZWtkYXlzKCdzaG9ydCcsIHsgbG9jYWxlOiAnYXInIH0pWzBdIC8vPT4gJ9in2YTYp9ir2YbZitmGJ1xuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG5cblxuICBJbmZvLndlZWtkYXlzID0gZnVuY3Rpb24gd2Vla2RheXMoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2xvbmcnO1xuXG4gICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgX3JlZjMkbG9jYWxlID0gX3JlZjMubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmMyRsb2NhbGUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmMyRsb2NhbGUsXG4gICAgICAgIF9yZWYzJG51bWJlcmluZ1N5c3RlbSA9IF9yZWYzLm51bWJlcmluZ1N5c3RlbSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjMkbnVtYmVyaW5nU3lzdGVtID09PSB1bmRlZmluZWQgPyBudWxsIDogX3JlZjMkbnVtYmVyaW5nU3lzdGVtO1xuXG4gICAgcmV0dXJuIExvY2FsZS5jcmVhdGUobG9jYWxlLCBudW1iZXJpbmdTeXN0ZW0sIG51bGwpLndlZWtkYXlzKGxlbmd0aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBmb3JtYXQgd2VlayBuYW1lcy5cbiAgICogRm9ybWF0IHdlZWtkYXlzIGRpZmZlciBmcm9tIHN0YW5kYWxvbmUgd2Vla2RheXMgaW4gdGhhdCB0aGV5J3JlIG1lYW50IHRvIGFwcGVhciBuZXh0IHRvIG1vcmUgZGF0ZSBpbmZvcm1hdGlvbi4gSW4gc29tZSBsYW5ndWFnZXMsIHRoYXRcbiAgICogY2hhbmdlcyB0aGUgc3RyaW5nLlxuICAgKiBTZWUge0BsaW5rIHdlZWtkYXlzfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nbG9uZyddIC0gdGhlIGxlbmd0aCBvZiB0aGUgbW9udGggcmVwcmVzZW50YXRpb24sIHN1Y2ggYXMgXCJuYXJyb3dcIiwgXCJzaG9ydFwiLCBcImxvbmdcIi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGU9bnVsbF0gLSB0aGUgbG9jYWxlIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLm51bWJlcmluZ1N5c3RlbT1udWxsXSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtXG4gICAqIEByZXR1cm4ge1tzdHJpbmddfVxuICAgKi9cblxuXG4gIEluZm8ud2Vla2RheXNGb3JtYXQgPSBmdW5jdGlvbiB3ZWVrZGF5c0Zvcm1hdCgpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnbG9uZyc7XG5cbiAgICB2YXIgX3JlZjQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmNCRsb2NhbGUgPSBfcmVmNC5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWY0JGxvY2FsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWY0JGxvY2FsZSxcbiAgICAgICAgX3JlZjQkbnVtYmVyaW5nU3lzdGVtID0gX3JlZjQubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfcmVmNCRudW1iZXJpbmdTeXN0ZW0gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmNCRudW1iZXJpbmdTeXN0ZW07XG5cbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgbnVsbCkud2Vla2RheXMobGVuZ3RoLCB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIG1lcmlkaWVtcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0cy5sb2NhbGVdIC0gdGhlIGxvY2FsZSBjb2RlXG4gICAqIEBleGFtcGxlIEluZm8ubWVyaWRpZW1zKCkgLy89PiBbICdBTScsICdQTScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLm1lcmlkaWVtcyh7IGxvY2FsZTogJ2RlJyB9KSAvLz0+IFsgJ3Zvcm0uJywgJ25hY2htLicgXVxuICAgKiBAcmV0dXJuIHtbc3RyaW5nXX1cbiAgICovXG5cblxuICBJbmZvLm1lcmlkaWVtcyA9IGZ1bmN0aW9uIG1lcmlkaWVtcygpIHtcbiAgICB2YXIgX3JlZjUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmNSRsb2NhbGUgPSBfcmVmNS5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9yZWY1JGxvY2FsZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWY1JGxvY2FsZTtcblxuICAgIHJldHVybiBMb2NhbGUuY3JlYXRlKGxvY2FsZSkubWVyaWRpZW1zKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBlcmFzLCBzdWNoIGFzIFsnQkMnLCAnQUQnXS4gVGhlIGxvY2FsZSBjYW4gYmUgc3BlY2lmaWVkLCBidXQgdGhlIGNhbGVuZGFyIHN5c3RlbSBpcyBhbHdheXMgR3JlZ29yaWFuLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2xlbmd0aD0nc2hvcnQnXSAtIHRoZSBsZW5ndGggb2YgdGhlIGVyYSByZXByZXNlbnRhdGlvbiwgc3VjaCBhcyBcInNob3J0XCIgb3IgXCJsb25nXCIuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gb3B0aW9uc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMubG9jYWxlXSAtIHRoZSBsb2NhbGUgY29kZVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoKSAvLz0+IFsgJ0JDJywgJ0FEJyBdXG4gICAqIEBleGFtcGxlIEluZm8uZXJhcygnbG9uZycpIC8vPT4gWyAnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaScgXVxuICAgKiBAZXhhbXBsZSBJbmZvLmVyYXMoJ2xvbmcnLCB7IGxvY2FsZTogJ2ZyJyB9KSAvLz0+IFsgJ2F2YW50IErDqXN1cy1DaHJpc3QnLCAnYXByw6hzIErDqXN1cy1DaHJpc3QnIF1cbiAgICogQHJldHVybiB7W3N0cmluZ119XG4gICAqL1xuXG5cbiAgSW5mby5lcmFzID0gZnVuY3Rpb24gZXJhcygpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnc2hvcnQnO1xuXG4gICAgdmFyIF9yZWY2ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgX3JlZjYkbG9jYWxlID0gX3JlZjYubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfcmVmNiRsb2NhbGUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfcmVmNiRsb2NhbGU7XG5cbiAgICByZXR1cm4gTG9jYWxlLmNyZWF0ZShsb2NhbGUsIG51bGwsICdncmVnb3J5JykuZXJhcyhsZW5ndGgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNldCBvZiBhdmFpbGFibGUgZmVhdHVyZXMgaW4gdGhpcyBlbnZpcm9ubWVudC5cbiAgICogU29tZSBmZWF0dXJlcyBvZiBMdXhvbiBhcmUgbm90IGF2YWlsYWJsZSBpbiBhbGwgZW52aXJvbm1lbnRzLiBGb3IgZXhhbXBsZSwgb24gb2xkZXIgYnJvd3NlcnMsIHRpbWV6b25lIHN1cHBvcnQgaXMgbm90IGF2YWlsYWJsZS4gVXNlIHRoaXMgZnVuY3Rpb24gdG8gZmlndXJlIG91dCBpZiB0aGF0J3MgdGhlIGNhc2UuXG4gICAqIEtleXM6XG4gICAqICogYHpvbmVzYDogd2hldGhlciB0aGlzIGVudmlyb25tZW50IHN1cHBvcnRzIElBTkEgdGltZXpvbmVzXG4gICAqICogYGludGxUb2tlbnNgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgaW50ZXJuYXRpb25hbGl6ZWQgdG9rZW4tYmFzZWQgZm9ybWF0dGluZy9wYXJzaW5nXG4gICAqICogYGludGxgOiB3aGV0aGVyIHRoaXMgZW52aXJvbm1lbnQgc3VwcG9ydHMgZ2VuZXJhbCBpbnRlcm5hdGlvbmFsaXphdGlvblxuICAgKiBAZXhhbXBsZSBJbmZvLmZlYXR1cmVzKCkgLy89PiB7IGludGw6IHRydWUsIGludGxUb2tlbnM6IGZhbHNlLCB6b25lczogdHJ1ZSB9XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG5cblxuICBJbmZvLmZlYXR1cmVzID0gZnVuY3Rpb24gZmVhdHVyZXMoKSB7XG4gICAgdmFyIGludGwgPSBmYWxzZSxcbiAgICAgICAgaW50bFRva2VucyA9IGZhbHNlLFxuICAgICAgICB6b25lcyA9IGZhbHNlO1xuXG4gICAgaWYgKGhhc0ludGwoKSkge1xuICAgICAgaW50bCA9IHRydWU7XG4gICAgICBpbnRsVG9rZW5zID0gaGFzRm9ybWF0VG9QYXJ0cygpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB6b25lcyA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCdlbicsIHsgdGltZVpvbmU6ICdBbWVyaWNhL05ld19Zb3JrJyB9KS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZSA9PT0gJ0FtZXJpY2EvTmV3X1lvcmsnO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB6b25lcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGludGw6IGludGwsIGludGxUb2tlbnM6IGludGxUb2tlbnMsIHpvbmVzOiB6b25lcyB9O1xuICB9O1xuXG4gIHJldHVybiBJbmZvO1xufSgpO1xuXG5mdW5jdGlvbiBkYXlEaWZmKGVhcmxpZXIsIGxhdGVyKSB7XG4gIHZhciB1dGNEYXlTdGFydCA9IGZ1bmN0aW9uIHV0Y0RheVN0YXJ0KGR0KSB7XG4gICAgcmV0dXJuIGR0LnRvVVRDKDAsIHsga2VlcExvY2FsVGltZTogdHJ1ZSB9KS5zdGFydE9mKCdkYXknKS52YWx1ZU9mKCk7XG4gIH0sXG4gICAgICBtcyA9IHV0Y0RheVN0YXJ0KGxhdGVyKSAtIHV0Y0RheVN0YXJ0KGVhcmxpZXIpO1xuICByZXR1cm4gTWF0aC5mbG9vcihEdXJhdGlvbi5mcm9tTWlsbGlzKG1zKS5hcygnZGF5cycpKTtcbn1cblxuZnVuY3Rpb24gaGlnaE9yZGVyRGlmZnMoY3Vyc29yLCBsYXRlciwgdW5pdHMpIHtcbiAgdmFyIGRpZmZlcnMgPSBbWyd5ZWFycycsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIueWVhciAtIGEueWVhcjtcbiAgfV0sIFsnbW9udGhzJywgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5tb250aCAtIGEubW9udGggKyAoYi55ZWFyIC0gYS55ZWFyKSAqIDEyO1xuICB9XSwgWyd3ZWVrcycsIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGRheXMgPSBkYXlEaWZmKGEsIGIpO1xuICAgIHJldHVybiAoZGF5cyAtIGRheXMgJSA3KSAvIDc7XG4gIH1dLCBbJ2RheXMnLCBkYXlEaWZmXV07XG5cbiAgdmFyIHJlc3VsdHMgPSB7fTtcbiAgdmFyIGxvd2VzdE9yZGVyID0gdm9pZCAwLFxuICAgICAgaGlnaFdhdGVyID0gdm9pZCAwO1xuXG4gIGZvciAodmFyIF9pdGVyYXRvciA9IGRpZmZlcnMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICBfcmVmMiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZjIgPSBfaS52YWx1ZTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZiA9IF9yZWYyO1xuICAgIHZhciB1bml0ID0gX3JlZlswXTtcbiAgICB2YXIgZGlmZmVyID0gX3JlZlsxXTtcblxuICAgIGlmICh1bml0cy5pbmRleE9mKHVuaXQpID49IDApIHtcbiAgICAgIHZhciBfY3Vyc29yJHBsdXM7XG5cbiAgICAgIGxvd2VzdE9yZGVyID0gdW5pdDtcblxuICAgICAgdmFyIGRlbHRhID0gZGlmZmVyKGN1cnNvciwgbGF0ZXIpO1xuXG4gICAgICBoaWdoV2F0ZXIgPSBjdXJzb3IucGx1cygoX2N1cnNvciRwbHVzID0ge30sIF9jdXJzb3IkcGx1c1t1bml0XSA9IGRlbHRhLCBfY3Vyc29yJHBsdXMpKTtcblxuICAgICAgaWYgKGhpZ2hXYXRlciA+IGxhdGVyKSB7XG4gICAgICAgIHZhciBfaGlnaFdhdGVyJG1pbnVzO1xuXG4gICAgICAgIGN1cnNvciA9IGhpZ2hXYXRlci5taW51cygoX2hpZ2hXYXRlciRtaW51cyA9IHt9LCBfaGlnaFdhdGVyJG1pbnVzW3VuaXRdID0gMSwgX2hpZ2hXYXRlciRtaW51cykpO1xuICAgICAgICBkZWx0YSAtPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3Vyc29yID0gaGlnaFdhdGVyO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGVsdGEgPiAwKSB7XG4gICAgICAgIHJlc3VsdHNbdW5pdF0gPSBkZWx0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gW2N1cnNvciwgcmVzdWx0cywgaGlnaFdhdGVyLCBsb3dlc3RPcmRlcl07XG59XG5cbmZ1bmN0aW9uIF9kaWZmIChlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpIHtcbiAgdmFyIF9oaWdoT3JkZXJEaWZmcyA9IGhpZ2hPcmRlckRpZmZzKGVhcmxpZXIsIGxhdGVyLCB1bml0cyksXG4gICAgICBjdXJzb3IgPSBfaGlnaE9yZGVyRGlmZnNbMF0sXG4gICAgICByZXN1bHRzID0gX2hpZ2hPcmRlckRpZmZzWzFdLFxuICAgICAgaGlnaFdhdGVyID0gX2hpZ2hPcmRlckRpZmZzWzJdLFxuICAgICAgbG93ZXN0T3JkZXIgPSBfaGlnaE9yZGVyRGlmZnNbM107XG5cbiAgdmFyIHJlbWFpbmluZ01pbGxpcyA9IGxhdGVyIC0gY3Vyc29yO1xuXG4gIHZhciBsb3dlck9yZGVyVW5pdHMgPSB1bml0cy5maWx0ZXIoZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gWydob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJ10uaW5kZXhPZih1KSA+PSAwO1xuICB9KTtcblxuICBpZiAobG93ZXJPcmRlclVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChoaWdoV2F0ZXIgPCBsYXRlcikge1xuICAgICAgdmFyIF9jdXJzb3IkcGx1czI7XG5cbiAgICAgIGhpZ2hXYXRlciA9IGN1cnNvci5wbHVzKChfY3Vyc29yJHBsdXMyID0ge30sIF9jdXJzb3IkcGx1czJbbG93ZXN0T3JkZXJdID0gMSwgX2N1cnNvciRwbHVzMikpO1xuICAgIH1cblxuICAgIGlmIChoaWdoV2F0ZXIgIT09IGN1cnNvcikge1xuICAgICAgcmVzdWx0c1tsb3dlc3RPcmRlcl0gPSAocmVzdWx0c1tsb3dlc3RPcmRlcl0gfHwgMCkgKyByZW1haW5pbmdNaWxsaXMgLyAoaGlnaFdhdGVyIC0gY3Vyc29yKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZHVyYXRpb24gPSBEdXJhdGlvbi5mcm9tT2JqZWN0KE9iamVjdC5hc3NpZ24ocmVzdWx0cywgb3B0cykpO1xuXG4gIGlmIChsb3dlck9yZGVyVW5pdHMubGVuZ3RoID4gMCkge1xuICAgIHZhciBfRHVyYXRpb24kZnJvbU1pbGxpcztcblxuICAgIHJldHVybiAoX0R1cmF0aW9uJGZyb21NaWxsaXMgPSBEdXJhdGlvbi5mcm9tTWlsbGlzKHJlbWFpbmluZ01pbGxpcywgb3B0cykpLnNoaWZ0VG8uYXBwbHkoX0R1cmF0aW9uJGZyb21NaWxsaXMsIGxvd2VyT3JkZXJVbml0cykucGx1cyhkdXJhdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uO1xuICB9XG59XG5cbnZhciBNSVNTSU5HX0ZUUCA9ICdtaXNzaW5nIEludGwuRGF0ZVRpbWVGb3JtYXQuZm9ybWF0VG9QYXJ0cyBzdXBwb3J0JztcblxuZnVuY3Rpb24gaW50VW5pdChyZWdleCkge1xuICB2YXIgcG9zdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZnVuY3Rpb24gKGkpIHtcbiAgICByZXR1cm4gaTtcbiAgfTtcblxuICByZXR1cm4geyByZWdleDogcmVnZXgsIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmKSB7XG4gICAgICB2YXIgcyA9IF9yZWZbMF07XG4gICAgICByZXR1cm4gcG9zdChwYXJzZUludChzKSk7XG4gICAgfSB9O1xufVxuXG5mdW5jdGlvbiBmaXhMaXN0UmVnZXgocykge1xuICAvLyBtYWtlIGRvdHMgb3B0aW9uYWwgYW5kIGFsc28gbWFrZSB0aGVtIGxpdGVyYWxcbiAgcmV0dXJuIHMucmVwbGFjZSgvXFwuLywgJ1xcXFwuPycpO1xufVxuXG5mdW5jdGlvbiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSB7XG4gIHJldHVybiBzLnJlcGxhY2UoL1xcLi8sICcnKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBvbmVPZihzdHJpbmdzLCBzdGFydEluZGV4KSB7XG4gIGlmIChzdHJpbmdzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZ2V4OiBSZWdFeHAoc3RyaW5ncy5tYXAoZml4TGlzdFJlZ2V4KS5qb2luKCd8JykpLFxuICAgICAgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYyKSB7XG4gICAgICAgIHZhciBzID0gX3JlZjJbMF07XG4gICAgICAgIHJldHVybiBzdHJpbmdzLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHJldHVybiBzdHJpcEluc2Vuc2l0aXZpdGllcyhzKSA9PT0gc3RyaXBJbnNlbnNpdGl2aXRpZXMoaSk7XG4gICAgICAgIH0pICsgc3RhcnRJbmRleDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIG9mZnNldChyZWdleCwgZ3JvdXBzKSB7XG4gIHJldHVybiB7IHJlZ2V4OiByZWdleCwgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWYzKSB7XG4gICAgICB2YXIgaCA9IF9yZWYzWzFdLFxuICAgICAgICAgIG0gPSBfcmVmM1syXTtcbiAgICAgIHJldHVybiBzaWduZWRPZmZzZXQoaCwgbSk7XG4gICAgfSwgZ3JvdXBzOiBncm91cHMgfTtcbn1cblxuZnVuY3Rpb24gc2ltcGxlKHJlZ2V4KSB7XG4gIHJldHVybiB7IHJlZ2V4OiByZWdleCwgZGVzZXI6IGZ1bmN0aW9uIGRlc2VyKF9yZWY0KSB7XG4gICAgICB2YXIgcyA9IF9yZWY0WzBdO1xuICAgICAgcmV0dXJuIHM7XG4gICAgfSB9O1xufVxuXG5mdW5jdGlvbiB1bml0Rm9yVG9rZW4odG9rZW4sIGxvYykge1xuICB2YXIgb25lID0gL1xcZC8sXG4gICAgICB0d28gPSAvXFxkezJ9LyxcbiAgICAgIHRocmVlID0gL1xcZHszfS8sXG4gICAgICBmb3VyID0gL1xcZHs0fS8sXG4gICAgICBvbmVPclR3byA9IC9cXGR7MSwyfS8sXG4gICAgICBvbmVUb1RocmVlID0gL1xcZHsxLDN9LyxcbiAgICAgIHR3b1RvRm91ciA9IC9cXGR7Miw0fS8sXG4gICAgICBsaXRlcmFsID0gZnVuY3Rpb24gbGl0ZXJhbCh0KSB7XG4gICAgcmV0dXJuIHsgcmVnZXg6IFJlZ0V4cCh0LnZhbCksIGRlc2VyOiBmdW5jdGlvbiBkZXNlcihfcmVmNSkge1xuICAgICAgICB2YXIgcyA9IF9yZWY1WzBdO1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0sIGxpdGVyYWw6IHRydWUgfTtcbiAgfSxcbiAgICAgIHVuaXRhdGUgPSBmdW5jdGlvbiB1bml0YXRlKHQpIHtcbiAgICBpZiAodG9rZW4ubGl0ZXJhbCkge1xuICAgICAgcmV0dXJuIGxpdGVyYWwodCk7XG4gICAgfVxuICAgIHN3aXRjaCAodC52YWwpIHtcbiAgICAgIC8vIGVyYVxuICAgICAgY2FzZSAnRyc6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2MuZXJhcygnc2hvcnQnLCBmYWxzZSksIDApO1xuICAgICAgY2FzZSAnR0cnOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLmVyYXMoJ2xvbmcnLCBmYWxzZSksIDApO1xuICAgICAgLy8geWVhcnNcbiAgICAgIGNhc2UgJ3knOlxuICAgICAgICByZXR1cm4gaW50VW5pdCgvXFxkezEsNn0vKTtcbiAgICAgIGNhc2UgJ3l5JzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICBjYXNlICd5eXl5JzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQoZm91cik7XG4gICAgICBjYXNlICd5eXl5eSc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KC9cXGR7NCw2fS8pO1xuICAgICAgY2FzZSAneXl5eXl5JzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQoL1xcZHs2fS8pO1xuICAgICAgLy8gbW9udGhzXG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoJ3Nob3J0JywgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tb250aHMoJ2xvbmcnLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLm1vbnRocygnc2hvcnQnLCB0cnVlLCBmYWxzZSksIDEpO1xuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICAgIHJldHVybiBvbmVPZihsb2MubW9udGhzKCdsb25nJywgdHJ1ZSwgZmFsc2UpLCAxKTtcbiAgICAgIC8vIGRhdGVzXG4gICAgICBjYXNlICdkJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgY2FzZSAnZGQnOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgLy8gb3JkaW5hbHNcbiAgICAgIGNhc2UgJ28nOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVUb1RocmVlKTtcbiAgICAgIGNhc2UgJ29vbyc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHRocmVlKTtcbiAgICAgIC8vIHRpbWVcbiAgICAgIGNhc2UgJ0hIJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICBjYXNlICdoaCc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICBjYXNlICdoJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lT3JUd28pO1xuICAgICAgY2FzZSAnbW0nOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0d28pO1xuICAgICAgY2FzZSAnbSc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgIGNhc2UgJ3MnOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmVPclR3byk7XG4gICAgICBjYXNlICdzcyc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KHR3byk7XG4gICAgICBjYXNlICdTJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQob25lVG9UaHJlZSk7XG4gICAgICBjYXNlICdTU1MnOlxuICAgICAgICByZXR1cm4gaW50VW5pdCh0aHJlZSk7XG4gICAgICBjYXNlICd1JzpcbiAgICAgICAgcmV0dXJuIHNpbXBsZSgvXFxkezEsOX0vKTtcbiAgICAgIC8vIG1lcmlkaWVtXG4gICAgICBjYXNlICdhJzpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy5tZXJpZGllbXMoKSwgMCk7XG4gICAgICAvLyB3ZWVrWWVhciAoaylcbiAgICAgIGNhc2UgJ2tra2snOlxuICAgICAgICByZXR1cm4gaW50VW5pdChmb3VyKTtcbiAgICAgIGNhc2UgJ2trJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvVG9Gb3VyLCB1bnRydW5jYXRlWWVhcik7XG4gICAgICAvLyB3ZWVrTnVtYmVyIChXKVxuICAgICAgY2FzZSAnVyc6XG4gICAgICAgIHJldHVybiBpbnRVbml0KG9uZU9yVHdvKTtcbiAgICAgIGNhc2UgJ1dXJzpcbiAgICAgICAgcmV0dXJuIGludFVuaXQodHdvKTtcbiAgICAgIC8vIHdlZWtkYXlzXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gaW50VW5pdChvbmUpO1xuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygnc2hvcnQnLCBmYWxzZSwgZmFsc2UpLCAxKTtcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCdsb25nJywgZmFsc2UsIGZhbHNlKSwgMSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gb25lT2YobG9jLndlZWtkYXlzKCdzaG9ydCcsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgICAgcmV0dXJuIG9uZU9mKGxvYy53ZWVrZGF5cygnbG9uZycsIHRydWUsIGZhbHNlKSwgMSk7XG4gICAgICAvLyBvZmZzZXQvem9uZVxuICAgICAgY2FzZSAnWic6XG4gICAgICBjYXNlICdaWic6XG4gICAgICAgIHJldHVybiBvZmZzZXQoLyhbKy1dXFxkezEsMn0pKD86OihcXGR7Mn0pKT8vLCAyKTtcbiAgICAgIGNhc2UgJ1paWic6XG4gICAgICAgIHJldHVybiBvZmZzZXQoLyhbKy1dXFxkezEsMn0pKFxcZHsyfSk/LywgMik7XG4gICAgICAvLyB3ZSBkb24ndCBzdXBwb3J0IFpaWlogKFBTVCkgb3IgWlpaWlogKFBhY2lmaWMgU3RhbmRhcmQgVGltZSkgaW4gcGFyc2luZ1xuICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBoYXZlIGFueSB3YXkgdG8gZmlndXJlIG91dCB3aGF0IHRoZXkgYXJlXG4gICAgICBjYXNlICd6JzpcbiAgICAgICAgcmV0dXJuIHNpbXBsZSgvW0EtWmEtel9dezEsMjU2fVxcL1tBLVphLXpfXXsxLDI1Nn0vKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsaXRlcmFsKHQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgdW5pdCA9IHVuaXRhdGUodG9rZW4pIHx8IHtcbiAgICBpbnZhbGlkUmVhc29uOiBNSVNTSU5HX0ZUUFxuICB9O1xuXG4gIHVuaXQudG9rZW4gPSB0b2tlbjtcblxuICByZXR1cm4gdW5pdDtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZWdleCh1bml0cykge1xuICB2YXIgcmUgPSB1bml0cy5tYXAoZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gdS5yZWdleDtcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChmLCByKSB7XG4gICAgcmV0dXJuIGYgKyAnKCcgKyByLnNvdXJjZSArICcpJztcbiAgfSwgJycpO1xuICByZXR1cm4gWydeJyArIHJlICsgJyQnLCB1bml0c107XG59XG5cbmZ1bmN0aW9uIG1hdGNoKGlucHV0LCByZWdleCwgaGFuZGxlcnMpIHtcbiAgdmFyIG1hdGNoZXMgPSBpbnB1dC5tYXRjaChyZWdleCk7XG5cbiAgaWYgKG1hdGNoZXMpIHtcbiAgICB2YXIgYWxsID0ge307XG4gICAgdmFyIG1hdGNoSW5kZXggPSAxO1xuICAgIGZvciAodmFyIGkgaW4gaGFuZGxlcnMpIHtcbiAgICAgIGlmIChoYW5kbGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICB2YXIgaCA9IGhhbmRsZXJzW2ldLFxuICAgICAgICAgICAgZ3JvdXBzID0gaC5ncm91cHMgPyBoLmdyb3VwcyArIDEgOiAxO1xuICAgICAgICBpZiAoIWgubGl0ZXJhbCAmJiBoLnRva2VuKSB7XG4gICAgICAgICAgYWxsW2gudG9rZW4udmFsWzBdXSA9IGguZGVzZXIobWF0Y2hlcy5zbGljZShtYXRjaEluZGV4LCBtYXRjaEluZGV4ICsgZ3JvdXBzKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hJbmRleCArPSBncm91cHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWF0Y2hlcywgYWxsXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW21hdGNoZXMsIHt9XTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUZyb21NYXRjaGVzKG1hdGNoZXMpIHtcbiAgdmFyIHRvRmllbGQgPSBmdW5jdGlvbiB0b0ZpZWxkKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnUyc6XG4gICAgICAgIHJldHVybiAnbWlsbGlzZWNvbmQnO1xuICAgICAgY2FzZSAncyc6XG4gICAgICAgIHJldHVybiAnc2Vjb25kJztcbiAgICAgIGNhc2UgJ20nOlxuICAgICAgICByZXR1cm4gJ21pbnV0ZSc7XG4gICAgICBjYXNlICdoJzpcbiAgICAgIGNhc2UgJ0gnOlxuICAgICAgICByZXR1cm4gJ2hvdXInO1xuICAgICAgY2FzZSAnZCc6XG4gICAgICAgIHJldHVybiAnZGF5JztcbiAgICAgIGNhc2UgJ28nOlxuICAgICAgICByZXR1cm4gJ29yZGluYWwnO1xuICAgICAgY2FzZSAnTCc6XG4gICAgICBjYXNlICdNJzpcbiAgICAgICAgcmV0dXJuICdtb250aCc7XG4gICAgICBjYXNlICd5JzpcbiAgICAgICAgcmV0dXJuICd5ZWFyJztcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiAnd2Vla2RheSc7XG4gICAgICBjYXNlICdXJzpcbiAgICAgICAgcmV0dXJuICd3ZWVrTnVtYmVyJztcbiAgICAgIGNhc2UgJ2snOlxuICAgICAgICByZXR1cm4gJ3dlZWtZZWFyJztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICB2YXIgem9uZSA9IHZvaWQgMDtcbiAgaWYgKCFpc1VuZGVmaW5lZChtYXRjaGVzLlopKSB7XG4gICAgem9uZSA9IG5ldyBGaXhlZE9mZnNldFpvbmUobWF0Y2hlcy5aKTtcbiAgfSBlbHNlIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy56KSkge1xuICAgIHpvbmUgPSBuZXcgSUFOQVpvbmUobWF0Y2hlcy56KTtcbiAgfSBlbHNlIHtcbiAgICB6b25lID0gbnVsbDtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy5oKSkge1xuICAgIGlmIChtYXRjaGVzLmggPCAxMiAmJiBtYXRjaGVzLmEgPT09IDEpIHtcbiAgICAgIG1hdGNoZXMuaCArPSAxMjtcbiAgICB9IGVsc2UgaWYgKG1hdGNoZXMuaCA9PT0gMTIgJiYgbWF0Y2hlcy5hID09PSAwKSB7XG4gICAgICBtYXRjaGVzLmggPSAwO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtYXRjaGVzLkcgPT09IDAgJiYgbWF0Y2hlcy55KSB7XG4gICAgbWF0Y2hlcy55ID0gLW1hdGNoZXMueTtcbiAgfVxuXG4gIGlmICghaXNVbmRlZmluZWQobWF0Y2hlcy51KSkge1xuICAgIG1hdGNoZXMuUyA9IHBhcnNlTWlsbGlzKG1hdGNoZXMudSk7XG4gIH1cblxuICB2YXIgdmFscyA9IE9iamVjdC5rZXlzKG1hdGNoZXMpLnJlZHVjZShmdW5jdGlvbiAociwgaykge1xuICAgIHZhciBmID0gdG9GaWVsZChrKTtcbiAgICBpZiAoZikge1xuICAgICAgcltmXSA9IG1hdGNoZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIHI7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gW3ZhbHMsIHpvbmVdO1xufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIHZhciB0b2tlbnMgPSBGb3JtYXR0ZXIucGFyc2VGb3JtYXQoZm9ybWF0KSxcbiAgICAgIHVuaXRzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiB1bml0Rm9yVG9rZW4odCwgbG9jYWxlKTtcbiAgfSksXG4gICAgICBkaXNxdWFsaWZ5aW5nVW5pdCA9IHVuaXRzLmZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gdC5pbnZhbGlkUmVhc29uO1xuICB9KTtcblxuICBpZiAoZGlzcXVhbGlmeWluZ1VuaXQpIHtcbiAgICByZXR1cm4geyBpbnB1dDogaW5wdXQsIHRva2VuczogdG9rZW5zLCBpbnZhbGlkUmVhc29uOiBkaXNxdWFsaWZ5aW5nVW5pdC5pbnZhbGlkUmVhc29uIH07XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9idWlsZFJlZ2V4ID0gYnVpbGRSZWdleCh1bml0cyksXG4gICAgICAgIHJlZ2V4U3RyaW5nID0gX2J1aWxkUmVnZXhbMF0sXG4gICAgICAgIGhhbmRsZXJzID0gX2J1aWxkUmVnZXhbMV0sXG4gICAgICAgIHJlZ2V4ID0gUmVnRXhwKHJlZ2V4U3RyaW5nLCAnaScpLFxuICAgICAgICBfbWF0Y2ggPSBtYXRjaChpbnB1dCwgcmVnZXgsIGhhbmRsZXJzKSxcbiAgICAgICAgcmF3TWF0Y2hlcyA9IF9tYXRjaFswXSxcbiAgICAgICAgbWF0Y2hlcyA9IF9tYXRjaFsxXSxcbiAgICAgICAgX3JlZjYgPSBtYXRjaGVzID8gZGF0ZVRpbWVGcm9tTWF0Y2hlcyhtYXRjaGVzKSA6IFtudWxsLCBudWxsXSxcbiAgICAgICAgcmVzdWx0ID0gX3JlZjZbMF0sXG4gICAgICAgIHpvbmUgPSBfcmVmNlsxXTtcblxuICAgIHJldHVybiB7IGlucHV0OiBpbnB1dCwgdG9rZW5zOiB0b2tlbnMsIHJlZ2V4OiByZWdleCwgcmF3TWF0Y2hlczogcmF3TWF0Y2hlcywgbWF0Y2hlczogbWF0Y2hlcywgcmVzdWx0OiByZXN1bHQsIHpvbmU6IHpvbmUgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZUZyb21Ub2tlbnMobG9jYWxlLCBpbnB1dCwgZm9ybWF0KSB7XG4gIHZhciBfZXhwbGFpbkZyb21Ub2tlbnMgPSBleHBsYWluRnJvbVRva2Vucyhsb2NhbGUsIGlucHV0LCBmb3JtYXQpLFxuICAgICAgcmVzdWx0ID0gX2V4cGxhaW5Gcm9tVG9rZW5zLnJlc3VsdCxcbiAgICAgIHpvbmUgPSBfZXhwbGFpbkZyb21Ub2tlbnMuem9uZSxcbiAgICAgIGludmFsaWRSZWFzb24gPSBfZXhwbGFpbkZyb21Ub2tlbnMuaW52YWxpZFJlYXNvbjtcblxuICByZXR1cm4gW3Jlc3VsdCwgem9uZSwgaW52YWxpZFJlYXNvbl07XG59XG5cbnZhciBub25MZWFwTGFkZGVyID0gWzAsIDMxLCA1OSwgOTAsIDEyMCwgMTUxLCAxODEsIDIxMiwgMjQzLCAyNzMsIDMwNCwgMzM0XSxcbiAgICBsZWFwTGFkZGVyID0gWzAsIDMxLCA2MCwgOTEsIDEyMSwgMTUyLCAxODIsIDIxMywgMjQ0LCAyNzQsIDMwNSwgMzM1XTtcblxuZnVuY3Rpb24gZGF5T2ZXZWVrKHllYXIsIG1vbnRoLCBkYXkpIHtcbiAgdmFyIGpzID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhciwgbW9udGggLSAxLCBkYXkpKS5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGpzID09PSAwID8gNyA6IGpzO1xufVxuXG5mdW5jdGlvbiBsYXN0V2Vla051bWJlcih3ZWVrWWVhcikge1xuICB2YXIgcDEgPSAod2Vla1llYXIgKyBNYXRoLmZsb29yKHdlZWtZZWFyIC8gNCkgLSBNYXRoLmZsb29yKHdlZWtZZWFyIC8gMTAwKSArIE1hdGguZmxvb3Iod2Vla1llYXIgLyA0MDApKSAlIDcsXG4gICAgICBsYXN0ID0gd2Vla1llYXIgLSAxLFxuICAgICAgcDIgPSAobGFzdCArIE1hdGguZmxvb3IobGFzdCAvIDQpIC0gTWF0aC5mbG9vcihsYXN0IC8gMTAwKSArIE1hdGguZmxvb3IobGFzdCAvIDQwMCkpICUgNztcbiAgcmV0dXJuIHAxID09PSA0IHx8IHAyID09PSAzID8gNTMgOiA1Mjtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZU9yZGluYWwoeWVhciwgbW9udGgsIGRheSkge1xuICByZXR1cm4gZGF5ICsgKGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcilbbW9udGggLSAxXTtcbn1cblxuZnVuY3Rpb24gdW5jb21wdXRlT3JkaW5hbCh5ZWFyLCBvcmRpbmFsKSB7XG4gIHZhciB0YWJsZSA9IGlzTGVhcFllYXIoeWVhcikgPyBsZWFwTGFkZGVyIDogbm9uTGVhcExhZGRlcixcbiAgICAgIG1vbnRoMCA9IHRhYmxlLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBpIDwgb3JkaW5hbDtcbiAgfSksXG4gICAgICBkYXkgPSBvcmRpbmFsIC0gdGFibGVbbW9udGgwXTtcbiAgcmV0dXJuIHsgbW9udGg6IG1vbnRoMCArIDEsIGRheTogZGF5IH07XG59XG5cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBncmVnb3JpYW5Ub1dlZWsoZ3JlZ09iaikge1xuICB2YXIgeWVhciA9IGdyZWdPYmoueWVhcixcbiAgICAgIG1vbnRoID0gZ3JlZ09iai5tb250aCxcbiAgICAgIGRheSA9IGdyZWdPYmouZGF5LFxuICAgICAgb3JkaW5hbCA9IGNvbXB1dGVPcmRpbmFsKHllYXIsIG1vbnRoLCBkYXkpLFxuICAgICAgd2Vla2RheSA9IGRheU9mV2Vlayh5ZWFyLCBtb250aCwgZGF5KTtcblxuXG4gIHZhciB3ZWVrTnVtYmVyID0gTWF0aC5mbG9vcigob3JkaW5hbCAtIHdlZWtkYXkgKyAxMCkgLyA3KSxcbiAgICAgIHdlZWtZZWFyID0gdm9pZCAwO1xuXG4gIGlmICh3ZWVrTnVtYmVyIDwgMSkge1xuICAgIHdlZWtZZWFyID0geWVhciAtIDE7XG4gICAgd2Vla051bWJlciA9IGxhc3RXZWVrTnVtYmVyKHdlZWtZZWFyKTtcbiAgfSBlbHNlIGlmICh3ZWVrTnVtYmVyID4gbGFzdFdlZWtOdW1iZXIoeWVhcikpIHtcbiAgICB3ZWVrWWVhciA9IHllYXIgKyAxO1xuICAgIHdlZWtOdW1iZXIgPSAxO1xuICB9IGVsc2Uge1xuICAgIHdlZWtZZWFyID0geWVhcjtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHsgd2Vla1llYXI6IHdlZWtZZWFyLCB3ZWVrTnVtYmVyOiB3ZWVrTnVtYmVyLCB3ZWVrZGF5OiB3ZWVrZGF5IH0sIHRpbWVPYmplY3QoZ3JlZ09iaikpO1xufVxuXG5mdW5jdGlvbiB3ZWVrVG9HcmVnb3JpYW4od2Vla0RhdGEpIHtcbiAgdmFyIHdlZWtZZWFyID0gd2Vla0RhdGEud2Vla1llYXIsXG4gICAgICB3ZWVrTnVtYmVyID0gd2Vla0RhdGEud2Vla051bWJlcixcbiAgICAgIHdlZWtkYXkgPSB3ZWVrRGF0YS53ZWVrZGF5LFxuICAgICAgd2Vla2RheU9mSmFuNCA9IGRheU9mV2Vlayh3ZWVrWWVhciwgMSwgNCksXG4gICAgICB5ZWFySW5EYXlzID0gZGF5c0luWWVhcih3ZWVrWWVhcik7XG5cbiAgdmFyIG9yZGluYWwgPSB3ZWVrTnVtYmVyICogNyArIHdlZWtkYXkgLSB3ZWVrZGF5T2ZKYW40IC0gMyxcbiAgICAgIHllYXIgPSB2b2lkIDA7XG5cbiAgaWYgKG9yZGluYWwgPCAxKSB7XG4gICAgeWVhciA9IHdlZWtZZWFyIC0gMTtcbiAgICBvcmRpbmFsICs9IGRheXNJblllYXIoeWVhcik7XG4gIH0gZWxzZSBpZiAob3JkaW5hbCA+IHllYXJJbkRheXMpIHtcbiAgICB5ZWFyID0gd2Vla1llYXIgKyAxO1xuICAgIG9yZGluYWwgLT0gZGF5c0luWWVhcih5ZWFyKTtcbiAgfSBlbHNlIHtcbiAgICB5ZWFyID0gd2Vla1llYXI7XG4gIH1cblxuICB2YXIgX3VuY29tcHV0ZU9yZGluYWwgPSB1bmNvbXB1dGVPcmRpbmFsKHllYXIsIG9yZGluYWwpLFxuICAgICAgbW9udGggPSBfdW5jb21wdXRlT3JkaW5hbC5tb250aCxcbiAgICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsLmRheTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IHllYXI6IHllYXIsIG1vbnRoOiBtb250aCwgZGF5OiBkYXkgfSwgdGltZU9iamVjdCh3ZWVrRGF0YSkpO1xufVxuXG5mdW5jdGlvbiBncmVnb3JpYW5Ub09yZGluYWwoZ3JlZ0RhdGEpIHtcbiAgdmFyIHllYXIgPSBncmVnRGF0YS55ZWFyLFxuICAgICAgbW9udGggPSBncmVnRGF0YS5tb250aCxcbiAgICAgIGRheSA9IGdyZWdEYXRhLmRheSxcbiAgICAgIG9yZGluYWwgPSBjb21wdXRlT3JkaW5hbCh5ZWFyLCBtb250aCwgZGF5KTtcblxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHsgeWVhcjogeWVhciwgb3JkaW5hbDogb3JkaW5hbCB9LCB0aW1lT2JqZWN0KGdyZWdEYXRhKSk7XG59XG5cbmZ1bmN0aW9uIG9yZGluYWxUb0dyZWdvcmlhbihvcmRpbmFsRGF0YSkge1xuICB2YXIgeWVhciA9IG9yZGluYWxEYXRhLnllYXIsXG4gICAgICBvcmRpbmFsID0gb3JkaW5hbERhdGEub3JkaW5hbCxcbiAgICAgIF91bmNvbXB1dGVPcmRpbmFsMiA9IHVuY29tcHV0ZU9yZGluYWwoeWVhciwgb3JkaW5hbCksXG4gICAgICBtb250aCA9IF91bmNvbXB1dGVPcmRpbmFsMi5tb250aCxcbiAgICAgIGRheSA9IF91bmNvbXB1dGVPcmRpbmFsMi5kYXk7XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyB5ZWFyOiB5ZWFyLCBtb250aDogbW9udGgsIGRheTogZGF5IH0sIHRpbWVPYmplY3Qob3JkaW5hbERhdGEpKTtcbn1cblxuZnVuY3Rpb24gaGFzSW52YWxpZFdlZWtEYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNOdW1iZXIob2JqLndlZWtZZWFyKSxcbiAgICAgIHZhbGlkV2VlayA9IG51bWJlckJldHdlZW4ob2JqLndlZWtOdW1iZXIsIDEsIGxhc3RXZWVrTnVtYmVyKG9iai53ZWVrWWVhcikpLFxuICAgICAgdmFsaWRXZWVrZGF5ID0gbnVtYmVyQmV0d2VlbihvYmoud2Vla2RheSwgMSwgNyk7XG5cbiAgaWYgKCF2YWxpZFllYXIpIHtcbiAgICByZXR1cm4gJ3dlZWtZZWFyIG91dCBvZiByYW5nZSc7XG4gIH0gZWxzZSBpZiAoIXZhbGlkV2Vlaykge1xuICAgIHJldHVybiAnd2VlayBvdXQgb2YgcmFuZ2UnO1xuICB9IGVsc2UgaWYgKCF2YWxpZFdlZWtkYXkpIHtcbiAgICByZXR1cm4gJ3dlZWtkYXkgb3V0IG9mIHJhbmdlJztcbiAgfSBlbHNlIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFzSW52YWxpZE9yZGluYWxEYXRhKG9iaikge1xuICB2YXIgdmFsaWRZZWFyID0gaXNOdW1iZXIob2JqLnllYXIpLFxuICAgICAgdmFsaWRPcmRpbmFsID0gbnVtYmVyQmV0d2VlbihvYmoub3JkaW5hbCwgMSwgZGF5c0luWWVhcihvYmoueWVhcikpO1xuXG4gIGlmICghdmFsaWRZZWFyKSB7XG4gICAgcmV0dXJuICd5ZWFyIG91dCBvZiByYW5nZSc7XG4gIH0gZWxzZSBpZiAoIXZhbGlkT3JkaW5hbCkge1xuICAgIHJldHVybiAnb3JkaW5hbCBvdXQgb2YgcmFuZ2UnO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHtcbiAgdmFyIHZhbGlkWWVhciA9IGlzTnVtYmVyKG9iai55ZWFyKSxcbiAgICAgIHZhbGlkTW9udGggPSBudW1iZXJCZXR3ZWVuKG9iai5tb250aCwgMSwgMTIpLFxuICAgICAgdmFsaWREYXkgPSBudW1iZXJCZXR3ZWVuKG9iai5kYXksIDEsIGRheXNJbk1vbnRoKG9iai55ZWFyLCBvYmoubW9udGgpKTtcblxuICBpZiAoIXZhbGlkWWVhcikge1xuICAgIHJldHVybiAneWVhciBvdXQgb2YgcmFuZ2UnO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1vbnRoKSB7XG4gICAgcmV0dXJuICdtb250aCBvdXQgb2YgcmFuZ2UnO1xuICB9IGVsc2UgaWYgKCF2YWxpZERheSkge1xuICAgIHJldHVybiAnZGF5IG91dCBvZiByYW5nZSc7XG4gIH0gZWxzZSByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhc0ludmFsaWRUaW1lRGF0YShvYmopIHtcbiAgdmFyIHZhbGlkSG91ciA9IG51bWJlckJldHdlZW4ob2JqLmhvdXIsIDAsIDIzKSxcbiAgICAgIHZhbGlkTWludXRlID0gbnVtYmVyQmV0d2VlbihvYmoubWludXRlLCAwLCA1OSksXG4gICAgICB2YWxpZFNlY29uZCA9IG51bWJlckJldHdlZW4ob2JqLnNlY29uZCwgMCwgNTkpLFxuICAgICAgdmFsaWRNaWxsaXNlY29uZCA9IG51bWJlckJldHdlZW4ob2JqLm1pbGxpc2Vjb25kLCAwLCA5OTkpO1xuXG4gIGlmICghdmFsaWRIb3VyKSB7XG4gICAgcmV0dXJuICdob3VyIG91dCBvZiByYW5nZSc7XG4gIH0gZWxzZSBpZiAoIXZhbGlkTWludXRlKSB7XG4gICAgcmV0dXJuICdtaW51dGUgb3V0IG9mIHJhbmdlJztcbiAgfSBlbHNlIGlmICghdmFsaWRTZWNvbmQpIHtcbiAgICByZXR1cm4gJ3NlY29uZCBvdXQgb2YgcmFuZ2UnO1xuICB9IGVsc2UgaWYgKCF2YWxpZE1pbGxpc2Vjb25kKSB7XG4gICAgcmV0dXJuICdtaWxsaXNlY29uZCBvdXQgb2YgcmFuZ2UnO1xuICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgSU5WQUxJRCQyID0gJ0ludmFsaWQgRGF0ZVRpbWUnLFxuICAgIElOVkFMSURfSU5QVVQgPSAnaW52YWxpZCBpbnB1dCcsXG4gICAgVU5TVVBQT1JURURfWk9ORSA9ICd1bnN1cHBvcnRlZCB6b25lJyxcbiAgICBVTlBBUlNBQkxFJDEgPSAndW5wYXJzYWJsZSc7XG5cbi8vIHdlIGNhY2hlIHdlZWsgZGF0YSBvbiB0aGUgRFQgb2JqZWN0IGFuZCB0aGlzIGludGVybWVkaWF0ZXMgdGhlIGNhY2hlXG5mdW5jdGlvbiBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKGR0KSB7XG4gIGlmIChkdC53ZWVrRGF0YSA9PT0gbnVsbCkge1xuICAgIGR0LndlZWtEYXRhID0gZ3JlZ29yaWFuVG9XZWVrKGR0LmMpO1xuICB9XG4gIHJldHVybiBkdC53ZWVrRGF0YTtcbn1cblxuLy8gY2xvbmUgcmVhbGx5IG1lYW5zLCBcIm1ha2UgYSBuZXcgb2JqZWN0IHdpdGggdGhlc2UgbW9kaWZpY2F0aW9uc1wiLiBhbGwgXCJzZXR0ZXJzXCIgcmVhbGx5IHVzZSB0aGlzXG4vLyB0byBjcmVhdGUgYSBuZXcgb2JqZWN0IHdoaWxlIG9ubHkgY2hhbmdpbmcgc29tZSBvZiB0aGUgcHJvcGVydGllc1xuZnVuY3Rpb24gY2xvbmUkMShpbnN0LCBhbHRzKSB7XG4gIHZhciBjdXJyZW50ID0ge1xuICAgIHRzOiBpbnN0LnRzLFxuICAgIHpvbmU6IGluc3Quem9uZSxcbiAgICBjOiBpbnN0LmMsXG4gICAgbzogaW5zdC5vLFxuICAgIGxvYzogaW5zdC5sb2MsXG4gICAgaW52YWxpZFJlYXNvbjogaW5zdC5pbnZhbGlkUmVhc29uXG4gIH07XG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoT2JqZWN0LmFzc2lnbih7fSwgY3VycmVudCwgYWx0cywgeyBvbGQ6IGN1cnJlbnQgfSkpO1xufVxuXG4vLyBmaW5kIHRoZSByaWdodCBvZmZzZXQgYSBnaXZlbiBsb2NhbCB0aW1lLiBUaGUgbyBpbnB1dCBpcyBvdXIgZ3Vlc3MsIHdoaWNoIGRldGVybWluZXMgd2hpY2hcbi8vIG9mZnNldCB3ZSdsbCBwaWNrIGluIGFtYmlndW91cyBjYXNlcyAoZS5nLiB0aGVyZSBhcmUgdHdvIDMgQU1zIGIvYyBGYWxsYmFjayBEU1QpXG5mdW5jdGlvbiBmaXhPZmZzZXQobG9jYWxUUywgbywgdHopIHtcbiAgLy8gT3VyIFVUQyB0aW1lIGlzIGp1c3QgYSBndWVzcyBiZWNhdXNlIG91ciBvZmZzZXQgaXMganVzdCBhIGd1ZXNzXG4gIHZhciB1dGNHdWVzcyA9IGxvY2FsVFMgLSBvICogNjAgKiAxMDAwO1xuXG4gIC8vIFRlc3Qgd2hldGhlciB0aGUgem9uZSBtYXRjaGVzIHRoZSBvZmZzZXQgZm9yIHRoaXMgdHNcbiAgdmFyIG8yID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcblxuICAvLyBJZiBzbywgb2Zmc2V0IGRpZG4ndCBjaGFuZ2UgYW5kIHdlJ3JlIGRvbmVcbiAgaWYgKG8gPT09IG8yKSB7XG4gICAgcmV0dXJuIFt1dGNHdWVzcywgb107XG4gIH1cblxuICAvLyBJZiBub3QsIGNoYW5nZSB0aGUgdHMgYnkgdGhlIGRpZmZlcmVuY2UgaW4gdGhlIG9mZnNldFxuICB1dGNHdWVzcyAtPSAobzIgLSBvKSAqIDYwICogMTAwMDtcblxuICAvLyBJZiB0aGF0IGdpdmVzIHVzIHRoZSBsb2NhbCB0aW1lIHdlIHdhbnQsIHdlJ3JlIGRvbmVcbiAgdmFyIG8zID0gdHoub2Zmc2V0KHV0Y0d1ZXNzKTtcbiAgaWYgKG8yID09PSBvMykge1xuICAgIHJldHVybiBbdXRjR3Vlc3MsIG8yXTtcbiAgfVxuXG4gIC8vIElmIGl0J3MgZGlmZmVyZW50LCB3ZSdyZSBpbiBhIGhvbGUgdGltZS4gVGhlIG9mZnNldCBoYXMgY2hhbmdlZCwgYnV0IHRoZSB3ZSBkb24ndCBhZGp1c3QgdGhlIHRpbWVcbiAgcmV0dXJuIFtsb2NhbFRTIC0gTWF0aC5taW4obzIsIG8zKSAqIDYwICogMTAwMCwgTWF0aC5tYXgobzIsIG8zKV07XG59XG5cbi8vIGNvbnZlcnQgYW4gZXBvY2ggdGltZXN0YW1wIGludG8gYSBjYWxlbmRhciBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gb2Zmc2V0XG5mdW5jdGlvbiB0c1RvT2JqKHRzLCBvZmZzZXQpIHtcbiAgdHMgKz0gb2Zmc2V0ICogNjAgKiAxMDAwO1xuXG4gIHZhciBkID0gbmV3IERhdGUodHMpO1xuXG4gIHJldHVybiB7XG4gICAgeWVhcjogZC5nZXRVVENGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBkLmdldFVUQ01vbnRoKCkgKyAxLFxuICAgIGRheTogZC5nZXRVVENEYXRlKCksXG4gICAgaG91cjogZC5nZXRVVENIb3VycygpLFxuICAgIG1pbnV0ZTogZC5nZXRVVENNaW51dGVzKCksXG4gICAgc2Vjb25kOiBkLmdldFVUQ1NlY29uZHMoKSxcbiAgICBtaWxsaXNlY29uZDogZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICB9O1xufVxuXG4vLyBjb3ZlcnQgYSBjYWxlbmRhciBvYmplY3QgdG8gYSBsb2NhbCB0aW1lc3RhbXAgKGVwb2NoLCBidXQgd2l0aCB0aGUgb2Zmc2V0IGJha2VkIGluKVxuZnVuY3Rpb24gb2JqVG9Mb2NhbFRTKG9iaikge1xuICB2YXIgZCA9IERhdGUuVVRDKG9iai55ZWFyLCBvYmoubW9udGggLSAxLCBvYmouZGF5LCBvYmouaG91ciwgb2JqLm1pbnV0ZSwgb2JqLnNlY29uZCwgb2JqLm1pbGxpc2Vjb25kKTtcblxuICAvLyBqYXZhc2NyaXB0IGlzIHN0dXBpZCBhbmQgaSBoYXRlIGl0XG4gIGlmIChvYmoueWVhciA8IDEwMCAmJiBvYmoueWVhciA+PSAwKSB7XG4gICAgZCA9IG5ldyBEYXRlKGQpO1xuICAgIGQuc2V0VVRDRnVsbFllYXIob2JqLnllYXIpO1xuICB9XG4gIHJldHVybiArZDtcbn1cblxuLy8gY29udmVydCBhIGNhbGVuZGFyIG9iamVjdCB0byBhIGVwb2NoIHRpbWVzdGFtcFxuZnVuY3Rpb24gb2JqVG9UUyhvYmosIG9mZnNldCwgem9uZSkge1xuICByZXR1cm4gZml4T2Zmc2V0KG9ialRvTG9jYWxUUyhvYmopLCBvZmZzZXQsIHpvbmUpO1xufVxuXG4vLyBjcmVhdGUgYSBuZXcgRFQgaW5zdGFuY2UgYnkgYWRkaW5nIGEgZHVyYXRpb24sIGFkanVzdGluZyBmb3IgRFNUc1xuZnVuY3Rpb24gYWRqdXN0VGltZShpbnN0LCBkdXIpIHtcbiAgdmFyIG9QcmUgPSBpbnN0Lm8sXG4gICAgICB5ZWFyID0gaW5zdC5jLnllYXIgKyBkdXIueWVhcnMsXG4gICAgICBtb250aCA9IGluc3QuYy5tb250aCArIGR1ci5tb250aHMgKyBkdXIucXVhcnRlcnMgKiAzLFxuICAgICAgYyA9IE9iamVjdC5hc3NpZ24oe30sIGluc3QuYywge1xuICAgIHllYXI6IHllYXIsXG4gICAgbW9udGg6IG1vbnRoLFxuICAgIGRheTogTWF0aC5taW4oaW5zdC5jLmRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKSArIGR1ci5kYXlzICsgZHVyLndlZWtzICogN1xuICB9KSxcbiAgICAgIG1pbGxpc1RvQWRkID0gRHVyYXRpb24uZnJvbU9iamVjdCh7XG4gICAgaG91cnM6IGR1ci5ob3VycyxcbiAgICBtaW51dGVzOiBkdXIubWludXRlcyxcbiAgICBzZWNvbmRzOiBkdXIuc2Vjb25kcyxcbiAgICBtaWxsaXNlY29uZHM6IGR1ci5taWxsaXNlY29uZHNcbiAgfSkuYXMoJ21pbGxpc2Vjb25kcycpLFxuICAgICAgbG9jYWxUUyA9IG9ialRvTG9jYWxUUyhjKTtcblxuICB2YXIgX2ZpeE9mZnNldCA9IGZpeE9mZnNldChsb2NhbFRTLCBvUHJlLCBpbnN0LnpvbmUpLFxuICAgICAgdHMgPSBfZml4T2Zmc2V0WzBdLFxuICAgICAgbyA9IF9maXhPZmZzZXRbMV07XG5cbiAgaWYgKG1pbGxpc1RvQWRkICE9PSAwKSB7XG4gICAgdHMgKz0gbWlsbGlzVG9BZGQ7XG4gICAgLy8gdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWQgdGhlIG9mZnNldCBieSBnb2luZyBvdmVyIGEgRFNULCBidXQgd2Ugd2FudCB0byBrZWVwIHRoZSB0cyB0aGUgc2FtZVxuICAgIG8gPSBpbnN0LnpvbmUub2Zmc2V0KHRzKTtcbiAgfVxuXG4gIHJldHVybiB7IHRzOiB0cywgbzogbyB9O1xufVxuXG4vLyBoZWxwZXIgdXNlZnVsIGluIHR1cm5pbmcgdGhlIHJlc3VsdHMgb2YgcGFyc2luZyBpbnRvIHJlYWwgZGF0ZXNcbi8vIGJ5IGhhbmRsaW5nIHRoZSB6b25lIG9wdGlvbnNcbmZ1bmN0aW9uIHBhcnNlRGF0YVRvRGF0ZVRpbWUocGFyc2VkLCBwYXJzZWRab25lLCBvcHRzKSB7XG4gIHZhciBzZXRab25lID0gb3B0cy5zZXRab25lLFxuICAgICAgem9uZSA9IG9wdHMuem9uZTtcblxuICBpZiAocGFyc2VkICYmIE9iamVjdC5rZXlzKHBhcnNlZCkubGVuZ3RoICE9PSAwKSB7XG4gICAgdmFyIGludGVycHJldGF0aW9uWm9uZSA9IHBhcnNlZFpvbmUgfHwgem9uZSxcbiAgICAgICAgaW5zdCA9IERhdGVUaW1lLmZyb21PYmplY3QoT2JqZWN0LmFzc2lnbihwYXJzZWQsIG9wdHMsIHtcbiAgICAgIHpvbmU6IGludGVycHJldGF0aW9uWm9uZVxuICAgIH0pKTtcbiAgICByZXR1cm4gc2V0Wm9uZSA/IGluc3QgOiBpbnN0LnNldFpvbmUoem9uZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoVU5QQVJTQUJMRSQxKTtcbiAgfVxufVxuXG4vLyBpZiB5b3Ugd2FudCB0byBvdXRwdXQgYSB0ZWNobmljYWwgZm9ybWF0IChlLmcuIFJGQyAyODIyKSwgdGhpcyBoZWxwZXJcbi8vIGhlbHBzIGhhbmRsZSB0aGUgZGV0YWlsc1xuZnVuY3Rpb24gdG9UZWNoRm9ybWF0KGR0LCBmb3JtYXQpIHtcbiAgcmV0dXJuIGR0LmlzVmFsaWQgPyBGb3JtYXR0ZXIuY3JlYXRlKExvY2FsZS5jcmVhdGUoJ2VuLVVTJyksIHsgZm9yY2VTaW1wbGU6IHRydWUgfSkuZm9ybWF0RGF0ZVRpbWVGcm9tU3RyaW5nKGR0LCBmb3JtYXQpIDogbnVsbDtcbn1cblxuLy8gdGVjaG5pY2FsIHRpbWUgZm9ybWF0cyAoZS5nLiB0aGUgdGltZSBwYXJ0IG9mIElTTyA4NjAxKSwgdGFrZSBzb21lIG9wdGlvbnNcbi8vIGFuZCB0aGlzIGNvbW1vbml6ZXMgdGhlaXIgaGFuZGxpbmdcbmZ1bmN0aW9uIHRvVGVjaFRpbWVGb3JtYXQoZHQsIF9yZWYpIHtcbiAgdmFyIF9yZWYkc3VwcHJlc3NTZWNvbmRzID0gX3JlZi5zdXBwcmVzc1NlY29uZHMsXG4gICAgICBzdXBwcmVzc1NlY29uZHMgPSBfcmVmJHN1cHByZXNzU2Vjb25kcyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzU2Vjb25kcyxcbiAgICAgIF9yZWYkc3VwcHJlc3NNaWxsaXNlYyA9IF9yZWYuc3VwcHJlc3NNaWxsaXNlY29uZHMsXG4gICAgICBzdXBwcmVzc01pbGxpc2Vjb25kcyA9IF9yZWYkc3VwcHJlc3NNaWxsaXNlYyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHN1cHByZXNzTWlsbGlzZWMsXG4gICAgICBfcmVmJGluY2x1ZGVPZmZzZXQgPSBfcmVmLmluY2x1ZGVPZmZzZXQsXG4gICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZiRpbmNsdWRlT2Zmc2V0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRpbmNsdWRlT2Zmc2V0LFxuICAgICAgX3JlZiRpbmNsdWRlWm9uZSA9IF9yZWYuaW5jbHVkZVpvbmUsXG4gICAgICBpbmNsdWRlWm9uZSA9IF9yZWYkaW5jbHVkZVpvbmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRpbmNsdWRlWm9uZSxcbiAgICAgIF9yZWYkc3BhY2Vab25lID0gX3JlZi5zcGFjZVpvbmUsXG4gICAgICBzcGFjZVpvbmUgPSBfcmVmJHNwYWNlWm9uZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHNwYWNlWm9uZTtcblxuICB2YXIgZm10ID0gJ0hIOm1tJztcblxuICBpZiAoIXN1cHByZXNzU2Vjb25kcyB8fCBkdC5zZWNvbmQgIT09IDAgfHwgZHQubWlsbGlzZWNvbmQgIT09IDApIHtcbiAgICBmbXQgKz0gJzpzcyc7XG4gICAgaWYgKCFzdXBwcmVzc01pbGxpc2Vjb25kcyB8fCBkdC5taWxsaXNlY29uZCAhPT0gMCkge1xuICAgICAgZm10ICs9ICcuU1NTJztcbiAgICB9XG4gIH1cblxuICBpZiAoKGluY2x1ZGVab25lIHx8IGluY2x1ZGVPZmZzZXQpICYmIHNwYWNlWm9uZSkge1xuICAgIGZtdCArPSAnICc7XG4gIH1cblxuICBpZiAoaW5jbHVkZVpvbmUpIHtcbiAgICBmbXQgKz0gJ3onO1xuICB9IGVsc2UgaWYgKGluY2x1ZGVPZmZzZXQpIHtcbiAgICBmbXQgKz0gJ1paJztcbiAgfVxuXG4gIHJldHVybiB0b1RlY2hGb3JtYXQoZHQsIGZtdCk7XG59XG5cbi8vIGRlZmF1bHRzIGZvciB1bnNwZWNpZmllZCB1bml0cyBpbiB0aGUgc3VwcG9ydGVkIGNhbGVuZGFyc1xudmFyIGRlZmF1bHRVbml0VmFsdWVzID0ge1xuICBtb250aDogMSxcbiAgZGF5OiAxLFxuICBob3VyOiAwLFxuICBtaW51dGU6IDAsXG4gIHNlY29uZDogMCxcbiAgbWlsbGlzZWNvbmQ6IDBcbn0sXG4gICAgZGVmYXVsdFdlZWtVbml0VmFsdWVzID0ge1xuICB3ZWVrTnVtYmVyOiAxLFxuICB3ZWVrZGF5OiAxLFxuICBob3VyOiAwLFxuICBtaW51dGU6IDAsXG4gIHNlY29uZDogMCxcbiAgbWlsbGlzZWNvbmQ6IDBcbn0sXG4gICAgZGVmYXVsdE9yZGluYWxVbml0VmFsdWVzID0ge1xuICBvcmRpbmFsOiAxLFxuICBob3VyOiAwLFxuICBtaW51dGU6IDAsXG4gIHNlY29uZDogMCxcbiAgbWlsbGlzZWNvbmQ6IDBcbn07XG5cbi8vIFVuaXRzIGluIHRoZSBzdXBwb3J0ZWQgY2FsZW5kYXJzLCBzb3J0ZWQgYnkgYmlnbmVzc1xudmFyIG9yZGVyZWRVbml0cyQxID0gWyd5ZWFyJywgJ21vbnRoJywgJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLCAnbWlsbGlzZWNvbmQnXSxcbiAgICBvcmRlcmVkV2Vla1VuaXRzID0gWyd3ZWVrWWVhcicsICd3ZWVrTnVtYmVyJywgJ3dlZWtkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgJ21pbGxpc2Vjb25kJ10sXG4gICAgb3JkZXJlZE9yZGluYWxVbml0cyA9IFsneWVhcicsICdvcmRpbmFsJywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsICdtaWxsaXNlY29uZCddO1xuXG4vLyBzdGFuZGFyZGl6ZSBjYXNlIGFuZCBwbHVyYWxpdHkgaW4gdW5pdHNcbmZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXQodW5pdCkge1xuICB2YXIgaWdub3JlVW5rbm93biA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIG5vcm1hbGl6ZWQgPSB7XG4gICAgeWVhcjogJ3llYXInLFxuICAgIHllYXJzOiAneWVhcicsXG4gICAgbW9udGg6ICdtb250aCcsXG4gICAgbW9udGhzOiAnbW9udGgnLFxuICAgIGRheTogJ2RheScsXG4gICAgZGF5czogJ2RheScsXG4gICAgaG91cjogJ2hvdXInLFxuICAgIGhvdXJzOiAnaG91cicsXG4gICAgbWludXRlOiAnbWludXRlJyxcbiAgICBtaW51dGVzOiAnbWludXRlJyxcbiAgICBzZWNvbmQ6ICdzZWNvbmQnLFxuICAgIHNlY29uZHM6ICdzZWNvbmQnLFxuICAgIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmQnLFxuICAgIG1pbGxpc2Vjb25kczogJ21pbGxpc2Vjb25kJyxcbiAgICB3ZWVrZGF5OiAnd2Vla2RheScsXG4gICAgd2Vla2RheXM6ICd3ZWVrZGF5JyxcbiAgICB3ZWVrbnVtYmVyOiAnd2Vla051bWJlcicsXG4gICAgd2Vla3NudW1iZXI6ICd3ZWVrTnVtYmVyJyxcbiAgICB3ZWVrbnVtYmVyczogJ3dlZWtOdW1iZXInLFxuICAgIHdlZWt5ZWFyOiAnd2Vla1llYXInLFxuICAgIHdlZWt5ZWFyczogJ3dlZWtZZWFyJyxcbiAgICBvcmRpbmFsOiAnb3JkaW5hbCdcbiAgfVt1bml0ID8gdW5pdC50b0xvd2VyQ2FzZSgpIDogdW5pdF07XG5cbiAgaWYgKCFpZ25vcmVVbmtub3duICYmICFub3JtYWxpemVkKSB0aHJvdyBuZXcgSW52YWxpZFVuaXRFcnJvcih1bml0KTtcblxuICByZXR1cm4gbm9ybWFsaXplZDtcbn1cblxuLy8gdGhpcyBpcyBhIGR1bWJlZCBkb3duIHZlcnNpb24gb2YgZnJvbU9iamVjdCgpIHRoYXQgcnVucyBhYm91dCA2MCUgZmFzdGVyXG4vLyBidXQgZG9lc24ndCBkbyBhbnkgdmFsaWRhdGlvbiwgbWFrZXMgYSBidW5jaCBvZiBhc3N1bXB0aW9ucyBhYm91dCB3aGF0IHVuaXRzXG4vLyBhcmUgcHJlc2VudCwgYW5kIHNvIG9uLlxuZnVuY3Rpb24gcXVpY2tEVChvYmosIHpvbmUpIHtcbiAgLy8gYXNzdW1lIHdlIGhhdmUgdGhlIGhpZ2hlci1vcmRlciB1bml0c1xuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBvcmRlcmVkVW5pdHMkMSwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgIF9yZWYyID0gX2l0ZXJhdG9yW19pKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICBfcmVmMiA9IF9pLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciB1ID0gX3JlZjI7XG5cbiAgICBpZiAoaXNVbmRlZmluZWQob2JqW3VdKSkge1xuICAgICAgb2JqW3VdID0gZGVmYXVsdFVuaXRWYWx1ZXNbdV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGludmFsaWRSZWFzb24gPSBoYXNJbnZhbGlkR3JlZ29yaWFuRGF0YShvYmopIHx8IGhhc0ludmFsaWRUaW1lRGF0YShvYmopO1xuICBpZiAoaW52YWxpZFJlYXNvbikge1xuICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWRSZWFzb24pO1xuICB9XG5cbiAgdmFyIHRzTm93ID0gU2V0dGluZ3Mubm93KCksXG4gICAgICBvZmZzZXRQcm92aXMgPSB6b25lLm9mZnNldCh0c05vdyksXG4gICAgICBfb2JqVG9UUyA9IG9ialRvVFMob2JqLCBvZmZzZXRQcm92aXMsIHpvbmUpLFxuICAgICAgdHMgPSBfb2JqVG9UU1swXSxcbiAgICAgIG8gPSBfb2JqVG9UU1sxXTtcblxuXG4gIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgIHRzOiB0cyxcbiAgICB6b25lOiB6b25lLFxuICAgIG86IG9cbiAgfSk7XG59XG5cbi8qKlxuICogQSBEYXRlVGltZSBpcyBhbiBpbW11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgcmVwcmVzZW50aW5nIGEgc3BlY2lmaWMgZGF0ZSBhbmQgdGltZSBhbmQgYWNjb21wYW55aW5nIG1ldGhvZHMuIEl0IGNvbnRhaW5zIGNsYXNzIGFuZCBpbnN0YW5jZSBtZXRob2RzIGZvciBjcmVhdGluZywgcGFyc2luZywgaW50ZXJyb2dhdGluZywgdHJhbnNmb3JtaW5nLCBhbmQgZm9ybWF0dGluZyB0aGVtLlxuICpcbiAqIEEgRGF0ZVRpbWUgY29tcHJpc2VzIG9mOlxuICogKiBBIHRpbWVzdGFtcC4gRWFjaCBEYXRlVGltZSBpbnN0YW5jZSByZWZlcnMgdG8gYSBzcGVjaWZpYyBtaWxsaXNlY29uZCBvZiB0aGUgVW5peCBlcG9jaC5cbiAqICogQSB0aW1lIHpvbmUuIEVhY2ggaW5zdGFuY2UgaXMgY29uc2lkZXJlZCBpbiB0aGUgY29udGV4dCBvZiBhIHNwZWNpZmljIHpvbmUgKGJ5IGRlZmF1bHQgdGhlIGxvY2FsIHN5c3RlbSdzIHpvbmUpLlxuICogKiBDb25maWd1cmF0aW9uIHByb3BlcnRpZXMgdGhhdCBlZmZlY3QgaG93IG91dHB1dCBzdHJpbmdzIGFyZSBmb3JtYXR0ZWQsIHN1Y2ggYXMgYGxvY2FsZWAsIGBudW1iZXJpbmdTeXN0ZW1gLCBhbmQgYG91dHB1dENhbGVuZGFyYC5cbiAqXG4gKiBIZXJlIGlzIGEgYnJpZWYgb3ZlcnZpZXcgb2YgdGhlIG1vc3QgY29tbW9ubHkgdXNlZCBmdW5jdGlvbmFsaXR5IGl0IHByb3ZpZGVzOlxuICpcbiAqICogKipDcmVhdGlvbioqOiBUbyBjcmVhdGUgYSBEYXRlVGltZSBmcm9tIGl0cyBjb21wb25lbnRzLCB1c2Ugb25lIG9mIGl0cyBmYWN0b3J5IGNsYXNzIG1ldGhvZHM6IHtAbGluayBsb2NhbH0sIHtAbGluayB1dGN9LCBhbmQgKG1vc3QgZmxleGlibHkpIHtAbGluayBmcm9tT2JqZWN0fS4gVG8gY3JlYXRlIG9uZSBmcm9tIGEgc3RhbmRhcmQgc3RyaW5nIGZvcm1hdCwgdXNlIHtAbGluayBmcm9tSVNPfSwge0BsaW5rIGZyb21IVFRQfSwgYW5kIHtAbGluayBmcm9tUkZDMjgyMn0uIFRvIGNyZWF0ZSBvbmUgZnJvbSBhIGN1c3RvbSBzdHJpbmcgZm9ybWF0LCB1c2Uge0BsaW5rIGZyb21Gb3JtYXR9LiBUbyBjcmVhdGUgb25lIGZyb20gYSBuYXRpdmUgSlMgZGF0ZSwgdXNlIHtAbGluayBmcm9tSlNEYXRlfS5cbiAqICogKipHcmVnb3JpYW4gY2FsZW5kYXIgYW5kIHRpbWUqKjogVG8gZXhhbWluZSB0aGUgR3JlZ29yaWFuIHByb3BlcnRpZXMgb2YgYSBEYXRlVGltZSBpbmRpdmlkdWFsbHkgKGkuZSBhcyBvcHBvc2VkIHRvIGNvbGxlY3RpdmVseSB0aHJvdWdoIHtAbGluayB0b09iamVjdH0pLCB1c2UgdGhlIHtAbGluayB5ZWFyfSwge0BsaW5rIG1vbnRofSxcbiAqIHtAbGluayBkYXl9LCB7QGxpbmsgaG91cn0sIHtAbGluayBtaW51dGV9LCB7QGxpbmsgc2Vjb25kfSwge0BsaW5rIG1pbGxpc2Vjb25kfSBhY2Nlc3NvcnMuXG4gKiAqICoqV2VlayBjYWxlbmRhcioqOiBGb3IgSVNPIHdlZWsgY2FsZW5kYXIgYXR0cmlidXRlcywgc2VlIHRoZSB7QGxpbmsgd2Vla1llYXJ9LCB7QGxpbmsgd2Vla051bWJlcn0sIGFuZCB7QGxpbmsgd2Vla2RheX0gYWNjZXNzb3JzLlxuICogKiAqKkNvbmZpZ3VyYXRpb24qKiBTZWUgdGhlIHtAbGluayBsb2NhbGV9IGFuZCB7QGxpbmsgbnVtYmVyaW5nU3lzdGVtfSBhY2Nlc3NvcnMuXG4gKiAqICoqVHJhbnNmb3JtYXRpb24qKjogVG8gdHJhbnNmb3JtIHRoZSBEYXRlVGltZSBpbnRvIG90aGVyIERhdGVUaW1lcywgdXNlIHtAbGluayBzZXR9LCB7QGxpbmsgcmVjb25maWd1cmV9LCB7QGxpbmsgc2V0Wm9uZX0sIHtAbGluayBzZXRMb2NhbGV9LCB7QGxpbmsgcGx1c30sIHtAbGluayBtaW51c30sIHtAbGluayBlbmRPZn0sIHtAbGluayBzdGFydE9mfSwge0BsaW5rIHRvVVRDfSwgYW5kIHtAbGluayB0b0xvY2FsfS5cbiAqICogKipPdXRwdXQqKjogVG8gY29udmVydCB0aGUgRGF0ZVRpbWUgdG8gb3RoZXIgcmVwcmVzZW50YXRpb25zLCB1c2UgdGhlIHtAbGluayB0b0pTT059LCB7QGxpbmsgdG9JU099LCB7QGxpbmsgdG9IVFRQfSwge0BsaW5rIHRvT2JqZWN0fSwge0BsaW5rIHRvUkZDMjgyMn0sIHtAbGluayB0b1N0cmluZ30sIHtAbGluayB0b0xvY2FsZVN0cmluZ30sIHtAbGluayB0b0Zvcm1hdH0sIHtAbGluayB2YWx1ZU9mfSBhbmQge0BsaW5rIHRvSlNEYXRlfS5cbiAqXG4gKiBUaGVyZSdzIHBsZW50eSBvdGhlcnMgZG9jdW1lbnRlZCBiZWxvdy4gSW4gYWRkaXRpb24sIGZvciBtb3JlIGluZm9ybWF0aW9uIG9uIHN1YnRsZXIgdG9waWNzIGxpa2UgaW50ZXJuYXRpb25hbGl6YXRpb24sIHRpbWUgem9uZXMsIGFsdGVybmF0aXZlIGNhbGVuZGFycywgdmFsaWRpdHksIGFuZCBzbyBvbiwgc2VlIHRoZSBleHRlcm5hbCBkb2N1bWVudGF0aW9uLlxuICovXG5cbnZhciBEYXRlVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gRGF0ZVRpbWUoY29uZmlnKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRGF0ZVRpbWUpO1xuXG4gICAgdmFyIHpvbmUgPSBjb25maWcuem9uZSB8fCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSxcbiAgICAgICAgaW52YWxpZFJlYXNvbiA9IGNvbmZpZy5pbnZhbGlkUmVhc29uIHx8IChOdW1iZXIuaXNOYU4oY29uZmlnLnRzKSA/IElOVkFMSURfSU5QVVQgOiBudWxsKSB8fCAoIXpvbmUuaXNWYWxpZCA/IFVOU1VQUE9SVEVEX1pPTkUgOiBudWxsKTtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRzID0gaXNVbmRlZmluZWQoY29uZmlnLnRzKSA/IFNldHRpbmdzLm5vdygpIDogY29uZmlnLnRzO1xuXG4gICAgdmFyIGMgPSBudWxsLFxuICAgICAgICBvID0gbnVsbDtcbiAgICBpZiAoIWludmFsaWRSZWFzb24pIHtcbiAgICAgIHZhciB1bmNoYW5nZWQgPSBjb25maWcub2xkICYmIGNvbmZpZy5vbGQudHMgPT09IHRoaXMudHMgJiYgY29uZmlnLm9sZC56b25lLmVxdWFscyh6b25lKTtcbiAgICAgIGMgPSB1bmNoYW5nZWQgPyBjb25maWcub2xkLmMgOiB0c1RvT2JqKHRoaXMudHMsIHpvbmUub2Zmc2V0KHRoaXMudHMpKTtcbiAgICAgIG8gPSB1bmNoYW5nZWQgPyBjb25maWcub2xkLm8gOiB6b25lLm9mZnNldCh0aGlzLnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnpvbmUgPSB6b25lO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubG9jID0gY29uZmlnLmxvYyB8fCBMb2NhbGUuY3JlYXRlKCk7XG4gICAgLyoqXG4gICAgICogQGFjY2VzcyBwcml2YXRlXG4gICAgICovXG4gICAgdGhpcy5pbnZhbGlkID0gaW52YWxpZFJlYXNvbjtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLndlZWtEYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAYWNjZXNzIHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLmMgPSBjO1xuICAgIC8qKlxuICAgICAqIEBhY2Nlc3MgcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMubyA9IG87XG4gIH1cblxuICAvLyBDT05TVFJVQ1RcblxuICAvKipcbiAgICogQ3JlYXRlIGEgbG9jYWwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHllYXIgLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYGxvY2FsKClgIHdpdGggbm8gYXJndW1lbnRzKSwgdGhlIGN1cnJlbnQgdGltZSB3aWxsIGJlIHVzZWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttb250aD0xXSAtIFRoZSBtb250aCwgMS1pbmRleGVkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbZGF5PTFdIC0gVGhlIGRheSBvZiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtob3VyPTBdIC0gVGhlIGhvdXIgb2YgdGhlIGRheSwgaW4gMjQtaG91ciB0aW1lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWludXRlPTBdIC0gVGhlIG1pbnV0ZSBvZiB0aGUgaG91ciwgaS5lLiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbc2Vjb25kPTBdIC0gVGhlIHNlY29uZCBvZiB0aGUgbWludXRlLCBpLmUuIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgNTlcbiAgICogQHBhcmFtIHtudW1iZXJ9IFttaWxsaXNlY29uZD0wXSAtIFRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCBpLmUuIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgOTk5XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9+PiBub3dcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMykgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMDFUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIpICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDA6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1KSAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MDBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCkgICAgICAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTBcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNjc1XG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLmxvY2FsID0gZnVuY3Rpb24gbG9jYWwoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHsgdHM6IFNldHRpbmdzLm5vdygpIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVpY2tEVCh7XG4gICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIGhvdXI6IGhvdXIsXG4gICAgICAgIG1pbnV0ZTogbWludXRlLFxuICAgICAgICBzZWNvbmQ6IHNlY29uZCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgICB9LCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBpbiBVVENcbiAgICogQHBhcmFtIHtudW1iZXJ9IHllYXIgLSBUaGUgY2FsZW5kYXIgeWVhci4gSWYgb21pdHRlZCAoYXMgaW4sIGNhbGwgYHV0YygpYCB3aXRoIG5vIGFyZ3VtZW50cyksIHRoZSBjdXJyZW50IHRpbWUgd2lsbCBiZSB1c2VkXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbW9udGg9MV0gLSBUaGUgbW9udGgsIDEtaW5kZXhlZFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RheT0xXSAtIFRoZSBkYXkgb2YgdGhlIG1vbnRoXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbaG91cj0wXSAtIFRoZSBob3VyIG9mIHRoZSBkYXksIGluIDI0LWhvdXIgdGltZVxuICAgKiBAcGFyYW0ge251bWJlcn0gW21pbnV0ZT0wXSAtIFRoZSBtaW51dGUgb2YgdGhlIGhvdXIsIGkuZS4gYSBudW1iZXIgYmV0d2VlbiAwIGFuZCA1OVxuICAgKiBAcGFyYW0ge251bWJlcn0gW3NlY29uZD0wXSAtIFRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSwgaS5lLiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbbWlsbGlzZWNvbmQ9MF0gLSBUaGUgbWlsbGlzZWNvbmQgb2YgdGhlIHNlY29uZCwgaS5lLiBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDk5OVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL34+IG5vd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNykgICAgICAgICAgICAgICAgICAgICAgICAvL34+IDIwMTctMDEtMDFUMDA6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzKSAgICAgICAgICAgICAgICAgICAgIC8vfj4gMjAxNy0wMy0wMVQwMDowMDowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyKSAgICAgICAgICAgICAgICAgLy9+PiAyMDE3LTAzLTEyVDAwOjAwOjAwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUpICAgICAgICAgICAgICAvL34+IDIwMTctMDMtMTJUMDU6MDA6MDBaXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE3LCAzLCAxMiwgNSwgNDUpICAgICAgICAgIC8vfj4gMjAxNy0wMy0xMlQwNTo0NTowMFpcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTcsIDMsIDEyLCA1LCA0NSwgMTApICAgICAgLy9+PiAyMDE3LTAzLTEyVDA1OjQ1OjEwWlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNywgMywgMTIsIDUsIDQ1LCAxMCwgNzY1KSAvL34+IDIwMTctMDMtMTJUMDU6NDU6MTAuNjc1WlxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS51dGMgPSBmdW5jdGlvbiB1dGMoeWVhciwgbW9udGgsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kKSB7XG4gICAgaWYgKGlzVW5kZWZpbmVkKHllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGVUaW1lKHtcbiAgICAgICAgdHM6IFNldHRpbmdzLm5vdygpLFxuICAgICAgICB6b25lOiBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2VcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcXVpY2tEVCh7XG4gICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgICAgZGF5OiBkYXksXG4gICAgICAgIGhvdXI6IGhvdXIsXG4gICAgICAgIG1pbnV0ZTogbWludXRlLFxuICAgICAgICBzZWNvbmQ6IHNlY29uZCxcbiAgICAgICAgbWlsbGlzZWNvbmQ6IG1pbGxpc2Vjb25kXG4gICAgICB9LCBGaXhlZE9mZnNldFpvbmUudXRjSW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGFuIERhdGVUaW1lIGZyb20gYSBKYXZhc2NyaXB0IERhdGUgb2JqZWN0LiBVc2VzIHRoZSBkZWZhdWx0IHpvbmUuXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSAtIGEgSmF2YXNjcmlwdCBEYXRlIG9iamVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBmb3IgdGhlIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB0aGUgem9uZSB0byBwbGFjZSB0aGUgRGF0ZVRpbWUgaW50b1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS5mcm9tSlNEYXRlID0gZnVuY3Rpb24gZnJvbUpTRGF0ZShkYXRlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlVGltZSh7XG4gICAgICB0czogaXNEYXRlKGRhdGUpID8gZGF0ZS52YWx1ZU9mKCkgOiBOYU4sXG4gICAgICB6b25lOiBub3JtYWxpemVab25lKG9wdGlvbnMuem9uZSwgU2V0dGluZ3MuZGVmYXVsdFpvbmUpLFxuICAgICAgbG9jOiBMb2NhbGUuZnJvbU9iamVjdChvcHRpb25zKVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gRGF0ZVRpbWUgZnJvbSBhIGNvdW50IG9mIGVwb2NoIG1pbGxpc2Vjb25kcy4gVXNlcyB0aGUgZGVmYXVsdCB6b25lLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIC0gYSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHNpbmNlIDE5NzAgVVRDXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHRoZSB6b25lIHRvIHBsYWNlIHRoZSBEYXRlVGltZSBpbnRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVdIC0gYSBsb2NhbGUgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLmZyb21NaWxsaXMgPSBmdW5jdGlvbiBmcm9tTWlsbGlzKG1pbGxpc2Vjb25kcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IG1pbGxpc2Vjb25kcyxcbiAgICAgIHpvbmU6IG5vcm1hbGl6ZVpvbmUob3B0aW9ucy56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSksXG4gICAgICBsb2M6IExvY2FsZS5mcm9tT2JqZWN0KG9wdGlvbnMpXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbiBEYXRlVGltZSBmcm9tIGEgSmF2YXNjcmlwdCBvYmplY3Qgd2l0aCBrZXlzIGxpa2UgJ3llYXInIGFuZCAnaG91cicgd2l0aCByZWFzb25hYmxlIGRlZmF1bHRzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gdGhlIG9iamVjdCB0byBjcmVhdGUgdGhlIERhdGVUaW1lIGZyb21cbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai55ZWFyIC0gYSB5ZWFyLCBzdWNoIGFzIDE5ODdcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5tb250aCAtIGEgbW9udGgsIDEtMTJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5kYXkgLSBhIGRheSBvZiB0aGUgbW9udGgsIDEtMzEsIGRlcGVuZGluZyBvbiB0aGUgbW9udGhcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai5vcmRpbmFsIC0gZGF5IG9mIHRoZSB5ZWFyLCAxLTM2NSBvciAzNjZcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrWWVhciAtIGFuIElTTyB3ZWVrIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrTnVtYmVyIC0gYW4gSVNPIHdlZWsgbnVtYmVyLCBiZXR3ZWVuIDEgYW5kIDUyIG9yIDUzLCBkZXBlbmRpbmcgb24gdGhlIHllYXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9iai53ZWVrZGF5IC0gYW4gSVNPIHdlZWtkYXksIDEtNywgd2hlcmUgMSBpcyBNb25kYXkgYW5kIDcgaXMgU3VuZGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmouaG91ciAtIGhvdXIgb2YgdGhlIGRheSwgMC0yM1xuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLm1pbnV0ZSAtIG1pbnV0ZSBvZiB0aGUgaG91ciwgMC01OVxuICAgKiBAcGFyYW0ge251bWJlcn0gb2JqLnNlY29uZCAtIHNlY29uZCBvZiB0aGUgbWludXRlLCAwLTU5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBvYmoubWlsbGlzZWNvbmQgLSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kLCAwLTk5OVxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb2JqLnpvbmU9J2xvY2FsJ10gLSBpbnRlcnByZXQgdGhlIG51bWJlcnMgaW4gdGhlIGNvbnRleHQgb2YgYSBwYXJ0aWN1bGFyIHpvbmUuIENhbiB0YWtlIGFueSB2YWx1ZSB0YWtlbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gc2V0Wm9uZSgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb2JqLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvYmoubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIsIG1vbnRoOiA1LCBkYXk6IDI1fSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wNS0yNSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHllYXI6IDE5ODIgfSkudG9JU09EYXRlKCkgLy89PiAnMTk4Mi0wMS0wMVQwMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IGhvdXI6IDEwLCBtaW51dGU6IDI2LCBzZWNvbmQ6IDYgfSkgLy9+PiB0b2RheSBhdCAxMDoyNjowNlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tT2JqZWN0KHsgaG91cjogMTAsIG1pbnV0ZTogMjYsIHNlY29uZDogNiwgem9uZTogJ3V0YycgfSksXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2LCB6b25lOiAnbG9jYWwnIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21PYmplY3QoeyBob3VyOiAxMCwgbWludXRlOiAyNiwgc2Vjb25kOiA2LCB6b25lOiAnQW1lcmljYS9OZXdfWW9yaycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbU9iamVjdCh7IHdlZWtZZWFyOiAyMDE2LCB3ZWVrTnVtYmVyOiAyLCB3ZWVrZGF5OiAzIH0pLnRvSVNPRGF0ZSgpIC8vPT4gJzIwMTYtMDEtMTMnXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLmZyb21PYmplY3QgPSBmdW5jdGlvbiBmcm9tT2JqZWN0KG9iaikge1xuICAgIHZhciB6b25lVG9Vc2UgPSBub3JtYWxpemVab25lKG9iai56b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKCF6b25lVG9Vc2UuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoVU5TVVBQT1JURURfWk9ORSk7XG4gICAgfVxuXG4gICAgdmFyIHRzTm93ID0gU2V0dGluZ3Mubm93KCksXG4gICAgICAgIG9mZnNldFByb3ZpcyA9IHpvbmVUb1VzZS5vZmZzZXQodHNOb3cpLFxuICAgICAgICBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KG9iaiwgbm9ybWFsaXplVW5pdCwgdHJ1ZSksXG4gICAgICAgIGNvbnRhaW5zT3JkaW5hbCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpLFxuICAgICAgICBjb250YWluc0dyZWdvclllYXIgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC55ZWFyKSxcbiAgICAgICAgY29udGFpbnNHcmVnb3JNRCA9ICFpc1VuZGVmaW5lZChub3JtYWxpemVkLm1vbnRoKSB8fCAhaXNVbmRlZmluZWQobm9ybWFsaXplZC5kYXkpLFxuICAgICAgICBjb250YWluc0dyZWdvciA9IGNvbnRhaW5zR3JlZ29yWWVhciB8fCBjb250YWluc0dyZWdvck1ELFxuICAgICAgICBkZWZpbml0ZVdlZWtEZWYgPSBub3JtYWxpemVkLndlZWtZZWFyIHx8IG5vcm1hbGl6ZWQud2Vla051bWJlcixcbiAgICAgICAgbG9jID0gTG9jYWxlLmZyb21PYmplY3Qob2JqKTtcblxuICAgIC8vIGNhc2VzOlxuICAgIC8vIGp1c3QgYSB3ZWVrZGF5IC0+IHRoaXMgd2VlaydzIGluc3RhbmNlIG9mIHRoYXQgd2Vla2RheSwgbm8gd29ycmllc1xuICAgIC8vIChncmVnb3JpYW4gZGF0YSBvciBvcmRpbmFsKSArICh3ZWVrWWVhciBvciB3ZWVrTnVtYmVyKSAtPiBlcnJvclxuICAgIC8vIChncmVnb3JpYW4gbW9udGggb3IgZGF5KSArIG9yZGluYWwgLT4gZXJyb3JcbiAgICAvLyBvdGhlcndpc2UganVzdCB1c2Ugd2Vla3Mgb3Igb3JkaW5hbHMgb3IgZ3JlZ29yaWFuLCBkZXBlbmRpbmcgb24gd2hhdCdzIHNwZWNpZmllZFxuXG4gICAgaWYgKChjb250YWluc0dyZWdvciB8fCBjb250YWluc09yZGluYWwpICYmIGRlZmluaXRlV2Vla0RlZikge1xuICAgICAgdGhyb3cgbmV3IENvbmZsaWN0aW5nU3BlY2lmaWNhdGlvbkVycm9yKFwiQ2FuJ3QgbWl4IHdlZWtZZWFyL3dlZWtOdW1iZXIgdW5pdHMgd2l0aCB5ZWFyL21vbnRoL2RheSBvciBvcmRpbmFsc1wiKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbnNHcmVnb3JNRCAmJiBjb250YWluc09yZGluYWwpIHtcbiAgICAgIHRocm93IG5ldyBDb25mbGljdGluZ1NwZWNpZmljYXRpb25FcnJvcihcIkNhbid0IG1peCBvcmRpbmFsIGRhdGVzIHdpdGggbW9udGgvZGF5XCIpO1xuICAgIH1cblxuICAgIHZhciB1c2VXZWVrRGF0YSA9IGRlZmluaXRlV2Vla0RlZiB8fCBub3JtYWxpemVkLndlZWtkYXkgJiYgIWNvbnRhaW5zR3JlZ29yO1xuXG4gICAgLy8gY29uZmlndXJlIG91cnNlbHZlcyB0byBkZWFsIHdpdGggZ3JlZ29yaWFuIGRhdGVzIG9yIHdlZWsgc3R1ZmZcbiAgICB2YXIgdW5pdHMgPSB2b2lkIDAsXG4gICAgICAgIGRlZmF1bHRWYWx1ZXMgPSB2b2lkIDAsXG4gICAgICAgIG9iak5vdyA9IHRzVG9PYmoodHNOb3csIG9mZnNldFByb3Zpcyk7XG4gICAgaWYgKHVzZVdlZWtEYXRhKSB7XG4gICAgICB1bml0cyA9IG9yZGVyZWRXZWVrVW5pdHM7XG4gICAgICBkZWZhdWx0VmFsdWVzID0gZGVmYXVsdFdlZWtVbml0VmFsdWVzO1xuICAgICAgb2JqTm93ID0gZ3JlZ29yaWFuVG9XZWVrKG9iak5vdyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluc09yZGluYWwpIHtcbiAgICAgIHVuaXRzID0gb3JkZXJlZE9yZGluYWxVbml0cztcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0T3JkaW5hbFVuaXRWYWx1ZXM7XG4gICAgICBvYmpOb3cgPSBncmVnb3JpYW5Ub09yZGluYWwob2JqTm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdHMgPSBvcmRlcmVkVW5pdHMkMTtcbiAgICAgIGRlZmF1bHRWYWx1ZXMgPSBkZWZhdWx0VW5pdFZhbHVlcztcbiAgICB9XG5cbiAgICAvLyBzZXQgZGVmYXVsdCB2YWx1ZXMgZm9yIG1pc3Npbmcgc3R1ZmZcbiAgICB2YXIgZm91bmRGaXJzdCA9IGZhbHNlO1xuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSB1bml0cywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjM7XG5cbiAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYzID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjMgPSBfaTIudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciB1ID0gX3JlZjM7XG5cbiAgICAgIHZhciB2ID0gbm9ybWFsaXplZFt1XTtcbiAgICAgIGlmICghaXNVbmRlZmluZWQodikpIHtcbiAgICAgICAgZm91bmRGaXJzdCA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kRmlyc3QpIHtcbiAgICAgICAgbm9ybWFsaXplZFt1XSA9IGRlZmF1bHRWYWx1ZXNbdV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3JtYWxpemVkW3VdID0gb2JqTm93W3VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIHdlIGhhdmUgYXJlIGluIHJhbmdlXG4gICAgdmFyIGhpZ2hlck9yZGVySW52YWxpZCA9IHVzZVdlZWtEYXRhID8gaGFzSW52YWxpZFdlZWtEYXRhKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gaGFzSW52YWxpZE9yZGluYWxEYXRhKG5vcm1hbGl6ZWQpIDogaGFzSW52YWxpZEdyZWdvcmlhbkRhdGEobm9ybWFsaXplZCksXG4gICAgICAgIGludmFsaWRSZWFzb24gPSBoaWdoZXJPcmRlckludmFsaWQgfHwgaGFzSW52YWxpZFRpbWVEYXRhKG5vcm1hbGl6ZWQpO1xuXG4gICAgaWYgKGludmFsaWRSZWFzb24pIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKGludmFsaWRSZWFzb24pO1xuICAgIH1cblxuICAgIC8vIGNvbXB1dGUgdGhlIGFjdHVhbCB0aW1lXG4gICAgdmFyIGdyZWdvcmlhbiA9IHVzZVdlZWtEYXRhID8gd2Vla1RvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogY29udGFpbnNPcmRpbmFsID8gb3JkaW5hbFRvR3JlZ29yaWFuKG5vcm1hbGl6ZWQpIDogbm9ybWFsaXplZCxcbiAgICAgICAgX29ialRvVFMyID0gb2JqVG9UUyhncmVnb3JpYW4sIG9mZnNldFByb3Zpcywgem9uZVRvVXNlKSxcbiAgICAgICAgdHNGaW5hbCA9IF9vYmpUb1RTMlswXSxcbiAgICAgICAgb2Zmc2V0RmluYWwgPSBfb2JqVG9UUzJbMV0sXG4gICAgICAgIGluc3QgPSBuZXcgRGF0ZVRpbWUoe1xuICAgICAgdHM6IHRzRmluYWwsXG4gICAgICB6b25lOiB6b25lVG9Vc2UsXG4gICAgICBvOiBvZmZzZXRGaW5hbCxcbiAgICAgIGxvYzogbG9jXG4gICAgfSk7XG5cbiAgICAvLyBncmVnb3JpYW4gZGF0YSArIHdlZWtkYXkgc2VydmVzIG9ubHkgdG8gdmFsaWRhdGVcbiAgICBpZiAobm9ybWFsaXplZC53ZWVrZGF5ICYmIGNvbnRhaW5zR3JlZ29yICYmIG9iai53ZWVrZGF5ICE9PSBpbnN0LndlZWtkYXkpIHtcbiAgICAgIHJldHVybiBEYXRlVGltZS5pbnZhbGlkKCdtaXNtYXRjaGVkIHdlZWtkYXknKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdDtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhbiBJU08gODYwMSBzdHJpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgSVNPIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gdXNlIHRoaXMgem9uZSBpZiBubyBvZmZzZXQgaXMgc3BlY2lmaWVkIGluIHRoZSBpbnB1dCBzdHJpbmcgaXRzZWxmLiBXaWxsIGFsc28gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tSVNPKCcyMDE2LTA1LTI1VDA5OjA4OjM0LjEyMycpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzKzA2OjAwJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi0wNS0yNVQwOTowODozNC4xMjMrMDY6MDAnLCB7c2V0Wm9uZTogdHJ1ZX0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21JU08oJzIwMTYtMDUtMjVUMDk6MDg6MzQuMTIzJywge3pvbmU6ICd1dGMnfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUlTTygnMjAxNi1XMDUtNCcpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLmZyb21JU08gPSBmdW5jdGlvbiBmcm9tSVNPKHRleHQpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgX3BhcnNlSVNPRGF0ZSA9IHBhcnNlSVNPRGF0ZSh0ZXh0KSxcbiAgICAgICAgdmFscyA9IF9wYXJzZUlTT0RhdGVbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VJU09EYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gUkZDIDI4MjIgc3RyaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIFJGQyAyODIyIHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdG8gYWZmZWN0IHRoZSBjcmVhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ3xab25lfSBbb3B0cy56b25lPSdsb2NhbCddIC0gY29udmVydCB0aGUgdGltZSB0byB0aGlzIHpvbmUuIFNpbmNlIHRoZSBvZmZzZXQgaXMgYWx3YXlzIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSBmaXhlZC1vZmZzZXQgem9uZSBzcGVjaWZpZWQgaW4gdGhlIHN0cmluZyBpdHNlbGYsIGlmIGl0IHNwZWNpZmllcyBvbmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmxvY2FsZT0nZW4tVVMnXSAtIGEgbG9jYWxlIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRzLm91dHB1dENhbGVuZGFyIC0gdGhlIG91dHB1dCBjYWxlbmRhciB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0cy5udW1iZXJpbmdTeXN0ZW0gLSB0aGUgbnVtYmVyaW5nIHN5c3RlbSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjM6MTIgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVJGQzI4MjIoJ1R1ZSwgMjUgTm92IDIwMTYgMTM6MjM6MTIgKzA2MDAnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tUkZDMjgyMignMjUgTm92IDIwMTYgMTM6MjMgWicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLmZyb21SRkMyODIyID0gZnVuY3Rpb24gZnJvbVJGQzI4MjIodGV4dCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfcGFyc2VSRkMyODIyRGF0ZSA9IHBhcnNlUkZDMjgyMkRhdGUodGV4dCksXG4gICAgICAgIHZhbHMgPSBfcGFyc2VSRkMyODIyRGF0ZVswXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZVJGQzI4MjJEYXRlWzFdO1xuXG4gICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIERhdGVUaW1lIGZyb20gYW4gSFRUUCBoZWFkZXIgZGF0ZVxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9Qcm90b2NvbHMvcmZjMjYxNi9yZmMyNjE2LXNlYzMuaHRtbCNzZWMzLjMuMVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHRoZSBIVFRQIGhlYWRlciBkYXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSBjb252ZXJ0IHRoZSB0aW1lIHRvIHRoaXMgem9uZS4gU2luY2UgSFRUUCBkYXRlcyBhcmUgYWx3YXlzIGluIFVUQywgdGhpcyBoYXMgbm8gZWZmZWN0IG9uIHRoZSBpbnRlcnByZXRhdGlvbiBvZiBzdHJpbmcsIG1lcmVseSB0aGUgem9uZSB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGlzIGV4cHJlc3NlZCBpbi5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggdGhlIGZpeGVkLW9mZnNldCB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nLiBGb3IgSFRUUCBkYXRlcywgdGhpcyBpcyBhbHdheXMgVVRDLCBzbyB0aGlzIG9wdGlvbiBpcyBlcXVpdmFsZW50IHRvIHNldHRpbmcgdGhlIGB6b25lYCBvcHRpb24gdG8gJ3V0YycsIGJ1dCB0aGlzIG9wdGlvbiBpcyBpbmNsdWRlZCBmb3IgY29uc2lzdGVuY3kgd2l0aCBzaW1pbGFyIG1ldGhvZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSB0byBzZXQgb24gdGhlIHJlc3VsdGluZyBEYXRlVGltZSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1biwgMDYgTm92IDE5OTQgMDg6NDk6MzcgR01UJylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbUhUVFAoJ1N1bmRheSwgMDYtTm92LTk0IDA4OjQ5OjM3IEdNVCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21IVFRQKCdTdW4gTm92ICA2IDA4OjQ5OjM3IDE5OTQnKVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS5mcm9tSFRUUCA9IGZ1bmN0aW9uIGZyb21IVFRQKHRleHQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICB2YXIgX3BhcnNlSFRUUERhdGUgPSBwYXJzZUhUVFBEYXRlKHRleHQpLFxuICAgICAgICB2YWxzID0gX3BhcnNlSFRUUERhdGVbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VIVFRQRGF0ZVsxXTtcblxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBEYXRlVGltZSBmcm9tIGFuIGlucHV0IHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHRoZSBzdHJpbmcgaXMgZXhwZWN0ZWQgdG8gYmUgaW4gKHNlZSBkZXNjcmlwdGlvbilcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRvIGFmZmVjdCB0aGUgY3JlYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd8Wm9uZX0gW29wdGlvbnMuem9uZT0nbG9jYWwnXSAtIHVzZSB0aGlzIHpvbmUgaWYgbm8gb2Zmc2V0IGlzIHNwZWNpZmllZCBpbiB0aGUgaW5wdXQgc3RyaW5nIGl0c2VsZi4gV2lsbCBhbHNvIGNvbnZlcnQgdGhlIERhdGVUaW1lIHRvIHRoaXMgem9uZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnNldFpvbmU9ZmFsc2VdIC0gb3ZlcnJpZGUgdGhlIHpvbmUgd2l0aCBhIHpvbmUgc3BlY2lmaWVkIGluIHRoZSBzdHJpbmcgaXRzZWxmLCBpZiBpdCBzcGVjaWZpZXMgb25lXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGU9J2VuLVVTJ10gLSBhIGxvY2FsZSBzdHJpbmcgdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgRGF0ZVRpbWUgdG8gdGhpcyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtIC0gdGhlIG51bWJlcmluZyBzeXN0ZW0gdG8gdXNlIHdoZW4gcGFyc2luZy4gV2lsbCBhbHNvIHNldCB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIHRvIHRoaXMgbnVtYmVyaW5nIHN5c3RlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5vdXRwdXRDYWxlbmRhciAtIHRoZSBvdXRwdXQgY2FsZW5kYXIgdG8gc2V0IG9uIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWUgaW5zdGFuY2VcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUuZnJvbUZvcm1hdCA9IGZ1bmN0aW9uIGZyb21Gb3JtYXQodGV4dCwgZm10KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaWYgKGlzVW5kZWZpbmVkKHRleHQpIHx8IGlzVW5kZWZpbmVkKGZtdCkpIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignZnJvbUZvcm1hdCByZXF1aXJlcyBhbiBpbnB1dCBzdHJpbmcgYW5kIGEgZm9ybWF0Jyk7XG4gICAgfVxuXG4gICAgdmFyIF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlLFxuICAgICAgICBsb2NhbGUgPSBfb3B0aW9ucyRsb2NhbGUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfb3B0aW9ucyRsb2NhbGUsXG4gICAgICAgIF9vcHRpb25zJG51bWJlcmluZ1N5cyA9IG9wdGlvbnMubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW0gPSBfb3B0aW9ucyRudW1iZXJpbmdTeXMgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfb3B0aW9ucyRudW1iZXJpbmdTeXMsXG4gICAgICAgIGxvY2FsZVRvVXNlID0gTG9jYWxlLmZyb21PcHRzKHsgbG9jYWxlOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLCBkZWZhdWx0VG9FTjogdHJ1ZSB9KSxcbiAgICAgICAgX3BhcnNlRnJvbVRva2VucyA9IHBhcnNlRnJvbVRva2Vucyhsb2NhbGVUb1VzZSwgdGV4dCwgZm10KSxcbiAgICAgICAgdmFscyA9IF9wYXJzZUZyb21Ub2tlbnNbMF0sXG4gICAgICAgIHBhcnNlZFpvbmUgPSBfcGFyc2VGcm9tVG9rZW5zWzFdLFxuICAgICAgICBpbnZhbGlkUmVhc29uID0gX3BhcnNlRnJvbVRva2Vuc1syXTtcblxuICAgIGlmIChpbnZhbGlkUmVhc29uKSB7XG4gICAgICByZXR1cm4gRGF0ZVRpbWUuaW52YWxpZChpbnZhbGlkUmVhc29uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHBhcnNlRGF0YVRvRGF0ZVRpbWUodmFscywgcGFyc2VkWm9uZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2UgZnJvbUZvcm1hdCBpbnN0ZWFkXG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUuZnJvbVN0cmluZyA9IGZ1bmN0aW9uIGZyb21TdHJpbmcodGV4dCwgZm10KSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgcmV0dXJuIERhdGVUaW1lLmZyb21Gb3JtYXQodGV4dCwgZm10LCBvcHRzKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlIGEgRGF0ZVRpbWUgZnJvbSBhIFNRTCBkYXRlLCB0aW1lLCBvciBkYXRldGltZVxuICAgKiBEZWZhdWx0cyB0byBlbi1VUyBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkLCByZWdhcmRsZXNzIG9mIHRoZSBzeXN0ZW0ncyBsb2NhbGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSB0aGUgc3RyaW5nIHRvIHBhcnNlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0byBhZmZlY3QgdGhlIGNyZWF0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFtvcHRpb25zLnpvbmU9J2xvY2FsJ10gLSB1c2UgdGhpcyB6b25lIGlmIG5vIG9mZnNldCBpcyBzcGVjaWZpZWQgaW4gdGhlIGlucHV0IHN0cmluZyBpdHNlbGYuIFdpbGwgYWxzbyBjb252ZXJ0IHRoZSBEYXRlVGltZSB0byB0aGlzIHpvbmVcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5zZXRab25lPWZhbHNlXSAtIG92ZXJyaWRlIHRoZSB6b25lIHdpdGggYSB6b25lIHNwZWNpZmllZCBpbiB0aGUgc3RyaW5nIGl0c2VsZiwgaWYgaXQgc3BlY2lmaWVzIG9uZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlPSdlbi1VUyddIC0gYSBsb2NhbGUgc3RyaW5nIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIERhdGVUaW1lIHRvIHRoaXMgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLm51bWJlcmluZ1N5c3RlbSAtIHRoZSBudW1iZXJpbmcgc3lzdGVtIHRvIHVzZSB3aGVuIHBhcnNpbmcuIFdpbGwgYWxzbyBzZXQgdGhlIHJlc3VsdGluZyBEYXRlVGltZSB0byB0aGlzIG51bWJlcmluZyBzeXN0ZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMub3V0cHV0Q2FsZW5kYXIgLSB0aGUgb3V0cHV0IGNhbGVuZGFyIHRvIHNldCBvbiB0aGUgcmVzdWx0aW5nIERhdGVUaW1lIGluc3RhbmNlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0JylcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMjAxNy0wNS0xNSAwOToxMjozNC4zNDInKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiswNjowMCcpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyIEFtZXJpY2EvTG9zX0FuZ2VsZXMnKVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5mcm9tU1FMKCcyMDE3LTA1LTE1IDA5OjEyOjM0LjM0MiBBbWVyaWNhL0xvc19BbmdlbGVzJywgeyBzZXRab25lOiB0cnVlIH0pXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmZyb21TUUwoJzIwMTctMDUtMTUgMDk6MTI6MzQuMzQyJywgeyB6b25lOiAnQW1lcmljYS9Mb3NfQW5nZWxlcycgfSlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUuZnJvbVNRTCgnMDk6MTI6MzQuMzQyJylcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUuZnJvbVNRTCA9IGZ1bmN0aW9uIGZyb21TUUwodGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAgIHZhciBfcGFyc2VTUUwgPSBwYXJzZVNRTCh0ZXh0KSxcbiAgICAgICAgdmFscyA9IF9wYXJzZVNRTFswXSxcbiAgICAgICAgcGFyc2VkWm9uZSA9IF9wYXJzZVNRTFsxXTtcblxuICAgIHJldHVybiBwYXJzZURhdGFUb0RhdGVUaW1lKHZhbHMsIHBhcnNlZFpvbmUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gaW52YWxpZCBEYXRlVGltZS5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUuaW52YWxpZCA9IGZ1bmN0aW9uIGludmFsaWQocmVhc29uKSB7XG4gICAgaWYgKCFyZWFzb24pIHtcbiAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFcnJvcignbmVlZCB0byBzcGVjaWZ5IGEgcmVhc29uIHRoZSBEYXRlVGltZSBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIGlmIChTZXR0aW5ncy50aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWREYXRlVGltZUVycm9yKHJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZVRpbWUoeyBpbnZhbGlkUmVhc29uOiByZWFzb24gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIElORk9cblxuICAvKipcbiAgICogR2V0IHRoZSB2YWx1ZSBvZiB1bml0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIGEgdW5pdCBzdWNoIGFzICdtaW51dGUnIG9yICdkYXknXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnbW9udGgnKTsgLy89PiA3XG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDcsIDQpLmdldCgnZGF5Jyk7IC8vPT4gNFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldCQkMSh1bml0KSB7XG4gICAgcmV0dXJuIHRoaXNbdW5pdF07XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgd2hldGhlciB0aGUgRGF0ZVRpbWUgaXMgdmFsaWQuIEludmFsaWQgRGF0ZVRpbWVzIG9jY3VyIHdoZW46XG4gICAqICogVGhlIERhdGVUaW1lIHdhcyBjcmVhdGVkIGZyb20gaW52YWxpZCBjYWxlbmRhciBpbmZvcm1hdGlvbiwgc3VjaCBhcyB0aGUgMTN0aCBtb250aCBvciBGZWJydWFyeSAzMFxuICAgKiAqIFRoZSBEYXRlVGltZSB3YXMgY3JlYXRlZCBieSBhbiBvcGVyYXRpb24gb24gYW5vdGhlciBpbnZhbGlkIGRhdGVcbiAgICogQHR5cGUge2Jvb2xlYW59XG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHJlc29sdmVkIEludGwgb3B0aW9ucyBmb3IgdGhpcyBEYXRlVGltZS5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gdW5kZXJzdGFuZGluZyB0aGUgYmVoYXZpb3Igb2YgZm9ybWF0dGluZyBtZXRob2RzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIC0gdGhlIHNhbWUgb3B0aW9ucyBhcyB0b0xvY2FsZVN0cmluZ1xuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBEYXRlVGltZS5wcm90b3R5cGUucmVzb2x2ZWRMb2NhbGVPcHRzID0gZnVuY3Rpb24gcmVzb2x2ZWRMb2NhbGVPcHRzKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIHZhciBfRm9ybWF0dGVyJGNyZWF0ZSRyZXMgPSBGb3JtYXR0ZXIuY3JlYXRlKHRoaXMubG9jLmNsb25lKG9wdHMpLCBvcHRzKS5yZXNvbHZlZE9wdGlvbnModGhpcyksXG4gICAgICAgIGxvY2FsZSA9IF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcy5sb2NhbGUsXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9Gb3JtYXR0ZXIkY3JlYXRlJHJlcy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIGNhbGVuZGFyID0gX0Zvcm1hdHRlciRjcmVhdGUkcmVzLmNhbGVuZGFyO1xuXG4gICAgcmV0dXJuIHsgbG9jYWxlOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcjogY2FsZW5kYXIgfTtcbiAgfTtcblxuICAvLyBUUkFOU0ZPUk1cblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIFVUQy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKlxuICAgKiBFcXVpdmFsZW50IHRvIHtAbGluayBzZXRab25lfSgndXRjJylcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvZmZzZXQ9MF0gLSBvcHRpb25hbGx5LCBhbiBvZmZzZXQgZnJvbSBVVEMgaW4gbWludXRlc1xuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHM9e31dIC0gb3B0aW9ucyB0byBwYXNzIHRvIGBzZXRab25lKClgXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS50b1VUQyA9IGZ1bmN0aW9uIHRvVVRDKCkge1xuICAgIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IDA7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuc2V0Wm9uZShGaXhlZE9mZnNldFpvbmUuaW5zdGFuY2Uob2Zmc2V0KSwgb3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhlIERhdGVUaW1lJ3Mgem9uZSB0byB0aGUgaG9zdCdzIGxvY2FsIHpvbmUuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICpcbiAgICogRXF1aXZhbGVudCB0byBgc2V0Wm9uZSgnbG9jYWwnKWBcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvTG9jYWwgPSBmdW5jdGlvbiB0b0xvY2FsKCkge1xuICAgIHJldHVybiB0aGlzLnNldFpvbmUobmV3IExvY2FsWm9uZSgpKTtcbiAgfTtcblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgRGF0ZVRpbWUncyB6b25lIHRvIHNwZWNpZmllZCB6b25lLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBzZXR0ZXIga2VlcHMgdGhlIHVuZGVybHlpbmcgdGltZSB0aGUgc2FtZSAoYXMgaW4sIHRoZSBzYW1lIFVUQyB0aW1lc3RhbXApLCBidXQgdGhlIG5ldyBpbnN0YW5jZSB3aWxsIHJlcG9ydCBkaWZmZXJlbnQgbG9jYWwgdGltZXMgYW5kIGNvbnNpZGVyIERTVHMgd2hlbiBtYWtpbmcgY29tcHV0YXRpb25zLCBhcyB3aXRoIHtAbGluayBwbHVzfS4gWW91IG1heSB3aXNoIHRvIHVzZSB7QGxpbmsgdG9Mb2NhbH0gYW5kIHtAbGluayB0b1VUQ30gd2hpY2ggcHJvdmlkZSBzaW1wbGUgY29udmVuaWVuY2Ugd3JhcHBlcnMgZm9yIGNvbW1vbmx5IHVzZWQgem9uZXMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfFpvbmV9IFt6b25lPSdsb2NhbCddIC0gYSB6b25lIGlkZW50aWZpZXIuIEFzIGEgc3RyaW5nLCB0aGF0IGNhbiBiZSBhbnkgSUFOQSB6b25lIHN1cHBvcnRlZCBieSB0aGUgaG9zdCBlbnZpcm9ubWVudCwgb3IgYSBmaXhlZC1vZmZzZXQgbmFtZSBvZiB0aGUgZm9ybSAndXRjKzMnLCBvciB0aGUgc3RyaW5ncyAnbG9jYWwnIG9yICd1dGMnLiBZb3UgbWF5IGFsc28gc3VwcGx5IGFuIGluc3RhbmNlIG9mIGEge0BsaW5rIFpvbmV9IGNsYXNzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5rZWVwTG9jYWxUaW1lPWZhbHNlXSAtIElmIHRydWUsIGFkanVzdCB0aGUgdW5kZXJseWluZyB0aW1lIHNvIHRoYXQgdGhlIGxvY2FsIHRpbWUgc3RheXMgdGhlIHNhbWUsIGJ1dCBpbiB0aGUgdGFyZ2V0IHpvbmUuIFlvdSBzaG91bGQgcmFyZWx5IG5lZWQgdGhpcy5cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnNldFpvbmUgPSBmdW5jdGlvbiBzZXRab25lKHpvbmUpIHtcbiAgICB2YXIgX3JlZjQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBfcmVmNCRrZWVwTG9jYWxUaW1lID0gX3JlZjQua2VlcExvY2FsVGltZSxcbiAgICAgICAga2VlcExvY2FsVGltZSA9IF9yZWY0JGtlZXBMb2NhbFRpbWUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjQka2VlcExvY2FsVGltZSxcbiAgICAgICAgX3JlZjQka2VlcENhbGVuZGFyVGltID0gX3JlZjQua2VlcENhbGVuZGFyVGltZSxcbiAgICAgICAga2VlcENhbGVuZGFyVGltZSA9IF9yZWY0JGtlZXBDYWxlbmRhclRpbSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmNCRrZWVwQ2FsZW5kYXJUaW07XG5cbiAgICB6b25lID0gbm9ybWFsaXplWm9uZSh6b25lLCBTZXR0aW5ncy5kZWZhdWx0Wm9uZSk7XG4gICAgaWYgKHpvbmUuZXF1YWxzKHRoaXMuem9uZSkpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0gZWxzZSBpZiAoIXpvbmUuaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIERhdGVUaW1lLmludmFsaWQoVU5TVVBQT1JURURfWk9ORSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXdUUyA9IGtlZXBMb2NhbFRpbWUgfHwga2VlcENhbGVuZGFyVGltZSAvLyBrZWVwQ2FsZW5kYXJUaW1lIGlzIHRoZSBkZXByZWNhdGVkIG5hbWUgZm9yIGtlZXBMb2NhbFRpbWVcbiAgICAgID8gdGhpcy50cyArICh0aGlzLm8gLSB6b25lLm9mZnNldCh0aGlzLnRzKSkgKiA2MCAqIDEwMDAgOiB0aGlzLnRzO1xuICAgICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyB0czogbmV3VFMsIHpvbmU6IHpvbmUgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoZSBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbSwgb3Igb3V0cHV0Q2FsZW5kYXIuIFJldHVybnMgYSBuZXdseS1jb25zdHJ1Y3RlZCBEYXRlVGltZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgLSB0aGUgcHJvcGVydGllcyB0byBzZXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnJlY29uZmlndXJlKHsgbG9jYWxlOiAnZW4tR0InIH0pXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS5yZWNvbmZpZ3VyZSA9IGZ1bmN0aW9uIHJlY29uZmlndXJlKCkge1xuICAgIHZhciBfcmVmNSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIGxvY2FsZSA9IF9yZWY1LmxvY2FsZSxcbiAgICAgICAgbnVtYmVyaW5nU3lzdGVtID0gX3JlZjUubnVtYmVyaW5nU3lzdGVtLFxuICAgICAgICBvdXRwdXRDYWxlbmRhciA9IF9yZWY1Lm91dHB1dENhbGVuZGFyO1xuXG4gICAgdmFyIGxvYyA9IHRoaXMubG9jLmNsb25lKHsgbG9jYWxlOiBsb2NhbGUsIG51bWJlcmluZ1N5c3RlbTogbnVtYmVyaW5nU3lzdGVtLCBvdXRwdXRDYWxlbmRhcjogb3V0cHV0Q2FsZW5kYXIgfSk7XG4gICAgcmV0dXJuIGNsb25lJDEodGhpcywgeyBsb2M6IGxvYyB9KTtcbiAgfTtcblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgbG9jYWxlLiBSZXR1cm5zIGEgbmV3bHktY29uc3RydWN0ZWQgRGF0ZVRpbWUuXG4gICAqIEp1c3QgYSBjb252ZW5pZW50IGFsaWFzIGZvciByZWNvbmZpZ3VyZSh7IGxvY2FsZSB9KVxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkuc2V0TG9jYWxlKCdlbi1HQicpXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS5zZXRMb2NhbGUgPSBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjb25maWd1cmUoeyBsb2NhbGU6IGxvY2FsZSB9KTtcbiAgfTtcblxuICAvKipcbiAgICogXCJTZXRcIiB0aGUgdmFsdWVzIG9mIHNwZWNpZmllZCB1bml0cy4gUmV0dXJucyBhIG5ld2x5LWNvbnN0cnVjdGVkIERhdGVUaW1lLlxuICAgKiBZb3UgY2FuIG9ubHkgc2V0IHVuaXRzIHdpdGggdGhpcyBtZXRob2Q7IGZvciBcInNldHRpbmdcIiBtZXRhZGF0YSwgc2VlIHtAbGluayByZWNvbmZpZ3VyZX0gYW5kIHtAbGluayBzZXRab25lfS5cbiAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlcyAtIGEgbWFwcGluZyBvZiB1bml0cyB0byBudW1iZXJzXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMTcgfSlcbiAgICogQGV4YW1wbGUgZHQuc2V0KHsgaG91cjogOCwgbWludXRlOiAzMCB9KVxuICAgKiBAZXhhbXBsZSBkdC5zZXQoeyB3ZWVrZGF5OiA1IH0pXG4gICAqIEBleGFtcGxlIGR0LnNldCh7IHllYXI6IDIwMDUsIG9yZGluYWw6IDIzNCB9KVxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0JCQxKHZhbHVlcykge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcblxuICAgIHZhciBub3JtYWxpemVkID0gbm9ybWFsaXplT2JqZWN0KHZhbHVlcywgbm9ybWFsaXplVW5pdCksXG4gICAgICAgIHNldHRpbmdXZWVrU3R1ZmYgPSAhaXNVbmRlZmluZWQobm9ybWFsaXplZC53ZWVrWWVhcikgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla051bWJlcikgfHwgIWlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQud2Vla2RheSk7XG5cbiAgICB2YXIgbWl4ZWQgPSB2b2lkIDA7XG4gICAgaWYgKHNldHRpbmdXZWVrU3R1ZmYpIHtcbiAgICAgIG1peGVkID0gd2Vla1RvR3JlZ29yaWFuKE9iamVjdC5hc3NpZ24oZ3JlZ29yaWFuVG9XZWVrKHRoaXMuYyksIG5vcm1hbGl6ZWQpKTtcbiAgICB9IGVsc2UgaWYgKCFpc1VuZGVmaW5lZChub3JtYWxpemVkLm9yZGluYWwpKSB7XG4gICAgICBtaXhlZCA9IG9yZGluYWxUb0dyZWdvcmlhbihPYmplY3QuYXNzaWduKGdyZWdvcmlhblRvT3JkaW5hbCh0aGlzLmMpLCBub3JtYWxpemVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1peGVkID0gT2JqZWN0LmFzc2lnbih0aGlzLnRvT2JqZWN0KCksIG5vcm1hbGl6ZWQpO1xuXG4gICAgICAvLyBpZiB3ZSBkaWRuJ3Qgc2V0IHRoZSBkYXkgYnV0IHdlIGVuZGVkIHVwIG9uIGFuIG92ZXJmbG93IGRhdGUsXG4gICAgICAvLyB1c2UgdGhlIGxhc3QgZGF5IG9mIHRoZSByaWdodCBtb250aFxuICAgICAgaWYgKGlzVW5kZWZpbmVkKG5vcm1hbGl6ZWQuZGF5KSkge1xuICAgICAgICBtaXhlZC5kYXkgPSBNYXRoLm1pbihkYXlzSW5Nb250aChtaXhlZC55ZWFyLCBtaXhlZC5tb250aCksIG1peGVkLmRheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIF9vYmpUb1RTMyA9IG9ialRvVFMobWl4ZWQsIHRoaXMubywgdGhpcy56b25lKSxcbiAgICAgICAgdHMgPSBfb2JqVG9UUzNbMF0sXG4gICAgICAgIG8gPSBfb2JqVG9UUzNbMV07XG5cbiAgICByZXR1cm4gY2xvbmUkMSh0aGlzLCB7IHRzOiB0cywgbzogbyB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQWRkIGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICpcbiAgICogQWRkaW5nIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBvciBtaWxsaXNlY29uZHMgaW5jcmVhc2VzIHRoZSB0aW1lc3RhbXAgYnkgdGhlIHJpZ2h0IG51bWJlciBvZiBtaWxsaXNlY29uZHMuIEFkZGluZyBkYXlzLCBtb250aHMsIG9yIHllYXJzIHNoaWZ0cyB0aGUgY2FsZW5kYXIsIGFjY291bnRpbmcgZm9yIERTVHMgYW5kIGxlYXAgeWVhcnMgYWxvbmcgdGhlIHdheS4gVGh1cywgYGR0LnBsdXMoeyBob3VyczogMjQgfSlgIG1heSByZXN1bHQgaW4gYSBkaWZmZXJlbnQgdGltZSB0aGFuIGBkdC5wbHVzKHsgZGF5czogMSB9KWAgaWYgdGhlcmUncyBhIERTVCBzaGlmdCBpbiBiZXR3ZWVuLlxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBhZGQuIEVpdGhlciBhIEx1eG9uIER1cmF0aW9uLCBhIG51bWJlciBvZiBtaWxsaXNlY29uZHMsIHRoZSBvYmplY3QgYXJndW1lbnQgdG8gRHVyYXRpb24uZnJvbU9iamVjdCgpXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cygxMjMpIC8vfj4gaW4gMTIzIG1pbGxpc2Vjb25kc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBtaW51dGVzOiAxNSB9KSAvL34+IGluIDE1IG1pbnV0ZXNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgZGF5czogMSB9KSAvL34+IHRoaXMgdGltZSB0b21vcnJvd1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnBsdXMoeyBkYXlzOiAtMSB9KSAvL34+IHRoaXMgdGltZSB5ZXN0ZXJkYXlcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS5wbHVzKHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pIC8vfj4gaW4gMSBociwgMTMgbWluXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkucGx1cyhEdXJhdGlvbi5mcm9tT2JqZWN0KHsgaG91cnM6IDMsIG1pbnV0ZXM6IDEzIH0pKSAvL34+IGluIDEgaHIsIDEzIG1pblxuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUucGx1cyA9IGZ1bmN0aW9uIHBsdXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN1YnRyYWN0IGEgcGVyaW9kIG9mIHRpbWUgdG8gdGhpcyBEYXRlVGltZSBhbmQgcmV0dXJuIHRoZSByZXN1bHRpbmcgRGF0ZVRpbWVcbiAgICogU2VlIHtAbGluayBwbHVzfVxuICAgKiBAcGFyYW0ge0R1cmF0aW9ufE9iamVjdHxudW1iZXJ9IGR1cmF0aW9uIC0gVGhlIGFtb3VudCB0byBzdWJ0cmFjdC4gRWl0aGVyIGEgTHV4b24gRHVyYXRpb24sIGEgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcywgdGhlIG9iamVjdCBhcmd1bWVudCB0byBEdXJhdGlvbi5mcm9tT2JqZWN0KClcbiAgIEByZXR1cm4ge0RhdGVUaW1lfVxuICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLm1pbnVzID0gZnVuY3Rpb24gbWludXMoZHVyYXRpb24pIHtcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCkgcmV0dXJuIHRoaXM7XG4gICAgdmFyIGR1ciA9IGZyaWVuZGx5RHVyYXRpb24oZHVyYXRpb24pLm5lZ2F0ZSgpO1xuICAgIHJldHVybiBjbG9uZSQxKHRoaXMsIGFkanVzdFRpbWUodGhpcywgZHVyKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFwiU2V0XCIgdGhpcyBEYXRlVGltZSB0byB0aGUgYmVnaW5uaW5nIG9mIGEgdW5pdCBvZiB0aW1lLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRoZSB1bml0IHRvIGdvIHRvIHRoZSBiZWdpbm5pbmcgb2YuIENhbiBiZSAneWVhcicsICdtb250aCcsICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJywgb3IgJ21pbGxpc2Vjb25kJy5cbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZignbW9udGgnKS50b0lTT0RhdGUoKTsgLy89PiAnMjAxNC0wMy0wMSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMykuc3RhcnRPZigneWVhcicpLnRvSVNPRGF0ZSgpOyAvLz0+ICcyMDE0LTAxLTAxJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuc3RhcnRPZignZGF5JykudG9JU09UaW1lKCk7IC8vPT4gJzAwOjAwLjAwMC0wNTowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNCwgMywgMywgNSwgMzApLnN0YXJ0T2YoJ2hvdXInKS50b0lTT1RpbWUoKTsgLy89PiAnMDU6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAcmV0dXJuIHtEYXRlVGltZX1cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUuc3RhcnRPZiA9IGZ1bmN0aW9uIHN0YXJ0T2YodW5pdCkge1xuICAgIGlmICghdGhpcy5pc1ZhbGlkKSByZXR1cm4gdGhpcztcbiAgICB2YXIgbyA9IHt9LFxuICAgICAgICBub3JtYWxpemVkVW5pdCA9IER1cmF0aW9uLm5vcm1hbGl6ZVVuaXQodW5pdCk7XG4gICAgc3dpdGNoIChub3JtYWxpemVkVW5pdCkge1xuICAgICAgY2FzZSAneWVhcnMnOlxuICAgICAgICBvLm1vbnRoID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgJ3F1YXJ0ZXJzJzpcbiAgICAgIGNhc2UgJ21vbnRocyc6XG4gICAgICAgIG8uZGF5ID0gMTtcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgJ3dlZWtzJzpcbiAgICAgIGNhc2UgJ2RheXMnOlxuICAgICAgICBvLmhvdXIgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSAnaG91cnMnOlxuICAgICAgICBvLm1pbnV0ZSA9IDA7XG4gICAgICAvLyBmYWxscyB0aHJvdWdoXG4gICAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgICAgby5zZWNvbmQgPSAwO1xuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgIG8ubWlsbGlzZWNvbmQgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRVbml0RXJyb3IodW5pdCk7XG4gICAgfVxuXG4gICAgaWYgKG5vcm1hbGl6ZWRVbml0ID09PSAnd2Vla3MnKSB7XG4gICAgICBvLndlZWtkYXkgPSAxO1xuICAgIH1cblxuICAgIGlmIChub3JtYWxpemVkVW5pdCA9PT0gJ3F1YXJ0ZXJzJykge1xuICAgICAgby5tb250aCA9IE1hdGguZmxvb3IodGhpcy5tb250aCAvIDMpICogMyArIDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0KG8pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBcIlNldFwiIHRoaXMgRGF0ZVRpbWUgdG8gdGhlIGVuZCAoaS5lLiB0aGUgbGFzdCBtaWxsaXNlY29uZCkgb2YgYSB1bml0IG9mIHRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSBUaGUgdW5pdCB0byBnbyB0byB0aGUgZW5kIG9mLiBDYW4gYmUgJ3llYXInLCAnbW9udGgnLCAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcsIG9yICdtaWxsaXNlY29uZCcuXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDMsIDMpLmVuZE9mKCdtb250aCcpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMDA6MDA6MDAuMDAwLTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzKS5lbmRPZigneWVhcicpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMTItMzFUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2RheScpLnRvSVNPKCk7IC8vPT4gJzIwMTQtMDMtMDNUMjM6NTk6NTkuOTk5LTA1OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAzLCAzLCA1LCAzMCkuZW5kT2YoJ2hvdXInKS50b0lTTygpOyAvLz0+ICcyMDE0LTAzLTAzVDA1OjU5OjU5Ljk5OS0wNTowMCdcbiAgICogQHJldHVybiB7RGF0ZVRpbWV9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLmVuZE9mID0gZnVuY3Rpb24gZW5kT2YodW5pdCkge1xuICAgIHZhciBfc3RhcnRPZiRwbHVzO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuc3RhcnRPZih1bml0KS5wbHVzKChfc3RhcnRPZiRwbHVzID0ge30sIF9zdGFydE9mJHBsdXNbdW5pdF0gPSAxLCBfc3RhcnRPZiRwbHVzKSkubWludXMoMSkgOiB0aGlzO1xuICB9O1xuXG4gIC8vIE9VVFBVVFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgZm9ybWF0dGVkIGFjY29yZGluZyB0byB0aGUgc3BlY2lmaWVkIGZvcm1hdCBzdHJpbmcuXG4gICAqICoqWW91IG1heSBub3Qgd2FudCB0aGlzLioqIFNlZSB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvciBhIG1vcmUgZmxleGlibGUgZm9ybWF0dGluZyB0b29sLiBTZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBzcGVjaWZpYyBmb3JtYXQgdG9rZW5zIHN1cHBvcnRlZC5cbiAgICogRGVmYXVsdHMgdG8gZW4tVVMgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZCwgcmVnYXJkbGVzcyBvZiB0aGUgc3lzdGVtJ3MgbG9jYWxlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmbXQgLSB0aGUgZm9ybWF0IHN0cmluZ1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBvcHRzLnJvdW5kIC0gcm91bmQgbnVtZXJpY2FsIHZhbHVlc1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvRm9ybWF0KCd5eXl5IExMTCBkZCcpIC8vPT4gJzIwMTcgQXByIDIyJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnNldExvY2FsZSgnZnInKS50b0Zvcm1hdCgneXl5eSBMTEwgZGQnKSAvLz0+ICcyMDE3IGF2ci4gMjInXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Gb3JtYXQoXCJISCAnaG91cnMgYW5kJyBtbSAnbWludXRlcydcIikgLy89PiAnMjAgaG91cnMgYW5kIDU1IG1pbnV0ZXMnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUudG9Gb3JtYXQgPSBmdW5jdGlvbiB0b0Zvcm1hdChmbXQpIHtcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gRm9ybWF0dGVyLmNyZWF0ZSh0aGlzLmxvYy5yZWRlZmF1bHRUb0VOKCksIG9wdHMpLmZvcm1hdERhdGVUaW1lRnJvbVN0cmluZyh0aGlzLCBmbXQpIDogSU5WQUxJRCQyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9jYWxpemVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhpcyBkYXRlLiBBY2NlcHRzIHRoZSBzYW1lIG9wdGlvbnMgYXMgdGhlIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3IgYW5kIGFueSBwcmVzZXRzIGRlZmluZWQgYnkgTHV4b24sIHN1Y2ggYXMgYERhdGVUaW1lLkRBVEVfRlVMTGAgb3IgYERhdGVUaW1lLlRJTUVfU0lNUExFYC5cbiAgICogVGhlIGV4YWN0IGJlaGF2aW9yIG9mIHRoaXMgbWV0aG9kIGlzIGJyb3dzZXItc3BlY2lmaWMsIGJ1dCBpbiBnZW5lcmFsIGl0IHdpbGwgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIHJlcHJlc2VudGF0aW9uLlxuICAgKiBvZiB0aGUgRGF0ZVRpbWUgaW4gdGhlIGFzc2lnbmVkIGxvY2FsZS5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICogQHBhcmFtIG9wdHMge09iamVjdH0gLSBJbnRsLkRhdGVUaW1lRm9ybWF0IGNvbnN0cnVjdG9yIG9wdGlvbnNcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZygpOyAvLz0+IDQvMjAvMjAxN1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnNldExvY2FsZSgnZW4tZ2InKS50b0xvY2FsZVN0cmluZygpOyAvLz0+ICcyMC8wNC8yMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLkRBVEVfRlVMTCk7IC8vPT4gJ0FwcmlsIDIwLCAyMDE3J1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKERhdGVUaW1lLlRJTUVfU0lNUExFKTsgLy89PiAnMTE6MzIgQU0nXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9Mb2NhbGVTdHJpbmcoRGF0ZVRpbWUuREFURVRJTUVfU0hPUlQpOyAvLz0+ICc0LzIwLzIwMTcsIDExOjMyIEFNJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKHt3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnfSk7IC8vPT4gJ1RodSwgQXByIDIwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKHt3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJzItZGlnaXQnLCBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnfSk7IC8vPT4gJ1RodSwgQXByIDIwLCAxMToyNydcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0xvY2FsZVN0cmluZyh7aG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0J30pOyAvLz0+ICcxMTozMidcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS50b0xvY2FsZVN0cmluZyA9IGZ1bmN0aW9uIHRvTG9jYWxlU3RyaW5nKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBEQVRFX1NIT1JUO1xuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lKHRoaXMpIDogSU5WQUxJRCQyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGZvcm1hdCBcInBhcnRzXCIsIGkuZS4gaW5kaXZpZHVhbCB0b2tlbnMgYWxvbmcgd2l0aCBtZXRhZGF0YS4gVGhpcyBpcyBhbGxvd3MgY2FsbGVycyB0byBwb3N0LXByb2Nlc3MgaW5kaXZpZHVhbCBzZWN0aW9ucyBvZiB0aGUgZm9ybWF0dGVkIG91dHB1dC5cbiAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvZm9ybWF0VG9QYXJ0c1xuICAgKiBAcGFyYW0gb3B0cyB7T2JqZWN0fSAtIEludGwuRGF0ZVRpbWVGb3JtYXQgY29uc3RydWN0b3Igb3B0aW9ucywgc2FtZSBhcyBgdG9Mb2NhbGVTdHJpbmdgLlxuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLnRvTG9jYWxlU3RyaW5nKCk7IC8vPT4gW1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdkYXknLCB2YWx1ZTogJzI1JyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdsaXRlcmFsJywgdmFsdWU6ICcvJyB9LFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vPT4gICB7IHR5cGU6ICdtb250aCcsIHZhbHVlOiAnMDUnIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ2xpdGVyYWwnLCB2YWx1ZTogJy8nIH0sXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy89PiAgIHsgdHlwZTogJ3llYXInLCB2YWx1ZTogJzE5ODInIH1cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLz0+IF1cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUudG9Mb2NhbGVQYXJ0cyA9IGZ1bmN0aW9uIHRvTG9jYWxlUGFydHMoKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEZvcm1hdHRlci5jcmVhdGUodGhpcy5sb2MuY2xvbmUob3B0cyksIG9wdHMpLmZvcm1hdERhdGVUaW1lUGFydHModGhpcykgOiBbXTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NNaWxsaXNlY29uZHM9ZmFsc2VdIC0gZXhjbHVkZSBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLnN1cHByZXNzU2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIHNlY29uZHMgZnJvbSB0aGUgZm9ybWF0IGlmIHRoZXkncmUgMFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU08oKSAvLz0+ICcxOTgyLTA1LTI1VDAwOjAwOjAwLjAwMFonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9JU08oKSAvLz0+ICcyMDE3LTA0LTIyVDIwOjQ3OjA1LjMzNS0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b0lTTyh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTctMDQtMjJUMjA6NDc6MDUuMzM1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvSVNPID0gZnVuY3Rpb24gdG9JU08oKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnRvSVNPRGF0ZSgpICsgJ1QnICsgdGhpcy50b0lTT1RpbWUob3B0cyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3MgZGF0ZSBjb21wb25lbnRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDE5ODIsIDUsIDI1KS50b0lTT0RhdGUoKSAvLz0+ICcxOTgyLTA1LTI1J1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvSVNPRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPRGF0ZSgpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsICd5eXl5LU1NLWRkJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gSVNPIDg2MDEtY29tcGxpYW50IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lJ3Mgd2VlayBkYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygxOTgyLCA1LCAyNSkudG9JU09XZWVrRGF0ZSgpIC8vPT4gJzE5ODItVzIxLTInXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUudG9JU09XZWVrRGF0ZSA9IGZ1bmN0aW9uIHRvSVNPV2Vla0RhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCBcImtra2stJ1cnV1ctY1wiKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMS1jb21wbGlhbnQgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUncyB0aW1lIGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5zdXBwcmVzc01pbGxpc2Vjb25kcz1mYWxzZV0gLSBleGNsdWRlIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuc3VwcHJlc3NTZWNvbmRzPWZhbHNlXSAtIGV4Y2x1ZGUgc2Vjb25kcyBmcm9tIHRoZSBmb3JtYXQgaWYgdGhleSdyZSAwXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZU9mZnNldD10cnVlXSAtIGluY2x1ZGUgdGhlIG9mZnNldCwgc3VjaCBhcyAnWicgb3IgJy0wNDowMCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKCkuaG91cig3KS5taW51dGUoMzQpLnRvSVNPVGltZSgpIC8vPT4gJzA3OjM0OjE5LjM2MVonXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygpLmhvdXIoNykubWludXRlKDM0KS50b0lTT1RpbWUoeyBzdXBwcmVzc1NlY29uZHM6IHRydWUgfSkgLy89PiAnMDc6MzRaJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvSVNPVGltZSA9IGZ1bmN0aW9uIHRvSVNPVGltZSgpIHtcbiAgICB2YXIgX3JlZjYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgICBfcmVmNiRzdXBwcmVzc01pbGxpc2UgPSBfcmVmNi5zdXBwcmVzc01pbGxpc2Vjb25kcyxcbiAgICAgICAgc3VwcHJlc3NNaWxsaXNlY29uZHMgPSBfcmVmNiRzdXBwcmVzc01pbGxpc2UgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjYkc3VwcHJlc3NNaWxsaXNlLFxuICAgICAgICBfcmVmNiRzdXBwcmVzc1NlY29uZHMgPSBfcmVmNi5zdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIHN1cHByZXNzU2Vjb25kcyA9IF9yZWY2JHN1cHByZXNzU2Vjb25kcyA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmNiRzdXBwcmVzc1NlY29uZHMsXG4gICAgICAgIF9yZWY2JGluY2x1ZGVPZmZzZXQgPSBfcmVmNi5pbmNsdWRlT2Zmc2V0LFxuICAgICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZjYkaW5jbHVkZU9mZnNldCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWY2JGluY2x1ZGVPZmZzZXQ7XG5cbiAgICByZXR1cm4gdG9UZWNoVGltZUZvcm1hdCh0aGlzLCB7IHN1cHByZXNzU2Vjb25kczogc3VwcHJlc3NTZWNvbmRzLCBzdXBwcmVzc01pbGxpc2Vjb25kczogc3VwcHJlc3NNaWxsaXNlY29uZHMsIGluY2x1ZGVPZmZzZXQ6IGluY2x1ZGVPZmZzZXQgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gUkZDIDI4MjItY29tcGF0aWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSwgYWx3YXlzIGluIFVUQ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoMjAxNCwgNywgMTMpLnRvUkZDMjgyMigpIC8vPT4gJ1N1biwgMTMgSnVsIDIwMTQgMDA6MDA6MDAgKzAwMDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1JGQzI4MjIoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIC0wNDAwJ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvUkZDMjgyMiA9IGZ1bmN0aW9uIHRvUkZDMjgyMigpIHtcbiAgICByZXR1cm4gdG9UZWNoRm9ybWF0KHRoaXMsICdFRUUsIGRkIExMTCB5eXl5IGhoOm1tOnNzIFpaWicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBIVFRQIGhlYWRlcnMuXG4gICAqIFNwZWNpZmljYWxseSwgdGhlIHN0cmluZyBjb25mb3JtcyB0byBSRkMgMTEyMy5cbiAgICogQHNlZSBodHRwczovL3d3dy53My5vcmcvUHJvdG9jb2xzL3JmYzI2MTYvcmZjMjYxNi1zZWMzLmh0bWwjc2VjMy4zLjFcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzKS50b0hUVFAoKSAvLz0+ICdTdW4sIDEzIEp1bCAyMDE0IDAwOjAwOjAwIEdNVCdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUudXRjKDIwMTQsIDcsIDEzLCAxOSkudG9IVFRQKCkgLy89PiAnU3VuLCAxMyBKdWwgMjAxNCAxOTowMDowMCBHTVQnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUudG9IVFRQID0gZnVuY3Rpb24gdG9IVFRQKCkge1xuICAgIHJldHVybiB0b1RlY2hGb3JtYXQodGhpcy50b1VUQygpLCBcIkVFRSwgZGQgTExMIHl5eXkgSEg6bW06c3MgJ0dNVCdcIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBEYXRlVGltZSBhcHByb3ByaWF0ZSBmb3IgdXNlIGluIFNRTCBEYXRlXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUxEYXRlKCkgLy89PiAnMjAxNC0wNy0xMydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS50b1NRTERhdGUgPSBmdW5jdGlvbiB0b1NRTERhdGUoKSB7XG4gICAgcmV0dXJuIHRvVGVjaEZvcm1hdCh0aGlzLCAneXl5eS1NTS1kZCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgVGltZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlWm9uZT1mYWxzZV0gLSBpbmNsdWRlIHRoZSB6b25lLCBzdWNoIGFzICdBbWVyaWNhL05ld19Zb3JrJy4gT3ZlcmlkZXMgaW5jbHVkZU9mZnNldC5cbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlT2Zmc2V0PXRydWVdIC0gaW5jbHVkZSB0aGUgb2Zmc2V0LCBzdWNoIGFzICdaJyBvciAnLTA0OjAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSdcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b1NRTCgpIC8vPT4gJzA1OjE1OjE2LjM0NSAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9TUUwoeyBpbmNsdWRlT2Zmc2V0OiBmYWxzZSB9KSAvLz0+ICcwNToxNToxNi4zNDUnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMDU6MTU6MTYuMzQ1IEFtZXJpY2EvTmV3X1lvcmsnXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUudG9TUUxUaW1lID0gZnVuY3Rpb24gdG9TUUxUaW1lKCkge1xuICAgIHZhciBfcmVmNyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICAgIF9yZWY3JGluY2x1ZGVPZmZzZXQgPSBfcmVmNy5pbmNsdWRlT2Zmc2V0LFxuICAgICAgICBpbmNsdWRlT2Zmc2V0ID0gX3JlZjckaW5jbHVkZU9mZnNldCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWY3JGluY2x1ZGVPZmZzZXQsXG4gICAgICAgIF9yZWY3JGluY2x1ZGVab25lID0gX3JlZjcuaW5jbHVkZVpvbmUsXG4gICAgICAgIGluY2x1ZGVab25lID0gX3JlZjckaW5jbHVkZVpvbmUgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZjckaW5jbHVkZVpvbmU7XG5cbiAgICByZXR1cm4gdG9UZWNoVGltZUZvcm1hdCh0aGlzLCB7IGluY2x1ZGVPZmZzZXQ6IGluY2x1ZGVPZmZzZXQsIGluY2x1ZGVab25lOiBpbmNsdWRlWm9uZSwgc3BhY2Vab25lOiB0cnVlIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIHVzZSBpbiBTUUwgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdHMuaW5jbHVkZVpvbmU9ZmFsc2VdIC0gaW5jbHVkZSB0aGUgem9uZSwgc3VjaCBhcyAnQW1lcmljYS9OZXdfWW9yaycuIE92ZXJyaWRlcyBpbmNsdWRlT2Zmc2V0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRzLmluY2x1ZGVPZmZzZXQ9dHJ1ZV0gLSBpbmNsdWRlIHRoZSBvZmZzZXQsIHN1Y2ggYXMgJ1onIG9yICctMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLnV0YygyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCBaJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoKSAvLz0+ICcyMDE0LTA3LTEzIDAwOjAwOjAwLjAwMCAtMDQ6MDAnXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTQsIDcsIDEzKS50b1NRTCh7IGluY2x1ZGVPZmZzZXQ6IGZhbHNlIH0pIC8vPT4gJzIwMTQtMDctMTMgMDA6MDA6MDAuMDAwJ1xuICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCA3LCAxMykudG9TUUwoeyBpbmNsdWRlWm9uZTogZmFsc2UgfSkgLy89PiAnMjAxNC0wNy0xMyAwMDowMDowMC4wMDAgQW1lcmljYS9OZXdfWW9yaydcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS50b1NRTCA9IGZ1bmN0aW9uIHRvU1FMKCkge1xuICAgIHZhciBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmICghdGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50b1NRTERhdGUoKSArICcgJyArIHRoaXMudG9TUUxUaW1lKG9wdHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgRGF0ZVRpbWUgYXBwcm9wcmlhdGUgZm9yIGRlYnVnZ2luZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMudG9JU08oKSA6IElOVkFMSUQkMjtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB0aGUgUkVQTC5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCgpIHtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gJ0RhdGVUaW1lIHtcXG4gIHRzOiAnICsgdGhpcy50b0lTTygpICsgJyxcXG4gIHpvbmU6ICcgKyB0aGlzLnpvbmUubmFtZSArICcsXFxuICBsb2NhbGU6ICcgKyB0aGlzLmxvY2FsZSArICcgfSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnRGF0ZVRpbWUgeyBJbnZhbGlkLCByZWFzb246ICcgKyB0aGlzLmludmFsaWRSZWFzb24gKyAnIH0nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXBvY2ggbWlsbGlzZWNvbmRzIG9mIHRoaXMgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gdmFsdWVPZigpIHtcbiAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy50cyA6IE5hTjtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBJU08gODYwMSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIERhdGVUaW1lIGFwcHJvcHJpYXRlIGZvciB1c2UgaW4gSlNPTi5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHRoaXMudG9JU08oKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIEphdmFzY3JpcHQgb2JqZWN0IHdpdGggdGhpcyBEYXRlVGltZSdzIHllYXIsIG1vbnRoLCBkYXksIGFuZCBzbyBvbi5cbiAgICogQHBhcmFtIG9wdHMgLSBvcHRpb25zIGZvciBnZW5lcmF0aW5nIHRoZSBvYmplY3RcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0cy5pbmNsdWRlQ29uZmlnPWZhbHNlXSAtIGluY2x1ZGUgY29uZmlndXJhdGlvbiBhdHRyaWJ1dGVzIGluIHRoZSBvdXRwdXRcbiAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoKS50b09iamVjdCgpIC8vPT4geyB5ZWFyOiAyMDE3LCBtb250aDogNCwgZGF5OiAyMiwgaG91cjogMjAsIG1pbnV0ZTogNDksIHNlY29uZDogNDIsIG1pbGxpc2Vjb25kOiAyNjggfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gdG9PYmplY3QoKSB7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiB7fTtcblxuICAgIHZhciBiYXNlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jKTtcblxuICAgIGlmIChvcHRzLmluY2x1ZGVDb25maWcpIHtcbiAgICAgIGJhc2Uub3V0cHV0Q2FsZW5kYXIgPSB0aGlzLm91dHB1dENhbGVuZGFyO1xuICAgICAgYmFzZS5udW1iZXJpbmdTeXN0ZW0gPSB0aGlzLmxvYy5udW1iZXJpbmdTeXN0ZW07XG4gICAgICBiYXNlLmxvY2FsZSA9IHRoaXMubG9jLmxvY2FsZTtcbiAgICB9XG4gICAgcmV0dXJuIGJhc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBKYXZhc2NyaXB0IERhdGUgZXF1aXZhbGVudCB0byB0aGlzIERhdGVUaW1lLlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS50b0pTRGF0ZSA9IGZ1bmN0aW9uIHRvSlNEYXRlKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmlzVmFsaWQgPyB0aGlzLnRzIDogTmFOKTtcbiAgfTtcblxuICAvLyBDT01QQVJFXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBEYXRlVGltZXMgYXMgYSBEdXJhdGlvbi5cbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXJEYXRlVGltZSAtIHRoZSBEYXRlVGltZSB0byBjb21wYXJlIHRoaXMgb25lIHRvXG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIGFycmF5IG9mIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvbi5cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMgLSBvcHRpb25zIHRoYXQgYWZmZWN0IHRoZSBjcmVhdGlvbiBvZiB0aGUgRHVyYXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRzLmNvbnZlcnNpb25BY2N1cmFjeT0nY2FzdWFsJ10gLSB0aGUgY29udmVyc2lvbiBzeXN0ZW0gdG8gdXNlXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBpMSA9IERhdGVUaW1lLmZyb21JU08oJzE5ODItMDUtMjVUMDk6NDUnKSxcbiAgICogICAgIGkyID0gRGF0ZVRpbWUuZnJvbUlTTygnMTk4My0xMC0xNFQxMDozMCcpO1xuICAgKiBpMi5kaWZmKGkxKS50b09iamVjdCgpIC8vPT4geyBtaWxsaXNlY29uZHM6IDQzODA3NTAwMDAwIH1cbiAgICogaTIuZGlmZihpMSwgJ2hvdXJzJykudG9PYmplY3QoKSAvLz0+IHsgaG91cnM6IDEyMTY4Ljc1IH1cbiAgICogaTIuZGlmZihpMSwgWydtb250aHMnLCAnZGF5cyddKS50b09iamVjdCgpIC8vPT4geyBtb250aHM6IDE2LCBkYXlzOiAxOS4wMzEyNSB9XG4gICAqIGkyLmRpZmYoaTEsIFsnbW9udGhzJywgJ2RheXMnLCAnaG91cnMnXSkudG9PYmplY3QoKSAvLz0+IHsgbW9udGhzOiAxNiwgZGF5czogMTksIGhvdXJzOiAwLjc1IH1cbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLmRpZmYgPSBmdW5jdGlvbiBkaWZmKG90aGVyRGF0ZVRpbWUpIHtcbiAgICB2YXIgdW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ21pbGxpc2Vjb25kcyc7XG4gICAgdmFyIG9wdHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQgfHwgIW90aGVyRGF0ZVRpbWUuaXNWYWxpZCkgcmV0dXJuIER1cmF0aW9uLmludmFsaWQodGhpcy5pbnZhbGlkUmVhc29uIHx8IG90aGVyRGF0ZVRpbWUuaW52YWxpZFJlYXNvbik7XG5cbiAgICB2YXIgdW5pdHMgPSBtYXliZUFycmF5KHVuaXQpLm1hcChEdXJhdGlvbi5ub3JtYWxpemVVbml0KSxcbiAgICAgICAgb3RoZXJJc0xhdGVyID0gb3RoZXJEYXRlVGltZS52YWx1ZU9mKCkgPiB0aGlzLnZhbHVlT2YoKSxcbiAgICAgICAgZWFybGllciA9IG90aGVySXNMYXRlciA/IHRoaXMgOiBvdGhlckRhdGVUaW1lLFxuICAgICAgICBsYXRlciA9IG90aGVySXNMYXRlciA/IG90aGVyRGF0ZVRpbWUgOiB0aGlzLFxuICAgICAgICBkaWZmZWQgPSBfZGlmZihlYXJsaWVyLCBsYXRlciwgdW5pdHMsIG9wdHMpO1xuXG4gICAgcmV0dXJuIG90aGVySXNMYXRlciA/IGRpZmZlZC5uZWdhdGUoKSA6IGRpZmZlZDtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhpcyBEYXRlVGltZSBhbmQgcmlnaHQgbm93LlxuICAgKiBTZWUge0BsaW5rIGRpZmZ9XG4gICAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbdW5pdD1bJ21pbGxpc2Vjb25kcyddXSAtIHRoZSB1bml0IG9yIHVuaXRzIHVuaXRzIChzdWNoIGFzICdob3Vycycgb3IgJ2RheXMnKSB0byBpbmNsdWRlIGluIHRoZSBkdXJhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyAtIG9wdGlvbnMgdGhhdCBhZmZlY3QgdGhlIGNyZWF0aW9uIG9mIHRoZSBEdXJhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdHMuY29udmVyc2lvbkFjY3VyYWN5PSdjYXN1YWwnXSAtIHRoZSBjb252ZXJzaW9uIHN5c3RlbSB0byB1c2VcbiAgICogQHJldHVybiB7RHVyYXRpb259XG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUucHJvdG90eXBlLmRpZmZOb3cgPSBmdW5jdGlvbiBkaWZmTm93KCkge1xuICAgIHZhciB1bml0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAnbWlsbGlzZWNvbmRzJztcbiAgICB2YXIgb3B0cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG5cbiAgICByZXR1cm4gdGhpcy5kaWZmKERhdGVUaW1lLmxvY2FsKCksIHVuaXQsIG9wdHMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gSW50ZXJ2YWwgc3Bhbm5pbmcgYmV0d2VlbiB0aGlzIERhdGVUaW1lIGFuZCBhbm90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgZW5kIHBvaW50IG9mIHRoZSBJbnRlcnZhbFxuICAgKiBAcmV0dXJuIHtJbnRlcnZhbH1cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUudW50aWwgPSBmdW5jdGlvbiB1bnRpbChvdGhlckRhdGVUaW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEludGVydmFsLmZyb21EYXRlVGltZXModGhpcywgb3RoZXJEYXRlVGltZSkgOiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGlzIERhdGVUaW1lIGlzIGluIHRoZSBzYW1lIHVuaXQgb2YgdGltZSBhcyBhbm90aGVyIERhdGVUaW1lXG4gICAqIEBwYXJhbSB7RGF0ZVRpbWV9IG90aGVyRGF0ZVRpbWUgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVuaXQgLSB0aGUgdW5pdCBvZiB0aW1lIHRvIGNoZWNrIHNhbWVuZXNzIG9uXG4gICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKCkuaGFzU2FtZShvdGhlckRULCAnZGF5Jyk7IC8vfj4gdHJ1ZSBpZiBib3RoIHRoZSBzYW1lIGNhbGVuZGFyIGRheVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cblxuXG4gIERhdGVUaW1lLnByb3RvdHlwZS5oYXNTYW1lID0gZnVuY3Rpb24gaGFzU2FtZShvdGhlckRhdGVUaW1lLCB1bml0KSB7XG4gICAgaWYgKCF0aGlzLmlzVmFsaWQpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodW5pdCA9PT0gJ21pbGxpc2Vjb25kJykge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpID09PSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlucHV0TXMgPSBvdGhlckRhdGVUaW1lLnZhbHVlT2YoKTtcbiAgICAgIHJldHVybiB0aGlzLnN0YXJ0T2YodW5pdCkgPD0gaW5wdXRNcyAmJiBpbnB1dE1zIDw9IHRoaXMuZW5kT2YodW5pdCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBFcXVhbGl0eSBjaGVja1xuICAgKiBUd28gRGF0ZVRpbWVzIGFyZSBlcXVhbCBpZmYgdGhleSByZXByZXNlbnQgdGhlIHNhbWUgbWlsbGlzZWNvbmRcbiAgICogQHBhcmFtIHtEYXRlVGltZX0gb3RoZXIgLSB0aGUgb3RoZXIgRGF0ZVRpbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG5cblxuICBEYXRlVGltZS5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzKG90aGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWYWxpZCAmJiBvdGhlci5pc1ZhbGlkID8gdGhpcy52YWx1ZU9mKCkgPT09IG90aGVyLnZhbHVlT2YoKSAmJiB0aGlzLnpvbmUuZXF1YWxzKG90aGVyLnpvbmUpICYmIHRoaXMubG9jLmVxdWFscyhvdGhlci5sb2MpIDogZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgbWluIG9mIHNldmVyYWwgZGF0ZSB0aW1lc1xuICAgKiBAcGFyYW0gey4uLkRhdGVUaW1lfSBkYXRlVGltZXMgLSB0aGUgRGF0ZVRpbWVzIGZyb20gd2hpY2ggdG8gY2hvb3NlIHRoZSBtaW5pbXVtXG4gICAqIEByZXR1cm4ge0RhdGVUaW1lfSB0aGUgbWluIERhdGVUaW1lLCBvciB1bmRlZmluZWQgaWYgY2FsbGVkIHdpdGggbm8gYXJndW1lbnRcbiAgICovXG5cblxuICBEYXRlVGltZS5taW4gPSBmdW5jdGlvbiBtaW4oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgZGF0ZVRpbWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBiZXN0QnkoZGF0ZVRpbWVzLCBmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkudmFsdWVPZigpO1xuICAgIH0sIE1hdGgubWluKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBtYXggb2Ygc2V2ZXJhbCBkYXRlIHRpbWVzXG4gICAqIEBwYXJhbSB7Li4uRGF0ZVRpbWV9IGRhdGVUaW1lcyAtIHRoZSBEYXRlVGltZXMgZnJvbSB3aGljaCB0byBjaG9vc2UgdGhlIG1heGltdW1cbiAgICogQHJldHVybiB7RGF0ZVRpbWV9IHRoZSBtYXggRGF0ZVRpbWUsIG9yIHVuZGVmaW5lZCBpZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudFxuICAgKi9cblxuXG4gIERhdGVUaW1lLm1heCA9IGZ1bmN0aW9uIG1heCgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRhdGVUaW1lcyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBkYXRlVGltZXNbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmVzdEJ5KGRhdGVUaW1lcywgZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnZhbHVlT2YoKTtcbiAgICB9LCBNYXRoLm1heCk7XG4gIH07XG5cbiAgLy8gTUlTQ1xuXG4gIC8qKlxuICAgKiBFeHBsYWluIGhvdyBhIHN0cmluZyB3b3VsZCBiZSBwYXJzZWQgYnkgZnJvbUZvcm1hdCgpXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gdGhlIHN0cmluZyB0byBwYXJzZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm10IC0gdGhlIGZvcm1hdCB0aGUgc3RyaW5nIGlzIGV4cGVjdGVkIHRvIGJlIGluIChzZWUgZGVzY3JpcHRpb24pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gb3B0aW9ucyB0YWtlbiBieSBmcm9tRm9ybWF0KClcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cblxuXG4gIERhdGVUaW1lLmZyb21Gb3JtYXRFeHBsYWluID0gZnVuY3Rpb24gZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgIHZhciBfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUsXG4gICAgICAgIGxvY2FsZSA9IF9vcHRpb25zJGxvY2FsZTIgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfb3B0aW9ucyRsb2NhbGUyLFxuICAgICAgICBfb3B0aW9ucyRudW1iZXJpbmdTeXMyID0gb3B0aW9ucy5udW1iZXJpbmdTeXN0ZW0sXG4gICAgICAgIG51bWJlcmluZ1N5c3RlbSA9IF9vcHRpb25zJG51bWJlcmluZ1N5czIgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBfb3B0aW9ucyRudW1iZXJpbmdTeXMyLFxuICAgICAgICBsb2NhbGVUb1VzZSA9IExvY2FsZS5mcm9tT3B0cyh7IGxvY2FsZTogbG9jYWxlLCBudW1iZXJpbmdTeXN0ZW06IG51bWJlcmluZ1N5c3RlbSwgZGVmYXVsdFRvRU46IHRydWUgfSk7XG5cbiAgICByZXR1cm4gZXhwbGFpbkZyb21Ub2tlbnMobG9jYWxlVG9Vc2UsIHRleHQsIGZtdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZSBmcm9tRm9ybWF0RXhwbGFpbiBpbnN0ZWFkXG4gICAqL1xuXG5cbiAgRGF0ZVRpbWUuZnJvbVN0cmluZ0V4cGxhaW4gPSBmdW5jdGlvbiBmcm9tU3RyaW5nRXhwbGFpbih0ZXh0LCBmbXQpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUZvcm1hdEV4cGxhaW4odGV4dCwgZm10LCBvcHRpb25zKTtcbiAgfTtcblxuICAvLyBGT1JNQVQgUFJFU0VUU1xuXG4gIC8qKlxuICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlIDEwLzE0LzE5ODNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG5cblxuICBjcmVhdGVDbGFzcyhEYXRlVGltZSwgW3tcbiAgICBrZXk6ICdpc1ZhbGlkJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWRSZWFzb24gPT09IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBleHBsYW5hdGlvbiBvZiB3aHkgdGhpcyBEYXRlVGltZSBiZWNhbWUgaW52YWxpZCwgb3IgbnVsbCBpZiB0aGUgRGF0ZVRpbWUgaXMgdmFsaWRcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpbnZhbGlkUmVhc29uJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmludmFsaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBsb2NhbGUgb2YgYSBEYXRlVGltZSwgc3VjaCAnZW4tR0InLiBUaGUgbG9jYWxlIGlzIHVzZWQgd2hlbiBmb3JtYXR0aW5nIHRoZSBEYXRlVGltZVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbG9jYWxlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmxvYy5sb2NhbGUgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbnVtYmVyaW5nIHN5c3RlbSBvZiBhIERhdGVUaW1lLCBzdWNoICdiZW5nJy4gVGhlIG51bWJlcmluZyBzeXN0ZW0gaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdudW1iZXJpbmdTeXN0ZW0nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMubG9jLm51bWJlcmluZ1N5c3RlbSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBvdXRwdXQgY2FsZW5kYXIgb2YgYSBEYXRlVGltZSwgc3VjaCAnaXNsYW1pYycuIFRoZSBvdXRwdXQgY2FsZW5kYXIgaXMgdXNlZCB3aGVuIGZvcm1hdHRpbmcgdGhlIERhdGVUaW1lXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdvdXRwdXRDYWxlbmRhcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5sb2Mub3V0cHV0Q2FsZW5kYXIgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmFtZSBvZiB0aGUgdGltZSB6b25lLlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3pvbmVOYW1lJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUubmFtZSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB5ZWFyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnllYXIgLy89PiAyMDE3XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAneWVhcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLnllYXIgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBxdWFydGVyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLnF1YXJ0ZXIgLy89PiAyXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncXVhcnRlcicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gTWF0aC5jZWlsKHRoaXMuYy5tb250aCAvIDMpIDogTmFOO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIG1vbnRoICgxLTEyKS5cbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCA1LCAyNSkubW9udGggLy89PiA1XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbW9udGgnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5tb250aCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggKDEtMzBpc2gpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5kYXkgLy89PiAyNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RheScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmRheSA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGhvdXIgb2YgdGhlIGRheSAoMC0yMykuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDkpLmhvdXIgLy89PiA5XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaG91cicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gdGhpcy5jLmhvdXIgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaW51dGUgb2YgdGhlIGhvdXIgKDAtNTkpLlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1LCA5LCAzMCkubWludXRlIC8vPT4gMzBcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdtaW51dGUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5taW51dGUgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzZWNvbmQgb2YgdGhlIG1pbnV0ZSAoMC01OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1Mikuc2Vjb25kIC8vPT4gNTJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzZWNvbmQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuYy5zZWNvbmQgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtaWxsaXNlY29uZCBvZiB0aGUgc2Vjb25kICgwLTk5OSkuXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUsIDksIDMwLCA1MiwgNjU0KS5taWxsaXNlY29uZCAvLz0+IDY1NFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21pbGxpc2Vjb25kJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLmMubWlsbGlzZWNvbmQgOiBOYU47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB3ZWVrIHllYXJcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtZZWFyIC8vPT4gMjAxNVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dlZWtZZWFyJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBwb3NzaWJseUNhY2hlZFdlZWtEYXRhKHRoaXMpLndlZWtZZWFyIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgd2VlayBudW1iZXIgb2YgdGhlIHdlZWsgeWVhciAoMS01MmlzaCkuXG4gICAgICogQHNlZSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgNSwgMjUpLndlZWtOdW1iZXIgLy89PiAyMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3dlZWtOdW1iZXInLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHBvc3NpYmx5Q2FjaGVkV2Vla0RhdGEodGhpcykud2Vla051bWJlciA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGRheSBvZiB0aGUgd2Vlay5cbiAgICAgKiAxIGlzIE1vbmRheSBhbmQgNyBpcyBTdW5kYXlcbiAgICAgKiBAc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE0LCAxMSwgMzEpLndlZWtkYXkgLy89PiA0XG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnd2Vla2RheScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gcG9zc2libHlDYWNoZWRXZWVrRGF0YSh0aGlzKS53ZWVrZGF5IDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgb3JkaW5hbCAoaS5lLiB0aGUgZGF5IG9mIHRoZSB5ZWFyKVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDUsIDI1KS5vcmRpbmFsIC8vPT4gMTQ1XG4gICAgICogQHR5cGUge251bWJlcnxEYXRlVGltZX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb3JkaW5hbCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gZ3JlZ29yaWFuVG9PcmRpbmFsKHRoaXMuYykub3JkaW5hbCA6IE5hTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdCcuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS5tb250aFNob3J0IC8vPT4gT2N0XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbW9udGhTaG9ydCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoJ3Nob3J0JywgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pW3RoaXMubW9udGggLSAxXSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBodW1hbiByZWFkYWJsZSBsb25nIG1vbnRoIG5hbWUsIHN1Y2ggYXMgJ09jdG9iZXInLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTcsIDEwLCAzMCkubW9udGhMb25nIC8vPT4gT2N0b2JlclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ21vbnRoTG9uZycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkID8gSW5mby5tb250aHMoJ2xvbmcnLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSlbdGhpcy5tb250aCAtIDFdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIHNob3J0IHdlZWtkYXksIHN1Y2ggYXMgJ01vbicuXG4gICAgICogRGVmYXVsdHMgdG8gdGhlIHN5c3RlbSdzIGxvY2FsZSBpZiBubyBsb2NhbGUgaGFzIGJlZW4gc3BlY2lmaWVkXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNywgMTAsIDMwKS53ZWVrZGF5U2hvcnQgLy89PiBNb25cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd3ZWVrZGF5U2hvcnQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoJ3Nob3J0JywgeyBsb2NhbGU6IHRoaXMubG9jYWxlIH0pW3RoaXMud2Vla2RheSAtIDFdIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGh1bWFuIHJlYWRhYmxlIGxvbmcgd2Vla2RheSwgc3VjaCBhcyAnTW9uZGF5Jy5cbiAgICAgKiBEZWZhdWx0cyB0byB0aGUgc3lzdGVtJ3MgbG9jYWxlIGlmIG5vIGxvY2FsZSBoYXMgYmVlbiBzcGVjaWZpZWRcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE3LCAxMCwgMzApLndlZWtkYXlMb25nIC8vPT4gTW9uZGF5XG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnd2Vla2RheUxvbmcnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IEluZm8ud2Vla2RheXMoJ2xvbmcnLCB7IGxvY2FsZTogdGhpcy5sb2NhbGUgfSlbdGhpcy53ZWVrZGF5IC0gMV0gOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgVVRDIG9mZnNldCBvZiB0aGlzIERhdGVUaW1lIGluIG1pbnV0ZXNcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgpLm9mZnNldCAvLz0+IC0yNDBcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS51dGMoKS5vZmZzZXQgLy89PiAwXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb2Zmc2V0JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyB0aGlzLnpvbmUub2Zmc2V0KHRoaXMudHMpIDogTmFOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgc2hvcnQgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFU1RcIiBvciBcIkVEVFwiLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29mZnNldE5hbWVTaG9ydCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnpvbmUub2Zmc2V0TmFtZSh0aGlzLnRzLCB7XG4gICAgICAgICAgZm9ybWF0OiAnc2hvcnQnLFxuICAgICAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGxvbmcgaHVtYW4gbmFtZSBmb3IgdGhlIHpvbmUncyBjdXJyZW50IG9mZnNldCwgZm9yIGV4YW1wbGUgXCJFYXN0ZXJuIFN0YW5kYXJkIFRpbWVcIiBvciBcIkVhc3Rlcm4gRGF5bGlnaHQgVGltZVwiLlxuICAgICAqIERlZmF1bHRzIHRvIHRoZSBzeXN0ZW0ncyBsb2NhbGUgaWYgbm8gbG9jYWxlIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ29mZnNldE5hbWVMb25nJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuem9uZS5vZmZzZXROYW1lKHRoaXMudHMsIHtcbiAgICAgICAgICBmb3JtYXQ6ICdsb25nJyxcbiAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHdoZXRoZXIgdGhpcyB6b25lJ3Mgb2Zmc2V0IGV2ZXIgY2hhbmdlcywgYXMgaW4gYSBEU1QuXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzT2Zmc2V0Rml4ZWQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZCA/IHRoaXMuem9uZS51bml2ZXJzYWwgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB3aGV0aGVyIHRoZSBEYXRlVGltZSBpcyBpbiBhIERTVC5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNJbkRTVCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5pc09mZnNldEZpeGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZnNldCA+IHRoaXMuc2V0KHsgbW9udGg6IDEgfSkub2Zmc2V0IHx8IHRoaXMub2Zmc2V0ID4gdGhpcy5zZXQoeyBtb250aDogNSB9KS5vZmZzZXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoaXMgRGF0ZVRpbWUgaXMgaW4gYSBsZWFwIHllYXIsIGZhbHNlIG90aGVyd2lzZVxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTYpLmlzSW5MZWFwWWVhciAvLz0+IHRydWVcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDEzKS5pc0luTGVhcFllYXIgLy89PiBmYWxzZVxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdpc0luTGVhcFllYXInLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIGlzTGVhcFllYXIodGhpcy55ZWFyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZGF5cyBpbiB0aGlzIERhdGVUaW1lJ3MgbW9udGhcbiAgICAgKiBAZXhhbXBsZSBEYXRlVGltZS5sb2NhbCgyMDE2LCAyKS5kYXlzSW5Nb250aCAvLz0+IDI5XG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNiwgMykuZGF5c0luTW9udGggLy89PiAzMVxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2RheXNJbk1vbnRoJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBkYXlzSW5Nb250aCh0aGlzLnllYXIsIHRoaXMubW9udGgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG51bWJlciBvZiBkYXlzIGluIHRoaXMgRGF0ZVRpbWUncyB5ZWFyXG4gICAgICogQGV4YW1wbGUgRGF0ZVRpbWUubG9jYWwoMjAxNikuZGF5c0luWWVhciAvLz0+IDM2NlxuICAgICAqIEBleGFtcGxlIERhdGVUaW1lLmxvY2FsKDIwMTMpLmRheXNJblllYXIgLy89PiAzNjVcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkYXlzSW5ZZWFyJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzVmFsaWQgPyBkYXlzSW5ZZWFyKHRoaXMueWVhcikgOiBOYU47XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6ICdEQVRFX1NIT1JUJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBEQVRFX1NIT1JUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdCAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdEQVRFX01FRCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gREFURV9NRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnT2N0b2JlciAxNCwgMTk4MydcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdEQVRFX0ZVTEwnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIERBVEVfRlVMTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdUdWVzZGF5LCBPY3RvYmVyIDE0LCAxOTgzJ1xuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ0RBVEVfSFVHRScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gREFURV9IVUdFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnVElNRV9TSU1QTEUnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIFRJTUVfU0lNUExFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnVElNRV9XSVRIX1NFQ09ORFMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9TRUNPTkRTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzA5OjMwOjIzIEFNIEVEVCcuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ1RJTUVfV0lUSF9TSE9SVF9PRkZTRVQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIFRJTUVfV0lUSF9TSE9SVF9PRkZTRVQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgQU0gRWFzdGVybiBEYXlsaWdodCBUaW1lJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnVElNRV9XSVRIX0xPTkdfT0ZGU0VUJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBUSU1FX1dJVEhfTE9OR19PRkZTRVQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzAnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdUSU1FXzI0X1NJTVBMRScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9TSU1QTEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdUSU1FXzI0X1dJVEhfU0VDT05EUycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnMDk6MzA6MjMgRURUJywgYWx3YXlzIDI0LWhvdXIuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gVElNRV8yNF9XSVRIX1NIT1JUX09GRlNFVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcwOTozMDoyMyBFYXN0ZXJuIERheWxpZ2h0IFRpbWUnLCBhbHdheXMgMjQtaG91ci5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdUSU1FXzI0X1dJVEhfTE9OR19PRkZTRVQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIFRJTUVfMjRfV0lUSF9MT05HX09GRlNFVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICcxMC8xNC8xOTgzLCA5OjMwIEFNJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnREFURVRJTUVfU0hPUlQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX1NIT1JUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJzEwLzE0LzE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdEQVRFVElNRV9TSE9SVF9XSVRIX1NFQ09ORFMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX1NIT1JUX1dJVEhfU0VDT05EUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzAgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdEQVRFVElNRV9NRUQnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX01FRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3QgMTQsIDE5ODMsIDk6MzA6MzMgQU0nLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9NRURfV0lUSF9TRUNPTkRTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHtAbGluayB0b0xvY2FsZVN0cmluZ30gZm9ybWF0IGxpa2UgJ09jdG9iZXIgMTQsIDE5ODMsIDk6MzAgQU0gRURUJy4gT25seSAxMi1ob3VyIGlmIHRoZSBsb2NhbGUgaXMuXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnREFURVRJTUVfRlVMTCcsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfRlVMTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB7QGxpbmsgdG9Mb2NhbGVTdHJpbmd9IGZvcm1hdCBsaWtlICdPY3RvYmVyIDE0LCAxOTgzLCA5OjMwMyBBTSBFRFQnLiBPbmx5IDEyLWhvdXIgaWYgdGhlIGxvY2FsZSBpcy5cbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdEQVRFVElNRV9GVUxMX1dJVEhfU0VDT05EUycsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICByZXR1cm4gREFURVRJTUVfRlVMTF9XSVRIX1NFQ09ORFM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ0RBVEVUSU1FX0hVR0UnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgcmV0dXJuIERBVEVUSU1FX0hVR0U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICoge0BsaW5rIHRvTG9jYWxlU3RyaW5nfSBmb3JtYXQgbGlrZSAnRnJpZGF5LCBPY3RvYmVyIDE0LCAxOTgzLCA5OjMwOjMzIEFNIEVhc3Rlcm4gRGF5bGlnaHQgVGltZScuIE9ubHkgMTItaG91ciBpZiB0aGUgbG9jYWxlIGlzLlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ0RBVEVUSU1FX0hVR0VfV0lUSF9TRUNPTkRTJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIHJldHVybiBEQVRFVElNRV9IVUdFX1dJVEhfU0VDT05EUztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIERhdGVUaW1lO1xufSgpO1xuZnVuY3Rpb24gZnJpZW5kbHlEYXRlVGltZShkYXRlVGltZWlzaCkge1xuICBpZiAoZGF0ZVRpbWVpc2ggaW5zdGFuY2VvZiBEYXRlVGltZSkge1xuICAgIHJldHVybiBkYXRlVGltZWlzaDtcbiAgfSBlbHNlIGlmIChkYXRlVGltZWlzaC52YWx1ZU9mICYmIGlzTnVtYmVyKGRhdGVUaW1laXNoLnZhbHVlT2YoKSkpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbUpTRGF0ZShkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSBpZiAoZGF0ZVRpbWVpc2ggaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICByZXR1cm4gRGF0ZVRpbWUuZnJvbU9iamVjdChkYXRlVGltZWlzaCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEVycm9yKCdVbmtub3duIGRhdGV0aW1lIGFyZ3VtZW50Jyk7XG4gIH1cbn1cblxuZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lO1xuZXhwb3J0cy5EdXJhdGlvbiA9IER1cmF0aW9uO1xuZXhwb3J0cy5JbnRlcnZhbCA9IEludGVydmFsO1xuZXhwb3J0cy5JbmZvID0gSW5mbztcbmV4cG9ydHMuWm9uZSA9IFpvbmU7XG5leHBvcnRzLlNldHRpbmdzID0gU2V0dGluZ3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sdXhvbi5qcy5tYXBcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2x1eG9uL2J1aWxkL2Nqcy1icm93c2VyL2x1eG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9sdXhvbi9idWlsZC9janMtYnJvd3Nlci9sdXhvbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIgLyogc2VydmVyIG9ubHkgKi9cbikge1xuICB2YXIgZXNNb2R1bGVcbiAgdmFyIHNjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cyB8fCB7fVxuXG4gIC8vIEVTNiBtb2R1bGVzIGludGVyb3BcbiAgdmFyIHR5cGUgPSB0eXBlb2YgcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIGlmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXNNb2R1bGUgPSByYXdTY3JpcHRFeHBvcnRzXG4gICAgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMuZGVmYXVsdFxuICB9XG5cbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChjb21waWxlZFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBjb21waWxlZFRlbXBsYXRlLnJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gY29tcGlsZWRUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9IHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIHZhciBmdW5jdGlvbmFsID0gb3B0aW9ucy5mdW5jdGlvbmFsXG4gICAgdmFyIGV4aXN0aW5nID0gZnVuY3Rpb25hbFxuICAgICAgPyBvcHRpb25zLnJlbmRlclxuICAgICAgOiBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuXG4gICAgaWYgKCFmdW5jdGlvbmFsKSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDcgOCA5IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwicHgtNCBib3JkZXItbCBmbGV4IGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciBwLTRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJwcm9maWxlLWRyb3Bkb3duXCIgfSxcbiAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZVByb2ZpbGVEcm9wZG93biB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1kOm1yLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdlbmVyYXRlVXJsKF92bS51c2VyLmF2YXRhcikgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWdyZXktZGFya2VyIHRleHQtYmFzZSBuby11bmRlcmxpbmUgaGlkZGVuIG1kOmJsb2NrXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgIFwiICsgX3ZtLl9zKF92bS51c2VyLm5hbWUpICsgXCJcXG4gICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYW5nbGUtZG93blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucHJvZmlsZURyb3Bkb3duU2hvd25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgYmctd2hpdGUgdy00OCBwaW4tciBtci0yIHB5LTEgc2hhZG93LWxnIHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgdG9wOiBcIjMuNXJlbVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInByb2ZpbGUtbWVudVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrIGJsb2NrIGZvbnQtbWVkaXVtXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0ucHJvZmlsZVVybCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl9tKDApLCBfdm0uX3YoXCJcXG4gICAgICAgICAgWW91ciBwcm9maWxlXFxuICAgIFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIGJvcmRlci10XCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0udXJsLmxvZ291dCB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5sb2dvdXRVc2VyIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX20oMyksIF92bS5fdihcIlxcbiAgICAgIExvZ291dFxcbiAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJub25lXCIgfSxcbiAgICAgICAgICBhdHRyczogeyBpZDogXCJsb2dvdXQtZm9ybVwiLCBhY3Rpb246IF92bS51cmwubG9nb3V0LCBtZXRob2Q6IFwiUE9TVFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50b2tlbiB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidy02IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTEgZmEgZmEtdXNlclwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImFcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtZ3JleS1kYXJrIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pblwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctNiBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicHItMSBmYXMgZmEtc2hpZWxkLWFsdCBmb250LXJlZ3VsYXJcIiB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgQWRtaW5cXG4gICAgXCIpXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYVwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctNiBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwicHItMSBmYSBmYS1jb2cgZm9udC1yZWd1bGFyXCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFNldHRpbmdzXFxuICAgIFwiKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidy02IGlubGluZS1ibG9ja1wiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTEgZmFzIGZhLXNpZ24tb3V0LWFsdCBmb250LXJlZ3VsYXJcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA1NDU2ZjE4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNTQ1NmYxOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTA1NDU2ZjE4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2ZpbGVEcm9wZG93bi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJmb3JtXCIsIHsgYXR0cnM6IHsgbWV0aG9kOiBcInBvc3RcIiwgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZGVuXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgbmFtZTogXCJhdmF0YXJcIixcbiAgICAgICAgICBpZDogXCJhdmF0YXJcIixcbiAgICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnNlbGVjdEZpbGUgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiYmctdHJhbnNwYXJlbnQgdGV4dC1ncmV5LWRhcmtlciBob3Zlcjp0ZXh0LXRlYWwgcHktMiBweC00IGJvcmRlciBib3JkZXItZ3JleS1saWdodCBob3Zlcjpib3JkZXItdGVhbCByb3VuZGVkXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG9uY2xpY2s6IFwiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F2YXRhcicpLmNsaWNrKCk7IHJldHVybiBmYWxzZTtcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkNoYW5nZSBZb3VyIEF2YXRhclwiKV1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xM2JhMmI3M1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTNiYTJiNzNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvZmlsZVVwbG9hZC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMTNiYTJiNzNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvZmlsZVVwbG9hZC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB0LTggYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgcHktOFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTMyIGgtMzIgcm91bmRlZC1mdWxsXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOiBcIi9pbWFnZS9hdmF0YXItcHJvZmlsZS5wbmdcIixcbiAgICAgICAgICBhbHQ6IFwiRGVmYXVsdCBhdmF0YXIgb2YgXCIgKyBfdm0udXNlci5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBweS0yIHB4LThcIiB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnVzZXIubmFtZSkgKyBcIlxcbiAgICAgICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrIHRleHQtbGcgcHktMiBweC04XCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udXNlci5kZXNpZ25hdGlvbikgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrIHB5LTIgcHgtOFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnVzZXJMb2NhbFRpbWUpICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmV5LWRhcmtlciBwdC0yIHBiLTQgcHgtOCBsZWFkaW5nLW5vcm1hbFwiIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0udXNlci5iaW8pICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwidGV4dC1ncmV5LWRhcmtlciBwdC04IHNlbGYtc3RhcnQgcHgtOCBiZy1ncmV5LWxpZ2h0ZXIgdy1mdWxsIHBiLThcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgQmVsb25ncyB0bzpcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVzZXIucHJvamVjdHMsIGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJiZy1waW5rLWxpZ2h0ZXIgaG92ZXI6YmctcGluayByb3VuZGVkIGZvbnQtbWVkaXVtIHAtMiBteC0yIG5vLXVuZGVybGluZSB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3Byb2plY3RzL1wiICsgcHJvamVjdC5zbHVnIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb2plY3QubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udXNlci50ZWFtcywgZnVuY3Rpb24odGVhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImJnLXBpbmstbGlnaHRlciBob3ZlcjpiZy1waW5rIHJvdW5kZWQgZm9udC1tZWRpdW0gcC0yIG14LTIgbm8tdW5kZXJsaW5lIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvdGVhbXMvXCIgKyB0ZWFtLnNsdWcgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGVhbS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xZWUzOWI4MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWVlMzliODJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvb3RoZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTFlZTM5YjgyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL290aGVyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiZml4ZWQgcGluLXQgYmctd2hpdGUgdGV4dC1sZyByb3VuZGVkIGNvbnRhaW5lciBteC1hdXRvIG1kOnctMS8yIG10LTE2IHB5LTYgcHgtOCBzaGFkb3ctbGdcIixcbiAgICAgIGNsYXNzOiBbXG4gICAgICAgIF92bS5ub3RpZmljYXRpb25TaG93biA/IFwiXCIgOiBcImhpZGRlblwiLFxuICAgICAgICBfdm0ubWVzc2FnZVR5cGUgPT09IFwic3VjY2Vzc1wiID8gXCJ0ZXh0LXRlYWwtbGlnaHRcIiA6IFwidGV4dC1yZWRcIlxuICAgICAgXSxcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGxlZnQ6IFwiMFwiLCByaWdodDogXCIwXCIsIFwibWF4LXdpZHRoXCI6IFwiNjQwcHhcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uX3YoXCJcXG4gICAgXCIgKyBfdm0uX3MoX3ZtLm1lc3NhZ2UpICsgXCIgXFxuICAgIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZVwiLCBvbjogeyBjbGljazogX3ZtLmNsb3NlTm90aWZpY2F0aW9uIH0gfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10aW1lcyBmbG9hdC1yaWdodCBjdXJzb3ItcG9pbnRlclwiIH0pXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0zY2Q3ZmUxYlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2NkN2ZlMWJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTNjZDdmZTFiXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImJnLXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGgtMTIgcGwtNCBtZDpweC00IHNoYWRvd1wiXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXRlYWwgdGV4dC0yeGwgbm8tdW5kZXJsaW5lIHNlbGYtY2VudGVyXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnVybC5zaXRlIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgIEdPT0RXT1JLXFxuICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWQ6ZmxleFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgYm9yZGVyLWwgaC1mdWxsXCIgfSxcbiAgICAgICAgICBbX2MoXCJub3RpZmljYXRpb24tZHJvcGRvd25cIiksIF92bS5fdihcIiBcIiksIF9jKFwicHJvZmlsZS1kcm9wZG93blwiKV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NmM4ZmIzNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDZjOGZiMzRcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi00NmM4ZmIzNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyBweS04IG10LThcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sIHB5LTRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTQgcHgtOFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInVzZXJuYW1lXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgRW1haWxcXG4gICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbWFpbCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiZW1haWxcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcImpvaG5AZXhhbXBsZS5jb21cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5lbWFpbCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uZXJyb3JNZXNzYWdlLmVtYWlsXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmVkIHRleHQtYmFzZSBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UuZW1haWwpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3JkZXItaGFsZiBtdC00IG1iLThcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTggcHgtOFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInVzZXJuYW1lXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgQ3VycmVudCBQYXNzd29yZFxcbiAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnRQYXNzd29yZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50UGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcImN1cnJlbnRfcGFzc3dvcmRcIixcbiAgICAgICAgICAgIHR5cGU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIioqKioqKlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmN1cnJlbnRQYXNzd29yZCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF92bS5jdXJyZW50UGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZS5jdXJyZW50X3Bhc3N3b3JkXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmVkIHRleHQtYmFzZSBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlLmN1cnJlbnRfcGFzc3dvcmQpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTggcHgtOFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInVzZXJuYW1lXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgTmV3IFBhc3N3b3JkXFxuICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmV3UGFzc3dvcmQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGlkOiBcIm5ld19wYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiKioqKioqXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3UGFzc3dvcmQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0ubmV3UGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZS5uZXdfcGFzc3dvcmRcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQgdGV4dC1iYXNlIHB0LTJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UubmV3X3Bhc3N3b3JkKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi04IHB4LThcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ1c2VybmFtZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIENvbmZpcm0gUGFzc3dvcmRcXG4gICAgICBcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdQYXNzd29yZENvbmZpcm1hdGlvbixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdQYXNzd29yZENvbmZpcm1hdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiY29uZmlybV9wYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiKioqKioqXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmV3UGFzc3dvcmRDb25maXJtYXRpb24gfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0ubmV3UGFzc3dvcmRDb25maXJtYXRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLmVycm9yTWVzc2FnZS5uZXdfcGFzc3dvcmRfY29uZmlybWF0aW9uXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmVkIHRleHQtYmFzZSBwdC0yXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlLm5ld19wYXNzd29yZF9jb25maXJtYXRpb24pICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm15LTYgcHgtOFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZm9udC1ib2xkIHJvdW5kZWQgc2hhZG93IGJnLXRlYWwtbGlnaHQgcC00IHRleHQtd2hpdGUgaG92ZXI6c2hhZG93LWxnIGhvdmVyOmZvbnQtYm9sZCBob3ZlcjpiZy10ZWFsLWRhcmsgbm8tdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS51cGRhdGUgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgVXBkYXRlXFxuICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvcmRlci1oYWxmIG10LTQgbWItOFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTQgcHgtOFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJyb3VuZGVkIHAtNCB0ZXh0LXJlZC1saWdodCBib3JkZXIgYm9yZGVyLWdyZXktbGlnaHQgaG92ZXI6Zm9udC1ib2xkIGhvdmVyOmJvcmRlci0wIGhvdmVyOnNoYWRvdy1sZyBob3ZlcjpiZy1yZWQtbGlnaHQgaG92ZXI6dGV4dC13aGl0ZSBuby11bmRlcmxpbmVcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIERlbGV0ZSBhY2NvdW50XFxuICAgICAgXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY3YWE3Y2MyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02N2FhN2NjMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9hY2NvdW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi02N2FhN2NjMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9hY2NvdW50LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sIG14LTQgbWQ6bXgtYXV0byBteS04IG1heC13LW1kXCIgfSxcbiAgICBbXG4gICAgICBfdm0udXNlci5pZCA9PT0gX3ZtLmF1dGhVc2VyLmlkXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgIFwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgZmxleCBmbGV4LXJvdyB0ZXh0LWNlbnRlciB0ZXh0LWdyZXktZGFya2VyXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xLzIgcC00XCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZVRhYiA9PT0gXCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXdoaXRlIGJnLXRlYWwtbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZhdGVUYWIoXCJwcm9maWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgUHJvZmlsZVxcbiAgICAgIFwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEvMiBwLTRcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGFiID09PSBcImFjY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtd2hpdGUgYmctdGVhbC1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IFwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmF0ZVRhYihcImFjY291bnRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBBY2NvdW50XFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWN0aXZlVGFiID09PSBcImFjY291bnRcIlxuICAgICAgICAgICAgICA/IF9jKFwiYWNjb3VudFwiLCB7IGF0dHJzOiB7IHVzZXI6IF92bS5hdXRoVXNlciB9IH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFjdGl2ZVRhYiA9PT0gXCJwcm9maWxlXCJcbiAgICAgICAgICAgICAgPyBfYyhcIm93blwiLCB7IGF0dHJzOiB7IHVzZXI6IF92bS5hdXRoVXNlciB9IH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIDogX2MoXCJvdGhlclwiLCB7IGF0dHJzOiB7IHVzZXI6IF92bS51c2VyIH0gfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1iOWJjYjljYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjliY2I5Y2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtYjliY2I5Y2FcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB4LTQgc2VsZi1jZW50ZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXRlYWwtbGlnaHQgdGV4dC1iYXNlIG5vLXVuZGVybGluZSBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJub3RpZmljYXRpb25cIiB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvZ2dsZU5vdGlmaWNhdGlvbiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhciBmYS1iZWxsIGZvbnQtYm9sZCB0ZXh0LXhsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0udW5yZWFkTm90aWZpY2F0aW9uXG4gICAgICAgICAgPyBfYyhcImlcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImZhIGZhLWNpcmNsZSB0ZXh0LXJlZC1saWdodCB0ZXh0LXNtIGFic29sdXRlIHBpbi10IG10LTMgbWwtM1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ubm90aWZpY2F0aW9uU2hvd25cbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBiZy13aGl0ZSB3LTY0IG10LTYgbXItOCBweS00IHNoYWRvdy1sZyByb3VuZGVkXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyByaWdodDogXCI1JVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBsaXN0LXJlc2V0IHB4LTQgcHktMiB0ZXh0LWdyZXktZGFyayBuby11bmRlcmxpbmUgYmxvY2tcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdlbmVyYXRlVXJsKF92bS51c2VyLmF2YXRhcikgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGxpc3QtcmVzZXQgcHgtNCBweS0yIHRleHQtZ3JleS1kYXJrIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZ2VuZXJhdGVVcmwoX3ZtLnVzZXIuYXZhdGFyKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBib3JkZXItdFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJsaXN0LXJlc2V0IHB4LTQgcHQtMiB0ZXh0LWJsdWUtbGlnaHQgdGV4dC1jZW50ZXIgbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvbm90aWZpY2F0aW9uc1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFZpZXcgQWxsXFxuICAgICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTEgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91ciBwb3N0XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweS0xIHRleHQteHNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgMiBtaW4gYWdvXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTEgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91ciBwb3N0XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweS0xIHRleHQteHNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgMiBtaW4gYWdvXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1lNWFmOWMxY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTVhZjljMWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LWU1YWY5YzFjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgcHktOCBtdC04XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInctMzIgaC0zMiByb3VuZGVkLWZ1bGxcIixcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyLCBhbHQ6IFwiRGVmYXVsdCBhdmF0YXIgb2YgXCIgKyBfdm0udXNlci5uYW1lIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrZXIgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBweS00XCIgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS51c2VyLm5hbWUpICsgXCJcXG4gICAgICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHt9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmaWxlLXVwbG9hZFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB1c2VyOiBfdm0udXNlciB9LFxuICAgICAgICAgICAgb246IHsgXCJpbWFnZS1sb2FkZWRcIjogX3ZtLnVwZGF0ZUltYWdlIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImZvcm1cIiwgeyBzdGF0aWNDbGFzczogXCJweC04IHB0LTZcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgyKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTZcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ0aW1lem9uZVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVGltZSBab25lXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlbGF0aXZlXCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIHBpbi15IHBpbi1yIGZsZXggaXRlbXMtY2VudGVyIHB4LTIgdGV4dC1ncmV5LWRhcmtlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInN2Z1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGwtY3VycmVudCBoLTQgdy00XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBhdGhcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIk05LjI5MyAxMi45NWwuNzA3LjcwN0wxNS42NTcgOGwtMS40MTQtMS40MTRMMTAgMTAuODI4IDUuNzU3IDYuNTg2IDQuMzQzIDh6XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTZcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ3ZWVrc3RhcnRcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIEZpcnN0IERheSBvZiB0aGUgV2Vla1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZWxhdGl2ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBwaW4teSBwaW4tciBmbGV4IGl0ZW1zLWNlbnRlciBweC0yIHRleHQtZ3JleS1kYXJrZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxsLWN1cnJlbnQgaC00IHctNFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMjAgMjBcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNOS4yOTMgMTIuOTVsLjcwNy43MDdMMTUuNjU3IDhsLTEuNDE0LTEuNDE0TDEwIDEwLjgyOCA1Ljc1NyA2LjU4NiA0LjM0MyA4elwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDUpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNlwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWdyZXktZGFya2VyIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIixcbiAgICAgICAgICBhdHRyczogeyBmb3I6IFwidXNlcm5hbWVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgTmFtZVxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwidXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIk5laGFsIEhhc25heWVlblwiIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi02XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ0aXRsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBUaXRsZSBhdCBHb29kd29ya1xcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwidGl0bGVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIkRldmVsb3BlclwiIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi02XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtZ3JleS1kYXJrZXIgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiLFxuICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ0aXRsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBTaG9ydCBCaW9cXG4gICAgICAgICAgICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgcmVzaXplLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IFwiYmlvXCIsXG4gICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgcm93czogXCIzXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQWJvdXQgWW91cnNlbGZcIlxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJzZWxlY3RcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmV5LWRhcmtlciBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJncmlkLXN0YXRlXCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIkFzaWEvRGhha2EgKCs2KVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiTWlzc291cmlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIlRleGFzXCIpXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJzZWxlY3RcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweC0zIHB5LTIgdGV4dC1ncmV5LWRhcmtlciBiZy1ncmV5LWxpZ2h0ZXIgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJ3ZWVrc3RhcnRcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiU2F0dXJkYXlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJvcHRpb25cIiwgW192bS5fdihcIlN1bmRheVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcIm9wdGlvblwiLCBbX3ZtLl92KFwiTW9uZGF5XCIpXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtOFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJnLXRlYWwgaG92ZXI6YmctdGVhbC1kYXJrIHRleHQtd2hpdGUgZm9udC1ib2xkIHAtNCByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGdcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBVcGRhdGVcXG4gICAgICAgICAgICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZjU3ZjYxMTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWY1N2Y2MTEwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL293bi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtZjU3ZjYxMTBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvb3duLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJylcblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xufVxuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuaWYgKHR5cGVvZiBpbyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4gICAgYnJvYWRjYXN0ZXI6ICdzb2NrZXQuaW8nLFxuICAgIGhvc3Q6IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArICc6NjAwMSdcbiAgfSlcbn1cblxud2luZG93LlZ1ZS5taXhpbih7XG4gIG1ldGhvZHM6IHtcbiAgICBnZW5lcmF0ZVVybDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnL2ltYWdlL2F2YXRhci5qcGcnXG4gICAgICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLycgKyB2YWx1ZVxuICAgIH1cbiAgfVxufSlcblxud2luZG93LkV2ZW50QnVzID0gbmV3IFZ1ZSgpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9maWxlVXBsb2FkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTNiYTJiNzNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9maWxlVXBsb2FkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvZmlsZVVwbG9hZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTNiYTJiNzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xM2JhMmI3M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2ZpbGVVcGxvYWQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9maWxlVXBsb2FkLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbmF2YmFyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDZjOGZiMzRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9uYXZiYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ2YzhmYjM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDZjOGZiMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ub3RpZmljYXRpb25Ecm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWU1YWY5YzFjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTVhZjljMWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lNWFmOWMxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ub3RpZmljYXRpb25Qb3B1cC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNjZDdmZTFiXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm90aWZpY2F0aW9uUG9wdXAudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2NkN2ZlMWJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zY2Q3ZmUxYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZmlsZURyb3Bkb3duLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDU0NTZmMThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlRHJvcGRvd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA1NDU2ZjE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDU0NTZmMThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hY2NvdW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjdhYTdjYzJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9hY2NvdW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvYWNjb3VudC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjdhYTdjYzJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02N2FhN2NjMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL2FjY291bnQudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9hY2NvdW50LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vb3RoZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZWUzOWI4MlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL290aGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvb3RoZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFlZTM5YjgyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWVlMzliODJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9vdGhlci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL290aGVyLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vb3duLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjU3ZjYxMTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9vd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9vd24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWY1N2Y2MTEwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjU3ZjYxMTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9vd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9vd24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjliY2I5Y2FcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjliY2I5Y2FcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iOWJjYjljYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3VzZXJzL3Byb2ZpbGUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy91c2Vycy9wcm9maWxlLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgJy4vLi4vLi4vYm9vdHN0cmFwJ1xuaW1wb3J0IG5hdmJhciBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSdcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy91c2Vycy9wcm9maWxlLnZ1ZSdcbmltcG9ydCBub3RpZmljYXRpb25Qb3B1cCBmcm9tICcuLy4uLy4uL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBuYXZiYXIsIHByb2ZpbGUsIG5vdGlmaWNhdGlvblBvcHVwXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3VzZXJzL3Byb2ZpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9