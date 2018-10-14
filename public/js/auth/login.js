webpackJsonp([8],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/auth/login.vue":
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      token: Laravel.csrfToken,
      errors: errors,
      url: url
    };
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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1a3b4499\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/auth/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "bg-white container mx-4 md:mx-auto shadow-lg mt-32 flex flex-row md:w-3/5 xxl:w-2/5 justify-between"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", {}),
      _vm._v(" "),
      _c("div", { staticClass: "w-full md:w-1/2 p-8" }, [
        _c(
          "form",
          { attrs: { role: "form", method: "POST", action: _vm.url } },
          [
            _c("input", {
              attrs: { type: "hidden", name: "_token" },
              domProps: { value: _vm.token }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "py-4" }, [
              _c("input", {
                staticClass:
                  "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
                attrs: {
                  id: "email",
                  type: "text",
                  name: "email",
                  placeholder: "E-mail"
                }
              }),
              _vm._v(" "),
              _vm.errors
                ? _c("span", { staticClass: "text-red-light block pt-2" }, [
                    _vm._v(_vm._s(_vm.errors.email))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "py-4" }, [
              _c("input", {
                staticClass:
                  "shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker",
                attrs: {
                  id: "password",
                  type: "password",
                  name: "password",
                  placeholder: "Password"
                }
              }),
              _vm._v(" "),
              _vm.errors
                ? _c("span", { staticClass: "text-red-light block pt-2" }, [
                    _vm._v(_vm._s(_vm.errors.password))
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "no-underline text-teal text-sm",
                attrs: { href: "password/reset" }
              },
              [_vm._v("Forgot Your Password?")]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "w-1/2 text-center bg-teal-light p-4 hidden md:block" },
      [
        _c("p", { staticClass: "text-white font-bold text-4xl pt-8 mt-8" }, [
          _vm._v("GOODWORK")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-white text-xl pt-4" }, [
          _vm._v("Sane way to manage work")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4 text-grey" }, [
      _c("input", { attrs: { type: "checkbox", name: "remember" } }),
      _vm._v("\n                Remember Me\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4" }, [
      _c("button", { staticClass: "btn", attrs: { type: "submit" } }, [
        _vm._v("LOGIN")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a3b4499", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/css/main.css":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "./resources/assets/js/components/auth/login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],[\"env\",{\"modules\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]],\"env\":{\"test\":{\"presets\":[[\"env\",{\"targets\":{\"node\":\"current\"}}]]}}}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/auth/login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1a3b4499\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/auth/login.vue")
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
Component.options.__file = "resources/assets/js/components/auth/login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a3b4499", Component.options)
  } else {
    hotAPI.reload("data-v-1a3b4499", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/auth/login.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bootstrap__ = __webpack_require__("./resources/assets/js/bootstrap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_login_vue__ = __webpack_require__("./resources/assets/js/components/auth/login.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_auth_login_vue__);



/* eslint-disable no-unused-vars */
var app = new Vue({
  el: '#app',
  components: {
    login: __WEBPACK_IMPORTED_MODULE_1__components_auth_login_vue___default.a
  }
});

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./resources/assets/js/pages/auth/login.js");
module.exports = __webpack_require__("./resources/assets/css/main.css");


/***/ })

},[0]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sYXJhdmVsLWVjaG8vZGlzdC9lY2hvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWU/MTI3OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2Nzcy9tYWluLmNzcz84N2Q3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvbG9naW4uanMiXSwibmFtZXMiOlsid2luZG93IiwiVnVlIiwicmVxdWlyZSIsImF4aW9zIiwibHV4b24iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJMYXJhdmVsIiwiY3NyZlRva2VuIiwiaW8iLCJFY2hvIiwiYnJvYWRjYXN0ZXIiLCJob3N0IiwibG9jYXRpb24iLCJob3N0bmFtZSIsIm1peGluIiwibWV0aG9kcyIsImdlbmVyYXRlVXJsIiwidmFsdWUiLCJ0b1N0cmluZyIsInByb3RvY29sIiwiRXZlbnRCdXMiLCJhcHAiLCJlbCIsImNvbXBvbmVudHMiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOzs7cUJBR0E7Y0FDQTtXQUVBO0FBSkE7O0FBREEsRzs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRCxzQjs7Ozs7OztBQ3h4QkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0EsaUJBQWlCLHFDQUFxQztBQUN0RDtBQUNBO0FBQ0EsV0FBVyxTQUFTLGdEQUFnRCxFQUFFO0FBQ3RFO0FBQ0E7QUFDQSxzQkFBc0IsaUNBQWlDO0FBQ3ZELHlCQUF5QjtBQUN6QixhQUFhO0FBQ2I7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsOEJBQThCLDJDQUEyQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNCQUFzQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLDhCQUE4QiwyQ0FBMkM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUVBQXFFO0FBQzVFO0FBQ0EsaUJBQWlCLHlEQUF5RDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIseUNBQXlDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRCxtQkFBbUIsU0FBUyxxQ0FBcUMsRUFBRTtBQUNuRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQyxvQkFBb0IsNkJBQTZCLGlCQUFpQixFQUFFO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQy9IQSx5Qzs7Ozs7Ozs7OztBQ0FBO0FBQ0FBLE9BQU9DLEdBQVAsR0FBYSxtQkFBQUMsQ0FBUSx1Q0FBUixDQUFiOztBQUVBRixPQUFPRyxLQUFQLEdBQWUsbUJBQUFELENBQVEsK0JBQVIsQ0FBZjs7QUFFQUYsT0FBT0ksS0FBUCxHQUFlLG1CQUFBRixDQUFRLGlEQUFSLENBQWY7O0FBRUFGLE9BQU9HLEtBQVAsQ0FBYUUsUUFBYixDQUFzQkMsT0FBdEIsQ0FBOEJDLE1BQTlCLEdBQXVDO0FBQ3JDLGtCQUFnQlAsT0FBT1EsT0FBUCxDQUFlQyxTQURNO0FBRXJDLHNCQUFvQjs7QUFHdEI7Ozs7OztBQUx1QyxDQUF2QyxDQVdBLElBQUksT0FBT0MsRUFBUCxLQUFjLFdBQWxCLEVBQStCO0FBQzdCVixTQUFPVyxJQUFQLEdBQWMsSUFBSSxvREFBSixDQUFTO0FBQ3JCQyxpQkFBYSxXQURRO0FBRXJCQyxVQUFNYixPQUFPYyxRQUFQLENBQWdCQyxRQUFoQixHQUEyQjtBQUZaLEdBQVQsQ0FBZDtBQUlEOztBQUVEZixPQUFPQyxHQUFQLENBQVdlLEtBQVgsQ0FBaUI7QUFDZkMsV0FBUztBQUNQQyxpQkFBYSxxQkFBVUMsS0FBVixFQUFpQjtBQUM1QixVQUFJLENBQUNBLEtBQUwsRUFBWSxPQUFPLFlBQVluQixPQUFPYyxRQUFQLENBQWdCRCxJQUE1QixHQUFtQyxtQkFBMUM7QUFDWk0sY0FBUUEsTUFBTUMsUUFBTixFQUFSO0FBQ0EsYUFBT3BCLE9BQU9jLFFBQVAsQ0FBZ0JPLFFBQWhCLEdBQTJCLElBQTNCLEdBQWtDckIsT0FBT2MsUUFBUCxDQUFnQkQsSUFBbEQsR0FBeUQsR0FBekQsR0FBK0RNLEtBQXRFO0FBQ0Q7QUFMTTtBQURNLENBQWpCOztBQVVBbkIsT0FBT3NCLFFBQVAsR0FBa0IsSUFBSXJCLEdBQUosRUFBbEIsQzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQSwyaEJBQXNZO0FBQ3RZO0FBQ0Esb1NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBOztBQUVBO0FBQ0EsSUFBTXNCLE1BQU0sSUFBSXRCLEdBQUosQ0FBUTtBQUNsQnVCLE1BQUksTUFEYztBQUVsQkMsY0FBWTtBQUNWQyxXQUFBLGtFQUFBQTtBQURVO0FBRk0sQ0FBUixDQUFaLEMiLCJmaWxlIjoiL2pzL2F1dGgvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIGNvbnRhaW5lciBteC00IG1kOm14LWF1dG8gc2hhZG93LWxnIG10LTMyIGZsZXggZmxleC1yb3cgbWQ6dy0zLzUgeHhsOnctMi81IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzIgdGV4dC1jZW50ZXIgYmctdGVhbC1saWdodCBwLTQgaGlkZGVuIG1kOmJsb2NrXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQtNHhsIHB0LTggbXQtOFwiPkdPT0RXT1JLPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXdoaXRlIHRleHQteGwgcHQtNFwiPlNhbmUgd2F5IHRvIG1hbmFnZSB3b3JrPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIlwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1kOnctMS8yIHAtOFwiPlxuICAgICAgICAgICAgPGZvcm0gcm9sZT1cImZvcm1cIiBtZXRob2Q9XCJQT1NUXCIgOmFjdGlvbj1cInVybFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl90b2tlblwiIDp2YWx1ZT1cInRva2VuXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXJlZC1saWdodCBibG9jayBwdC0yXCIgdi1pZj1cImVycm9yc1wiPnt7IGVycm9ycy5lbWFpbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJweS00XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmV5LWRhcmtlclwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXJlZC1saWdodCBibG9jayBwdC0yXCIgdi1pZj1cImVycm9yc1wiPnt7IGVycm9ycy5wYXNzd29yZCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJweS00IHRleHQtZ3JleVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInJlbWVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIFJlbWVtYmVyIE1lXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwicHktNFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0blwiPkxPR0lOPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwYXNzd29yZC9yZXNldFwiIGNsYXNzPVwibm8tdW5kZXJsaW5lIHRleHQtdGVhbCB0ZXh0LXNtXCI+Rm9yZ290IFlvdXIgUGFzc3dvcmQ/PC9hPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgZGF0YTogKCkgPT4gKHtcbiAgICAgICAgdG9rZW46IExhcmF2ZWwuY3NyZlRva2VuLFxuICAgICAgICBlcnJvcnM6IGVycm9ycyxcbiAgICAgICAgdXJsOiB1cmxcbiAgICAgIH0pXG4gICAgfVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvbG9naW4udnVlIiwidmFyIGFzeW5jR2VuZXJhdG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBd2FpdFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNHZW5lcmF0b3IoZ2VuKSB7XG4gICAgdmFyIGZyb250LCBiYWNrO1xuXG4gICAgZnVuY3Rpb24gc2VuZChrZXksIGFyZykge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB7XG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgYXJnOiBhcmcsXG4gICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICByZWplY3Q6IHJlamVjdCxcbiAgICAgICAgICBuZXh0OiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGJhY2spIHtcbiAgICAgICAgICBiYWNrID0gYmFjay5uZXh0ID0gcmVxdWVzdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmcm9udCA9IGJhY2sgPSByZXF1ZXN0O1xuICAgICAgICAgIHJlc3VtZShrZXksIGFyZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZShrZXksIGFyZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBd2FpdFZhbHVlKSB7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlLnZhbHVlKS50aGVuKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcIm5leHRcIiwgYXJnKTtcbiAgICAgICAgICB9LCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJ0aHJvd1wiLCBhcmcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldHRsZShyZXN1bHQuZG9uZSA/IFwicmV0dXJuXCIgOiBcIm5vcm1hbFwiLCByZXN1bHQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0dGxlKFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR0bGUodHlwZSwgdmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwicmV0dXJuXCI6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRocm93XCI6XG4gICAgICAgICAgZnJvbnQucmVqZWN0KHZhbHVlKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgZnJvbnQgPSBmcm9udC5uZXh0O1xuXG4gICAgICBpZiAoZnJvbnQpIHtcbiAgICAgICAgcmVzdW1lKGZyb250LmtleSwgZnJvbnQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhY2sgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2ludm9rZSA9IHNlbmQ7XG5cbiAgICBpZiAodHlwZW9mIGdlbi5yZXR1cm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhpcy5yZXR1cm4gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuYXN5bmNJdGVyYXRvcikge1xuICAgIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICB9XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcIm5leHRcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInRocm93XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwicmV0dXJuXCIsIGFyZyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB3cmFwOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQXN5bmNHZW5lcmF0b3IoZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgYXdhaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBBd2FpdFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH07XG59KCk7XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb25uZWN0b3Iob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aEVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy9hdXRoJyxcbiAgICAgICAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgICAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGhvc3Q6IG51bGwsXG4gICAgICAgICAgICBrZXk6IG51bGwsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdBcHAuRXZlbnRzJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKENvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dGguaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NzcmZUb2tlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjc3JmVG9rZW4oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydMYXJhdmVsJ10gJiYgd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3NyZlRva2VuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIChzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29ubmVjdG9yO1xufSgpO1xuXG52YXIgQ2hhbm5lbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDaGFubmVsKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdub3RpZmljYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbm90aWZpY2F0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oJy5JbGx1bWluYXRlXFxcXE5vdGlmaWNhdGlvbnNcXFxcRXZlbnRzXFxcXEJyb2FkY2FzdE5vdGlmaWNhdGlvbkNyZWF0ZWQnLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbkZvcldoaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuRm9yV2hpc3BlcihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLmNsaWVudC0nICsgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ2hhbm5lbDtcbn0oKTtcblxudmFyIEV2ZW50Rm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50Rm9ybWF0dGVyKG5hbWVzcGFjZSkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudEZvcm1hdHRlcik7XG5cbiAgICAgICAgdGhpcy5zZXROYW1lc3BhY2UobmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhFdmVudEZvcm1hdHRlciwgW3tcbiAgICAgICAga2V5OiAnZm9ybWF0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYXJBdCgwKSA9PT0gJy4nIHx8IGV2ZW50LmNoYXJBdCgwKSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5uYW1lc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBldmVudCA9IHRoaXMubmFtZXNwYWNlICsgJy4nICsgZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucmVwbGFjZSgvXFwuL2csICdcXFxcJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE5hbWVzcGFjZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROYW1lc3BhY2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEV2ZW50Rm9ybWF0dGVyO1xufSgpO1xuXG52YXIgUHVzaGVyQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlckNoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNoYW5uZWwocHVzaGVyLCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlckNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDaGFubmVsKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLnB1c2hlciA9IHB1c2hlcjtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLmV2ZW50Rm9ybWF0dGVyID0gbmV3IEV2ZW50Rm9ybWF0dGVyKF90aGlzLm9wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbih0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzdG9wTGlzdGVuaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuYmluZCh0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlckNoYW5uZWw7XG59KENoYW5uZWwpO1xuXG52YXIgUHVzaGVyUHJpdmF0ZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gICAgZnVuY3Rpb24gUHVzaGVyUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByaXZhdGVDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyUHJpdmF0ZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIuY2hhbm5lbHMuY2hhbm5lbHNbdGhpcy5uYW1lXS50cmlnZ2VyKCdjbGllbnQtJyArIGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyUHJpdmF0ZUNoYW5uZWw7XG59KFB1c2hlckNoYW5uZWwpO1xuXG52YXIgUHVzaGVyUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9QdXNoZXJDaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyUHJlc2VuY2VDaGFubmVsLCBfUHVzaGVyQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJQcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByZXNlbmNlQ2hhbm5lbCk7XG4gICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJQcmVzZW5jZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJQcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ2hlcmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1lbWJlcnNba107XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lbWJlci5pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1lbWJlci5pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ2hhbm5lbChzb2NrZXQsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU29ja2V0SW9DaGFubmVsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTb2NrZXRJb0NoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0NoYW5uZWwpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLmV2ZW50Rm9ybWF0dGVyID0gbmV3IEV2ZW50Rm9ybWF0dGVyKF90aGlzLm9wdGlvbnMubmFtZXNwYWNlKTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlKCk7XG4gICAgICAgIF90aGlzLmNvbmZpZ3VyZVJlY29ubmVjdG9yKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb0NoYW5uZWwsIFt7XG4gICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdzdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIubmFtZSA9PSBjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbihldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5iaW5kKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbmZpZ3VyZVJlY29ubmVjdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmZpZ3VyZVJlY29ubmVjdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgICAgICAgICAgICAgIF90aGlzMy5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbigncmVjb25uZWN0JywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5iaW5kKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2JpbmQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYmluZChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IHRoaXMuZXZlbnRzW2V2ZW50XSB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5iaW5kJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmV2ZW50cykuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczQuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczQuc29ja2V0LnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzNC5ldmVudHNbZXZlbnRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ2hhbm5lbDtcbn0oQ2hhbm5lbCk7XG5cbnZhciBTb2NrZXRJb1ByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBfU29ja2V0SW9DaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByaXZhdGVDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICd3aGlzcGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbDtcbn0oU29ja2V0SW9DaGFubmVsKTtcblxudmFyIFNvY2tldElvUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb1ByaXZhdGVDaGFubikge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBfU29ja2V0SW9Qcml2YXRlQ2hhbm4pO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpzdWJzY3JpYmVkJywgZnVuY3Rpb24gKG1lbWJlcnMpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXJzLm1hcChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbS51c2VyX2luZm87XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpqb2luaW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZpbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmluZyhjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6bGVhdmluZycsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobWVtYmVyLnVzZXJfaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbDtcbn0oU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCk7XG5cbnZhciBQdXNoZXJDb25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFB1c2hlckNvbm5lY3RvciwgX0Nvbm5lY3Rvcik7XG5cbiAgICBmdW5jdGlvbiBQdXNoZXJDb25uZWN0b3IoKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlckNvbm5lY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUHVzaGVyQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyQ29ubmVjdG9yKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlckNvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIgPSBuZXcgUHVzaGVyKHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGVDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByaXZhdGVDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcml2YXRlQ2hhbm5lbCh0aGlzLnB1c2hlciwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgUHVzaGVyUHJlc2VuY2VDaGFubmVsKHRoaXMucHVzaGVyLCAncHJlc2VuY2UtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShuYW1lKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gW25hbWUsICdwcml2YXRlLScgKyBuYW1lLCAncHJlc2VuY2UtJyArIG5hbWVdO1xuICAgICAgICAgICAgY2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgX3RoaXMyLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGlzY29ubmVjdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBQdXNoZXJDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbnZhciBTb2NrZXRJb0Nvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Db25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9Db25uZWN0b3IoKSB7XG4gICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ29ubmVjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBTb2NrZXRJb0Nvbm5lY3Rvci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ29ubmVjdG9yKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTb2NrZXRJTycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb2NrZXRJTygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvY2tldC5pbyBjbGllbnQgbm90IGZvdW5kLiBTaG91bGQgYmUgZ2xvYmFsbHkgYXZhaWxhYmxlIG9yIHBhc3NlZCB2aWEgb3B0aW9ucy5jbGllbnQnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihuYW1lLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWwobmFtZSkubGlzdGVuKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gbmV3IFNvY2tldElvQ2hhbm5lbCh0aGlzLnNvY2tldCwgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIuY2hhbm5lbHNbbmFtZV0udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIF90aGlzMi5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc29ja2V0SWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc29ja2V0SWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zb2NrZXQuaWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Db25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbnZhciBFY2hvID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEVjaG8ob3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBFY2hvKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclZ1ZVJlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyalF1ZXJ5QWpheFNldHVwKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAncHVzaGVyJykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgUHVzaGVyQ29ubmVjdG9yKHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdzb2NrZXQuaW8nKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBTb2NrZXRJb0Nvbm5lY3Rvcih0aGlzLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRWNobywgW3tcbiAgICAgICAga2V5OiAncmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMyLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtU29ja2V0LUlkJ10gPSBfdGhpczIuc29ja2V0SWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeS5hamF4ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIGJlZm9yZVNlbmQoeGhyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMzLnNvY2tldElkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1Tb2NrZXQtSWQnLCBfdGhpczMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5saXN0ZW4oY2hhbm5lbCwgZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGFubmVsKF9jaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IuY2hhbm5lbChfY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4oY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByZXNlbmNlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmUoY2hhbm5lbCkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IubGVhdmUoY2hhbm5lbCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnNvY2tldElkKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRWNobztcbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFY2hvO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIDQgNSA3IDggOSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICByYXdTY3JpcHRFeHBvcnRzLFxuICBjb21waWxlZFRlbXBsYXRlLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqL1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgdmFyIGZ1bmN0aW9uYWwgPSBvcHRpb25zLmZ1bmN0aW9uYWxcbiAgICB2YXIgZXhpc3RpbmcgPSBmdW5jdGlvbmFsXG4gICAgICA/IG9wdGlvbnMucmVuZGVyXG4gICAgICA6IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG5cbiAgICBpZiAoIWZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gZXhpc3RpbmcoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVzTW9kdWxlOiBlc01vZHVsZSxcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyA0IDUgNyA4IDkiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgIFwiYmctd2hpdGUgY29udGFpbmVyIG14LTQgbWQ6bXgtYXV0byBzaGFkb3ctbGcgbXQtMzIgZmxleCBmbGV4LXJvdyBtZDp3LTMvNSB4eGw6dy0yLzUganVzdGlmeS1iZXR3ZWVuXCJcbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7fSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWQ6dy0xLzIgcC04XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7IGF0dHJzOiB7IHJvbGU6IFwiZm9ybVwiLCBtZXRob2Q6IFwiUE9TVFwiLCBhY3Rpb246IF92bS51cmwgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIl90b2tlblwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udG9rZW4gfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktNFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkUtbWFpbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmVycm9yc1xuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtbGlnaHQgYmxvY2sgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktNFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICBcInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmVycm9yc1xuICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yZWQtbGlnaHQgYmxvY2sgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZXJyb3JzLnBhc3N3b3JkKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuby11bmRlcmxpbmUgdGV4dC10ZWFsIHRleHQtc21cIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcInBhc3N3b3JkL3Jlc2V0XCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRm9yZ290IFlvdXIgUGFzc3dvcmQ/XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzIgdGV4dC1jZW50ZXIgYmctdGVhbC1saWdodCBwLTQgaGlkZGVuIG1kOmJsb2NrXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZSBmb250LWJvbGQgdGV4dC00eGwgcHQtOCBtdC04XCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkdPT0RXT1JLXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXdoaXRlIHRleHQteGwgcHQtNFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJTYW5lIHdheSB0byBtYW5hZ2Ugd29ya1wiKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktNCB0ZXh0LWdyZXlcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHsgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBuYW1lOiBcInJlbWVtYmVyXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBSZW1lbWJlciBNZVxcbiAgICAgICAgICAgIFwiKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInB5LTRcIiB9LCBbXG4gICAgICBfYyhcImJ1dHRvblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0blwiLCBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJMT0dJTlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xYTNiNDQ5OVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWEzYjQ0OTlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4LmpzP3tcImlkXCI6XCJkYXRhLXYtMWEzYjQ0OTlcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvY3NzL21haW4uY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImltcG9ydCBFY2hvIGZyb20gJ2xhcmF2ZWwtZWNobydcbndpbmRvdy5WdWUgPSByZXF1aXJlKCd2dWUnKVxuXG53aW5kb3cuYXhpb3MgPSByZXF1aXJlKCdheGlvcycpXG5cbndpbmRvdy5sdXhvbiA9IHJlcXVpcmUoJ2x1eG9uJylcblxud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge1xuICAnWC1DU1JGLVRPS0VOJzogd2luZG93LkxhcmF2ZWwuY3NyZlRva2VuLFxuICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbn1cblxuLyoqXG4gKiBFY2hvIGV4cG9zZXMgYW4gZXhwcmVzc2l2ZSBBUEkgZm9yIHN1YnNjcmliaW5nIHRvIGNoYW5uZWxzIGFuZCBsaXN0ZW5pbmdcbiAqIGZvciBldmVudHMgdGhhdCBhcmUgYnJvYWRjYXN0IGJ5IExhcmF2ZWwuIEVjaG8gYW5kIGV2ZW50IGJyb2FkY2FzdGluZ1xuICogYWxsb3dzIHlvdXIgdGVhbSB0byBlYXNpbHkgYnVpbGQgcm9idXN0IHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zLlxuICovXG5cbmlmICh0eXBlb2YgaW8gIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuICAgIGJyb2FkY2FzdGVyOiAnc29ja2V0LmlvJyxcbiAgICBob3N0OiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnOjYwMDEnXG4gIH0pXG59XG5cbndpbmRvdy5WdWUubWl4aW4oe1xuICBtZXRob2RzOiB7XG4gICAgZ2VuZXJhdGVVcmw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9pbWFnZS9hdmF0YXIuanBnJ1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy8nICsgdmFsdWVcbiAgICB9XG4gIH1cbn0pXG5cbndpbmRvdy5FdmVudEJ1cyA9IG5ldyBWdWUoKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2V9XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV1dLFxcXCJlbnZcXFwiOntcXFwidGVzdFxcXCI6e1xcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwidGFyZ2V0c1xcXCI6e1xcXCJub2RlXFxcIjpcXFwiY3VycmVudFxcXCJ9fV1dfX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xYTNiNDQ5OVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWEzYjQ0OTlcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xYTNiNDQ5OVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJpbXBvcnQgJy4vLi4vLi4vYm9vdHN0cmFwJ1xuaW1wb3J0IGxvZ2luIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZSdcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgbG9naW5cbiAgfVxufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=