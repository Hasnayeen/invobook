webpackJsonp([4],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_projects_vue__ = __webpack_require__("./resources/assets/js/components/partials/projects.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__partials_projects_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__partials_projects_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_teams_vue__ = __webpack_require__("./resources/assets/js/components/partials/teams.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__partials_teams_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__partials_teams_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_offices_vue__ = __webpack_require__("./resources/assets/js/components/partials/offices.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_offices_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__partials_offices_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_activity_vue__ = __webpack_require__("./resources/assets/js/components/partials/activity.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_activity_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__partials_activity_vue__);
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
  components: {
    projects: __WEBPACK_IMPORTED_MODULE_0__partials_projects_vue___default.a, teams: __WEBPACK_IMPORTED_MODULE_1__partials_teams_vue___default.a, offices: __WEBPACK_IMPORTED_MODULE_2__partials_offices_vue___default.a, activity: __WEBPACK_IMPORTED_MODULE_3__partials_activity_vue___default.a
  },
  data: function data() {
    return {
      active: 'projects'
    };
  },
  methods: {
    activeThisTab: function activeThisTab(tab) {
      if (tab != this.active) {
        this.active = tab;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/activity.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['resource', 'resourceType']
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/offices.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function (_data) {
    function data() {
      return _data.apply(this, arguments);
    }

    data.toString = function () {
      return _data.toString();
    };

    return data;
  }(function () {
    return {
      offices: data.offices.map(function (office) {
        office.url = 'offices/' + office.id;
        return office;
      }),
      showCreateOfficeForm: false,
      name: '',
      description: ''
    };
  }),
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  methods: {
    createNewOffice: function createNewOffice() {
      var _this = this;

      axios.post('/offices', {
        name: this.name,
        description: this.description
      }).then(function (response) {
        if (response.data.status == 'success') {
          EventBus.$emit('notification', response.data.message, response.data.status);
          response.data.office.url = 'offices/' + response.data.office.id;
          _this.offices.push(response.data.office);
          _this.showCreateOfficeForm = false;
        }
      }).catch(function (error) {
        EventBus.$emit('notification', error.response.data.message, error.response.data.status);
      });
    },
    closeCreateOfficeModal: function closeCreateOfficeModal() {
      this.showCreateOfficeForm = false;
    },
    openCreateOfficeModal: function openCreateOfficeModal() {
      this.showCreateOfficeForm = true;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/project.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['details'],
    data: function data() {
        return {
            project: this.details,
            dropdownMenuShown: false
        };
    },

    methods: {
        toggleMenu: function toggleMenu() {
            this.dropdownMenuShown = !this.dropdownMenuShown;
        },
        deleteProject: function deleteProject(project) {
            var _this = this;

            axios.delete('/projects/' + project.id).then(function (response) {
                _this.$emit('deleted');

                _this.dropdownMenuShown = false;

                EventBus.$emit('notification', response.data.message, response.data.status);
            }).catch(function (error) {
                _this.dropdownMenuShown = false;

                EventBus.$emit('notification', error.response.data.message, error.response.data.status);
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/projects.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project__ = __webpack_require__("./resources/assets/js/components/partials/project.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__project__);
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
  components: { project: __WEBPACK_IMPORTED_MODULE_0__project___default.a },
  data: function (_data) {
    function data() {
      return _data.apply(this, arguments);
    }

    data.toString = function () {
      return _data.toString();
    };

    return data;
  }(function () {
    return {
      projects: data.projects.map(function (project) {
        project.url = 'projects/' + project.id;
        return project;
      }),
      showCreateProjectForm: false,
      name: '',
      description: ''
    };
  }),
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  methods: {
    openCreateProjectModal: function openCreateProjectModal() {
      this.showCreateProjectForm = true;
    },
    closeCreateProjectModal: function closeCreateProjectModal() {
      this.showCreateProjectForm = false;
    },
    createProject: function createProject() {
      var _this = this;

      axios.post('/projects', {
        name: this.name,
        description: this.description
      }).then(function (response) {
        if (response.data.status == 'success') {
          EventBus.$emit('notification', response.data.message, response.data.status);
          response.data.project.url = 'projects/' + response.data.project.id;
          _this.projects.push(response.data.project);
          _this.closeCreateProjectModal();
        }
      }).catch(function (error) {
        EventBus.$emit('notification', error.response.data.message, error.response.data.status);
      });
    },
    deleteProject: function deleteProject(index) {
      this.projects.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/teams.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function (_data) {
    function data() {
      return _data.apply(this, arguments);
    }

    data.toString = function () {
      return _data.toString();
    };

    return data;
  }(function () {
    return {
      teams: data.teams.map(function (team) {
        team.url = 'teams/' + team.id;
        return team;
      }),
      showCreateTeamForm: false,
      name: '',
      description: ''
    };
  }),
  props: {
    activeTab: {
      required: true,
      type: String
    }
  },
  methods: {
    openCreateTeamModal: function openCreateTeamModal() {
      this.showCreateTeamForm = true;
    },
    closeCreateTeamModal: function closeCreateTeamModal() {
      this.showCreateTeamForm = false;
    },
    createNewTeam: function createNewTeam() {
      var _this = this;

      axios.post('/teams', {
        name: this.name,
        description: this.description
      }).then(function (response) {
        if (response.data.status == 'success') {
          EventBus.$emit('notification', response.data.message, response.data.status);
          response.data.project.url = 'projects/' + response.data.project.id;
          _this.teams.push(response.data.team);
          _this.showCreateTeamForm = false;
        }
      }).catch(function (error) {
        console.log(error);
        _this.showCreateTeamForm = false;
      });
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
                "absolute bg-white w-48 pin-r mr-2 py-1 shadow-lg rounded z-50",
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07a94250\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/projects.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: { hidden: _vm.activeTab != "projects" } }, [
    _c("div", { class: { hidden: !_vm.showCreateProjectForm } }, [
      _c("div", { staticClass: "absolute pin opacity-75 bg-grey" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded"
        },
        [
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "Name" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hidden" })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.description,
                  expression: "description"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "Description" },
              domProps: { value: _vm.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.description = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hidden" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex flex-row justify-between pt-8 bg-grey-lighter rounded"
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "text-red-lighter hover:font-bold hover:text-red-light",
                  on: { click: _vm.closeCreateProjectModal }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded",
                  on: { click: _vm.createProject }
                },
                [_vm._v("Create")]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-row flex-wrap justify-center" },
      [
        _c(
          "div",
          {
            staticClass:
              "bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer",
            on: { click: _vm.openCreateProjectModal }
          },
          [
            _c("i", { staticClass: "fa fa-plus text-grey-dark text-4xl" }),
            _vm._v(" "),
            _c("span", { staticClass: "text-grey-darker pt-4" }, [
              _vm._v("Add a new project")
            ])
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.projects, function(project, index) {
          return _c("project", {
            key: index,
            attrs: { details: project },
            on: {
              deleted: function($event) {
                _vm.deleteProject(index)
              }
            }
          })
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-07a94250", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-08630533\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/project.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "relative bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4"
    },
    [
      _c(
        "span",
        { staticClass: "w-full h-8 pr-4 pt-2", on: { click: _vm.toggleMenu } },
        [
          _c("i", {
            staticClass:
              "fas fa-ellipsis-h float-right text-grey-darker cursor-pointer"
          })
        ]
      ),
      _vm._v(" "),
      _vm.dropdownMenuShown
        ? _c(
            "div",
            {
              staticClass:
                "absolute rounded shadow-lg pin-r pin-t mt-4 mr-2 p-4 text-grey-darker"
            },
            [
              _c(
                "div",
                {
                  staticClass: "cursor-pointer",
                  on: {
                    click: function($event) {
                      _vm.deleteProject(_vm.project)
                    }
                  }
                },
                [_vm._v("\n            Delete\n        ")]
              )
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "w-full p-2 h-24 flex flex-col justify-end" }, [
        _c(
          "a",
          {
            staticClass: "text-pink text-xl no-underline",
            attrs: { href: _vm.project.url }
          },
          [_vm._v(_vm._s(_vm.project.name))]
        )
      ]),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "text-grey text-sm w-full px-2 h-16 self-start" },
        [_vm._v(_vm._s(_vm.project.description))]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "border-t w-full h-16 flex flex-row justify-around items-center px-2"
        },
        [
          _vm._l(_vm.project.members, function(member, index) {
            return index < 5
              ? _c(
                  "a",
                  { key: index, attrs: { href: "/users/" + member.username } },
                  [
                    _c("img", {
                      staticClass: "rounded-full w-8 h-8 mr-1",
                      attrs: { src: _vm.generateUrl(member.avatar) }
                    })
                  ]
                )
              : _vm._e()
          }),
          _vm._v(" "),
          _vm.project.members.length > 5
            ? _c(
                "span",
                {
                  staticClass:
                    "bg-grey-lighter border-teal border p-2 rounded-full"
                },
                [_vm._v(_vm._s(_vm.project.members.length - 5) + "+")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.project.members.length == 0
            ? _c("span", { staticClass: "text-grey-dark text-center" }, [
                _vm._v("No members yet")
              ])
            : _vm._e()
        ],
        2
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
    require("vue-hot-reload-api")      .rerender("data-v-08630533", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0959d75e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/offices.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: { hidden: _vm.activeTab != "offices" } }, [
    _c("div", { class: { hidden: !_vm.showCreateOfficeForm } }, [
      _c("div", { staticClass: "absolute pin opacity-75 bg-grey" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded",
          attrs: { id: "create-project-form" }
        },
        [
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "Name" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hidden" })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.description,
                  expression: "description"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "Description" },
              domProps: { value: _vm.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.description = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hidden" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex flex-row justify-between pt-8 bg-grey-lighter rounded"
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "text-red-lighter hover:font-bold hover:text-red-light",
                  on: { click: _vm.closeCreateOfficeModal }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded",
                  on: { click: _vm.createNewOffice }
                },
                [_vm._v("Create")]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-row flex-wrap justify-center" },
      [
        _c(
          "div",
          {
            staticClass:
              "bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer",
            on: { click: _vm.openCreateOfficeModal }
          },
          [
            _c("i", { staticClass: "fa fa-plus text-grey-dark text-4xl" }),
            _vm._v(" "),
            _c("span", { staticClass: "text-grey-darker pt-4" }, [
              _vm._v("Add a new office")
            ])
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.offices, function(office) {
          return _c(
            "div",
            {
              staticClass:
                "bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4"
            },
            [
              _vm._m(0, true),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full p-2 h-24 flex flex-col justify-end" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-pink text-xl no-underline",
                      attrs: { href: office.url }
                    },
                    [_vm._v(_vm._s(office.name))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "text-grey text-sm w-full px-2 h-16 self-start"
                },
                [_vm._v(_vm._s(office.description))]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "border-t w-full h-16 flex flex-row justify-around items-center px-2"
                },
                [
                  _vm._l(office.members, function(member, index) {
                    return index < 5
                      ? _c(
                          "a",
                          { attrs: { href: "/users/" + member.username } },
                          [
                            _c("img", {
                              staticClass: "rounded-full w-8 h-8 mr-1",
                              attrs: { src: _vm.generateUrl(member.avatar) }
                            })
                          ]
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  office.members.length > 5
                    ? _c(
                        "span",
                        {
                          staticClass:
                            "bg-grey-lighter border-teal border p-2 rounded-full"
                        },
                        [_vm._v(_vm._s(office.members.length - 5) + "+")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  office.members.length == 0
                    ? _c(
                        "span",
                        { staticClass: "text-grey-dark text-center" },
                        [_vm._v("No members yet")]
                      )
                    : _vm._e()
                ],
                2
              )
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "w-full h-8 pr-4 pt-2" }, [
      _c("i", {
        staticClass:
          "fa fa-ellipsis-h float-right text-grey-darker cursor-pointer"
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0959d75e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2fb2ca65\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/activity.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center text-center rounded m-4"
    },
    [
      _c("header", { staticClass: "w-full relative border-b h-12 pt-4" }, [
        _c(
          "a",
          {
            staticClass: "text-grey-darker font-medium no-underline",
            attrs: {
              href:
                "/" + _vm.resourceType + "/" + _vm.resource.id + "/activities"
            }
          },
          [_vm._v("\n            Activities\n        ")]
        ),
        _vm._v(" "),
        _vm._m(0)
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "text-grey-darker absolute pin-r mr-2" }, [
      _c("i", { staticClass: "fa fa-ellipsis-h" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "w-full h-48 self-start text-left" }, [
      _c(
        "a",
        {
          staticClass: "flex flex-row p-4 no-underline text-grey-darker",
          attrs: { href: "#" }
        },
        [
          _c("img", {
            staticClass: "rounded-full w-8 h-8 mr-2",
            attrs: { src: "http://placehold.it/34x34" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-sm" }, [
            _c("p", [
              _c("span", { staticClass: "text-pink" }, [_vm._v("John")]),
              _c("span", [_vm._v(" added a new task")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-xs" }, [_vm._v("15 min ago")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "flex flex-row p-4 no-underline text-grey-darker",
          attrs: { href: "#" }
        },
        [
          _c("img", {
            staticClass: "rounded-full w-8 h-8 mr-2",
            attrs: { src: "http://placehold.it/34x34" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-sm" }, [
            _c("p", [
              _c("span", { staticClass: "text-pink" }, [_vm._v("John")]),
              _c("span", [_vm._v(" commented in ")]),
              _c("span", { staticClass: "text-pink" }, [
                _vm._v("Review Meeting")
              ])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-xs" }, [_vm._v("20 min ago")])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "flex flex-row p-4 no-underline text-grey-darker",
          attrs: { href: "#" }
        },
        [
          _c("img", {
            staticClass: "rounded-full w-8 h-8 mr-2",
            attrs: { src: "http://placehold.it/34x34" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "text-sm" }, [
            _c("p", [
              _c("span", { staticClass: "text-pink" }, [_vm._v("James")]),
              _c("span", [_vm._v(" archived a discussion")])
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-xs" }, [_vm._v("1 hr ago")])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2fb2ca65", module.exports)
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56857460\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/teams.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: { hidden: _vm.activeTab != "teams" } }, [
    _c("div", { class: { hidden: !_vm.showCreateTeamForm } }, [
      _c("div", { staticClass: "absolute pin opacity-75 bg-grey" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "fixed pin-x w-1/3 z-10 bg-grey-lighter mx-auto p-8 rounded",
          attrs: { id: "create-project-form" }
        },
        [
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "Name" },
              domProps: { value: _vm.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hidden" })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "py-2" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.description,
                  expression: "description"
                }
              ],
              staticClass:
                "w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker",
              attrs: { type: "text", placeholder: "Description" },
              domProps: { value: _vm.description },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.description = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "hidden" })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "flex flex-row justify-between pt-8 bg-grey-lighter rounded"
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "text-red-lighter hover:font-bold hover:text-red-light",
                  on: { click: _vm.closeCreateTeamModal }
                },
                [_vm._v("Cancel")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "bg-teal-light text-white font-medium hover:bg-teal-dark py-3 px-4 rounded",
                  on: { click: _vm.createNewTeam }
                },
                [_vm._v("Create")]
              )
            ]
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-row flex-wrap justify-center" },
      [
        _c(
          "div",
          {
            staticClass:
              "bg-white shadow-md w-64 h-64 flex flex-col justify-center items-center text-center rounded m-4 cursor-pointer",
            on: { click: _vm.openCreateTeamModal }
          },
          [
            _c("i", { staticClass: "fa fa-plus text-grey-dark text-4xl" }),
            _vm._v(" "),
            _c("span", { staticClass: "text-grey-darker pt-4" }, [
              _vm._v("Add a new team")
            ])
          ]
        ),
        _vm._v(" "),
        _vm._l(_vm.teams, function(team) {
          return _c(
            "div",
            {
              staticClass:
                "bg-white shadow-md w-64 h-64 flex flex-row flex-wrap justify-center items-center text-center rounded m-4"
            },
            [
              _vm._m(0, true),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "w-full p-2 h-24 flex flex-col justify-end" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "text-pink text-xl no-underline",
                      attrs: { href: team.url }
                    },
                    [_vm._v(_vm._s(team.name))]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "text-grey text-sm w-full px-2 h-16 self-start"
                },
                [_vm._v(_vm._s(team.description))]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "border-t w-full h-16 flex flex-row justify-around items-center px-2"
                },
                [
                  _vm._l(team.members, function(member, index) {
                    return index < 5
                      ? _c(
                          "a",
                          { attrs: { href: "/users/" + member.username } },
                          [
                            _c("img", {
                              staticClass: "rounded-full w-8 h-8 mr-1",
                              attrs: { src: _vm.generateUrl(member.avatar) }
                            })
                          ]
                        )
                      : _vm._e()
                  }),
                  _vm._v(" "),
                  team.members.length > 5
                    ? _c(
                        "span",
                        {
                          staticClass:
                            "bg-grey-lighter border-teal border p-2 rounded-full"
                        },
                        [_vm._v(_vm._s(team.members.length - 5) + "+")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  team.members.length < 1
                    ? _c(
                        "span",
                        { staticClass: "text-grey-dark text-center" },
                        [_vm._v("No members yet")]
                      )
                    : _vm._e()
                ],
                2
              )
            ]
          )
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "w-full h-8 pr-4 pt-2" }, [
      _c("i", {
        staticClass:
          "fa fa-ellipsis-h float-right text-grey-darker cursor-pointer"
      })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56857460", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ebcac14\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "container mx-auto w-3/4 2xl:w-3/5 mt-8" },
    [
      _c(
        "div",
        {
          staticClass:
            "flex flex-row justify-around mb-8 pb-3 border-b-2 text-grey"
        },
        [
          _c(
            "span",
            {
              class: {
                "text-grey-darker font-semibold border-teal border-b-4 pb-3 -mb-4":
                  _vm.active === "projects",
                "cursor-pointer": _vm.active != "projects"
              },
              on: {
                click: function($event) {
                  _vm.activeThisTab("projects")
                }
              }
            },
            [_vm._v("\n            Projects\n        ")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              class: {
                "text-grey-darker font-semibold border-teal border-b-4 pb-3 -mb-4":
                  _vm.active === "teams",
                "cursor-pointer": _vm.active != "teams"
              },
              on: {
                click: function($event) {
                  _vm.activeThisTab("teams")
                }
              }
            },
            [_vm._v("\n            Teams\n        ")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              class: {
                "text-grey-darker font-semibold border-teal border-b-4 pb-3 -mb-4":
                  _vm.active === "offices",
                "cursor-pointer": _vm.active != "offices"
              },
              on: {
                click: function($event) {
                  _vm.activeThisTab("offices")
                }
              }
            },
            [_vm._v("\n            Offices\n        ")]
          )
        ]
      ),
      _vm._v(" "),
      _c("projects", { attrs: { "active-tab": _vm.active } }),
      _vm._v(" "),
      _c("teams", { attrs: { "active-tab": _vm.active } }),
      _vm._v(" "),
      _c("offices", { attrs: { "active-tab": _vm.active } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6ebcac14", module.exports)
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
              "absolute bg-white w-64 mt-5 mr-8 py-4 shadow-lg rounded z-50",
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

/***/ "./resources/assets/js/bootstrap.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_echo__ = __webpack_require__("./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_laravel_echo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_laravel_echo__);

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");

window.axios = __webpack_require__("./node_modules/axios/index.js");

window.luxon = __webpack_require__("./node_modules/luxon/build/cjs-browser/luxon.js");

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

/***/ "./resources/assets/js/components/home.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/home.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6ebcac14\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/home.vue")
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
Component.options.__file = "resources/assets/js/components/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ebcac14", Component.options)
  } else {
    hotAPI.reload("data-v-6ebcac14", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/activity.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/activity.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2fb2ca65\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/activity.vue")
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
Component.options.__file = "resources/assets/js/components/partials/activity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2fb2ca65", Component.options)
  } else {
    hotAPI.reload("data-v-2fb2ca65", Component.options)
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

/***/ "./resources/assets/js/components/partials/offices.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/offices.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0959d75e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/offices.vue")
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
Component.options.__file = "resources/assets/js/components/partials/offices.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0959d75e", Component.options)
  } else {
    hotAPI.reload("data-v-0959d75e", Component.options)
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

/***/ "./resources/assets/js/components/partials/project.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/project.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-08630533\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/project.vue")
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
Component.options.__file = "resources/assets/js/components/partials/project.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08630533", Component.options)
  } else {
    hotAPI.reload("data-v-08630533", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/projects.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/projects.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-07a94250\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/projects.vue")
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
Component.options.__file = "resources/assets/js/components/partials/projects.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-07a94250", Component.options)
  } else {
    hotAPI.reload("data-v-07a94250", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/components/partials/teams.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/partials/teams.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-56857460\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/partials/teams.vue")
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
Component.options.__file = "resources/assets/js/components/partials/teams.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56857460", Component.options)
  } else {
    hotAPI.reload("data-v-56857460", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__("./resources/assets/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_vue__ = __webpack_require__("./resources/assets/js/components/home.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue__ = __webpack_require__("./resources/assets/js/components/partials/navbar.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue__ = __webpack_require__("./resources/assets/js/components/partials/notificationPopup.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue__);





/* eslint-disable no-unused-vars */
var app = new Vue({
  el: '#app',
  components: {
    home: __WEBPACK_IMPORTED_MODULE_1__components_home_vue___default.a, navbar: __WEBPACK_IMPORTED_MODULE_2__components_partials_navbar_vue___default.a, notificationPopup: __WEBPACK_IMPORTED_MODULE_3__components_partials_notificationPopup_vue___default.a
  }
});

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/pages/home.js");


/***/ })

},[8]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvYWN0aXZpdHkudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL29mZmljZXMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2plY3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvamVjdHMudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvdGVhbXMudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXJhdmVsLWVjaG8vZGlzdC9lY2hvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZT83YjBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0cy52dWU/MDY3OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvamVjdC52dWU/ZWI3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvb2ZmaWNlcy52dWU/OTAxYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvYWN0aXZpdHkudnVlPzVkMTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZT9iZjkxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlP2U5YTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3RlYW1zLnZ1ZT9lMjRiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9ob21lLnZ1ZT8xYzFiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWU/OWY1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2FjdGl2aXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL29mZmljZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvamVjdHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy90ZWFtcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9ob21lLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIlZ1ZSIsInJlcXVpcmUiLCJheGlvcyIsImx1eG9uIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImlvIiwiRWNobyIsImJyb2FkY2FzdGVyIiwiaG9zdCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJtaXhpbiIsIm1ldGhvZHMiLCJnZW5lcmF0ZVVybCIsInZhbHVlIiwidG9TdHJpbmciLCJwcm90b2NvbCIsIkV2ZW50QnVzIiwiYXBwIiwiZWwiLCJjb21wb25lbnRzIiwiaG9tZSIsIm5hdmJhciIsIm5vdGlmaWNhdGlvblBvcHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBO0FBQ0E7QUFDQTs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVFQUF1RSxhQUFhO0FBQ3BGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVELHNCOzs7Ozs7O0FDeHhCQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNc0IsTUFBTSxJQUFJdEIsR0FBSixDQUFRO0FBQ2xCdUIsTUFBSSxNQURjO0FBRWxCQyxjQUFZO0FBQ1ZDLFVBQUEsNERBRFUsRUFDSkMsUUFBQSx1RUFESSxFQUNJQyxtQkFBQSxrRkFBQUE7QUFESjtBQUZNLENBQVIsQ0FBWixDIiwiZmlsZSI6Ii9qcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byB3LTMvNCAyeGw6dy0zLzUgbXQtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBtYi04IHBiLTMgYm9yZGVyLWItMiB0ZXh0LWdyZXlcIj5cbiAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cImFjdGl2ZVRoaXNUYWIoJ3Byb2plY3RzJylcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsndGV4dC1ncmV5LWRhcmtlciBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTQgcGItMyAtbWItNCc6KGFjdGl2ZSA9PT0gJ3Byb2plY3RzJyksICdjdXJzb3ItcG9pbnRlcic6IChhY3RpdmUgIT0gJ3Byb2plY3RzJyl9XCI+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cImFjdGl2ZVRoaXNUYWIoJ3RlYW1zJylcIlxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyd0ZXh0LWdyZXktZGFya2VyIGZvbnQtc2VtaWJvbGQgYm9yZGVyLXRlYWwgYm9yZGVyLWItNCBwYi0zIC1tYi00JzooYWN0aXZlID09PSAndGVhbXMnKSwgJ2N1cnNvci1wb2ludGVyJzogKGFjdGl2ZSAhPSAndGVhbXMnKX1cIj5cbiAgICAgICAgICAgICAgICBUZWFtc1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiYWN0aXZlVGhpc1RhYignb2ZmaWNlcycpXCJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsndGV4dC1ncmV5LWRhcmtlciBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTQgcGItMyAtbWItNCc6KGFjdGl2ZSA9PT0gJ29mZmljZXMnKSwgJ2N1cnNvci1wb2ludGVyJzogKGFjdGl2ZSAhPSAnb2ZmaWNlcycpfVwiPlxuICAgICAgICAgICAgICAgIE9mZmljZXNcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcm9qZWN0cyA6YWN0aXZlLXRhYj1cImFjdGl2ZVwiPjwvcHJvamVjdHM+XG4gICAgICAgIDx0ZWFtcyA6YWN0aXZlLXRhYj1cImFjdGl2ZVwiPjwvdGVhbXM+XG4gICAgICAgIDxvZmZpY2VzIDphY3RpdmUtdGFiPVwiYWN0aXZlXCI+PC9vZmZpY2VzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBwcm9qZWN0cyBmcm9tICcuL3BhcnRpYWxzL3Byb2plY3RzLnZ1ZSdcbmltcG9ydCB0ZWFtcyBmcm9tICcuL3BhcnRpYWxzL3RlYW1zLnZ1ZSdcbmltcG9ydCBvZmZpY2VzIGZyb20gJy4vcGFydGlhbHMvb2ZmaWNlcy52dWUnXG5pbXBvcnQgYWN0aXZpdHkgZnJvbSAnLi9wYXJ0aWFscy9hY3Rpdml0eS52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIHByb2plY3RzLCB0ZWFtcywgb2ZmaWNlcywgYWN0aXZpdHlcbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBhY3RpdmU6ICdwcm9qZWN0cydcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICBhY3RpdmVUaGlzVGFiICh0YWIpIHtcbiAgICAgIGlmICh0YWIgIT0gdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0YWJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9ob21lLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwidy1mdWxsIHJlbGF0aXZlIGJvcmRlci1iIGgtMTIgcHQtNFwiPlxuICAgICAgICAgICAgPGEgOmhyZWY9XCInLycgKyByZXNvdXJjZVR5cGUgKyAnLycgKyByZXNvdXJjZS5pZCArICcvYWN0aXZpdGllcydcIiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lXCI+XG4gICAgICAgICAgICAgICAgQWN0aXZpdGllc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyZXktZGFya2VyIGFic29sdXRlIHBpbi1yIG1yLTJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLWhcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGgtNDggc2VsZi1zdGFydCB0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJmbGV4IGZsZXgtcm93IHAtNCBuby11bmRlcmxpbmUgdGV4dC1ncmV5LWRhcmtlclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zNHgzNFwiIGNsYXNzPVwicm91bmRlZC1mdWxsIHctOCBoLTggbXItMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXBpbmtcIj5Kb2huPC9zcGFuPjxzcGFuPiBhZGRlZCBhIG5ldyB0YXNrPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC14c1wiPjE1IG1pbiBhZ288L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBwLTQgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzR4MzRcIiBjbGFzcz1cInJvdW5kZWQtZnVsbCB3LTggaC04IG1yLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1waW5rXCI+Sm9objwvc3Bhbj48c3Bhbj4gY29tbWVudGVkIGluIDwvc3Bhbj48c3BhbiBjbGFzcz1cInRleHQtcGlua1wiPlJldmlldyBNZWV0aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC14c1wiPjIwIG1pbiBhZ288L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBwLTQgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzR4MzRcIiBjbGFzcz1cInJvdW5kZWQtZnVsbCB3LTggaC04IG1yLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1waW5rXCI+SmFtZXM8L3NwYW4+PHNwYW4+IGFyY2hpdmVkIGEgZGlzY3Vzc2lvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQteHNcIj4xIGhyIGFnbzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogWydyZXNvdXJjZScsICdyZXNvdXJjZVR5cGUnXVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2FjdGl2aXR5LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgPG5hdiBjbGFzcz1cImJnLXdoaXRlIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGgtMTIgcGwtNCBtZDpweC00IHNoYWRvd1wiPlxuICAgIDxhIGNsYXNzPVwidGV4dC10ZWFsIHRleHQtMnhsIG5vLXVuZGVybGluZSBzZWxmLWNlbnRlclwiIDpocmVmPVwidXJsLnNpdGVcIj5cbiAgICAgICAgR09PRFdPUktcbiAgICA8L2E+XG5cbiAgICA8ZGl2IGNsYXNzPVwibWQ6ZmxleFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgYm9yZGVyLWwgaC1mdWxsXCI+XG4gICAgICAgIDxub3RpZmljYXRpb24tZHJvcGRvd24+PC9ub3RpZmljYXRpb24tZHJvcGRvd24+XG4gICAgICAgIDxwcm9maWxlLWRyb3Bkb3duPjwvcHJvZmlsZS1kcm9wZG93bj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbm90aWZpY2F0aW9uRHJvcGRvd24gZnJvbSBcIi4vbm90aWZpY2F0aW9uRHJvcGRvd25cIjtcbmltcG9ydCBwcm9maWxlRHJvcGRvd24gZnJvbSBcIi4vcHJvZmlsZURyb3Bkb3duXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtub3RpZmljYXRpb25Ecm9wZG93biwgcHJvZmlsZURyb3Bkb3dufSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICB1c2VyOiBuYXZiYXIudXNlcixcbiAgICB0b2tlbjogTGFyYXZlbC5jc3JmVG9rZW4sXG4gICAgdXJsOiBuYXZiYXIubmF2VXJsLFxuICB9KVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci52dWUiLCI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwicHgtNCBzZWxmLWNlbnRlclwiPlxuICAgIDxkaXYgaWQ9XCJub3RpZmljYXRpb25cIiBjbGFzcz1cInRleHQtdGVhbC1saWdodCB0ZXh0LWJhc2Ugbm8tdW5kZXJsaW5lIGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwidG9nZ2xlTm90aWZpY2F0aW9uXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWJlbGwgZm9udC1ib2xkIHRleHQteGxcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgIDxpIHYtaWY9XCJ1bnJlYWROb3RpZmljYXRpb25cIiBjbGFzcz1cImZhIGZhLWNpcmNsZSB0ZXh0LXJlZC1saWdodCB0ZXh0LXNtIGFic29sdXRlIHBpbi10IG10LTMgbWwtM1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IHYtaWY9XCJub3RpZmljYXRpb25TaG93blwiIGNsYXNzPVwiYWJzb2x1dGUgYmctd2hpdGUgdy02NCBtdC01IG1yLTggcHktNCBzaGFkb3ctbGcgcm91bmRlZCB6LTUwXCIgc3R5bGU9XCJyaWdodDogNSU7XCI+XG4gICAgICAgIDxhIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgbGlzdC1yZXNldCBweC00IHB5LTIgdGV4dC1ncmV5LWRhcmsgbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTJcIiA6c3JjPVwiZ2VuZXJhdGVVcmwodXNlci5hdmF0YXIpXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweS0xIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgY29tbWVudGVkIG9uIHlvdXIgcG9zdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweS0xIHRleHQteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgMiBtaW4gYWdvXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGxpc3QtcmVzZXQgcHgtNCBweS0yIHRleHQtZ3JleS1kYXJrIG5vLXVuZGVybGluZSBibG9ja1wiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtci0yXCIgOnNyYz1cImdlbmVyYXRlVXJsKHVzZXIuYXZhdGFyKVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktMSB0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRlZCBvbiB5b3VyIHBvc3RcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHktMSB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDIgbWluIGFnb1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBib3JkZXItdFwiPjwvc3Bhbj5cbiAgICAgICAgPGEgY2xhc3M9XCJsaXN0LXJlc2V0IHB4LTQgcHQtMiB0ZXh0LWJsdWUtbGlnaHQgdGV4dC1jZW50ZXIgbm8tdW5kZXJsaW5lIGJsb2NrXCIgaHJlZj1cIi9ub3RpZmljYXRpb25zXCI+XG4gICAgICAgICAgICBWaWV3IEFsbFxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgdXNlcjogbmF2YmFyLnVzZXIsXG4gICAgdG9rZW46IExhcmF2ZWwuY3NyZlRva2VuLFxuICAgIHVybDogbmF2YmFyLm5hdlVybCxcbiAgICBub3RpZmljYXRpb25TaG93bjogZmFsc2UsXG4gICAgdW5yZWFkTm90aWZpY2F0aW9uOiBmYWxzZSxcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGVOb3RpZmljYXRpb24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLm5vdGlmaWNhdGlvblNob3duKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMuaGlkZU5vdGlmaWNhdGlvbilcbiAgICAgICAgdGhpcy5oaWRlTm90aWZpY2F0aW9uKGV2ZW50KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oaWRlTm90aWZpY2F0aW9uKVxuICAgICAgICB0aGlzLnNob3dOb3RpZmljYXRpb24oKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd05vdGlmaWNhdGlvbihldmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvZmlsZURyb3Bkb3duU2hvd24pIHtcbiAgICAgICAgdGhpcy5wcm9maWxlRHJvcGRvd25TaG93biA9IGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblNob3duID0gdHJ1ZVxuICAgIH0sXG4gICAgaGlkZU5vdGlmaWNhdGlvbihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBldmVudC5rZXkgIT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblNob3duID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJbbm90aWZpY2F0aW9uU2hvd24gPyAnJyA6ICdoaWRkZW4nLCAobWVzc2FnZVR5cGUgPT09ICdzdWNjZXNzJykgPyAndGV4dC10ZWFsLWxpZ2h0JyA6ICd0ZXh0LXJlZCcgXVwiIGNsYXNzPVwiZml4ZWQgcGluLXQgYmctd2hpdGUgdGV4dC1sZyByb3VuZGVkIGNvbnRhaW5lciBteC1hdXRvIG1kOnctMS8yIG10LTE2IHB5LTYgcHgtOCBzaGFkb3ctbGdcIiBzdHlsZT1cImxlZnQ6IDA7IHJpZ2h0OiAwOyBtYXgtd2lkdGg6IDY0MHB4O1wiPlxuICAgICAgICB7e21lc3NhZ2V9fSBcbiAgICAgICAgPGRpdiBAY2xpY2s9XCJjbG9zZU5vdGlmaWNhdGlvblwiIGNsYXNzPVwiaW5saW5lXCI+PGkgY2xhc3M9XCJmYXMgZmEtdGltZXMgZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXJcIj48L2k+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIG5vdGlmaWNhdGlvblNob3duOiBmYWxzZSxcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBtZXNzYWdlVHlwZTogJycsXG4gIH0pLFxuICBtZXRob2RzOiB7XG4gICAgY2xvc2VOb3RpZmljYXRpb24gKCkge1xuICAgICAgdGhpcy5ub3RpZmljYXRpb25TaG93biA9IGZhbHNlXG4gICAgfSxcbiAgICBzaG93Tm90aWZpY2F0aW9uIChtZXNzYWdlLCBtZXNzYWdlVHlwZSkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgdGhpcy5tZXNzYWdlVHlwZSA9IG1lc3NhZ2VUeXBlXG4gICAgICB0aGlzLm5vdGlmaWNhdGlvblNob3duID0gdHJ1ZVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VOb3RpZmljYXRpb24oKVxuICAgICAgfSwgMzAwMClcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZWQgKCkge1xuICAgIEV2ZW50QnVzLiRvbignbm90aWZpY2F0aW9uJywgdGhpcy5zaG93Tm90aWZpY2F0aW9uKVxuICB9LFxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICBFdmVudEJ1cy4kb2ZmKCdub3RpZmljYXRpb24nLCB0aGlzLnNob3dOb3RpZmljYXRpb24pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJ7J2hpZGRlbic6IChhY3RpdmVUYWIgIT0gJ29mZmljZXMnKX1cIj5cbiAgICAgICAgPCEtLSBDcmVhdGUgT2ZmaWNlIEZvcm0gLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwieydoaWRkZW4nOiAhc2hvd0NyZWF0ZU9mZmljZUZvcm19XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgcGluIG9wYWNpdHktNzUgYmctZ3JleVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImNyZWF0ZS1wcm9qZWN0LWZvcm1cIiBjbGFzcz1cImZpeGVkIHBpbi14IHctMS8zIHotMTAgYmctZ3JleS1saWdodGVyIG14LWF1dG8gcC04IHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInB5LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwidy1mdWxsIHNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgcHktMiBweC0zIHRleHQtZ3JleS1kYXJrZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdi1tb2RlbD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgdi1tb2RlbD1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlkZGVuXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gcHQtOCBiZy1ncmV5LWxpZ2h0ZXIgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImNsb3NlQ3JlYXRlT2ZmaWNlTW9kYWxcIiBjbGFzcz1cInRleHQtcmVkLWxpZ2h0ZXIgaG92ZXI6Zm9udC1ib2xkIGhvdmVyOnRleHQtcmVkLWxpZ2h0XCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiY3JlYXRlTmV3T2ZmaWNlXCIgY2xhc3M9XCJiZy10ZWFsLWxpZ2h0IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gaG92ZXI6YmctdGVhbC1kYXJrIHB5LTMgcHgtNCByb3VuZGVkXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNCBjdXJzb3ItcG9pbnRlclwiIFxuICAgICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5DcmVhdGVPZmZpY2VNb2RhbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcGx1cyB0ZXh0LWdyZXktZGFyayB0ZXh0LTR4bFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleS1kYXJrZXIgcHQtNFwiPkFkZCBhIG5ldyBvZmZpY2U8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIHNoYWRvdy1tZCB3LTY0IGgtNjQgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHJvdW5kZWQgbS00XCIgXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJvZmZpY2UgaW4gb2ZmaWNlc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidy1mdWxsIGgtOCBwci00IHB0LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1lbGxpcHNpcy1oIGZsb2F0LXJpZ2h0IHRleHQtZ3JleS1kYXJrZXIgY3Vyc29yLXBvaW50ZXJcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcC0yIGgtMjQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInRleHQtcGluayB0ZXh0LXhsIG5vLXVuZGVybGluZVwiIDpocmVmPVwib2ZmaWNlLnVybFwiPnt7IG9mZmljZS5uYW1lIH19PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5IHRleHQtc20gdy1mdWxsIHB4LTIgaC0xNiBzZWxmLXN0YXJ0XCI+e3sgb2ZmaWNlLmRlc2NyaXB0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdCB3LWZ1bGwgaC0xNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBweC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHYtZm9yPVwiKG1lbWJlciwgaW5kZXgpIGluIG9mZmljZS5tZW1iZXJzXCIgdi1pZj1cImluZGV4IDwgNVwiIDpocmVmPVwiJy91c2Vycy8nICsgbWVtYmVyLnVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZW5lcmF0ZVVybChtZW1iZXIuYXZhdGFyKVwiIGNsYXNzPVwicm91bmRlZC1mdWxsIHctOCBoLTggbXItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvZmZpY2UubWVtYmVycy5sZW5ndGggPiA1XCIgY2xhc3M9XCJiZy1ncmV5LWxpZ2h0ZXIgYm9yZGVyLXRlYWwgYm9yZGVyIHAtMiByb3VuZGVkLWZ1bGxcIj57eyBvZmZpY2UubWVtYmVycy5sZW5ndGggLSA1IH19Kzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIm9mZmljZS5tZW1iZXJzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJ0ZXh0LWdyZXktZGFyayB0ZXh0LWNlbnRlclwiPk5vIG1lbWJlcnMgeWV0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgIG9mZmljZXM6IGRhdGEub2ZmaWNlcy5tYXAoKG9mZmljZSkgPT4ge1xuICAgICAgICAgIG9mZmljZS51cmwgPSAnb2ZmaWNlcy8nICsgb2ZmaWNlLmlkXG4gICAgICAgICAgcmV0dXJuIG9mZmljZVxuICAgICAgICB9KSxcbiAgICAgICAgc2hvd0NyZWF0ZU9mZmljZUZvcm06IGZhbHNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICB9KSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZVRhYjoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBjcmVhdGVOZXdPZmZpY2UgKCkge1xuICAgICAgICAgIGF4aW9zLnBvc3QoJy9vZmZpY2VzJywge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBFdmVudEJ1cy4kZW1pdCgnbm90aWZpY2F0aW9uJywgcmVzcG9uc2UuZGF0YS5tZXNzYWdlLCByZXNwb25zZS5kYXRhLnN0YXR1cylcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLm9mZmljZS51cmwgPSAnb2ZmaWNlcy8nICsgcmVzcG9uc2UuZGF0YS5vZmZpY2UuaWRcbiAgICAgICAgICAgICAgICB0aGlzLm9mZmljZXMucHVzaChyZXNwb25zZS5kYXRhLm9mZmljZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcmVhdGVPZmZpY2VGb3JtID0gZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgRXZlbnRCdXMuJGVtaXQoJ25vdGlmaWNhdGlvbicsIGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgZXJyb3IucmVzcG9uc2UuZGF0YS5zdGF0dXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZUNyZWF0ZU9mZmljZU1vZGFsICgpIHtcbiAgICAgICAgICB0aGlzLnNob3dDcmVhdGVPZmZpY2VGb3JtID0gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgb3BlbkNyZWF0ZU9mZmljZU1vZGFsICgpIHtcbiAgICAgICAgICB0aGlzLnNob3dDcmVhdGVPZmZpY2VGb3JtID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9vZmZpY2VzLnZ1ZSIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJweC00IGJvcmRlci1sIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHAtNFwiPlxuICA8ZGl2IGlkPVwicHJvZmlsZS1kcm9wZG93blwiIGNsYXNzPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIiBAY2xpY2s9XCJ0b2dnbGVQcm9maWxlRHJvcGRvd25cIj5cbiAgICA8aW1nIGNsYXNzPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBtZDptci0yXCIgOnNyYz1cImdlbmVyYXRlVXJsKHVzZXIuYXZhdGFyKVwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmV5LWRhcmtlciB0ZXh0LWJhc2Ugbm8tdW5kZXJsaW5lIGhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAge3sgdXNlci5uYW1lIH19XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWRvd25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiB2LWlmPVwicHJvZmlsZURyb3Bkb3duU2hvd25cIiBpZD1cInByb2ZpbGUtbWVudVwiIGNsYXNzPVwiYWJzb2x1dGUgYmctd2hpdGUgdy00OCBwaW4tciBtci0yIHB5LTEgc2hhZG93LWxnIHJvdW5kZWQgei01MFwiIHN0eWxlPVwidG9wOjMuNXJlbTtcIj5cbiAgICA8YSBjbGFzcz1cInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrIGJsb2NrIGZvbnQtbWVkaXVtXCIgOmhyZWY9XCJwcm9maWxlVXJsXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInctNiBpbmxpbmUtYmxvY2tcIj48aSBjbGFzcz1cInByLTEgZmEgZmEtdXNlclwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgWW91ciBwcm9maWxlXG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwicHgtNCBweS0yIGhvdmVyOmJnLXRlYWwgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LWdyZXktZGFyayBmb250LW1lZGl1bSBuby11bmRlcmxpbmUgYmxvY2tcIiBocmVmPVwiL2FkbWluXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInctNiBpbmxpbmUtYmxvY2tcIj48aSBjbGFzcz1cInByLTEgZmFzIGZhLXNoaWVsZC1hbHQgZm9udC1yZWd1bGFyXCI+PC9pPjwvc3Bhbj5cbiAgICAgIEFkbWluXG4gICAgPC9hPlxuICAgIDxhIGNsYXNzPVwicHgtNCBweS0yIGhvdmVyOmJnLXRlYWwgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LWdyZXktZGFyayBmb250LW1lZGl1bSBuby11bmRlcmxpbmUgYmxvY2tcIiBocmVmPVwiI1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3LTYgaW5saW5lLWJsb2NrXCI+PGkgY2xhc3M9XCJwci0xIGZhIGZhLWNvZyBmb250LXJlZ3VsYXJcIj48L2k+PC9zcGFuPlxuICAgICAgU2V0dGluZ3NcbiAgICA8L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJibG9jayBib3JkZXItdFwiPjwvc3Bhbj5cbiAgICA8YSBjbGFzcz1cInB4LTQgcHktMiBob3ZlcjpiZy10ZWFsIGhvdmVyOnRleHQtd2hpdGUgdGV4dC1ncmV5LWRhcmsgZm9udC1tZWRpdW0gbm8tdW5kZXJsaW5lIGJsb2NrXCIgOmhyZWY9XCJ1cmwubG9nb3V0XCIgQGNsaWNrPVwibG9nb3V0VXNlclwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3LTYgaW5saW5lLWJsb2NrXCI+PGkgY2xhc3M9XCJwci0xIGZhcyBmYS1zaWduLW91dC1hbHQgZm9udC1yZWd1bGFyXCI+PC9pPjwvc3Bhbj5cbiAgICAgIExvZ291dFxuICAgIDwvYT5cbiAgPC9kaXY+ICAgICAgICAgICAgXG4gIDxmb3JtIGlkPVwibG9nb3V0LWZvcm1cIiA6YWN0aW9uPVwidXJsLmxvZ291dFwiIG1ldGhvZD1cIlBPU1RcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJ0b2tlblwiPlxuICA8L2Zvcm0+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6ICgpID0+ICh7XG4gICAgdXNlcjogbmF2YmFyLnVzZXIsXG4gICAgdG9rZW46IExhcmF2ZWwuY3NyZlRva2VuLFxuICAgIHVybDogbmF2YmFyLm5hdlVybCxcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgcHJvZmlsZVVybDogbmF2YmFyLm5hdlVybC5zaXRlICsgXCIvdXNlcnMvXCIgKyBuYXZiYXIudXNlci51c2VybmFtZSxcbiAgICBwcm9maWxlRHJvcGRvd25TaG93bjogZmFsc2VcbiAgfSksXG4gIG1ldGhvZHM6IHtcbiAgICBsb2dvdXRVc2VyKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ291dC1mb3JtXCIpLnN1Ym1pdCgpXG4gICAgfSxcbiAgICB0b2dnbGVQcm9maWxlRHJvcGRvd24oZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLnByb2ZpbGVEcm9wZG93blNob3duKSB7XG4gICAgICAgIHRoaXMuaGlkZVByb2ZpbGVEcm9wZG93bihldmVudClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oaWRlUHJvZmlsZURyb3Bkb3duKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93UHJvZmlsZURyb3Bkb3duKClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oaWRlUHJvZmlsZURyb3Bkb3duKVxuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd1Byb2ZpbGVEcm9wZG93bihldmVudCkge1xuICAgICAgaWYgKHRoaXMubm90aWZpY2F0aW9uU2hvd24pIHtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TaG93biA9IGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLnByb2ZpbGVEcm9wZG93blNob3duID0gdHJ1ZVxuICAgIH0sXG4gICAgaGlkZVByb2ZpbGVEcm9wZG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBldmVudC5rZXkgIT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aGlzLnByb2ZpbGVEcm9wZG93blNob3duID0gZmFsc2VcbiAgICB9XG4gIH0sXG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNFwiPlxuICAgICAgICA8c3BhbiBAY2xpY2s9XCJ0b2dnbGVNZW51XCIgY2xhc3M9XCJ3LWZ1bGwgaC04IHByLTQgcHQtMlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZWxsaXBzaXMtaCBmbG9hdC1yaWdodCB0ZXh0LWdyZXktZGFya2VyIGN1cnNvci1wb2ludGVyXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxkaXYgdi1pZj1cImRyb3Bkb3duTWVudVNob3duXCIgY2xhc3M9XCJhYnNvbHV0ZSByb3VuZGVkIHNoYWRvdy1sZyBwaW4tciBwaW4tdCBtdC00IG1yLTIgcC00IHRleHQtZ3JleS1kYXJrZXJcIj5cbiAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwiZGVsZXRlUHJvamVjdChwcm9qZWN0KVwiIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBwLTIgaC0yNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICA8YSBjbGFzcz1cInRleHQtcGluayB0ZXh0LXhsIG5vLXVuZGVybGluZVwiIDpocmVmPVwicHJvamVjdC51cmxcIj57eyBwcm9qZWN0Lm5hbWUgfX08L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleSB0ZXh0LXNtIHctZnVsbCBweC0yIGgtMTYgc2VsZi1zdGFydFwiPnt7IHByb2plY3QuZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdCB3LWZ1bGwgaC0xNiBmbGV4IGZsZXgtcm93IGp1c3RpZnktYXJvdW5kIGl0ZW1zLWNlbnRlciBweC0yXCI+XG4gICAgICAgICAgICA8YSB2LWZvcj1cIihtZW1iZXIsIGluZGV4KSBpbiBwcm9qZWN0Lm1lbWJlcnNcIiA6a2V5PVwiaW5kZXhcIiB2LWlmPVwiaW5kZXggPCA1XCIgOmhyZWY9XCInL3VzZXJzLycgKyBtZW1iZXIudXNlcm5hbWVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZW5lcmF0ZVVybChtZW1iZXIuYXZhdGFyKVwiIGNsYXNzPVwicm91bmRlZC1mdWxsIHctOCBoLTggbXItMVwiPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInByb2plY3QubWVtYmVycy5sZW5ndGggPiA1XCIgY2xhc3M9XCJiZy1ncmV5LWxpZ2h0ZXIgYm9yZGVyLXRlYWwgYm9yZGVyIHAtMiByb3VuZGVkLWZ1bGxcIj57eyBwcm9qZWN0Lm1lbWJlcnMubGVuZ3RoIC0gNSB9fSs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwicHJvamVjdC5tZW1iZXJzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJ0ZXh0LWdyZXktZGFyayB0ZXh0LWNlbnRlclwiPk5vIG1lbWJlcnMgeWV0PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IFsnZGV0YWlscyddLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0OiB0aGlzLmRldGFpbHMsXG4gICAgICAgICAgICBkcm9wZG93bk1lbnVTaG93bjogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGVNZW51KCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnVTaG93biA9ICEgdGhpcy5kcm9wZG93bk1lbnVTaG93blxuICAgICAgICB9LFxuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShgL3Byb2plY3RzLyR7cHJvamVjdC5pZH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkZWxldGVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcm9wZG93bk1lbnVTaG93biA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgICAgICAgRXZlbnRCdXMuJGVtaXQoJ25vdGlmaWNhdGlvbicsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSwgcmVzcG9uc2UuZGF0YS5zdGF0dXMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25NZW51U2hvd24gPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50QnVzLiRlbWl0KCdub3RpZmljYXRpb24nLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsIGVycm9yLnJlc3BvbnNlLmRhdGEuc3RhdHVzKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0LnZ1ZSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogKGFjdGl2ZVRhYiAhPSAncHJvamVjdHMnKX1cIj5cbiAgICAgICAgPCEtLSBDcmVhdGUgUHJvamVjdCBGb3JtIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogIXNob3dDcmVhdGVQcm9qZWN0Rm9ybX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBwaW4gb3BhY2l0eS03NSBiZy1ncmV5XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQgcGluLXggdy0xLzMgei0xMCBiZy1ncmV5LWxpZ2h0ZXIgbXgtYXV0byBwLTggcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdi1tb2RlbD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB0LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjbG9zZUNyZWF0ZVByb2plY3RNb2RhbFwiIGNsYXNzPVwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjcmVhdGVQcm9qZWN0XCIgY2xhc3M9XCJiZy10ZWFsLWxpZ2h0IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gaG92ZXI6YmctdGVhbC1kYXJrIHB5LTMgcHgtNCByb3VuZGVkXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBQcm9qZWN0cyAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNCBjdXJzb3ItcG9pbnRlclwiIEBjbGljaz1cIm9wZW5DcmVhdGVQcm9qZWN0TW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgdGV4dC1ncmV5LWRhcmsgdGV4dC00eGxcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyZXktZGFya2VyIHB0LTRcIj5BZGQgYSBuZXcgcHJvamVjdDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cHJvamVjdCB2LWZvcj1cIihwcm9qZWN0LCBpbmRleCkgaW4gcHJvamVjdHNcIiA6a2V5PVwiaW5kZXhcIiA6ZGV0YWlscz1cInByb2plY3RcIiBAZGVsZXRlZD1cImRlbGV0ZVByb2plY3QoaW5kZXgpXCI+PC9wcm9qZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgY29tcG9uZW50czogeyBwcm9qZWN0IH0sXG4gICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICBwcm9qZWN0czogZGF0YS5wcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHtcbiAgICAgICAgICBwcm9qZWN0LnVybCA9ICdwcm9qZWN0cy8nICsgcHJvamVjdC5pZFxuICAgICAgICAgIHJldHVybiBwcm9qZWN0XG4gICAgICAgIH0pLFxuICAgICAgICBzaG93Q3JlYXRlUHJvamVjdEZvcm06IGZhbHNlLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnXG4gICAgICB9KSxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZVRhYjoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbWV0aG9kczoge1xuICAgICAgICBvcGVuQ3JlYXRlUHJvamVjdE1vZGFsICgpIHtcbiAgICAgICAgICB0aGlzLnNob3dDcmVhdGVQcm9qZWN0Rm9ybSA9IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VDcmVhdGVQcm9qZWN0TW9kYWwgKCkge1xuICAgICAgICAgIHRoaXMuc2hvd0NyZWF0ZVByb2plY3RGb3JtID0gZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlUHJvamVjdCAoKSB7XG4gICAgICAgICAgYXhpb3MucG9zdCgnL3Byb2plY3RzJywge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb25cbiAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICBFdmVudEJ1cy4kZW1pdCgnbm90aWZpY2F0aW9uJywgcmVzcG9uc2UuZGF0YS5tZXNzYWdlLCByZXNwb25zZS5kYXRhLnN0YXR1cylcbiAgICAgICAgICAgICAgICByZXNwb25zZS5kYXRhLnByb2plY3QudXJsID0gJ3Byb2plY3RzLycgKyByZXNwb25zZS5kYXRhLnByb2plY3QuaWRcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocmVzcG9uc2UuZGF0YS5wcm9qZWN0KVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VDcmVhdGVQcm9qZWN0TW9kYWwoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBFdmVudEJ1cy4kZW1pdCgnbm90aWZpY2F0aW9uJywgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCBlcnJvci5yZXNwb25zZS5kYXRhLnN0YXR1cylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZVByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0cy52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJ7J2hpZGRlbic6IChhY3RpdmVUYWIgIT0gJ3RlYW1zJyl9XCI+XG5cbiAgICAgICAgPCEtLSBDcmVhdGUgVGVhbSBGb3JtIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsnaGlkZGVuJzogIXNob3dDcmVhdGVUZWFtRm9ybX1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSBwaW4gb3BhY2l0eS03NSBiZy1ncmV5XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiY3JlYXRlLXByb2plY3QtZm9ybVwiIGNsYXNzPVwiZml4ZWQgcGluLXggdy0xLzMgei0xMCBiZy1ncmV5LWxpZ2h0ZXIgbXgtYXV0byBwLTggcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIFxuICAgICAgICAgICAgICAgICAgICBcdHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdi1tb2RlbD1cIm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHktMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIFxuICAgICAgICAgICAgICAgICAgICBcdHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB0LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjbG9zZUNyZWF0ZVRlYW1Nb2RhbFwiIGNsYXNzPVwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJjcmVhdGVOZXdUZWFtXCIgY2xhc3M9XCJiZy10ZWFsLWxpZ2h0IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gaG92ZXI6YmctdGVhbC1kYXJrIHB5LTMgcHgtNCByb3VuZGVkXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICBcdDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgIFx0XHQ8ZGl2IGNsYXNzPVwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNCBjdXJzb3ItcG9pbnRlclwiIFxuICAgIFx0XHRcdEBjbGljaz1cIm9wZW5DcmVhdGVUZWFtTW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMgdGV4dC1ncmV5LWRhcmsgdGV4dC00eGxcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyZXktZGFya2VyIHB0LTRcIj5BZGQgYSBuZXcgdGVhbTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFRlYW1zIGxpc3QgLS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZCBtLTRcIiBcblx0XHRcdFx0di1mb3I9XCJ0ZWFtIGluIHRlYW1zXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3LWZ1bGwgaC04IHByLTQgcHQtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVsbGlwc2lzLWggZmxvYXQtcmlnaHQgdGV4dC1ncmV5LWRhcmtlciBjdXJzb3ItcG9pbnRlclwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbCBwLTIgaC0yNCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwidGV4dC1waW5rIHRleHQteGwgbm8tdW5kZXJsaW5lXCIgOmhyZWY9XCJ0ZWFtLnVybFwiPnt7IHRlYW0ubmFtZSB9fTwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZ3JleSB0ZXh0LXNtIHctZnVsbCBweC0yIGgtMTYgc2VsZi1zdGFydFwiPnt7IHRlYW0uZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci10IHctZnVsbCBoLTE2IGZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHB4LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIobWVtYmVyLCBpbmRleCkgaW4gdGVhbS5tZW1iZXJzXCIgdi1pZj1cImluZGV4IDwgNVwiIDpocmVmPVwiJy91c2Vycy8nICsgbWVtYmVyLnVzZXJuYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJnZW5lcmF0ZVVybChtZW1iZXIuYXZhdGFyKVwiIGNsYXNzPVwicm91bmRlZC1mdWxsIHctOCBoLTggbXItMVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0ZWFtLm1lbWJlcnMubGVuZ3RoID4gNVwiIGNsYXNzPVwiYmctZ3JleS1saWdodGVyIGJvcmRlci10ZWFsIGJvcmRlciBwLTIgcm91bmRlZC1mdWxsXCI+e3sgdGVhbS5tZW1iZXJzLmxlbmd0aCAtIDUgfX0rPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidGVhbS5tZW1iZXJzLmxlbmd0aCA8IDFcIiBjbGFzcz1cInRleHQtZ3JleS1kYXJrIHRleHQtY2VudGVyXCI+Tm8gbWVtYmVycyB5ZXQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcdDwvZGl2PlxuXG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIHRlYW1zOiBkYXRhLnRlYW1zLm1hcCgodGVhbSkgPT4ge1xuICAgICAgdGVhbS51cmwgPSAndGVhbXMvJyArIHRlYW0uaWRcbiAgICAgIHJldHVybiB0ZWFtXG4gICAgfSksXG4gICAgc2hvd0NyZWF0ZVRlYW1Gb3JtOiBmYWxzZSxcbiAgICBuYW1lOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJydcbiAgfSksXG4gIHByb3BzOiB7XG4gICAgYWN0aXZlVGFiOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG9wZW5DcmVhdGVUZWFtTW9kYWwgKCkge1xuICAgICAgdGhpcy5zaG93Q3JlYXRlVGVhbUZvcm0gPSB0cnVlXG4gICAgfSxcbiAgICBjbG9zZUNyZWF0ZVRlYW1Nb2RhbCAoKSB7XG4gICAgICB0aGlzLnNob3dDcmVhdGVUZWFtRm9ybSA9IGZhbHNlXG4gICAgfSxcbiAgICBjcmVhdGVOZXdUZWFtICgpIHtcbiAgICAgIGF4aW9zLnBvc3QoJy90ZWFtcycsIHtcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvblxuICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIEV2ZW50QnVzLiRlbWl0KCdub3RpZmljYXRpb24nLCByZXNwb25zZS5kYXRhLm1lc3NhZ2UsIHJlc3BvbnNlLmRhdGEuc3RhdHVzKVxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEucHJvamVjdC51cmwgPSAncHJvamVjdHMvJyArIHJlc3BvbnNlLmRhdGEucHJvamVjdC5pZFxuICAgICAgICAgIHRoaXMudGVhbXMucHVzaChyZXNwb25zZS5kYXRhLnRlYW0pXG4gICAgICAgICAgdGhpcy5zaG93Q3JlYXRlVGVhbUZvcm0gPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgdGhpcy5zaG93Q3JlYXRlVGVhbUZvcm0gPSBmYWxzZVxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvdGVhbXMudnVlIiwidmFyIGFzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBd2FpdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gICAgdmFyIGZyb250LCBiYWNrO1xuXG4gICAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBhcmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgICBpZiAoZnJvbnQpIHtcbiAgICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgICBpZiAodHlwZW9mIGdlbi5yZXR1cm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgYXdhaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG59KCk7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25uZWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aEVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy9hdXRoJyxcbiAgICAgICAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgICAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGhvc3Q6IG51bGwsXG4gICAgICAgICAgICBrZXk6IG51bGwsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdBcHAuRXZlbnRzJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKENvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dGguaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NzcmZUb2tlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjc3JmVG9rZW4oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydMYXJhdmVsJ10gJiYgd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3NyZlRva2VuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIChzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29ubmVjdG9yO1xufSgpO1xuXG52YXIgQ2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdub3RpZmljYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5JbGx1bWluYXRlXFxcXE5vdGlmaWNhdGlvbnNcXFxcRXZlbnRzXFxcXEJyb2FkY2FzdE5vdGlmaWNhdGlvbkNyZWF0ZWQnLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbkZvcldoaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLmNsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ2hhbm5lbDtcbn0oKTtcblxudmFyIEV2ZW50Rm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50Rm9ybWF0dGVyKG5hbWVzcGFjZSkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudEZvcm1hdHRlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYW1lc3BhY2UobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhFdmVudEZvcm1hdHRlciwgW3tcbiAgICAgICAga2V5OiAnZm9ybWF0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYXJBdCgwKSA9PT0gJy4nIHx8IGV2ZW50LmNoYXJBdCgwKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IHRoaXMubmFtZXNwYWNlICsgJy4nICsgZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucmVwbGFjZSgvXFwuL2csICdcXFxcJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE5hbWVzcGFjZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROYW1lc3BhY2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEV2ZW50Rm9ybWF0dGVyO1xufSgpO1xuXG52YXIgUHVzaGVyQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlckNoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNoYW5uZWwocHVzaGVyLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlckNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDaGFubmVsKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLmV2ZW50Rm9ybWF0dGVyID0gbmV3IEV2ZW50Rm9ybWF0dGVyKF90aGlzLm9wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbih0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wTGlzdGVuaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZCh0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlckNoYW5uZWw7XG59KENoYW5uZWwpO1xuXG52YXIgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByaXZhdGVDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyUHJpdmF0ZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKCdjbGllbnQtJyArIGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyUHJpdmF0ZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG52YXIgUHVzaGVyUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJQcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByZXNlbmNlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJQcmVzZW5jZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJQcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ2hlcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1lbWJlcnNba107XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lbWJlci5pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lbWJlci5pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ2hhbm5lbChzb2NrZXQsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9DaGFubmVsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NrZXRJb0NoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0NoYW5uZWwpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLmV2ZW50Rm9ybWF0dGVyID0gbmV3IEV2ZW50Rm9ybWF0dGVyKF90aGlzLm9wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgICAgIF90aGlzLmNvbmZpZ3VyZVJlY29ubmVjdG9yKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb0NoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIubmFtZSA9PSBjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5iaW5kKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbmZpZ3VyZVJlY29ubmVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmZpZ3VyZVJlY29ubmVjdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMy5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0JywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5iaW5kKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2JpbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5iaW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuc29ja2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzNC5ldmVudHNbZXZlbnRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbnZhciBTb2NrZXRJb1ByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBfU29ja2V0SW9DaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICd3aGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbDtcbn0oU29ja2V0SW9DaGFubmVsKTtcblxudmFyIFNvY2tldElvUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb1ByaXZhdGVDaGFubikge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBfU29ja2V0SW9Qcml2YXRlQ2hhbm4pO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpzdWJzY3JpYmVkJywgZnVuY3Rpb24gKG1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXJzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS51c2VyX2luZm87XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpqb2luaW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6bGVhdmluZycsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVtYmVyLnVzZXJfaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbDtcbn0oU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCk7XG5cbnZhciBQdXNoZXJDb25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFB1c2hlckNvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJDb25uZWN0b3IoKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckNvbm5lY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUHVzaGVyQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyQ29ubmVjdG9yKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlckNvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGVDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgUHVzaGVyUHJlc2VuY2VDaGFubmVsKHRoaXMucHVzaGVyLCAncHJlc2VuY2UtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gW25hbWUsICdwcml2YXRlLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbnZhciBTb2NrZXRJb0Nvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Db25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9Db25uZWN0b3IoKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ29ubmVjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTb2NrZXRJb0Nvbm5lY3Rvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ29ubmVjdG9yKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTb2NrZXRJTycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb2NrZXRJTygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvY2tldC5pbyBjbGllbnQgbm90IGZvdW5kLiBTaG91bGQgYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIG9yIHBhc3NlZCB2aWEgb3B0aW9ucy5jbGllbnQnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFNvY2tldElvQ2hhbm5lbCh0aGlzLnNvY2tldCwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc29ja2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb2NrZXQuaWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Db25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbnZhciBFY2hvID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVjaG8ob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFY2hvKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAncHVzaGVyJykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdzb2NrZXQuaW8nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBTb2NrZXRJb0Nvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRWNobywgW3tcbiAgICAgICAga2V5OiAncmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczIuc29ja2V0SWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeS5hamF4ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIGJlZm9yZVNlbmQoeGhyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1Tb2NrZXQtSWQnLCBfdGhpczMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5saXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKF9jaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChfY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4oY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUoY2hhbm5lbCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IubGVhdmUoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnNvY2tldElkKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRWNobztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFY2hvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IDggOSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyA4IDkiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJweC00IGJvcmRlci1sIGZsZXggaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHAtNFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInByb2ZpbGUtZHJvcGRvd25cIiB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlUHJvZmlsZURyb3Bkb3duIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbWQ6bXItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZ2VuZXJhdGVVcmwoX3ZtLnVzZXIuYXZhdGFyKSB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInRleHQtZ3JleS1kYXJrZXIgdGV4dC1iYXNlIG5vLXVuZGVybGluZSBoaWRkZW4gbWQ6YmxvY2tcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgXCIgKyBfdm0uX3MoX3ZtLnVzZXIubmFtZSkgKyBcIlxcbiAgICAgIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1kb3duXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5wcm9maWxlRHJvcGRvd25TaG93blxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJhYnNvbHV0ZSBiZy13aGl0ZSB3LTQ4IHBpbi1yIG1yLTIgcHktMSBzaGFkb3ctbGcgcm91bmRlZCB6LTUwXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHRvcDogXCIzLjVyZW1cIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJwcm9maWxlLW1lbnVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIG5vLXVuZGVybGluZSB0ZXh0LWdyZXktZGFyayBibG9jayBmb250LW1lZGl1bVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnByb2ZpbGVVcmwgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fbSgwKSwgX3ZtLl92KFwiXFxuICAgICAgICAgIFlvdXIgcHJvZmlsZVxcbiAgICBcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBib3JkZXItdFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtZ3JleS1kYXJrIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnVybC5sb2dvdXQgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0VXNlciB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl9tKDMpLCBfdm0uX3YoXCJcXG4gICAgICBMb2dvdXRcXG4gICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibG9nb3V0LWZvcm1cIiwgYWN0aW9uOiBfdm0udXJsLmxvZ291dCwgbWV0aG9kOiBcIlBPU1RcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiX3Rva2VuXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udG9rZW4gfVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctNiBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJwci0xIGZhIGZhLXVzZXJcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJhXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwicHgtNCBweS0yIGhvdmVyOmJnLXRlYWwgaG92ZXI6dGV4dC13aGl0ZSB0ZXh0LWdyZXktZGFyayBmb250LW1lZGl1bSBuby11bmRlcmxpbmUgYmxvY2tcIixcbiAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW5cIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3LTYgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTEgZmFzIGZhLXNoaWVsZC1hbHQgZm9udC1yZWd1bGFyXCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIEFkbWluXFxuICAgIFwiKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImFcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJweC00IHB5LTIgaG92ZXI6YmctdGVhbCBob3Zlcjp0ZXh0LXdoaXRlIHRleHQtZ3JleS1kYXJrIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ3LTYgaW5saW5lLWJsb2NrXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInByLTEgZmEgZmEtY29nIGZvbnQtcmVndWxhclwiIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICBTZXR0aW5nc1xcbiAgICBcIilcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctNiBpbmxpbmUtYmxvY2tcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJwci0xIGZhcyBmYS1zaWduLW91dC1hbHQgZm9udC1yZWd1bGFyXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wNTQ1NmYxOFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDU0NTZmMThcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvZmlsZURyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wNTQ1NmYxOFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBjbGFzczogeyBoaWRkZW46IF92bS5hY3RpdmVUYWIgIT0gXCJwcm9qZWN0c1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IHsgaGlkZGVuOiAhX3ZtLnNob3dDcmVhdGVQcm9qZWN0Rm9ybSB9IH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWJzb2x1dGUgcGluIG9wYWNpdHktNzUgYmctZ3JleVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImZpeGVkIHBpbi14IHctMS8zIHotMTAgYmctZ3JleS1saWdodGVyIG14LWF1dG8gcC04IHJvdW5kZWRcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiTmFtZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuXCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJ3LWZ1bGwgc2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLmRlc2NyaXB0aW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGlkZGVuXCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBwdC04IGJnLWdyZXktbGlnaHRlciByb3VuZGVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1yZWQtbGlnaHRlciBob3Zlcjpmb250LWJvbGQgaG92ZXI6dGV4dC1yZWQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VDcmVhdGVQcm9qZWN0TW9kYWwgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJiZy10ZWFsLWxpZ2h0IHRleHQtd2hpdGUgZm9udC1tZWRpdW0gaG92ZXI6YmctdGVhbC1kYXJrIHB5LTMgcHgtNCByb3VuZGVkXCIsXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNyZWF0ZVByb2plY3QgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNyZWF0ZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuQ3JlYXRlUHJvamVjdE1vZGFsIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXBsdXMgdGV4dC1ncmV5LWRhcmsgdGV4dC00eGxcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXktZGFya2VyIHB0LTRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkFkZCBhIG5ldyBwcm9qZWN0XCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS5wcm9qZWN0cywgZnVuY3Rpb24ocHJvamVjdCwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJwcm9qZWN0XCIsIHtcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBhdHRyczogeyBkZXRhaWxzOiBwcm9qZWN0IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBkZWxldGVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZGVsZXRlUHJvamVjdChpbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDdhOTQyNTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTA3YTk0MjUwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2plY3RzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wN2E5NDI1MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0cy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcInJlbGF0aXZlIGJnLXdoaXRlIHNoYWRvdy1tZCB3LTY0IGgtNjQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZCBtLTRcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBoLTggcHItNCBwdC0yXCIsIG9uOiB7IGNsaWNrOiBfdm0udG9nZ2xlTWVudSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZmFzIGZhLWVsbGlwc2lzLWggZmxvYXQtcmlnaHQgdGV4dC1ncmV5LWRhcmtlciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgfSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZHJvcGRvd25NZW51U2hvd25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgcm91bmRlZCBzaGFkb3ctbGcgcGluLXIgcGluLXQgbXQtNCBtci0yIHAtNCB0ZXh0LWdyZXktZGFya2VyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVsZXRlUHJvamVjdChfdm0ucHJvamVjdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHAtMiBoLTI0IGZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcGluayB0ZXh0LXhsIG5vLXVuZGVybGluZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnByb2plY3QudXJsIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9qZWN0Lm5hbWUpKV1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleSB0ZXh0LXNtIHctZnVsbCBweC0yIGgtMTYgc2VsZi1zdGFydFwiIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9qZWN0LmRlc2NyaXB0aW9uKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJvcmRlci10IHctZnVsbCBoLTE2IGZsZXggZmxleC1yb3cganVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHB4LTJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5wcm9qZWN0Lm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCA8IDVcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBhdHRyczogeyBocmVmOiBcIi91c2Vycy9cIiArIG1lbWJlci51c2VybmFtZSB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGwgdy04IGgtOCBtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZ2VuZXJhdGVVcmwobWVtYmVyLmF2YXRhcikgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnByb2plY3QubWVtYmVycy5sZW5ndGggPiA1XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJnLWdyZXktbGlnaHRlciBib3JkZXItdGVhbCBib3JkZXIgcC0yIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucHJvamVjdC5tZW1iZXJzLmxlbmd0aCAtIDUpICsgXCIrXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnByb2plY3QubWVtYmVycy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXktZGFyayB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJObyBtZW1iZXJzIHlldFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTA4NjMwNTMzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wODYzMDUzM1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi0wODYzMDUzM1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IHsgaGlkZGVuOiBfdm0uYWN0aXZlVGFiICE9IFwib2ZmaWNlc1wiIH0gfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IHsgaGlkZGVuOiAhX3ZtLnNob3dDcmVhdGVPZmZpY2VGb3JtIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhYnNvbHV0ZSBwaW4gb3BhY2l0eS03NSBiZy1ncmV5XCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZml4ZWQgcGluLXggdy0xLzMgei0xMCBiZy1ncmV5LWxpZ2h0ZXIgbXgtYXV0byBwLTggcm91bmRlZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNyZWF0ZS1wcm9qZWN0LWZvcm1cIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS0yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJOYW1lXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW5cIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW5cIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB0LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXJlZC1saWdodGVyIGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp0ZXh0LXJlZC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZUNyZWF0ZU9mZmljZU1vZGFsIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiYmctdGVhbC1saWdodCB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGhvdmVyOmJnLXRlYWwtZGFyayBweS0zIHB4LTQgcm91bmRlZFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jcmVhdGVOZXdPZmZpY2UgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNyZWF0ZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiYmctd2hpdGUgc2hhZG93LW1kIHctNjQgaC02NCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNCBjdXJzb3ItcG9pbnRlclwiLFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuQ3JlYXRlT2ZmaWNlTW9kYWwgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cyB0ZXh0LWdyZXktZGFyayB0ZXh0LTR4bFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrZXIgcHQtNFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQWRkIGEgbmV3IG9mZmljZVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0ub2ZmaWNlcywgZnVuY3Rpb24ob2ZmaWNlKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJiZy13aGl0ZSBzaGFkb3ctbWQgdy02NCBoLTY0IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCwgdHJ1ZSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcC0yIGgtMjQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1waW5rIHRleHQteGwgbm8tdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogb2ZmaWNlLnVybCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG9mZmljZS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXkgdGV4dC1zbSB3LWZ1bGwgcHgtMiBoLTE2IHNlbGYtc3RhcnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mob2ZmaWNlLmRlc2NyaXB0aW9uKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXQgdy1mdWxsIGgtMTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgcHgtMlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2wob2ZmaWNlLm1lbWJlcnMsIGZ1bmN0aW9uKG1lbWJlciwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4IDwgNVxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3VzZXJzL1wiICsgbWVtYmVyLnVzZXJuYW1lIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtZnVsbCB3LTggaC04IG1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdlbmVyYXRlVXJsKG1lbWJlci5hdmF0YXIpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgb2ZmaWNlLm1lbWJlcnMubGVuZ3RoID4gNVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZ3JleS1saWdodGVyIGJvcmRlci10ZWFsIGJvcmRlciBwLTIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhvZmZpY2UubWVtYmVycy5sZW5ndGggLSA1KSArIFwiK1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgb2ZmaWNlLm1lbWJlcnMubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXktZGFyayB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm8gbWVtYmVycyB5ZXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBoLTggcHItNCBwdC0yXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJmYSBmYS1lbGxpcHNpcy1oIGZsb2F0LXJpZ2h0IHRleHQtZ3JleS1kYXJrZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wOTU5ZDc1ZVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDk1OWQ3NWVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvb2ZmaWNlcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMDk1OWQ3NWVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvb2ZmaWNlcy52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImJnLXdoaXRlIHNoYWRvdy1tZCB3LTY0IGgtNjQgZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgcm91bmRlZCBtLTRcIlxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcmVsYXRpdmUgYm9yZGVyLWIgaC0xMiBwdC00XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXktZGFya2VyIGZvbnQtbWVkaXVtIG5vLXVuZGVybGluZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICBcIi9cIiArIF92bS5yZXNvdXJjZVR5cGUgKyBcIi9cIiArIF92bS5yZXNvdXJjZS5pZCArIFwiL2FjdGl2aXRpZXNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIEFjdGl2aXRpZXNcXG4gICAgICAgIFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9tKDApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrZXIgYWJzb2x1dGUgcGluLXIgbXItMlwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWVsbGlwc2lzLWhcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGgtNDggc2VsZi1zdGFydCB0ZXh0LWxlZnRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtcm93IHAtNCBuby11bmRlcmxpbmUgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtZnVsbCB3LTggaC04IG1yLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCJodHRwOi8vcGxhY2Vob2xkLml0LzM0eDM0XCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1waW5rXCIgfSwgW192bS5fdihcIkpvaG5cIildKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIgYWRkZWQgYSBuZXcgdGFza1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIgfSwgW192bS5fdihcIjE1IG1pbiBhZ29cIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBwLTQgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGwgdy04IGgtOCBtci0yXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zNHgzNFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcGlua1wiIH0sIFtfdm0uX3YoXCJKb2huXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiIGNvbW1lbnRlZCBpbiBcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1waW5rXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlJldmlldyBNZWV0aW5nXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIgfSwgW192bS5fdihcIjIwIG1pbiBhZ29cIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBwLTQgbm8tdW5kZXJsaW5lIHRleHQtZ3JleS1kYXJrZXJcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGwgdy04IGgtOCBtci0yXCIsXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IFwiaHR0cDovL3BsYWNlaG9sZC5pdC8zNHgzNFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcGlua1wiIH0sIFtfdm0uX3YoXCJKYW1lc1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIiBhcmNoaXZlZCBhIGRpc2N1c3Npb25cIildKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiIH0sIFtfdm0uX3YoXCIxIGhyIGFnb1wiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJmYjJjYTY1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yZmIyY2E2NVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9hY3Rpdml0eS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMmZiMmNhNjVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvYWN0aXZpdHkudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJmaXhlZCBwaW4tdCBiZy13aGl0ZSB0ZXh0LWxnIHJvdW5kZWQgY29udGFpbmVyIG14LWF1dG8gbWQ6dy0xLzIgbXQtMTYgcHktNiBweC04IHNoYWRvdy1sZ1wiLFxuICAgICAgY2xhc3M6IFtcbiAgICAgICAgX3ZtLm5vdGlmaWNhdGlvblNob3duID8gXCJcIiA6IFwiaGlkZGVuXCIsXG4gICAgICAgIF92bS5tZXNzYWdlVHlwZSA9PT0gXCJzdWNjZXNzXCIgPyBcInRleHQtdGVhbC1saWdodFwiIDogXCJ0ZXh0LXJlZFwiXG4gICAgICBdLFxuICAgICAgc3RhdGljU3R5bGU6IHsgbGVmdDogXCIwXCIsIHJpZ2h0OiBcIjBcIiwgXCJtYXgtd2lkdGhcIjogXCI2NDBweFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fdihcIlxcbiAgICBcIiArIF92bS5fcyhfdm0ubWVzc2FnZSkgKyBcIiBcXG4gICAgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5saW5lXCIsIG9uOiB7IGNsaWNrOiBfdm0uY2xvc2VOb3RpZmljYXRpb24gfSB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzIGZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyXCIgfSldXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTNjZDdmZTFiXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zY2Q3ZmUxYlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtM2NkN2ZlMWJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiYmctd2hpdGUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaC0xMiBwbC00IG1kOnB4LTQgc2hhZG93XCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtdGVhbCB0ZXh0LTJ4bCBuby11bmRlcmxpbmUgc2VsZi1jZW50ZXJcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBfdm0udXJsLnNpdGUgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgR09PRFdPUktcXG4gIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZDpmbGV4XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXJvdyBib3JkZXItbCBoLWZ1bGxcIiB9LFxuICAgICAgICAgIFtfYyhcIm5vdGlmaWNhdGlvbi1kcm9wZG93blwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoXCJwcm9maWxlLWRyb3Bkb3duXCIpXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ2YzhmYjM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NmM4ZmIzNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9uYXZiYXIudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTQ2YzhmYjM0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiB7IGhpZGRlbjogX3ZtLmFjdGl2ZVRhYiAhPSBcInRlYW1zXCIgfSB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBjbGFzczogeyBoaWRkZW46ICFfdm0uc2hvd0NyZWF0ZVRlYW1Gb3JtIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhYnNvbHV0ZSBwaW4gb3BhY2l0eS03NSBiZy1ncmV5XCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZml4ZWQgcGluLXggdy0xLzMgei0xMCBiZy1ncmV5LWxpZ2h0ZXIgbXgtYXV0byBwLTggcm91bmRlZFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImNyZWF0ZS1wcm9qZWN0LWZvcm1cIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS0yXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJOYW1lXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW5cIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcInctZnVsbCBzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZGVzY3JpcHRpb24gfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJoaWRkZW5cIiB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB0LTggYmctZ3JleS1saWdodGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXJlZC1saWdodGVyIGhvdmVyOmZvbnQtYm9sZCBob3Zlcjp0ZXh0LXJlZC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbG9zZUNyZWF0ZVRlYW1Nb2RhbCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJnLXRlYWwtbGlnaHQgdGV4dC13aGl0ZSBmb250LW1lZGl1bSBob3ZlcjpiZy10ZWFsLWRhcmsgcHktMyBweC00IHJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY3JlYXRlTmV3VGVhbSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ3JlYXRlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJiZy13aGl0ZSBzaGFkb3ctbWQgdy02NCBoLTY0IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHJvdW5kZWQgbS00IGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5DcmVhdGVUZWFtTW9kYWwgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cyB0ZXh0LWdyZXktZGFyayB0ZXh0LTR4bFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS1kYXJrZXIgcHQtNFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQWRkIGEgbmV3IHRlYW1cIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLnRlYW1zLCBmdW5jdGlvbih0ZWFtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJiZy13aGl0ZSBzaGFkb3ctbWQgdy02NCBoLTY0IGZsZXggZmxleC1yb3cgZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlciByb3VuZGVkIG0tNFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCwgdHJ1ZSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcC0yIGgtMjQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1waW5rIHRleHQteGwgbm8tdW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogdGVhbS51cmwgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0ZWFtLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleSB0ZXh0LXNtIHctZnVsbCBweC0yIGgtMTYgc2VsZi1zdGFydFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh0ZWFtLmRlc2NyaXB0aW9uKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXQgdy1mdWxsIGgtMTYgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXIgcHgtMlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX2wodGVhbS5tZW1iZXJzLCBmdW5jdGlvbihtZW1iZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IDVcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi91c2Vycy9cIiArIG1lbWJlci51c2VybmFtZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWZ1bGwgdy04IGgtOCBtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5nZW5lcmF0ZVVybChtZW1iZXIuYXZhdGFyKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIHRlYW0ubWVtYmVycy5sZW5ndGggPiA1XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1ncmV5LWxpZ2h0ZXIgYm9yZGVyLXRlYWwgYm9yZGVyIHAtMiByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRlYW0ubWVtYmVycy5sZW5ndGggLSA1KSArIFwiK1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgdGVhbS5tZW1iZXJzLmxlbmd0aCA8IDFcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXktZGFyayB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm8gbWVtYmVycyB5ZXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBoLTggcHItNCBwdC0yXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJmYSBmYS1lbGxpcHNpcy1oIGZsb2F0LXJpZ2h0IHRleHQtZ3JleS1kYXJrZXIgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01Njg1NzQ2MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTY4NTc0NjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvdGVhbXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTU2ODU3NDYwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3RlYW1zLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0byB3LTMvNCAyeGw6dy0zLzUgbXQtOFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCBtYi04IHBiLTMgYm9yZGVyLWItMiB0ZXh0LWdyZXlcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICBcInRleHQtZ3JleS1kYXJrZXIgZm9udC1zZW1pYm9sZCBib3JkZXItdGVhbCBib3JkZXItYi00IHBiLTMgLW1iLTRcIjpcbiAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmUgPT09IFwicHJvamVjdHNcIixcbiAgICAgICAgICAgICAgICBcImN1cnNvci1wb2ludGVyXCI6IF92bS5hY3RpdmUgIT0gXCJwcm9qZWN0c1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZVRoaXNUYWIoXCJwcm9qZWN0c1wiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBQcm9qZWN0c1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwidGV4dC1ncmV5LWRhcmtlciBmb250LXNlbWlib2xkIGJvcmRlci10ZWFsIGJvcmRlci1iLTQgcGItMyAtbWItNFwiOlxuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZSA9PT0gXCJ0ZWFtc1wiLFxuICAgICAgICAgICAgICAgIFwiY3Vyc29yLXBvaW50ZXJcIjogX3ZtLmFjdGl2ZSAhPSBcInRlYW1zXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGhpc1RhYihcInRlYW1zXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFRlYW1zXFxuICAgICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWdyZXktZGFya2VyIGZvbnQtc2VtaWJvbGQgYm9yZGVyLXRlYWwgYm9yZGVyLWItNCBwYi0zIC1tYi00XCI6XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlID09PSBcIm9mZmljZXNcIixcbiAgICAgICAgICAgICAgICBcImN1cnNvci1wb2ludGVyXCI6IF92bS5hY3RpdmUgIT0gXCJvZmZpY2VzXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGhpc1RhYihcIm9mZmljZXNcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgT2ZmaWNlc1xcbiAgICAgICAgXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInByb2plY3RzXCIsIHsgYXR0cnM6IHsgXCJhY3RpdmUtdGFiXCI6IF92bS5hY3RpdmUgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRlYW1zXCIsIHsgYXR0cnM6IHsgXCJhY3RpdmUtdGFiXCI6IF92bS5hY3RpdmUgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIm9mZmljZXNcIiwgeyBhdHRyczogeyBcImFjdGl2ZS10YWJcIjogX3ZtLmFjdGl2ZSB9IH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNmViY2FjMTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlYmNhYzE0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTZlYmNhYzE0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC00IHNlbGYtY2VudGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC10ZWFsLWxpZ2h0IHRleHQtYmFzZSBuby11bmRlcmxpbmUgY3Vyc29yLXBvaW50ZXJcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwibm90aWZpY2F0aW9uXCIgfSxcbiAgICAgICAgb246IHsgY2xpY2s6IF92bS50b2dnbGVOb3RpZmljYXRpb24gfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXIgZmEtYmVsbCBmb250LWJvbGQgdGV4dC14bFwiLFxuICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnVucmVhZE5vdGlmaWNhdGlvblxuICAgICAgICAgID8gX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJmYSBmYS1jaXJjbGUgdGV4dC1yZWQtbGlnaHQgdGV4dC1zbSBhYnNvbHV0ZSBwaW4tdCBtdC0zIG1sLTNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLm5vdGlmaWNhdGlvblNob3duXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiYWJzb2x1dGUgYmctd2hpdGUgdy02NCBtdC01IG1yLTggcHktNCBzaGFkb3ctbGcgcm91bmRlZCB6LTUwXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyByaWdodDogXCI1JVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBsaXN0LXJlc2V0IHB4LTQgcHktMiB0ZXh0LWdyZXktZGFyayBuby11bmRlcmxpbmUgYmxvY2tcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmdlbmVyYXRlVXJsKF92bS51c2VyLmF2YXRhcikgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGxpc3QtcmVzZXQgcHgtNCBweS0yIHRleHQtZ3JleS1kYXJrIG5vLXVuZGVybGluZSBibG9ja1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAgaC0xMCByb3VuZGVkLWZ1bGwgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZ2VuZXJhdGVVcmwoX3ZtLnVzZXIuYXZhdGFyKSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayBib3JkZXItdFwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgXCJsaXN0LXJlc2V0IHB4LTQgcHQtMiB0ZXh0LWJsdWUtbGlnaHQgdGV4dC1jZW50ZXIgbm8tdW5kZXJsaW5lIGJsb2NrXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvbm90aWZpY2F0aW9uc1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgIFZpZXcgQWxsXFxuICAgICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTEgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91ciBwb3N0XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweS0xIHRleHQteHNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgMiBtaW4gYWdvXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTEgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50ZWQgb24geW91ciBwb3N0XFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweS0xIHRleHQteHNcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgMiBtaW4gYWdvXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1lNWFmOWMxY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTVhZjljMWNcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LWU1YWY5YzFjXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMgNCA1IDciLCJpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG53aW5kb3cuVnVlID0gcmVxdWlyZSgndnVlJylcblxud2luZG93LmF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG53aW5kb3cubHV4b24gPSByZXF1aXJlKCdsdXhvbicpXG5cbndpbmRvdy5heGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHtcbiAgJ1gtQ1NSRi1UT0tFTic6IHdpbmRvdy5MYXJhdmVsLmNzcmZUb2tlbixcbiAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG5pZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbiAgICBicm9hZGNhc3RlcjogJ3NvY2tldC5pbycsXG4gICAgaG9zdDogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzo2MDAxJ1xuICB9KVxufVxuXG53aW5kb3cuVnVlLm1peGluKHtcbiAgbWV0aG9kczoge1xuICAgIGdlbmVyYXRlVXJsOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybiAnaHR0cDovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvaW1hZ2UvYXZhdGFyLmpwZydcbiAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKVxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArICcvLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArICcvJyArIHZhbHVlXG4gICAgfVxuICB9XG59KVxuXG53aW5kb3cuRXZlbnRCdXMgPSBuZXcgVnVlKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hvbWUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZWJjYWMxNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2hvbWUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9ob21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZWJjYWMxNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZlYmNhYzE0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hY3Rpdml0eS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJmYjJjYTY1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vYWN0aXZpdHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9hY3Rpdml0eS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmZiMmNhNjVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZmIyY2E2NVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL2FjdGl2aXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvYWN0aXZpdHkudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9uYXZiYXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NmM4ZmIzNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25hdmJhci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDZjOGZiMzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NmM4ZmIzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25hdmJhci52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTVhZjljMWNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub3RpZmljYXRpb25Ecm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvbkRyb3Bkb3duLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lNWFmOWMxY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU1YWY5YzFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFtcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlfV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dXSxcXFwiZW52XFxcIjp7XFxcInRlc3RcXFwiOntcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcInRhcmdldHNcXFwiOntcXFwibm9kZVxcXCI6XFxcImN1cnJlbnRcXFwifX1dXX19fSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL25vdGlmaWNhdGlvblBvcHVwLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2NkN2ZlMWJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ub3RpZmljYXRpb25Qb3B1cC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL25vdGlmaWNhdGlvblBvcHVwLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zY2Q3ZmUxYlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNjZDdmZTFiXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9ub3RpZmljYXRpb25Qb3B1cC52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9vZmZpY2VzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDk1OWQ3NWVcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9vZmZpY2VzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvb2ZmaWNlcy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDk1OWQ3NWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wOTU5ZDc1ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL29mZmljZXMudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9vZmZpY2VzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvZmlsZURyb3Bkb3duLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDU0NTZmMThcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9maWxlRHJvcGRvd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA1NDU2ZjE4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDU0NTZmMThcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9maWxlRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XV0sXFxcImVudlxcXCI6e1xcXCJ0ZXN0XFxcIjp7XFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJ0YXJnZXRzXFxcIjp7XFxcIm5vZGVcXFwiOlxcXCJjdXJyZW50XFxcIn19XV19fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9wcm9qZWN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDg2MzA1MzNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9wcm9qZWN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvamVjdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDg2MzA1MzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wODYzMDUzM1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2plY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0LnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vcHJvamVjdHMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wN2E5NDI1MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Byb2plY3RzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvcHJvamVjdHMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTA3YTk0MjUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMDdhOTQyNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy9wcm9qZWN0cy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3Byb2plY3RzLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdGVhbXMudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01Njg1NzQ2MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RlYW1zLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFydGlhbHMvdGVhbXMudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU2ODU3NDYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTY4NTc0NjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9wYXJ0aWFscy90ZWFtcy52dWVcbi8vIG1vZHVsZSBpZCA9IC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhcnRpYWxzL3RlYW1zLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJpbXBvcnQgJy4vLi4vYm9vdHN0cmFwJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi8uLi9jb21wb25lbnRzL2hvbWUudnVlJ1xuaW1wb3J0IG5hdmJhciBmcm9tICcuLy4uL2NvbXBvbmVudHMvcGFydGlhbHMvbmF2YmFyLnZ1ZSdcbmltcG9ydCBub3RpZmljYXRpb25Qb3B1cCBmcm9tICcuLy4uL2NvbXBvbmVudHMvcGFydGlhbHMvbm90aWZpY2F0aW9uUG9wdXAudnVlJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XG4gIGVsOiAnI2FwcCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBob21lLCBuYXZiYXIsIG5vdGlmaWNhdGlvblBvcHVwXG4gIH1cbn0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2hvbWUuanMiXSwic291cmNlUm9vdCI6IiJ9