(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/auth/login"],{

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(nextUniqueId());
  var clipId = "clip-".concat(nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.12.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        title: title,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily) {
      var content = styles.getPropertyValue('content');
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@fortawesome/vue-fontawesome/index.es.js":
/*!***************************************************************!*\
  !*** ./node_modules/@fortawesome/vue-fontawesome/index.es.js ***!
  \***************************************************************/
/*! exports provided: FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeLayers", function() { return FontAwesomeLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeLayersText", function() { return FontAwesomeLayersText; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");


var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var humps = createCommonjsModule(function (module) {
(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (false) {} else if ( true && module.exports) {
    module.exports = humps;
  } else {
    global.humps = humps;
  }

})(commonjsGlobal);
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = humps.camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();

    acc[prop] = value;

    return acc;
  }, {});
}

function classToObject(cls) {
  return cls.split(/\s+/).reduce(function (acc, c) {
    acc[c] = true;

    return acc;
  }, {});
}

function combineClassObjects() {
  for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
    objs[_key] = arguments[_key];
  }

  return objs.reduce(function (acc, obj) {
    if (Array.isArray(obj)) {
      acc = acc.concat(obj);
    } else {
      acc.push(obj);
    }

    return acc;
  }, []);
}

function convert(h, element) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var children = (element.children || []).map(convert.bind(null, h));

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc['class'] = classToObject(val);
        break;
      case 'style':
        acc['style'] = styleToObject(val);
        break;
      default:
        acc.attrs[key] = val;
    }

    return acc;
  }, { 'class': {}, style: {}, attrs: {} });

  var _data$class = data.class,
      dClass = _data$class === undefined ? {} : _data$class,
      _data$style = data.style,
      dStyle = _data$style === undefined ? {} : _data$style,
      _data$attrs = data.attrs,
      dAttrs = _data$attrs === undefined ? {} : _data$attrs,
      remainingData = objectWithoutProperties(data, ['class', 'style', 'attrs']);


  if (typeof element === 'string') {
    return element;
  } else {
    return h(element.tag, _extends({
      class: combineClassObjects(mixins.class, dClass),
      style: _extends({}, mixins.style, dStyle),
      attrs: _extends({}, mixins.attrs, dAttrs)
    }, remainingData, {
      props: props
    }), children);
  }
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

function objectWithKey(key, value) {
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
}

function classList(props) {
  var _classes;

  var classes = (_classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-inverse': props.inverse,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes);

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

function addStaticClass(to, what) {
  var val = (to || '').length === 0 ? [] : [to];

  return val.concat(what).join(' ');
}

function normalizeIconArgs(icon$$1) {
  if (icon$$1 === null) {
    return null;
  }

  if ((typeof icon$$1 === 'undefined' ? 'undefined' : _typeof(icon$$1)) === 'object' && icon$$1.prefix && icon$$1.iconName) {
    return icon$$1;
  }

  if (Array.isArray(icon$$1) && icon$$1.length === 2) {
    return { prefix: icon$$1[0], iconName: icon$$1[1] };
  }

  if (typeof icon$$1 === 'string') {
    return { prefix: 'fas', iconName: icon$$1 };
  }
}

var FontAwesomeIcon = {
  name: 'FontAwesomeIcon',

  functional: true,

  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['right', 'left'].indexOf(value) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function validator(value) {
        return [90, 180, 270].indexOf(parseInt(value, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },

  render: function render(createElement, context) {
    var props = context.props;
    var iconArgs = props.icon,
        maskArgs = props.mask,
        symbol = props.symbol,
        title = props.title;

    var icon$$1 = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', classList(props));
    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));

    var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(icon$$1, _extends({}, classes, transform, mask, { symbol: symbol, title: title }));

    if (!renderedIcon) {
      return log('Could not find one or more icon(s)', icon$$1, mask);
    }

    var abstract = renderedIcon.abstract;

    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};

var FontAwesomeLayers = {
  name: 'FontAwesomeLayers',

  functional: true,

  props: {
    fixedWidth: {
      type: Boolean,
      default: false
    }
  },

  render: function render(createElement, context) {
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].familyPrefix;
    var staticClass = context.data.staticClass;


    var classes = [familyPrefix + '-layers'].concat(toConsumableArray(context.props.fixedWidth ? [familyPrefix + '-fw'] : []));

    return createElement('div', _extends({}, context.data, {
      staticClass: addStaticClass(staticClass, classes)
    }), context.children);
  }
};

var FontAwesomeLayersText = {
  name: 'FontAwesomeLayersText',

  functional: true,

  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: null,
      validator: function validator(value) {
        return ['bottom-left', 'bottom-right', 'top-left', 'top-right'].indexOf(value) > -1;
      }
    }
  },

  render: function render(createElement, context) {
    var familyPrefix = _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["config"].familyPrefix;
    var props = context.props;


    var classes = objectWithKey('classes', [].concat(toConsumableArray(props.counter ? [familyPrefix + '-layers-counter'] : []), toConsumableArray(props.position ? [familyPrefix + '-layers-' + props.position] : [])));

    var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);

    var renderedText = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["text"])(props.value.toString(), _extends({}, transform, classes));

    var abstract = renderedText.abstract;


    if (props.counter) {
      abstract[0].attributes.class = abstract[0].attributes.class.replace('fa-layers-text', '');
    }

    var convertCurry = convert.bind(null, createElement);

    return convertCurry(abstract[0], {}, context.data);
  }
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      oldEmail: oldEmail,
      url: url
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    /**
     * Create a new class instance.
     */
    function Connector(options) {
        classCallCheck(this, Connector);

        /**
         * Default connector options.
         */
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
    /**
     * Merge the custom options with the defaults.
     */


    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
        /**
         * Extract the CSRF token from the page.
         */

    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && typeof document.querySelector === 'function' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

/**
 * This class represents a basic channel.
 */
var Channel = function () {
  function Channel() {
    classCallCheck(this, Channel);
  }

  createClass(Channel, [{
    key: 'listenForWhisper',

    /**
     * Listen for a whisper event on the channel instance.
     */
    value: function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'notification',
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
    /**
     * Stop listening for a whispser event on the channel instance.
     */

  }, {
    key: 'stopListeningForWhisper',
    value: function stopListeningForWhisper(event) {
      return this.stopListening('.client-' + event);
    }
  }]);
  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = function () {
    /**
     * Create a new class instance.
     */
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }
    /**
     * Format the given event name.
     */


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
        /**
         * Set the event namespace.
         */

    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */
var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    /**
     * Create a new class instance.
     */
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
    /**
     * Subscribe to a Pusher channel.
     */


    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
        /**
         * Unsubscribe from a Pusher channel.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
        /**
         * Bind a channel to an event.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */
var PusherPrivateChannel = function (_PusherChannel) {
  inherits(PusherPrivateChannel, _PusherChannel);

  function PusherPrivateChannel() {
    classCallCheck(this, PusherPrivateChannel);
    return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
  }

  createClass(PusherPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
      return this;
    }
  }]);
  return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */
var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Trigger client event on the channel.
         */

    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */
var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        /**
         * The event callbacks applied to the channel.
         */
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
    /**
     * Subscribe to a Socket.io channel.
     */


    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Unsubscribe from channel and ubind event callbacks.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            var name = this.eventFormatter.format(event);
            this.socket.removeListener(name);
            delete this.events[name];
            return this;
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

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
        /**
         * Attach a 'reconnect' listener and bind the event.
         */

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
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
        /**
         * Unbind the channel's socket from all stored event callbacks.
         */

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

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
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

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

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

/**
 * This class represents a null channel.
 */
var NullChannel = function (_Channel) {
  inherits(NullChannel, _Channel);

  function NullChannel() {
    classCallCheck(this, NullChannel);
    return possibleConstructorReturn(this, (NullChannel.__proto__ || Object.getPrototypeOf(NullChannel)).apply(this, arguments));
  }

  createClass(NullChannel, [{
    key: 'subscribe',

    /**
     * Subscribe to a channel.
     */
    value: function subscribe() {}
    //

    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {}
    //

    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: 'stopListening',
    value: function stopListening(event) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      return this;
    }
  }]);
  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */
var NullPrivateChannel = function (_NullChannel) {
  inherits(NullPrivateChannel, _NullChannel);

  function NullPrivateChannel() {
    classCallCheck(this, NullPrivateChannel);
    return possibleConstructorReturn(this, (NullPrivateChannel.__proto__ || Object.getPrototypeOf(NullPrivateChannel)).apply(this, arguments));
  }

  createClass(NullPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */
var NullPresenceChannel = function (_NullChannel) {
  inherits(NullPresenceChannel, _NullChannel);

  function NullPresenceChannel() {
    classCallCheck(this, NullPresenceChannel);
    return possibleConstructorReturn(this, (NullPresenceChannel.__proto__ || Object.getPrototypeOf(NullPresenceChannel)).apply(this, arguments));
  }

  createClass(NullPresenceChannel, [{
    key: 'here',

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: 'joining',
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: 'leaving',
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: 'whisper',
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPresenceChannel;
}(NullChannel);

/**
 * This class creates a connector to Pusher.
 */
var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        classCallCheck(this, PusherConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Pusher connection.
     */


    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            if (typeof this.options.client !== 'undefined') {
                this.pusher = this.options.client;
            } else {
                this.pusher = new Pusher(this.options.key, this.options);
            }
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
        /**
         * Disconnect Pusher connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */
var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        classCallCheck(this, SocketIoConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Socket.io connection.
     */


    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
        /**
         * Get socket.io module from global scope or options.
         */

    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof this.options.client !== 'undefined') {
                return this.options.client;
            }
            if (typeof io !== 'undefined') {
                return io;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
        /**
         * Disconnect Socketio connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */
var NullConnector = function (_Connector) {
  inherits(NullConnector, _Connector);

  function NullConnector() {
    classCallCheck(this, NullConnector);

    /**
     * All of the subscribed channel names.
     */
    var _this = possibleConstructorReturn(this, (NullConnector.__proto__ || Object.getPrototypeOf(NullConnector)).apply(this, arguments));

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  createClass(NullConnector, [{
    key: 'connect',
    value: function connect() {}
    //

    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: 'channel',
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: 'privateChannel',
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: 'presenceChannel',
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: 'leave',
    value: function leave(name) {}
    //

    /**
     * Leave the given channel.
     */

  }, {
    key: 'leaveChannel',
    value: function leaveChannel(name) {}
    //

    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: 'socketId',
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      //
    }
  }]);
  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = function () {
    /**
     * Create a new class instance.
     */
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        this.connect();
        if (!this.options.withoutInterceptors) {
            this.registerInterceptors();
        }
    }
    /**
     * Get a channel instance by name.
     */


    createClass(Echo, [{
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
        /**
         * Create a new connection.
         */

    }, {
        key: 'connect',
        value: function connect() {
            if (this.options.broadcaster == 'pusher') {
                this.connector = new PusherConnector(this.options);
            } else if (this.options.broadcaster == 'socket.io') {
                this.connector = new SocketIoConnector(this.options);
            } else if (this.options.broadcaster == 'null') {
                this.connector = new NullConnector(this.options);
            } else if (typeof this.options.broadcaster == 'function') {
                this.connector = new this.options.broadcaster(this.options);
            }
        }
        /**
         * Disconnect from the Echo server.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(channel) {
            this.connector.leaveChannel(channel);
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
        /**
         * Get the Socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
        /**
         * Register 3rd party request interceptiors. These are used to automatically
         * send a connections socket id to a Laravel app with a X-Socket-Id header.
         */

    }, {
        key: 'registerInterceptors',
        value: function registerInterceptors() {
            if (typeof Vue === 'function' && Vue.http) {
                this.registerVueRequestInterceptor();
            }
            if (typeof axios === 'function') {
                this.registerAxiosRequestInterceptor();
            }
            if (typeof jQuery === 'function') {
                this.registerjQueryAjaxSetup();
            }
        }
        /**
         * Register a Vue HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
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
        /**
         * Register an Axios HTTP interceptor to add the X-Socket-ID header.
         */

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
        /**
         * Register jQuery AjaxPrefilter to add the X-Socket-ID header.
         */

    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
                    if (_this3.socketId()) {
                        xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                    }
                });
            }
        }
    }]);
    return Echo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Echo);


/***/ }),

/***/ "./node_modules/linkifyjs/element.js":
/*!*******************************************!*\
  !*** ./node_modules/linkifyjs/element.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify-element */ "./node_modules/linkifyjs/lib/linkify-element.js").default;


/***/ }),

/***/ "./node_modules/linkifyjs/index.js":
/*!*****************************************!*\
  !*** ./node_modules/linkifyjs/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/linkify */ "./node_modules/linkifyjs/lib/linkify.js");


/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify-element.js":
/*!*******************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify-element.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _linkify = __webpack_require__(/*! ./linkify */ "./node_modules/linkifyjs/lib/linkify.js");

var linkify = _interopRequireWildcard(_linkify);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tokenize = linkify.tokenize,
    options = linkify.options; /**
                               	Linkify a HTML DOM node
                               */

var Options = options.Options;


var TEXT_TOKEN = linkify.parser.TOKENS.TEXT;

var HTML_NODE = 1,
    TXT_NODE = 3;

/**
	Given a parent element and child node that the parent contains, replaces
	that child with the given array of new children
*/
function replaceChildWithChildren(parent, oldChild, newChildren) {
	var lastNewChild = newChildren[newChildren.length - 1];
	parent.replaceChild(lastNewChild, oldChild);
	for (var i = newChildren.length - 2; i >= 0; i--) {
		parent.insertBefore(newChildren[i], lastNewChild);
		lastNewChild = newChildren[i];
	}
}

/**
	Given an array of MultiTokens, return an array of Nodes that are either
	(a) Plain Text nodes (node type 3)
	(b) Anchor tag nodes (usually, unless tag name is overridden in the options)

	Takes the same options as linkifyElement and an optional doc element
	(this should be passed in by linkifyElement)
*/
function tokensToNodes(tokens, opts, doc) {
	var result = [];

	for (var _iterator = tokens, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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

		if (token.type === 'nl' && opts.nl2br) {
			result.push(doc.createElement('br'));
			continue;
		} else if (!token.isLink || !opts.check(token)) {
			result.push(doc.createTextNode(token.toString()));
			continue;
		}

		var _opts$resolve = opts.resolve(token),
		    formatted = _opts$resolve.formatted,
		    formattedHref = _opts$resolve.formattedHref,
		    tagName = _opts$resolve.tagName,
		    className = _opts$resolve.className,
		    target = _opts$resolve.target,
		    events = _opts$resolve.events,
		    attributes = _opts$resolve.attributes;

		// Build the link


		var link = doc.createElement(tagName);
		link.setAttribute('href', formattedHref);

		if (className) {
			link.setAttribute('class', className);
		}

		if (target) {
			link.setAttribute('target', target);
		}

		// Build up additional attributes
		if (attributes) {
			for (var attr in attributes) {
				link.setAttribute(attr, attributes[attr]);
			}
		}

		if (events) {
			for (var event in events) {
				if (link.addEventListener) {
					link.addEventListener(event, events[event]);
				} else if (link.attachEvent) {
					link.attachEvent('on' + event, events[event]);
				}
			}
		}

		link.appendChild(doc.createTextNode(formatted));
		result.push(link);
	}

	return result;
}

// Requires document.createElement
function linkifyElementHelper(element, opts, doc) {

	// Can the element be linkified?
	if (!element || element.nodeType !== HTML_NODE) {
		throw new Error('Cannot linkify ' + element + ' - Invalid DOM Node type');
	}

	var ignoreTags = opts.ignoreTags;

	// Is this element already a link?
	if (element.tagName === 'A' || options.contains(ignoreTags, element.tagName)) {
		// No need to linkify
		return element;
	}

	var childElement = element.firstChild;

	while (childElement) {
		var str = void 0,
		    tokens = void 0,
		    nodes = void 0;

		switch (childElement.nodeType) {
			case HTML_NODE:
				linkifyElementHelper(childElement, opts, doc);
				break;
			case TXT_NODE:
				{
					str = childElement.nodeValue;
					tokens = tokenize(str);

					if (tokens.length === 0 || tokens.length === 1 && tokens[0] instanceof TEXT_TOKEN) {
						// No node replacement required
						break;
					}

					nodes = tokensToNodes(tokens, opts, doc);

					// Swap out the current child for the set of nodes
					replaceChildWithChildren(element, childElement, nodes);

					// so that the correct sibling is selected next
					childElement = nodes[nodes.length - 1];

					break;
				}
		}

		childElement = childElement.nextSibling;
	}

	return element;
}

function linkifyElement(element, opts) {
	var doc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


	try {
		doc = doc || document || window && window.document || global && global.document;
	} catch (e) {/* do nothing for now */}

	if (!doc) {
		throw new Error('Cannot find document implementation. ' + 'If you are in a non-browser environment like Node.js, ' + 'pass the document implementation as the third argument to linkifyElement.');
	}

	opts = new Options(opts);
	return linkifyElementHelper(element, opts, doc);
}

// Maintain reference to the recursive helper to cache option-normalization
linkifyElement.helper = linkifyElementHelper;
linkifyElement.normalize = function (opts) {
	return new Options(opts);
};

exports.default = linkifyElement;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify.js":
/*!***********************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.tokenize = exports.test = exports.scanner = exports.parser = exports.options = exports.inherits = exports.find = undefined;

var _class = __webpack_require__(/*! ./linkify/utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _options = __webpack_require__(/*! ./linkify/utils/options */ "./node_modules/linkifyjs/lib/linkify/utils/options.js");

var options = _interopRequireWildcard(_options);

var _scanner = __webpack_require__(/*! ./linkify/core/scanner */ "./node_modules/linkifyjs/lib/linkify/core/scanner.js");

var scanner = _interopRequireWildcard(_scanner);

var _parser = __webpack_require__(/*! ./linkify/core/parser */ "./node_modules/linkifyjs/lib/linkify/core/parser.js");

var parser = _interopRequireWildcard(_parser);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

if (!Array.isArray) {
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) === '[object Array]';
	};
}

/**
	Converts a string into tokens that represent linkable and non-linkable bits
	@method tokenize
	@param {String} str
	@return {Array} tokens
*/
var tokenize = function tokenize(str) {
	return parser.run(scanner.run(str));
};

/**
	Returns a list of linkable items in the given string.
*/
var find = function find(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	var filtered = [];

	for (var i = 0; i < tokens.length; i++) {
		var token = tokens[i];
		if (token.isLink && (!type || token.type === type)) {
			filtered.push(token.toObject());
		}
	}

	return filtered;
};

/**
	Is the given string valid linkable text of some sort
	Note that this does not trim the text for you.

	Optionally pass in a second `type` param, which is the type of link to test
	for.

	For example,

		test(str, 'email');

	Will return `true` if str is a valid email.
*/
var test = function test(str) {
	var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	var tokens = tokenize(str);
	return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].type === type);
};

// Scanner and parser provide states and tokens for the lexicographic stage
// (will be used to add additional link types)
exports.find = find;
exports.inherits = _class.inherits;
exports.options = options;
exports.parser = parser;
exports.scanner = scanner;
exports.test = test;
exports.tokenize = tokenize;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/parser.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/parser.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _multi = __webpack_require__(/*! ./tokens/multi */ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js");

var MULTI_TOKENS = _interopRequireWildcard(_multi);

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/Email_address (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main parser
*/

var makeState = function makeState(tokenClass) {
	return new _state.TokenState(tokenClass);
};

// The universal starting state.
var S_START = makeState();

// Intermediate states for URLs. Note that domains that begin with a protocol
// are treated slighly differently from those that don't.
var S_PROTOCOL = makeState(); // e.g., 'http:'
var S_MAILTO = makeState(); // 'mailto:'
var S_PROTOCOL_SLASH = makeState(); // e.g., '/', 'http:/''
var S_PROTOCOL_SLASH_SLASH = makeState(); // e.g., '//', 'http://'
var S_DOMAIN = makeState(); // parsed string ends with a potential domain name (A)
var S_DOMAIN_DOT = makeState(); // (A) domain followed by DOT
var S_TLD = makeState(_multi.URL); // (A) Simplest possible URL with no query string
var S_TLD_COLON = makeState(); // (A) URL followed by colon (potential port number here)
var S_TLD_PORT = makeState(_multi.URL); // TLD followed by a port number
var S_URL = makeState(_multi.URL); // Long URL with optional port and maybe query string
var S_URL_NON_ACCEPTING = makeState(); // URL followed by some symbols (will not be part of the final URL)
var S_URL_OPENBRACE = makeState(); // URL followed by {
var S_URL_OPENBRACKET = makeState(); // URL followed by [
var S_URL_OPENANGLEBRACKET = makeState(); // URL followed by <
var S_URL_OPENPAREN = makeState(); // URL followed by (
var S_URL_OPENBRACE_Q = makeState(_multi.URL); // URL followed by { and some symbols that the URL can end it
var S_URL_OPENBRACKET_Q = makeState(_multi.URL); // URL followed by [ and some symbols that the URL can end it
var S_URL_OPENANGLEBRACKET_Q = makeState(_multi.URL); // URL followed by < and some symbols that the URL can end it
var S_URL_OPENPAREN_Q = makeState(_multi.URL); // URL followed by ( and some symbols that the URL can end it
var S_URL_OPENBRACE_SYMS = makeState(); // S_URL_OPENBRACE_Q followed by some symbols it cannot end it
var S_URL_OPENBRACKET_SYMS = makeState(); // S_URL_OPENBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENANGLEBRACKET_SYMS = makeState(); // S_URL_OPENANGLEBRACKET_Q followed by some symbols it cannot end it
var S_URL_OPENPAREN_SYMS = makeState(); // S_URL_OPENPAREN_Q followed by some symbols it cannot end it
var S_EMAIL_DOMAIN = makeState(); // parsed string starts with local email info + @ with a potential domain name (C)
var S_EMAIL_DOMAIN_DOT = makeState(); // (C) domain followed by DOT
var S_EMAIL = makeState(_multi.EMAIL); // (C) Possible email address (could have more tlds)
var S_EMAIL_COLON = makeState(); // (C) URL followed by colon (potential port number here)
var S_EMAIL_PORT = makeState(_multi.EMAIL); // (C) Email address with a port
var S_MAILTO_EMAIL = makeState(_multi.MAILTOEMAIL); // Email that begins with the mailto prefix (D)
var S_MAILTO_EMAIL_NON_ACCEPTING = makeState(); // (D) Followed by some non-query string chars
var S_LOCALPART = makeState(); // Local part of the email address
var S_LOCALPART_AT = makeState(); // Local part of the email address plus @
var S_LOCALPART_DOT = makeState(); // Local part of the email address plus '.' (localpart cannot end in .)
var S_NL = makeState(_multi.NL); // single new line

// Make path from start to protocol (with '//')
S_START.on(_text.NL, S_NL).on(_text.PROTOCOL, S_PROTOCOL).on(_text.MAILTO, S_MAILTO).on(_text.SLASH, S_PROTOCOL_SLASH);

S_PROTOCOL.on(_text.SLASH, S_PROTOCOL_SLASH);
S_PROTOCOL_SLASH.on(_text.SLASH, S_PROTOCOL_SLASH_SLASH);

// The very first potential domain name
S_START.on(_text.TLD, S_DOMAIN).on(_text.DOMAIN, S_DOMAIN).on(_text.LOCALHOST, S_TLD).on(_text.NUM, S_DOMAIN);

// Force URL for protocol followed by anything sane
S_PROTOCOL_SLASH_SLASH.on(_text.TLD, S_URL).on(_text.DOMAIN, S_URL).on(_text.NUM, S_URL).on(_text.LOCALHOST, S_URL);

// Account for dots and hyphens
// hyphens are usually parts of domain names
S_DOMAIN.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL_DOMAIN.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Hyphen can jump back to a domain name

// After the first domain and a dot, we can find either a URL or another domain
S_DOMAIN_DOT.on(_text.TLD, S_TLD).on(_text.DOMAIN, S_DOMAIN).on(_text.NUM, S_DOMAIN).on(_text.LOCALHOST, S_DOMAIN);

S_EMAIL_DOMAIN_DOT.on(_text.TLD, S_EMAIL).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.NUM, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL_DOMAIN);

// S_TLD accepts! But the URL could be longer, try to find a match greedily
// The `run` function should be able to "rollback" to the accepting state
S_TLD.on(_text.DOT, S_DOMAIN_DOT);
S_EMAIL.on(_text.DOT, S_EMAIL_DOMAIN_DOT);

// Become real URLs after `SLASH` or `COLON NUM SLASH`
// Here PSS and non-PSS converge
S_TLD.on(_text.COLON, S_TLD_COLON).on(_text.SLASH, S_URL);
S_TLD_COLON.on(_text.NUM, S_TLD_PORT);
S_TLD_PORT.on(_text.SLASH, S_URL);
S_EMAIL.on(_text.COLON, S_EMAIL_COLON);
S_EMAIL_COLON.on(_text.NUM, S_EMAIL_PORT);

// Types of characters the URL can definitely end in
var qsAccepting = [_text.DOMAIN, _text.AT, _text.LOCALHOST, _text.NUM, _text.PLUS, _text.POUND, _text.PROTOCOL, _text.SLASH, _text.TLD, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND];

// Types of tokens that can follow a URL and be part of the query string
// but cannot be the very last characters
// Characters that cannot appear in the URL at all should be excluded
var qsNonAccepting = [_text.COLON, _text.DOT, _text.QUERY, _text.PUNCTUATION, _text.CLOSEBRACE, _text.CLOSEBRACKET, _text.CLOSEANGLEBRACKET, _text.CLOSEPAREN, _text.OPENBRACE, _text.OPENBRACKET, _text.OPENANGLEBRACKET, _text.OPENPAREN];

// These states are responsible primarily for determining whether or not to
// include the final round bracket.

// URL, followed by an opening bracket
S_URL.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// URL with extra symbols at the end, followed by an opening bracket
S_URL_NON_ACCEPTING.on(_text.OPENBRACE, S_URL_OPENBRACE).on(_text.OPENBRACKET, S_URL_OPENBRACKET).on(_text.OPENANGLEBRACKET, S_URL_OPENANGLEBRACKET).on(_text.OPENPAREN, S_URL_OPENPAREN);

// Closing bracket component. This character WILL be included in the URL
S_URL_OPENBRACE.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_Q.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_Q.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_Q.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_Q.on(_text.CLOSEPAREN, S_URL);
S_URL_OPENBRACE_SYMS.on(_text.CLOSEBRACE, S_URL);
S_URL_OPENBRACKET_SYMS.on(_text.CLOSEBRACKET, S_URL);
S_URL_OPENANGLEBRACKET_SYMS.on(_text.CLOSEANGLEBRACKET, S_URL);
S_URL_OPENPAREN_SYMS.on(_text.CLOSEPAREN, S_URL);

// URL that beings with an opening bracket, followed by a symbols.
// Note that the final state can still be `S_URL_OPENBRACE_Q` (if the URL only
// has a single opening bracket for some reason).
S_URL_OPENBRACE.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// URL that begins with an opening bracket, followed by some symbols
S_URL_OPENBRACE_Q.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_Q.on(qsNonAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_Q.on(qsNonAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_Q.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_Q.on(qsNonAccepting, S_URL_OPENPAREN_Q);

S_URL_OPENBRACE_SYMS.on(qsAccepting, S_URL_OPENBRACE_Q);
S_URL_OPENBRACKET_SYMS.on(qsAccepting, S_URL_OPENBRACKET_Q);
S_URL_OPENANGLEBRACKET_SYMS.on(qsAccepting, S_URL_OPENANGLEBRACKET_Q);
S_URL_OPENPAREN_SYMS.on(qsAccepting, S_URL_OPENPAREN_Q);
S_URL_OPENBRACE_SYMS.on(qsNonAccepting, S_URL_OPENBRACE_SYMS);
S_URL_OPENBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENBRACKET_SYMS);
S_URL_OPENANGLEBRACKET_SYMS.on(qsNonAccepting, S_URL_OPENANGLEBRACKET_SYMS);
S_URL_OPENPAREN_SYMS.on(qsNonAccepting, S_URL_OPENPAREN_SYMS);

// Account for the query string
S_URL.on(qsAccepting, S_URL);
S_URL_NON_ACCEPTING.on(qsAccepting, S_URL);

S_URL.on(qsNonAccepting, S_URL_NON_ACCEPTING);
S_URL_NON_ACCEPTING.on(qsNonAccepting, S_URL_NON_ACCEPTING);

// Email address-specific state definitions
// Note: We are not allowing '/' in email addresses since this would interfere
// with real URLs

// For addresses with the mailto prefix
// 'mailto:' followed by anything sane is a valid email
S_MAILTO.on(_text.TLD, S_MAILTO_EMAIL).on(_text.DOMAIN, S_MAILTO_EMAIL).on(_text.NUM, S_MAILTO_EMAIL).on(_text.LOCALHOST, S_MAILTO_EMAIL);

// Greedily get more potential valid email values
S_MAILTO_EMAIL.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);
S_MAILTO_EMAIL_NON_ACCEPTING.on(qsAccepting, S_MAILTO_EMAIL).on(qsNonAccepting, S_MAILTO_EMAIL_NON_ACCEPTING);

// For addresses without the mailto prefix
// Tokens allowed in the localpart of the email
var localpartAccepting = [_text.DOMAIN, _text.NUM, _text.PLUS, _text.POUND, _text.QUERY, _text.UNDERSCORE, _text.SYM, _text.AMPERSAND, _text.TLD];

// Some of the tokens in `localpartAccepting` are already accounted for here and
// will not be overwritten (don't worry)
S_DOMAIN.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_TLD.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT);
S_DOMAIN_DOT.on(localpartAccepting, S_LOCALPART);

// Okay we're on a localpart. Now what?
// TODO: IP addresses and what if the email starts with numbers?
S_LOCALPART.on(localpartAccepting, S_LOCALPART).on(_text.AT, S_LOCALPART_AT) // close to an email address now
.on(_text.DOT, S_LOCALPART_DOT);
S_LOCALPART_DOT.on(localpartAccepting, S_LOCALPART);
S_LOCALPART_AT.on(_text.TLD, S_EMAIL_DOMAIN).on(_text.DOMAIN, S_EMAIL_DOMAIN).on(_text.LOCALHOST, S_EMAIL);
// States following `@` defined above

var run = function run(tokens) {
	var len = tokens.length;
	var cursor = 0;
	var multis = [];
	var textTokens = [];

	while (cursor < len) {
		var state = S_START;
		var secondState = null;
		var nextState = null;
		var multiLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && !(secondState = state.next(tokens[cursor]))) {
			// Starting tokens with nowhere to jump to.
			// Consider these to be just plain text
			textTokens.push(tokens[cursor++]);
		}

		while (cursor < len && (nextState = secondState || state.next(tokens[cursor]))) {

			// Get the next state
			secondState = null;
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			cursor++;
			multiLength++;
		}

		if (sinceAccepts < 0) {

			// No accepting state was found, part of a regular text token
			// Add all the tokens we looked at to the text tokens array
			for (var i = cursor - multiLength; i < cursor; i++) {
				textTokens.push(tokens[i]);
			}
		} else {

			// Accepting state!

			// First close off the textTokens (if available)
			if (textTokens.length > 0) {
				multis.push(new _multi.TEXT(textTokens));
				textTokens = [];
			}

			// Roll back to the latest accepting state
			cursor -= sinceAccepts;
			multiLength -= sinceAccepts;

			// Create a new multitoken
			var MULTI = latestAccepting.emit();
			multis.push(new MULTI(tokens.slice(cursor - multiLength, cursor)));
		}
	}

	// Finally close off the textTokens (if available)
	if (textTokens.length > 0) {
		multis.push(new _multi.TEXT(textTokens));
	}

	return multis;
};

exports.State = _state.TokenState;
exports.TOKENS = MULTI_TOKENS;
exports.run = run;
exports.start = S_START;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/scanner.js":
/*!************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/scanner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.start = exports.run = exports.TOKENS = exports.State = undefined;

var _state = __webpack_require__(/*! ./state */ "./node_modules/linkifyjs/lib/linkify/core/state.js");

var _text = __webpack_require__(/*! ./tokens/text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

var TOKENS = _interopRequireWildcard(_text);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var tlds = 'aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|ac|academy|accenture|accountant|accountants|aco|active|actor|ad|adac|ads|adult|ae|aeg|aero|aetna|af|afamilycompany|afl|africa|ag|agakhan|agency|ai|aig|aigo|airbus|airforce|airtel|akdn|al|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|am|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|ao|aol|apartments|app|apple|aq|aquarelle|ar|arab|aramco|archi|army|arpa|art|arte|as|asda|asia|associates|at|athleta|attorney|au|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aw|aws|ax|axa|az|azure|ba|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bb|bbc|bbt|bbva|bcg|bcn|bd|be|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bf|bg|bh|bharti|bi|bible|bid|bike|bing|bingo|bio|biz|bj|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bm|bms|bmw|bn|bnl|bnpparibas|bo|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|br|bradesco|bridgestone|broadway|broker|brother|brussels|bs|bt|budapest|bugatti|build|builders|business|buy|buzz|bv|bw|by|bz|bzh|ca|cab|cafe|cal|call|calvinklein|cam|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|cat|catering|catholic|cba|cbn|cbre|cbs|cc|cd|ceb|center|ceo|cern|cf|cfa|cfd|cg|ch|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|ci|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|ck|cl|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|cm|cn|co|coach|codes|coffee|college|cologne|com|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|coop|corsica|country|coupon|coupons|courses|cr|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cu|cuisinella|cv|cw|cx|cy|cymru|cyou|cz|dabur|dad|dance|data|date|dating|datsun|day|dclk|dds|de|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dj|dk|dm|dnp|do|docs|doctor|dodge|dog|doha|domains|dot|download|drive|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dvr|dz|earth|eat|ec|eco|edeka|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|epost|epson|equipment|er|ericsson|erni|es|esq|estate|esurance|et|etisalat|eu|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fi|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|fj|fk|flickr|flights|flir|florist|flowers|fly|fm|fo|foo|food|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|fr|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|ga|gal|gallery|gallo|gallup|game|games|gap|garden|gb|gbiz|gd|gdn|ge|gea|gent|genting|george|gf|gg|ggee|gh|gi|gift|gifts|gives|giving|gl|glade|glass|gle|global|globo|gm|gmail|gmbh|gmo|gmx|gn|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gov|gp|gq|gr|grainger|graphics|gratis|green|gripe|grocery|group|gs|gt|gu|guardian|gucci|guge|guide|guitars|guru|gw|gy|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hk|hkt|hm|hn|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|hospital|host|hosting|hot|hoteles|hotels|hotmail|house|how|hr|hsbc|ht|htc|hu|hughes|hyatt|hyundai|ibm|icbc|ice|icu|id|ie|ieee|ifm|ikano|il|im|imamat|imdb|immo|immobilien|in|industries|infiniti|info|ing|ink|institute|insurance|insure|int|intel|international|intuit|investments|io|ipiranga|iq|ir|irish|is|iselect|ismaili|ist|istanbul|it|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|je|jeep|jetzt|jewelry|jio|jlc|jll|jm|jmp|jnj|jo|jobs|joburg|jot|joy|jp|jpmorgan|jprs|juegos|juniper|kaufen|kddi|ke|kerryhotels|kerrylogistics|kerryproperties|kfh|kg|kh|ki|kia|kim|kinder|kindle|kitchen|kiwi|km|kn|koeln|komatsu|kosher|kp|kpmg|kpn|kr|krd|kred|kuokgroup|kw|ky|kyoto|kz|la|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lb|lc|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|li|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|lk|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|lr|ls|lt|ltd|ltda|lu|lundbeck|lupin|luxe|luxury|lv|ly|ma|macys|madrid|maif|maison|makeup|man|management|mango|map|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mc|mckinsey|md|me|med|media|meet|melbourne|meme|memorial|men|menu|meo|merckmsd|metlife|mg|mh|miami|microsoft|mil|mini|mint|mit|mitsubishi|mk|ml|mlb|mls|mm|mma|mn|mo|mobi|mobile|mobily|moda|moe|moi|mom|monash|money|monster|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|mp|mq|mr|ms|msd|mt|mtn|mtr|mu|museum|mutual|mv|mw|mx|my|mz|na|nab|nadex|nagoya|name|nationwide|natura|navy|nba|nc|ne|nec|net|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nf|nfl|ng|ngo|nhk|ni|nico|nike|nikon|ninja|nissan|nissay|nl|no|nokia|northwesternmutual|norton|now|nowruz|nowtv|np|nr|nra|nrw|ntt|nu|nyc|nz|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|om|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|org|organic|origins|osaka|otsuka|ott|ovh|pa|page|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|pccw|pe|pet|pf|pfizer|pg|ph|pharmacy|phd|philips|phone|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|pk|pl|place|play|playstation|plumbing|plus|pm|pn|pnc|pohl|poker|politie|porn|post|pr|pramerica|praxi|press|prime|pro|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|ps|pt|pub|pw|pwc|py|qa|qpon|quebec|quest|qvc|racing|radio|raid|re|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|ro|rocher|rocks|rodeo|rogers|room|rs|rsvp|ru|rugby|ruhr|run|rw|rwe|ryukyu|sa|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sb|sbi|sbs|sc|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|sd|se|search|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|sg|sh|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shop|shopping|shouji|show|showtime|shriram|si|silk|sina|singles|site|sj|sk|ski|skin|sky|skype|sl|sling|sm|smart|smile|sn|sncf|so|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|sr|srl|srt|st|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|su|sucks|supplies|supply|support|surf|surgery|suzuki|sv|swatch|swiftcover|swiss|sx|sy|sydney|symantec|systems|sz|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tc|tci|td|tdk|team|tech|technology|tel|telecity|telefonica|temasek|tennis|teva|tf|tg|th|thd|theater|theatre|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tj|tjmaxx|tjx|tk|tkmaxx|tl|tm|tmall|tn|to|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|tr|trade|trading|training|travel|travelchannel|travelers|travelersinsurance|trust|trv|tt|tube|tui|tunes|tushu|tv|tvs|tw|tz|ua|ubank|ubs|uconnect|ug|uk|unicom|university|uno|uol|ups|us|uy|uz|va|vacations|vana|vanguard|vc|ve|vegas|ventures|verisign|versicherung|vet|vg|vi|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vn|vodka|volkswagen|volvo|vote|voting|voto|voyage|vu|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|wf|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|ws|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--30rr7y|xn--3bst00m|xn--3ds443g|xn--3e0b707e|xn--3hcrj9c|xn--3oq18vl8pn36a|xn--3pxu8k|xn--42c2d9a|xn--45br5cyl|xn--45brj9c|xn--45q11c|xn--4gbrim|xn--54b7fta0cc|xn--55qw42g|xn--55qx5d|xn--5su34j936bgsg|xn--5tzm5g|xn--6frz82g|xn--6qq986b3xl|xn--80adxhks|xn--80ao21a|xn--80aqecdr1a|xn--80asehdb|xn--80aswg|xn--8y0a063a|xn--90a3ac|xn--90ae|xn--90ais|xn--9dbq2a|xn--9et52u|xn--9krt00a|xn--b4w605ferd|xn--bck1b9a5dre4c|xn--c1avg|xn--c2br7g|xn--cck2b3b|xn--cg4bki|xn--clchc0ea0b2g2a9gcd|xn--czr694b|xn--czrs0t|xn--czru2d|xn--d1acj3b|xn--d1alf|xn--e1a4c|xn--eckvdtc9d|xn--efvy88h|xn--estv75g|xn--fct429k|xn--fhbei|xn--fiq228c5hs|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--fjq720a|xn--flw351e|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--fzys8d69uvgm|xn--g2xx48c|xn--gckr3f0f|xn--gecrj9c|xn--gk3at1e|xn--h2breg3eve|xn--h2brj9c|xn--h2brj9c8c|xn--hxt814e|xn--i1b6b1a6a2e|xn--imr513n|xn--io0a7i|xn--j1aef|xn--j1amh|xn--j6w193g|xn--jlq61u9w7b|xn--jvr189m|xn--kcrx77d1x4a|xn--kprw13d|xn--kpry57d|xn--kpu716f|xn--kput3i|xn--l1acc|xn--lgbbat1ad8j|xn--mgb9awbf|xn--mgba3a3ejt|xn--mgba3a4f16a|xn--mgba7c0bbn0a|xn--mgbaakc7dvf|xn--mgbaam7a8h|xn--mgbab2bd|xn--mgbai9azgqp6j|xn--mgbayh7gpa|xn--mgbb9fbpob|xn--mgbbh1a|xn--mgbbh1a71e|xn--mgbc0a9azcg|xn--mgbca7dzdo|xn--mgberp4a5d4ar|xn--mgbgu82a|xn--mgbi4ecexp|xn--mgbpl2fh|xn--mgbt3dhd|xn--mgbtx2b|xn--mgbx4cd0ab|xn--mix891f|xn--mk1bu44c|xn--mxtq1m|xn--ngbc5azd|xn--ngbe9e0a|xn--ngbrx|xn--node|xn--nqv7f|xn--nqv7fs00ema|xn--nyqy26a|xn--o3cw4h|xn--ogbpf8fl|xn--p1acf|xn--p1ai|xn--pbt977c|xn--pgbs0dh|xn--pssy2u|xn--q9jyb4c|xn--qcka1pmc|xn--qxam|xn--rhqv96g|xn--rovu88b|xn--rvc1e0am3e|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--tckwe|xn--tiq49xqyj|xn--unup4y|xn--vermgensberater-ctb|xn--vermgensberatung-pwb|xn--vhquv|xn--vuq861b|xn--w4r85el8fhu5dnra|xn--w4rs40l|xn--wgbh1c|xn--wgbl6a|xn--xhq521b|xn--xkc2al3hye2a|xn--xkc2dl3a5ee0h|xn--y9a3aq|xn--yfro4i67o|xn--ygbi2ammx|xn--zfr164b|xperia|xxx|xyz|yachts|yahoo|yamaxun|yandex|ye|yodobashi|yoga|yokohama|you|youtube|yt|yun|za|zappos|zara|zero|zip|zippo|zm|zone|zuerich|zw'.split('|'); // macro, see gulpfile.js

/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.

	@module linkify
	@submodule scanner
	@main scanner
*/

var NUMBERS = '0123456789'.split('');
var ALPHANUM = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var WHITESPACE = [' ', '\f', '\r', '\t', '\v', '\xA0', '\u1680', '\u180E']; // excluding line breaks

var domainStates = []; // states that jump to DOMAIN on /[a-z0-9]/
var makeState = function makeState(tokenClass) {
	return new _state.CharacterState(tokenClass);
};

// Frequently used states
var S_START = makeState();
var S_NUM = makeState(_text.NUM);
var S_DOMAIN = makeState(_text.DOMAIN);
var S_DOMAIN_HYPHEN = makeState(); // domain followed by 1 or more hyphen characters
var S_WS = makeState(_text.WS);

// States for special URL symbols
S_START.on('@', makeState(_text.AT)).on('.', makeState(_text.DOT)).on('+', makeState(_text.PLUS)).on('#', makeState(_text.POUND)).on('?', makeState(_text.QUERY)).on('/', makeState(_text.SLASH)).on('_', makeState(_text.UNDERSCORE)).on(':', makeState(_text.COLON)).on('{', makeState(_text.OPENBRACE)).on('[', makeState(_text.OPENBRACKET)).on('<', makeState(_text.OPENANGLEBRACKET)).on('(', makeState(_text.OPENPAREN)).on('}', makeState(_text.CLOSEBRACE)).on(']', makeState(_text.CLOSEBRACKET)).on('>', makeState(_text.CLOSEANGLEBRACKET)).on(')', makeState(_text.CLOSEPAREN)).on('&', makeState(_text.AMPERSAND)).on([',', ';', '!', '"', '\''], makeState(_text.PUNCTUATION));

// Whitespace jumps
// Tokens of only non-newline whitespace are arbitrarily long
S_START.on('\n', makeState(_text.NL)).on(WHITESPACE, S_WS);

// If any whitespace except newline, more whitespace!
S_WS.on(WHITESPACE, S_WS);

// Generates states for top-level domains
// Note that this is most accurate when tlds are in alphabetical order
for (var i = 0; i < tlds.length; i++) {
	var newStates = (0, _state.stateify)(tlds[i], S_START, _text.TLD, _text.DOMAIN);
	domainStates.push.apply(domainStates, newStates);
}

// Collect the states generated by different protocls
var partialProtocolFileStates = (0, _state.stateify)('file', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolFtpStates = (0, _state.stateify)('ftp', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolHttpStates = (0, _state.stateify)('http', S_START, _text.DOMAIN, _text.DOMAIN);
var partialProtocolMailtoStates = (0, _state.stateify)('mailto', S_START, _text.DOMAIN, _text.DOMAIN);

// Add the states to the array of DOMAINeric states
domainStates.push.apply(domainStates, partialProtocolFileStates);
domainStates.push.apply(domainStates, partialProtocolFtpStates);
domainStates.push.apply(domainStates, partialProtocolHttpStates);
domainStates.push.apply(domainStates, partialProtocolMailtoStates);

// Protocol states
var S_PROTOCOL_FILE = partialProtocolFileStates.pop();
var S_PROTOCOL_FTP = partialProtocolFtpStates.pop();
var S_PROTOCOL_HTTP = partialProtocolHttpStates.pop();
var S_MAILTO = partialProtocolMailtoStates.pop();
var S_PROTOCOL_SECURE = makeState(_text.DOMAIN);
var S_FULL_PROTOCOL = makeState(_text.PROTOCOL); // Full protocol ends with COLON
var S_FULL_MAILTO = makeState(_text.MAILTO); // Mailto ends with COLON

// Secure protocols (end with 's')
S_PROTOCOL_FTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

S_PROTOCOL_HTTP.on('s', S_PROTOCOL_SECURE).on(':', S_FULL_PROTOCOL);

domainStates.push(S_PROTOCOL_SECURE);

// Become protocol tokens after a COLON
S_PROTOCOL_FILE.on(':', S_FULL_PROTOCOL);
S_PROTOCOL_SECURE.on(':', S_FULL_PROTOCOL);
S_MAILTO.on(':', S_FULL_MAILTO);

// Localhost
var partialLocalhostStates = (0, _state.stateify)('localhost', S_START, _text.LOCALHOST, _text.DOMAIN);
domainStates.push.apply(domainStates, partialLocalhostStates);

// Everything else
// DOMAINs make more DOMAINs
// Number and character transitions
S_START.on(NUMBERS, S_NUM);
S_NUM.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_NUM).on(ALPHANUM, S_DOMAIN); // number becomes DOMAIN

S_DOMAIN.on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);

// All the generated states should have a jump to DOMAIN
for (var _i = 0; _i < domainStates.length; _i++) {
	domainStates[_i].on('-', S_DOMAIN_HYPHEN).on(ALPHANUM, S_DOMAIN);
}

S_DOMAIN_HYPHEN.on('-', S_DOMAIN_HYPHEN).on(NUMBERS, S_DOMAIN).on(ALPHANUM, S_DOMAIN);

// Set default transition
S_START.defaultTransition = makeState(_text.SYM);

/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {String} str Input string to scan
	@return {Array} Array of TOKEN instances
*/
var run = function run(str) {

	// The state machine only looks at lowercase strings.
	// This selective `toLowerCase` is used because lowercasing the entire
	// string causes the length and character position to vary in some in some
	// non-English strings. This happens only on V8-based runtimes.
	var lowerStr = str.replace(/[A-Z]/g, function (c) {
		return c.toLowerCase();
	});
	var len = str.length;
	var tokens = []; // return value

	var cursor = 0;

	// Tokenize the string
	while (cursor < len) {
		var state = S_START;
		var nextState = null;
		var tokenLength = 0;
		var latestAccepting = null;
		var sinceAccepts = -1;

		while (cursor < len && (nextState = state.next(lowerStr[cursor]))) {
			state = nextState;

			// Keep track of the latest accepting state
			if (state.accepts()) {
				sinceAccepts = 0;
				latestAccepting = state;
			} else if (sinceAccepts >= 0) {
				sinceAccepts++;
			}

			tokenLength++;
			cursor++;
		}

		if (sinceAccepts < 0) {
			continue;
		} // Should never happen

		// Roll back to the latest accepting state
		cursor -= sinceAccepts;
		tokenLength -= sinceAccepts;

		// Get the class for the new token
		var TOKEN = latestAccepting.emit(); // Current token class

		// No more jumps, just make a new token
		tokens.push(new TOKEN(str.substr(cursor - tokenLength, tokenLength)));
	}

	return tokens;
};

var start = S_START;
exports.State = _state.CharacterState;
exports.TOKENS = TOKENS;
exports.run = run;
exports.start = start;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/state.js":
/*!**********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stateify = exports.TokenState = exports.CharacterState = undefined;

var _class = __webpack_require__(/*! ../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

function createStateClass() {
	return function (tClass) {
		this.j = [];
		this.T = tClass || null;
	};
}

/**
	A simple state machine that can emit token classes

	The `j` property in this class refers to state jumps. It's a
	multidimensional array where for each element:

	* index [0] is a symbol or class of symbols to transition to.
	* index [1] is a State instance which matches

	The type of symbol will depend on the target implementation for this class.
	In Linkify, we have a two-stage scanner. Each stage uses this state machine
	but with a slighly different (polymorphic) implementation.

	The `T` property refers to the token class.

	TODO: Can the `on` and `next` methods be combined?

	@class BaseState
*/
var BaseState = createStateClass();
BaseState.prototype = {
	defaultTransition: false,

	/**
 	@method constructor
 	@param {Class} tClass Pass in the kind of token to emit if there are
 		no jumps after this state and the state is accepting.
 */

	/**
 	On the given symbol(s), this machine should go to the given state
 		@method on
 	@param {Array|Mixed} symbol
 	@param {BaseState} state Note that the type of this state should be the
 		same as the current instance (i.e., don't pass in a different
 		subclass)
 */
	on: function on(symbol, state) {
		if (symbol instanceof Array) {
			for (var i = 0; i < symbol.length; i++) {
				this.j.push([symbol[i], state]);
			}
			return this;
		}
		this.j.push([symbol, state]);
		return this;
	},


	/**
 	Given the next item, returns next state for that item
 	@method next
 	@param {Mixed} item Should be an instance of the symbols handled by
 		this particular machine.
 	@return {State} state Returns false if no jumps are available
 */
	next: function next(item) {
		for (var i = 0; i < this.j.length; i++) {
			var jump = this.j[i];
			var symbol = jump[0]; // Next item to check for
			var state = jump[1]; // State to jump to if items match

			// compare item with symbol
			if (this.test(item, symbol)) {
				return state;
			}
		}

		// Nowhere left to jump!
		return this.defaultTransition;
	},


	/**
 	Does this state accept?
 	`true` only of `this.T` exists
 		@method accepts
 	@return {Boolean}
 */
	accepts: function accepts() {
		return !!this.T;
	},


	/**
 	Determine whether a given item "symbolizes" the symbol, where symbol is
 	a class of items handled by this state machine.
 		This method should be overriden in extended classes.
 		@method test
 	@param {Mixed} item Does this item match the given symbol?
 	@param {Mixed} symbol
 	@return {Boolean}
 */
	test: function test(item, symbol) {
		return item === symbol;
	},


	/**
 	Emit the token for this State (just return it in this case)
 	If this emits a token, this instance is an accepting state
 	@method emit
 	@return {Class} T
 */
	emit: function emit() {
		return this.T;
	}
};

/**
	State machine for string-based input

	@class CharacterState
	@extends BaseState
*/
var CharacterState = (0, _class.inherits)(BaseState, createStateClass(), {
	/**
 	Does the given character match the given character or regular
 	expression?
 		@method test
 	@param {String} char
 	@param {String|RegExp} charOrRegExp
 	@return {Boolean}
 */
	test: function test(character, charOrRegExp) {
		return character === charOrRegExp || charOrRegExp instanceof RegExp && charOrRegExp.test(character);
	}
});

/**
	State machine for input in the form of TextTokens

	@class TokenState
	@extends BaseState
*/
var TokenState = (0, _class.inherits)(BaseState, createStateClass(), {

	/**
  * Similar to `on`, but returns the state the results in the transition from
  * the given item
  * @method jump
  * @param {Mixed} item
  * @param {Token} [token]
  * @return state
  */
	jump: function jump(token) {
		var tClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var state = this.next(new token('')); // dummy temp token
		if (state === this.defaultTransition) {
			// Make a new state!
			state = new this.constructor(tClass);
			this.on(token, state);
		} else if (tClass) {
			state.T = tClass;
		}
		return state;
	},


	/**
 	Is the given token an instance of the given token class?
 		@method test
 	@param {TextToken} token
 	@param {Class} tokenClass
 	@return {Boolean}
 */
	test: function test(token, tokenClass) {
		return token instanceof tokenClass;
	}
});

/**
	Given a non-empty target string, generates states (if required) for each
	consecutive substring of characters in str starting from the beginning of
	the string. The final state will have a special value, as specified in
	options. All other "in between" substrings will have a default end state.

	This turns the state machine into a Trie-like data structure (rather than a
	intelligently-designed DFA).

	Note that I haven't really tried these with any strings other than
	DOMAIN.

	@param {String} str
	@param {CharacterState} start State to jump from the first character
	@param {Class} endToken Token class to emit when the given string has been
		matched and no more jumps exist.
	@param {Class} defaultToken "Filler token", or which token type to emit when
		we don't have a full match
	@return {Array} list of newly-created states
*/
function stateify(str, start, endToken, defaultToken) {
	var i = 0,
	    len = str.length,
	    state = start,
	    newStates = [],
	    nextState = void 0;

	// Find the next state without a jump to the next character
	while (i < len && (nextState = state.next(str[i]))) {
		state = nextState;
		i++;
	}

	if (i >= len) {
		return [];
	} // no new tokens were added

	while (i < len - 1) {
		nextState = new CharacterState(defaultToken);
		newStates.push(nextState);
		state.on(str[i], nextState);
		state = nextState;
		i++;
	}

	nextState = new CharacterState(endToken);
	newStates.push(nextState);
	state.on(str[len - 1], nextState);

	return newStates;
}

exports.CharacterState = CharacterState;
exports.TokenState = TokenState;
exports.stateify = stateify;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js":
/*!******************************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createTokenClass() {
	return function (value) {
		if (value) {
			this.v = value;
		}
	};
}

exports.createTokenClass = createTokenClass;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js":
/*!*****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/multi.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.URL = exports.TEXT = exports.NL = exports.EMAIL = exports.MAILTOEMAIL = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

var _text = __webpack_require__(/*! ./text */ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js");

/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/

// Is the given token a valid domain token?
// Should nums be included here?
function isDomainToken(token) {
	return token instanceof _text.DOMAIN || token instanceof _text.TLD;
}

/**
	Abstract class used for manufacturing tokens of text tokens. That is rather
	than the value for a token being a small string of text, it's value an array
	of text tokens.

	Used for grouping together URLs, emails, hashtags, and other potential
	creations.

	@class MultiToken
	@abstract
*/
var MultiToken = (0, _createTokenClass.createTokenClass)();

MultiToken.prototype = {
	/**
 	String representing the type for this token
 	@property type
 	@default 'TOKEN'
 */
	type: 'token',

	/**
 	Is this multitoken a link?
 	@property isLink
 	@default false
 */
	isLink: false,

	/**
 	Return the string this token represents.
 	@method toString
 	@return {String}
 */
	toString: function toString() {
		var result = [];
		for (var i = 0; i < this.v.length; i++) {
			result.push(this.v[i].toString());
		}
		return result.join('');
	},


	/**
 	What should the value for this token be in the `href` HTML attribute?
 	Returns the `.toString` value by default.
 		@method toHref
 	@return {String}
 */
	toHref: function toHref() {
		return this.toString();
	},


	/**
 	Returns a hash of relevant values for this token, which includes keys
 	* type - Kind of token ('url', 'email', etc.)
 	* value - Original text
 	* href - The value that should be added to the anchor tag's href
 		attribute
 		@method toObject
 	@param {String} [protocol] `'http'` by default
 	@return {Object}
 */
	toObject: function toObject() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		return {
			type: this.type,
			value: this.toString(),
			href: this.toHref(protocol)
		};
	}
};

/**
	Represents an arbitrarily mailto email address with the prefix included
	@class MAILTO
	@extends MultiToken
*/
var MAILTOEMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true
});

/**
	Represents a list of tokens making up a valid email address
	@class EMAIL
	@extends MultiToken
*/
var EMAIL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'email',
	isLink: true,
	toHref: function toHref() {
		return 'mailto:' + this.toString();
	}
});

/**
	Represents some plain text
	@class TEXT
	@extends MultiToken
*/
var TEXT = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'text' });

/**
	Multi-linebreak token - represents a line break
	@class NL
	@extends MultiToken
*/
var NL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), { type: 'nl' });

/**
	Represents a list of tokens making up a valid URL
	@class URL
	@extends MultiToken
*/
var URL = (0, _class.inherits)(MultiToken, (0, _createTokenClass.createTokenClass)(), {
	type: 'url',
	isLink: true,

	/**
 	Lowercases relevant parts of the domain and adds the protocol if
 	required. Note that this will not escape unsafe HTML characters in the
 	URL.
 		@method href
 	@param {String} protocol
 	@return {String}
 */
	toHref: function toHref() {
		var protocol = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http';

		var hasProtocol = false;
		var hasSlashSlash = false;
		var tokens = this.v;
		var result = [];
		var i = 0;

		// Make the first part of the domain lowercase
		// Lowercase protocol
		while (tokens[i] instanceof _text.PROTOCOL) {
			hasProtocol = true;
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Skip slash-slash
		while (tokens[i] instanceof _text.SLASH) {
			hasSlashSlash = true;
			result.push(tokens[i].toString());
			i++;
		}

		// Lowercase all other characters in the domain
		while (isDomainToken(tokens[i])) {
			result.push(tokens[i].toString().toLowerCase());
			i++;
		}

		// Leave all other characters as they were written
		for (; i < tokens.length; i++) {
			result.push(tokens[i].toString());
		}

		result = result.join('');

		if (!(hasProtocol || hasSlashSlash)) {
			result = protocol + '://' + result;
		}

		return result;
	},
	hasProtocol: function hasProtocol() {
		return this.v[0] instanceof _text.PROTOCOL;
	}
});

exports.Base = MultiToken;
exports.MAILTOEMAIL = MAILTOEMAIL;
exports.EMAIL = EMAIL;
exports.NL = NL;
exports.TEXT = TEXT;
exports.URL = URL;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/core/tokens/text.js":
/*!****************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/core/tokens/text.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.AMPERSAND = exports.CLOSEPAREN = exports.CLOSEANGLEBRACKET = exports.CLOSEBRACKET = exports.CLOSEBRACE = exports.OPENPAREN = exports.OPENANGLEBRACKET = exports.OPENBRACKET = exports.OPENBRACE = exports.WS = exports.TLD = exports.SYM = exports.UNDERSCORE = exports.SLASH = exports.MAILTO = exports.PROTOCOL = exports.QUERY = exports.POUND = exports.PLUS = exports.NUM = exports.NL = exports.LOCALHOST = exports.PUNCTUATION = exports.DOT = exports.COLON = exports.AT = exports.DOMAIN = exports.Base = undefined;

var _createTokenClass = __webpack_require__(/*! ./create-token-class */ "./node_modules/linkifyjs/lib/linkify/core/tokens/create-token-class.js");

var _class = __webpack_require__(/*! ../../utils/class */ "./node_modules/linkifyjs/lib/linkify/utils/class.js");

/******************************************************************************
	Text Tokens
	Tokens composed of strings
******************************************************************************/

/**
	Abstract class used for manufacturing text tokens.
	Pass in the value this token represents

	@class TextToken
	@abstract
*/
var TextToken = (0, _createTokenClass.createTokenClass)();
TextToken.prototype = {
	toString: function toString() {
		return this.v + '';
	}
};

function inheritsToken(value) {
	var props = value ? { v: value } : {};
	return (0, _class.inherits)(TextToken, (0, _createTokenClass.createTokenClass)(), props);
}

/**
	A valid domain token
	@class DOMAIN
	@extends TextToken
*/
var DOMAIN = inheritsToken();

/**
	@class AT
	@extends TextToken
*/
var AT = inheritsToken('@');

/**
	Represents a single colon `:` character

	@class COLON
	@extends TextToken
*/
var COLON = inheritsToken(':');

/**
	@class DOT
	@extends TextToken
*/
var DOT = inheritsToken('.');

/**
	A character class that can surround the URL, but which the URL cannot begin
	or end with. Does not include certain English punctuation like parentheses.

	@class PUNCTUATION
	@extends TextToken
*/
var PUNCTUATION = inheritsToken();

/**
	The word localhost (by itself)
	@class LOCALHOST
	@extends TextToken
*/
var LOCALHOST = inheritsToken();

/**
	Newline token
	@class NL
	@extends TextToken
*/
var NL = inheritsToken('\n');

/**
	@class NUM
	@extends TextToken
*/
var NUM = inheritsToken();

/**
	@class PLUS
	@extends TextToken
*/
var PLUS = inheritsToken('+');

/**
	@class POUND
	@extends TextToken
*/
var POUND = inheritsToken('#');

/**
	Represents a web URL protocol. Supported types include

	* `http:`
	* `https:`
	* `ftp:`
	* `ftps:`

	@class PROTOCOL
	@extends TextToken
*/
var PROTOCOL = inheritsToken();

/**
	Represents the start of the email URI protocol

	@class MAILTO
	@extends TextToken
*/
var MAILTO = inheritsToken('mailto:');

/**
	@class QUERY
	@extends TextToken
*/
var QUERY = inheritsToken('?');

/**
	@class SLASH
	@extends TextToken
*/
var SLASH = inheritsToken('/');

/**
	@class UNDERSCORE
	@extends TextToken
*/
var UNDERSCORE = inheritsToken('_');

/**
	One ore more non-whitespace symbol.
	@class SYM
	@extends TextToken
*/
var SYM = inheritsToken();

/**
	@class TLD
	@extends TextToken
*/
var TLD = inheritsToken();

/**
	Represents a string of consecutive whitespace characters

	@class WS
	@extends TextToken
*/
var WS = inheritsToken();

/**
	Opening/closing bracket classes
*/

var OPENBRACE = inheritsToken('{');
var OPENBRACKET = inheritsToken('[');
var OPENANGLEBRACKET = inheritsToken('<');
var OPENPAREN = inheritsToken('(');
var CLOSEBRACE = inheritsToken('}');
var CLOSEBRACKET = inheritsToken(']');
var CLOSEANGLEBRACKET = inheritsToken('>');
var CLOSEPAREN = inheritsToken(')');

var AMPERSAND = inheritsToken('&');

exports.Base = TextToken;
exports.DOMAIN = DOMAIN;
exports.AT = AT;
exports.COLON = COLON;
exports.DOT = DOT;
exports.PUNCTUATION = PUNCTUATION;
exports.LOCALHOST = LOCALHOST;
exports.NL = NL;
exports.NUM = NUM;
exports.PLUS = PLUS;
exports.POUND = POUND;
exports.QUERY = QUERY;
exports.PROTOCOL = PROTOCOL;
exports.MAILTO = MAILTO;
exports.SLASH = SLASH;
exports.UNDERSCORE = UNDERSCORE;
exports.SYM = SYM;
exports.TLD = TLD;
exports.WS = WS;
exports.OPENBRACE = OPENBRACE;
exports.OPENBRACKET = OPENBRACKET;
exports.OPENANGLEBRACKET = OPENANGLEBRACKET;
exports.OPENPAREN = OPENPAREN;
exports.CLOSEBRACE = CLOSEBRACE;
exports.CLOSEBRACKET = CLOSEBRACKET;
exports.CLOSEANGLEBRACKET = CLOSEANGLEBRACKET;
exports.CLOSEPAREN = CLOSEPAREN;
exports.AMPERSAND = AMPERSAND;

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/plugins/mention.js":
/*!***************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/plugins/mention.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mention;
/**
	Mention parser plugin for linkify
*/
function mention(linkify) {
	var TT = linkify.scanner.TOKENS; // Text tokens
	var _linkify$parser = linkify.parser,
	    MT = _linkify$parser.TOKENS,
	    State = _linkify$parser.State; // Multi tokens, state

	var MultiToken = MT.Base;
	var S_START = linkify.parser.start;

	var TT_DOMAIN = TT.DOMAIN;
	var TT_LOCALHOST = TT.LOCALHOST;
	var TT_NUM = TT.NUM;
	var TT_SLASH = TT.SLASH;
	var TT_TLD = TT.TLD;
	var TT_UNDERSCORE = TT.UNDERSCORE;
	var TT_DOT = TT.DOT;
	var TT_AT = TT.AT;

	function MENTION(value) {
		this.v = value;
	}

	linkify.inherits(MultiToken, MENTION, {
		type: 'mention',
		isLink: true,
		toHref: function toHref() {
			return '/' + this.toString().substr(1);
		}
	});

	var S_AT = S_START.jump(TT.AT); // @
	var S_AT_SYMS = new State();
	var S_MENTION = new State(MENTION);
	var S_MENTION_DIVIDER = new State();
	var S_MENTION_DIVIDER_SYMS = new State();

	// @_,
	S_AT.on(TT_UNDERSCORE, S_AT_SYMS);

	//  @_*
	S_AT_SYMS.on(TT_UNDERSCORE, S_AT_SYMS).on(TT_DOT, S_AT_SYMS);

	// Valid mention (not made up entirely of symbols)
	S_AT.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);

	S_AT_SYMS.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);

	// More valid mentions
	S_MENTION.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION).on(TT_UNDERSCORE, S_MENTION);

	// Mention with a divider
	S_MENTION.on(TT_SLASH, S_MENTION_DIVIDER).on(TT_DOT, S_MENTION_DIVIDER).on(TT_AT, S_MENTION_DIVIDER);

	// Mention _ trailing stash plus syms
	S_MENTION_DIVIDER.on(TT_UNDERSCORE, S_MENTION_DIVIDER_SYMS);
	S_MENTION_DIVIDER_SYMS.on(TT_UNDERSCORE, S_MENTION_DIVIDER_SYMS);

	// Once we get a word token, mentions can start up again
	S_MENTION_DIVIDER.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);

	S_MENTION_DIVIDER_SYMS.on(TT_DOMAIN, S_MENTION).on(TT_LOCALHOST, S_MENTION).on(TT_TLD, S_MENTION).on(TT_NUM, S_MENTION);
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/class.js":
/*!***********************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/class.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.inherits = inherits;
function inherits(parent, child) {
	var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var extended = Object.create(parent.prototype);
	for (var p in props) {
		extended[p] = props[p];
	}
	extended.constructor = child;
	child.prototype = extended;
	return child;
}

/***/ }),

/***/ "./node_modules/linkifyjs/lib/linkify/utils/options.js":
/*!*************************************************************!*\
  !*** ./node_modules/linkifyjs/lib/linkify/utils/options.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var defaults = {
	defaultProtocol: 'http',
	events: null,
	format: noop,
	formatHref: noop,
	nl2br: false,
	tagName: 'a',
	target: typeToTarget,
	validate: true,
	ignoreTags: [],
	attributes: null,
	className: 'linkified' // Deprecated value - no default class will be provided in the future
};

exports.defaults = defaults;
exports.Options = Options;
exports.contains = contains;


function Options(opts) {
	opts = opts || {};

	this.defaultProtocol = opts.hasOwnProperty('defaultProtocol') ? opts.defaultProtocol : defaults.defaultProtocol;
	this.events = opts.hasOwnProperty('events') ? opts.events : defaults.events;
	this.format = opts.hasOwnProperty('format') ? opts.format : defaults.format;
	this.formatHref = opts.hasOwnProperty('formatHref') ? opts.formatHref : defaults.formatHref;
	this.nl2br = opts.hasOwnProperty('nl2br') ? opts.nl2br : defaults.nl2br;
	this.tagName = opts.hasOwnProperty('tagName') ? opts.tagName : defaults.tagName;
	this.target = opts.hasOwnProperty('target') ? opts.target : defaults.target;
	this.validate = opts.hasOwnProperty('validate') ? opts.validate : defaults.validate;
	this.ignoreTags = [];

	// linkAttributes and linkClass is deprecated
	this.attributes = opts.attributes || opts.linkAttributes || defaults.attributes;
	this.className = opts.hasOwnProperty('className') ? opts.className : opts.linkClass || defaults.className;

	// Make all tags names upper case
	var ignoredTags = opts.hasOwnProperty('ignoreTags') ? opts.ignoreTags : defaults.ignoreTags;
	for (var i = 0; i < ignoredTags.length; i++) {
		this.ignoreTags.push(ignoredTags[i].toUpperCase());
	}
}

Options.prototype = {
	/**
  * Given the token, return all options for how it should be displayed
  */
	resolve: function resolve(token) {
		var href = token.toHref(this.defaultProtocol);
		return {
			formatted: this.get('format', token.toString(), token),
			formattedHref: this.get('formatHref', href, token),
			tagName: this.get('tagName', href, token),
			className: this.get('className', href, token),
			target: this.get('target', href, token),
			events: this.getObject('events', href, token),
			attributes: this.getObject('attributes', href, token)
		};
	},


	/**
  * Returns true or false based on whether a token should be displayed as a
  * link based on the user options. By default,
  */
	check: function check(token) {
		return this.get('validate', token.toString(), token);
	},


	// Private methods

	/**
  * Resolve an option's value based on the value of the option and the given
  * params.
  * @param {String} key Name of option to use
  * @param operator will be passed to the target option if it's method
  * @param {MultiToken} token The token from linkify.tokenize
  */
	get: function get(key, operator, token) {
		var optionValue = void 0,
		    option = this[key];
		if (!option) {
			return option;
		}

		switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
			case 'function':
				return option(operator, token.type);
			case 'object':
				optionValue = option.hasOwnProperty(token.type) ? option[token.type] : defaults[key];
				return typeof optionValue === 'function' ? optionValue(operator, token.type) : optionValue;
		}

		return option;
	},
	getObject: function getObject(key, operator, token) {
		var option = this[key];
		return typeof option === 'function' ? option(operator, token.type) : option;
	}
};

/**
 * Quick indexOf replacement for checking the ignoreTags option
 */
function contains(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			return true;
		}
	}
	return false;
}

function noop(val) {
	return val;
}

function typeToTarget(href, type) {
	return type === 'url' ? '_blank' : null;
}

/***/ }),

/***/ "./node_modules/linkifyjs/plugins/mention.js":
/*!***************************************************!*\
  !*** ./node_modules/linkifyjs/plugins/mention.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../lib/linkify/plugins/mention */ "./node_modules/linkifyjs/lib/linkify/plugins/mention.js").default;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "md:bg-white container md:mx-4 md:mx-auto md:shadow-lg rounded md:mt-32 flex md:flex-row flex-col md:max-w-2xl lg:max-w-4xl justify-between"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", {}),
      _vm._v(" "),
      _c("div", { staticClass: "w-full md:bg-indigo-100 md:w-1/2 p-8" }, [
        _c("form", { attrs: { method: "POST", action: _vm.url } }, [
          _c("input", {
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.token }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "py-4" }, [
            _c("input", {
              staticClass:
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
              attrs: {
                id: "email",
                "aria-label": "email",
                type: "text",
                name: "email",
                placeholder: "E-mail",
                autofocus: ""
              },
              domProps: { value: _vm.oldEmail }
            }),
            _vm._v(" "),
            _vm.errors.email
              ? _c("span", { staticClass: "text-red-400 block pt-2" }, [
                  _vm._v(_vm._s(_vm.errors.email[0]))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "no-underline text-indigo-500 text-sm",
              attrs: { href: "password/reset" }
            },
            [_vm._v("Forgot Your Password?")]
          )
        ])
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
      { staticClass: "md:w-1/2 text-center px-8 py-4 md:block" },
      [
        _c("p", { staticClass: "text-indigo-500 font-bold text-4xl md:pt-8" }, [
          _vm._v("GOODWORK")
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "text-indigo-500 text-xl" }, [
          _vm._v(
            " Sensible Approach to Work & Collaboration for Software Teams "
          )
        ]),
        _vm._v(" "),
        _c("img", {
          staticClass: "pt-8 hidden md:block",
          attrs: { src: "/image/register.svg", alt: "work desk" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4" }, [
      _c("input", {
        staticClass:
          "shadow appearance-none border rounded w-full py-2 px-3 text-gray-800",
        attrs: {
          id: "password",
          "aria-label": "password",
          type: "password",
          name: "password",
          placeholder: "Password"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4 text-gray-500" }, [
      _c("label", [
        _c("input", {
          attrs: {
            type: "checkbox",
            "aria-label": "remember me",
            name: "remember"
          }
        }),
        _vm._v("\n          Remember Me\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "py-4" }, [
      _c(
        "button",
        {
          staticClass:
            "bg-indigo-500 hover:bg-indigo-600 text-white text-xl font-medium py-2 px-4 rounded",
          attrs: { type: "submit" }
        },
        [_vm._v("LOGIN")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
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
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/css/main.css":
/*!***************************************!*\
  !*** ./resources/assets/css/main.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-click-outside */ "./node_modules/vue-click-outside/index.js");
/* harmony import */ var vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_click_outside__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var linkifyjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! linkifyjs */ "./node_modules/linkifyjs/index.js");
/* harmony import */ var linkifyjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(linkifyjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var linkifyjs_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! linkifyjs/element */ "./node_modules/linkifyjs/element.js");
/* harmony import */ var linkifyjs_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! linkifyjs/plugins/mention */ "./node_modules/linkifyjs/plugins/mention.js");
/* harmony import */ var linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5__);






linkifyjs_plugins_mention__WEBPACK_IMPORTED_MODULE_5___default()(linkifyjs__WEBPACK_IMPORTED_MODULE_3__);
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.luxon = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
window.axios.defaults.headers.common = {
  'X-CSRF-TOKEN': window.Laravel.csrfToken,
  'X-Requested-With': 'XMLHttpRequest'
};

if (typeof io !== 'undefined') {
  window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    namespace: 'App.Base.Events'
  });
}

window.Vue.mixin({
  methods: {
    generateUrl: function generateUrl(value) {
      if (!value) return 'http://' + window.location.host + '/image/avatar.jpg';
      value = value.toString();
      return window.location.protocol + '//' + window.location.host + '/' + value;
    },
    updateUrl: function updateUrl(groupType) {
      var groupId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (history.pushState && groupId !== null) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?group_type=' + groupType + '&group_id=' + groupId;
        window.history.pushState({
          path: newurl
        }, '', newurl);
      } else if (history.pushState) {
        var _newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?group_type=' + groupType;

        window.history.pushState({
          path: _newurl
        }, '', _newurl);
      }
    }
  }
});
window.Vue.filter('localize', function (value) {
  if (!value) return '';
  value = value.toString();
  return window.lang[value] ? window.lang[value] : value;
});
window.Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
window.Vue.filter('clip', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.substr(0, 20) + '...';
});
window.Vue.directive('linkify', {
  inserted: function inserted(el) {
    linkifyjs_element__WEBPACK_IMPORTED_MODULE_4___default()(el, {
      className: 'text-blue-500',
      formatHref: function formatHref(href, type) {
        if (type === 'mention') {
          return window.location.origin + '/users' + href;
        }

        return href;
      }
    });
  }
});
window.Vue.directive('click-outside', vue_click_outside__WEBPACK_IMPORTED_MODULE_2___default.a);
window.Vue.component('font-awesome-icon', _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"]);
window.EventBus = new Vue();

/***/ }),

/***/ "./resources/assets/js/components/auth/login.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/auth/login.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=1a3b4499& */ "./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/auth/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=1a3b4499& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/auth/login.vue?vue&type=template&id=1a3b4499&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_1a3b4499___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/pages/auth/login.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/pages/auth/login.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../bootstrap */ "./resources/assets/js/bootstrap.js");
/* harmony import */ var _components_auth_login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/auth/login.vue */ "./resources/assets/js/components/auth/login.vue");


/* eslint-disable no-unused-vars */

var app = new Vue({
  el: '#app',
  components: {
    login: _components_auth_login_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ 0:
/*!***************************************************************************************!*\
  !*** multi ./resources/assets/js/pages/auth/login.js ./resources/assets/css/main.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /projects/php/sites/goodwork/resources/assets/js/pages/auth/login.js */"./resources/assets/js/pages/auth/login.js");
module.exports = __webpack_require__(/*! /projects/php/sites/goodwork/resources/assets/css/main.css */"./resources/assets/css/main.css");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlL2luZGV4LmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lL2luZGV4LmVzLmpzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYXV0aC9sb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xhcmF2ZWwtZWNoby9kaXN0L2VjaG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saW5raWZ5anMvbGliL2xpbmtpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L2NvcmUvc2Nhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L2NvcmUvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3Rva2Vucy9jcmVhdGUtdG9rZW4tY2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9jb3JlL3Rva2Vucy9tdWx0aS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L2NvcmUvdG9rZW5zL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS9wbHVnaW5zL21lbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9saWIvbGlua2lmeS91dGlscy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGlua2lmeWpzL2xpYi9saW5raWZ5L3V0aWxzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpbmtpZnlqcy9wbHVnaW5zL21lbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWNsaWNrLW91dHNpZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvbG9naW4udnVlPzI1ZTUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvY3NzL21haW4uY3NzP2NkMDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZT81OWRmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZT80NWZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJtZW50aW9uIiwibGlua2lmeSIsIndpbmRvdyIsIlZ1ZSIsInJlcXVpcmUiLCJheGlvcyIsImx1eG9uIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiTGFyYXZlbCIsImNzcmZUb2tlbiIsImlvIiwiRWNobyIsImJyb2FkY2FzdGVyIiwiaG9zdCIsImxvY2F0aW9uIiwiaG9zdG5hbWUiLCJuYW1lc3BhY2UiLCJtaXhpbiIsIm1ldGhvZHMiLCJnZW5lcmF0ZVVybCIsInZhbHVlIiwidG9TdHJpbmciLCJwcm90b2NvbCIsInVwZGF0ZVVybCIsImdyb3VwVHlwZSIsImdyb3VwSWQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwibmV3dXJsIiwicGF0aG5hbWUiLCJwYXRoIiwiZmlsdGVyIiwibGFuZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJzdWJzdHIiLCJkaXJlY3RpdmUiLCJpbnNlcnRlZCIsImVsIiwibGlua2lmeUVsZW1lbnQiLCJjbGFzc05hbWUiLCJmb3JtYXRIcmVmIiwiaHJlZiIsInR5cGUiLCJvcmlnaW4iLCJDbGlja091dHNpZGUiLCJjb21wb25lbnQiLCJGb250QXdlc29tZUljb24iLCJFdmVudEJ1cyIsImFwcCIsImNvbXBvbmVudHMiLCJsb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsZ0JBQWdCOztBQUVqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGtDQUFrQztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQW9CO0FBQy9CLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0FBRUEsNkJBQTZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHFCQUFxQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHdCQUF3Qix1QkFBdUIsc0JBQXNCLHNCQUFzQjtBQUN2STtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsd0VBQXdFO0FBQ3hFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLLElBQUk7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0Esa0JBQWtCLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNqQyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlCQUFpQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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Q0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEI7Ozs7Ozs7Ozs7OztBQzNNYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3pMRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsbUJBQU8sQ0FBQyxpRUFBYztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUNBLElBQU1pRCxHQUFHLEdBQUcsSUFBSWpELEdBQUosQ0FBUTtBQUNsQnNDLElBQUUsRUFBRSxNQURjO0FBRWxCWSxZQUFVLEVBQUU7QUFDVkMsU0FBSyxFQUFMQSxrRUFBS0E7QUFESztBQUZNLENBQVIsQ0FBWixDIiwiZmlsZSI6Ii9qcy9hdXRoL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcblxuICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbn1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyKSA9PT0gXCJbb2JqZWN0IEFyZ3VtZW50c11cIikgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG59XG5cbnZhciBub29wID0gZnVuY3Rpb24gbm9vcCgpIHt9O1xuXG52YXIgX1dJTkRPVyA9IHt9O1xudmFyIF9ET0NVTUVOVCA9IHt9O1xudmFyIF9NVVRBVElPTl9PQlNFUlZFUiA9IG51bGw7XG52YXIgX1BFUkZPUk1BTkNFID0ge1xuICBtYXJrOiBub29wLFxuICBtZWFzdXJlOiBub29wXG59O1xuXG50cnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIF9XSU5ET1cgPSB3aW5kb3c7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSBfRE9DVU1FTlQgPSBkb2N1bWVudDtcbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykgX01VVEFUSU9OX09CU0VSVkVSID0gTXV0YXRpb25PYnNlcnZlcjtcbiAgaWYgKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcpIF9QRVJGT1JNQU5DRSA9IHBlcmZvcm1hbmNlO1xufSBjYXRjaCAoZSkge31cblxudmFyIF9yZWYgPSBfV0lORE9XLm5hdmlnYXRvciB8fCB7fSxcbiAgICBfcmVmJHVzZXJBZ2VudCA9IF9yZWYudXNlckFnZW50LFxuICAgIHVzZXJBZ2VudCA9IF9yZWYkdXNlckFnZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdXNlckFnZW50O1xuXG52YXIgV0lORE9XID0gX1dJTkRPVztcbnZhciBET0NVTUVOVCA9IF9ET0NVTUVOVDtcbnZhciBNVVRBVElPTl9PQlNFUlZFUiA9IF9NVVRBVElPTl9PQlNFUlZFUjtcbnZhciBQRVJGT1JNQU5DRSA9IF9QRVJGT1JNQU5DRTtcbnZhciBJU19CUk9XU0VSID0gISFXSU5ET1cuZG9jdW1lbnQ7XG52YXIgSVNfRE9NID0gISFET0NVTUVOVC5kb2N1bWVudEVsZW1lbnQgJiYgISFET0NVTUVOVC5oZWFkICYmIHR5cGVvZiBET0NVTUVOVC5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBET0NVTUVOVC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xudmFyIElTX0lFID0gfnVzZXJBZ2VudC5pbmRleE9mKCdNU0lFJykgfHwgfnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50LycpO1xuXG52YXIgTkFNRVNQQUNFX0lERU5USUZJRVIgPSAnX19fRk9OVF9BV0VTT01FX19fJztcbnZhciBVTklUU19JTl9HUklEID0gMTY7XG52YXIgREVGQVVMVF9GQU1JTFlfUFJFRklYID0gJ2ZhJztcbnZhciBERUZBVUxUX1JFUExBQ0VNRU5UX0NMQVNTID0gJ3N2Zy1pbmxpbmUtLWZhJztcbnZhciBEQVRBX0ZBX0kyU1ZHID0gJ2RhdGEtZmEtaTJzdmcnO1xudmFyIERBVEFfRkFfUFNFVURPX0VMRU1FTlQgPSAnZGF0YS1mYS1wc2V1ZG8tZWxlbWVudCc7XG52YXIgREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HID0gJ2RhdGEtZmEtcHNldWRvLWVsZW1lbnQtcGVuZGluZyc7XG52YXIgREFUQV9QUkVGSVggPSAnZGF0YS1wcmVmaXgnO1xudmFyIERBVEFfSUNPTiA9ICdkYXRhLWljb24nO1xudmFyIEhUTUxfQ0xBU1NfSTJTVkdfQkFTRV9DTEFTUyA9ICdmb250YXdlc29tZS1pMnN2Zyc7XG52YXIgTVVUQVRJT05fQVBQUk9BQ0hfQVNZTkMgPSAnYXN5bmMnO1xudmFyIFRBR05BTUVTX1RPX1NLSVBfRk9SX1BTRVVET0VMRU1FTlRTID0gWydIVE1MJywgJ0hFQUQnLCAnU1RZTEUnLCAnU0NSSVBUJ107XG52YXIgUFJPRFVDVElPTiA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSgpO1xudmFyIFBSRUZJWF9UT19TVFlMRSA9IHtcbiAgJ2Zhcyc6ICdzb2xpZCcsXG4gICdmYXInOiAncmVndWxhcicsXG4gICdmYWwnOiAnbGlnaHQnLFxuICAnZmFkJzogJ2R1b3RvbmUnLFxuICAnZmFiJzogJ2JyYW5kcycsXG4gICdmYSc6ICdzb2xpZCdcbn07XG52YXIgU1RZTEVfVE9fUFJFRklYID0ge1xuICAnc29saWQnOiAnZmFzJyxcbiAgJ3JlZ3VsYXInOiAnZmFyJyxcbiAgJ2xpZ2h0JzogJ2ZhbCcsXG4gICdkdW90b25lJzogJ2ZhZCcsXG4gICdicmFuZHMnOiAnZmFiJ1xufTtcbnZhciBMQVlFUlNfVEVYVF9DTEFTU05BTUUgPSAnZmEtbGF5ZXJzLXRleHQnO1xudmFyIEZPTlRfRkFNSUxZX1BBVFRFUk4gPSAvRm9udCBBd2Vzb21lIDUgKFNvbGlkfFJlZ3VsYXJ8TGlnaHR8RHVvdG9uZXxCcmFuZHN8RnJlZXxQcm8pLztcbnZhciBGT05UX1dFSUdIVF9UT19QUkVGSVggPSB7XG4gICc5MDAnOiAnZmFzJyxcbiAgJzQwMCc6ICdmYXInLFxuICAnbm9ybWFsJzogJ2ZhcicsXG4gICczMDAnOiAnZmFsJ1xufTtcbnZhciBvbmVUb1RlbiA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF07XG52YXIgb25lVG9Ud2VudHkgPSBvbmVUb1Rlbi5jb25jYXQoWzExLCAxMiwgMTMsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXSk7XG52YXIgQVRUUklCVVRFU19XQVRDSEVEX0ZPUl9NVVRBVElPTiA9IFsnY2xhc3MnLCAnZGF0YS1wcmVmaXgnLCAnZGF0YS1pY29uJywgJ2RhdGEtZmEtdHJhbnNmb3JtJywgJ2RhdGEtZmEtbWFzayddO1xudmFyIERVT1RPTkVfQ0xBU1NFUyA9IHtcbiAgR1JPVVA6ICdncm91cCcsXG4gIFNXQVBfT1BBQ0lUWTogJ3N3YXAtb3BhY2l0eScsXG4gIFBSSU1BUlk6ICdwcmltYXJ5JyxcbiAgU0VDT05EQVJZOiAnc2Vjb25kYXJ5J1xufTtcbnZhciBSRVNFUlZFRF9DTEFTU0VTID0gWyd4cycsICdzbScsICdsZycsICdmdycsICd1bCcsICdsaScsICdib3JkZXInLCAncHVsbC1sZWZ0JywgJ3B1bGwtcmlnaHQnLCAnc3BpbicsICdwdWxzZScsICdyb3RhdGUtOTAnLCAncm90YXRlLTE4MCcsICdyb3RhdGUtMjcwJywgJ2ZsaXAtaG9yaXpvbnRhbCcsICdmbGlwLXZlcnRpY2FsJywgJ2ZsaXAtYm90aCcsICdzdGFjaycsICdzdGFjay0xeCcsICdzdGFjay0yeCcsICdpbnZlcnNlJywgJ2xheWVycycsICdsYXllcnMtdGV4dCcsICdsYXllcnMtY291bnRlcicsIERVT1RPTkVfQ0xBU1NFUy5HUk9VUCwgRFVPVE9ORV9DTEFTU0VTLlNXQVBfT1BBQ0lUWSwgRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlksIERVT1RPTkVfQ0xBU1NFUy5TRUNPTkRBUlldLmNvbmNhdChvbmVUb1Rlbi5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KG4sIFwieFwiKTtcbn0pKS5jb25jYXQob25lVG9Ud2VudHkubWFwKGZ1bmN0aW9uIChuKSB7XG4gIHJldHVybiBcInctXCIuY29uY2F0KG4pO1xufSkpO1xuXG52YXIgaW5pdGlhbCA9IFdJTkRPVy5Gb250QXdlc29tZUNvbmZpZyB8fCB7fTtcblxuZnVuY3Rpb24gZ2V0QXR0ckNvbmZpZyhhdHRyKSB7XG4gIHZhciBlbGVtZW50ID0gRE9DVU1FTlQucXVlcnlTZWxlY3Rvcignc2NyaXB0WycgKyBhdHRyICsgJ10nKTtcblxuICBpZiAoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIC8vIEdldHRpbmcgYW4gZW1wdHkgc3RyaW5nIHdpbGwgb2NjdXIgaWYgdGhlIGF0dHJpYnV0ZSBpcyBzZXQgb24gdGhlIEhUTUwgdGFnIGJ1dCB3aXRob3V0IGEgdmFsdWVcbiAgLy8gV2UnbGwgYXNzdW1lIHRoYXQgdGhpcyBpcyBhbiBpbmRpY2F0aW9uIHRoYXQgaXQgc2hvdWxkIGJlIHRvZ2dsZWQgdG8gdHJ1ZVxuICAvLyBGb3IgZXhhbXBsZSA8c2NyaXB0IGRhdGEtc2VhcmNoLXBzZXVkby1lbGVtZW50cyBzcmM9XCIuLi5cIj48L3NjcmlwdD5cbiAgaWYgKHZhbCA9PT0gJycpIHJldHVybiB0cnVlO1xuICBpZiAodmFsID09PSAnZmFsc2UnKSByZXR1cm4gZmFsc2U7XG4gIGlmICh2YWwgPT09ICd0cnVlJykgcmV0dXJuIHRydWU7XG4gIHJldHVybiB2YWw7XG59XG5cbmlmIChET0NVTUVOVCAmJiB0eXBlb2YgRE9DVU1FTlQucXVlcnlTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICB2YXIgYXR0cnMgPSBbWydkYXRhLWZhbWlseS1wcmVmaXgnLCAnZmFtaWx5UHJlZml4J10sIFsnZGF0YS1yZXBsYWNlbWVudC1jbGFzcycsICdyZXBsYWNlbWVudENsYXNzJ10sIFsnZGF0YS1hdXRvLXJlcGxhY2Utc3ZnJywgJ2F1dG9SZXBsYWNlU3ZnJ10sIFsnZGF0YS1hdXRvLWFkZC1jc3MnLCAnYXV0b0FkZENzcyddLCBbJ2RhdGEtYXV0by1hMTF5JywgJ2F1dG9BMTF5J10sIFsnZGF0YS1zZWFyY2gtcHNldWRvLWVsZW1lbnRzJywgJ3NlYXJjaFBzZXVkb0VsZW1lbnRzJ10sIFsnZGF0YS1vYnNlcnZlLW11dGF0aW9ucycsICdvYnNlcnZlTXV0YXRpb25zJ10sIFsnZGF0YS1tdXRhdGUtYXBwcm9hY2gnLCAnbXV0YXRlQXBwcm9hY2gnXSwgWydkYXRhLWtlZXAtb3JpZ2luYWwtc291cmNlJywgJ2tlZXBPcmlnaW5hbFNvdXJjZSddLCBbJ2RhdGEtbWVhc3VyZS1wZXJmb3JtYW5jZScsICdtZWFzdXJlUGVyZm9ybWFuY2UnXSwgWydkYXRhLXNob3ctbWlzc2luZy1pY29ucycsICdzaG93TWlzc2luZ0ljb25zJ11dO1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMiksXG4gICAgICAgIGF0dHIgPSBfcmVmMlswXSxcbiAgICAgICAga2V5ID0gX3JlZjJbMV07XG5cbiAgICB2YXIgdmFsID0gY29lcmNlKGdldEF0dHJDb25maWcoYXR0cikpO1xuXG4gICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgaW5pdGlhbFtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZmFtaWx5UHJlZml4OiBERUZBVUxUX0ZBTUlMWV9QUkVGSVgsXG4gIHJlcGxhY2VtZW50Q2xhc3M6IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1MsXG4gIGF1dG9SZXBsYWNlU3ZnOiB0cnVlLFxuICBhdXRvQWRkQ3NzOiB0cnVlLFxuICBhdXRvQTExeTogdHJ1ZSxcbiAgc2VhcmNoUHNldWRvRWxlbWVudHM6IGZhbHNlLFxuICBvYnNlcnZlTXV0YXRpb25zOiB0cnVlLFxuICBtdXRhdGVBcHByb2FjaDogJ2FzeW5jJyxcbiAga2VlcE9yaWdpbmFsU291cmNlOiB0cnVlLFxuICBtZWFzdXJlUGVyZm9ybWFuY2U6IGZhbHNlLFxuICBzaG93TWlzc2luZ0ljb25zOiB0cnVlXG59O1xuXG52YXIgX2NvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9kZWZhdWx0LCBpbml0aWFsKTtcblxuaWYgKCFfY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBfY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcblxudmFyIGNvbmZpZyA9IF9vYmplY3RTcHJlYWQoe30sIF9jb25maWcpO1xuXG5XSU5ET1cuRm9udEF3ZXNvbWVDb25maWcgPSBjb25maWc7XG5cbnZhciB3ID0gV0lORE9XIHx8IHt9O1xuaWYgKCF3W05BTUVTUEFDRV9JREVOVElGSUVSXSkgd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0gPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uc3R5bGVzKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zdHlsZXMgPSB7fTtcbmlmICghd1tOQU1FU1BBQ0VfSURFTlRJRklFUl0uaG9va3MpIHdbTkFNRVNQQUNFX0lERU5USUZJRVJdLmhvb2tzID0ge307XG5pZiAoIXdbTkFNRVNQQUNFX0lERU5USUZJRVJdLnNoaW1zKSB3W05BTUVTUEFDRV9JREVOVElGSUVSXS5zaGltcyA9IFtdO1xudmFyIG5hbWVzcGFjZSA9IHdbTkFNRVNQQUNFX0lERU5USUZJRVJdO1xuXG52YXIgZnVuY3Rpb25zID0gW107XG5cbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICBET0NVTUVOVC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgbGlzdGVuZXIpO1xuICBsb2FkZWQgPSAxO1xuICBmdW5jdGlvbnMubWFwKGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiBmbigpO1xuICB9KTtcbn07XG5cbnZhciBsb2FkZWQgPSBmYWxzZTtcblxuaWYgKElTX0RPTSkge1xuICBsb2FkZWQgPSAoRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsID8gL15sb2FkZWR8XmMvIDogL15sb2FkZWR8Xml8XmMvKS50ZXN0KERPQ1VNRU5ULnJlYWR5U3RhdGUpO1xuICBpZiAoIWxvYWRlZCkgRE9DVU1FTlQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGxpc3RlbmVyKTtcbn1cblxuZnVuY3Rpb24gZG9tcmVhZHkgKGZuKSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIGxvYWRlZCA/IHNldFRpbWVvdXQoZm4sIDApIDogZnVuY3Rpb25zLnB1c2goZm4pO1xufVxuXG52YXIgUEVORElORyA9ICdwZW5kaW5nJztcbnZhciBTRVRUTEVEID0gJ3NldHRsZWQnO1xudmFyIEZVTEZJTExFRCA9ICdmdWxmaWxsZWQnO1xudmFyIFJFSkVDVEVEID0gJ3JlamVjdGVkJztcblxudmFyIE5PT1AgPSBmdW5jdGlvbiBOT09QKCkge307XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwucHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nO1xudmFyIGFzeW5jU2V0VGltZXIgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAndW5kZWZpbmVkJyA/IHNldFRpbWVvdXQgOiBzZXRJbW1lZGlhdGU7XG52YXIgYXN5bmNRdWV1ZSA9IFtdO1xudmFyIGFzeW5jVGltZXI7XG5cbmZ1bmN0aW9uIGFzeW5jRmx1c2goKSB7XG4gIC8vIHJ1biBwcm9taXNlIGNhbGxiYWNrc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFzeW5jUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBhc3luY1F1ZXVlW2ldWzBdKGFzeW5jUXVldWVbaV1bMV0pO1xuICB9IC8vIHJlc2V0IGFzeW5jIGFzeW5jUXVldWVcblxuXG4gIGFzeW5jUXVldWUgPSBbXTtcbiAgYXN5bmNUaW1lciA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhc3luY0NhbGwoY2FsbGJhY2ssIGFyZykge1xuICBhc3luY1F1ZXVlLnB1c2goW2NhbGxiYWNrLCBhcmddKTtcblxuICBpZiAoIWFzeW5jVGltZXIpIHtcbiAgICBhc3luY1RpbWVyID0gdHJ1ZTtcbiAgICBhc3luY1NldFRpbWVyKGFzeW5jRmx1c2gsIDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZVJlc29sdmVyKHJlc29sdmVyLCBwcm9taXNlKSB7XG4gIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXNvbHZlcihyZXNvbHZlUHJvbWlzZSwgcmVqZWN0UHJvbWlzZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3RQcm9taXNlKGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHN1YnNjcmliZXIpIHtcbiAgdmFyIG93bmVyID0gc3Vic2NyaWJlci5vd25lcjtcbiAgdmFyIHNldHRsZWQgPSBvd25lci5fc3RhdGU7XG4gIHZhciB2YWx1ZSA9IG93bmVyLl9kYXRhO1xuICB2YXIgY2FsbGJhY2sgPSBzdWJzY3JpYmVyW3NldHRsZWRdO1xuICB2YXIgcHJvbWlzZSA9IHN1YnNjcmliZXIudGhlbjtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0dGxlZCA9IEZVTEZJTExFRDtcblxuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYW5kbGVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSkpIHtcbiAgICBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2V0dGxlZCA9PT0gUkVKRUNURUQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSB7XG4gIHZhciByZXNvbHZlZDtcblxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAmJiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JykpIHtcbiAgICAgIC8vIHRoZW4gc2hvdWxkIGJlIHJldHJpZXZlZCBvbmx5IG9uY2VcbiAgICAgIHZhciB0aGVuID0gdmFsdWUudGhlbjtcblxuICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUgfHwgIWhhbmRsZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlKSkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgcHJvbWlzZS5fc3RhdGUgPSBTRVRUTEVEO1xuICAgIHByb21pc2UuX2RhdGEgPSB2YWx1ZTtcbiAgICBhc3luY0NhbGwocHVibGlzaEZ1bGZpbGxtZW50LCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSA9PT0gUEVORElORykge1xuICAgIHByb21pc2UuX3N0YXRlID0gU0VUVExFRDtcbiAgICBwcm9taXNlLl9kYXRhID0gcmVhc29uO1xuICAgIGFzeW5jQ2FsbChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fdGhlbiA9IHByb21pc2UuX3RoZW4uZm9yRWFjaChpbnZva2VDYWxsYmFjayk7XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hGdWxmaWxsbWVudChwcm9taXNlKSB7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcbiAgcHVibGlzaChwcm9taXNlKTtcblxuICBpZiAoIXByb21pc2UuX2hhbmRsZWQgJiYgaXNOb2RlKSB7XG4gICAgZ2xvYmFsLnByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgcHJvbWlzZS5fZGF0YSwgcHJvbWlzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90aWZ5UmVqZWN0aW9uSGFuZGxlZChwcm9taXNlKSB7XG4gIGdsb2JhbC5wcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbn1cbi8qKlxuICogQGNsYXNzXG4gKi9cblxuXG5mdW5jdGlvbiBQKHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHJlc29sdmVyICcgKyByZXNvbHZlciArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfVxuXG4gIGlmICh0aGlzIGluc3RhbmNlb2YgUCA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgdG8gY29uc3RydWN0IFxcJ1Byb21pc2VcXCc6IFBsZWFzZSB1c2UgdGhlIFxcJ25ld1xcJyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdGhpcy5fdGhlbiA9IFtdO1xuICBpbnZva2VSZXNvbHZlcihyZXNvbHZlciwgdGhpcyk7XG59XG5cblAucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUCxcbiAgX3N0YXRlOiBQRU5ESU5HLFxuICBfdGhlbjogbnVsbCxcbiAgX2RhdGE6IHVuZGVmaW5lZCxcbiAgX2hhbmRsZWQ6IGZhbHNlLFxuICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gICAgdmFyIHN1YnNjcmliZXIgPSB7XG4gICAgICBvd25lcjogdGhpcyxcbiAgICAgIHRoZW46IG5ldyB0aGlzLmNvbnN0cnVjdG9yKE5PT1ApLFxuICAgICAgZnVsZmlsbGVkOiBvbkZ1bGZpbGxtZW50LFxuICAgICAgcmVqZWN0ZWQ6IG9uUmVqZWN0aW9uXG4gICAgfTtcblxuICAgIGlmICgob25SZWplY3Rpb24gfHwgb25GdWxmaWxsbWVudCkgJiYgIXRoaXMuX2hhbmRsZWQpIHtcbiAgICAgIHRoaXMuX2hhbmRsZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEICYmIGlzTm9kZSkge1xuICAgICAgICBhc3luY0NhbGwobm90aWZ5UmVqZWN0aW9uSGFuZGxlZCwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3N0YXRlID09PSBGVUxGSUxMRUQgfHwgdGhpcy5fc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICAvLyBhbHJlYWR5IHJlc29sdmVkLCBjYWxsIGNhbGxiYWNrIGFzeW5jXG4gICAgICBhc3luY0NhbGwoaW52b2tlQ2FsbGJhY2ssIHN1YnNjcmliZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdWJzY3JpYmVcbiAgICAgIHRoaXMuX3RoZW4ucHVzaChzdWJzY3JpYmVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic2NyaWJlci50aGVuO1xuICB9LFxuICBjYXRjaDogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH1cbn07XG5cblAuYWxsID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuJyk7XG4gIH1cblxuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlbWFpbmluZyA9IDA7XG5cbiAgICBmdW5jdGlvbiByZXNvbHZlcihpbmRleCkge1xuICAgICAgcmVtYWluaW5nKys7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKCEgLS1yZW1haW5pbmcpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwLCBwcm9taXNlOyBpIDwgcHJvbWlzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb21pc2UgPSBwcm9taXNlc1tpXTtcblxuICAgICAgaWYgKHByb21pc2UgJiYgdHlwZW9mIHByb21pc2UudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4ocmVzb2x2ZXIoaSksIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzW2ldID0gcHJvbWlzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXJlbWFpbmluZykge1xuICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuUC5yYWNlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9taXNlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLicpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcHJvbWlzZTsgaSA8IHByb21pc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9taXNlID0gcHJvbWlzZXNbaV07XG5cbiAgICAgIGlmIChwcm9taXNlICYmIHR5cGVvZiBwcm9taXNlLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5QLnJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiB2YWx1ZS5jb25zdHJ1Y3RvciA9PT0gUCkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9KTtcbn07XG5cblAucmVqZWN0ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICByZXR1cm4gbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cbnZhciBwaWNrZWQgPSB0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyA/IFByb21pc2UgOiBQO1xuXG52YXIgZCA9IFVOSVRTX0lOX0dSSUQ7XG52YXIgbWVhbmluZ2xlc3NUcmFuc2Zvcm0gPSB7XG4gIHNpemU6IDE2LFxuICB4OiAwLFxuICB5OiAwLFxuICByb3RhdGU6IDAsXG4gIGZsaXBYOiBmYWxzZSxcbiAgZmxpcFk6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBpc1Jlc2VydmVkKG5hbWUpIHtcbiAgcmV0dXJuIH5SRVNFUlZFRF9DTEFTU0VTLmluZGV4T2YobmFtZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRDc3MoY3NzKSB7XG4gIGlmICghY3NzIHx8ICFJU19ET00pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9jc3MnKTtcbiAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICB2YXIgaGVhZENoaWxkcmVuID0gRE9DVU1FTlQuaGVhZC5jaGlsZE5vZGVzO1xuICB2YXIgYmVmb3JlQ2hpbGQgPSBudWxsO1xuXG4gIGZvciAodmFyIGkgPSBoZWFkQ2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBoZWFkQ2hpbGRyZW5baV07XG4gICAgdmFyIHRhZ05hbWUgPSAoY2hpbGQudGFnTmFtZSB8fCAnJykudG9VcHBlckNhc2UoKTtcblxuICAgIGlmIChbJ1NUWUxFJywgJ0xJTksnXS5pbmRleE9mKHRhZ05hbWUpID4gLTEpIHtcbiAgICAgIGJlZm9yZUNoaWxkID0gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgRE9DVU1FTlQuaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGJlZm9yZUNoaWxkKTtcbiAgcmV0dXJuIGNzcztcbn1cbnZhciBpZFBvb2wgPSAnMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonO1xuZnVuY3Rpb24gbmV4dFVuaXF1ZUlkKCkge1xuICB2YXIgc2l6ZSA9IDEyO1xuICB2YXIgaWQgPSAnJztcblxuICB3aGlsZSAoc2l6ZS0tID4gMCkge1xuICAgIGlkICs9IGlkUG9vbFtNYXRoLnJhbmRvbSgpICogNjIgfCAwXTtcbiAgfVxuXG4gIHJldHVybiBpZDtcbn1cbmZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gIHZhciBhcnJheSA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAob2JqIHx8IFtdKS5sZW5ndGggPj4+IDA7IGktLTspIHtcbiAgICBhcnJheVtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cbmZ1bmN0aW9uIGNsYXNzQXJyYXkobm9kZSkge1xuICBpZiAobm9kZS5jbGFzc0xpc3QpIHtcbiAgICByZXR1cm4gdG9BcnJheShub2RlLmNsYXNzTGlzdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChub2RlLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykuc3BsaXQoJyAnKS5maWx0ZXIoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH0pO1xuICB9XG59XG5mdW5jdGlvbiBnZXRJY29uTmFtZShmYW1pbHlQcmVmaXgsIGNscykge1xuICB2YXIgcGFydHMgPSBjbHMuc3BsaXQoJy0nKTtcbiAgdmFyIHByZWZpeCA9IHBhcnRzWzBdO1xuICB2YXIgaWNvbk5hbWUgPSBwYXJ0cy5zbGljZSgxKS5qb2luKCctJyk7XG5cbiAgaWYgKHByZWZpeCA9PT0gZmFtaWx5UHJlZml4ICYmIGljb25OYW1lICE9PSAnJyAmJiAhaXNSZXNlcnZlZChpY29uTmFtZSkpIHtcbiAgICByZXR1cm4gaWNvbk5hbWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBcIlwiLmNvbmNhdChzdHIpLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpLnJlcGxhY2UoLycvZywgJyYjMzk7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cbmZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMgfHwge30pLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBhdHRyaWJ1dGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KGF0dHJpYnV0ZU5hbWUsIFwiPVxcXCJcIikuY29uY2F0KGh0bWxFc2NhcGUoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSksIFwiXFxcIiBcIik7XG4gIH0sICcnKS50cmltKCk7XG59XG5mdW5jdGlvbiBqb2luU3R5bGVzKHN0eWxlcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3R5bGVOYW1lKSB7XG4gICAgcmV0dXJuIGFjYyArIFwiXCIuY29uY2F0KHN0eWxlTmFtZSwgXCI6IFwiKS5jb25jYXQoc3R5bGVzW3N0eWxlTmFtZV0sIFwiO1wiKTtcbiAgfSwgJycpO1xufVxuZnVuY3Rpb24gdHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkge1xuICByZXR1cm4gdHJhbnNmb3JtLnNpemUgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnNpemUgfHwgdHJhbnNmb3JtLnggIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnggfHwgdHJhbnNmb3JtLnkgIT09IG1lYW5pbmdsZXNzVHJhbnNmb3JtLnkgfHwgdHJhbnNmb3JtLnJvdGF0ZSAhPT0gbWVhbmluZ2xlc3NUcmFuc2Zvcm0ucm90YXRlIHx8IHRyYW5zZm9ybS5mbGlwWCB8fCB0cmFuc2Zvcm0uZmxpcFk7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1Gb3JTdmcoX3JlZikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aCA9IF9yZWYuY29udGFpbmVyV2lkdGgsXG4gICAgICBpY29uV2lkdGggPSBfcmVmLmljb25XaWR0aDtcbiAgdmFyIG91dGVyID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGNvbnRhaW5lcldpZHRoIC8gMiwgXCIgMjU2KVwiKVxuICB9O1xuICB2YXIgaW5uZXJUcmFuc2xhdGUgPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggKiAzMiwgXCIsIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgKiAzMiwgXCIpIFwiKTtcbiAgdmFyIGlubmVyU2NhbGUgPSBcInNjYWxlKFwiLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIDE2ICogKHRyYW5zZm9ybS5mbGlwWCA/IC0xIDogMSksIFwiLCBcIikuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gMTYgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFyIGlubmVyUm90YXRlID0gXCJyb3RhdGUoXCIuY29uY2F0KHRyYW5zZm9ybS5yb3RhdGUsIFwiIDAgMClcIik7XG4gIHZhciBpbm5lciA9IHtcbiAgICB0cmFuc2Zvcm06IFwiXCIuY29uY2F0KGlubmVyVHJhbnNsYXRlLCBcIiBcIikuY29uY2F0KGlubmVyU2NhbGUsIFwiIFwiKS5jb25jYXQoaW5uZXJSb3RhdGUpXG4gIH07XG4gIHZhciBwYXRoID0ge1xuICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoXCIuY29uY2F0KGljb25XaWR0aCAvIDIgKiAtMSwgXCIgLTI1NilcIilcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBvdXRlcjogb3V0ZXIsXG4gICAgaW5uZXI6IGlubmVyLFxuICAgIHBhdGg6IHBhdGhcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUZvckNzcyhfcmVmMikge1xuICB2YXIgdHJhbnNmb3JtID0gX3JlZjIudHJhbnNmb3JtLFxuICAgICAgX3JlZjIkd2lkdGggPSBfcmVmMi53aWR0aCxcbiAgICAgIHdpZHRoID0gX3JlZjIkd2lkdGggPT09IHZvaWQgMCA/IFVOSVRTX0lOX0dSSUQgOiBfcmVmMiR3aWR0aCxcbiAgICAgIF9yZWYyJGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGhlaWdodCA9IF9yZWYyJGhlaWdodCA9PT0gdm9pZCAwID8gVU5JVFNfSU5fR1JJRCA6IF9yZWYyJGhlaWdodCxcbiAgICAgIF9yZWYyJHN0YXJ0Q2VudGVyZWQgPSBfcmVmMi5zdGFydENlbnRlcmVkLFxuICAgICAgc3RhcnRDZW50ZXJlZCA9IF9yZWYyJHN0YXJ0Q2VudGVyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkc3RhcnRDZW50ZXJlZDtcbiAgdmFyIHZhbCA9ICcnO1xuXG4gIGlmIChzdGFydENlbnRlcmVkICYmIElTX0lFKSB7XG4gICAgdmFsICs9IFwidHJhbnNsYXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ueCAvIGQgLSB3aWR0aCAvIDIsIFwiZW0sIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkIC0gaGVpZ2h0IC8gMiwgXCJlbSkgXCIpO1xuICB9IGVsc2UgaWYgKHN0YXJ0Q2VudGVyZWQpIHtcbiAgICB2YWwgKz0gXCJ0cmFuc2xhdGUoY2FsYygtNTAlICsgXCIuY29uY2F0KHRyYW5zZm9ybS54IC8gZCwgXCJlbSksIGNhbGMoLTUwJSArIFwiKS5jb25jYXQodHJhbnNmb3JtLnkgLyBkLCBcImVtKSkgXCIpO1xuICB9IGVsc2Uge1xuICAgIHZhbCArPSBcInRyYW5zbGF0ZShcIi5jb25jYXQodHJhbnNmb3JtLnggLyBkLCBcImVtLCBcIikuY29uY2F0KHRyYW5zZm9ybS55IC8gZCwgXCJlbSkgXCIpO1xuICB9XG5cbiAgdmFsICs9IFwic2NhbGUoXCIuY29uY2F0KHRyYW5zZm9ybS5zaXplIC8gZCAqICh0cmFuc2Zvcm0uZmxpcFggPyAtMSA6IDEpLCBcIiwgXCIpLmNvbmNhdCh0cmFuc2Zvcm0uc2l6ZSAvIGQgKiAodHJhbnNmb3JtLmZsaXBZID8gLTEgOiAxKSwgXCIpIFwiKTtcbiAgdmFsICs9IFwicm90YXRlKFwiLmNvbmNhdCh0cmFuc2Zvcm0ucm90YXRlLCBcImRlZykgXCIpO1xuICByZXR1cm4gdmFsO1xufVxuXG52YXIgQUxMX1NQQUNFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB3aWR0aDogJzEwMCUnLFxuICBoZWlnaHQ6ICcxMDAlJ1xufTtcblxuZnVuY3Rpb24gZmlsbEJsYWNrKGFic3RyYWN0KSB7XG4gIHZhciBmb3JjZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdHJ1ZTtcblxuICBpZiAoYWJzdHJhY3QuYXR0cmlidXRlcyAmJiAoYWJzdHJhY3QuYXR0cmlidXRlcy5maWxsIHx8IGZvcmNlKSkge1xuICAgIGFic3RyYWN0LmF0dHJpYnV0ZXMuZmlsbCA9ICdibGFjayc7XG4gIH1cblxuICByZXR1cm4gYWJzdHJhY3Q7XG59XG5cbmZ1bmN0aW9uIGRlR3JvdXAoYWJzdHJhY3QpIHtcbiAgaWYgKGFic3RyYWN0LnRhZyA9PT0gJ2cnKSB7XG4gICAgcmV0dXJuIGFic3RyYWN0LmNoaWxkcmVuO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbYWJzdHJhY3RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VJY29uTWFza2luZyAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICBtYXNrID0gX3JlZi5tYXNrLFxuICAgICAgdHJhbnNmb3JtID0gX3JlZi50cmFuc2Zvcm07XG4gIHZhciBtYWluV2lkdGggPSBtYWluLndpZHRoLFxuICAgICAgbWFpblBhdGggPSBtYWluLmljb247XG4gIHZhciBtYXNrV2lkdGggPSBtYXNrLndpZHRoLFxuICAgICAgbWFza1BhdGggPSBtYXNrLmljb247XG4gIHZhciB0cmFucyA9IHRyYW5zZm9ybUZvclN2Zyh7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgY29udGFpbmVyV2lkdGg6IG1hc2tXaWR0aCxcbiAgICBpY29uV2lkdGg6IG1haW5XaWR0aFxuICB9KTtcbiAgdmFyIG1hc2tSZWN0ID0ge1xuICAgIHRhZzogJ3JlY3QnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFMTF9TUEFDRSwge1xuICAgICAgZmlsbDogJ3doaXRlJ1xuICAgIH0pXG4gIH07XG4gIHZhciBtYXNrSW5uZXJHcm91cENoaWxkcmVuTWl4aW4gPSBtYWluUGF0aC5jaGlsZHJlbiA/IHtcbiAgICBjaGlsZHJlbjogbWFpblBhdGguY2hpbGRyZW4ubWFwKGZpbGxCbGFjaylcbiAgfSA6IHt9O1xuICB2YXIgbWFza0lubmVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMuaW5uZXIpLFxuICAgIGNoaWxkcmVuOiBbZmlsbEJsYWNrKF9vYmplY3RTcHJlYWQoe1xuICAgICAgdGFnOiBtYWluUGF0aC50YWcsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBtYWluUGF0aC5hdHRyaWJ1dGVzLCB0cmFucy5wYXRoKVxuICAgIH0sIG1hc2tJbm5lckdyb3VwQ2hpbGRyZW5NaXhpbikpXVxuICB9O1xuICB2YXIgbWFza091dGVyR3JvdXAgPSB7XG4gICAgdGFnOiAnZycsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgdHJhbnMub3V0ZXIpLFxuICAgIGNoaWxkcmVuOiBbbWFza0lubmVyR3JvdXBdXG4gIH07XG4gIHZhciBtYXNrSWQgPSBcIm1hc2stXCIuY29uY2F0KG5leHRVbmlxdWVJZCgpKTtcbiAgdmFyIGNsaXBJZCA9IFwiY2xpcC1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICB2YXIgbWFza1RhZyA9IHtcbiAgICB0YWc6ICdtYXNrJyxcbiAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBBTExfU1BBQ0UsIHtcbiAgICAgIGlkOiBtYXNrSWQsXG4gICAgICBtYXNrVW5pdHM6ICd1c2VyU3BhY2VPblVzZScsXG4gICAgICBtYXNrQ29udGVudFVuaXRzOiAndXNlclNwYWNlT25Vc2UnXG4gICAgfSksXG4gICAgY2hpbGRyZW46IFttYXNrUmVjdCwgbWFza091dGVyR3JvdXBdXG4gIH07XG4gIHZhciBkZWZzID0ge1xuICAgIHRhZzogJ2RlZnMnLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgdGFnOiAnY2xpcFBhdGgnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBpZDogY2xpcElkXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IGRlR3JvdXAobWFza1BhdGgpXG4gICAgfSwgbWFza1RhZ11cbiAgfTtcbiAgY2hpbGRyZW4ucHVzaChkZWZzLCB7XG4gICAgdGFnOiAncmVjdCcsXG4gICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7XG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgICdjbGlwLXBhdGgnOiBcInVybCgjXCIuY29uY2F0KGNsaXBJZCwgXCIpXCIpLFxuICAgICAgbWFzazogXCJ1cmwoI1wiLmNvbmNhdChtYXNrSWQsIFwiKVwiKVxuICAgIH0sIEFMTF9TUEFDRSlcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUljb25TdGFuZGFyZCAoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYuYXR0cmlidXRlcyxcbiAgICAgIG1haW4gPSBfcmVmLm1haW4sXG4gICAgICB0cmFuc2Zvcm0gPSBfcmVmLnRyYW5zZm9ybSxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzO1xuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICBpZiAodHJhbnNmb3JtSXNNZWFuaW5nZnVsKHRyYW5zZm9ybSkpIHtcbiAgICB2YXIgdHJhbnMgPSB0cmFuc2Zvcm1Gb3JTdmcoe1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm0sXG4gICAgICBjb250YWluZXJXaWR0aDogbWFpbi53aWR0aCxcbiAgICAgIGljb25XaWR0aDogbWFpbi53aWR0aFxuICAgIH0pO1xuICAgIGNoaWxkcmVuLnB1c2goe1xuICAgICAgdGFnOiAnZycsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCB0cmFucy5vdXRlciksXG4gICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgdGFnOiAnZycsXG4gICAgICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIHRyYW5zLmlubmVyKSxcbiAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgdGFnOiBtYWluLmljb24udGFnLFxuICAgICAgICAgIGNoaWxkcmVuOiBtYWluLmljb24uY2hpbGRyZW4sXG4gICAgICAgICAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgbWFpbi5pY29uLmF0dHJpYnV0ZXMsIHRyYW5zLnBhdGgpXG4gICAgICAgIH1dXG4gICAgICB9XVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkcmVuLnB1c2gobWFpbi5pY29uKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXNJY29uIChfcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBtYWluID0gX3JlZi5tYWluLFxuICAgICAgbWFzayA9IF9yZWYubWFzayxcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcyxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYudHJhbnNmb3JtO1xuXG4gIGlmICh0cmFuc2Zvcm1Jc01lYW5pbmdmdWwodHJhbnNmb3JtKSAmJiBtYWluLmZvdW5kICYmICFtYXNrLmZvdW5kKSB7XG4gICAgdmFyIHdpZHRoID0gbWFpbi53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gbWFpbi5oZWlnaHQ7XG4gICAgdmFyIG9mZnNldCA9IHtcbiAgICAgIHg6IHdpZHRoIC8gaGVpZ2h0IC8gMixcbiAgICAgIHk6IDAuNVxuICAgIH07XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IGpvaW5TdHlsZXMoX29iamVjdFNwcmVhZCh7fSwgc3R5bGVzLCB7XG4gICAgICAndHJhbnNmb3JtLW9yaWdpbic6IFwiXCIuY29uY2F0KG9mZnNldC54ICsgdHJhbnNmb3JtLnggLyAxNiwgXCJlbSBcIikuY29uY2F0KG9mZnNldC55ICsgdHJhbnNmb3JtLnkgLyAxNiwgXCJlbVwiKVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBbe1xuICAgIHRhZzogJ3N2ZycsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgfV07XG59XG5cbmZ1bmN0aW9uIGFzU3ltYm9sIChfcmVmKSB7XG4gIHZhciBwcmVmaXggPSBfcmVmLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gX3JlZi5pY29uTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG4gICAgICBzeW1ib2wgPSBfcmVmLnN5bWJvbDtcbiAgdmFyIGlkID0gc3ltYm9sID09PSB0cnVlID8gXCJcIi5jb25jYXQocHJlZml4LCBcIi1cIikuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoaWNvbk5hbWUpIDogc3ltYm9sO1xuICByZXR1cm4gW3tcbiAgICB0YWc6ICdzdmcnLFxuICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTogbm9uZTsnXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgIHRhZzogJ3N5bWJvbCcsXG4gICAgICBhdHRyaWJ1dGVzOiBfb2JqZWN0U3ByZWFkKHt9LCBhdHRyaWJ1dGVzLCB7XG4gICAgICAgIGlkOiBpZFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XVxuICB9XTtcbn1cblxuZnVuY3Rpb24gbWFrZUlubGluZVN2Z0Fic3RyYWN0KHBhcmFtcykge1xuICB2YXIgX3BhcmFtcyRpY29ucyA9IHBhcmFtcy5pY29ucyxcbiAgICAgIG1haW4gPSBfcGFyYW1zJGljb25zLm1haW4sXG4gICAgICBtYXNrID0gX3BhcmFtcyRpY29ucy5tYXNrLFxuICAgICAgcHJlZml4ID0gcGFyYW1zLnByZWZpeCxcbiAgICAgIGljb25OYW1lID0gcGFyYW1zLmljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IHBhcmFtcy5zeW1ib2wsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUgPSBwYXJhbXMud2F0Y2hhYmxlLFxuICAgICAgd2F0Y2hhYmxlID0gX3BhcmFtcyR3YXRjaGFibGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3BhcmFtcyR3YXRjaGFibGU7XG5cbiAgdmFyIF9yZWYgPSBtYXNrLmZvdW5kID8gbWFzayA6IG1haW4sXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgd2lkdGhDbGFzcyA9IFwiZmEtdy1cIi5jb25jYXQoTWF0aC5jZWlsKHdpZHRoIC8gaGVpZ2h0ICogMTYpKTtcbiAgdmFyIGF0dHJDbGFzcyA9IFtjb25maWcucmVwbGFjZW1lbnRDbGFzcywgaWNvbk5hbWUgPyBcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1cIikuY29uY2F0KGljb25OYW1lKSA6ICcnLCB3aWR0aENsYXNzXS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gZXh0cmEuY2xhc3Nlcy5pbmRleE9mKGMpID09PSAtMTtcbiAgfSkuY29uY2F0KGV4dHJhLmNsYXNzZXMpLmpvaW4oJyAnKTtcbiAgdmFyIGNvbnRlbnQgPSB7XG4gICAgY2hpbGRyZW46IFtdLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLmF0dHJpYnV0ZXMsIHtcbiAgICAgICdkYXRhLXByZWZpeCc6IHByZWZpeCxcbiAgICAgICdkYXRhLWljb24nOiBpY29uTmFtZSxcbiAgICAgICdjbGFzcyc6IGF0dHJDbGFzcyxcbiAgICAgICdyb2xlJzogZXh0cmEuYXR0cmlidXRlcy5yb2xlIHx8ICdpbWcnLFxuICAgICAgJ3htbG5zJzogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICAgICd2aWV3Qm94JzogXCIwIDAgXCIuY29uY2F0KHdpZHRoLCBcIiBcIikuY29uY2F0KGhlaWdodClcbiAgICB9KVxuICB9O1xuXG4gIGlmICh3YXRjaGFibGUpIHtcbiAgICBjb250ZW50LmF0dHJpYnV0ZXNbREFUQV9GQV9JMlNWR10gPSAnJztcbiAgfVxuXG4gIGlmICh0aXRsZSkgY29udGVudC5jaGlsZHJlbi5wdXNoKHtcbiAgICB0YWc6ICd0aXRsZScsXG4gICAgYXR0cmlidXRlczoge1xuICAgICAgaWQ6IGNvbnRlbnQuYXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gfHwgXCJ0aXRsZS1cIi5jb25jYXQobmV4dFVuaXF1ZUlkKCkpXG4gICAgfSxcbiAgICBjaGlsZHJlbjogW3RpdGxlXVxuICB9KTtcblxuICB2YXIgYXJncyA9IF9vYmplY3RTcHJlYWQoe30sIGNvbnRlbnQsIHtcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgbWFpbjogbWFpbixcbiAgICBtYXNrOiBtYXNrLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIHN0eWxlczogZXh0cmEuc3R5bGVzXG4gIH0pO1xuXG4gIHZhciBfcmVmMiA9IG1hc2suZm91bmQgJiYgbWFpbi5mb3VuZCA/IG1ha2VJY29uTWFza2luZyhhcmdzKSA6IG1ha2VJY29uU3RhbmRhcmQoYXJncyksXG4gICAgICBjaGlsZHJlbiA9IF9yZWYyLmNoaWxkcmVuLFxuICAgICAgYXR0cmlidXRlcyA9IF9yZWYyLmF0dHJpYnV0ZXM7XG5cbiAgYXJncy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICBhcmdzLmF0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICByZXR1cm4gYXNTeW1ib2woYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFzSWNvbihhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFrZUxheWVyc1RleHRBYnN0cmFjdChwYXJhbXMpIHtcbiAgdmFyIGNvbnRlbnQgPSBwYXJhbXMuY29udGVudCxcbiAgICAgIHdpZHRoID0gcGFyYW1zLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gcGFyYW1zLmhlaWdodCxcbiAgICAgIHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhLFxuICAgICAgX3BhcmFtcyR3YXRjaGFibGUyID0gcGFyYW1zLndhdGNoYWJsZSxcbiAgICAgIHdhdGNoYWJsZSA9IF9wYXJhbXMkd2F0Y2hhYmxlMiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcGFyYW1zJHdhdGNoYWJsZTI7XG5cbiAgdmFyIGF0dHJpYnV0ZXMgPSBfb2JqZWN0U3ByZWFkKHt9LCBleHRyYS5hdHRyaWJ1dGVzLCB0aXRsZSA/IHtcbiAgICAndGl0bGUnOiB0aXRsZVxuICB9IDoge30sIHtcbiAgICAnY2xhc3MnOiBleHRyYS5jbGFzc2VzLmpvaW4oJyAnKVxuICB9KTtcblxuICBpZiAod2F0Y2hhYmxlKSB7XG4gICAgYXR0cmlidXRlc1tEQVRBX0ZBX0kyU1ZHXSA9ICcnO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IF9vYmplY3RTcHJlYWQoe30sIGV4dHJhLnN0eWxlcyk7XG5cbiAgaWYgKHRyYW5zZm9ybUlzTWVhbmluZ2Z1bCh0cmFuc2Zvcm0pKSB7XG4gICAgc3R5bGVzWyd0cmFuc2Zvcm0nXSA9IHRyYW5zZm9ybUZvckNzcyh7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgIHN0YXJ0Q2VudGVyZWQ6IHRydWUsXG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pO1xuICAgIHN0eWxlc1snLXdlYmtpdC10cmFuc2Zvcm0nXSA9IHN0eWxlc1sndHJhbnNmb3JtJ107XG4gIH1cblxuICB2YXIgc3R5bGVTdHJpbmcgPSBqb2luU3R5bGVzKHN0eWxlcyk7XG5cbiAgaWYgKHN0eWxlU3RyaW5nLmxlbmd0aCA+IDApIHtcbiAgICBhdHRyaWJ1dGVzWydzdHlsZSddID0gc3R5bGVTdHJpbmc7XG4gIH1cblxuICB2YXIgdmFsID0gW107XG4gIHZhbC5wdXNoKHtcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzLFxuICAgIGNoaWxkcmVuOiBbY29udGVudF1cbiAgfSk7XG5cbiAgaWYgKHRpdGxlKSB7XG4gICAgdmFsLnB1c2goe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiAnc3Itb25seSdcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogW3RpdGxlXVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cbmZ1bmN0aW9uIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3QocGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gcGFyYW1zLmNvbnRlbnQsXG4gICAgICB0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIGV4dHJhID0gcGFyYW1zLmV4dHJhO1xuXG4gIHZhciBhdHRyaWJ1dGVzID0gX29iamVjdFNwcmVhZCh7fSwgZXh0cmEuYXR0cmlidXRlcywgdGl0bGUgPyB7XG4gICAgJ3RpdGxlJzogdGl0bGVcbiAgfSA6IHt9LCB7XG4gICAgJ2NsYXNzJzogZXh0cmEuY2xhc3Nlcy5qb2luKCcgJylcbiAgfSk7XG5cbiAgdmFyIHN0eWxlU3RyaW5nID0gam9pblN0eWxlcyhleHRyYS5zdHlsZXMpO1xuXG4gIGlmIChzdHlsZVN0cmluZy5sZW5ndGggPiAwKSB7XG4gICAgYXR0cmlidXRlc1snc3R5bGUnXSA9IHN0eWxlU3RyaW5nO1xuICB9XG5cbiAgdmFyIHZhbCA9IFtdO1xuICB2YWwucHVzaCh7XG4gICAgdGFnOiAnc3BhbicsXG4gICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICBjaGlsZHJlbjogW2NvbnRlbnRdXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIHZhbC5wdXNoKHtcbiAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogJ3NyLW9ubHknXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt0aXRsZV1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBub29wJDEgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBwID0gY29uZmlnLm1lYXN1cmVQZXJmb3JtYW5jZSAmJiBQRVJGT1JNQU5DRSAmJiBQRVJGT1JNQU5DRS5tYXJrICYmIFBFUkZPUk1BTkNFLm1lYXN1cmUgPyBQRVJGT1JNQU5DRSA6IHtcbiAgbWFyazogbm9vcCQxLFxuICBtZWFzdXJlOiBub29wJDFcbn07XG52YXIgcHJlYW1ibGUgPSBcIkZBIFxcXCI1LjEyLjBcXFwiXCI7XG5cbnZhciBiZWdpbiA9IGZ1bmN0aW9uIGJlZ2luKG5hbWUpIHtcbiAgcC5tYXJrKFwiXCIuY29uY2F0KHByZWFtYmxlLCBcIiBcIikuY29uY2F0KG5hbWUsIFwiIGJlZ2luc1wiKSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVuZChuYW1lKTtcbiAgfTtcbn07XG5cbnZhciBlbmQgPSBmdW5jdGlvbiBlbmQobmFtZSkge1xuICBwLm1hcmsoXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgZW5kc1wiKSk7XG4gIHAubWVhc3VyZShcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lKSwgXCJcIi5jb25jYXQocHJlYW1ibGUsIFwiIFwiKS5jb25jYXQobmFtZSwgXCIgYmVnaW5zXCIpLCBcIlwiLmNvbmNhdChwcmVhbWJsZSwgXCIgXCIpLmNvbmNhdChuYW1lLCBcIiBlbmRzXCIpKTtcbn07XG5cbnZhciBwZXJmID0ge1xuICBiZWdpbjogYmVnaW4sXG4gIGVuZDogZW5kXG59O1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciB0byBiaW5kIGEgZnVuY3Rpb24ga25vd24gdG8gaGF2ZSA0IGFyZ3VtZW50c1xuICogdG8gYSBnaXZlbiBjb250ZXh0LlxuICovXG5cbnZhciBiaW5kSW50ZXJuYWw0ID0gZnVuY3Rpb24gYmluZEludGVybmFsNChmdW5jLCB0aGlzQ29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNDb250ZXh0LCBhLCBiLCBjLCBkKTtcbiAgfTtcbn07XG5cbi8qKlxuICogIyBSZWR1Y2VcbiAqXG4gKiBBIGZhc3Qgb2JqZWN0IGAucmVkdWNlKClgIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwYXJhbSAge09iamVjdH0gICBzdWJqZWN0ICAgICAgVGhlIG9iamVjdCB0byByZWR1Y2Ugb3Zlci5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiAgICAgICAgICAgVGhlIHJlZHVjZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHttaXhlZH0gICAgaW5pdGlhbFZhbHVlIFRoZSBpbml0aWFsIHZhbHVlIGZvciB0aGUgcmVkdWNlciwgZGVmYXVsdHMgdG8gc3ViamVjdFswXS5cbiAqIEBwYXJhbSAge09iamVjdH0gICB0aGlzQ29udGV4dCAgVGhlIGNvbnRleHQgZm9yIHRoZSByZWR1Y2VyLlxuICogQHJldHVybiB7bWl4ZWR9ICAgICAgICAgICAgICAgICBUaGUgZmluYWwgcmVzdWx0LlxuICovXG5cblxudmFyIHJlZHVjZSA9IGZ1bmN0aW9uIGZhc3RSZWR1Y2VPYmplY3Qoc3ViamVjdCwgZm4sIGluaXRpYWxWYWx1ZSwgdGhpc0NvbnRleHQpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhzdWJqZWN0KSxcbiAgICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoLFxuICAgICAgaXRlcmF0b3IgPSB0aGlzQ29udGV4dCAhPT0gdW5kZWZpbmVkID8gYmluZEludGVybmFsNChmbiwgdGhpc0NvbnRleHQpIDogZm4sXG4gICAgICBpLFxuICAgICAga2V5LFxuICAgICAgcmVzdWx0O1xuXG4gIGlmIChpbml0aWFsVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGkgPSAxO1xuICAgIHJlc3VsdCA9IHN1YmplY3Rba2V5c1swXV07XG4gIH0gZWxzZSB7XG4gICAgaSA9IDA7XG4gICAgcmVzdWx0ID0gaW5pdGlhbFZhbHVlO1xuICB9XG5cbiAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGtleSA9IGtleXNbaV07XG4gICAgcmVzdWx0ID0gaXRlcmF0b3IocmVzdWx0LCBzdWJqZWN0W2tleV0sIGtleSwgc3ViamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gdG9IZXgodW5pY29kZSkge1xuICB2YXIgcmVzdWx0ID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB1bmljb2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGhleCA9IHVuaWNvZGUuY2hhckNvZGVBdChpKS50b1N0cmluZygxNik7XG4gICAgcmVzdWx0ICs9ICgnMDAwJyArIGhleCkuc2xpY2UoLTQpO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lSWNvbnMocHJlZml4LCBpY29ucykge1xuICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIF9wYXJhbXMkc2tpcEhvb2tzID0gcGFyYW1zLnNraXBIb29rcyxcbiAgICAgIHNraXBIb29rcyA9IF9wYXJhbXMkc2tpcEhvb2tzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc2tpcEhvb2tzO1xuICB2YXIgbm9ybWFsaXplZCA9IE9iamVjdC5rZXlzKGljb25zKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaWNvbk5hbWUpIHtcbiAgICB2YXIgaWNvbiA9IGljb25zW2ljb25OYW1lXTtcbiAgICB2YXIgZXhwYW5kZWQgPSAhIWljb24uaWNvbjtcblxuICAgIGlmIChleHBhbmRlZCkge1xuICAgICAgYWNjW2ljb24uaWNvbk5hbWVdID0gaWNvbi5pY29uO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NbaWNvbk5hbWVdID0gaWNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG5cbiAgaWYgKHR5cGVvZiBuYW1lc3BhY2UuaG9va3MuYWRkUGFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhc2tpcEhvb2tzKSB7XG4gICAgbmFtZXNwYWNlLmhvb2tzLmFkZFBhY2socHJlZml4LCBub3JtYWxpemVkKTtcbiAgfSBlbHNlIHtcbiAgICBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gPSBfb2JqZWN0U3ByZWFkKHt9LCBuYW1lc3BhY2Uuc3R5bGVzW3ByZWZpeF0gfHwge30sIG5vcm1hbGl6ZWQpO1xuICB9XG4gIC8qKlxuICAgKiBGb250IEF3ZXNvbWUgNCB1c2VkIHRoZSBwcmVmaXggb2YgYGZhYCBmb3IgYWxsIGljb25zLiBXaXRoIHRoZSBpbnRyb2R1Y3Rpb25cbiAgICogb2YgbmV3IHN0eWxlcyB3ZSBuZWVkZWQgdG8gZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZW0uIFByZWZpeCBgZmFgIGlzIG5vdyBhbiBhbGlhc1xuICAgKiBmb3IgYGZhc2Agc28gd2UnbGwgZWFzeSB0aGUgdXBncmFkZSBwcm9jZXNzIGZvciBvdXIgdXNlcnMgYnkgYXV0b21hdGljYWxseSBkZWZpbmluZ1xuICAgKiB0aGlzIGFzIHdlbGwuXG4gICAqL1xuXG5cbiAgaWYgKHByZWZpeCA9PT0gJ2ZhcycpIHtcbiAgICBkZWZpbmVJY29ucygnZmEnLCBpY29ucyk7XG4gIH1cbn1cblxudmFyIHN0eWxlcyA9IG5hbWVzcGFjZS5zdHlsZXMsXG4gICAgc2hpbXMgPSBuYW1lc3BhY2Uuc2hpbXM7XG52YXIgX2J5VW5pY29kZSA9IHt9O1xudmFyIF9ieUxpZ2F0dXJlID0ge307XG52YXIgX2J5T2xkTmFtZSA9IHt9O1xudmFyIGJ1aWxkID0gZnVuY3Rpb24gYnVpbGQoKSB7XG4gIHZhciBsb29rdXAgPSBmdW5jdGlvbiBsb29rdXAocmVkdWNlcikge1xuICAgIHJldHVybiByZWR1Y2Uoc3R5bGVzLCBmdW5jdGlvbiAobywgc3R5bGUsIHByZWZpeCkge1xuICAgICAgb1twcmVmaXhdID0gcmVkdWNlKHN0eWxlLCByZWR1Y2VyLCB7fSk7XG4gICAgICByZXR1cm4gbztcbiAgICB9LCB7fSk7XG4gIH07XG5cbiAgX2J5VW5pY29kZSA9IGxvb2t1cChmdW5jdGlvbiAoYWNjLCBpY29uLCBpY29uTmFtZSkge1xuICAgIGlmIChpY29uWzNdKSB7XG4gICAgICBhY2NbaWNvblszXV0gPSBpY29uTmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9KTtcbiAgX2J5TGlnYXR1cmUgPSBsb29rdXAoZnVuY3Rpb24gKGFjYywgaWNvbiwgaWNvbk5hbWUpIHtcbiAgICB2YXIgbGlnYXR1cmVzID0gaWNvblsyXTtcbiAgICBhY2NbaWNvbk5hbWVdID0gaWNvbk5hbWU7XG4gICAgbGlnYXR1cmVzLmZvckVhY2goZnVuY3Rpb24gKGxpZ2F0dXJlKSB7XG4gICAgICBhY2NbbGlnYXR1cmVdID0gaWNvbk5hbWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSk7XG4gIHZhciBoYXNSZWd1bGFyID0gJ2ZhcicgaW4gc3R5bGVzO1xuICBfYnlPbGROYW1lID0gcmVkdWNlKHNoaW1zLCBmdW5jdGlvbiAoYWNjLCBzaGltKSB7XG4gICAgdmFyIG9sZE5hbWUgPSBzaGltWzBdO1xuICAgIHZhciBwcmVmaXggPSBzaGltWzFdO1xuICAgIHZhciBpY29uTmFtZSA9IHNoaW1bMl07XG5cbiAgICBpZiAocHJlZml4ID09PSAnZmFyJyAmJiAhaGFzUmVndWxhcikge1xuICAgICAgcHJlZml4ID0gJ2Zhcyc7XG4gICAgfVxuXG4gICAgYWNjW29sZE5hbWVdID0ge1xuICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICBpY29uTmFtZTogaWNvbk5hbWVcbiAgICB9O1xuICAgIHJldHVybiBhY2M7XG4gIH0sIHt9KTtcbn07XG5idWlsZCgpO1xuZnVuY3Rpb24gYnlVbmljb2RlKHByZWZpeCwgdW5pY29kZSkge1xuICByZXR1cm4gKF9ieVVuaWNvZGVbcHJlZml4XSB8fCB7fSlbdW5pY29kZV07XG59XG5mdW5jdGlvbiBieUxpZ2F0dXJlKHByZWZpeCwgbGlnYXR1cmUpIHtcbiAgcmV0dXJuIChfYnlMaWdhdHVyZVtwcmVmaXhdIHx8IHt9KVtsaWdhdHVyZV07XG59XG5mdW5jdGlvbiBieU9sZE5hbWUobmFtZSkge1xuICByZXR1cm4gX2J5T2xkTmFtZVtuYW1lXSB8fCB7XG4gICAgcHJlZml4OiBudWxsLFxuICAgIGljb25OYW1lOiBudWxsXG4gIH07XG59XG5cbnZhciBzdHlsZXMkMSA9IG5hbWVzcGFjZS5zdHlsZXM7XG52YXIgZW1wdHlDYW5vbmljYWxJY29uID0gZnVuY3Rpb24gZW1wdHlDYW5vbmljYWxJY29uKCkge1xuICByZXR1cm4ge1xuICAgIHByZWZpeDogbnVsbCxcbiAgICBpY29uTmFtZTogbnVsbCxcbiAgICByZXN0OiBbXVxuICB9O1xufTtcbmZ1bmN0aW9uIGdldENhbm9uaWNhbEljb24odmFsdWVzKSB7XG4gIHJldHVybiB2YWx1ZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNscykge1xuICAgIHZhciBpY29uTmFtZSA9IGdldEljb25OYW1lKGNvbmZpZy5mYW1pbHlQcmVmaXgsIGNscyk7XG5cbiAgICBpZiAoc3R5bGVzJDFbY2xzXSkge1xuICAgICAgYWNjLnByZWZpeCA9IGNscztcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5hdXRvRmV0Y2hTdmcgJiYgWydmYXMnLCAnZmFyJywgJ2ZhbCcsICdmYWQnLCAnZmFiJywgJ2ZhJ10uaW5kZXhPZihjbHMpID4gLTEpIHtcbiAgICAgIGFjYy5wcmVmaXggPSBjbHM7XG4gICAgfSBlbHNlIGlmIChpY29uTmFtZSkge1xuICAgICAgdmFyIHNoaW0gPSBhY2MucHJlZml4ID09PSAnZmEnID8gYnlPbGROYW1lKGljb25OYW1lKSA6IHt9O1xuICAgICAgYWNjLmljb25OYW1lID0gc2hpbS5pY29uTmFtZSB8fCBpY29uTmFtZTtcbiAgICAgIGFjYy5wcmVmaXggPSBzaGltLnByZWZpeCB8fCBhY2MucHJlZml4O1xuICAgIH0gZWxzZSBpZiAoY2xzICE9PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyAmJiBjbHMuaW5kZXhPZignZmEtdy0nKSAhPT0gMCkge1xuICAgICAgYWNjLnJlc3QucHVzaChjbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIGVtcHR5Q2Fub25pY2FsSWNvbigpKTtcbn1cbmZ1bmN0aW9uIGljb25Gcm9tTWFwcGluZyhtYXBwaW5nLCBwcmVmaXgsIGljb25OYW1lKSB7XG4gIGlmIChtYXBwaW5nICYmIG1hcHBpbmdbcHJlZml4XSAmJiBtYXBwaW5nW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgaWNvbjogbWFwcGluZ1twcmVmaXhdW2ljb25OYW1lXVxuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9IdG1sKGFic3RyYWN0Tm9kZXMpIHtcbiAgdmFyIHRhZyA9IGFic3RyYWN0Tm9kZXMudGFnLFxuICAgICAgX2Fic3RyYWN0Tm9kZXMkYXR0cmliID0gYWJzdHJhY3ROb2Rlcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9hYnN0cmFjdE5vZGVzJGF0dHJpYiA9PT0gdm9pZCAwID8ge30gOiBfYWJzdHJhY3ROb2RlcyRhdHRyaWIsXG4gICAgICBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPSBhYnN0cmFjdE5vZGVzLmNoaWxkcmVuLFxuICAgICAgY2hpbGRyZW4gPSBfYWJzdHJhY3ROb2RlcyRjaGlsZHIgPT09IHZvaWQgMCA/IFtdIDogX2Fic3RyYWN0Tm9kZXMkY2hpbGRyO1xuXG4gIGlmICh0eXBlb2YgYWJzdHJhY3ROb2RlcyA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gaHRtbEVzY2FwZShhYnN0cmFjdE5vZGVzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCI8XCIuY29uY2F0KHRhZywgXCIgXCIpLmNvbmNhdChqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSwgXCI+XCIpLmNvbmNhdChjaGlsZHJlbi5tYXAodG9IdG1sKS5qb2luKCcnKSwgXCI8L1wiKS5jb25jYXQodGFnLCBcIj5cIik7XG4gIH1cbn1cblxudmFyIG5vb3AkMiA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxuZnVuY3Rpb24gaXNXYXRjaGVkKG5vZGUpIHtcbiAgdmFyIGkyc3ZnID0gbm9kZS5nZXRBdHRyaWJ1dGUgPyBub2RlLmdldEF0dHJpYnV0ZShEQVRBX0ZBX0kyU1ZHKSA6IG51bGw7XG4gIHJldHVybiB0eXBlb2YgaTJzdmcgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBnZXRNdXRhdG9yKCkge1xuICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIG11dGF0b3JzLnJlcGxhY2U7XG4gIH1cblxuICB2YXIgbXV0YXRvciA9IG11dGF0b3JzW2NvbmZpZy5hdXRvUmVwbGFjZVN2Z107XG4gIHJldHVybiBtdXRhdG9yIHx8IG11dGF0b3JzLnJlcGxhY2U7XG59XG5cbnZhciBtdXRhdG9ycyA9IHtcbiAgcmVwbGFjZTogZnVuY3Rpb24gcmVwbGFjZShtdXRhdGlvbikge1xuICAgIHZhciBub2RlID0gbXV0YXRpb25bMF07XG4gICAgdmFyIGFic3RyYWN0ID0gbXV0YXRpb25bMV07XG4gICAgdmFyIG5ld091dGVySFRNTCA9IGFic3RyYWN0Lm1hcChmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIHRvSHRtbChhKTtcbiAgICB9KS5qb2luKCdcXG4nKTtcblxuICAgIGlmIChub2RlLnBhcmVudE5vZGUgJiYgbm9kZS5vdXRlckhUTUwpIHtcbiAgICAgIG5vZGUub3V0ZXJIVE1MID0gbmV3T3V0ZXJIVE1MICsgKGNvbmZpZy5rZWVwT3JpZ2luYWxTb3VyY2UgJiYgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICdzdmcnID8gXCI8IS0tIFwiLmNvbmNhdChub2RlLm91dGVySFRNTCwgXCIgLS0+XCIpIDogJycpO1xuICAgIH0gZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICB2YXIgbmV3Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Tm9kZSwgbm9kZSk7XG4gICAgICBuZXdOb2RlLm91dGVySFRNTCA9IG5ld091dGVySFRNTDtcbiAgICB9XG4gIH0sXG4gIG5lc3Q6IGZ1bmN0aW9uIG5lc3QobXV0YXRpb24pIHtcbiAgICB2YXIgbm9kZSA9IG11dGF0aW9uWzBdO1xuICAgIHZhciBhYnN0cmFjdCA9IG11dGF0aW9uWzFdOyAvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYSByZXBsYWNlZCBub2RlIHdlIGRvIG5vdCB3YW50IHRvIGNvbnRpbnVlIG5lc3Rpbmcgd2l0aGluIGl0LlxuICAgIC8vIFNob3J0LWNpcmN1aXQgdG8gdGhlIHN0YW5kYXJkIHJlcGxhY2VtZW50XG5cbiAgICBpZiAofmNsYXNzQXJyYXkobm9kZSkuaW5kZXhPZihjb25maWcucmVwbGFjZW1lbnRDbGFzcykpIHtcbiAgICAgIHJldHVybiBtdXRhdG9ycy5yZXBsYWNlKG11dGF0aW9uKTtcbiAgICB9XG5cbiAgICB2YXIgZm9yU3ZnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi0uKlwiKSk7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuc3R5bGU7XG4gICAgZGVsZXRlIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuaWQ7XG4gICAgdmFyIHNwbGl0Q2xhc3NlcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3Muc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xzKSB7XG4gICAgICBpZiAoY2xzID09PSBjb25maWcucmVwbGFjZW1lbnRDbGFzcyB8fCBjbHMubWF0Y2goZm9yU3ZnKSkge1xuICAgICAgICBhY2MudG9TdmcucHVzaChjbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWNjLnRvTm9kZS5wdXNoKGNscyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge1xuICAgICAgdG9Ob2RlOiBbXSxcbiAgICAgIHRvU3ZnOiBbXVxuICAgIH0pO1xuICAgIGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3MgPSBzcGxpdENsYXNzZXMudG9Tdmcuam9pbignICcpO1xuICAgIHZhciBuZXdJbm5lckhUTUwgPSBhYnN0cmFjdC5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgfSkuam9pbignXFxuJyk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgc3BsaXRDbGFzc2VzLnRvTm9kZS5qb2luKCcgJykpO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKERBVEFfRkFfSTJTVkcsICcnKTtcbiAgICBub2RlLmlubmVySFRNTCA9IG5ld0lubmVySFRNTDtcbiAgfVxufTtcblxuZnVuY3Rpb24gcGVyZm9ybU9wZXJhdGlvblN5bmMob3ApIHtcbiAgb3AoKTtcbn1cblxuZnVuY3Rpb24gcGVyZm9ybShtdXRhdGlvbnMsIGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsYmFja0Z1bmN0aW9uID0gdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gY2FsbGJhY2sgOiBub29wJDI7XG5cbiAgaWYgKG11dGF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZyYW1lID0gcGVyZm9ybU9wZXJhdGlvblN5bmM7XG5cbiAgICBpZiAoY29uZmlnLm11dGF0ZUFwcHJvYWNoID09PSBNVVRBVElPTl9BUFBST0FDSF9BU1lOQykge1xuICAgICAgZnJhbWUgPSBXSU5ET1cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHBlcmZvcm1PcGVyYXRpb25TeW5jO1xuICAgIH1cblxuICAgIGZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBtdXRhdG9yID0gZ2V0TXV0YXRvcigpO1xuICAgICAgdmFyIG1hcmsgPSBwZXJmLmJlZ2luKCdtdXRhdGUnKTtcbiAgICAgIG11dGF0aW9ucy5tYXAobXV0YXRvcik7XG4gICAgICBtYXJrKCk7XG4gICAgICBjYWxsYmFja0Z1bmN0aW9uKCk7XG4gICAgfSk7XG4gIH1cbn1cbnZhciBkaXNhYmxlZCA9IGZhbHNlO1xuZnVuY3Rpb24gZGlzYWJsZU9ic2VydmF0aW9uKCkge1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG5mdW5jdGlvbiBlbmFibGVPYnNlcnZhdGlvbigpIHtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbn1cbnZhciBtbyA9IG51bGw7XG5mdW5jdGlvbiBvYnNlcnZlKG9wdGlvbnMpIHtcbiAgaWYgKCFNVVRBVElPTl9PQlNFUlZFUikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghY29uZmlnLm9ic2VydmVNdXRhdGlvbnMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdHJlZUNhbGxiYWNrID0gb3B0aW9ucy50cmVlQ2FsbGJhY2ssXG4gICAgICBub2RlQ2FsbGJhY2sgPSBvcHRpb25zLm5vZGVDYWxsYmFjayxcbiAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sgPSBvcHRpb25zLnBzZXVkb0VsZW1lbnRzQ2FsbGJhY2ssXG4gICAgICBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPSBvcHRpb25zLm9ic2VydmVNdXRhdGlvbnNSb290LFxuICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBfb3B0aW9ucyRvYnNlcnZlTXV0YXQgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX29wdGlvbnMkb2JzZXJ2ZU11dGF0O1xuICBtbyA9IG5ldyBNVVRBVElPTl9PQlNFUlZFUihmdW5jdGlvbiAob2JqZWN0cykge1xuICAgIGlmIChkaXNhYmxlZCkgcmV0dXJuO1xuICAgIHRvQXJyYXkob2JqZWN0cykuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb25SZWNvcmQpIHtcbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzLmxlbmd0aCA+IDAgJiYgIWlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC5hZGRlZE5vZGVzWzBdKSkge1xuICAgICAgICBpZiAoY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgICAgcHNldWRvRWxlbWVudHNDYWxsYmFjayhtdXRhdGlvblJlY29yZC50YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJlZUNhbGxiYWNrKG11dGF0aW9uUmVjb3JkLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdXRhdGlvblJlY29yZC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUgJiYgY29uZmlnLnNlYXJjaFBzZXVkb0VsZW1lbnRzKSB7XG4gICAgICAgIHBzZXVkb0VsZW1lbnRzQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0LnBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXV0YXRpb25SZWNvcmQudHlwZSA9PT0gJ2F0dHJpYnV0ZXMnICYmIGlzV2F0Y2hlZChtdXRhdGlvblJlY29yZC50YXJnZXQpICYmIH5BVFRSSUJVVEVTX1dBVENIRURfRk9SX01VVEFUSU9OLmluZGV4T2YobXV0YXRpb25SZWNvcmQuYXR0cmlidXRlTmFtZSkpIHtcbiAgICAgICAgaWYgKG11dGF0aW9uUmVjb3JkLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICB2YXIgX2dldENhbm9uaWNhbEljb24gPSBnZXRDYW5vbmljYWxJY29uKGNsYXNzQXJyYXkobXV0YXRpb25SZWNvcmQudGFyZ2V0KSksXG4gICAgICAgICAgICAgIHByZWZpeCA9IF9nZXRDYW5vbmljYWxJY29uLnByZWZpeCxcbiAgICAgICAgICAgICAgaWNvbk5hbWUgPSBfZ2V0Q2Fub25pY2FsSWNvbi5pY29uTmFtZTtcblxuICAgICAgICAgIGlmIChwcmVmaXgpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4JywgcHJlZml4KTtcbiAgICAgICAgICBpZiAoaWNvbk5hbWUpIG11dGF0aW9uUmVjb3JkLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicsIGljb25OYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlQ2FsbGJhY2sobXV0YXRpb25SZWNvcmQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgaWYgKCFJU19ET00pIHJldHVybjtcbiAgbW8ub2JzZXJ2ZShvYnNlcnZlTXV0YXRpb25zUm9vdCwge1xuICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgc3VidHJlZTogdHJ1ZVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gIGlmICghbW8pIHJldHVybjtcbiAgbW8uZGlzY29ubmVjdCgpO1xufVxuXG5mdW5jdGlvbiBzdHlsZVBhcnNlciAobm9kZSkge1xuICB2YXIgc3R5bGUgPSBub2RlLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgdmFyIHZhbCA9IFtdO1xuXG4gIGlmIChzdHlsZSkge1xuICAgIHZhbCA9IHN0eWxlLnNwbGl0KCc7JykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHN0eWxlKSB7XG4gICAgICB2YXIgc3R5bGVzID0gc3R5bGUuc3BsaXQoJzonKTtcbiAgICAgIHZhciBwcm9wID0gc3R5bGVzWzBdO1xuICAgICAgdmFyIHZhbHVlID0gc3R5bGVzLnNsaWNlKDEpO1xuXG4gICAgICBpZiAocHJvcCAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjY1twcm9wXSA9IHZhbHVlLmpvaW4oJzonKS50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgcmV0dXJuIHZhbDtcbn1cblxuZnVuY3Rpb24gY2xhc3NQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIGV4aXN0aW5nUHJlZml4ID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZml4Jyk7XG4gIHZhciBleGlzdGluZ0ljb25OYW1lID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xuICB2YXIgaW5uZXJUZXh0ID0gbm9kZS5pbm5lclRleHQgIT09IHVuZGVmaW5lZCA/IG5vZGUuaW5uZXJUZXh0LnRyaW0oKSA6ICcnO1xuICB2YXIgdmFsID0gZ2V0Q2Fub25pY2FsSWNvbihjbGFzc0FycmF5KG5vZGUpKTtcblxuICBpZiAoZXhpc3RpbmdQcmVmaXggJiYgZXhpc3RpbmdJY29uTmFtZSkge1xuICAgIHZhbC5wcmVmaXggPSBleGlzdGluZ1ByZWZpeDtcbiAgICB2YWwuaWNvbk5hbWUgPSBleGlzdGluZ0ljb25OYW1lO1xuICB9XG5cbiAgaWYgKHZhbC5wcmVmaXggJiYgaW5uZXJUZXh0Lmxlbmd0aCA+IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieUxpZ2F0dXJlKHZhbC5wcmVmaXgsIG5vZGUuaW5uZXJUZXh0KTtcbiAgfSBlbHNlIGlmICh2YWwucHJlZml4ICYmIGlubmVyVGV4dC5sZW5ndGggPT09IDEpIHtcbiAgICB2YWwuaWNvbk5hbWUgPSBieVVuaWNvZGUodmFsLnByZWZpeCwgdG9IZXgobm9kZS5pbm5lclRleHQpKTtcbiAgfVxuXG4gIHJldHVybiB2YWw7XG59XG5cbnZhciBwYXJzZVRyYW5zZm9ybVN0cmluZyA9IGZ1bmN0aW9uIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZykge1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHNpemU6IDE2LFxuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBmbGlwWDogZmFsc2UsXG4gICAgZmxpcFk6IGZhbHNlLFxuICAgIHJvdGF0ZTogMFxuICB9O1xuXG4gIGlmICghdHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtU3RyaW5nLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbikge1xuICAgICAgdmFyIHBhcnRzID0gbi50b0xvd2VyQ2FzZSgpLnNwbGl0KCctJyk7XG4gICAgICB2YXIgZmlyc3QgPSBwYXJ0c1swXTtcbiAgICAgIHZhciByZXN0ID0gcGFydHMuc2xpY2UoMSkuam9pbignLScpO1xuXG4gICAgICBpZiAoZmlyc3QgJiYgcmVzdCA9PT0gJ2gnKSB7XG4gICAgICAgIGFjYy5mbGlwWCA9IHRydWU7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIGlmIChmaXJzdCAmJiByZXN0ID09PSAndicpIHtcbiAgICAgICAgYWNjLmZsaXBZID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmVzdCA9IHBhcnNlRmxvYXQocmVzdCk7XG5cbiAgICAgIGlmIChpc05hTihyZXN0KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGZpcnN0KSB7XG4gICAgICAgIGNhc2UgJ2dyb3cnOlxuICAgICAgICAgIGFjYy5zaXplID0gYWNjLnNpemUgKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Nocmluayc6XG4gICAgICAgICAgYWNjLnNpemUgPSBhY2Muc2l6ZSAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgYWNjLnggPSBhY2MueCAtIHJlc3Q7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGFjYy54ID0gYWNjLnggKyByZXN0O1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55IC0gcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICBhY2MueSA9IGFjYy55ICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyb3RhdGUnOlxuICAgICAgICAgIGFjYy5yb3RhdGUgPSBhY2Mucm90YXRlICsgcmVzdDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0cmFuc2Zvcm0pO1xuICB9XG59O1xuZnVuY3Rpb24gdHJhbnNmb3JtUGFyc2VyIChub2RlKSB7XG4gIHJldHVybiBwYXJzZVRyYW5zZm9ybVN0cmluZyhub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS10cmFuc2Zvcm0nKSk7XG59XG5cbmZ1bmN0aW9uIHN5bWJvbFBhcnNlciAobm9kZSkge1xuICB2YXIgc3ltYm9sID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmEtc3ltYm9sJyk7XG4gIHJldHVybiBzeW1ib2wgPT09IG51bGwgPyBmYWxzZSA6IHN5bWJvbCA9PT0gJycgPyB0cnVlIDogc3ltYm9sO1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzUGFyc2VyIChub2RlKSB7XG4gIHZhciBleHRyYUF0dHJpYnV0ZXMgPSB0b0FycmF5KG5vZGUuYXR0cmlidXRlcykucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGF0dHIpIHtcbiAgICBpZiAoYWNjLm5hbWUgIT09ICdjbGFzcycgJiYgYWNjLm5hbWUgIT09ICdzdHlsZScpIHtcbiAgICAgIGFjY1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG4gIHZhciB0aXRsZSA9IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuXG4gIGlmIChjb25maWcuYXV0b0ExMXkpIHtcbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1sYWJlbGxlZGJ5J10gPSBcIlwiLmNvbmNhdChjb25maWcucmVwbGFjZW1lbnRDbGFzcywgXCItdGl0bGUtXCIpLmNvbmNhdChuZXh0VW5pcXVlSWQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgIGV4dHJhQXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBleHRyYUF0dHJpYnV0ZXM7XG59XG5cbmZ1bmN0aW9uIG1hc2tQYXJzZXIgKG5vZGUpIHtcbiAgdmFyIG1hc2sgPSBub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1mYS1tYXNrJyk7XG5cbiAgaWYgKCFtYXNrKSB7XG4gICAgcmV0dXJuIGVtcHR5Q2Fub25pY2FsSWNvbigpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBnZXRDYW5vbmljYWxJY29uKG1hc2suc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpLnRyaW0oKTtcbiAgICB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmxhbmtNZXRhKCkge1xuICByZXR1cm4ge1xuICAgIGljb25OYW1lOiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG1lYW5pbmdsZXNzVHJhbnNmb3JtLFxuICAgIHN5bWJvbDogZmFsc2UsXG4gICAgbWFzazogbnVsbCxcbiAgICBleHRyYToge1xuICAgICAgY2xhc3NlczogW10sXG4gICAgICBzdHlsZXM6IHt9LFxuICAgICAgYXR0cmlidXRlczoge31cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBwYXJzZU1ldGEobm9kZSkge1xuICB2YXIgX2NsYXNzUGFyc2VyID0gY2xhc3NQYXJzZXIobm9kZSksXG4gICAgICBpY29uTmFtZSA9IF9jbGFzc1BhcnNlci5pY29uTmFtZSxcbiAgICAgIHByZWZpeCA9IF9jbGFzc1BhcnNlci5wcmVmaXgsXG4gICAgICBleHRyYUNsYXNzZXMgPSBfY2xhc3NQYXJzZXIucmVzdDtcblxuICB2YXIgZXh0cmFTdHlsZXMgPSBzdHlsZVBhcnNlcihub2RlKTtcbiAgdmFyIHRyYW5zZm9ybSA9IHRyYW5zZm9ybVBhcnNlcihub2RlKTtcbiAgdmFyIHN5bWJvbCA9IHN5bWJvbFBhcnNlcihub2RlKTtcbiAgdmFyIGV4dHJhQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNQYXJzZXIobm9kZSk7XG4gIHZhciBtYXNrID0gbWFza1BhcnNlcihub2RlKTtcbiAgcmV0dXJuIHtcbiAgICBpY29uTmFtZTogaWNvbk5hbWUsXG4gICAgdGl0bGU6IG5vZGUuZ2V0QXR0cmlidXRlKCd0aXRsZScpLFxuICAgIHByZWZpeDogcHJlZml4LFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHN5bWJvbDogc3ltYm9sLFxuICAgIG1hc2s6IG1hc2ssXG4gICAgZXh0cmE6IHtcbiAgICAgIGNsYXNzZXM6IGV4dHJhQ2xhc3NlcyxcbiAgICAgIHN0eWxlczogZXh0cmFTdHlsZXMsXG4gICAgICBhdHRyaWJ1dGVzOiBleHRyYUF0dHJpYnV0ZXNcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIE1pc3NpbmdJY29uKGVycm9yKSB7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nSWNvbic7XG4gIHRoaXMubWVzc2FnZSA9IGVycm9yIHx8ICdJY29uIHVuYXZhaWxhYmxlJztcbiAgdGhpcy5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xufVxuTWlzc2luZ0ljb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuTWlzc2luZ0ljb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTWlzc2luZ0ljb247XG5cbnZhciBGSUxMID0ge1xuICBmaWxsOiAnY3VycmVudENvbG9yJ1xufTtcbnZhciBBTklNQVRJT05fQkFTRSA9IHtcbiAgYXR0cmlidXRlVHlwZTogJ1hNTCcsXG4gIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZScsXG4gIGR1cjogJzJzJ1xufTtcbnZhciBSSU5HID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIGQ6ICdNMTU2LjUsNDQ3LjdsLTEyLjYsMjkuNWMtMTguNy05LjUtMzUuOS0yMS4yLTUxLjUtMzQuOWwyMi43LTIyLjdDMTI3LjYsNDMwLjUsMTQxLjUsNDQwLDE1Ni41LDQ0Ny43eiBNNDAuNiwyNzJIOC41IGMxLjQsMjEuMiw1LjQsNDEuNywxMS43LDYxLjFMNTAsMzIxLjJDNDUuMSwzMDUuNSw0MS44LDI4OSw0MC42LDI3MnogTTQwLjYsMjQwYzEuNC0xOC44LDUuMi0zNywxMS4xLTU0LjFsLTI5LjUtMTIuNiBDMTQuNywxOTQuMywxMCwyMTYuNyw4LjUsMjQwSDQwLjZ6IE02NC4zLDE1Ni41YzcuOC0xNC45LDE3LjItMjguOCwyOC4xLTQxLjVMNjkuNyw5Mi4zYy0xMy43LDE1LjYtMjUuNSwzMi44LTM0LjksNTEuNSBMNjQuMywxNTYuNXogTTM5Nyw0MTkuNmMtMTMuOSwxMi0yOS40LDIyLjMtNDYuMSwzMC40bDExLjksMjkuOGMyMC43LTkuOSwzOS44LTIyLjYsNTYuOS0zNy42TDM5Nyw0MTkuNnogTTExNSw5Mi40IGMxMy45LTEyLDI5LjQtMjIuMyw0Ni4xLTMwLjRsLTExLjktMjkuOGMtMjAuNyw5LjktMzkuOCwyMi42LTU2LjgsMzcuNkwxMTUsOTIuNHogTTQ0Ny43LDM1NS41Yy03LjgsMTQuOS0xNy4yLDI4LjgtMjguMSw0MS41IGwyMi43LDIyLjdjMTMuNy0xNS42LDI1LjUtMzIuOSwzNC45LTUxLjVMNDQ3LjcsMzU1LjV6IE00NzEuNCwyNzJjLTEuNCwxOC44LTUuMiwzNy0xMS4xLDU0LjFsMjkuNSwxMi42IGM3LjUtMjEuMSwxMi4yLTQzLjUsMTMuNi02Ni44SDQ3MS40eiBNMzIxLjIsNDYyYy0xNS43LDUtMzIuMiw4LjItNDkuMiw5LjR2MzIuMWMyMS4yLTEuNCw0MS43LTUuNCw2MS4xLTExLjdMMzIxLjIsNDYyeiBNMjQwLDQ3MS40Yy0xOC44LTEuNC0zNy01LjItNTQuMS0xMS4xbC0xMi42LDI5LjVjMjEuMSw3LjUsNDMuNSwxMi4yLDY2LjgsMTMuNlY0NzEuNHogTTQ2MiwxOTAuOGM1LDE1LjcsOC4yLDMyLjIsOS40LDQ5LjJoMzIuMSBjLTEuNC0yMS4yLTUuNC00MS43LTExLjctNjEuMUw0NjIsMTkwLjh6IE05Mi40LDM5N2MtMTItMTMuOS0yMi4zLTI5LjQtMzAuNC00Ni4xbC0yOS44LDExLjljOS45LDIwLjcsMjIuNiwzOS44LDM3LjYsNTYuOSBMOTIuNCwzOTd6IE0yNzIsNDAuNmMxOC44LDEuNCwzNi45LDUuMiw1NC4xLDExLjFsMTIuNi0yOS41QzMxNy43LDE0LjcsMjk1LjMsMTAsMjcyLDguNVY0MC42eiBNMTkwLjgsNTAgYzE1LjctNSwzMi4yLTguMiw0OS4yLTkuNFY4LjVjLTIxLjIsMS40LTQxLjcsNS40LTYxLjEsMTEuN0wxOTAuOCw1MHogTTQ0Mi4zLDkyLjNMNDE5LjYsMTE1YzEyLDEzLjksMjIuMywyOS40LDMwLjUsNDYuMSBsMjkuOC0xMS45QzQ3MCwxMjguNSw0NTcuMywxMDkuNCw0NDIuMyw5Mi4zeiBNMzk3LDkyLjRsMjIuNy0yMi43Yy0xNS42LTEzLjctMzIuOC0yNS41LTUxLjUtMzQuOWwtMTIuNiwyOS41IEMzNzAuNCw3Mi4xLDM4NC40LDgxLjUsMzk3LDkyLjR6J1xuICB9KVxufTtcblxudmFyIE9QQUNJVFlfQU5JTUFURSA9IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gIGF0dHJpYnV0ZU5hbWU6ICdvcGFjaXR5J1xufSk7XG5cbnZhciBET1QgPSB7XG4gIHRhZzogJ2NpcmNsZScsXG4gIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEZJTEwsIHtcbiAgICBjeDogJzI1NicsXG4gICAgY3k6ICczNjQnLFxuICAgIHI6ICcyOCdcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIEFOSU1BVElPTl9CQVNFLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICB2YWx1ZXM6ICcyODsxNDsyODsyODsxNDsyODsnXG4gICAgfSlcbiAgfSwge1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzE7MTswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIFFVRVNUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcxJyxcbiAgICBkOiAnTTI2My43LDMxMmgtMTZjLTYuNiwwLTEyLTUuNC0xMi0xMmMwLTcxLDc3LjQtNjMuOSw3Ny40LTEwNy44YzAtMjAtMTcuOC00MC4yLTU3LjQtNDAuMmMtMjkuMSwwLTQ0LjMsOS42LTU5LjIsMjguNyBjLTMuOSw1LTExLjEsNi0xNi4yLDIuNGwtMTMuMS05LjJjLTUuNi0zLjktNi45LTExLjgtMi42LTE3LjJjMjEuMi0yNy4yLDQ2LjQtNDQuNyw5MS4yLTQ0LjdjNTIuMywwLDk3LjQsMjkuOCw5Ny40LDgwLjIgYzAsNjcuNi03Ny40LDYzLjUtNzcuNCwxMDcuOEMyNzUuNywzMDYuNiwyNzAuMywzMTIsMjYzLjcsMzEyeidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMTswOzA7MDswOzE7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIEVYQ0xBTUFUSU9OID0ge1xuICB0YWc6ICdwYXRoJyxcbiAgYXR0cmlidXRlczogX29iamVjdFNwcmVhZCh7fSwgRklMTCwge1xuICAgIG9wYWNpdHk6ICcwJyxcbiAgICBkOiAnTTIzMi41LDEzNC41bDcsMTY4YzAuMyw2LjQsNS42LDExLjUsMTIsMTEuNWg5YzYuNCwwLDExLjctNS4xLDEyLTExLjVsNy0xNjhjMC4zLTYuOC01LjItMTIuNS0xMi0xMi41aC0yMyBDMjM3LjcsMTIyLDIzMi4yLDEyNy43LDIzMi41LDEzNC41eidcbiAgfSksXG4gIGNoaWxkcmVuOiBbe1xuICAgIHRhZzogJ2FuaW1hdGUnLFxuICAgIGF0dHJpYnV0ZXM6IF9vYmplY3RTcHJlYWQoe30sIE9QQUNJVFlfQU5JTUFURSwge1xuICAgICAgdmFsdWVzOiAnMDswOzE7MTswOzA7J1xuICAgIH0pXG4gIH1dXG59O1xudmFyIG1pc3NpbmcgPSB7XG4gIHRhZzogJ2cnLFxuICBjaGlsZHJlbjogW1JJTkcsIERPVCwgUVVFU1RJT04sIEVYQ0xBTUFUSU9OXVxufTtcblxudmFyIHN0eWxlcyQyID0gbmFtZXNwYWNlLnN0eWxlcztcbmZ1bmN0aW9uIGFzRm91bmRJY29uKGljb24pIHtcbiAgdmFyIHdpZHRoID0gaWNvblswXTtcbiAgdmFyIGhlaWdodCA9IGljb25bMV07XG5cbiAgdmFyIF9pY29uJHNsaWNlID0gaWNvbi5zbGljZSg0KSxcbiAgICAgIF9pY29uJHNsaWNlMiA9IF9zbGljZWRUb0FycmF5KF9pY29uJHNsaWNlLCAxKSxcbiAgICAgIHZlY3RvckRhdGEgPSBfaWNvbiRzbGljZTJbMF07XG5cbiAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZlY3RvckRhdGEpKSB7XG4gICAgZWxlbWVudCA9IHtcbiAgICAgIHRhZzogJ2cnLFxuICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICBjbGFzczogXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItXCIpLmNvbmNhdChEVU9UT05FX0NMQVNTRVMuR1JPVVApXG4gICAgICB9LFxuICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlNFQ09OREFSWSksXG4gICAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgICAgZDogdmVjdG9yRGF0YVswXVxuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIHRhZzogJ3BhdGgnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6IFwiXCIuY29uY2F0KGNvbmZpZy5mYW1pbHlQcmVmaXgsIFwiLVwiKS5jb25jYXQoRFVPVE9ORV9DTEFTU0VTLlBSSU1BUlkpLFxuICAgICAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgICAgIGQ6IHZlY3RvckRhdGFbMV1cbiAgICAgICAgfVxuICAgICAgfV1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQgPSB7XG4gICAgICB0YWc6ICdwYXRoJyxcbiAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICAgIGQ6IHZlY3RvckRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3VuZDogdHJ1ZSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgaWNvbjogZWxlbWVudFxuICB9O1xufVxuZnVuY3Rpb24gZmluZEljb24oaWNvbk5hbWUsIHByZWZpeCkge1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHZhbCA9IHtcbiAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgIHdpZHRoOiA1MTIsXG4gICAgICBoZWlnaHQ6IDUxMixcbiAgICAgIGljb246IG1pc3NpbmdcbiAgICB9O1xuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiBzdHlsZXMkMltwcmVmaXhdICYmIHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdKSB7XG4gICAgICB2YXIgaWNvbiA9IHN0eWxlcyQyW3ByZWZpeF1baWNvbk5hbWVdO1xuICAgICAgcmV0dXJuIHJlc29sdmUoYXNGb3VuZEljb24oaWNvbikpO1xuICAgIH1cblxuICAgIHZhciBoZWFkZXJzID0ge307XG5cbiAgICBpZiAoX3R5cGVvZihXSU5ET1cuRm9udEF3ZXNvbWVLaXRDb25maWcpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnLnRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgaGVhZGVyc1snZmEta2l0LXRva2VuJ10gPSBXSU5ET1cuRm9udEF3ZXNvbWVLaXRDb25maWcudG9rZW47XG4gICAgfVxuXG4gICAgaWYgKGljb25OYW1lICYmIHByZWZpeCAmJiAhY29uZmlnLnNob3dNaXNzaW5nSWNvbnMpIHtcbiAgICAgIHJlamVjdChuZXcgTWlzc2luZ0ljb24oXCJJY29uIGlzIG1pc3NpbmcgZm9yIHByZWZpeCBcIi5jb25jYXQocHJlZml4LCBcIiB3aXRoIGljb24gbmFtZSBcIikuY29uY2F0KGljb25OYW1lKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHZhbCk7XG4gICAgfVxuICB9KTtcbn1cblxudmFyIHN0eWxlcyQzID0gbmFtZXNwYWNlLnN0eWxlcztcblxuZnVuY3Rpb24gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKSB7XG4gIHZhciBpY29uTmFtZSA9IG5vZGVNZXRhLmljb25OYW1lLFxuICAgICAgdGl0bGUgPSBub2RlTWV0YS50aXRsZSxcbiAgICAgIHByZWZpeCA9IG5vZGVNZXRhLnByZWZpeCxcbiAgICAgIHRyYW5zZm9ybSA9IG5vZGVNZXRhLnRyYW5zZm9ybSxcbiAgICAgIHN5bWJvbCA9IG5vZGVNZXRhLnN5bWJvbCxcbiAgICAgIG1hc2sgPSBub2RlTWV0YS5tYXNrLFxuICAgICAgZXh0cmEgPSBub2RlTWV0YS5leHRyYTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwoW2ZpbmRJY29uKGljb25OYW1lLCBwcmVmaXgpLCBmaW5kSWNvbihtYXNrLmljb25OYW1lLCBtYXNrLnByZWZpeCldKS50aGVuKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICBtYWluID0gX3JlZjJbMF0sXG4gICAgICAgICAgbWFzayA9IF9yZWYyWzFdO1xuXG4gICAgICByZXNvbHZlKFtub2RlLCBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgICBpY29uczoge1xuICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgbWFzazogbWFza1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICAgICAgc3ltYm9sOiBzeW1ib2wsXG4gICAgICAgIG1hc2s6IG1hc2ssXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZXh0cmE6IGV4dHJhLFxuICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgIH0pXSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxheWVyc1RleHQobm9kZSwgbm9kZU1ldGEpIHtcbiAgdmFyIHRpdGxlID0gbm9kZU1ldGEudGl0bGUsXG4gICAgICB0cmFuc2Zvcm0gPSBub2RlTWV0YS50cmFuc2Zvcm0sXG4gICAgICBleHRyYSA9IG5vZGVNZXRhLmV4dHJhO1xuICB2YXIgd2lkdGggPSBudWxsO1xuICB2YXIgaGVpZ2h0ID0gbnVsbDtcblxuICBpZiAoSVNfSUUpIHtcbiAgICB2YXIgY29tcHV0ZWRGb250U2l6ZSA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobm9kZSkuZm9udFNpemUsIDEwKTtcbiAgICB2YXIgYm91bmRpbmdDbGllbnRSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB3aWR0aCA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIGNvbXB1dGVkRm9udFNpemU7XG4gICAgaGVpZ2h0ID0gYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCAvIGNvbXB1dGVkRm9udFNpemU7XG4gIH1cblxuICBpZiAoY29uZmlnLmF1dG9BMTF5ICYmICF0aXRsZSkge1xuICAgIGV4dHJhLmF0dHJpYnV0ZXNbJ2FyaWEtaGlkZGVuJ10gPSAndHJ1ZSc7XG4gIH1cblxuICByZXR1cm4gcGlja2VkLnJlc29sdmUoW25vZGUsIG1ha2VMYXllcnNUZXh0QWJzdHJhY3Qoe1xuICAgIGNvbnRlbnQ6IG5vZGUuaW5uZXJIVE1MLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybSxcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgZXh0cmE6IGV4dHJhLFxuICAgIHdhdGNoYWJsZTogdHJ1ZVxuICB9KV0pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpIHtcbiAgdmFyIG5vZGVNZXRhID0gcGFyc2VNZXRhKG5vZGUpO1xuXG4gIGlmICh+bm9kZU1ldGEuZXh0cmEuY2xhc3Nlcy5pbmRleE9mKExBWUVSU19URVhUX0NMQVNTTkFNRSkpIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVMYXllcnNUZXh0KG5vZGUsIG5vZGVNZXRhKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVTdmdSZXBsYWNlbWVudE11dGF0aW9uKG5vZGUsIG5vZGVNZXRhKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblRyZWUocm9vdCkge1xuICB2YXIgY2FsbGJhY2sgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHZhciBodG1sQ2xhc3NMaXN0ID0gRE9DVU1FTlQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdDtcblxuICB2YXIgaGNsQWRkID0gZnVuY3Rpb24gaGNsQWRkKHN1ZmZpeCkge1xuICAgIHJldHVybiBodG1sQ2xhc3NMaXN0LmFkZChcIlwiLmNvbmNhdChIVE1MX0NMQVNTX0kyU1ZHX0JBU0VfQ0xBU1MsIFwiLVwiKS5jb25jYXQoc3VmZml4KSk7XG4gIH07XG5cbiAgdmFyIGhjbFJlbW92ZSA9IGZ1bmN0aW9uIGhjbFJlbW92ZShzdWZmaXgpIHtcbiAgICByZXR1cm4gaHRtbENsYXNzTGlzdC5yZW1vdmUoXCJcIi5jb25jYXQoSFRNTF9DTEFTU19JMlNWR19CQVNFX0NMQVNTLCBcIi1cIikuY29uY2F0KHN1ZmZpeCkpO1xuICB9O1xuXG4gIHZhciBwcmVmaXhlcyA9IGNvbmZpZy5hdXRvRmV0Y2hTdmcgPyBPYmplY3Qua2V5cyhQUkVGSVhfVE9fU1RZTEUpIDogT2JqZWN0LmtleXMoc3R5bGVzJDMpO1xuICB2YXIgcHJlZml4ZXNEb21RdWVyeSA9IFtcIi5cIi5jb25jYXQoTEFZRVJTX1RFWFRfQ0xBU1NOQU1FLCBcIjpub3QoW1wiKS5jb25jYXQoREFUQV9GQV9JMlNWRywgXCJdKVwiKV0uY29uY2F0KHByZWZpeGVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBcIi5cIi5jb25jYXQocCwgXCI6bm90KFtcIikuY29uY2F0KERBVEFfRkFfSTJTVkcsIFwiXSlcIik7XG4gIH0pKS5qb2luKCcsICcpO1xuXG4gIGlmIChwcmVmaXhlc0RvbVF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjYW5kaWRhdGVzID0gW107XG5cbiAgdHJ5IHtcbiAgICBjYW5kaWRhdGVzID0gdG9BcnJheShyb290LnF1ZXJ5U2VsZWN0b3JBbGwocHJlZml4ZXNEb21RdWVyeSkpO1xuICB9IGNhdGNoIChlKSB7Ly8gbm9vcFxuICB9XG5cbiAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgIGhjbEFkZCgncGVuZGluZycpO1xuICAgIGhjbFJlbW92ZSgnY29tcGxldGUnKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgbWFyayA9IHBlcmYuYmVnaW4oJ29uVHJlZScpO1xuICB2YXIgbXV0YXRpb25zID0gY2FuZGlkYXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgbm9kZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbXV0YXRpb24gPSBnZW5lcmF0ZU11dGF0aW9uKG5vZGUpO1xuXG4gICAgICBpZiAobXV0YXRpb24pIHtcbiAgICAgICAgYWNjLnB1c2gobXV0YXRpb24pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghUFJPRFVDVElPTikge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIE1pc3NpbmdJY29uKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIG5ldyBwaWNrZWQoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHBpY2tlZC5hbGwobXV0YXRpb25zKS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZE11dGF0aW9ucykge1xuICAgICAgcGVyZm9ybShyZXNvbHZlZE11dGF0aW9ucywgZnVuY3Rpb24gKCkge1xuICAgICAgICBoY2xBZGQoJ2FjdGl2ZScpO1xuICAgICAgICBoY2xBZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgIGhjbFJlbW92ZSgncGVuZGluZycpO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSBjYWxsYmFjaygpO1xuICAgICAgICBtYXJrKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIG1hcmsoKTtcbiAgICAgIHJlamVjdCgpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9uTm9kZShub2RlKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgZ2VuZXJhdGVNdXRhdGlvbihub2RlKS50aGVuKGZ1bmN0aW9uIChtdXRhdGlvbikge1xuICAgIGlmIChtdXRhdGlvbikge1xuICAgICAgcGVyZm9ybShbbXV0YXRpb25dLCBjYWxsYmFjayk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsIHBvc2l0aW9uKSB7XG4gIHZhciBwZW5kaW5nQXR0cmlidXRlID0gXCJcIi5jb25jYXQoREFUQV9GQV9QU0VVRE9fRUxFTUVOVF9QRU5ESU5HKS5jb25jYXQocG9zaXRpb24ucmVwbGFjZSgnOicsICctJykpO1xuICByZXR1cm4gbmV3IHBpY2tlZChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIG5vZGUgaXMgYWxyZWFkeSBiZWluZyBwcm9jZXNzZWRcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdG9BcnJheShub2RlLmNoaWxkcmVuKTtcbiAgICB2YXIgYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjLmdldEF0dHJpYnV0ZShEQVRBX0ZBX1BTRVVET19FTEVNRU5UKSA9PT0gcG9zaXRpb247XG4gICAgfSlbMF07XG4gICAgdmFyIHN0eWxlcyA9IFdJTkRPVy5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB2YXIgZm9udEZhbWlseSA9IHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpLm1hdGNoKEZPTlRfRkFNSUxZX1BBVFRFUk4pO1xuICAgIHZhciBmb250V2VpZ2h0ID0gc3R5bGVzLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtd2VpZ2h0Jyk7XG5cbiAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQgJiYgIWZvbnRGYW1pbHkpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgcHJvY2Vzc2VkIGl0IGJ1dCB0aGUgY3VycmVudCBjb21wdXRlZCBzdHlsZSBkb2VzIG5vdCByZXN1bHQgaW4gYSBmb250LWZhbWlseSxcbiAgICAgIC8vIHRoYXQgcHJvYmFibHkgbWVhbnMgdGhhdCBhIGNsYXNzIG5hbWUgdGhhdCB3YXMgcHJldmlvdXNseSBwcmVzZW50IHRvIG1ha2UgdGhlIGljb24gaGFzIGJlZW5cbiAgICAgIC8vIHJlbW92ZWQuIFNvIHdlIG5vdyBzaG91bGQgZGVsZXRlIHRoZSBpY29uLlxuICAgICAgbm9kZS5yZW1vdmVDaGlsZChhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudCk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0gZWxzZSBpZiAoZm9udEZhbWlseSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgICAgdmFyIHByZWZpeCA9IH5bJ1NvbGlkJywgJ1JlZ3VsYXInLCAnTGlnaHQnLCAnRHVvdG9uZScsICdCcmFuZHMnXS5pbmRleE9mKGZvbnRGYW1pbHlbMV0pID8gU1RZTEVfVE9fUFJFRklYW2ZvbnRGYW1pbHlbMV0udG9Mb3dlckNhc2UoKV0gOiBGT05UX1dFSUdIVF9UT19QUkVGSVhbZm9udFdlaWdodF07XG4gICAgICB2YXIgaGV4VmFsdWUgPSB0b0hleChjb250ZW50Lmxlbmd0aCA9PT0gMyA/IGNvbnRlbnQuc3Vic3RyKDEsIDEpIDogY29udGVudCk7XG4gICAgICB2YXIgaWNvbk5hbWUgPSBieVVuaWNvZGUocHJlZml4LCBoZXhWYWx1ZSk7XG4gICAgICB2YXIgaWNvbklkZW50aWZpZXIgPSBpY29uTmFtZTsgLy8gT25seSBjb252ZXJ0IHRoZSBwc2V1ZG8gZWxlbWVudCBpbiB0aGlzIDpiZWZvcmUvOmFmdGVyIHBvc2l0aW9uIGludG8gYW4gaWNvbiBpZiB3ZSBoYXZlbid0XG4gICAgICAvLyBhbHJlYWR5IGRvbmUgc28gd2l0aCB0aGUgc2FtZSBwcmVmaXggYW5kIGljb25OYW1lXG5cbiAgICAgIGlmIChpY29uTmFtZSAmJiAoIWFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50IHx8IGFscmVhZHlQcm9jZXNzZWRQc2V1ZG9FbGVtZW50LmdldEF0dHJpYnV0ZShEQVRBX1BSRUZJWCkgIT09IHByZWZpeCB8fCBhbHJlYWR5UHJvY2Vzc2VkUHNldWRvRWxlbWVudC5nZXRBdHRyaWJ1dGUoREFUQV9JQ09OKSAhPT0gaWNvbklkZW50aWZpZXIpKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUsIGljb25JZGVudGlmaWVyKTtcblxuICAgICAgICBpZiAoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpIHtcbiAgICAgICAgICAvLyBEZWxldGUgdGhlIG9sZCBvbmUsIHNpbmNlIHdlJ3JlIHJlcGxhY2luZyBpdCB3aXRoIGEgbmV3IG9uZVxuICAgICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoYWxyZWFkeVByb2Nlc3NlZFBzZXVkb0VsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1ldGEgPSBibGFua01ldGEoKTtcbiAgICAgICAgdmFyIGV4dHJhID0gbWV0YS5leHRyYTtcbiAgICAgICAgZXh0cmEuYXR0cmlidXRlc1tEQVRBX0ZBX1BTRVVET19FTEVNRU5UXSA9IHBvc2l0aW9uO1xuICAgICAgICBmaW5kSWNvbihpY29uTmFtZSwgcHJlZml4KS50aGVuKGZ1bmN0aW9uIChtYWluKSB7XG4gICAgICAgICAgdmFyIGFic3RyYWN0ID0gbWFrZUlubGluZVN2Z0Fic3RyYWN0KF9vYmplY3RTcHJlYWQoe30sIG1ldGEsIHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgIG1haW46IG1haW4sXG4gICAgICAgICAgICAgIG1hc2s6IGVtcHR5Q2Fub25pY2FsSWNvbigpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICBpY29uTmFtZTogaWNvbklkZW50aWZpZXIsXG4gICAgICAgICAgICBleHRyYTogZXh0cmEsXG4gICAgICAgICAgICB3YXRjaGFibGU6IHRydWVcbiAgICAgICAgICB9KSk7XG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBET0NVTUVOVC5jcmVhdGVFbGVtZW50KCdzdmcnKTtcblxuICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gJzpiZWZvcmUnKSB7XG4gICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShlbGVtZW50LCBub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsZW1lbnQub3V0ZXJIVE1MID0gYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9IdG1sKGEpO1xuICAgICAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKHBlbmRpbmdBdHRyaWJ1dGUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2Uobm9kZSkge1xuICByZXR1cm4gcGlja2VkLmFsbChbcmVwbGFjZUZvclBvc2l0aW9uKG5vZGUsICc6YmVmb3JlJyksIHJlcGxhY2VGb3JQb3NpdGlvbihub2RlLCAnOmFmdGVyJyldKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc2FibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmICF+VEFHTkFNRVNfVE9fU0tJUF9GT1JfUFNFVURPRUxFTUVOVFMuaW5kZXhPZihub2RlLnRhZ05hbWUudG9VcHBlckNhc2UoKSkgJiYgIW5vZGUuZ2V0QXR0cmlidXRlKERBVEFfRkFfUFNFVURPX0VMRU1FTlQpICYmICghbm9kZS5wYXJlbnROb2RlIHx8IG5vZGUucGFyZW50Tm9kZS50YWdOYW1lICE9PSAnc3ZnJyk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFBzZXVkb0VsZW1lbnRzIChyb290KSB7XG4gIGlmICghSVNfRE9NKSByZXR1cm47XG4gIHJldHVybiBuZXcgcGlja2VkKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IHRvQXJyYXkocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpLmZpbHRlcihwcm9jZXNzYWJsZSkubWFwKHJlcGxhY2UpO1xuICAgIHZhciBlbmQgPSBwZXJmLmJlZ2luKCdzZWFyY2hQc2V1ZG9FbGVtZW50cycpO1xuICAgIGRpc2FibGVPYnNlcnZhdGlvbigpO1xuICAgIHBpY2tlZC5hbGwob3BlcmF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBlbmQoKTtcbiAgICAgIGVuYWJsZU9ic2VydmF0aW9uKCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSkuY2F0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgZW5kKCk7XG4gICAgICBlbmFibGVPYnNlcnZhdGlvbigpO1xuICAgICAgcmVqZWN0KCk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG52YXIgYmFzZVN0eWxlcyA9IFwic3ZnOm5vdCg6cm9vdCkuc3ZnLWlubGluZS0tZmEge1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtbGcge1xcbiAgdmVydGljYWwtYWxpZ246IC0wLjIyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xIHtcXG4gIHdpZHRoOiAwLjA2MjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMiB7XFxuICB3aWR0aDogMC4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMyB7XFxuICB3aWR0aDogMC4xODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTQge1xcbiAgd2lkdGg6IDAuMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctNSB7XFxuICB3aWR0aDogMC4zMTI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTYge1xcbiAgd2lkdGg6IDAuMzc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTcge1xcbiAgd2lkdGg6IDAuNDM3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy04IHtcXG4gIHdpZHRoOiAwLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctOSB7XFxuICB3aWR0aDogMC41NjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEwIHtcXG4gIHdpZHRoOiAwLjYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xMSB7XFxuICB3aWR0aDogMC42ODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEyIHtcXG4gIHdpZHRoOiAwLjc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTEzIHtcXG4gIHdpZHRoOiAwLjgxMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTQge1xcbiAgd2lkdGg6IDAuODc1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS13LTE1IHtcXG4gIHdpZHRoOiAwLjkzNzVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTYge1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTcge1xcbiAgd2lkdGg6IDEuMDYyNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0xOCB7XFxuICB3aWR0aDogMS4xMjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXctMTkge1xcbiAgd2lkdGg6IDEuMTg3NWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtdy0yMCB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG4uc3ZnLWlubGluZS0tZmEuZmEtcHVsbC1sZWZ0IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zZW07XFxuICB3aWR0aDogYXV0bztcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLXB1bGwtcmlnaHQge1xcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1ib3JkZXIge1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG59XFxuLnN2Zy1pbmxpbmUtLWZhLmZhLWxpIHtcXG4gIHdpZHRoOiAyZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1mdyB7XFxuICB3aWR0aDogMS4yNWVtO1xcbn1cXG5cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5mYS1sYXllcnMge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiAxZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XFxuICB3aWR0aDogMWVtO1xcbn1cXG4uZmEtbGF5ZXJzIHN2Zy5zdmctaW5saW5lLS1mYSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciwgLmZhLWxheWVycy10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZhLWxheWVycy10ZXh0IHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XFxufVxcblxcbi5mYS1sYXllcnMtY291bnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYyNTNhO1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICNmZmY7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXgtd2lkdGg6IDVlbTtcXG4gIG1pbi13aWR0aDogMS41ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC4yNWVtO1xcbiAgcmlnaHQ6IDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XFxufVxcblxcbi5mYS1sYXllcnMtYm90dG9tLXJpZ2h0IHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiBhdXRvO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG59XFxuXFxuLmZhLWxheWVycy1ib3R0b20tbGVmdCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IGF1dG87XFxuICB0b3A6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuLmZhLWxheWVycy10b3AtcmlnaHQge1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIHJpZ2h0O1xcbn1cXG5cXG4uZmEtbGF5ZXJzLXRvcC1sZWZ0IHtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xcbn1cXG5cXG4uZmEtbGcge1xcbiAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzNlbTtcXG4gIGxpbmUtaGVpZ2h0OiAwLjc1ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMDY2N2VtO1xcbn1cXG5cXG4uZmEteHMge1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbi5mYS1zbSB7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxufVxcblxcbi5mYS0xeCB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmZhLTJ4IHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uZmEtM3gge1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5mYS00eCB7XFxuICBmb250LXNpemU6IDRlbTtcXG59XFxuXFxuLmZhLTV4IHtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4uZmEtNngge1xcbiAgZm9udC1zaXplOiA2ZW07XFxufVxcblxcbi5mYS03eCB7XFxuICBmb250LXNpemU6IDdlbTtcXG59XFxuXFxuLmZhLTh4IHtcXG4gIGZvbnQtc2l6ZTogOGVtO1xcbn1cXG5cXG4uZmEtOXgge1xcbiAgZm9udC1zaXplOiA5ZW07XFxufVxcblxcbi5mYS0xMHgge1xcbiAgZm9udC1zaXplOiAxMGVtO1xcbn1cXG5cXG4uZmEtZncge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEuMjVlbTtcXG59XFxuXFxuLmZhLXVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxuLmZhLXVsID4gbGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmEtbGkge1xcbiAgbGVmdDogLTJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyZW07XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLmZhLWJvcmRlciB7XFxuICBib3JkZXI6IHNvbGlkIDAuMDhlbSAjZWVlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4xZW07XFxuICBwYWRkaW5nOiAwLjJlbSAwLjI1ZW0gMC4xNWVtO1xcbn1cXG5cXG4uZmEtcHVsbC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4uZmEtcHVsbC1yaWdodCB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5mYS5mYS1wdWxsLWxlZnQsXFxuLmZhcy5mYS1wdWxsLWxlZnQsXFxuLmZhci5mYS1wdWxsLWxlZnQsXFxuLmZhbC5mYS1wdWxsLWxlZnQsXFxuLmZhYi5mYS1wdWxsLWxlZnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcXG59XFxuLmZhLmZhLXB1bGwtcmlnaHQsXFxuLmZhcy5mYS1wdWxsLXJpZ2h0LFxcbi5mYXIuZmEtcHVsbC1yaWdodCxcXG4uZmFsLmZhLXB1bGwtcmlnaHQsXFxuLmZhYi5mYS1wdWxsLXJpZ2h0IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjNlbTtcXG59XFxuXFxuLmZhLXNwaW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG4uZmEtcHVsc2Uge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOCk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmEtc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhLXNwaW4ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG4uZmEtcm90YXRlLTkwIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0xKVxcXCI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTE4MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MilcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cXG4uZmEtcm90YXRlLTI3MCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MylcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG5cXG4uZmEtZmxpcC1ob3Jpem9udGFsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0wLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgtMSwgMSk7XFxufVxcblxcbi5mYS1mbGlwLXZlcnRpY2FsIHtcXG4gIC1tcy1maWx0ZXI6IFxcXCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQmFzaWNJbWFnZShyb3RhdGlvbj0yLCBtaXJyb3I9MSlcXFwiO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEsIC0xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XFxufVxcblxcbi5mYS1mbGlwLWJvdGgsIC5mYS1mbGlwLWhvcml6b250YWwuZmEtZmxpcC12ZXJ0aWNhbCB7XFxuICAtbXMtZmlsdGVyOiBcXFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJhc2ljSW1hZ2Uocm90YXRpb249MiwgbWlycm9yPTEpXFxcIjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgtMSwgLTEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAtMSk7XFxufVxcblxcbjpyb290IC5mYS1yb3RhdGUtOTAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0xODAsXFxuOnJvb3QgLmZhLXJvdGF0ZS0yNzAsXFxuOnJvb3QgLmZhLWZsaXAtaG9yaXpvbnRhbCxcXG46cm9vdCAuZmEtZmxpcC12ZXJ0aWNhbCxcXG46cm9vdCAuZmEtZmxpcC1ib3RoIHtcXG4gIC13ZWJraXQtZmlsdGVyOiBub25lO1xcbiAgICAgICAgICBmaWx0ZXI6IG5vbmU7XFxufVxcblxcbi5mYS1zdGFjayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLXN0YWNrLTF4LFxcbi5mYS1zdGFjay0yeCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0xeCB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxLjI1ZW07XFxufVxcbi5zdmctaW5saW5lLS1mYS5mYS1zdGFjay0yeCB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyLjVlbTtcXG59XFxuXFxuLmZhLWludmVyc2Uge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zci1vbmx5IHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLnNyLW9ubHktZm9jdXNhYmxlOmFjdGl2ZSwgLnNyLW9ubHktZm9jdXNhYmxlOmZvY3VzIHtcXG4gIGNsaXA6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1wcmltYXJ5IHtcXG4gIGZpbGw6IHZhcigtLWZhLXByaW1hcnktY29sb3IsIGN1cnJlbnRDb2xvcik7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIC5mYS1zZWNvbmRhcnkge1xcbiAgZmlsbDogdmFyKC0tZmEtc2Vjb25kYXJ5LWNvbG9yLCBjdXJyZW50Q29sb3IpO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXByaW1hcnkge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtc2Vjb25kYXJ5LW9wYWNpdHksIDAuNCk7XFxufVxcblxcbi5zdmctaW5saW5lLS1mYS5mYS1zd2FwLW9wYWNpdHkgLmZhLXNlY29uZGFyeSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgb3BhY2l0eTogdmFyKC0tZmEtcHJpbWFyeS1vcGFjaXR5LCAxKTtcXG59XFxuXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXByaW1hcnksXFxuLnN2Zy1pbmxpbmUtLWZhIG1hc2sgLmZhLXNlY29uZGFyeSB7XFxuICBmaWxsOiBibGFjaztcXG59XFxuXFxuLmZhZC5mYS1pbnZlcnNlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIjtcblxuZnVuY3Rpb24gY3NzICgpIHtcbiAgdmFyIGRmcCA9IERFRkFVTFRfRkFNSUxZX1BSRUZJWDtcbiAgdmFyIGRyYyA9IERFRkFVTFRfUkVQTEFDRU1FTlRfQ0xBU1M7XG4gIHZhciBmcCA9IGNvbmZpZy5mYW1pbHlQcmVmaXg7XG4gIHZhciByYyA9IGNvbmZpZy5yZXBsYWNlbWVudENsYXNzO1xuICB2YXIgcyA9IGJhc2VTdHlsZXM7XG5cbiAgaWYgKGZwICE9PSBkZnAgfHwgcmMgIT09IGRyYykge1xuICAgIHZhciBkUGF0dCA9IG5ldyBSZWdFeHAoXCJcXFxcLlwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIGN1c3RvbVByb3BQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwtLVwiLmNvbmNhdChkZnAsIFwiXFxcXC1cIiksICdnJyk7XG4gICAgdmFyIHJQYXR0ID0gbmV3IFJlZ0V4cChcIlxcXFwuXCIuY29uY2F0KGRyYyksICdnJyk7XG4gICAgcyA9IHMucmVwbGFjZShkUGF0dCwgXCIuXCIuY29uY2F0KGZwLCBcIi1cIikpLnJlcGxhY2UoY3VzdG9tUHJvcFBhdHQsIFwiLS1cIi5jb25jYXQoZnAsIFwiLVwiKSkucmVwbGFjZShyUGF0dCwgXCIuXCIuY29uY2F0KHJjKSk7XG4gIH1cblxuICByZXR1cm4gcztcbn1cblxudmFyIExpYnJhcnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMaWJyYXJ5KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaWJyYXJ5KTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbnMgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMaWJyYXJ5LCBbe1xuICAgIGtleTogXCJhZGRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGRlZmluaXRpb25zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBkZWZpbml0aW9uc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFkZGl0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSh0aGlzLl9wdWxsRGVmaW5pdGlvbnMsIHt9KTtcbiAgICAgIE9iamVjdC5rZXlzKGFkZGl0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIF90aGlzLmRlZmluaXRpb25zW2tleV0gPSBfb2JqZWN0U3ByZWFkKHt9LCBfdGhpcy5kZWZpbml0aW9uc1trZXldIHx8IHt9LCBhZGRpdGlvbnNba2V5XSk7XG4gICAgICAgIGRlZmluZUljb25zKGtleSwgYWRkaXRpb25zW2tleV0pO1xuICAgICAgICBidWlsZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlc2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgdGhpcy5kZWZpbml0aW9ucyA9IHt9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJfcHVsbERlZmluaXRpb25zXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9wdWxsRGVmaW5pdGlvbnMoYWRkaXRpb25zLCBkZWZpbml0aW9uKSB7XG4gICAgICB2YXIgbm9ybWFsaXplZCA9IGRlZmluaXRpb24ucHJlZml4ICYmIGRlZmluaXRpb24uaWNvbk5hbWUgJiYgZGVmaW5pdGlvbi5pY29uID8ge1xuICAgICAgICAwOiBkZWZpbml0aW9uXG4gICAgICB9IDogZGVmaW5pdGlvbjtcbiAgICAgIE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfbm9ybWFsaXplZCRrZXkgPSBub3JtYWxpemVkW2tleV0sXG4gICAgICAgICAgICBwcmVmaXggPSBfbm9ybWFsaXplZCRrZXkucHJlZml4LFxuICAgICAgICAgICAgaWNvbk5hbWUgPSBfbm9ybWFsaXplZCRrZXkuaWNvbk5hbWUsXG4gICAgICAgICAgICBpY29uID0gX25vcm1hbGl6ZWQka2V5Lmljb247XG4gICAgICAgIGlmICghYWRkaXRpb25zW3ByZWZpeF0pIGFkZGl0aW9uc1twcmVmaXhdID0ge307XG4gICAgICAgIGFkZGl0aW9uc1twcmVmaXhdW2ljb25OYW1lXSA9IGljb247XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhZGRpdGlvbnM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIExpYnJhcnk7XG59KCk7XG5cbmZ1bmN0aW9uIGVuc3VyZUNzcygpIHtcbiAgaWYgKGNvbmZpZy5hdXRvQWRkQ3NzICYmICFfY3NzSW5zZXJ0ZWQpIHtcbiAgICBpbnNlcnRDc3MoY3NzKCkpO1xuXG4gICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhcGlPYmplY3QodmFsLCBhYnN0cmFjdENyZWF0b3IpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbCwgJ2Fic3RyYWN0Jywge1xuICAgIGdldDogYWJzdHJhY3RDcmVhdG9yXG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnaHRtbCcsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWwuYWJzdHJhY3QubWFwKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiB0b0h0bWwoYSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsLCAnbm9kZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmICghSVNfRE9NKSByZXR1cm47XG4gICAgICB2YXIgY29udGFpbmVyID0gRE9DVU1FTlQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gdmFsLmh0bWw7XG4gICAgICByZXR1cm4gY29udGFpbmVyLmNoaWxkcmVuO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGZpbmRJY29uRGVmaW5pdGlvbihpY29uTG9va3VwKSB7XG4gIHZhciBfaWNvbkxvb2t1cCRwcmVmaXggPSBpY29uTG9va3VwLnByZWZpeCxcbiAgICAgIHByZWZpeCA9IF9pY29uTG9va3VwJHByZWZpeCA9PT0gdm9pZCAwID8gJ2ZhJyA6IF9pY29uTG9va3VwJHByZWZpeCxcbiAgICAgIGljb25OYW1lID0gaWNvbkxvb2t1cC5pY29uTmFtZTtcbiAgaWYgKCFpY29uTmFtZSkgcmV0dXJuO1xuICByZXR1cm4gaWNvbkZyb21NYXBwaW5nKGxpYnJhcnkuZGVmaW5pdGlvbnMsIHByZWZpeCwgaWNvbk5hbWUpIHx8IGljb25Gcm9tTWFwcGluZyhuYW1lc3BhY2Uuc3R5bGVzLCBwcmVmaXgsIGljb25OYW1lKTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUljb25zKG5leHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChtYXliZUljb25EZWZpbml0aW9uKSB7XG4gICAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGljb25EZWZpbml0aW9uID0gKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pLmljb24gPyBtYXliZUljb25EZWZpbml0aW9uIDogZmluZEljb25EZWZpbml0aW9uKG1heWJlSWNvbkRlZmluaXRpb24gfHwge30pO1xuICAgIHZhciBtYXNrID0gcGFyYW1zLm1hc2s7XG5cbiAgICBpZiAobWFzaykge1xuICAgICAgbWFzayA9IChtYXNrIHx8IHt9KS5pY29uID8gbWFzayA6IGZpbmRJY29uRGVmaW5pdGlvbihtYXNrIHx8IHt9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChpY29uRGVmaW5pdGlvbiwgX29iamVjdFNwcmVhZCh7fSwgcGFyYW1zLCB7XG4gICAgICBtYXNrOiBtYXNrXG4gICAgfSkpO1xuICB9O1xufVxuXG52YXIgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG52YXIgbm9BdXRvID0gZnVuY3Rpb24gbm9BdXRvKCkge1xuICBjb25maWcuYXV0b1JlcGxhY2VTdmcgPSBmYWxzZTtcbiAgY29uZmlnLm9ic2VydmVNdXRhdGlvbnMgPSBmYWxzZTtcbiAgZGlzY29ubmVjdCgpO1xufTtcbnZhciBfY3NzSW5zZXJ0ZWQgPSBmYWxzZTtcbnZhciBkb20gPSB7XG4gIGkyc3ZnOiBmdW5jdGlvbiBpMnN2ZygpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgIGlmIChJU19ET00pIHtcbiAgICAgIGVuc3VyZUNzcygpO1xuICAgICAgdmFyIF9wYXJhbXMkbm9kZSA9IHBhcmFtcy5ub2RlLFxuICAgICAgICAgIG5vZGUgPSBfcGFyYW1zJG5vZGUgPT09IHZvaWQgMCA/IERPQ1VNRU5UIDogX3BhcmFtcyRub2RlLFxuICAgICAgICAgIF9wYXJhbXMkY2FsbGJhY2sgPSBwYXJhbXMuY2FsbGJhY2ssXG4gICAgICAgICAgY2FsbGJhY2sgPSBfcGFyYW1zJGNhbGxiYWNrID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoKSB7fSA6IF9wYXJhbXMkY2FsbGJhY2s7XG5cbiAgICAgIGlmIChjb25maWcuc2VhcmNoUHNldWRvRWxlbWVudHMpIHtcbiAgICAgICAgc2VhcmNoUHNldWRvRWxlbWVudHMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvblRyZWUobm9kZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGlja2VkLnJlamVjdCgnT3BlcmF0aW9uIHJlcXVpcmVzIGEgRE9NIG9mIHNvbWUga2luZC4nKTtcbiAgICB9XG4gIH0sXG4gIGNzczogY3NzLFxuICBpbnNlcnRDc3M6IGZ1bmN0aW9uIGluc2VydENzcyQkMSgpIHtcbiAgICBpZiAoIV9jc3NJbnNlcnRlZCkge1xuICAgICAgaW5zZXJ0Q3NzKGNzcygpKTtcblxuICAgICAgX2Nzc0luc2VydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiBmdW5jdGlvbiB3YXRjaCgpIHtcbiAgICB2YXIgcGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICB2YXIgYXV0b1JlcGxhY2VTdmdSb290ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3QgPSBwYXJhbXMub2JzZXJ2ZU11dGF0aW9uc1Jvb3Q7XG5cbiAgICBpZiAoY29uZmlnLmF1dG9SZXBsYWNlU3ZnID09PSBmYWxzZSkge1xuICAgICAgY29uZmlnLmF1dG9SZXBsYWNlU3ZnID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25maWcub2JzZXJ2ZU11dGF0aW9ucyA9IHRydWU7XG4gICAgZG9tcmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgYXV0b1JlcGxhY2Uoe1xuICAgICAgICBhdXRvUmVwbGFjZVN2Z1Jvb3Q6IGF1dG9SZXBsYWNlU3ZnUm9vdFxuICAgICAgfSk7XG4gICAgICBvYnNlcnZlKHtcbiAgICAgICAgdHJlZUNhbGxiYWNrOiBvblRyZWUsXG4gICAgICAgIG5vZGVDYWxsYmFjazogb25Ob2RlLFxuICAgICAgICBwc2V1ZG9FbGVtZW50c0NhbGxiYWNrOiBzZWFyY2hQc2V1ZG9FbGVtZW50cyxcbiAgICAgICAgb2JzZXJ2ZU11dGF0aW9uc1Jvb3Q6IG9ic2VydmVNdXRhdGlvbnNSb290XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcbnZhciBwYXJzZSA9IHtcbiAgdHJhbnNmb3JtOiBmdW5jdGlvbiB0cmFuc2Zvcm0odHJhbnNmb3JtU3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhcnNlVHJhbnNmb3JtU3RyaW5nKHRyYW5zZm9ybVN0cmluZyk7XG4gIH1cbn07XG52YXIgaWNvbiA9IHJlc29sdmVJY29ucyhmdW5jdGlvbiAoaWNvbkRlZmluaXRpb24pIHtcbiAgdmFyIHBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBfcGFyYW1zJHRyYW5zZm9ybSA9IHBhcmFtcy50cmFuc2Zvcm0sXG4gICAgICB0cmFuc2Zvcm0gPSBfcGFyYW1zJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybSxcbiAgICAgIF9wYXJhbXMkc3ltYm9sID0gcGFyYW1zLnN5bWJvbCxcbiAgICAgIHN5bWJvbCA9IF9wYXJhbXMkc3ltYm9sID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wYXJhbXMkc3ltYm9sLFxuICAgICAgX3BhcmFtcyRtYXNrID0gcGFyYW1zLm1hc2ssXG4gICAgICBtYXNrID0gX3BhcmFtcyRtYXNrID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyRtYXNrLFxuICAgICAgX3BhcmFtcyR0aXRsZSA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9wYXJhbXMkdGl0bGUsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkYXR0cmlidXRlcyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzID09PSB2b2lkIDAgPyB7fSA6IF9wYXJhbXMkc3R5bGVzO1xuICBpZiAoIWljb25EZWZpbml0aW9uKSByZXR1cm47XG4gIHZhciBwcmVmaXggPSBpY29uRGVmaW5pdGlvbi5wcmVmaXgsXG4gICAgICBpY29uTmFtZSA9IGljb25EZWZpbml0aW9uLmljb25OYW1lLFxuICAgICAgaWNvbiA9IGljb25EZWZpbml0aW9uLmljb247XG4gIHJldHVybiBhcGlPYmplY3QoX29iamVjdFNwcmVhZCh7XG4gICAgdHlwZTogJ2ljb24nXG4gIH0sIGljb25EZWZpbml0aW9uKSwgZnVuY3Rpb24gKCkge1xuICAgIGVuc3VyZUNzcygpO1xuXG4gICAgaWYgKGNvbmZpZy5hdXRvQTExeSkge1xuICAgICAgaWYgKHRpdGxlKSB7XG4gICAgICAgIGF0dHJpYnV0ZXNbJ2FyaWEtbGFiZWxsZWRieSddID0gXCJcIi5jb25jYXQoY29uZmlnLnJlcGxhY2VtZW50Q2xhc3MsIFwiLXRpdGxlLVwiKS5jb25jYXQobmV4dFVuaXF1ZUlkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0cmlidXRlc1snYXJpYS1oaWRkZW4nXSA9ICd0cnVlJztcbiAgICAgICAgYXR0cmlidXRlc1snZm9jdXNhYmxlJ10gPSAnZmFsc2UnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtYWtlSW5saW5lU3ZnQWJzdHJhY3Qoe1xuICAgICAgaWNvbnM6IHtcbiAgICAgICAgbWFpbjogYXNGb3VuZEljb24oaWNvbiksXG4gICAgICAgIG1hc2s6IG1hc2sgPyBhc0ZvdW5kSWNvbihtYXNrLmljb24pIDoge1xuICAgICAgICAgIGZvdW5kOiBmYWxzZSxcbiAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgaWNvbjoge31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgaWNvbk5hbWU6IGljb25OYW1lLFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHN5bWJvbDogc3ltYm9sLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IGNsYXNzZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbnZhciB0ZXh0ID0gZnVuY3Rpb24gdGV4dChjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0cmFuc2Zvcm0yID0gcGFyYW1zLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9wYXJhbXMkdHJhbnNmb3JtMiA9PT0gdm9pZCAwID8gbWVhbmluZ2xlc3NUcmFuc2Zvcm0gOiBfcGFyYW1zJHRyYW5zZm9ybTIsXG4gICAgICBfcGFyYW1zJHRpdGxlMiA9IHBhcmFtcy50aXRsZSxcbiAgICAgIHRpdGxlID0gX3BhcmFtcyR0aXRsZTIgPT09IHZvaWQgMCA/IG51bGwgOiBfcGFyYW1zJHRpdGxlMixcbiAgICAgIF9wYXJhbXMkY2xhc3NlczIgPSBwYXJhbXMuY2xhc3NlcyxcbiAgICAgIGNsYXNzZXMgPSBfcGFyYW1zJGNsYXNzZXMyID09PSB2b2lkIDAgPyBbXSA6IF9wYXJhbXMkY2xhc3NlczIsXG4gICAgICBfcGFyYW1zJGF0dHJpYnV0ZXMyID0gcGFyYW1zLmF0dHJpYnV0ZXMsXG4gICAgICBhdHRyaWJ1dGVzID0gX3BhcmFtcyRhdHRyaWJ1dGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJGF0dHJpYnV0ZXMyLFxuICAgICAgX3BhcmFtcyRzdHlsZXMyID0gcGFyYW1zLnN0eWxlcyxcbiAgICAgIHN0eWxlcyA9IF9wYXJhbXMkc3R5bGVzMiA9PT0gdm9pZCAwID8ge30gOiBfcGFyYW1zJHN0eWxlczI7XG4gIHJldHVybiBhcGlPYmplY3Qoe1xuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBjb250ZW50OiBjb250ZW50XG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBlbnN1cmVDc3MoKTtcbiAgICByZXR1cm4gbWFrZUxheWVyc1RleHRBYnN0cmFjdCh7XG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgdHJhbnNmb3JtOiBfb2JqZWN0U3ByZWFkKHt9LCBtZWFuaW5nbGVzc1RyYW5zZm9ybSwgdHJhbnNmb3JtKSxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGV4dHJhOiB7XG4gICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXMsXG4gICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICBjbGFzc2VzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzLXRleHRcIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoY2xhc3NlcykpXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbnZhciBjb3VudGVyID0gZnVuY3Rpb24gY291bnRlcihjb250ZW50KSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyR0aXRsZTMgPSBwYXJhbXMudGl0bGUsXG4gICAgICB0aXRsZSA9IF9wYXJhbXMkdGl0bGUzID09PSB2b2lkIDAgPyBudWxsIDogX3BhcmFtcyR0aXRsZTMsXG4gICAgICBfcGFyYW1zJGNsYXNzZXMzID0gcGFyYW1zLmNsYXNzZXMsXG4gICAgICBjbGFzc2VzID0gX3BhcmFtcyRjbGFzc2VzMyA9PT0gdm9pZCAwID8gW10gOiBfcGFyYW1zJGNsYXNzZXMzLFxuICAgICAgX3BhcmFtcyRhdHRyaWJ1dGVzMyA9IHBhcmFtcy5hdHRyaWJ1dGVzLFxuICAgICAgYXR0cmlidXRlcyA9IF9wYXJhbXMkYXR0cmlidXRlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRhdHRyaWJ1dGVzMyxcbiAgICAgIF9wYXJhbXMkc3R5bGVzMyA9IHBhcmFtcy5zdHlsZXMsXG4gICAgICBzdHlsZXMgPSBfcGFyYW1zJHN0eWxlczMgPT09IHZvaWQgMCA/IHt9IDogX3BhcmFtcyRzdHlsZXMzO1xuICByZXR1cm4gYXBpT2JqZWN0KHtcbiAgICB0eXBlOiAnY291bnRlcicsXG4gICAgY29udGVudDogY29udGVudFxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgcmV0dXJuIG1ha2VMYXllcnNDb3VudGVyQWJzdHJhY3Qoe1xuICAgICAgY29udGVudDogY29udGVudC50b1N0cmluZygpLFxuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIGNsYXNzZXM6IFtcIlwiLmNvbmNhdChjb25maWcuZmFtaWx5UHJlZml4LCBcIi1sYXllcnMtY291bnRlclwiKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShjbGFzc2VzKSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xudmFyIGxheWVyID0gZnVuY3Rpb24gbGF5ZXIoYXNzZW1ibGVyKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRjbGFzc2VzNCA9IHBhcmFtcy5jbGFzc2VzLFxuICAgICAgY2xhc3NlcyA9IF9wYXJhbXMkY2xhc3NlczQgPT09IHZvaWQgMCA/IFtdIDogX3BhcmFtcyRjbGFzc2VzNDtcbiAgcmV0dXJuIGFwaU9iamVjdCh7XG4gICAgdHlwZTogJ2xheWVyJ1xuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgZW5zdXJlQ3NzKCk7XG4gICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgYXNzZW1ibGVyKGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICBBcnJheS5pc0FycmF5KGFyZ3MpID8gYXJncy5tYXAoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5jb25jYXQoYS5hYnN0cmFjdCk7XG4gICAgICB9KSA6IGNoaWxkcmVuID0gY2hpbGRyZW4uY29uY2F0KGFyZ3MuYWJzdHJhY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBbe1xuICAgICAgdGFnOiAnc3BhbicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgIGNsYXNzOiBbXCJcIi5jb25jYXQoY29uZmlnLmZhbWlseVByZWZpeCwgXCItbGF5ZXJzXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGNsYXNzZXMpKS5qb2luKCcgJylcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICB9XTtcbiAgfSk7XG59O1xudmFyIGFwaSA9IHtcbiAgbm9BdXRvOiBub0F1dG8sXG4gIGNvbmZpZzogY29uZmlnLFxuICBkb206IGRvbSxcbiAgbGlicmFyeTogbGlicmFyeSxcbiAgcGFyc2U6IHBhcnNlLFxuICBmaW5kSWNvbkRlZmluaXRpb246IGZpbmRJY29uRGVmaW5pdGlvbixcbiAgaWNvbjogaWNvbixcbiAgdGV4dDogdGV4dCxcbiAgY291bnRlcjogY291bnRlcixcbiAgbGF5ZXI6IGxheWVyLFxuICB0b0h0bWw6IHRvSHRtbFxufTtcblxudmFyIGF1dG9SZXBsYWNlID0gZnVuY3Rpb24gYXV0b1JlcGxhY2UoKSB7XG4gIHZhciBwYXJhbXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX3BhcmFtcyRhdXRvUmVwbGFjZVN2ID0gcGFyYW1zLmF1dG9SZXBsYWNlU3ZnUm9vdCxcbiAgICAgIGF1dG9SZXBsYWNlU3ZnUm9vdCA9IF9wYXJhbXMkYXV0b1JlcGxhY2VTdiA9PT0gdm9pZCAwID8gRE9DVU1FTlQgOiBfcGFyYW1zJGF1dG9SZXBsYWNlU3Y7XG4gIGlmICgoT2JqZWN0LmtleXMobmFtZXNwYWNlLnN0eWxlcykubGVuZ3RoID4gMCB8fCBjb25maWcuYXV0b0ZldGNoU3ZnKSAmJiBJU19ET00gJiYgY29uZmlnLmF1dG9SZXBsYWNlU3ZnKSBhcGkuZG9tLmkyc3ZnKHtcbiAgICBub2RlOiBhdXRvUmVwbGFjZVN2Z1Jvb3RcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBpY29uLCBub0F1dG8sIGNvbmZpZywgdG9IdG1sLCBsYXllciwgdGV4dCwgY291bnRlciwgbGlicmFyeSwgZG9tLCBwYXJzZSwgZmluZEljb25EZWZpbml0aW9uIH07XG4iLCJpbXBvcnQgeyBwYXJzZSwgaWNvbiwgY29uZmlnLCB0ZXh0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcblxudmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBodW1wcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbihmdW5jdGlvbihnbG9iYWwpIHtcblxuICB2YXIgX3Byb2Nlc3NLZXlzID0gZnVuY3Rpb24oY29udmVydCwgb2JqLCBvcHRpb25zKSB7XG4gICAgaWYoIV9pc09iamVjdChvYmopIHx8IF9pc0RhdGUob2JqKSB8fCBfaXNSZWdFeHAob2JqKSB8fCBfaXNCb29sZWFuKG9iaikgfHwgX2lzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG5cbiAgICB2YXIgb3V0cHV0LFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbCA9IDA7XG5cbiAgICBpZihfaXNBcnJheShvYmopKSB7XG4gICAgICBvdXRwdXQgPSBbXTtcbiAgICAgIGZvcihsPW9iai5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIG91dHB1dC5wdXNoKF9wcm9jZXNzS2V5cyhjb252ZXJ0LCBvYmpbaV0sIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvdXRwdXQgPSB7fTtcbiAgICAgIGZvcih2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgb3V0cHV0W2NvbnZlcnQoa2V5LCBvcHRpb25zKV0gPSBfcHJvY2Vzc0tleXMoY29udmVydCwgb2JqW2tleV0sIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLy8gU3RyaW5nIGNvbnZlcnNpb24gbWV0aG9kc1xuXG4gIHZhciBzZXBhcmF0ZVdvcmRzID0gZnVuY3Rpb24oc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHNlcGFyYXRvciA9IG9wdGlvbnMuc2VwYXJhdG9yIHx8ICdfJztcbiAgICB2YXIgc3BsaXQgPSBvcHRpb25zLnNwbGl0IHx8IC8oPz1bQS1aXSkvO1xuXG4gICAgcmV0dXJuIHN0cmluZy5zcGxpdChzcGxpdCkuam9pbihzZXBhcmF0b3IpO1xuICB9O1xuXG4gIHZhciBjYW1lbGl6ZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIGlmIChfaXNOdW1lcmljYWwoc3RyaW5nKSkge1xuICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1tcXC1fXFxzXSsoLik/L2csIGZ1bmN0aW9uKG1hdGNoLCBjaHIpIHtcbiAgICAgIHJldHVybiBjaHIgPyBjaHIudG9VcHBlckNhc2UoKSA6ICcnO1xuICAgIH0pO1xuICAgIC8vIEVuc3VyZSAxc3QgY2hhciBpcyBhbHdheXMgbG93ZXJjYXNlXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHIoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0cmluZy5zdWJzdHIoMSk7XG4gIH07XG5cbiAgdmFyIHBhc2NhbGl6ZSA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHZhciBjYW1lbGl6ZWQgPSBjYW1lbGl6ZShzdHJpbmcpO1xuICAgIC8vIEVuc3VyZSAxc3QgY2hhciBpcyBhbHdheXMgdXBwZXJjYXNlXG4gICAgcmV0dXJuIGNhbWVsaXplZC5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIGNhbWVsaXplZC5zdWJzdHIoMSk7XG4gIH07XG5cbiAgdmFyIGRlY2FtZWxpemUgPSBmdW5jdGlvbihzdHJpbmcsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gc2VwYXJhdGVXb3JkcyhzdHJpbmcsIG9wdGlvbnMpLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgLy8gVXRpbGl0aWVzXG4gIC8vIFRha2VuIGZyb20gVW5kZXJzY29yZS5qc1xuXG4gIHZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbiAgdmFyIF9pc0Z1bmN0aW9uID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZihvYmopID09PSAnZnVuY3Rpb24nO1xuICB9O1xuICB2YXIgX2lzT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gT2JqZWN0KG9iaik7XG4gIH07XG4gIHZhciBfaXNBcnJheSA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbiAgdmFyIF9pc0RhdGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09ICdbb2JqZWN0IERhdGVdJztcbiAgfTtcbiAgdmFyIF9pc1JlZ0V4cCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT0gJ1tvYmplY3QgUmVnRXhwXSc7XG4gIH07XG4gIHZhciBfaXNCb29sZWFuID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PSAnW29iamVjdCBCb29sZWFuXSc7XG4gIH07XG5cbiAgLy8gUGVyZm9ybWFudCB3YXkgdG8gZGV0ZXJtaW5lIGlmIG9iaiBjb2VyY2VzIHRvIGEgbnVtYmVyXG4gIHZhciBfaXNOdW1lcmljYWwgPSBmdW5jdGlvbihvYmopIHtcbiAgICBvYmogPSBvYmogLSAwO1xuICAgIHJldHVybiBvYmogPT09IG9iajtcbiAgfTtcblxuICAvLyBTZXRzIHVwIGZ1bmN0aW9uIHdoaWNoIGhhbmRsZXMgcHJvY2Vzc2luZyBrZXlzXG4gIC8vIGFsbG93aW5nIHRoZSBjb252ZXJ0IGZ1bmN0aW9uIHRvIGJlIG1vZGlmaWVkIGJ5IGEgY2FsbGJhY2tcbiAgdmFyIF9wcm9jZXNzb3IgPSBmdW5jdGlvbihjb252ZXJ0LCBvcHRpb25zKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucyAmJiAncHJvY2VzcycgaW4gb3B0aW9ucyA/IG9wdGlvbnMucHJvY2VzcyA6IG9wdGlvbnM7XG5cbiAgICBpZih0eXBlb2YoY2FsbGJhY2spICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gY29udmVydDtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soc3RyaW5nLCBjb252ZXJ0LCBvcHRpb25zKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGh1bXBzID0ge1xuICAgIGNhbWVsaXplOiBjYW1lbGl6ZSxcbiAgICBkZWNhbWVsaXplOiBkZWNhbWVsaXplLFxuICAgIHBhc2NhbGl6ZTogcGFzY2FsaXplLFxuICAgIGRlcGFzY2FsaXplOiBkZWNhbWVsaXplLFxuICAgIGNhbWVsaXplS2V5czogZnVuY3Rpb24ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gX3Byb2Nlc3NLZXlzKF9wcm9jZXNzb3IoY2FtZWxpemUsIG9wdGlvbnMpLCBvYmplY3QpO1xuICAgIH0sXG4gICAgZGVjYW1lbGl6ZUtleXM6IGZ1bmN0aW9uKG9iamVjdCwgb3B0aW9ucykge1xuICAgICAgcmV0dXJuIF9wcm9jZXNzS2V5cyhfcHJvY2Vzc29yKGRlY2FtZWxpemUsIG9wdGlvbnMpLCBvYmplY3QsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgcGFzY2FsaXplS2V5czogZnVuY3Rpb24ob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gX3Byb2Nlc3NLZXlzKF9wcm9jZXNzb3IocGFzY2FsaXplLCBvcHRpb25zKSwgb2JqZWN0KTtcbiAgICB9LFxuICAgIGRlcGFzY2FsaXplS2V5czogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGVjYW1lbGl6ZUtleXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB1bmRlZmluZWQgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkLmFtZCkge1xuICAgIHVuZGVmaW5lZChodW1wcyk7XG4gIH0gZWxzZSBpZiAoJ29iamVjdCcgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBodW1wcztcbiAgfSBlbHNlIHtcbiAgICBnbG9iYWwuaHVtcHMgPSBodW1wcztcbiAgfVxuXG59KShjb21tb25qc0dsb2JhbCk7XG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cbnZhciBvYmplY3RXaXRob3V0UHJvcGVydGllcyA9IGZ1bmN0aW9uIChvYmosIGtleXMpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTtcbiAgICB0YXJnZXRbaV0gPSBvYmpbaV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxudmFyIHRvQ29uc3VtYWJsZUFycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGFycik7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0eWxlVG9PYmplY3Qoc3R5bGUpIHtcbiAgcmV0dXJuIHN0eWxlLnNwbGl0KCc7JykubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMudHJpbSgpO1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gcztcbiAgfSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBhaXIpIHtcbiAgICB2YXIgaSA9IHBhaXIuaW5kZXhPZignOicpO1xuICAgIHZhciBwcm9wID0gaHVtcHMuY2FtZWxpemUocGFpci5zbGljZSgwLCBpKSk7XG4gICAgdmFyIHZhbHVlID0gcGFpci5zbGljZShpICsgMSkudHJpbSgpO1xuXG4gICAgYWNjW3Byb3BdID0gdmFsdWU7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzVG9PYmplY3QoY2xzKSB7XG4gIHJldHVybiBjbHMuc3BsaXQoL1xccysvKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgYykge1xuICAgIGFjY1tjXSA9IHRydWU7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIGNvbWJpbmVDbGFzc09iamVjdHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBvYmpzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgb2Jqc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBvYmpzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBvYmopIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICBhY2MgPSBhY2MuY29uY2F0KG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjYy5wdXNoKG9iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10pO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0KGgsIGVsZW1lbnQpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IHt9O1xuXG4gIHZhciBjaGlsZHJlbiA9IChlbGVtZW50LmNoaWxkcmVuIHx8IFtdKS5tYXAoY29udmVydC5iaW5kKG51bGwsIGgpKTtcblxuICB2YXIgbWl4aW5zID0gT2JqZWN0LmtleXMoZWxlbWVudC5hdHRyaWJ1dGVzIHx8IHt9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgdmFyIHZhbCA9IGVsZW1lbnQuYXR0cmlidXRlc1trZXldO1xuXG4gICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2NsYXNzJzpcbiAgICAgICAgYWNjWydjbGFzcyddID0gY2xhc3NUb09iamVjdCh2YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgYWNjWydzdHlsZSddID0gc3R5bGVUb09iamVjdCh2YWwpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjYy5hdHRyc1trZXldID0gdmFsO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG4gIH0sIHsgJ2NsYXNzJzoge30sIHN0eWxlOiB7fSwgYXR0cnM6IHt9IH0pO1xuXG4gIHZhciBfZGF0YSRjbGFzcyA9IGRhdGEuY2xhc3MsXG4gICAgICBkQ2xhc3MgPSBfZGF0YSRjbGFzcyA9PT0gdW5kZWZpbmVkID8ge30gOiBfZGF0YSRjbGFzcyxcbiAgICAgIF9kYXRhJHN0eWxlID0gZGF0YS5zdHlsZSxcbiAgICAgIGRTdHlsZSA9IF9kYXRhJHN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF9kYXRhJHN0eWxlLFxuICAgICAgX2RhdGEkYXR0cnMgPSBkYXRhLmF0dHJzLFxuICAgICAgZEF0dHJzID0gX2RhdGEkYXR0cnMgPT09IHVuZGVmaW5lZCA/IHt9IDogX2RhdGEkYXR0cnMsXG4gICAgICByZW1haW5pbmdEYXRhID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoZGF0YSwgWydjbGFzcycsICdzdHlsZScsICdhdHRycyddKTtcblxuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaChlbGVtZW50LnRhZywgX2V4dGVuZHMoe1xuICAgICAgY2xhc3M6IGNvbWJpbmVDbGFzc09iamVjdHMobWl4aW5zLmNsYXNzLCBkQ2xhc3MpLFxuICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCBtaXhpbnMuc3R5bGUsIGRTdHlsZSksXG4gICAgICBhdHRyczogX2V4dGVuZHMoe30sIG1peGlucy5hdHRycywgZEF0dHJzKVxuICAgIH0sIHJlbWFpbmluZ0RhdGEsIHtcbiAgICAgIHByb3BzOiBwcm9wc1xuICAgIH0pLCBjaGlsZHJlbik7XG4gIH1cbn1cblxudmFyIFBST0RVQ1RJT04gPSBmYWxzZTtcblxudHJ5IHtcbiAgUFJPRFVDVElPTiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG59IGNhdGNoIChlKSB7fVxuXG5mdW5jdGlvbiBsb2cgKCkge1xuICBpZiAoIVBST0RVQ1RJT04gJiYgY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBfY29uc29sZTtcblxuICAgIChfY29uc29sZSA9IGNvbnNvbGUpLmVycm9yLmFwcGx5KF9jb25zb2xlLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9iamVjdFdpdGhLZXkoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMCB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUgPyBkZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB2YWx1ZSkgOiB7fTtcbn1cblxuZnVuY3Rpb24gY2xhc3NMaXN0KHByb3BzKSB7XG4gIHZhciBfY2xhc3NlcztcblxuICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHtcbiAgICAnZmEtc3Bpbic6IHByb3BzLnNwaW4sXG4gICAgJ2ZhLXB1bHNlJzogcHJvcHMucHVsc2UsXG4gICAgJ2ZhLWZ3JzogcHJvcHMuZml4ZWRXaWR0aCxcbiAgICAnZmEtYm9yZGVyJzogcHJvcHMuYm9yZGVyLFxuICAgICdmYS1saSc6IHByb3BzLmxpc3RJdGVtLFxuICAgICdmYS1pbnZlcnNlJzogcHJvcHMuaW52ZXJzZSxcbiAgICAnZmEtZmxpcC1ob3Jpem9udGFsJzogcHJvcHMuZmxpcCA9PT0gJ2hvcml6b250YWwnIHx8IHByb3BzLmZsaXAgPT09ICdib3RoJyxcbiAgICAnZmEtZmxpcC12ZXJ0aWNhbCc6IHByb3BzLmZsaXAgPT09ICd2ZXJ0aWNhbCcgfHwgcHJvcHMuZmxpcCA9PT0gJ2JvdGgnXG4gIH0sIGRlZmluZVByb3BlcnR5KF9jbGFzc2VzLCAnZmEtJyArIHByb3BzLnNpemUsIHByb3BzLnNpemUgIT09IG51bGwpLCBkZWZpbmVQcm9wZXJ0eShfY2xhc3NlcywgJ2ZhLXJvdGF0ZS0nICsgcHJvcHMucm90YXRpb24sIHByb3BzLnJvdGF0aW9uICE9PSBudWxsKSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYS1wdWxsLScgKyBwcm9wcy5wdWxsLCBwcm9wcy5wdWxsICE9PSBudWxsKSwgZGVmaW5lUHJvcGVydHkoX2NsYXNzZXMsICdmYS1zd2FwLW9wYWNpdHknLCBwcm9wcy5zd2FwT3BhY2l0eSksIF9jbGFzc2VzKTtcblxuICByZXR1cm4gT2JqZWN0LmtleXMoY2xhc3NlcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2xhc3Nlc1trZXldID8ga2V5IDogbnVsbDtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3RhdGljQ2xhc3ModG8sIHdoYXQpIHtcbiAgdmFyIHZhbCA9ICh0byB8fCAnJykubGVuZ3RoID09PSAwID8gW10gOiBbdG9dO1xuXG4gIHJldHVybiB2YWwuY29uY2F0KHdoYXQpLmpvaW4oJyAnKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplSWNvbkFyZ3MoaWNvbiQkMSkge1xuICBpZiAoaWNvbiQkMSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgaWNvbiQkMSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoaWNvbiQkMSkpID09PSAnb2JqZWN0JyAmJiBpY29uJCQxLnByZWZpeCAmJiBpY29uJCQxLmljb25OYW1lKSB7XG4gICAgcmV0dXJuIGljb24kJDE7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShpY29uJCQxKSAmJiBpY29uJCQxLmxlbmd0aCA9PT0gMikge1xuICAgIHJldHVybiB7IHByZWZpeDogaWNvbiQkMVswXSwgaWNvbk5hbWU6IGljb24kJDFbMV0gfTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgaWNvbiQkMSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4geyBwcmVmaXg6ICdmYXMnLCBpY29uTmFtZTogaWNvbiQkMSB9O1xuICB9XG59XG5cbnZhciBGb250QXdlc29tZUljb24gPSB7XG4gIG5hbWU6ICdGb250QXdlc29tZUljb24nLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBib3JkZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgZml4ZWRXaWR0aDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBmbGlwOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdib3RoJ10uaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFtPYmplY3QsIEFycmF5LCBTdHJpbmddLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1hc2s6IHtcbiAgICAgIHR5cGU6IFtPYmplY3QsIEFycmF5LCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgbGlzdEl0ZW06IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcHVsbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24gdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHVsc2U6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcm90YXRpb246IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFs5MCwgMTgwLCAyNzBdLmluZGV4T2YocGFyc2VJbnQodmFsdWUsIDEwKSkgPiAtMTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN3YXBPcGFjaXR5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydsZycsICd4cycsICdzbScsICcxeCcsICcyeCcsICczeCcsICc0eCcsICc1eCcsICc2eCcsICc3eCcsICc4eCcsICc5eCcsICcxMHgnXS5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3Bpbjoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF0sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBzeW1ib2w6IHtcbiAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBpbnZlcnNlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHZhciBwcm9wcyA9IGNvbnRleHQucHJvcHM7XG4gICAgdmFyIGljb25BcmdzID0gcHJvcHMuaWNvbixcbiAgICAgICAgbWFza0FyZ3MgPSBwcm9wcy5tYXNrLFxuICAgICAgICBzeW1ib2wgPSBwcm9wcy5zeW1ib2wsXG4gICAgICAgIHRpdGxlID0gcHJvcHMudGl0bGU7XG5cbiAgICB2YXIgaWNvbiQkMSA9IG5vcm1hbGl6ZUljb25BcmdzKGljb25BcmdzKTtcbiAgICB2YXIgY2xhc3NlcyA9IG9iamVjdFdpdGhLZXkoJ2NsYXNzZXMnLCBjbGFzc0xpc3QocHJvcHMpKTtcbiAgICB2YXIgdHJhbnNmb3JtID0gb2JqZWN0V2l0aEtleSgndHJhbnNmb3JtJywgdHlwZW9mIHByb3BzLnRyYW5zZm9ybSA9PT0gJ3N0cmluZycgPyBwYXJzZS50cmFuc2Zvcm0ocHJvcHMudHJhbnNmb3JtKSA6IHByb3BzLnRyYW5zZm9ybSk7XG4gICAgdmFyIG1hc2sgPSBvYmplY3RXaXRoS2V5KCdtYXNrJywgbm9ybWFsaXplSWNvbkFyZ3MobWFza0FyZ3MpKTtcblxuICAgIHZhciByZW5kZXJlZEljb24gPSBpY29uKGljb24kJDEsIF9leHRlbmRzKHt9LCBjbGFzc2VzLCB0cmFuc2Zvcm0sIG1hc2ssIHsgc3ltYm9sOiBzeW1ib2wsIHRpdGxlOiB0aXRsZSB9KSk7XG5cbiAgICBpZiAoIXJlbmRlcmVkSWNvbikge1xuICAgICAgcmV0dXJuIGxvZygnQ291bGQgbm90IGZpbmQgb25lIG9yIG1vcmUgaWNvbihzKScsIGljb24kJDEsIG1hc2spO1xuICAgIH1cblxuICAgIHZhciBhYnN0cmFjdCA9IHJlbmRlcmVkSWNvbi5hYnN0cmFjdDtcblxuICAgIHZhciBjb252ZXJ0Q3VycnkgPSBjb252ZXJ0LmJpbmQobnVsbCwgY3JlYXRlRWxlbWVudCk7XG5cbiAgICByZXR1cm4gY29udmVydEN1cnJ5KGFic3RyYWN0WzBdLCB7fSwgY29udGV4dC5kYXRhKTtcbiAgfVxufTtcblxudmFyIEZvbnRBd2Vzb21lTGF5ZXJzID0ge1xuICBuYW1lOiAnRm9udEF3ZXNvbWVMYXllcnMnLFxuXG4gIGZ1bmN0aW9uYWw6IHRydWUsXG5cbiAgcHJvcHM6IHtcbiAgICBmaXhlZFdpZHRoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHZhciBmYW1pbHlQcmVmaXggPSBjb25maWcuZmFtaWx5UHJlZml4O1xuICAgIHZhciBzdGF0aWNDbGFzcyA9IGNvbnRleHQuZGF0YS5zdGF0aWNDbGFzcztcblxuXG4gICAgdmFyIGNsYXNzZXMgPSBbZmFtaWx5UHJlZml4ICsgJy1sYXllcnMnXS5jb25jYXQodG9Db25zdW1hYmxlQXJyYXkoY29udGV4dC5wcm9wcy5maXhlZFdpZHRoID8gW2ZhbWlseVByZWZpeCArICctZncnXSA6IFtdKSk7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgX2V4dGVuZHMoe30sIGNvbnRleHQuZGF0YSwge1xuICAgICAgc3RhdGljQ2xhc3M6IGFkZFN0YXRpY0NsYXNzKHN0YXRpY0NsYXNzLCBjbGFzc2VzKVxuICAgIH0pLCBjb250ZXh0LmNoaWxkcmVuKTtcbiAgfVxufTtcblxudmFyIEZvbnRBd2Vzb21lTGF5ZXJzVGV4dCA9IHtcbiAgbmFtZTogJ0ZvbnRBd2Vzb21lTGF5ZXJzVGV4dCcsXG5cbiAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICBwcm9wczoge1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgZGVmYXVsdDogJydcbiAgICB9LFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGNvdW50ZXI6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBmYWxzZVxuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uIHZhbGlkYXRvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gWydib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0J10uaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY3JlYXRlRWxlbWVudCwgY29udGV4dCkge1xuICAgIHZhciBmYW1pbHlQcmVmaXggPSBjb25maWcuZmFtaWx5UHJlZml4O1xuICAgIHZhciBwcm9wcyA9IGNvbnRleHQucHJvcHM7XG5cblxuICAgIHZhciBjbGFzc2VzID0gb2JqZWN0V2l0aEtleSgnY2xhc3NlcycsIFtdLmNvbmNhdCh0b0NvbnN1bWFibGVBcnJheShwcm9wcy5jb3VudGVyID8gW2ZhbWlseVByZWZpeCArICctbGF5ZXJzLWNvdW50ZXInXSA6IFtdKSwgdG9Db25zdW1hYmxlQXJyYXkocHJvcHMucG9zaXRpb24gPyBbZmFtaWx5UHJlZml4ICsgJy1sYXllcnMtJyArIHByb3BzLnBvc2l0aW9uXSA6IFtdKSkpO1xuXG4gICAgdmFyIHRyYW5zZm9ybSA9IG9iamVjdFdpdGhLZXkoJ3RyYW5zZm9ybScsIHR5cGVvZiBwcm9wcy50cmFuc2Zvcm0gPT09ICdzdHJpbmcnID8gcGFyc2UudHJhbnNmb3JtKHByb3BzLnRyYW5zZm9ybSkgOiBwcm9wcy50cmFuc2Zvcm0pO1xuXG4gICAgdmFyIHJlbmRlcmVkVGV4dCA9IHRleHQocHJvcHMudmFsdWUudG9TdHJpbmcoKSwgX2V4dGVuZHMoe30sIHRyYW5zZm9ybSwgY2xhc3NlcykpO1xuXG4gICAgdmFyIGFic3RyYWN0ID0gcmVuZGVyZWRUZXh0LmFic3RyYWN0O1xuXG5cbiAgICBpZiAocHJvcHMuY291bnRlcikge1xuICAgICAgYWJzdHJhY3RbMF0uYXR0cmlidXRlcy5jbGFzcyA9IGFic3RyYWN0WzBdLmF0dHJpYnV0ZXMuY2xhc3MucmVwbGFjZSgnZmEtbGF5ZXJzLXRleHQnLCAnJyk7XG4gICAgfVxuXG4gICAgdmFyIGNvbnZlcnRDdXJyeSA9IGNvbnZlcnQuYmluZChudWxsLCBjcmVhdGVFbGVtZW50KTtcblxuICAgIHJldHVybiBjb252ZXJ0Q3VycnkoYWJzdHJhY3RbMF0sIHt9LCBjb250ZXh0LmRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBGb250QXdlc29tZUljb24sIEZvbnRBd2Vzb21lTGF5ZXJzLCBGb250QXdlc29tZUxheWVyc1RleHQgfTtcbiIsIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJtZDpiZy13aGl0ZSBjb250YWluZXIgbWQ6bXgtNCBtZDpteC1hdXRvIG1kOnNoYWRvdy1sZyByb3VuZGVkIG1kOm10LTMyIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgbWQ6bWF4LXctMnhsIGxnOm1heC13LTR4bCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgPGRpdiBjbGFzcz1cIm1kOnctMS8yIHRleHQtY2VudGVyIHB4LTggcHktNCBtZDpibG9ja1wiPlxuICAgIDxwIGNsYXNzPVwidGV4dC1pbmRpZ28tNTAwIGZvbnQtYm9sZCB0ZXh0LTR4bCBtZDpwdC04XCI+R09PRFdPUks8L3A+XG4gICAgPHAgY2xhc3M9XCJ0ZXh0LWluZGlnby01MDAgdGV4dC14bFwiPiBTZW5zaWJsZSBBcHByb2FjaCB0byBXb3JrICYgQ29sbGFib3JhdGlvbiBmb3IgU29mdHdhcmUgVGVhbXMgPC9wPlxuICAgIDxpbWcgc3JjPVwiL2ltYWdlL3JlZ2lzdGVyLnN2Z1wiIGFsdD1cIndvcmsgZGVza1wiIGNsYXNzPVwicHQtOCBoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInctZnVsbCBtZDpiZy1pbmRpZ28tMTAwIG1kOnctMS8yIHAtOFwiPlxuICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiA6YWN0aW9uPVwidXJsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJ0b2tlblwiPlxuICAgICAgPHAgY2xhc3M9XCJweS00XCI+XG4gICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgYXJpYS1sYWJlbD1cImVtYWlsXCIgY2xhc3M9XCJzaGFkb3cgYXBwZWFyYW5jZS1ub25lIGJvcmRlciByb3VuZGVkIHctZnVsbCBweS0yIHB4LTMgdGV4dC1ncmF5LTgwMFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiA6dmFsdWU9XCJvbGRFbWFpbFwiIGF1dG9mb2N1cz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXJlZC00MDAgYmxvY2sgcHQtMlwiIHYtaWY9XCJlcnJvcnMuZW1haWxcIj57eyBlcnJvcnMuZW1haWxbMF0gfX08L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzcz1cInB5LTRcIj5cbiAgICAgICAgPGlucHV0IGlkPVwicGFzc3dvcmRcIiBhcmlhLWxhYmVsPVwicGFzc3dvcmRcIiBjbGFzcz1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktODAwXCIgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJweS00IHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBhcmlhLWxhYmVsPVwicmVtZW1iZXIgbWVcIiBuYW1lPVwicmVtZW1iZXJcIj5cbiAgICAgICAgICBSZW1lbWJlciBNZVxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJweS00XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYmctaW5kaWdvLTUwMCBob3ZlcjpiZy1pbmRpZ28tNjAwIHRleHQtd2hpdGUgdGV4dC14bCBmb250LW1lZGl1bSBweS0yIHB4LTQgcm91bmRlZFwiPkxPR0lOPC9idXR0b24+XG4gICAgICA8L3A+XG4gICAgICA8YSBocmVmPVwicGFzc3dvcmQvcmVzZXRcIiBjbGFzcz1cIm5vLXVuZGVybGluZSB0ZXh0LWluZGlnby01MDAgdGV4dC1zbVwiPkZvcmdvdCBZb3VyIFBhc3N3b3JkPzwvYT5cbiAgICA8L2Zvcm0+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiAoKSA9PiAoe1xuICAgIHRva2VuOiBMYXJhdmVsLmNzcmZUb2tlbixcbiAgICBlcnJvcnMsXG4gICAgb2xkRW1haWwsXG4gICAgdXJsXG4gIH0pXG59XG48L3NjcmlwdD5cbiIsInZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbm5lY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgY2xhc3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ29ubmVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29ubmVjdG9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25uZWN0b3Igb3B0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2RlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aEVuZHBvaW50OiAnL2Jyb2FkY2FzdGluZy9hdXRoJyxcbiAgICAgICAgICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbiAgICAgICAgICAgIGNzcmZUb2tlbjogbnVsbCxcbiAgICAgICAgICAgIGhvc3Q6IG51bGwsXG4gICAgICAgICAgICBrZXk6IG51bGwsXG4gICAgICAgICAgICBuYW1lc3BhY2U6ICdBcHAuRXZlbnRzJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29ubmVjdCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBNZXJnZSB0aGUgY3VzdG9tIG9wdGlvbnMgd2l0aCB0aGUgZGVmYXVsdHMuXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKENvbm5lY3RvciwgW3tcbiAgICAgICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHRoaXMuX2RlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNzcmZUb2tlbigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmF1dGguaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSB0aGlzLmNzcmZUb2tlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4dHJhY3QgdGhlIENTUkYgdG9rZW4gZnJvbSB0aGUgcGFnZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NzcmZUb2tlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjc3JmVG9rZW4oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0b3IgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93WydMYXJhdmVsJ10gJiYgd2luZG93WydMYXJhdmVsJ10uY3NyZlRva2VuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvd1snTGFyYXZlbCddLmNzcmZUb2tlbjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmNzcmZUb2tlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3NyZlRva2VuO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yID09PSAnZnVuY3Rpb24nICYmIChzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3IuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gQ29ubmVjdG9yO1xufSgpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIGJhc2ljIGNoYW5uZWwuXG4gKi9cbnZhciBDaGFubmVsID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENoYW5uZWwpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoQ2hhbm5lbCwgW3tcbiAgICBrZXk6ICdsaXN0ZW5Gb3JXaGlzcGVyJyxcblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgYSB3aGlzcGVyIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5Gb3JXaGlzcGVyKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuKCcuY2xpZW50LScgKyBldmVudCwgY2FsbGJhY2spO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdub3RpZmljYXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBub3RpZmljYXRpb24oY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzLmxpc3RlbignLklsbHVtaW5hdGVcXFxcTm90aWZpY2F0aW9uc1xcXFxFdmVudHNcXFxcQnJvYWRjYXN0Tm90aWZpY2F0aW9uQ3JlYXRlZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGEgd2hpc3BzZXIgZXZlbnQgb24gdGhlIGNoYW5uZWwgaW5zdGFuY2UuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3N0b3BMaXN0ZW5pbmdGb3JXaGlzcGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZ0ZvcldoaXNwZXIoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0b3BMaXN0ZW5pbmcoJy5jbGllbnQtJyArIGV2ZW50KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENoYW5uZWw7XG59KCk7XG5cbi8qKlxuICogRXZlbnQgbmFtZSBmb3JtYXR0ZXJcbiAqL1xudmFyIEV2ZW50Rm9ybWF0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFdmVudEZvcm1hdHRlcihuYW1lc3BhY2UpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRGb3JtYXR0ZXIpO1xuXG4gICAgICAgIHRoaXMuc2V0TmFtZXNwYWNlKG5hbWVzcGFjZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZvcm1hdCB0aGUgZ2l2ZW4gZXZlbnQgbmFtZS5cbiAgICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoRXZlbnRGb3JtYXR0ZXIsIFt7XG4gICAgICAgIGtleTogJ2Zvcm1hdCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFyQXQoMCkgPT09ICcuJyB8fCBldmVudC5jaGFyQXQoMCkgPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQgPSB0aGlzLm5hbWVzcGFjZSArICcuJyArIGV2ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnJlcGxhY2UoL1xcLi9nLCAnXFxcXCcpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGV2ZW50IG5hbWVzcGFjZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldE5hbWVzcGFjZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXROYW1lc3BhY2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEV2ZW50Rm9ybWF0dGVyO1xufSgpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBjaGFubmVsLlxuICovXG52YXIgUHVzaGVyQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICAgIGluaGVyaXRzKFB1c2hlckNoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBQdXNoZXJDaGFubmVsKHB1c2hlciwgbmFtZSwgb3B0aW9ucykge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQdXNoZXJDaGFubmVsKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHVzaGVyQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5ldmVudEZvcm1hdHRlciA9IG5ldyBFdmVudEZvcm1hdHRlcihfdGhpcy5vcHRpb25zLm5hbWVzcGFjZSk7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIFB1c2hlciBjaGFubmVsLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUodGhpcy5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogVW5zdWJzY3JpYmUgZnJvbSBhIFB1c2hlciBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGlzdGVuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3RlbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24odGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIGV2ZW50IG9uIHRoZSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wTGlzdGVuaW5nKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bmJpbmQodGhpcy5ldmVudEZvcm1hdHRlci5mb3JtYXQoZXZlbnQpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYmluZChldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlckNoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFB1c2hlciBwcml2YXRlIGNoYW5uZWwuXG4gKi9cbnZhciBQdXNoZXJQcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfUHVzaGVyQ2hhbm5lbCkge1xuICBpbmhlcml0cyhQdXNoZXJQcml2YXRlQ2hhbm5lbCwgX1B1c2hlckNoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIFB1c2hlclByaXZhdGVDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFB1c2hlclByaXZhdGVDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHVzaGVyUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoUHVzaGVyUHJpdmF0ZUNoYW5uZWwsIFt7XG4gICAga2V5OiAnd2hpc3BlcicsXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cbiAgICAgKi9cbiAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBQdXNoZXJQcml2YXRlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgUHVzaGVyIHByZXNlbmNlIGNoYW5uZWwuXG4gKi9cbnZhciBQdXNoZXJQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX1B1c2hlckNoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhQdXNoZXJQcmVzZW5jZUNoYW5uZWwsIF9QdXNoZXJDaGFubmVsKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlclByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFB1c2hlclByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFB1c2hlclByZXNlbmNlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFB1c2hlclByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHVzaGVyOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKE9iamVjdC5rZXlzKGRhdGEubWVtYmVycykubWFwKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1lbWJlcnNba107XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdqb2luaW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW5pbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVyLmluZm8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2aW5nJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZpbmcoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMub24oJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhtZW1iZXIuaW5mbyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmlnZ2VyIGNsaWVudCBldmVudCBvbiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3doaXNwZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gd2hpc3BlcihldmVudE5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmNoYW5uZWxzLmNoYW5uZWxzW3RoaXMubmFtZV0udHJpZ2dlcignY2xpZW50LScgKyBldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFB1c2hlclByZXNlbmNlQ2hhbm5lbDtcbn0oUHVzaGVyQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgU29ja2V0LmlvIGNoYW5uZWwuXG4gKi9cbnZhciBTb2NrZXRJb0NoYW5uZWwgPSBmdW5jdGlvbiAoX0NoYW5uZWwpIHtcbiAgICBpbmhlcml0cyhTb2NrZXRJb0NoYW5uZWwsIF9DaGFubmVsKTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTb2NrZXRJb0NoYW5uZWwoc29ja2V0LCBuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvQ2hhbm5lbCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBldmVudCBjYWxsYmFja3MgYXBwbGllZCB0byB0aGUgY2hhbm5lbC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNvY2tldElvQ2hhbm5lbCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50cyA9IHt9O1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMuc29ja2V0ID0gc29ja2V0O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuZXZlbnRGb3JtYXR0ZXIgPSBuZXcgRXZlbnRGb3JtYXR0ZXIoX3RoaXMub3B0aW9ucy5uYW1lc3BhY2UpO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgX3RoaXMuY29uZmlndXJlUmVjb25uZWN0b3IoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gYSBTb2NrZXQuaW8gY2hhbm5lbC5cbiAgICAgKi9cblxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9DaGFubmVsLCBbe1xuICAgICAgICBrZXk6ICdzdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICBhdXRoOiB0aGlzLm9wdGlvbnMuYXV0aCB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVuc3Vic2NyaWJlIGZyb20gY2hhbm5lbCBhbmQgdWJpbmQgZXZlbnQgY2FsbGJhY2tzLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndW5zdWJzY3JpYmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgndW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGF1dGg6IHRoaXMub3B0aW9ucy5hdXRoIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKHRoaXMuZXZlbnRGb3JtYXR0ZXIuZm9ybWF0KGV2ZW50KSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N0b3BMaXN0ZW5pbmcnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcExpc3RlbmluZyhldmVudCkge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmV2ZW50Rm9ybWF0dGVyLmZvcm1hdChldmVudCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5yZW1vdmVMaXN0ZW5lcihuYW1lKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tuYW1lXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCaW5kIHRoZSBjaGFubmVsJ3Mgc29ja2V0IHRvIGFuIGV2ZW50IGFuZCBzdG9yZSB0aGUgY2FsbGJhY2suXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiBsaXN0ZW5lcihjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5uYW1lID09IGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQXR0YWNoIGEgJ3JlY29ubmVjdCcgbGlzdGVuZXIgYW5kIGJpbmQgdGhlIGV2ZW50LlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29uZmlndXJlUmVjb25uZWN0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29uZmlndXJlUmVjb25uZWN0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMzLnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKCdyZWNvbm5lY3QnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmJpbmQoJ3JlY29ubmVjdCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQmluZCB0aGUgY2hhbm5lbCdzIHNvY2tldCB0byBhbiBldmVudCBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBiaW5kKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gdGhpcy5ldmVudHNbZXZlbnRdIHx8IFtdO1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVbmJpbmQgdGhlIGNoYW5uZWwncyBzb2NrZXQgZnJvbSBhbGwgc3RvcmVkIGV2ZW50IGNhbGxiYWNrcy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3VuYmluZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5ldmVudHMpLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXM0LmV2ZW50c1tldmVudF0uZm9yRWFjaChmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXM0LnNvY2tldC5yZW1vdmVMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBfdGhpczQuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBTb2NrZXRJb0NoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIFNvY2tldC5pbyBwcmVzZW5jZSBjaGFubmVsLlxuICovXG52YXIgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCA9IGZ1bmN0aW9uIChfU29ja2V0SW9DaGFubmVsKSB7XG4gICAgaW5oZXJpdHMoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgX1NvY2tldElvQ2hhbm5lbCk7XG5cbiAgICBmdW5jdGlvbiBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJpdmF0ZUNoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb1ByaXZhdGVDaGFubmVsKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnd2hpc3BlcicsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyaWdnZXIgY2xpZW50IGV2ZW50IG9uIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGllbnQgZXZlbnQnLCB7XG4gICAgICAgICAgICAgICAgY2hhbm5lbDogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgIGV2ZW50OiAnY2xpZW50LScgKyBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gU29ja2V0SW9Qcml2YXRlQ2hhbm5lbDtcbn0oU29ja2V0SW9DaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBTb2NrZXQuaW8gcHJlc2VuY2UgY2hhbm5lbC5cbiAqL1xudmFyIFNvY2tldElvUHJlc2VuY2VDaGFubmVsID0gZnVuY3Rpb24gKF9Tb2NrZXRJb1ByaXZhdGVDaGFubikge1xuICAgIGluaGVyaXRzKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLCBfU29ja2V0SW9Qcml2YXRlQ2hhbm4pO1xuXG4gICAgZnVuY3Rpb24gU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFNvY2tldElvUHJlc2VuY2VDaGFubmVsKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNvY2tldElvUHJlc2VuY2VDaGFubmVsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhTb2NrZXRJb1ByZXNlbmNlQ2hhbm5lbCwgW3tcbiAgICAgICAga2V5OiAnaGVyZScsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZ2lzdGVyIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGFueXRpbWUgdGhlIG1lbWJlciBsaXN0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGVyZShjYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbigncHJlc2VuY2U6c3Vic2NyaWJlZCcsIGZ1bmN0aW9uIChtZW1iZXJzKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobWVtYmVycy5tYXAoZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0udXNlcl9pbmZvO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBqb2luaW5nIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnam9pbmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpqb2luaW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbiBmb3Igc29tZW9uZSBsZWF2aW5nIHRoZSBjaGFubmVsLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnbGVhdmluZycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uKCdwcmVzZW5jZTpsZWF2aW5nJywgZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhtZW1iZXIudXNlcl9pbmZvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvUHJlc2VuY2VDaGFubmVsO1xufShTb2NrZXRJb1ByaXZhdGVDaGFubmVsKTtcblxuLyoqXG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSBudWxsIGNoYW5uZWwuXG4gKi9cbnZhciBOdWxsQ2hhbm5lbCA9IGZ1bmN0aW9uIChfQ2hhbm5lbCkge1xuICBpbmhlcml0cyhOdWxsQ2hhbm5lbCwgX0NoYW5uZWwpO1xuXG4gIGZ1bmN0aW9uIE51bGxDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVsbENoYW5uZWwuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdWxsQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTnVsbENoYW5uZWwsIFt7XG4gICAga2V5OiAnc3Vic2NyaWJlJyxcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byBhIGNoYW5uZWwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1YnNjcmliZSgpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIFVuc3Vic2NyaWJlIGZyb20gYSBjaGFubmVsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1bnN1YnNjcmliZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge31cbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnbGlzdGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN0b3AgbGlzdGVuaW5nIGZvciBhbiBldmVudCBvbiB0aGUgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc3RvcExpc3RlbmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BMaXN0ZW5pbmcoZXZlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCaW5kIGEgY2hhbm5lbCB0byBhbiBldmVudC5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbihldmVudCwgY2FsbGJhY2spIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVsbENoYW5uZWw7XG59KENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJpdmF0ZSBjaGFubmVsLlxuICovXG52YXIgTnVsbFByaXZhdGVDaGFubmVsID0gZnVuY3Rpb24gKF9OdWxsQ2hhbm5lbCkge1xuICBpbmhlcml0cyhOdWxsUHJpdmF0ZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByaXZhdGVDaGFubmVsKCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bGxQcml2YXRlQ2hhbm5lbCk7XG4gICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bGxQcml2YXRlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bGxQcml2YXRlQ2hhbm5lbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoTnVsbFByaXZhdGVDaGFubmVsLCBbe1xuICAgIGtleTogJ3doaXNwZXInLFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXG4gICAgICovXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdoaXNwZXIoZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bGxQcml2YXRlQ2hhbm5lbDtcbn0oTnVsbENoYW5uZWwpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIG51bGwgcHJlc2VuY2UgY2hhbm5lbC5cbiAqL1xudmFyIE51bGxQcmVzZW5jZUNoYW5uZWwgPSBmdW5jdGlvbiAoX051bGxDaGFubmVsKSB7XG4gIGluaGVyaXRzKE51bGxQcmVzZW5jZUNoYW5uZWwsIF9OdWxsQ2hhbm5lbCk7XG5cbiAgZnVuY3Rpb24gTnVsbFByZXNlbmNlQ2hhbm5lbCgpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdWxsUHJlc2VuY2VDaGFubmVsKTtcbiAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVsbFByZXNlbmNlQ2hhbm5lbC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bGxQcmVzZW5jZUNoYW5uZWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKE51bGxQcmVzZW5jZUNoYW5uZWwsIFt7XG4gICAga2V5OiAnaGVyZScsXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBhbnl0aW1lIHRoZSBtZW1iZXIgbGlzdCBjaGFuZ2VzLlxuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBoZXJlKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGpvaW5pbmcgdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2pvaW5pbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBqb2luaW5nKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGlzdGVuIGZvciBzb21lb25lIGxlYXZpbmcgdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2xlYXZpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2aW5nKGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBjbGllbnQgZXZlbnQgb24gdGhlIGNoYW5uZWwuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3doaXNwZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3aGlzcGVyKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdWxsUHJlc2VuY2VDaGFubmVsO1xufShOdWxsQ2hhbm5lbCk7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBjcmVhdGVzIGEgY29ubmVjdG9yIHRvIFB1c2hlci5cbiAqL1xudmFyIFB1c2hlckNvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gICAgaW5oZXJpdHMoUHVzaGVyQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFB1c2hlckNvbm5lY3RvcigpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHVzaGVyQ29ubmVjdG9yKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWxsIG9mIHRoZSBzdWJzY3JpYmVkIGNoYW5uZWwgbmFtZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQdXNoZXJDb25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQdXNoZXJDb25uZWN0b3IpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5jaGFubmVscyA9IHt9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGZyZXNoIFB1c2hlciBjb25uZWN0aW9uLlxuICAgICAqL1xuXG5cbiAgICBjcmVhdGVDbGFzcyhQdXNoZXJDb25uZWN0b3IsIFt7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmNsaWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2hlciA9IHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHVzaGVyID0gbmV3IFB1c2hlcih0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBQdXNoZXJDaGFubmVsKHRoaXMucHVzaGVyLCBuYW1lLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByaXZhdGUgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHJpdmF0ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdID0gbmV3IFB1c2hlclByaXZhdGVDaGFubmVsKHRoaXMucHVzaGVyLCAncHJpdmF0ZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcml2YXRlLScgKyBuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgcHJlc2VuY2UgY2hhbm5lbCBpbnN0YW5jZSBieSBuYW1lLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlc2VuY2VDaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbJ3ByZXNlbmNlLScgKyBuYW1lXSA9IG5ldyBQdXNoZXJQcmVzZW5jZUNoYW5uZWwodGhpcy5wdXNoZXIsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5sZWF2ZUNoYW5uZWwobmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKG5hbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXS51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZDtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzY29ubmVjdCBQdXNoZXIgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHVzaGVyQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIGNvbm5uZWN0b3IgdG8gYSBTb2NrZXQuaW8gc2VydmVyLlxuICovXG52YXIgU29ja2V0SW9Db25uZWN0b3IgPSBmdW5jdGlvbiAoX0Nvbm5lY3Rvcikge1xuICAgIGluaGVyaXRzKFNvY2tldElvQ29ubmVjdG9yLCBfQ29ubmVjdG9yKTtcblxuICAgIGZ1bmN0aW9uIFNvY2tldElvQ29ubmVjdG9yKCkge1xuICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTb2NrZXRJb0Nvbm5lY3Rvcik7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBvZiB0aGUgc3Vic2NyaWJlZCBjaGFubmVsIG5hbWVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU29ja2V0SW9Db25uZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTb2NrZXRJb0Nvbm5lY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLmNoYW5uZWxzID0ge307XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZnJlc2ggU29ja2V0LmlvIGNvbm5lY3Rpb24uXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKFNvY2tldElvQ29ubmVjdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICB2YXIgaW8gPSB0aGlzLmdldFNvY2tldElPKCk7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKHRoaXMub3B0aW9ucy5ob3N0LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0O1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgc29ja2V0LmlvIG1vZHVsZSBmcm9tIGdsb2JhbCBzY29wZSBvciBvcHRpb25zLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U29ja2V0SU8nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U29ja2V0SU8oKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jbGllbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGllbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ja2V0LmlvIGNsaWVudCBub3QgZm91bmQuIFNob3VsZCBiZSBnbG9iYWxseSBhdmFpbGFibGUgb3IgcGFzc2VkIHZpYSBvcHRpb25zLmNsaWVudCcpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW4gZm9yIGFuIGV2ZW50IG9uIGEgY2hhbm5lbCBpbnN0YW5jZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xpc3RlbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsKG5hbWUpLmxpc3RlbihldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGFubmVsJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IG5ldyBTb2NrZXRJb0NoYW5uZWwodGhpcy5zb2NrZXQsIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgcHJpdmF0ZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdwcml2YXRlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbJ3ByaXZhdGUtJyArIG5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9Qcml2YXRlQ2hhbm5lbCh0aGlzLnNvY2tldCwgJ3ByaXZhdGUtJyArIG5hbWUsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1sncHJpdmF0ZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVzZW5jZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV0gPSBuZXcgU29ja2V0SW9QcmVzZW5jZUNoYW5uZWwodGhpcy5zb2NrZXQsICdwcmVzZW5jZS0nICsgbmFtZSwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzWydwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLCBhcyB3ZWxsIGFzIGl0cyBwcml2YXRlIGFuZCBwcmVzZW5jZSB2YXJpYW50cy5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBbbmFtZSwgJ3ByaXZhdGUtJyArIG5hbWUsICdwcmVzZW5jZS0nICsgbmFtZV07XG4gICAgICAgICAgICBjaGFubmVscy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmxlYXZlQ2hhbm5lbChuYW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbC5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2xlYXZlQ2hhbm5lbCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgc29ja2V0IElEIGZvciB0aGUgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NvY2tldElkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc29ja2V0LmlkO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNjb25uZWN0IFNvY2tldGlvIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFNvY2tldElvQ29ubmVjdG9yO1xufShDb25uZWN0b3IpO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgY3JlYXRlcyBhIG51bGwgY29ubmVjdG9yLlxuICovXG52YXIgTnVsbENvbm5lY3RvciA9IGZ1bmN0aW9uIChfQ29ubmVjdG9yKSB7XG4gIGluaGVyaXRzKE51bGxDb25uZWN0b3IsIF9Db25uZWN0b3IpO1xuXG4gIGZ1bmN0aW9uIE51bGxDb25uZWN0b3IoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVsbENvbm5lY3Rvcik7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgb2YgdGhlIHN1YnNjcmliZWQgY2hhbm5lbCBuYW1lcy5cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdWxsQ29ubmVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVsbENvbm5lY3RvcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgX3RoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGZyZXNoIGNvbm5lY3Rpb24uXG4gICAqL1xuXG5cbiAgY3JlYXRlQ2xhc3MoTnVsbENvbm5lY3RvciwgW3tcbiAgICBrZXk6ICdjb25uZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgYW4gZXZlbnQgb24gYSBjaGFubmVsIGluc3RhbmNlLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsaXN0ZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW4obmFtZSwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxDaGFubmVsKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnY2hhbm5lbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNoYW5uZWwobmFtZSkge1xuICAgICAgcmV0dXJuIG5ldyBOdWxsQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncHJpdmF0ZUNoYW5uZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcml2YXRlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcml2YXRlQ2hhbm5lbCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBwcmVzZW5jZSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3ByZXNlbmNlQ2hhbm5lbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZXNlbmNlQ2hhbm5lbChuYW1lKSB7XG4gICAgICByZXR1cm4gbmV3IE51bGxQcmVzZW5jZUNoYW5uZWwoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwsIGFzIHdlbGwgYXMgaXRzIHByaXZhdGUgYW5kIHByZXNlbmNlIHZhcmlhbnRzLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxlYXZlKG5hbWUpIHt9XG4gICAgLy9cblxuICAgIC8qKlxuICAgICAqIExlYXZlIHRoZSBnaXZlbiBjaGFubmVsLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZUNoYW5uZWwobmFtZSkge31cbiAgICAvL1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBzb2NrZXQgSUQgZm9yIHRoZSBjb25uZWN0aW9uLlxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNvY2tldElkKCkge1xuICAgICAgcmV0dXJuICdmYWtlLXNvY2tldC1pZCc7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERpc2Nvbm5lY3QgdGhlIGNvbm5lY3Rpb24uXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2Rpc2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xuICAgICAgLy9cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bGxDb25uZWN0b3I7XG59KENvbm5lY3Rvcik7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBpcyB0aGUgcHJpbWFyeSBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggYnJvYWRjYXN0aW5nLlxuICovXG5cbnZhciBFY2hvID0gZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjbGFzcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFY2hvKG9wdGlvbnMpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRWNobyk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIGlmICghdGhpcy5vcHRpb25zLndpdGhvdXRJbnRlcmNlcHRvcnMpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcmNlcHRvcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjaGFubmVsIGluc3RhbmNlIGJ5IG5hbWUuXG4gICAgICovXG5cblxuICAgIGNyZWF0ZUNsYXNzKEVjaG8sIFt7XG4gICAgICAgIGtleTogJ2NoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY2hhbm5lbChfY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmNoYW5uZWwoX2NoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBuZXcgY29ubmVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnJvYWRjYXN0ZXIgPT0gJ3B1c2hlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RvciA9IG5ldyBQdXNoZXJDb25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdzb2NrZXQuaW8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgU29ja2V0SW9Db25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyID09ICdudWxsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yID0gbmV3IE51bGxDb25uZWN0b3IodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5icm9hZGNhc3RlciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBuZXcgdGhpcy5vcHRpb25zLmJyb2FkY2FzdGVyKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2Nvbm5lY3QgZnJvbSB0aGUgRWNobyBzZXJ2ZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdkaXNjb25uZWN0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBhIHByZXNlbmNlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2pvaW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gam9pbihjaGFubmVsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0b3IucHJlc2VuY2VDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMZWF2ZSB0aGUgZ2l2ZW4gY2hhbm5lbCwgYXMgd2VsbCBhcyBpdHMgcHJpdmF0ZSBhbmQgcHJlc2VuY2UgdmFyaWFudHMuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsZWF2ZShjaGFubmVsKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rvci5sZWF2ZShjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGVhdmUgdGhlIGdpdmVuIGNoYW5uZWwuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsZWF2ZUNoYW5uZWwnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGVhdmVDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdG9yLmxlYXZlQ2hhbm5lbChjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuIGZvciBhbiBldmVudCBvbiBhIGNoYW5uZWwgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW4nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdGVuKGNoYW5uZWwsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLmxpc3RlbihjaGFubmVsLCBldmVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgYSBwcml2YXRlIGNoYW5uZWwgaW5zdGFuY2UgYnkgbmFtZS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3ByaXZhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX3ByaXZhdGUoY2hhbm5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdG9yLnByaXZhdGVDaGFubmVsKGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIFNvY2tldCBJRCBmb3IgdGhlIGNvbm5lY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzb2NrZXRJZCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzb2NrZXRJZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rvci5zb2NrZXRJZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciAzcmQgcGFydHkgcmVxdWVzdCBpbnRlcmNlcHRpb3JzLiBUaGVzZSBhcmUgdXNlZCB0byBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAqIHNlbmQgYSBjb25uZWN0aW9ucyBzb2NrZXQgaWQgdG8gYSBMYXJhdmVsIGFwcCB3aXRoIGEgWC1Tb2NrZXQtSWQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJJbnRlcmNlcHRvcnMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcnMoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFZ1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBWdWUuaHR0cCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXhpb3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQXhpb3NSZXF1ZXN0SW50ZXJjZXB0b3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgalF1ZXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhIFZ1ZSBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3InLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVnaXN0ZXJWdWVSZXF1ZXN0SW50ZXJjZXB0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBWdWUuaHR0cC5pbnRlcmNlcHRvcnMucHVzaChmdW5jdGlvbiAocmVxdWVzdCwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVycy5zZXQoJ1gtU29ja2V0LUlEJywgX3RoaXMuc29ja2V0SWQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWdpc3RlciBhbiBBeGlvcyBIVFRQIGludGVyY2VwdG9yIHRvIGFkZCB0aGUgWC1Tb2NrZXQtSUQgaGVhZGVyLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVnaXN0ZXJBeGlvc1JlcXVlc3RJbnRlcmNlcHRvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlckF4aW9zUmVxdWVzdEludGVyY2VwdG9yKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzMi5zb2NrZXRJZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzWydYLVNvY2tldC1JZCddID0gX3RoaXMyLnNvY2tldElkKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogUmVnaXN0ZXIgalF1ZXJ5IEFqYXhQcmVmaWx0ZXIgdG8gYWRkIHRoZSBYLVNvY2tldC1JRCBoZWFkZXIuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWdpc3RlcmpRdWVyeUFqYXhTZXR1cCgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeS5hamF4ICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoZnVuY3Rpb24gKG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywgeGhyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczMuc29ja2V0SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtU29ja2V0LUlkJywgX3RoaXMzLnNvY2tldElkKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIEVjaG87XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVjaG87XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2xpbmtpZnktZWxlbWVudCcpLmRlZmF1bHQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2xpbmtpZnknKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9saW5raWZ5ID0gcmVxdWlyZSgnLi9saW5raWZ5Jyk7XG5cbnZhciBsaW5raWZ5ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xpbmtpZnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgdG9rZW5pemUgPSBsaW5raWZ5LnRva2VuaXplLFxuICAgIG9wdGlvbnMgPSBsaW5raWZ5Lm9wdGlvbnM7IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0TGlua2lmeSBhIEhUTUwgRE9NIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgT3B0aW9ucyA9IG9wdGlvbnMuT3B0aW9ucztcblxuXG52YXIgVEVYVF9UT0tFTiA9IGxpbmtpZnkucGFyc2VyLlRPS0VOUy5URVhUO1xuXG52YXIgSFRNTF9OT0RFID0gMSxcbiAgICBUWFRfTk9ERSA9IDM7XG5cbi8qKlxuXHRHaXZlbiBhIHBhcmVudCBlbGVtZW50IGFuZCBjaGlsZCBub2RlIHRoYXQgdGhlIHBhcmVudCBjb250YWlucywgcmVwbGFjZXNcblx0dGhhdCBjaGlsZCB3aXRoIHRoZSBnaXZlbiBhcnJheSBvZiBuZXcgY2hpbGRyZW5cbiovXG5mdW5jdGlvbiByZXBsYWNlQ2hpbGRXaXRoQ2hpbGRyZW4ocGFyZW50LCBvbGRDaGlsZCwgbmV3Q2hpbGRyZW4pIHtcblx0dmFyIGxhc3ROZXdDaGlsZCA9IG5ld0NoaWxkcmVuW25ld0NoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXHRwYXJlbnQucmVwbGFjZUNoaWxkKGxhc3ROZXdDaGlsZCwgb2xkQ2hpbGQpO1xuXHRmb3IgKHZhciBpID0gbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMjsgaSA+PSAwOyBpLS0pIHtcblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkcmVuW2ldLCBsYXN0TmV3Q2hpbGQpO1xuXHRcdGxhc3ROZXdDaGlsZCA9IG5ld0NoaWxkcmVuW2ldO1xuXHR9XG59XG5cbi8qKlxuXHRHaXZlbiBhbiBhcnJheSBvZiBNdWx0aVRva2VucywgcmV0dXJuIGFuIGFycmF5IG9mIE5vZGVzIHRoYXQgYXJlIGVpdGhlclxuXHQoYSkgUGxhaW4gVGV4dCBub2RlcyAobm9kZSB0eXBlIDMpXG5cdChiKSBBbmNob3IgdGFnIG5vZGVzICh1c3VhbGx5LCB1bmxlc3MgdGFnIG5hbWUgaXMgb3ZlcnJpZGRlbiBpbiB0aGUgb3B0aW9ucylcblxuXHRUYWtlcyB0aGUgc2FtZSBvcHRpb25zIGFzIGxpbmtpZnlFbGVtZW50IGFuZCBhbiBvcHRpb25hbCBkb2MgZWxlbWVudFxuXHQodGhpcyBzaG91bGQgYmUgcGFzc2VkIGluIGJ5IGxpbmtpZnlFbGVtZW50KVxuKi9cbmZ1bmN0aW9uIHRva2Vuc1RvTm9kZXModG9rZW5zLCBvcHRzLCBkb2MpIHtcblx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdGZvciAodmFyIF9pdGVyYXRvciA9IHRva2VucywgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcblx0XHR2YXIgX3JlZjtcblxuXHRcdGlmIChfaXNBcnJheSkge1xuXHRcdFx0aWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuXHRcdFx0X3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuXHRcdFx0aWYgKF9pLmRvbmUpIGJyZWFrO1xuXHRcdFx0X3JlZiA9IF9pLnZhbHVlO1xuXHRcdH1cblxuXHRcdHZhciB0b2tlbiA9IF9yZWY7XG5cblx0XHRpZiAodG9rZW4udHlwZSA9PT0gJ25sJyAmJiBvcHRzLm5sMmJyKSB7XG5cdFx0XHRyZXN1bHQucHVzaChkb2MuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9IGVsc2UgaWYgKCF0b2tlbi5pc0xpbmsgfHwgIW9wdHMuY2hlY2sodG9rZW4pKSB7XG5cdFx0XHRyZXN1bHQucHVzaChkb2MuY3JlYXRlVGV4dE5vZGUodG9rZW4udG9TdHJpbmcoKSkpO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIF9vcHRzJHJlc29sdmUgPSBvcHRzLnJlc29sdmUodG9rZW4pLFxuXHRcdCAgICBmb3JtYXR0ZWQgPSBfb3B0cyRyZXNvbHZlLmZvcm1hdHRlZCxcblx0XHQgICAgZm9ybWF0dGVkSHJlZiA9IF9vcHRzJHJlc29sdmUuZm9ybWF0dGVkSHJlZixcblx0XHQgICAgdGFnTmFtZSA9IF9vcHRzJHJlc29sdmUudGFnTmFtZSxcblx0XHQgICAgY2xhc3NOYW1lID0gX29wdHMkcmVzb2x2ZS5jbGFzc05hbWUsXG5cdFx0ICAgIHRhcmdldCA9IF9vcHRzJHJlc29sdmUudGFyZ2V0LFxuXHRcdCAgICBldmVudHMgPSBfb3B0cyRyZXNvbHZlLmV2ZW50cyxcblx0XHQgICAgYXR0cmlidXRlcyA9IF9vcHRzJHJlc29sdmUuYXR0cmlidXRlcztcblxuXHRcdC8vIEJ1aWxkIHRoZSBsaW5rXG5cblxuXHRcdHZhciBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBmb3JtYXR0ZWRIcmVmKTtcblxuXHRcdGlmIChjbGFzc05hbWUpIHtcblx0XHRcdGxpbmsuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzTmFtZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhcmdldCkge1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsIHRhcmdldCk7XG5cdFx0fVxuXG5cdFx0Ly8gQnVpbGQgdXAgYWRkaXRpb25hbCBhdHRyaWJ1dGVzXG5cdFx0aWYgKGF0dHJpYnV0ZXMpIHtcblx0XHRcdGZvciAodmFyIGF0dHIgaW4gYXR0cmlidXRlcykge1xuXHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzW2F0dHJdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXZlbnRzKSB7XG5cdFx0XHRmb3IgKHZhciBldmVudCBpbiBldmVudHMpIHtcblx0XHRcdFx0aWYgKGxpbmsuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRzW2V2ZW50XSk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobGluay5hdHRhY2hFdmVudCkge1xuXHRcdFx0XHRcdGxpbmsuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBldmVudHNbZXZlbnRdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxpbmsuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGZvcm1hdHRlZCkpO1xuXHRcdHJlc3VsdC5wdXNoKGxpbmspO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gUmVxdWlyZXMgZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuZnVuY3Rpb24gbGlua2lmeUVsZW1lbnRIZWxwZXIoZWxlbWVudCwgb3B0cywgZG9jKSB7XG5cblx0Ly8gQ2FuIHRoZSBlbGVtZW50IGJlIGxpbmtpZmllZD9cblx0aWYgKCFlbGVtZW50IHx8IGVsZW1lbnQubm9kZVR5cGUgIT09IEhUTUxfTk9ERSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGxpbmtpZnkgJyArIGVsZW1lbnQgKyAnIC0gSW52YWxpZCBET00gTm9kZSB0eXBlJyk7XG5cdH1cblxuXHR2YXIgaWdub3JlVGFncyA9IG9wdHMuaWdub3JlVGFncztcblxuXHQvLyBJcyB0aGlzIGVsZW1lbnQgYWxyZWFkeSBhIGxpbms/XG5cdGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdBJyB8fCBvcHRpb25zLmNvbnRhaW5zKGlnbm9yZVRhZ3MsIGVsZW1lbnQudGFnTmFtZSkpIHtcblx0XHQvLyBObyBuZWVkIHRvIGxpbmtpZnlcblx0XHRyZXR1cm4gZWxlbWVudDtcblx0fVxuXG5cdHZhciBjaGlsZEVsZW1lbnQgPSBlbGVtZW50LmZpcnN0Q2hpbGQ7XG5cblx0d2hpbGUgKGNoaWxkRWxlbWVudCkge1xuXHRcdHZhciBzdHIgPSB2b2lkIDAsXG5cdFx0ICAgIHRva2VucyA9IHZvaWQgMCxcblx0XHQgICAgbm9kZXMgPSB2b2lkIDA7XG5cblx0XHRzd2l0Y2ggKGNoaWxkRWxlbWVudC5ub2RlVHlwZSkge1xuXHRcdFx0Y2FzZSBIVE1MX05PREU6XG5cdFx0XHRcdGxpbmtpZnlFbGVtZW50SGVscGVyKGNoaWxkRWxlbWVudCwgb3B0cywgZG9jKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFRYVF9OT0RFOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RyID0gY2hpbGRFbGVtZW50Lm5vZGVWYWx1ZTtcblx0XHRcdFx0XHR0b2tlbnMgPSB0b2tlbml6ZShzdHIpO1xuXG5cdFx0XHRcdFx0aWYgKHRva2Vucy5sZW5ndGggPT09IDAgfHwgdG9rZW5zLmxlbmd0aCA9PT0gMSAmJiB0b2tlbnNbMF0gaW5zdGFuY2VvZiBURVhUX1RPS0VOKSB7XG5cdFx0XHRcdFx0XHQvLyBObyBub2RlIHJlcGxhY2VtZW50IHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRub2RlcyA9IHRva2Vuc1RvTm9kZXModG9rZW5zLCBvcHRzLCBkb2MpO1xuXG5cdFx0XHRcdFx0Ly8gU3dhcCBvdXQgdGhlIGN1cnJlbnQgY2hpbGQgZm9yIHRoZSBzZXQgb2Ygbm9kZXNcblx0XHRcdFx0XHRyZXBsYWNlQ2hpbGRXaXRoQ2hpbGRyZW4oZWxlbWVudCwgY2hpbGRFbGVtZW50LCBub2Rlcyk7XG5cblx0XHRcdFx0XHQvLyBzbyB0aGF0IHRoZSBjb3JyZWN0IHNpYmxpbmcgaXMgc2VsZWN0ZWQgbmV4dFxuXHRcdFx0XHRcdGNoaWxkRWxlbWVudCA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHR9XG5cblx0XHRjaGlsZEVsZW1lbnQgPSBjaGlsZEVsZW1lbnQubmV4dFNpYmxpbmc7XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gbGlua2lmeUVsZW1lbnQoZWxlbWVudCwgb3B0cykge1xuXHR2YXIgZG9jID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuXG5cdHRyeSB7XG5cdFx0ZG9jID0gZG9jIHx8IGRvY3VtZW50IHx8IHdpbmRvdyAmJiB3aW5kb3cuZG9jdW1lbnQgfHwgZ2xvYmFsICYmIGdsb2JhbC5kb2N1bWVudDtcblx0fSBjYXRjaCAoZSkgey8qIGRvIG5vdGhpbmcgZm9yIG5vdyAqL31cblxuXHRpZiAoIWRvYykge1xuXHRcdHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZG9jdW1lbnQgaW1wbGVtZW50YXRpb24uICcgKyAnSWYgeW91IGFyZSBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50IGxpa2UgTm9kZS5qcywgJyArICdwYXNzIHRoZSBkb2N1bWVudCBpbXBsZW1lbnRhdGlvbiBhcyB0aGUgdGhpcmQgYXJndW1lbnQgdG8gbGlua2lmeUVsZW1lbnQuJyk7XG5cdH1cblxuXHRvcHRzID0gbmV3IE9wdGlvbnMob3B0cyk7XG5cdHJldHVybiBsaW5raWZ5RWxlbWVudEhlbHBlcihlbGVtZW50LCBvcHRzLCBkb2MpO1xufVxuXG4vLyBNYWludGFpbiByZWZlcmVuY2UgdG8gdGhlIHJlY3Vyc2l2ZSBoZWxwZXIgdG8gY2FjaGUgb3B0aW9uLW5vcm1hbGl6YXRpb25cbmxpbmtpZnlFbGVtZW50LmhlbHBlciA9IGxpbmtpZnlFbGVtZW50SGVscGVyO1xubGlua2lmeUVsZW1lbnQubm9ybWFsaXplID0gZnVuY3Rpb24gKG9wdHMpIHtcblx0cmV0dXJuIG5ldyBPcHRpb25zKG9wdHMpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gbGlua2lmeUVsZW1lbnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50b2tlbml6ZSA9IGV4cG9ydHMudGVzdCA9IGV4cG9ydHMuc2Nhbm5lciA9IGV4cG9ydHMucGFyc2VyID0gZXhwb3J0cy5vcHRpb25zID0gZXhwb3J0cy5pbmhlcml0cyA9IGV4cG9ydHMuZmluZCA9IHVuZGVmaW5lZDtcblxudmFyIF9jbGFzcyA9IHJlcXVpcmUoJy4vbGlua2lmeS91dGlscy9jbGFzcycpO1xuXG52YXIgX29wdGlvbnMgPSByZXF1aXJlKCcuL2xpbmtpZnkvdXRpbHMvb3B0aW9ucycpO1xuXG52YXIgb3B0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9vcHRpb25zKTtcblxudmFyIF9zY2FubmVyID0gcmVxdWlyZSgnLi9saW5raWZ5L2NvcmUvc2Nhbm5lcicpO1xuXG52YXIgc2Nhbm5lciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9zY2FubmVyKTtcblxudmFyIF9wYXJzZXIgPSByZXF1aXJlKCcuL2xpbmtpZnkvY29yZS9wYXJzZXInKTtcblxudmFyIHBhcnNlciA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wYXJzZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcblx0QXJyYXkuaXNBcnJheSA9IGZ1bmN0aW9uIChhcmcpIHtcblx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH07XG59XG5cbi8qKlxuXHRDb252ZXJ0cyBhIHN0cmluZyBpbnRvIHRva2VucyB0aGF0IHJlcHJlc2VudCBsaW5rYWJsZSBhbmQgbm9uLWxpbmthYmxlIGJpdHNcblx0QG1ldGhvZCB0b2tlbml6ZVxuXHRAcGFyYW0ge1N0cmluZ30gc3RyXG5cdEByZXR1cm4ge0FycmF5fSB0b2tlbnNcbiovXG52YXIgdG9rZW5pemUgPSBmdW5jdGlvbiB0b2tlbml6ZShzdHIpIHtcblx0cmV0dXJuIHBhcnNlci5ydW4oc2Nhbm5lci5ydW4oc3RyKSk7XG59O1xuXG4vKipcblx0UmV0dXJucyBhIGxpc3Qgb2YgbGlua2FibGUgaXRlbXMgaW4gdGhlIGdpdmVuIHN0cmluZy5cbiovXG52YXIgZmluZCA9IGZ1bmN0aW9uIGZpbmQoc3RyKSB7XG5cdHZhciB0eXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuXG5cdHZhciB0b2tlbnMgPSB0b2tlbml6ZShzdHIpO1xuXHR2YXIgZmlsdGVyZWQgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcblx0XHRpZiAodG9rZW4uaXNMaW5rICYmICghdHlwZSB8fCB0b2tlbi50eXBlID09PSB0eXBlKSkge1xuXHRcdFx0ZmlsdGVyZWQucHVzaCh0b2tlbi50b09iamVjdCgpKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmlsdGVyZWQ7XG59O1xuXG4vKipcblx0SXMgdGhlIGdpdmVuIHN0cmluZyB2YWxpZCBsaW5rYWJsZSB0ZXh0IG9mIHNvbWUgc29ydFxuXHROb3RlIHRoYXQgdGhpcyBkb2VzIG5vdCB0cmltIHRoZSB0ZXh0IGZvciB5b3UuXG5cblx0T3B0aW9uYWxseSBwYXNzIGluIGEgc2Vjb25kIGB0eXBlYCBwYXJhbSwgd2hpY2ggaXMgdGhlIHR5cGUgb2YgbGluayB0byB0ZXN0XG5cdGZvci5cblxuXHRGb3IgZXhhbXBsZSxcblxuXHRcdHRlc3Qoc3RyLCAnZW1haWwnKTtcblxuXHRXaWxsIHJldHVybiBgdHJ1ZWAgaWYgc3RyIGlzIGEgdmFsaWQgZW1haWwuXG4qL1xudmFyIHRlc3QgPSBmdW5jdGlvbiB0ZXN0KHN0cikge1xuXHR2YXIgdHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcblxuXHR2YXIgdG9rZW5zID0gdG9rZW5pemUoc3RyKTtcblx0cmV0dXJuIHRva2Vucy5sZW5ndGggPT09IDEgJiYgdG9rZW5zWzBdLmlzTGluayAmJiAoIXR5cGUgfHwgdG9rZW5zWzBdLnR5cGUgPT09IHR5cGUpO1xufTtcblxuLy8gU2Nhbm5lciBhbmQgcGFyc2VyIHByb3ZpZGUgc3RhdGVzIGFuZCB0b2tlbnMgZm9yIHRoZSBsZXhpY29ncmFwaGljIHN0YWdlXG4vLyAod2lsbCBiZSB1c2VkIHRvIGFkZCBhZGRpdGlvbmFsIGxpbmsgdHlwZXMpXG5leHBvcnRzLmZpbmQgPSBmaW5kO1xuZXhwb3J0cy5pbmhlcml0cyA9IF9jbGFzcy5pbmhlcml0cztcbmV4cG9ydHMub3B0aW9ucyA9IG9wdGlvbnM7XG5leHBvcnRzLnBhcnNlciA9IHBhcnNlcjtcbmV4cG9ydHMuc2Nhbm5lciA9IHNjYW5uZXI7XG5leHBvcnRzLnRlc3QgPSB0ZXN0O1xuZXhwb3J0cy50b2tlbml6ZSA9IHRva2VuaXplOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RhcnQgPSBleHBvcnRzLnJ1biA9IGV4cG9ydHMuVE9LRU5TID0gZXhwb3J0cy5TdGF0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9zdGF0ZSA9IHJlcXVpcmUoJy4vc3RhdGUnKTtcblxudmFyIF9tdWx0aSA9IHJlcXVpcmUoJy4vdG9rZW5zL211bHRpJyk7XG5cbnZhciBNVUxUSV9UT0tFTlMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbXVsdGkpO1xuXG52YXIgX3RleHQgPSByZXF1aXJlKCcuL3Rva2Vucy90ZXh0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbi8qKlxuXHROb3QgZXhhY3RseSBwYXJzZXIsIG1vcmUgbGlrZSB0aGUgc2Vjb25kLXN0YWdlIHNjYW5uZXIgKGFsdGhvdWdoIHdlIGNhblxuXHR0aGVvcmV0aWNhbGx5IGhvdHN3YXAgdGhlIGNvZGUgaGVyZSB3aXRoIGEgcmVhbCBwYXJzZXIgaW4gdGhlIGZ1dHVyZS4uLiBidXRcblx0Zm9yIGEgbGl0dGxlIFVSTC1maW5kaW5nIHV0aWxpdHkgYWJzdHJhY3Qgc3ludGF4IHRyZWVzIG1heSBiZSBhIGxpdHRsZVxuXHRvdmVya2lsbCkuXG5cblx0VVJMIGZvcm1hdDogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VUklfc2NoZW1lXG5cdEVtYWlsIGZvcm1hdDogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9FbWFpbF9hZGRyZXNzIChsaW5rcyB0byBSRkMgaW5cblx0cmVmZXJlbmNlKVxuXG5cdEBtb2R1bGUgbGlua2lmeVxuXHRAc3VibW9kdWxlIHBhcnNlclxuXHRAbWFpbiBwYXJzZXJcbiovXG5cbnZhciBtYWtlU3RhdGUgPSBmdW5jdGlvbiBtYWtlU3RhdGUodG9rZW5DbGFzcykge1xuXHRyZXR1cm4gbmV3IF9zdGF0ZS5Ub2tlblN0YXRlKHRva2VuQ2xhc3MpO1xufTtcblxuLy8gVGhlIHVuaXZlcnNhbCBzdGFydGluZyBzdGF0ZS5cbnZhciBTX1NUQVJUID0gbWFrZVN0YXRlKCk7XG5cbi8vIEludGVybWVkaWF0ZSBzdGF0ZXMgZm9yIFVSTHMuIE5vdGUgdGhhdCBkb21haW5zIHRoYXQgYmVnaW4gd2l0aCBhIHByb3RvY29sXG4vLyBhcmUgdHJlYXRlZCBzbGlnaGx5IGRpZmZlcmVudGx5IGZyb20gdGhvc2UgdGhhdCBkb24ndC5cbnZhciBTX1BST1RPQ09MID0gbWFrZVN0YXRlKCk7IC8vIGUuZy4sICdodHRwOidcbnZhciBTX01BSUxUTyA9IG1ha2VTdGF0ZSgpOyAvLyAnbWFpbHRvOidcbnZhciBTX1BST1RPQ09MX1NMQVNIID0gbWFrZVN0YXRlKCk7IC8vIGUuZy4sICcvJywgJ2h0dHA6LycnXG52YXIgU19QUk9UT0NPTF9TTEFTSF9TTEFTSCA9IG1ha2VTdGF0ZSgpOyAvLyBlLmcuLCAnLy8nLCAnaHR0cDovLydcbnZhciBTX0RPTUFJTiA9IG1ha2VTdGF0ZSgpOyAvLyBwYXJzZWQgc3RyaW5nIGVuZHMgd2l0aCBhIHBvdGVudGlhbCBkb21haW4gbmFtZSAoQSlcbnZhciBTX0RPTUFJTl9ET1QgPSBtYWtlU3RhdGUoKTsgLy8gKEEpIGRvbWFpbiBmb2xsb3dlZCBieSBET1RcbnZhciBTX1RMRCA9IG1ha2VTdGF0ZShfbXVsdGkuVVJMKTsgLy8gKEEpIFNpbXBsZXN0IHBvc3NpYmxlIFVSTCB3aXRoIG5vIHF1ZXJ5IHN0cmluZ1xudmFyIFNfVExEX0NPTE9OID0gbWFrZVN0YXRlKCk7IC8vIChBKSBVUkwgZm9sbG93ZWQgYnkgY29sb24gKHBvdGVudGlhbCBwb3J0IG51bWJlciBoZXJlKVxudmFyIFNfVExEX1BPUlQgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIFRMRCBmb2xsb3dlZCBieSBhIHBvcnQgbnVtYmVyXG52YXIgU19VUkwgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIExvbmcgVVJMIHdpdGggb3B0aW9uYWwgcG9ydCBhbmQgbWF5YmUgcXVlcnkgc3RyaW5nXG52YXIgU19VUkxfTk9OX0FDQ0VQVElORyA9IG1ha2VTdGF0ZSgpOyAvLyBVUkwgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzICh3aWxsIG5vdCBiZSBwYXJ0IG9mIHRoZSBmaW5hbCBVUkwpXG52YXIgU19VUkxfT1BFTkJSQUNFID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSB7XG52YXIgU19VUkxfT1BFTkJSQUNLRVQgPSBtYWtlU3RhdGUoKTsgLy8gVVJMIGZvbGxvd2VkIGJ5IFtcbnZhciBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSA8XG52YXIgU19VUkxfT1BFTlBBUkVOID0gbWFrZVN0YXRlKCk7IC8vIFVSTCBmb2xsb3dlZCBieSAoXG52YXIgU19VUkxfT1BFTkJSQUNFX1EgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIFVSTCBmb2xsb3dlZCBieSB7IGFuZCBzb21lIHN5bWJvbHMgdGhhdCB0aGUgVVJMIGNhbiBlbmQgaXRcbnZhciBTX1VSTF9PUEVOQlJBQ0tFVF9RID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBVUkwgZm9sbG93ZWQgYnkgWyBhbmQgc29tZSBzeW1ib2xzIHRoYXQgdGhlIFVSTCBjYW4gZW5kIGl0XG52YXIgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RID0gbWFrZVN0YXRlKF9tdWx0aS5VUkwpOyAvLyBVUkwgZm9sbG93ZWQgYnkgPCBhbmQgc29tZSBzeW1ib2xzIHRoYXQgdGhlIFVSTCBjYW4gZW5kIGl0XG52YXIgU19VUkxfT1BFTlBBUkVOX1EgPSBtYWtlU3RhdGUoX211bHRpLlVSTCk7IC8vIFVSTCBmb2xsb3dlZCBieSAoIGFuZCBzb21lIHN5bWJvbHMgdGhhdCB0aGUgVVJMIGNhbiBlbmQgaXRcbnZhciBTX1VSTF9PUEVOQlJBQ0VfU1lNUyA9IG1ha2VTdGF0ZSgpOyAvLyBTX1VSTF9PUEVOQlJBQ0VfUSBmb2xsb3dlZCBieSBzb21lIHN5bWJvbHMgaXQgY2Fubm90IGVuZCBpdFxudmFyIFNfVVJMX09QRU5CUkFDS0VUX1NZTVMgPSBtYWtlU3RhdGUoKTsgLy8gU19VUkxfT1BFTkJSQUNLRVRfUSBmb2xsb3dlZCBieSBzb21lIHN5bWJvbHMgaXQgY2Fubm90IGVuZCBpdFxudmFyIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfU1lNUyA9IG1ha2VTdGF0ZSgpOyAvLyBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzIGl0IGNhbm5vdCBlbmQgaXRcbnZhciBTX1VSTF9PUEVOUEFSRU5fU1lNUyA9IG1ha2VTdGF0ZSgpOyAvLyBTX1VSTF9PUEVOUEFSRU5fUSBmb2xsb3dlZCBieSBzb21lIHN5bWJvbHMgaXQgY2Fubm90IGVuZCBpdFxudmFyIFNfRU1BSUxfRE9NQUlOID0gbWFrZVN0YXRlKCk7IC8vIHBhcnNlZCBzdHJpbmcgc3RhcnRzIHdpdGggbG9jYWwgZW1haWwgaW5mbyArIEAgd2l0aCBhIHBvdGVudGlhbCBkb21haW4gbmFtZSAoQylcbnZhciBTX0VNQUlMX0RPTUFJTl9ET1QgPSBtYWtlU3RhdGUoKTsgLy8gKEMpIGRvbWFpbiBmb2xsb3dlZCBieSBET1RcbnZhciBTX0VNQUlMID0gbWFrZVN0YXRlKF9tdWx0aS5FTUFJTCk7IC8vIChDKSBQb3NzaWJsZSBlbWFpbCBhZGRyZXNzIChjb3VsZCBoYXZlIG1vcmUgdGxkcylcbnZhciBTX0VNQUlMX0NPTE9OID0gbWFrZVN0YXRlKCk7IC8vIChDKSBVUkwgZm9sbG93ZWQgYnkgY29sb24gKHBvdGVudGlhbCBwb3J0IG51bWJlciBoZXJlKVxudmFyIFNfRU1BSUxfUE9SVCA9IG1ha2VTdGF0ZShfbXVsdGkuRU1BSUwpOyAvLyAoQykgRW1haWwgYWRkcmVzcyB3aXRoIGEgcG9ydFxudmFyIFNfTUFJTFRPX0VNQUlMID0gbWFrZVN0YXRlKF9tdWx0aS5NQUlMVE9FTUFJTCk7IC8vIEVtYWlsIHRoYXQgYmVnaW5zIHdpdGggdGhlIG1haWx0byBwcmVmaXggKEQpXG52YXIgU19NQUlMVE9fRU1BSUxfTk9OX0FDQ0VQVElORyA9IG1ha2VTdGF0ZSgpOyAvLyAoRCkgRm9sbG93ZWQgYnkgc29tZSBub24tcXVlcnkgc3RyaW5nIGNoYXJzXG52YXIgU19MT0NBTFBBUlQgPSBtYWtlU3RhdGUoKTsgLy8gTG9jYWwgcGFydCBvZiB0aGUgZW1haWwgYWRkcmVzc1xudmFyIFNfTE9DQUxQQVJUX0FUID0gbWFrZVN0YXRlKCk7IC8vIExvY2FsIHBhcnQgb2YgdGhlIGVtYWlsIGFkZHJlc3MgcGx1cyBAXG52YXIgU19MT0NBTFBBUlRfRE9UID0gbWFrZVN0YXRlKCk7IC8vIExvY2FsIHBhcnQgb2YgdGhlIGVtYWlsIGFkZHJlc3MgcGx1cyAnLicgKGxvY2FscGFydCBjYW5ub3QgZW5kIGluIC4pXG52YXIgU19OTCA9IG1ha2VTdGF0ZShfbXVsdGkuTkwpOyAvLyBzaW5nbGUgbmV3IGxpbmVcblxuLy8gTWFrZSBwYXRoIGZyb20gc3RhcnQgdG8gcHJvdG9jb2wgKHdpdGggJy8vJylcblNfU1RBUlQub24oX3RleHQuTkwsIFNfTkwpLm9uKF90ZXh0LlBST1RPQ09MLCBTX1BST1RPQ09MKS5vbihfdGV4dC5NQUlMVE8sIFNfTUFJTFRPKS5vbihfdGV4dC5TTEFTSCwgU19QUk9UT0NPTF9TTEFTSCk7XG5cblNfUFJPVE9DT0wub24oX3RleHQuU0xBU0gsIFNfUFJPVE9DT0xfU0xBU0gpO1xuU19QUk9UT0NPTF9TTEFTSC5vbihfdGV4dC5TTEFTSCwgU19QUk9UT0NPTF9TTEFTSF9TTEFTSCk7XG5cbi8vIFRoZSB2ZXJ5IGZpcnN0IHBvdGVudGlhbCBkb21haW4gbmFtZVxuU19TVEFSVC5vbihfdGV4dC5UTEQsIFNfRE9NQUlOKS5vbihfdGV4dC5ET01BSU4sIFNfRE9NQUlOKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfVExEKS5vbihfdGV4dC5OVU0sIFNfRE9NQUlOKTtcblxuLy8gRm9yY2UgVVJMIGZvciBwcm90b2NvbCBmb2xsb3dlZCBieSBhbnl0aGluZyBzYW5lXG5TX1BST1RPQ09MX1NMQVNIX1NMQVNILm9uKF90ZXh0LlRMRCwgU19VUkwpLm9uKF90ZXh0LkRPTUFJTiwgU19VUkwpLm9uKF90ZXh0Lk5VTSwgU19VUkwpLm9uKF90ZXh0LkxPQ0FMSE9TVCwgU19VUkwpO1xuXG4vLyBBY2NvdW50IGZvciBkb3RzIGFuZCBoeXBoZW5zXG4vLyBoeXBoZW5zIGFyZSB1c3VhbGx5IHBhcnRzIG9mIGRvbWFpbiBuYW1lc1xuU19ET01BSU4ub24oX3RleHQuRE9ULCBTX0RPTUFJTl9ET1QpO1xuU19FTUFJTF9ET01BSU4ub24oX3RleHQuRE9ULCBTX0VNQUlMX0RPTUFJTl9ET1QpO1xuXG4vLyBIeXBoZW4gY2FuIGp1bXAgYmFjayB0byBhIGRvbWFpbiBuYW1lXG5cbi8vIEFmdGVyIHRoZSBmaXJzdCBkb21haW4gYW5kIGEgZG90LCB3ZSBjYW4gZmluZCBlaXRoZXIgYSBVUkwgb3IgYW5vdGhlciBkb21haW5cblNfRE9NQUlOX0RPVC5vbihfdGV4dC5UTEQsIFNfVExEKS5vbihfdGV4dC5ET01BSU4sIFNfRE9NQUlOKS5vbihfdGV4dC5OVU0sIFNfRE9NQUlOKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfRE9NQUlOKTtcblxuU19FTUFJTF9ET01BSU5fRE9ULm9uKF90ZXh0LlRMRCwgU19FTUFJTCkub24oX3RleHQuRE9NQUlOLCBTX0VNQUlMX0RPTUFJTikub24oX3RleHQuTlVNLCBTX0VNQUlMX0RPTUFJTikub24oX3RleHQuTE9DQUxIT1NULCBTX0VNQUlMX0RPTUFJTik7XG5cbi8vIFNfVExEIGFjY2VwdHMhIEJ1dCB0aGUgVVJMIGNvdWxkIGJlIGxvbmdlciwgdHJ5IHRvIGZpbmQgYSBtYXRjaCBncmVlZGlseVxuLy8gVGhlIGBydW5gIGZ1bmN0aW9uIHNob3VsZCBiZSBhYmxlIHRvIFwicm9sbGJhY2tcIiB0byB0aGUgYWNjZXB0aW5nIHN0YXRlXG5TX1RMRC5vbihfdGV4dC5ET1QsIFNfRE9NQUlOX0RPVCk7XG5TX0VNQUlMLm9uKF90ZXh0LkRPVCwgU19FTUFJTF9ET01BSU5fRE9UKTtcblxuLy8gQmVjb21lIHJlYWwgVVJMcyBhZnRlciBgU0xBU0hgIG9yIGBDT0xPTiBOVU0gU0xBU0hgXG4vLyBIZXJlIFBTUyBhbmQgbm9uLVBTUyBjb252ZXJnZVxuU19UTEQub24oX3RleHQuQ09MT04sIFNfVExEX0NPTE9OKS5vbihfdGV4dC5TTEFTSCwgU19VUkwpO1xuU19UTERfQ09MT04ub24oX3RleHQuTlVNLCBTX1RMRF9QT1JUKTtcblNfVExEX1BPUlQub24oX3RleHQuU0xBU0gsIFNfVVJMKTtcblNfRU1BSUwub24oX3RleHQuQ09MT04sIFNfRU1BSUxfQ09MT04pO1xuU19FTUFJTF9DT0xPTi5vbihfdGV4dC5OVU0sIFNfRU1BSUxfUE9SVCk7XG5cbi8vIFR5cGVzIG9mIGNoYXJhY3RlcnMgdGhlIFVSTCBjYW4gZGVmaW5pdGVseSBlbmQgaW5cbnZhciBxc0FjY2VwdGluZyA9IFtfdGV4dC5ET01BSU4sIF90ZXh0LkFULCBfdGV4dC5MT0NBTEhPU1QsIF90ZXh0Lk5VTSwgX3RleHQuUExVUywgX3RleHQuUE9VTkQsIF90ZXh0LlBST1RPQ09MLCBfdGV4dC5TTEFTSCwgX3RleHQuVExELCBfdGV4dC5VTkRFUlNDT1JFLCBfdGV4dC5TWU0sIF90ZXh0LkFNUEVSU0FORF07XG5cbi8vIFR5cGVzIG9mIHRva2VucyB0aGF0IGNhbiBmb2xsb3cgYSBVUkwgYW5kIGJlIHBhcnQgb2YgdGhlIHF1ZXJ5IHN0cmluZ1xuLy8gYnV0IGNhbm5vdCBiZSB0aGUgdmVyeSBsYXN0IGNoYXJhY3RlcnNcbi8vIENoYXJhY3RlcnMgdGhhdCBjYW5ub3QgYXBwZWFyIGluIHRoZSBVUkwgYXQgYWxsIHNob3VsZCBiZSBleGNsdWRlZFxudmFyIHFzTm9uQWNjZXB0aW5nID0gW190ZXh0LkNPTE9OLCBfdGV4dC5ET1QsIF90ZXh0LlFVRVJZLCBfdGV4dC5QVU5DVFVBVElPTiwgX3RleHQuQ0xPU0VCUkFDRSwgX3RleHQuQ0xPU0VCUkFDS0VULCBfdGV4dC5DTE9TRUFOR0xFQlJBQ0tFVCwgX3RleHQuQ0xPU0VQQVJFTiwgX3RleHQuT1BFTkJSQUNFLCBfdGV4dC5PUEVOQlJBQ0tFVCwgX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCwgX3RleHQuT1BFTlBBUkVOXTtcblxuLy8gVGhlc2Ugc3RhdGVzIGFyZSByZXNwb25zaWJsZSBwcmltYXJpbHkgZm9yIGRldGVybWluaW5nIHdoZXRoZXIgb3Igbm90IHRvXG4vLyBpbmNsdWRlIHRoZSBmaW5hbCByb3VuZCBicmFja2V0LlxuXG4vLyBVUkwsIGZvbGxvd2VkIGJ5IGFuIG9wZW5pbmcgYnJhY2tldFxuU19VUkwub24oX3RleHQuT1BFTkJSQUNFLCBTX1VSTF9PUEVOQlJBQ0UpLm9uKF90ZXh0Lk9QRU5CUkFDS0VULCBTX1VSTF9PUEVOQlJBQ0tFVCkub24oX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCwgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVCkub24oX3RleHQuT1BFTlBBUkVOLCBTX1VSTF9PUEVOUEFSRU4pO1xuXG4vLyBVUkwgd2l0aCBleHRyYSBzeW1ib2xzIGF0IHRoZSBlbmQsIGZvbGxvd2VkIGJ5IGFuIG9wZW5pbmcgYnJhY2tldFxuU19VUkxfTk9OX0FDQ0VQVElORy5vbihfdGV4dC5PUEVOQlJBQ0UsIFNfVVJMX09QRU5CUkFDRSkub24oX3RleHQuT1BFTkJSQUNLRVQsIFNfVVJMX09QRU5CUkFDS0VUKS5vbihfdGV4dC5PUEVOQU5HTEVCUkFDS0VULCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUKS5vbihfdGV4dC5PUEVOUEFSRU4sIFNfVVJMX09QRU5QQVJFTik7XG5cbi8vIENsb3NpbmcgYnJhY2tldCBjb21wb25lbnQuIFRoaXMgY2hhcmFjdGVyIFdJTEwgYmUgaW5jbHVkZWQgaW4gdGhlIFVSTFxuU19VUkxfT1BFTkJSQUNFLm9uKF90ZXh0LkNMT1NFQlJBQ0UsIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDS0VULm9uKF90ZXh0LkNMT1NFQlJBQ0tFVCwgU19VUkwpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVC5vbihfdGV4dC5DTE9TRUFOR0xFQlJBQ0tFVCwgU19VUkwpO1xuU19VUkxfT1BFTlBBUkVOLm9uKF90ZXh0LkNMT1NFUEFSRU4sIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDRV9RLm9uKF90ZXh0LkNMT1NFQlJBQ0UsIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDS0VUX1Eub24oX3RleHQuQ0xPU0VCUkFDS0VULCBTX1VSTCk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1Eub24oX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQsIFNfVVJMKTtcblNfVVJMX09QRU5QQVJFTl9RLm9uKF90ZXh0LkNMT1NFUEFSRU4sIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDRV9TWU1TLm9uKF90ZXh0LkNMT1NFQlJBQ0UsIFNfVVJMKTtcblNfVVJMX09QRU5CUkFDS0VUX1NZTVMub24oX3RleHQuQ0xPU0VCUkFDS0VULCBTX1VSTCk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1NZTVMub24oX3RleHQuQ0xPU0VBTkdMRUJSQUNLRVQsIFNfVVJMKTtcblNfVVJMX09QRU5QQVJFTl9TWU1TLm9uKF90ZXh0LkNMT1NFUEFSRU4sIFNfVVJMKTtcblxuLy8gVVJMIHRoYXQgYmVpbmdzIHdpdGggYW4gb3BlbmluZyBicmFja2V0LCBmb2xsb3dlZCBieSBhIHN5bWJvbHMuXG4vLyBOb3RlIHRoYXQgdGhlIGZpbmFsIHN0YXRlIGNhbiBzdGlsbCBiZSBgU19VUkxfT1BFTkJSQUNFX1FgIChpZiB0aGUgVVJMIG9ubHlcbi8vIGhhcyBhIHNpbmdsZSBvcGVuaW5nIGJyYWNrZXQgZm9yIHNvbWUgcmVhc29uKS5cblNfVVJMX09QRU5CUkFDRS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkJSQUNFX1EpO1xuU19VUkxfT1BFTkJSQUNLRVQub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVC5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RKTtcblNfVVJMX09QRU5QQVJFTi5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTlBBUkVOX1EpO1xuU19VUkxfT1BFTkJSQUNFLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0VfU1lNUyk7XG5TX1VSTF9PUEVOQlJBQ0tFVC5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkJSQUNLRVRfU1lNUyk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VULm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1NZTVMpO1xuU19VUkxfT1BFTlBBUkVOLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOUEFSRU5fU1lNUyk7XG5cbi8vIFVSTCB0aGF0IGJlZ2lucyB3aXRoIGFuIG9wZW5pbmcgYnJhY2tldCwgZm9sbG93ZWQgYnkgc29tZSBzeW1ib2xzXG5TX1VSTF9PUEVOQlJBQ0VfUS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkJSQUNFX1EpO1xuU19VUkxfT1BFTkJSQUNLRVRfUS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTkJSQUNLRVRfUSk7XG5TX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1Eub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5BTkdMRUJSQUNLRVRfUSk7XG5TX1VSTF9PUEVOUEFSRU5fUS5vbihxc0FjY2VwdGluZywgU19VUkxfT1BFTlBBUkVOX1EpO1xuU19VUkxfT1BFTkJSQUNFX1Eub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDRV9RKTtcblNfVVJMX09QRU5CUkFDS0VUX1Eub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9RLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EpO1xuU19VUkxfT1BFTlBBUkVOX1Eub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX09QRU5QQVJFTl9RKTtcblxuU19VUkxfT1BFTkJSQUNFX1NZTVMub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDRV9RKTtcblNfVVJMX09QRU5CUkFDS0VUX1NZTVMub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5CUkFDS0VUX1EpO1xuU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9TWU1TLm9uKHFzQWNjZXB0aW5nLCBTX1VSTF9PUEVOQU5HTEVCUkFDS0VUX1EpO1xuU19VUkxfT1BFTlBBUkVOX1NZTVMub24ocXNBY2NlcHRpbmcsIFNfVVJMX09QRU5QQVJFTl9RKTtcblNfVVJMX09QRU5CUkFDRV9TWU1TLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0VfU1lNUyk7XG5TX1VSTF9PUEVOQlJBQ0tFVF9TWU1TLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOQlJBQ0tFVF9TWU1TKTtcblNfVVJMX09QRU5BTkdMRUJSQUNLRVRfU1lNUy5vbihxc05vbkFjY2VwdGluZywgU19VUkxfT1BFTkFOR0xFQlJBQ0tFVF9TWU1TKTtcblNfVVJMX09QRU5QQVJFTl9TWU1TLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9PUEVOUEFSRU5fU1lNUyk7XG5cbi8vIEFjY291bnQgZm9yIHRoZSBxdWVyeSBzdHJpbmdcblNfVVJMLm9uKHFzQWNjZXB0aW5nLCBTX1VSTCk7XG5TX1VSTF9OT05fQUNDRVBUSU5HLm9uKHFzQWNjZXB0aW5nLCBTX1VSTCk7XG5cblNfVVJMLm9uKHFzTm9uQWNjZXB0aW5nLCBTX1VSTF9OT05fQUNDRVBUSU5HKTtcblNfVVJMX05PTl9BQ0NFUFRJTkcub24ocXNOb25BY2NlcHRpbmcsIFNfVVJMX05PTl9BQ0NFUFRJTkcpO1xuXG4vLyBFbWFpbCBhZGRyZXNzLXNwZWNpZmljIHN0YXRlIGRlZmluaXRpb25zXG4vLyBOb3RlOiBXZSBhcmUgbm90IGFsbG93aW5nICcvJyBpbiBlbWFpbCBhZGRyZXNzZXMgc2luY2UgdGhpcyB3b3VsZCBpbnRlcmZlcmVcbi8vIHdpdGggcmVhbCBVUkxzXG5cbi8vIEZvciBhZGRyZXNzZXMgd2l0aCB0aGUgbWFpbHRvIHByZWZpeFxuLy8gJ21haWx0bzonIGZvbGxvd2VkIGJ5IGFueXRoaW5nIHNhbmUgaXMgYSB2YWxpZCBlbWFpbFxuU19NQUlMVE8ub24oX3RleHQuVExELCBTX01BSUxUT19FTUFJTCkub24oX3RleHQuRE9NQUlOLCBTX01BSUxUT19FTUFJTCkub24oX3RleHQuTlVNLCBTX01BSUxUT19FTUFJTCkub24oX3RleHQuTE9DQUxIT1NULCBTX01BSUxUT19FTUFJTCk7XG5cbi8vIEdyZWVkaWx5IGdldCBtb3JlIHBvdGVudGlhbCB2YWxpZCBlbWFpbCB2YWx1ZXNcblNfTUFJTFRPX0VNQUlMLm9uKHFzQWNjZXB0aW5nLCBTX01BSUxUT19FTUFJTCkub24ocXNOb25BY2NlcHRpbmcsIFNfTUFJTFRPX0VNQUlMX05PTl9BQ0NFUFRJTkcpO1xuU19NQUlMVE9fRU1BSUxfTk9OX0FDQ0VQVElORy5vbihxc0FjY2VwdGluZywgU19NQUlMVE9fRU1BSUwpLm9uKHFzTm9uQWNjZXB0aW5nLCBTX01BSUxUT19FTUFJTF9OT05fQUNDRVBUSU5HKTtcblxuLy8gRm9yIGFkZHJlc3NlcyB3aXRob3V0IHRoZSBtYWlsdG8gcHJlZml4XG4vLyBUb2tlbnMgYWxsb3dlZCBpbiB0aGUgbG9jYWxwYXJ0IG9mIHRoZSBlbWFpbFxudmFyIGxvY2FscGFydEFjY2VwdGluZyA9IFtfdGV4dC5ET01BSU4sIF90ZXh0Lk5VTSwgX3RleHQuUExVUywgX3RleHQuUE9VTkQsIF90ZXh0LlFVRVJZLCBfdGV4dC5VTkRFUlNDT1JFLCBfdGV4dC5TWU0sIF90ZXh0LkFNUEVSU0FORCwgX3RleHQuVExEXTtcblxuLy8gU29tZSBvZiB0aGUgdG9rZW5zIGluIGBsb2NhbHBhcnRBY2NlcHRpbmdgIGFyZSBhbHJlYWR5IGFjY291bnRlZCBmb3IgaGVyZSBhbmRcbi8vIHdpbGwgbm90IGJlIG92ZXJ3cml0dGVuIChkb24ndCB3b3JyeSlcblNfRE9NQUlOLm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpLm9uKF90ZXh0LkFULCBTX0xPQ0FMUEFSVF9BVCk7XG5TX1RMRC5vbihsb2NhbHBhcnRBY2NlcHRpbmcsIFNfTE9DQUxQQVJUKS5vbihfdGV4dC5BVCwgU19MT0NBTFBBUlRfQVQpO1xuU19ET01BSU5fRE9ULm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpO1xuXG4vLyBPa2F5IHdlJ3JlIG9uIGEgbG9jYWxwYXJ0LiBOb3cgd2hhdD9cbi8vIFRPRE86IElQIGFkZHJlc3NlcyBhbmQgd2hhdCBpZiB0aGUgZW1haWwgc3RhcnRzIHdpdGggbnVtYmVycz9cblNfTE9DQUxQQVJULm9uKGxvY2FscGFydEFjY2VwdGluZywgU19MT0NBTFBBUlQpLm9uKF90ZXh0LkFULCBTX0xPQ0FMUEFSVF9BVCkgLy8gY2xvc2UgdG8gYW4gZW1haWwgYWRkcmVzcyBub3dcbi5vbihfdGV4dC5ET1QsIFNfTE9DQUxQQVJUX0RPVCk7XG5TX0xPQ0FMUEFSVF9ET1Qub24obG9jYWxwYXJ0QWNjZXB0aW5nLCBTX0xPQ0FMUEFSVCk7XG5TX0xPQ0FMUEFSVF9BVC5vbihfdGV4dC5UTEQsIFNfRU1BSUxfRE9NQUlOKS5vbihfdGV4dC5ET01BSU4sIFNfRU1BSUxfRE9NQUlOKS5vbihfdGV4dC5MT0NBTEhPU1QsIFNfRU1BSUwpO1xuLy8gU3RhdGVzIGZvbGxvd2luZyBgQGAgZGVmaW5lZCBhYm92ZVxuXG52YXIgcnVuID0gZnVuY3Rpb24gcnVuKHRva2Vucykge1xuXHR2YXIgbGVuID0gdG9rZW5zLmxlbmd0aDtcblx0dmFyIGN1cnNvciA9IDA7XG5cdHZhciBtdWx0aXMgPSBbXTtcblx0dmFyIHRleHRUb2tlbnMgPSBbXTtcblxuXHR3aGlsZSAoY3Vyc29yIDwgbGVuKSB7XG5cdFx0dmFyIHN0YXRlID0gU19TVEFSVDtcblx0XHR2YXIgc2Vjb25kU3RhdGUgPSBudWxsO1xuXHRcdHZhciBuZXh0U3RhdGUgPSBudWxsO1xuXHRcdHZhciBtdWx0aUxlbmd0aCA9IDA7XG5cdFx0dmFyIGxhdGVzdEFjY2VwdGluZyA9IG51bGw7XG5cdFx0dmFyIHNpbmNlQWNjZXB0cyA9IC0xO1xuXG5cdFx0d2hpbGUgKGN1cnNvciA8IGxlbiAmJiAhKHNlY29uZFN0YXRlID0gc3RhdGUubmV4dCh0b2tlbnNbY3Vyc29yXSkpKSB7XG5cdFx0XHQvLyBTdGFydGluZyB0b2tlbnMgd2l0aCBub3doZXJlIHRvIGp1bXAgdG8uXG5cdFx0XHQvLyBDb25zaWRlciB0aGVzZSB0byBiZSBqdXN0IHBsYWluIHRleHRcblx0XHRcdHRleHRUb2tlbnMucHVzaCh0b2tlbnNbY3Vyc29yKytdKTtcblx0XHR9XG5cblx0XHR3aGlsZSAoY3Vyc29yIDwgbGVuICYmIChuZXh0U3RhdGUgPSBzZWNvbmRTdGF0ZSB8fCBzdGF0ZS5uZXh0KHRva2Vuc1tjdXJzb3JdKSkpIHtcblxuXHRcdFx0Ly8gR2V0IHRoZSBuZXh0IHN0YXRlXG5cdFx0XHRzZWNvbmRTdGF0ZSA9IG51bGw7XG5cdFx0XHRzdGF0ZSA9IG5leHRTdGF0ZTtcblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB0aGUgbGF0ZXN0IGFjY2VwdGluZyBzdGF0ZVxuXHRcdFx0aWYgKHN0YXRlLmFjY2VwdHMoKSkge1xuXHRcdFx0XHRzaW5jZUFjY2VwdHMgPSAwO1xuXHRcdFx0XHRsYXRlc3RBY2NlcHRpbmcgPSBzdGF0ZTtcblx0XHRcdH0gZWxzZSBpZiAoc2luY2VBY2NlcHRzID49IDApIHtcblx0XHRcdFx0c2luY2VBY2NlcHRzKys7XG5cdFx0XHR9XG5cblx0XHRcdGN1cnNvcisrO1xuXHRcdFx0bXVsdGlMZW5ndGgrKztcblx0XHR9XG5cblx0XHRpZiAoc2luY2VBY2NlcHRzIDwgMCkge1xuXG5cdFx0XHQvLyBObyBhY2NlcHRpbmcgc3RhdGUgd2FzIGZvdW5kLCBwYXJ0IG9mIGEgcmVndWxhciB0ZXh0IHRva2VuXG5cdFx0XHQvLyBBZGQgYWxsIHRoZSB0b2tlbnMgd2UgbG9va2VkIGF0IHRvIHRoZSB0ZXh0IHRva2VucyBhcnJheVxuXHRcdFx0Zm9yICh2YXIgaSA9IGN1cnNvciAtIG11bHRpTGVuZ3RoOyBpIDwgY3Vyc29yOyBpKyspIHtcblx0XHRcdFx0dGV4dFRva2Vucy5wdXNoKHRva2Vuc1tpXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQWNjZXB0aW5nIHN0YXRlIVxuXG5cdFx0XHQvLyBGaXJzdCBjbG9zZSBvZmYgdGhlIHRleHRUb2tlbnMgKGlmIGF2YWlsYWJsZSlcblx0XHRcdGlmICh0ZXh0VG9rZW5zLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bXVsdGlzLnB1c2gobmV3IF9tdWx0aS5URVhUKHRleHRUb2tlbnMpKTtcblx0XHRcdFx0dGV4dFRva2VucyA9IFtdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSb2xsIGJhY2sgdG8gdGhlIGxhdGVzdCBhY2NlcHRpbmcgc3RhdGVcblx0XHRcdGN1cnNvciAtPSBzaW5jZUFjY2VwdHM7XG5cdFx0XHRtdWx0aUxlbmd0aCAtPSBzaW5jZUFjY2VwdHM7XG5cblx0XHRcdC8vIENyZWF0ZSBhIG5ldyBtdWx0aXRva2VuXG5cdFx0XHR2YXIgTVVMVEkgPSBsYXRlc3RBY2NlcHRpbmcuZW1pdCgpO1xuXHRcdFx0bXVsdGlzLnB1c2gobmV3IE1VTFRJKHRva2Vucy5zbGljZShjdXJzb3IgLSBtdWx0aUxlbmd0aCwgY3Vyc29yKSkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEZpbmFsbHkgY2xvc2Ugb2ZmIHRoZSB0ZXh0VG9rZW5zIChpZiBhdmFpbGFibGUpXG5cdGlmICh0ZXh0VG9rZW5zLmxlbmd0aCA+IDApIHtcblx0XHRtdWx0aXMucHVzaChuZXcgX211bHRpLlRFWFQodGV4dFRva2VucykpO1xuXHR9XG5cblx0cmV0dXJuIG11bHRpcztcbn07XG5cbmV4cG9ydHMuU3RhdGUgPSBfc3RhdGUuVG9rZW5TdGF0ZTtcbmV4cG9ydHMuVE9LRU5TID0gTVVMVElfVE9LRU5TO1xuZXhwb3J0cy5ydW4gPSBydW47XG5leHBvcnRzLnN0YXJ0ID0gU19TVEFSVDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0YXJ0ID0gZXhwb3J0cy5ydW4gPSBleHBvcnRzLlRPS0VOUyA9IGV4cG9ydHMuU3RhdGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RhdGUgPSByZXF1aXJlKCcuL3N0YXRlJyk7XG5cbnZhciBfdGV4dCA9IHJlcXVpcmUoJy4vdG9rZW5zL3RleHQnKTtcblxudmFyIFRPS0VOUyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90ZXh0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIHRsZHMgPSAnYWFhfGFhcnB8YWJhcnRofGFiYnxhYmJvdHR8YWJidmllfGFiY3xhYmxlfGFib2dhZG98YWJ1ZGhhYml8YWN8YWNhZGVteXxhY2NlbnR1cmV8YWNjb3VudGFudHxhY2NvdW50YW50c3xhY298YWN0aXZlfGFjdG9yfGFkfGFkYWN8YWRzfGFkdWx0fGFlfGFlZ3xhZXJvfGFldG5hfGFmfGFmYW1pbHljb21wYW55fGFmbHxhZnJpY2F8YWd8YWdha2hhbnxhZ2VuY3l8YWl8YWlnfGFpZ298YWlyYnVzfGFpcmZvcmNlfGFpcnRlbHxha2RufGFsfGFsZmFyb21lb3xhbGliYWJhfGFsaXBheXxhbGxmaW5hbnp8YWxsc3RhdGV8YWxseXxhbHNhY2V8YWxzdG9tfGFtfGFtZXJpY2FuZXhwcmVzc3xhbWVyaWNhbmZhbWlseXxhbWV4fGFtZmFtfGFtaWNhfGFtc3RlcmRhbXxhbmFseXRpY3N8YW5kcm9pZHxhbnF1YW58YW56fGFvfGFvbHxhcGFydG1lbnRzfGFwcHxhcHBsZXxhcXxhcXVhcmVsbGV8YXJ8YXJhYnxhcmFtY298YXJjaGl8YXJteXxhcnBhfGFydHxhcnRlfGFzfGFzZGF8YXNpYXxhc3NvY2lhdGVzfGF0fGF0aGxldGF8YXR0b3JuZXl8YXV8YXVjdGlvbnxhdWRpfGF1ZGlibGV8YXVkaW98YXVzcG9zdHxhdXRob3J8YXV0b3xhdXRvc3xhdmlhbmNhfGF3fGF3c3xheHxheGF8YXp8YXp1cmV8YmF8YmFieXxiYWlkdXxiYW5hbWV4fGJhbmFuYXJlcHVibGljfGJhbmR8YmFua3xiYXJ8YmFyY2Vsb25hfGJhcmNsYXljYXJkfGJhcmNsYXlzfGJhcmVmb290fGJhcmdhaW5zfGJhc2ViYWxsfGJhc2tldGJhbGx8YmF1aGF1c3xiYXllcm58YmJ8YmJjfGJidHxiYnZhfGJjZ3xiY258YmR8YmV8YmVhdHN8YmVhdXR5fGJlZXJ8YmVudGxleXxiZXJsaW58YmVzdHxiZXN0YnV5fGJldHxiZnxiZ3xiaHxiaGFydGl8Yml8YmlibGV8YmlkfGJpa2V8YmluZ3xiaW5nb3xiaW98Yml6fGJqfGJsYWNrfGJsYWNrZnJpZGF5fGJsYW5jb3xibG9ja2J1c3RlcnxibG9nfGJsb29tYmVyZ3xibHVlfGJtfGJtc3xibXd8Ym58Ym5sfGJucHBhcmliYXN8Ym98Ym9hdHN8Ym9laHJpbmdlcnxib2ZhfGJvbXxib25kfGJvb3xib29rfGJvb2tpbmd8Ym9vdHN8Ym9zY2h8Ym9zdGlrfGJvc3Rvbnxib3R8Ym91dGlxdWV8Ym94fGJyfGJyYWRlc2NvfGJyaWRnZXN0b25lfGJyb2Fkd2F5fGJyb2tlcnxicm90aGVyfGJydXNzZWxzfGJzfGJ0fGJ1ZGFwZXN0fGJ1Z2F0dGl8YnVpbGR8YnVpbGRlcnN8YnVzaW5lc3N8YnV5fGJ1enp8YnZ8Ynd8Ynl8Ynp8YnpofGNhfGNhYnxjYWZlfGNhbHxjYWxsfGNhbHZpbmtsZWlufGNhbXxjYW1lcmF8Y2FtcHxjYW5jZXJyZXNlYXJjaHxjYW5vbnxjYXBldG93bnxjYXBpdGFsfGNhcGl0YWxvbmV8Y2FyfGNhcmF2YW58Y2FyZHN8Y2FyZXxjYXJlZXJ8Y2FyZWVyc3xjYXJzfGNhcnRpZXJ8Y2FzYXxjYXNlfGNhc2VpaHxjYXNofGNhc2lub3xjYXR8Y2F0ZXJpbmd8Y2F0aG9saWN8Y2JhfGNibnxjYnJlfGNic3xjY3xjZHxjZWJ8Y2VudGVyfGNlb3xjZXJufGNmfGNmYXxjZmR8Y2d8Y2h8Y2hhbmVsfGNoYW5uZWx8Y2hhc2V8Y2hhdHxjaGVhcHxjaGludGFpfGNobG9lfGNocmlzdG1hc3xjaHJvbWV8Y2hyeXNsZXJ8Y2h1cmNofGNpfGNpcHJpYW5pfGNpcmNsZXxjaXNjb3xjaXRhZGVsfGNpdGl8Y2l0aWN8Y2l0eXxjaXR5ZWF0c3xja3xjbHxjbGFpbXN8Y2xlYW5pbmd8Y2xpY2t8Y2xpbmljfGNsaW5pcXVlfGNsb3RoaW5nfGNsb3VkfGNsdWJ8Y2x1Ym1lZHxjbXxjbnxjb3xjb2FjaHxjb2Rlc3xjb2ZmZWV8Y29sbGVnZXxjb2xvZ25lfGNvbXxjb21jYXN0fGNvbW1iYW5rfGNvbW11bml0eXxjb21wYW55fGNvbXBhcmV8Y29tcHV0ZXJ8Y29tc2VjfGNvbmRvc3xjb25zdHJ1Y3Rpb258Y29uc3VsdGluZ3xjb250YWN0fGNvbnRyYWN0b3JzfGNvb2tpbmd8Y29va2luZ2NoYW5uZWx8Y29vbHxjb29wfGNvcnNpY2F8Y291bnRyeXxjb3Vwb258Y291cG9uc3xjb3Vyc2VzfGNyfGNyZWRpdHxjcmVkaXRjYXJkfGNyZWRpdHVuaW9ufGNyaWNrZXR8Y3Jvd258Y3JzfGNydWlzZXxjcnVpc2VzfGNzY3xjdXxjdWlzaW5lbGxhfGN2fGN3fGN4fGN5fGN5bXJ1fGN5b3V8Y3p8ZGFidXJ8ZGFkfGRhbmNlfGRhdGF8ZGF0ZXxkYXRpbmd8ZGF0c3VufGRheXxkY2xrfGRkc3xkZXxkZWFsfGRlYWxlcnxkZWFsc3xkZWdyZWV8ZGVsaXZlcnl8ZGVsbHxkZWxvaXR0ZXxkZWx0YXxkZW1vY3JhdHxkZW50YWx8ZGVudGlzdHxkZXNpfGRlc2lnbnxkZXZ8ZGhsfGRpYW1vbmRzfGRpZXR8ZGlnaXRhbHxkaXJlY3R8ZGlyZWN0b3J5fGRpc2NvdW50fGRpc2NvdmVyfGRpc2h8ZGl5fGRqfGRrfGRtfGRucHxkb3xkb2NzfGRvY3Rvcnxkb2RnZXxkb2d8ZG9oYXxkb21haW5zfGRvdHxkb3dubG9hZHxkcml2ZXxkdHZ8ZHViYWl8ZHVja3xkdW5sb3B8ZHVuc3xkdXBvbnR8ZHVyYmFufGR2YWd8ZHZyfGR6fGVhcnRofGVhdHxlY3xlY298ZWRla2F8ZWR1fGVkdWNhdGlvbnxlZXxlZ3xlbWFpbHxlbWVyY2t8ZW5lcmd5fGVuZ2luZWVyfGVuZ2luZWVyaW5nfGVudGVycHJpc2VzfGVwb3N0fGVwc29ufGVxdWlwbWVudHxlcnxlcmljc3Nvbnxlcm5pfGVzfGVzcXxlc3RhdGV8ZXN1cmFuY2V8ZXR8ZXRpc2FsYXR8ZXV8ZXVyb3Zpc2lvbnxldXN8ZXZlbnRzfGV2ZXJiYW5rfGV4Y2hhbmdlfGV4cGVydHxleHBvc2VkfGV4cHJlc3N8ZXh0cmFzcGFjZXxmYWdlfGZhaWx8ZmFpcndpbmRzfGZhaXRofGZhbWlseXxmYW58ZmFuc3xmYXJtfGZhcm1lcnN8ZmFzaGlvbnxmYXN0fGZlZGV4fGZlZWRiYWNrfGZlcnJhcml8ZmVycmVyb3xmaXxmaWF0fGZpZGVsaXR5fGZpZG98ZmlsbXxmaW5hbHxmaW5hbmNlfGZpbmFuY2lhbHxmaXJlfGZpcmVzdG9uZXxmaXJtZGFsZXxmaXNofGZpc2hpbmd8Zml0fGZpdG5lc3N8Zmp8Zmt8ZmxpY2tyfGZsaWdodHN8ZmxpcnxmbG9yaXN0fGZsb3dlcnN8Zmx5fGZtfGZvfGZvb3xmb29kfGZvb2RuZXR3b3JrfGZvb3RiYWxsfGZvcmR8Zm9yZXh8Zm9yc2FsZXxmb3J1bXxmb3VuZGF0aW9ufGZveHxmcnxmcmVlfGZyZXNlbml1c3xmcmx8ZnJvZ2Fuc3xmcm9udGRvb3J8ZnJvbnRpZXJ8ZnRyfGZ1aml0c3V8ZnVqaXhlcm94fGZ1bnxmdW5kfGZ1cm5pdHVyZXxmdXRib2x8ZnlpfGdhfGdhbHxnYWxsZXJ5fGdhbGxvfGdhbGx1cHxnYW1lfGdhbWVzfGdhcHxnYXJkZW58Z2J8Z2JpenxnZHxnZG58Z2V8Z2VhfGdlbnR8Z2VudGluZ3xnZW9yZ2V8Z2Z8Z2d8Z2dlZXxnaHxnaXxnaWZ0fGdpZnRzfGdpdmVzfGdpdmluZ3xnbHxnbGFkZXxnbGFzc3xnbGV8Z2xvYmFsfGdsb2JvfGdtfGdtYWlsfGdtYmh8Z21vfGdteHxnbnxnb2RhZGR5fGdvbGR8Z29sZHBvaW50fGdvbGZ8Z29vfGdvb2RoYW5kc3xnb29keWVhcnxnb29nfGdvb2dsZXxnb3B8Z290fGdvdnxncHxncXxncnxncmFpbmdlcnxncmFwaGljc3xncmF0aXN8Z3JlZW58Z3JpcGV8Z3JvY2VyeXxncm91cHxnc3xndHxndXxndWFyZGlhbnxndWNjaXxndWdlfGd1aWRlfGd1aXRhcnN8Z3VydXxnd3xneXxoYWlyfGhhbWJ1cmd8aGFuZ291dHxoYXVzfGhib3xoZGZjfGhkZmNiYW5rfGhlYWx0aHxoZWFsdGhjYXJlfGhlbHB8aGVsc2lua2l8aGVyZXxoZXJtZXN8aGd0dnxoaXBob3B8aGlzYW1pdHN1fGhpdGFjaGl8aGl2fGhrfGhrdHxobXxobnxob2NrZXl8aG9sZGluZ3N8aG9saWRheXxob21lZGVwb3R8aG9tZWdvb2RzfGhvbWVzfGhvbWVzZW5zZXxob25kYXxob25leXdlbGx8aG9yc2V8aG9zcGl0YWx8aG9zdHxob3N0aW5nfGhvdHxob3RlbGVzfGhvdGVsc3xob3RtYWlsfGhvdXNlfGhvd3xocnxoc2JjfGh0fGh0Y3xodXxodWdoZXN8aHlhdHR8aHl1bmRhaXxpYm18aWNiY3xpY2V8aWN1fGlkfGllfGllZWV8aWZtfGlrYW5vfGlsfGltfGltYW1hdHxpbWRifGltbW98aW1tb2JpbGllbnxpbnxpbmR1c3RyaWVzfGluZmluaXRpfGluZm98aW5nfGlua3xpbnN0aXR1dGV8aW5zdXJhbmNlfGluc3VyZXxpbnR8aW50ZWx8aW50ZXJuYXRpb25hbHxpbnR1aXR8aW52ZXN0bWVudHN8aW98aXBpcmFuZ2F8aXF8aXJ8aXJpc2h8aXN8aXNlbGVjdHxpc21haWxpfGlzdHxpc3RhbmJ1bHxpdHxpdGF1fGl0dnxpdmVjb3xpd2N8amFndWFyfGphdmF8amNifGpjcHxqZXxqZWVwfGpldHp0fGpld2Vscnl8amlvfGpsY3xqbGx8am18am1wfGpuanxqb3xqb2JzfGpvYnVyZ3xqb3R8am95fGpwfGpwbW9yZ2FufGpwcnN8anVlZ29zfGp1bmlwZXJ8a2F1ZmVufGtkZGl8a2V8a2Vycnlob3RlbHN8a2Vycnlsb2dpc3RpY3N8a2Vycnlwcm9wZXJ0aWVzfGtmaHxrZ3xraHxraXxraWF8a2ltfGtpbmRlcnxraW5kbGV8a2l0Y2hlbnxraXdpfGttfGtufGtvZWxufGtvbWF0c3V8a29zaGVyfGtwfGtwbWd8a3BufGtyfGtyZHxrcmVkfGt1b2tncm91cHxrd3xreXxreW90b3xrenxsYXxsYWNhaXhhfGxhZGJyb2tlc3xsYW1ib3JnaGluaXxsYW1lcnxsYW5jYXN0ZXJ8bGFuY2lhfGxhbmNvbWV8bGFuZHxsYW5kcm92ZXJ8bGFueGVzc3xsYXNhbGxlfGxhdHxsYXRpbm98bGF0cm9iZXxsYXd8bGF3eWVyfGxifGxjfGxkc3xsZWFzZXxsZWNsZXJjfGxlZnJha3xsZWdhbHxsZWdvfGxleHVzfGxnYnR8bGl8bGlhaXNvbnxsaWRsfGxpZmV8bGlmZWluc3VyYW5jZXxsaWZlc3R5bGV8bGlnaHRpbmd8bGlrZXxsaWxseXxsaW1pdGVkfGxpbW98bGluY29sbnxsaW5kZXxsaW5rfGxpcHN5fGxpdmV8bGl2aW5nfGxpeGlsfGxrfGxvYW58bG9hbnN8bG9ja2VyfGxvY3VzfGxvZnR8bG9sfGxvbmRvbnxsb3R0ZXxsb3R0b3xsb3ZlfGxwbHxscGxmaW5hbmNpYWx8bHJ8bHN8bHR8bHRkfGx0ZGF8bHV8bHVuZGJlY2t8bHVwaW58bHV4ZXxsdXh1cnl8bHZ8bHl8bWF8bWFjeXN8bWFkcmlkfG1haWZ8bWFpc29ufG1ha2V1cHxtYW58bWFuYWdlbWVudHxtYW5nb3xtYXB8bWFya2V0fG1hcmtldGluZ3xtYXJrZXRzfG1hcnJpb3R0fG1hcnNoYWxsc3xtYXNlcmF0aXxtYXR0ZWx8bWJhfG1jfG1ja2luc2V5fG1kfG1lfG1lZHxtZWRpYXxtZWV0fG1lbGJvdXJuZXxtZW1lfG1lbW9yaWFsfG1lbnxtZW51fG1lb3xtZXJja21zZHxtZXRsaWZlfG1nfG1ofG1pYW1pfG1pY3Jvc29mdHxtaWx8bWluaXxtaW50fG1pdHxtaXRzdWJpc2hpfG1rfG1sfG1sYnxtbHN8bW18bW1hfG1ufG1vfG1vYml8bW9iaWxlfG1vYmlseXxtb2RhfG1vZXxtb2l8bW9tfG1vbmFzaHxtb25leXxtb25zdGVyfG1vcGFyfG1vcm1vbnxtb3J0Z2FnZXxtb3Njb3d8bW90b3xtb3RvcmN5Y2xlc3xtb3Z8bW92aWV8bW92aXN0YXJ8bXB8bXF8bXJ8bXN8bXNkfG10fG10bnxtdHJ8bXV8bXVzZXVtfG11dHVhbHxtdnxtd3xteHxteXxtenxuYXxuYWJ8bmFkZXh8bmFnb3lhfG5hbWV8bmF0aW9ud2lkZXxuYXR1cmF8bmF2eXxuYmF8bmN8bmV8bmVjfG5ldHxuZXRiYW5rfG5ldGZsaXh8bmV0d29ya3xuZXVzdGFyfG5ld3xuZXdob2xsYW5kfG5ld3N8bmV4dHxuZXh0ZGlyZWN0fG5leHVzfG5mfG5mbHxuZ3xuZ298bmhrfG5pfG5pY298bmlrZXxuaWtvbnxuaW5qYXxuaXNzYW58bmlzc2F5fG5sfG5vfG5va2lhfG5vcnRod2VzdGVybm11dHVhbHxub3J0b258bm93fG5vd3J1enxub3d0dnxucHxucnxucmF8bnJ3fG50dHxudXxueWN8bnp8b2JpfG9ic2VydmVyfG9mZnxvZmZpY2V8b2tpbmF3YXxvbGF5YW58b2xheWFuZ3JvdXB8b2xkbmF2eXxvbGxvfG9tfG9tZWdhfG9uZXxvbmd8b25sfG9ubGluZXxvbnlvdXJzaWRlfG9vb3xvcGVufG9yYWNsZXxvcmFuZ2V8b3JnfG9yZ2FuaWN8b3JpZ2luc3xvc2FrYXxvdHN1a2F8b3R0fG92aHxwYXxwYWdlfHBhbmFzb25pY3xwYW5lcmFpfHBhcmlzfHBhcnN8cGFydG5lcnN8cGFydHN8cGFydHl8cGFzc2FnZW5zfHBheXxwY2N3fHBlfHBldHxwZnxwZml6ZXJ8cGd8cGh8cGhhcm1hY3l8cGhkfHBoaWxpcHN8cGhvbmV8cGhvdG98cGhvdG9ncmFwaHl8cGhvdG9zfHBoeXNpb3xwaWFnZXR8cGljc3xwaWN0ZXR8cGljdHVyZXN8cGlkfHBpbnxwaW5nfHBpbmt8cGlvbmVlcnxwaXp6YXxwa3xwbHxwbGFjZXxwbGF5fHBsYXlzdGF0aW9ufHBsdW1iaW5nfHBsdXN8cG18cG58cG5jfHBvaGx8cG9rZXJ8cG9saXRpZXxwb3JufHBvc3R8cHJ8cHJhbWVyaWNhfHByYXhpfHByZXNzfHByaW1lfHByb3xwcm9kfHByb2R1Y3Rpb25zfHByb2Z8cHJvZ3Jlc3NpdmV8cHJvbW98cHJvcGVydGllc3xwcm9wZXJ0eXxwcm90ZWN0aW9ufHBydXxwcnVkZW50aWFsfHBzfHB0fHB1Ynxwd3xwd2N8cHl8cWF8cXBvbnxxdWViZWN8cXVlc3R8cXZjfHJhY2luZ3xyYWRpb3xyYWlkfHJlfHJlYWR8cmVhbGVzdGF0ZXxyZWFsdG9yfHJlYWx0eXxyZWNpcGVzfHJlZHxyZWRzdG9uZXxyZWR1bWJyZWxsYXxyZWhhYnxyZWlzZXxyZWlzZW58cmVpdHxyZWxpYW5jZXxyZW58cmVudHxyZW50YWxzfHJlcGFpcnxyZXBvcnR8cmVwdWJsaWNhbnxyZXN0fHJlc3RhdXJhbnR8cmV2aWV3fHJldmlld3N8cmV4cm90aHxyaWNofHJpY2hhcmRsaXxyaWNvaHxyaWdodGF0aG9tZXxyaWx8cmlvfHJpcHxybWl0fHJvfHJvY2hlcnxyb2Nrc3xyb2Rlb3xyb2dlcnN8cm9vbXxyc3xyc3ZwfHJ1fHJ1Z2J5fHJ1aHJ8cnVufHJ3fHJ3ZXxyeXVreXV8c2F8c2FhcmxhbmR8c2FmZXxzYWZldHl8c2FrdXJhfHNhbGV8c2Fsb258c2Ftc2NsdWJ8c2Ftc3VuZ3xzYW5kdmlrfHNhbmR2aWtjb3JvbWFudHxzYW5vZml8c2FwfHNhcG98c2FybHxzYXN8c2F2ZXxzYXhvfHNifHNiaXxzYnN8c2N8c2NhfHNjYnxzY2hhZWZmbGVyfHNjaG1pZHR8c2Nob2xhcnNoaXBzfHNjaG9vbHxzY2h1bGV8c2Nod2FyenxzY2llbmNlfHNjam9obnNvbnxzY29yfHNjb3R8c2R8c2V8c2VhcmNofHNlYXR8c2VjdXJlfHNlY3VyaXR5fHNlZWt8c2VsZWN0fHNlbmVyfHNlcnZpY2VzfHNlc3xzZXZlbnxzZXd8c2V4fHNleHl8c2ZyfHNnfHNofHNoYW5ncmlsYXxzaGFycHxzaGF3fHNoZWxsfHNoaWF8c2hpa3NoYXxzaG9lc3xzaG9wfHNob3BwaW5nfHNob3VqaXxzaG93fHNob3d0aW1lfHNocmlyYW18c2l8c2lsa3xzaW5hfHNpbmdsZXN8c2l0ZXxzanxza3xza2l8c2tpbnxza3l8c2t5cGV8c2x8c2xpbmd8c218c21hcnR8c21pbGV8c258c25jZnxzb3xzb2NjZXJ8c29jaWFsfHNvZnRiYW5rfHNvZnR3YXJlfHNvaHV8c29sYXJ8c29sdXRpb25zfHNvbmd8c29ueXxzb3l8c3BhY2V8c3BpZWdlbHxzcG90fHNwcmVhZGJldHRpbmd8c3J8c3JsfHNydHxzdHxzdGFkYXxzdGFwbGVzfHN0YXJ8c3Rhcmh1YnxzdGF0ZWJhbmt8c3RhdGVmYXJtfHN0YXRvaWx8c3RjfHN0Y2dyb3VwfHN0b2NraG9sbXxzdG9yYWdlfHN0b3JlfHN0cmVhbXxzdHVkaW98c3R1ZHl8c3R5bGV8c3V8c3Vja3N8c3VwcGxpZXN8c3VwcGx5fHN1cHBvcnR8c3VyZnxzdXJnZXJ5fHN1enVraXxzdnxzd2F0Y2h8c3dpZnRjb3Zlcnxzd2lzc3xzeHxzeXxzeWRuZXl8c3ltYW50ZWN8c3lzdGVtc3xzenx0YWJ8dGFpcGVpfHRhbGt8dGFvYmFvfHRhcmdldHx0YXRhbW90b3JzfHRhdGFyfHRhdHRvb3x0YXh8dGF4aXx0Y3x0Y2l8dGR8dGRrfHRlYW18dGVjaHx0ZWNobm9sb2d5fHRlbHx0ZWxlY2l0eXx0ZWxlZm9uaWNhfHRlbWFzZWt8dGVubmlzfHRldmF8dGZ8dGd8dGh8dGhkfHRoZWF0ZXJ8dGhlYXRyZXx0aWFhfHRpY2tldHN8dGllbmRhfHRpZmZhbnl8dGlwc3x0aXJlc3x0aXJvbHx0anx0am1heHh8dGp4fHRrfHRrbWF4eHx0bHx0bXx0bWFsbHx0bnx0b3x0b2RheXx0b2t5b3x0b29sc3x0b3B8dG9yYXl8dG9zaGliYXx0b3RhbHx0b3Vyc3x0b3dufHRveW90YXx0b3lzfHRyfHRyYWRlfHRyYWRpbmd8dHJhaW5pbmd8dHJhdmVsfHRyYXZlbGNoYW5uZWx8dHJhdmVsZXJzfHRyYXZlbGVyc2luc3VyYW5jZXx0cnVzdHx0cnZ8dHR8dHViZXx0dWl8dHVuZXN8dHVzaHV8dHZ8dHZzfHR3fHR6fHVhfHViYW5rfHVic3x1Y29ubmVjdHx1Z3x1a3x1bmljb218dW5pdmVyc2l0eXx1bm98dW9sfHVwc3x1c3x1eXx1enx2YXx2YWNhdGlvbnN8dmFuYXx2YW5ndWFyZHx2Y3x2ZXx2ZWdhc3x2ZW50dXJlc3x2ZXJpc2lnbnx2ZXJzaWNoZXJ1bmd8dmV0fHZnfHZpfHZpYWplc3x2aWRlb3x2aWd8dmlraW5nfHZpbGxhc3x2aW58dmlwfHZpcmdpbnx2aXNhfHZpc2lvbnx2aXN0YXx2aXN0YXByaW50fHZpdmF8dml2b3x2bGFhbmRlcmVufHZufHZvZGthfHZvbGtzd2FnZW58dm9sdm98dm90ZXx2b3Rpbmd8dm90b3x2b3lhZ2V8dnV8dnVlbG9zfHdhbGVzfHdhbG1hcnR8d2FsdGVyfHdhbmd8d2FuZ2dvdXx3YXJtYW58d2F0Y2h8d2F0Y2hlc3x3ZWF0aGVyfHdlYXRoZXJjaGFubmVsfHdlYmNhbXx3ZWJlcnx3ZWJzaXRlfHdlZHx3ZWRkaW5nfHdlaWJvfHdlaXJ8d2Z8d2hvc3dob3x3aWVufHdpa2l8d2lsbGlhbWhpbGx8d2lufHdpbmRvd3N8d2luZXx3aW5uZXJzfHdtZXx3b2x0ZXJza2x1d2VyfHdvb2RzaWRlfHdvcmt8d29ya3N8d29ybGR8d293fHdzfHd0Y3x3dGZ8eGJveHx4ZXJveHx4ZmluaXR5fHhpaHVhbnx4aW58eG4tLTExYjRjM2R8eG4tLTFjazJlMWJ8eG4tLTFxcXcyM2F8eG4tLTJzY3JqOWN8eG4tLTMwcnI3eXx4bi0tM2JzdDAwbXx4bi0tM2RzNDQzZ3x4bi0tM2UwYjcwN2V8eG4tLTNoY3JqOWN8eG4tLTNvcTE4dmw4cG4zNmF8eG4tLTNweHU4a3x4bi0tNDJjMmQ5YXx4bi0tNDVicjVjeWx8eG4tLTQ1YnJqOWN8eG4tLTQ1cTExY3x4bi0tNGdicmltfHhuLS01NGI3ZnRhMGNjfHhuLS01NXF3NDJnfHhuLS01NXF4NWR8eG4tLTVzdTM0ajkzNmJnc2d8eG4tLTV0em01Z3x4bi0tNmZyejgyZ3x4bi0tNnFxOTg2YjN4bHx4bi0tODBhZHhoa3N8eG4tLTgwYW8yMWF8eG4tLTgwYXFlY2RyMWF8eG4tLTgwYXNlaGRifHhuLS04MGFzd2d8eG4tLTh5MGEwNjNhfHhuLS05MGEzYWN8eG4tLTkwYWV8eG4tLTkwYWlzfHhuLS05ZGJxMmF8eG4tLTlldDUydXx4bi0tOWtydDAwYXx4bi0tYjR3NjA1ZmVyZHx4bi0tYmNrMWI5YTVkcmU0Y3x4bi0tYzFhdmd8eG4tLWMyYnI3Z3x4bi0tY2NrMmIzYnx4bi0tY2c0YmtpfHhuLS1jbGNoYzBlYTBiMmcyYTlnY2R8eG4tLWN6cjY5NGJ8eG4tLWN6cnMwdHx4bi0tY3pydTJkfHhuLS1kMWFjajNifHhuLS1kMWFsZnx4bi0tZTFhNGN8eG4tLWVja3ZkdGM5ZHx4bi0tZWZ2eTg4aHx4bi0tZXN0djc1Z3x4bi0tZmN0NDI5a3x4bi0tZmhiZWl8eG4tLWZpcTIyOGM1aHN8eG4tLWZpcTY0Ynx4bi0tZmlxczhzfHhuLS1maXF6OXN8eG4tLWZqcTcyMGF8eG4tLWZsdzM1MWV8eG4tLWZwY3JqOWMzZHx4bi0tZnpjMmM5ZTJjfHhuLS1menlzOGQ2OXV2Z218eG4tLWcyeHg0OGN8eG4tLWdja3IzZjBmfHhuLS1nZWNyajljfHhuLS1nazNhdDFlfHhuLS1oMmJyZWczZXZlfHhuLS1oMmJyajljfHhuLS1oMmJyajljOGN8eG4tLWh4dDgxNGV8eG4tLWkxYjZiMWE2YTJlfHhuLS1pbXI1MTNufHhuLS1pbzBhN2l8eG4tLWoxYWVmfHhuLS1qMWFtaHx4bi0tajZ3MTkzZ3x4bi0tamxxNjF1OXc3Ynx4bi0tanZyMTg5bXx4bi0ta2NyeDc3ZDF4NGF8eG4tLWtwcncxM2R8eG4tLWtwcnk1N2R8eG4tLWtwdTcxNmZ8eG4tLWtwdXQzaXx4bi0tbDFhY2N8eG4tLWxnYmJhdDFhZDhqfHhuLS1tZ2I5YXdiZnx4bi0tbWdiYTNhM2VqdHx4bi0tbWdiYTNhNGYxNmF8eG4tLW1nYmE3YzBiYm4wYXx4bi0tbWdiYWFrYzdkdmZ8eG4tLW1nYmFhbTdhOGh8eG4tLW1nYmFiMmJkfHhuLS1tZ2JhaTlhemdxcDZqfHhuLS1tZ2JheWg3Z3BhfHhuLS1tZ2JiOWZicG9ifHhuLS1tZ2JiaDFhfHhuLS1tZ2JiaDFhNzFlfHhuLS1tZ2JjMGE5YXpjZ3x4bi0tbWdiY2E3ZHpkb3x4bi0tbWdiZXJwNGE1ZDRhcnx4bi0tbWdiZ3U4MmF8eG4tLW1nYmk0ZWNleHB8eG4tLW1nYnBsMmZofHhuLS1tZ2J0M2RoZHx4bi0tbWdidHgyYnx4bi0tbWdieDRjZDBhYnx4bi0tbWl4ODkxZnx4bi0tbWsxYnU0NGN8eG4tLW14dHExbXx4bi0tbmdiYzVhemR8eG4tLW5nYmU5ZTBhfHhuLS1uZ2JyeHx4bi0tbm9kZXx4bi0tbnF2N2Z8eG4tLW5xdjdmczAwZW1hfHhuLS1ueXF5MjZhfHhuLS1vM2N3NGh8eG4tLW9nYnBmOGZsfHhuLS1wMWFjZnx4bi0tcDFhaXx4bi0tcGJ0OTc3Y3x4bi0tcGdiczBkaHx4bi0tcHNzeTJ1fHhuLS1xOWp5YjRjfHhuLS1xY2thMXBtY3x4bi0tcXhhbXx4bi0tcmhxdjk2Z3x4bi0tcm92dTg4Ynx4bi0tcnZjMWUwYW0zZXx4bi0tczlicmo5Y3x4bi0tc2VzNTU0Z3x4bi0tdDYwYjU2YXx4bi0tdGNrd2V8eG4tLXRpcTQ5eHF5anx4bi0tdW51cDR5fHhuLS12ZXJtZ2Vuc2JlcmF0ZXItY3RifHhuLS12ZXJtZ2Vuc2JlcmF0dW5nLXB3Ynx4bi0tdmhxdXZ8eG4tLXZ1cTg2MWJ8eG4tLXc0cjg1ZWw4Zmh1NWRucmF8eG4tLXc0cnM0MGx8eG4tLXdnYmgxY3x4bi0td2dibDZhfHhuLS14aHE1MjFifHhuLS14a2MyYWwzaHllMmF8eG4tLXhrYzJkbDNhNWVlMGh8eG4tLXk5YTNhcXx4bi0teWZybzRpNjdvfHhuLS15Z2JpMmFtbXh8eG4tLXpmcjE2NGJ8eHBlcmlhfHh4eHx4eXp8eWFjaHRzfHlhaG9vfHlhbWF4dW58eWFuZGV4fHllfHlvZG9iYXNoaXx5b2dhfHlva29oYW1hfHlvdXx5b3V0dWJlfHl0fHl1bnx6YXx6YXBwb3N8emFyYXx6ZXJvfHppcHx6aXBwb3x6bXx6b25lfHp1ZXJpY2h8encnLnNwbGl0KCd8Jyk7IC8vIG1hY3JvLCBzZWUgZ3VscGZpbGUuanNcblxuLyoqXG5cdFRoZSBzY2FubmVyIHByb3ZpZGVzIGFuIGludGVyZmFjZSB0aGF0IHRha2VzIGEgc3RyaW5nIG9mIHRleHQgYXMgaW5wdXQsIGFuZFxuXHRvdXRwdXRzIGFuIGFycmF5IG9mIHRva2VucyBpbnN0YW5jZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgZWFzeSBVUkwgcGFyc2luZy5cblxuXHRAbW9kdWxlIGxpbmtpZnlcblx0QHN1Ym1vZHVsZSBzY2FubmVyXG5cdEBtYWluIHNjYW5uZXJcbiovXG5cbnZhciBOVU1CRVJTID0gJzAxMjM0NTY3ODknLnNwbGl0KCcnKTtcbnZhciBBTFBIQU5VTSA9ICcwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcbnZhciBXSElURVNQQUNFID0gWycgJywgJ1xcZicsICdcXHInLCAnXFx0JywgJ1xcdicsICdcXHhBMCcsICdcXHUxNjgwJywgJ1xcdTE4MEUnXTsgLy8gZXhjbHVkaW5nIGxpbmUgYnJlYWtzXG5cbnZhciBkb21haW5TdGF0ZXMgPSBbXTsgLy8gc3RhdGVzIHRoYXQganVtcCB0byBET01BSU4gb24gL1thLXowLTldL1xudmFyIG1ha2VTdGF0ZSA9IGZ1bmN0aW9uIG1ha2VTdGF0ZSh0b2tlbkNsYXNzKSB7XG5cdHJldHVybiBuZXcgX3N0YXRlLkNoYXJhY3RlclN0YXRlKHRva2VuQ2xhc3MpO1xufTtcblxuLy8gRnJlcXVlbnRseSB1c2VkIHN0YXRlc1xudmFyIFNfU1RBUlQgPSBtYWtlU3RhdGUoKTtcbnZhciBTX05VTSA9IG1ha2VTdGF0ZShfdGV4dC5OVU0pO1xudmFyIFNfRE9NQUlOID0gbWFrZVN0YXRlKF90ZXh0LkRPTUFJTik7XG52YXIgU19ET01BSU5fSFlQSEVOID0gbWFrZVN0YXRlKCk7IC8vIGRvbWFpbiBmb2xsb3dlZCBieSAxIG9yIG1vcmUgaHlwaGVuIGNoYXJhY3RlcnNcbnZhciBTX1dTID0gbWFrZVN0YXRlKF90ZXh0LldTKTtcblxuLy8gU3RhdGVzIGZvciBzcGVjaWFsIFVSTCBzeW1ib2xzXG5TX1NUQVJULm9uKCdAJywgbWFrZVN0YXRlKF90ZXh0LkFUKSkub24oJy4nLCBtYWtlU3RhdGUoX3RleHQuRE9UKSkub24oJysnLCBtYWtlU3RhdGUoX3RleHQuUExVUykpLm9uKCcjJywgbWFrZVN0YXRlKF90ZXh0LlBPVU5EKSkub24oJz8nLCBtYWtlU3RhdGUoX3RleHQuUVVFUlkpKS5vbignLycsIG1ha2VTdGF0ZShfdGV4dC5TTEFTSCkpLm9uKCdfJywgbWFrZVN0YXRlKF90ZXh0LlVOREVSU0NPUkUpKS5vbignOicsIG1ha2VTdGF0ZShfdGV4dC5DT0xPTikpLm9uKCd7JywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5CUkFDRSkpLm9uKCdbJywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5CUkFDS0VUKSkub24oJzwnLCBtYWtlU3RhdGUoX3RleHQuT1BFTkFOR0xFQlJBQ0tFVCkpLm9uKCcoJywgbWFrZVN0YXRlKF90ZXh0Lk9QRU5QQVJFTikpLm9uKCd9JywgbWFrZVN0YXRlKF90ZXh0LkNMT1NFQlJBQ0UpKS5vbignXScsIG1ha2VTdGF0ZShfdGV4dC5DTE9TRUJSQUNLRVQpKS5vbignPicsIG1ha2VTdGF0ZShfdGV4dC5DTE9TRUFOR0xFQlJBQ0tFVCkpLm9uKCcpJywgbWFrZVN0YXRlKF90ZXh0LkNMT1NFUEFSRU4pKS5vbignJicsIG1ha2VTdGF0ZShfdGV4dC5BTVBFUlNBTkQpKS5vbihbJywnLCAnOycsICchJywgJ1wiJywgJ1xcJyddLCBtYWtlU3RhdGUoX3RleHQuUFVOQ1RVQVRJT04pKTtcblxuLy8gV2hpdGVzcGFjZSBqdW1wc1xuLy8gVG9rZW5zIG9mIG9ubHkgbm9uLW5ld2xpbmUgd2hpdGVzcGFjZSBhcmUgYXJiaXRyYXJpbHkgbG9uZ1xuU19TVEFSVC5vbignXFxuJywgbWFrZVN0YXRlKF90ZXh0Lk5MKSkub24oV0hJVEVTUEFDRSwgU19XUyk7XG5cbi8vIElmIGFueSB3aGl0ZXNwYWNlIGV4Y2VwdCBuZXdsaW5lLCBtb3JlIHdoaXRlc3BhY2UhXG5TX1dTLm9uKFdISVRFU1BBQ0UsIFNfV1MpO1xuXG4vLyBHZW5lcmF0ZXMgc3RhdGVzIGZvciB0b3AtbGV2ZWwgZG9tYWluc1xuLy8gTm90ZSB0aGF0IHRoaXMgaXMgbW9zdCBhY2N1cmF0ZSB3aGVuIHRsZHMgYXJlIGluIGFscGhhYmV0aWNhbCBvcmRlclxuZm9yICh2YXIgaSA9IDA7IGkgPCB0bGRzLmxlbmd0aDsgaSsrKSB7XG5cdHZhciBuZXdTdGF0ZXMgPSAoMCwgX3N0YXRlLnN0YXRlaWZ5KSh0bGRzW2ldLCBTX1NUQVJULCBfdGV4dC5UTEQsIF90ZXh0LkRPTUFJTik7XG5cdGRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgbmV3U3RhdGVzKTtcbn1cblxuLy8gQ29sbGVjdCB0aGUgc3RhdGVzIGdlbmVyYXRlZCBieSBkaWZmZXJlbnQgcHJvdG9jbHNcbnZhciBwYXJ0aWFsUHJvdG9jb2xGaWxlU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2ZpbGUnLCBTX1NUQVJULCBfdGV4dC5ET01BSU4sIF90ZXh0LkRPTUFJTik7XG52YXIgcGFydGlhbFByb3RvY29sRnRwU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2Z0cCcsIFNfU1RBUlQsIF90ZXh0LkRPTUFJTiwgX3RleHQuRE9NQUlOKTtcbnZhciBwYXJ0aWFsUHJvdG9jb2xIdHRwU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ2h0dHAnLCBTX1NUQVJULCBfdGV4dC5ET01BSU4sIF90ZXh0LkRPTUFJTik7XG52YXIgcGFydGlhbFByb3RvY29sTWFpbHRvU3RhdGVzID0gKDAsIF9zdGF0ZS5zdGF0ZWlmeSkoJ21haWx0bycsIFNfU1RBUlQsIF90ZXh0LkRPTUFJTiwgX3RleHQuRE9NQUlOKTtcblxuLy8gQWRkIHRoZSBzdGF0ZXMgdG8gdGhlIGFycmF5IG9mIERPTUFJTmVyaWMgc3RhdGVzXG5kb21haW5TdGF0ZXMucHVzaC5hcHBseShkb21haW5TdGF0ZXMsIHBhcnRpYWxQcm90b2NvbEZpbGVTdGF0ZXMpO1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsUHJvdG9jb2xGdHBTdGF0ZXMpO1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsUHJvdG9jb2xIdHRwU3RhdGVzKTtcbmRvbWFpblN0YXRlcy5wdXNoLmFwcGx5KGRvbWFpblN0YXRlcywgcGFydGlhbFByb3RvY29sTWFpbHRvU3RhdGVzKTtcblxuLy8gUHJvdG9jb2wgc3RhdGVzXG52YXIgU19QUk9UT0NPTF9GSUxFID0gcGFydGlhbFByb3RvY29sRmlsZVN0YXRlcy5wb3AoKTtcbnZhciBTX1BST1RPQ09MX0ZUUCA9IHBhcnRpYWxQcm90b2NvbEZ0cFN0YXRlcy5wb3AoKTtcbnZhciBTX1BST1RPQ09MX0hUVFAgPSBwYXJ0aWFsUHJvdG9jb2xIdHRwU3RhdGVzLnBvcCgpO1xudmFyIFNfTUFJTFRPID0gcGFydGlhbFByb3RvY29sTWFpbHRvU3RhdGVzLnBvcCgpO1xudmFyIFNfUFJPVE9DT0xfU0VDVVJFID0gbWFrZVN0YXRlKF90ZXh0LkRPTUFJTik7XG52YXIgU19GVUxMX1BST1RPQ09MID0gbWFrZVN0YXRlKF90ZXh0LlBST1RPQ09MKTsgLy8gRnVsbCBwcm90b2NvbCBlbmRzIHdpdGggQ09MT05cbnZhciBTX0ZVTExfTUFJTFRPID0gbWFrZVN0YXRlKF90ZXh0Lk1BSUxUTyk7IC8vIE1haWx0byBlbmRzIHdpdGggQ09MT05cblxuLy8gU2VjdXJlIHByb3RvY29scyAoZW5kIHdpdGggJ3MnKVxuU19QUk9UT0NPTF9GVFAub24oJ3MnLCBTX1BST1RPQ09MX1NFQ1VSRSkub24oJzonLCBTX0ZVTExfUFJPVE9DT0wpO1xuXG5TX1BST1RPQ09MX0hUVFAub24oJ3MnLCBTX1BST1RPQ09MX1NFQ1VSRSkub24oJzonLCBTX0ZVTExfUFJPVE9DT0wpO1xuXG5kb21haW5TdGF0ZXMucHVzaChTX1BST1RPQ09MX1NFQ1VSRSk7XG5cbi8vIEJlY29tZSBwcm90b2NvbCB0b2tlbnMgYWZ0ZXIgYSBDT0xPTlxuU19QUk9UT0NPTF9GSUxFLm9uKCc6JywgU19GVUxMX1BST1RPQ09MKTtcblNfUFJPVE9DT0xfU0VDVVJFLm9uKCc6JywgU19GVUxMX1BST1RPQ09MKTtcblNfTUFJTFRPLm9uKCc6JywgU19GVUxMX01BSUxUTyk7XG5cbi8vIExvY2FsaG9zdFxudmFyIHBhcnRpYWxMb2NhbGhvc3RTdGF0ZXMgPSAoMCwgX3N0YXRlLnN0YXRlaWZ5KSgnbG9jYWxob3N0JywgU19TVEFSVCwgX3RleHQuTE9DQUxIT1NULCBfdGV4dC5ET01BSU4pO1xuZG9tYWluU3RhdGVzLnB1c2guYXBwbHkoZG9tYWluU3RhdGVzLCBwYXJ0aWFsTG9jYWxob3N0U3RhdGVzKTtcblxuLy8gRXZlcnl0aGluZyBlbHNlXG4vLyBET01BSU5zIG1ha2UgbW9yZSBET01BSU5zXG4vLyBOdW1iZXIgYW5kIGNoYXJhY3RlciB0cmFuc2l0aW9uc1xuU19TVEFSVC5vbihOVU1CRVJTLCBTX05VTSk7XG5TX05VTS5vbignLScsIFNfRE9NQUlOX0hZUEhFTikub24oTlVNQkVSUywgU19OVU0pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7IC8vIG51bWJlciBiZWNvbWVzIERPTUFJTlxuXG5TX0RPTUFJTi5vbignLScsIFNfRE9NQUlOX0hZUEhFTikub24oQUxQSEFOVU0sIFNfRE9NQUlOKTtcblxuLy8gQWxsIHRoZSBnZW5lcmF0ZWQgc3RhdGVzIHNob3VsZCBoYXZlIGEganVtcCB0byBET01BSU5cbmZvciAodmFyIF9pID0gMDsgX2kgPCBkb21haW5TdGF0ZXMubGVuZ3RoOyBfaSsrKSB7XG5cdGRvbWFpblN0YXRlc1tfaV0ub24oJy0nLCBTX0RPTUFJTl9IWVBIRU4pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7XG59XG5cblNfRE9NQUlOX0hZUEhFTi5vbignLScsIFNfRE9NQUlOX0hZUEhFTikub24oTlVNQkVSUywgU19ET01BSU4pLm9uKEFMUEhBTlVNLCBTX0RPTUFJTik7XG5cbi8vIFNldCBkZWZhdWx0IHRyYW5zaXRpb25cblNfU1RBUlQuZGVmYXVsdFRyYW5zaXRpb24gPSBtYWtlU3RhdGUoX3RleHQuU1lNKTtcblxuLyoqXG5cdEdpdmVuIGEgc3RyaW5nLCByZXR1cm5zIGFuIGFycmF5IG9mIFRPS0VOIGluc3RhbmNlcyByZXByZXNlbnRpbmcgdGhlXG5cdGNvbXBvc2l0aW9uIG9mIHRoYXQgc3RyaW5nLlxuXG5cdEBtZXRob2QgcnVuXG5cdEBwYXJhbSB7U3RyaW5nfSBzdHIgSW5wdXQgc3RyaW5nIHRvIHNjYW5cblx0QHJldHVybiB7QXJyYXl9IEFycmF5IG9mIFRPS0VOIGluc3RhbmNlc1xuKi9cbnZhciBydW4gPSBmdW5jdGlvbiBydW4oc3RyKSB7XG5cblx0Ly8gVGhlIHN0YXRlIG1hY2hpbmUgb25seSBsb29rcyBhdCBsb3dlcmNhc2Ugc3RyaW5ncy5cblx0Ly8gVGhpcyBzZWxlY3RpdmUgYHRvTG93ZXJDYXNlYCBpcyB1c2VkIGJlY2F1c2UgbG93ZXJjYXNpbmcgdGhlIGVudGlyZVxuXHQvLyBzdHJpbmcgY2F1c2VzIHRoZSBsZW5ndGggYW5kIGNoYXJhY3RlciBwb3NpdGlvbiB0byB2YXJ5IGluIHNvbWUgaW4gc29tZVxuXHQvLyBub24tRW5nbGlzaCBzdHJpbmdzLiBUaGlzIGhhcHBlbnMgb25seSBvbiBWOC1iYXNlZCBydW50aW1lcy5cblx0dmFyIGxvd2VyU3RyID0gc3RyLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuIGMudG9Mb3dlckNhc2UoKTtcblx0fSk7XG5cdHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXHR2YXIgdG9rZW5zID0gW107IC8vIHJldHVybiB2YWx1ZVxuXG5cdHZhciBjdXJzb3IgPSAwO1xuXG5cdC8vIFRva2VuaXplIHRoZSBzdHJpbmdcblx0d2hpbGUgKGN1cnNvciA8IGxlbikge1xuXHRcdHZhciBzdGF0ZSA9IFNfU1RBUlQ7XG5cdFx0dmFyIG5leHRTdGF0ZSA9IG51bGw7XG5cdFx0dmFyIHRva2VuTGVuZ3RoID0gMDtcblx0XHR2YXIgbGF0ZXN0QWNjZXB0aW5nID0gbnVsbDtcblx0XHR2YXIgc2luY2VBY2NlcHRzID0gLTE7XG5cblx0XHR3aGlsZSAoY3Vyc29yIDwgbGVuICYmIChuZXh0U3RhdGUgPSBzdGF0ZS5uZXh0KGxvd2VyU3RyW2N1cnNvcl0pKSkge1xuXHRcdFx0c3RhdGUgPSBuZXh0U3RhdGU7XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2YgdGhlIGxhdGVzdCBhY2NlcHRpbmcgc3RhdGVcblx0XHRcdGlmIChzdGF0ZS5hY2NlcHRzKCkpIHtcblx0XHRcdFx0c2luY2VBY2NlcHRzID0gMDtcblx0XHRcdFx0bGF0ZXN0QWNjZXB0aW5nID0gc3RhdGU7XG5cdFx0XHR9IGVsc2UgaWYgKHNpbmNlQWNjZXB0cyA+PSAwKSB7XG5cdFx0XHRcdHNpbmNlQWNjZXB0cysrO1xuXHRcdFx0fVxuXG5cdFx0XHR0b2tlbkxlbmd0aCsrO1xuXHRcdFx0Y3Vyc29yKys7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbmNlQWNjZXB0cyA8IDApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH0gLy8gU2hvdWxkIG5ldmVyIGhhcHBlblxuXG5cdFx0Ly8gUm9sbCBiYWNrIHRvIHRoZSBsYXRlc3QgYWNjZXB0aW5nIHN0YXRlXG5cdFx0Y3Vyc29yIC09IHNpbmNlQWNjZXB0cztcblx0XHR0b2tlbkxlbmd0aCAtPSBzaW5jZUFjY2VwdHM7XG5cblx0XHQvLyBHZXQgdGhlIGNsYXNzIGZvciB0aGUgbmV3IHRva2VuXG5cdFx0dmFyIFRPS0VOID0gbGF0ZXN0QWNjZXB0aW5nLmVtaXQoKTsgLy8gQ3VycmVudCB0b2tlbiBjbGFzc1xuXG5cdFx0Ly8gTm8gbW9yZSBqdW1wcywganVzdCBtYWtlIGEgbmV3IHRva2VuXG5cdFx0dG9rZW5zLnB1c2gobmV3IFRPS0VOKHN0ci5zdWJzdHIoY3Vyc29yIC0gdG9rZW5MZW5ndGgsIHRva2VuTGVuZ3RoKSkpO1xuXHR9XG5cblx0cmV0dXJuIHRva2Vucztcbn07XG5cbnZhciBzdGFydCA9IFNfU1RBUlQ7XG5leHBvcnRzLlN0YXRlID0gX3N0YXRlLkNoYXJhY3RlclN0YXRlO1xuZXhwb3J0cy5UT0tFTlMgPSBUT0tFTlM7XG5leHBvcnRzLnJ1biA9IHJ1bjtcbmV4cG9ydHMuc3RhcnQgPSBzdGFydDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0YXRlaWZ5ID0gZXhwb3J0cy5Ub2tlblN0YXRlID0gZXhwb3J0cy5DaGFyYWN0ZXJTdGF0ZSA9IHVuZGVmaW5lZDtcblxudmFyIF9jbGFzcyA9IHJlcXVpcmUoJy4uL3V0aWxzL2NsYXNzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRlQ2xhc3MoKSB7XG5cdHJldHVybiBmdW5jdGlvbiAodENsYXNzKSB7XG5cdFx0dGhpcy5qID0gW107XG5cdFx0dGhpcy5UID0gdENsYXNzIHx8IG51bGw7XG5cdH07XG59XG5cbi8qKlxuXHRBIHNpbXBsZSBzdGF0ZSBtYWNoaW5lIHRoYXQgY2FuIGVtaXQgdG9rZW4gY2xhc3Nlc1xuXG5cdFRoZSBgamAgcHJvcGVydHkgaW4gdGhpcyBjbGFzcyByZWZlcnMgdG8gc3RhdGUganVtcHMuIEl0J3MgYVxuXHRtdWx0aWRpbWVuc2lvbmFsIGFycmF5IHdoZXJlIGZvciBlYWNoIGVsZW1lbnQ6XG5cblx0KiBpbmRleCBbMF0gaXMgYSBzeW1ib2wgb3IgY2xhc3Mgb2Ygc3ltYm9scyB0byB0cmFuc2l0aW9uIHRvLlxuXHQqIGluZGV4IFsxXSBpcyBhIFN0YXRlIGluc3RhbmNlIHdoaWNoIG1hdGNoZXNcblxuXHRUaGUgdHlwZSBvZiBzeW1ib2wgd2lsbCBkZXBlbmQgb24gdGhlIHRhcmdldCBpbXBsZW1lbnRhdGlvbiBmb3IgdGhpcyBjbGFzcy5cblx0SW4gTGlua2lmeSwgd2UgaGF2ZSBhIHR3by1zdGFnZSBzY2FubmVyLiBFYWNoIHN0YWdlIHVzZXMgdGhpcyBzdGF0ZSBtYWNoaW5lXG5cdGJ1dCB3aXRoIGEgc2xpZ2hseSBkaWZmZXJlbnQgKHBvbHltb3JwaGljKSBpbXBsZW1lbnRhdGlvbi5cblxuXHRUaGUgYFRgIHByb3BlcnR5IHJlZmVycyB0byB0aGUgdG9rZW4gY2xhc3MuXG5cblx0VE9ETzogQ2FuIHRoZSBgb25gIGFuZCBgbmV4dGAgbWV0aG9kcyBiZSBjb21iaW5lZD9cblxuXHRAY2xhc3MgQmFzZVN0YXRlXG4qL1xudmFyIEJhc2VTdGF0ZSA9IGNyZWF0ZVN0YXRlQ2xhc3MoKTtcbkJhc2VTdGF0ZS5wcm90b3R5cGUgPSB7XG5cdGRlZmF1bHRUcmFuc2l0aW9uOiBmYWxzZSxcblxuXHQvKipcbiBcdEBtZXRob2QgY29uc3RydWN0b3JcbiBcdEBwYXJhbSB7Q2xhc3N9IHRDbGFzcyBQYXNzIGluIHRoZSBraW5kIG9mIHRva2VuIHRvIGVtaXQgaWYgdGhlcmUgYXJlXG4gXHRcdG5vIGp1bXBzIGFmdGVyIHRoaXMgc3RhdGUgYW5kIHRoZSBzdGF0ZSBpcyBhY2NlcHRpbmcuXG4gKi9cblxuXHQvKipcbiBcdE9uIHRoZSBnaXZlbiBzeW1ib2wocyksIHRoaXMgbWFjaGluZSBzaG91bGQgZ28gdG8gdGhlIGdpdmVuIHN0YXRlXG4gXHRcdEBtZXRob2Qgb25cbiBcdEBwYXJhbSB7QXJyYXl8TWl4ZWR9IHN5bWJvbFxuIFx0QHBhcmFtIHtCYXNlU3RhdGV9IHN0YXRlIE5vdGUgdGhhdCB0aGUgdHlwZSBvZiB0aGlzIHN0YXRlIHNob3VsZCBiZSB0aGVcbiBcdFx0c2FtZSBhcyB0aGUgY3VycmVudCBpbnN0YW5jZSAoaS5lLiwgZG9uJ3QgcGFzcyBpbiBhIGRpZmZlcmVudFxuIFx0XHRzdWJjbGFzcylcbiAqL1xuXHRvbjogZnVuY3Rpb24gb24oc3ltYm9sLCBzdGF0ZSkge1xuXHRcdGlmIChzeW1ib2wgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2wubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dGhpcy5qLnB1c2goW3N5bWJvbFtpXSwgc3RhdGVdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHR0aGlzLmoucHVzaChbc3ltYm9sLCBzdGF0ZV0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cblx0LyoqXG4gXHRHaXZlbiB0aGUgbmV4dCBpdGVtLCByZXR1cm5zIG5leHQgc3RhdGUgZm9yIHRoYXQgaXRlbVxuIFx0QG1ldGhvZCBuZXh0XG4gXHRAcGFyYW0ge01peGVkfSBpdGVtIFNob3VsZCBiZSBhbiBpbnN0YW5jZSBvZiB0aGUgc3ltYm9scyBoYW5kbGVkIGJ5XG4gXHRcdHRoaXMgcGFydGljdWxhciBtYWNoaW5lLlxuIFx0QHJldHVybiB7U3RhdGV9IHN0YXRlIFJldHVybnMgZmFsc2UgaWYgbm8ganVtcHMgYXJlIGF2YWlsYWJsZVxuICovXG5cdG5leHQ6IGZ1bmN0aW9uIG5leHQoaXRlbSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5qLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIganVtcCA9IHRoaXMualtpXTtcblx0XHRcdHZhciBzeW1ib2wgPSBqdW1wWzBdOyAvLyBOZXh0IGl0ZW0gdG8gY2hlY2sgZm9yXG5cdFx0XHR2YXIgc3RhdGUgPSBqdW1wWzFdOyAvLyBTdGF0ZSB0byBqdW1wIHRvIGlmIGl0ZW1zIG1hdGNoXG5cblx0XHRcdC8vIGNvbXBhcmUgaXRlbSB3aXRoIHN5bWJvbFxuXHRcdFx0aWYgKHRoaXMudGVzdChpdGVtLCBzeW1ib2wpKSB7XG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBOb3doZXJlIGxlZnQgdG8ganVtcCFcblx0XHRyZXR1cm4gdGhpcy5kZWZhdWx0VHJhbnNpdGlvbjtcblx0fSxcblxuXG5cdC8qKlxuIFx0RG9lcyB0aGlzIHN0YXRlIGFjY2VwdD9cbiBcdGB0cnVlYCBvbmx5IG9mIGB0aGlzLlRgIGV4aXN0c1xuIFx0XHRAbWV0aG9kIGFjY2VwdHNcbiBcdEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblx0YWNjZXB0czogZnVuY3Rpb24gYWNjZXB0cygpIHtcblx0XHRyZXR1cm4gISF0aGlzLlQ7XG5cdH0sXG5cblxuXHQvKipcbiBcdERldGVybWluZSB3aGV0aGVyIGEgZ2l2ZW4gaXRlbSBcInN5bWJvbGl6ZXNcIiB0aGUgc3ltYm9sLCB3aGVyZSBzeW1ib2wgaXNcbiBcdGEgY2xhc3Mgb2YgaXRlbXMgaGFuZGxlZCBieSB0aGlzIHN0YXRlIG1hY2hpbmUuXG4gXHRcdFRoaXMgbWV0aG9kIHNob3VsZCBiZSBvdmVycmlkZW4gaW4gZXh0ZW5kZWQgY2xhc3Nlcy5cbiBcdFx0QG1ldGhvZCB0ZXN0XG4gXHRAcGFyYW0ge01peGVkfSBpdGVtIERvZXMgdGhpcyBpdGVtIG1hdGNoIHRoZSBnaXZlbiBzeW1ib2w/XG4gXHRAcGFyYW0ge01peGVkfSBzeW1ib2xcbiBcdEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblx0dGVzdDogZnVuY3Rpb24gdGVzdChpdGVtLCBzeW1ib2wpIHtcblx0XHRyZXR1cm4gaXRlbSA9PT0gc3ltYm9sO1xuXHR9LFxuXG5cblx0LyoqXG4gXHRFbWl0IHRoZSB0b2tlbiBmb3IgdGhpcyBTdGF0ZSAoanVzdCByZXR1cm4gaXQgaW4gdGhpcyBjYXNlKVxuIFx0SWYgdGhpcyBlbWl0cyBhIHRva2VuLCB0aGlzIGluc3RhbmNlIGlzIGFuIGFjY2VwdGluZyBzdGF0ZVxuIFx0QG1ldGhvZCBlbWl0XG4gXHRAcmV0dXJuIHtDbGFzc30gVFxuICovXG5cdGVtaXQ6IGZ1bmN0aW9uIGVtaXQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuVDtcblx0fVxufTtcblxuLyoqXG5cdFN0YXRlIG1hY2hpbmUgZm9yIHN0cmluZy1iYXNlZCBpbnB1dFxuXG5cdEBjbGFzcyBDaGFyYWN0ZXJTdGF0ZVxuXHRAZXh0ZW5kcyBCYXNlU3RhdGVcbiovXG52YXIgQ2hhcmFjdGVyU3RhdGUgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShCYXNlU3RhdGUsIGNyZWF0ZVN0YXRlQ2xhc3MoKSwge1xuXHQvKipcbiBcdERvZXMgdGhlIGdpdmVuIGNoYXJhY3RlciBtYXRjaCB0aGUgZ2l2ZW4gY2hhcmFjdGVyIG9yIHJlZ3VsYXJcbiBcdGV4cHJlc3Npb24/XG4gXHRcdEBtZXRob2QgdGVzdFxuIFx0QHBhcmFtIHtTdHJpbmd9IGNoYXJcbiBcdEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gY2hhck9yUmVnRXhwXG4gXHRAcmV0dXJuIHtCb29sZWFufVxuICovXG5cdHRlc3Q6IGZ1bmN0aW9uIHRlc3QoY2hhcmFjdGVyLCBjaGFyT3JSZWdFeHApIHtcblx0XHRyZXR1cm4gY2hhcmFjdGVyID09PSBjaGFyT3JSZWdFeHAgfHwgY2hhck9yUmVnRXhwIGluc3RhbmNlb2YgUmVnRXhwICYmIGNoYXJPclJlZ0V4cC50ZXN0KGNoYXJhY3Rlcik7XG5cdH1cbn0pO1xuXG4vKipcblx0U3RhdGUgbWFjaGluZSBmb3IgaW5wdXQgaW4gdGhlIGZvcm0gb2YgVGV4dFRva2Vuc1xuXG5cdEBjbGFzcyBUb2tlblN0YXRlXG5cdEBleHRlbmRzIEJhc2VTdGF0ZVxuKi9cbnZhciBUb2tlblN0YXRlID0gKDAsIF9jbGFzcy5pbmhlcml0cykoQmFzZVN0YXRlLCBjcmVhdGVTdGF0ZUNsYXNzKCksIHtcblxuXHQvKipcbiAgKiBTaW1pbGFyIHRvIGBvbmAsIGJ1dCByZXR1cm5zIHRoZSBzdGF0ZSB0aGUgcmVzdWx0cyBpbiB0aGUgdHJhbnNpdGlvbiBmcm9tXG4gICogdGhlIGdpdmVuIGl0ZW1cbiAgKiBAbWV0aG9kIGp1bXBcbiAgKiBAcGFyYW0ge01peGVkfSBpdGVtXG4gICogQHBhcmFtIHtUb2tlbn0gW3Rva2VuXVxuICAqIEByZXR1cm4gc3RhdGVcbiAgKi9cblx0anVtcDogZnVuY3Rpb24ganVtcCh0b2tlbikge1xuXHRcdHZhciB0Q2xhc3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG5cblx0XHR2YXIgc3RhdGUgPSB0aGlzLm5leHQobmV3IHRva2VuKCcnKSk7IC8vIGR1bW15IHRlbXAgdG9rZW5cblx0XHRpZiAoc3RhdGUgPT09IHRoaXMuZGVmYXVsdFRyYW5zaXRpb24pIHtcblx0XHRcdC8vIE1ha2UgYSBuZXcgc3RhdGUhXG5cdFx0XHRzdGF0ZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKHRDbGFzcyk7XG5cdFx0XHR0aGlzLm9uKHRva2VuLCBzdGF0ZSk7XG5cdFx0fSBlbHNlIGlmICh0Q2xhc3MpIHtcblx0XHRcdHN0YXRlLlQgPSB0Q2xhc3M7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fSxcblxuXG5cdC8qKlxuIFx0SXMgdGhlIGdpdmVuIHRva2VuIGFuIGluc3RhbmNlIG9mIHRoZSBnaXZlbiB0b2tlbiBjbGFzcz9cbiBcdFx0QG1ldGhvZCB0ZXN0XG4gXHRAcGFyYW0ge1RleHRUb2tlbn0gdG9rZW5cbiBcdEBwYXJhbSB7Q2xhc3N9IHRva2VuQ2xhc3NcbiBcdEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblx0dGVzdDogZnVuY3Rpb24gdGVzdCh0b2tlbiwgdG9rZW5DbGFzcykge1xuXHRcdHJldHVybiB0b2tlbiBpbnN0YW5jZW9mIHRva2VuQ2xhc3M7XG5cdH1cbn0pO1xuXG4vKipcblx0R2l2ZW4gYSBub24tZW1wdHkgdGFyZ2V0IHN0cmluZywgZ2VuZXJhdGVzIHN0YXRlcyAoaWYgcmVxdWlyZWQpIGZvciBlYWNoXG5cdGNvbnNlY3V0aXZlIHN1YnN0cmluZyBvZiBjaGFyYWN0ZXJzIGluIHN0ciBzdGFydGluZyBmcm9tIHRoZSBiZWdpbm5pbmcgb2Zcblx0dGhlIHN0cmluZy4gVGhlIGZpbmFsIHN0YXRlIHdpbGwgaGF2ZSBhIHNwZWNpYWwgdmFsdWUsIGFzIHNwZWNpZmllZCBpblxuXHRvcHRpb25zLiBBbGwgb3RoZXIgXCJpbiBiZXR3ZWVuXCIgc3Vic3RyaW5ncyB3aWxsIGhhdmUgYSBkZWZhdWx0IGVuZCBzdGF0ZS5cblxuXHRUaGlzIHR1cm5zIHRoZSBzdGF0ZSBtYWNoaW5lIGludG8gYSBUcmllLWxpa2UgZGF0YSBzdHJ1Y3R1cmUgKHJhdGhlciB0aGFuIGFcblx0aW50ZWxsaWdlbnRseS1kZXNpZ25lZCBERkEpLlxuXG5cdE5vdGUgdGhhdCBJIGhhdmVuJ3QgcmVhbGx5IHRyaWVkIHRoZXNlIHdpdGggYW55IHN0cmluZ3Mgb3RoZXIgdGhhblxuXHRET01BSU4uXG5cblx0QHBhcmFtIHtTdHJpbmd9IHN0clxuXHRAcGFyYW0ge0NoYXJhY3RlclN0YXRlfSBzdGFydCBTdGF0ZSB0byBqdW1wIGZyb20gdGhlIGZpcnN0IGNoYXJhY3RlclxuXHRAcGFyYW0ge0NsYXNzfSBlbmRUb2tlbiBUb2tlbiBjbGFzcyB0byBlbWl0IHdoZW4gdGhlIGdpdmVuIHN0cmluZyBoYXMgYmVlblxuXHRcdG1hdGNoZWQgYW5kIG5vIG1vcmUganVtcHMgZXhpc3QuXG5cdEBwYXJhbSB7Q2xhc3N9IGRlZmF1bHRUb2tlbiBcIkZpbGxlciB0b2tlblwiLCBvciB3aGljaCB0b2tlbiB0eXBlIHRvIGVtaXQgd2hlblxuXHRcdHdlIGRvbid0IGhhdmUgYSBmdWxsIG1hdGNoXG5cdEByZXR1cm4ge0FycmF5fSBsaXN0IG9mIG5ld2x5LWNyZWF0ZWQgc3RhdGVzXG4qL1xuZnVuY3Rpb24gc3RhdGVpZnkoc3RyLCBzdGFydCwgZW5kVG9rZW4sIGRlZmF1bHRUb2tlbikge1xuXHR2YXIgaSA9IDAsXG5cdCAgICBsZW4gPSBzdHIubGVuZ3RoLFxuXHQgICAgc3RhdGUgPSBzdGFydCxcblx0ICAgIG5ld1N0YXRlcyA9IFtdLFxuXHQgICAgbmV4dFN0YXRlID0gdm9pZCAwO1xuXG5cdC8vIEZpbmQgdGhlIG5leHQgc3RhdGUgd2l0aG91dCBhIGp1bXAgdG8gdGhlIG5leHQgY2hhcmFjdGVyXG5cdHdoaWxlIChpIDwgbGVuICYmIChuZXh0U3RhdGUgPSBzdGF0ZS5uZXh0KHN0cltpXSkpKSB7XG5cdFx0c3RhdGUgPSBuZXh0U3RhdGU7XG5cdFx0aSsrO1xuXHR9XG5cblx0aWYgKGkgPj0gbGVuKSB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9IC8vIG5vIG5ldyB0b2tlbnMgd2VyZSBhZGRlZFxuXG5cdHdoaWxlIChpIDwgbGVuIC0gMSkge1xuXHRcdG5leHRTdGF0ZSA9IG5ldyBDaGFyYWN0ZXJTdGF0ZShkZWZhdWx0VG9rZW4pO1xuXHRcdG5ld1N0YXRlcy5wdXNoKG5leHRTdGF0ZSk7XG5cdFx0c3RhdGUub24oc3RyW2ldLCBuZXh0U3RhdGUpO1xuXHRcdHN0YXRlID0gbmV4dFN0YXRlO1xuXHRcdGkrKztcblx0fVxuXG5cdG5leHRTdGF0ZSA9IG5ldyBDaGFyYWN0ZXJTdGF0ZShlbmRUb2tlbik7XG5cdG5ld1N0YXRlcy5wdXNoKG5leHRTdGF0ZSk7XG5cdHN0YXRlLm9uKHN0cltsZW4gLSAxXSwgbmV4dFN0YXRlKTtcblxuXHRyZXR1cm4gbmV3U3RhdGVzO1xufVxuXG5leHBvcnRzLkNoYXJhY3RlclN0YXRlID0gQ2hhcmFjdGVyU3RhdGU7XG5leHBvcnRzLlRva2VuU3RhdGUgPSBUb2tlblN0YXRlO1xuZXhwb3J0cy5zdGF0ZWlmeSA9IHN0YXRlaWZ5OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gY3JlYXRlVG9rZW5DbGFzcygpIHtcblx0cmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0dGhpcy52ID0gdmFsdWU7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnRzLmNyZWF0ZVRva2VuQ2xhc3MgPSBjcmVhdGVUb2tlbkNsYXNzOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuVVJMID0gZXhwb3J0cy5URVhUID0gZXhwb3J0cy5OTCA9IGV4cG9ydHMuRU1BSUwgPSBleHBvcnRzLk1BSUxUT0VNQUlMID0gZXhwb3J0cy5CYXNlID0gdW5kZWZpbmVkO1xuXG52YXIgX2NyZWF0ZVRva2VuQ2xhc3MgPSByZXF1aXJlKCcuL2NyZWF0ZS10b2tlbi1jbGFzcycpO1xuXG52YXIgX2NsYXNzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvY2xhc3MnKTtcblxudmFyIF90ZXh0ID0gcmVxdWlyZSgnLi90ZXh0Jyk7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0TXVsdGktVG9rZW5zXG5cdFRva2VucyBjb21wb3NlZCBvZiBhcnJheXMgb2YgVGV4dFRva2Vuc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4vLyBJcyB0aGUgZ2l2ZW4gdG9rZW4gYSB2YWxpZCBkb21haW4gdG9rZW4/XG4vLyBTaG91bGQgbnVtcyBiZSBpbmNsdWRlZCBoZXJlP1xuZnVuY3Rpb24gaXNEb21haW5Ub2tlbih0b2tlbikge1xuXHRyZXR1cm4gdG9rZW4gaW5zdGFuY2VvZiBfdGV4dC5ET01BSU4gfHwgdG9rZW4gaW5zdGFuY2VvZiBfdGV4dC5UTEQ7XG59XG5cbi8qKlxuXHRBYnN0cmFjdCBjbGFzcyB1c2VkIGZvciBtYW51ZmFjdHVyaW5nIHRva2VucyBvZiB0ZXh0IHRva2Vucy4gVGhhdCBpcyByYXRoZXJcblx0dGhhbiB0aGUgdmFsdWUgZm9yIGEgdG9rZW4gYmVpbmcgYSBzbWFsbCBzdHJpbmcgb2YgdGV4dCwgaXQncyB2YWx1ZSBhbiBhcnJheVxuXHRvZiB0ZXh0IHRva2Vucy5cblxuXHRVc2VkIGZvciBncm91cGluZyB0b2dldGhlciBVUkxzLCBlbWFpbHMsIGhhc2h0YWdzLCBhbmQgb3RoZXIgcG90ZW50aWFsXG5cdGNyZWF0aW9ucy5cblxuXHRAY2xhc3MgTXVsdGlUb2tlblxuXHRAYWJzdHJhY3RcbiovXG52YXIgTXVsdGlUb2tlbiA9ICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpO1xuXG5NdWx0aVRva2VuLnByb3RvdHlwZSA9IHtcblx0LyoqXG4gXHRTdHJpbmcgcmVwcmVzZW50aW5nIHRoZSB0eXBlIGZvciB0aGlzIHRva2VuXG4gXHRAcHJvcGVydHkgdHlwZVxuIFx0QGRlZmF1bHQgJ1RPS0VOJ1xuICovXG5cdHR5cGU6ICd0b2tlbicsXG5cblx0LyoqXG4gXHRJcyB0aGlzIG11bHRpdG9rZW4gYSBsaW5rP1xuIFx0QHByb3BlcnR5IGlzTGlua1xuIFx0QGRlZmF1bHQgZmFsc2VcbiAqL1xuXHRpc0xpbms6IGZhbHNlLFxuXG5cdC8qKlxuIFx0UmV0dXJuIHRoZSBzdHJpbmcgdGhpcyB0b2tlbiByZXByZXNlbnRzLlxuIFx0QG1ldGhvZCB0b1N0cmluZ1xuIFx0QHJldHVybiB7U3RyaW5nfVxuICovXG5cdHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnYubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdC5wdXNoKHRoaXMudltpXS50b1N0cmluZygpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcblx0fSxcblxuXG5cdC8qKlxuIFx0V2hhdCBzaG91bGQgdGhlIHZhbHVlIGZvciB0aGlzIHRva2VuIGJlIGluIHRoZSBgaHJlZmAgSFRNTCBhdHRyaWJ1dGU/XG4gXHRSZXR1cm5zIHRoZSBgLnRvU3RyaW5nYCB2YWx1ZSBieSBkZWZhdWx0LlxuIFx0XHRAbWV0aG9kIHRvSHJlZlxuIFx0QHJldHVybiB7U3RyaW5nfVxuICovXG5cdHRvSHJlZjogZnVuY3Rpb24gdG9IcmVmKCkge1xuXHRcdHJldHVybiB0aGlzLnRvU3RyaW5nKCk7XG5cdH0sXG5cblxuXHQvKipcbiBcdFJldHVybnMgYSBoYXNoIG9mIHJlbGV2YW50IHZhbHVlcyBmb3IgdGhpcyB0b2tlbiwgd2hpY2ggaW5jbHVkZXMga2V5c1xuIFx0KiB0eXBlIC0gS2luZCBvZiB0b2tlbiAoJ3VybCcsICdlbWFpbCcsIGV0Yy4pXG4gXHQqIHZhbHVlIC0gT3JpZ2luYWwgdGV4dFxuIFx0KiBocmVmIC0gVGhlIHZhbHVlIHRoYXQgc2hvdWxkIGJlIGFkZGVkIHRvIHRoZSBhbmNob3IgdGFnJ3MgaHJlZlxuIFx0XHRhdHRyaWJ1dGVcbiBcdFx0QG1ldGhvZCB0b09iamVjdFxuIFx0QHBhcmFtIHtTdHJpbmd9IFtwcm90b2NvbF0gYCdodHRwJ2AgYnkgZGVmYXVsdFxuIFx0QHJldHVybiB7T2JqZWN0fVxuICovXG5cdHRvT2JqZWN0OiBmdW5jdGlvbiB0b09iamVjdCgpIHtcblx0XHR2YXIgcHJvdG9jb2wgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdodHRwJztcblxuXHRcdHJldHVybiB7XG5cdFx0XHR0eXBlOiB0aGlzLnR5cGUsXG5cdFx0XHR2YWx1ZTogdGhpcy50b1N0cmluZygpLFxuXHRcdFx0aHJlZjogdGhpcy50b0hyZWYocHJvdG9jb2wpXG5cdFx0fTtcblx0fVxufTtcblxuLyoqXG5cdFJlcHJlc2VudHMgYW4gYXJiaXRyYXJpbHkgbWFpbHRvIGVtYWlsIGFkZHJlc3Mgd2l0aCB0aGUgcHJlZml4IGluY2x1ZGVkXG5cdEBjbGFzcyBNQUlMVE9cblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBNQUlMVE9FTUFJTCA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKE11bHRpVG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCB7XG5cdHR5cGU6ICdlbWFpbCcsXG5cdGlzTGluazogdHJ1ZVxufSk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgbGlzdCBvZiB0b2tlbnMgbWFraW5nIHVwIGEgdmFsaWQgZW1haWwgYWRkcmVzc1xuXHRAY2xhc3MgRU1BSUxcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBFTUFJTCA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKE11bHRpVG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCB7XG5cdHR5cGU6ICdlbWFpbCcsXG5cdGlzTGluazogdHJ1ZSxcblx0dG9IcmVmOiBmdW5jdGlvbiB0b0hyZWYoKSB7XG5cdFx0cmV0dXJuICdtYWlsdG86JyArIHRoaXMudG9TdHJpbmcoKTtcblx0fVxufSk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIHNvbWUgcGxhaW4gdGV4dFxuXHRAY2xhc3MgVEVYVFxuXHRAZXh0ZW5kcyBNdWx0aVRva2VuXG4qL1xudmFyIFRFWFQgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwgeyB0eXBlOiAndGV4dCcgfSk7XG5cbi8qKlxuXHRNdWx0aS1saW5lYnJlYWsgdG9rZW4gLSByZXByZXNlbnRzIGEgbGluZSBicmVha1xuXHRAY2xhc3MgTkxcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBOTCA9ICgwLCBfY2xhc3MuaW5oZXJpdHMpKE11bHRpVG9rZW4sICgwLCBfY3JlYXRlVG9rZW5DbGFzcy5jcmVhdGVUb2tlbkNsYXNzKSgpLCB7IHR5cGU6ICdubCcgfSk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgbGlzdCBvZiB0b2tlbnMgbWFraW5nIHVwIGEgdmFsaWQgVVJMXG5cdEBjbGFzcyBVUkxcblx0QGV4dGVuZHMgTXVsdGlUb2tlblxuKi9cbnZhciBVUkwgPSAoMCwgX2NsYXNzLmluaGVyaXRzKShNdWx0aVRva2VuLCAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKSwge1xuXHR0eXBlOiAndXJsJyxcblx0aXNMaW5rOiB0cnVlLFxuXG5cdC8qKlxuIFx0TG93ZXJjYXNlcyByZWxldmFudCBwYXJ0cyBvZiB0aGUgZG9tYWluIGFuZCBhZGRzIHRoZSBwcm90b2NvbCBpZlxuIFx0cmVxdWlyZWQuIE5vdGUgdGhhdCB0aGlzIHdpbGwgbm90IGVzY2FwZSB1bnNhZmUgSFRNTCBjaGFyYWN0ZXJzIGluIHRoZVxuIFx0VVJMLlxuIFx0XHRAbWV0aG9kIGhyZWZcbiBcdEBwYXJhbSB7U3RyaW5nfSBwcm90b2NvbFxuIFx0QHJldHVybiB7U3RyaW5nfVxuICovXG5cdHRvSHJlZjogZnVuY3Rpb24gdG9IcmVmKCkge1xuXHRcdHZhciBwcm90b2NvbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2h0dHAnO1xuXG5cdFx0dmFyIGhhc1Byb3RvY29sID0gZmFsc2U7XG5cdFx0dmFyIGhhc1NsYXNoU2xhc2ggPSBmYWxzZTtcblx0XHR2YXIgdG9rZW5zID0gdGhpcy52O1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblx0XHR2YXIgaSA9IDA7XG5cblx0XHQvLyBNYWtlIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBkb21haW4gbG93ZXJjYXNlXG5cdFx0Ly8gTG93ZXJjYXNlIHByb3RvY29sXG5cdFx0d2hpbGUgKHRva2Vuc1tpXSBpbnN0YW5jZW9mIF90ZXh0LlBST1RPQ09MKSB7XG5cdFx0XHRoYXNQcm90b2NvbCA9IHRydWU7XG5cdFx0XHRyZXN1bHQucHVzaCh0b2tlbnNbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHQvLyBTa2lwIHNsYXNoLXNsYXNoXG5cdFx0d2hpbGUgKHRva2Vuc1tpXSBpbnN0YW5jZW9mIF90ZXh0LlNMQVNIKSB7XG5cdFx0XHRoYXNTbGFzaFNsYXNoID0gdHJ1ZTtcblx0XHRcdHJlc3VsdC5wdXNoKHRva2Vuc1tpXS50b1N0cmluZygpKTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHQvLyBMb3dlcmNhc2UgYWxsIG90aGVyIGNoYXJhY3RlcnMgaW4gdGhlIGRvbWFpblxuXHRcdHdoaWxlIChpc0RvbWFpblRva2VuKHRva2Vuc1tpXSkpIHtcblx0XHRcdHJlc3VsdC5wdXNoKHRva2Vuc1tpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdC8vIExlYXZlIGFsbCBvdGhlciBjaGFyYWN0ZXJzIGFzIHRoZXkgd2VyZSB3cml0dGVuXG5cdFx0Zm9yICg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdC5wdXNoKHRva2Vuc1tpXS50b1N0cmluZygpKTtcblx0XHR9XG5cblx0XHRyZXN1bHQgPSByZXN1bHQuam9pbignJyk7XG5cblx0XHRpZiAoIShoYXNQcm90b2NvbCB8fCBoYXNTbGFzaFNsYXNoKSkge1xuXHRcdFx0cmVzdWx0ID0gcHJvdG9jb2wgKyAnOi8vJyArIHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9LFxuXHRoYXNQcm90b2NvbDogZnVuY3Rpb24gaGFzUHJvdG9jb2woKSB7XG5cdFx0cmV0dXJuIHRoaXMudlswXSBpbnN0YW5jZW9mIF90ZXh0LlBST1RPQ09MO1xuXHR9XG59KTtcblxuZXhwb3J0cy5CYXNlID0gTXVsdGlUb2tlbjtcbmV4cG9ydHMuTUFJTFRPRU1BSUwgPSBNQUlMVE9FTUFJTDtcbmV4cG9ydHMuRU1BSUwgPSBFTUFJTDtcbmV4cG9ydHMuTkwgPSBOTDtcbmV4cG9ydHMuVEVYVCA9IFRFWFQ7XG5leHBvcnRzLlVSTCA9IFVSTDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkFNUEVSU0FORCA9IGV4cG9ydHMuQ0xPU0VQQVJFTiA9IGV4cG9ydHMuQ0xPU0VBTkdMRUJSQUNLRVQgPSBleHBvcnRzLkNMT1NFQlJBQ0tFVCA9IGV4cG9ydHMuQ0xPU0VCUkFDRSA9IGV4cG9ydHMuT1BFTlBBUkVOID0gZXhwb3J0cy5PUEVOQU5HTEVCUkFDS0VUID0gZXhwb3J0cy5PUEVOQlJBQ0tFVCA9IGV4cG9ydHMuT1BFTkJSQUNFID0gZXhwb3J0cy5XUyA9IGV4cG9ydHMuVExEID0gZXhwb3J0cy5TWU0gPSBleHBvcnRzLlVOREVSU0NPUkUgPSBleHBvcnRzLlNMQVNIID0gZXhwb3J0cy5NQUlMVE8gPSBleHBvcnRzLlBST1RPQ09MID0gZXhwb3J0cy5RVUVSWSA9IGV4cG9ydHMuUE9VTkQgPSBleHBvcnRzLlBMVVMgPSBleHBvcnRzLk5VTSA9IGV4cG9ydHMuTkwgPSBleHBvcnRzLkxPQ0FMSE9TVCA9IGV4cG9ydHMuUFVOQ1RVQVRJT04gPSBleHBvcnRzLkRPVCA9IGV4cG9ydHMuQ09MT04gPSBleHBvcnRzLkFUID0gZXhwb3J0cy5ET01BSU4gPSBleHBvcnRzLkJhc2UgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlVG9rZW5DbGFzcyA9IHJlcXVpcmUoJy4vY3JlYXRlLXRva2VuLWNsYXNzJyk7XG5cbnZhciBfY2xhc3MgPSByZXF1aXJlKCcuLi8uLi91dGlscy9jbGFzcycpO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFRleHQgVG9rZW5zXG5cdFRva2VucyBjb21wb3NlZCBvZiBzdHJpbmdzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8qKlxuXHRBYnN0cmFjdCBjbGFzcyB1c2VkIGZvciBtYW51ZmFjdHVyaW5nIHRleHQgdG9rZW5zLlxuXHRQYXNzIGluIHRoZSB2YWx1ZSB0aGlzIHRva2VuIHJlcHJlc2VudHNcblxuXHRAY2xhc3MgVGV4dFRva2VuXG5cdEBhYnN0cmFjdFxuKi9cbnZhciBUZXh0VG9rZW4gPSAoMCwgX2NyZWF0ZVRva2VuQ2xhc3MuY3JlYXRlVG9rZW5DbGFzcykoKTtcblRleHRUb2tlbi5wcm90b3R5cGUgPSB7XG5cdHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy52ICsgJyc7XG5cdH1cbn07XG5cbmZ1bmN0aW9uIGluaGVyaXRzVG9rZW4odmFsdWUpIHtcblx0dmFyIHByb3BzID0gdmFsdWUgPyB7IHY6IHZhbHVlIH0gOiB7fTtcblx0cmV0dXJuICgwLCBfY2xhc3MuaW5oZXJpdHMpKFRleHRUb2tlbiwgKDAsIF9jcmVhdGVUb2tlbkNsYXNzLmNyZWF0ZVRva2VuQ2xhc3MpKCksIHByb3BzKTtcbn1cblxuLyoqXG5cdEEgdmFsaWQgZG9tYWluIHRva2VuXG5cdEBjbGFzcyBET01BSU5cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIERPTUFJTiA9IGluaGVyaXRzVG9rZW4oKTtcblxuLyoqXG5cdEBjbGFzcyBBVFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgQVQgPSBpbmhlcml0c1Rva2VuKCdAJyk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgc2luZ2xlIGNvbG9uIGA6YCBjaGFyYWN0ZXJcblxuXHRAY2xhc3MgQ09MT05cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIENPTE9OID0gaW5oZXJpdHNUb2tlbignOicpO1xuXG4vKipcblx0QGNsYXNzIERPVFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgRE9UID0gaW5oZXJpdHNUb2tlbignLicpO1xuXG4vKipcblx0QSBjaGFyYWN0ZXIgY2xhc3MgdGhhdCBjYW4gc3Vycm91bmQgdGhlIFVSTCwgYnV0IHdoaWNoIHRoZSBVUkwgY2Fubm90IGJlZ2luXG5cdG9yIGVuZCB3aXRoLiBEb2VzIG5vdCBpbmNsdWRlIGNlcnRhaW4gRW5nbGlzaCBwdW5jdHVhdGlvbiBsaWtlIHBhcmVudGhlc2VzLlxuXG5cdEBjbGFzcyBQVU5DVFVBVElPTlxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUFVOQ1RVQVRJT04gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRUaGUgd29yZCBsb2NhbGhvc3QgKGJ5IGl0c2VsZilcblx0QGNsYXNzIExPQ0FMSE9TVFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgTE9DQUxIT1NUID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0TmV3bGluZSB0b2tlblxuXHRAY2xhc3MgTkxcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIE5MID0gaW5oZXJpdHNUb2tlbignXFxuJyk7XG5cbi8qKlxuXHRAY2xhc3MgTlVNXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBOVU0gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRAY2xhc3MgUExVU1xuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUExVUyA9IGluaGVyaXRzVG9rZW4oJysnKTtcblxuLyoqXG5cdEBjbGFzcyBQT1VORFxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUE9VTkQgPSBpbmhlcml0c1Rva2VuKCcjJyk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgd2ViIFVSTCBwcm90b2NvbC4gU3VwcG9ydGVkIHR5cGVzIGluY2x1ZGVcblxuXHQqIGBodHRwOmBcblx0KiBgaHR0cHM6YFxuXHQqIGBmdHA6YFxuXHQqIGBmdHBzOmBcblxuXHRAY2xhc3MgUFJPVE9DT0xcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFBST1RPQ09MID0gaW5oZXJpdHNUb2tlbigpO1xuXG4vKipcblx0UmVwcmVzZW50cyB0aGUgc3RhcnQgb2YgdGhlIGVtYWlsIFVSSSBwcm90b2NvbFxuXG5cdEBjbGFzcyBNQUlMVE9cblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIE1BSUxUTyA9IGluaGVyaXRzVG9rZW4oJ21haWx0bzonKTtcblxuLyoqXG5cdEBjbGFzcyBRVUVSWVxuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgUVVFUlkgPSBpbmhlcml0c1Rva2VuKCc/Jyk7XG5cbi8qKlxuXHRAY2xhc3MgU0xBU0hcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFNMQVNIID0gaW5oZXJpdHNUb2tlbignLycpO1xuXG4vKipcblx0QGNsYXNzIFVOREVSU0NPUkVcblx0QGV4dGVuZHMgVGV4dFRva2VuXG4qL1xudmFyIFVOREVSU0NPUkUgPSBpbmhlcml0c1Rva2VuKCdfJyk7XG5cbi8qKlxuXHRPbmUgb3JlIG1vcmUgbm9uLXdoaXRlc3BhY2Ugc3ltYm9sLlxuXHRAY2xhc3MgU1lNXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBTWU0gPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRAY2xhc3MgVExEXG5cdEBleHRlbmRzIFRleHRUb2tlblxuKi9cbnZhciBUTEQgPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRSZXByZXNlbnRzIGEgc3RyaW5nIG9mIGNvbnNlY3V0aXZlIHdoaXRlc3BhY2UgY2hhcmFjdGVyc1xuXG5cdEBjbGFzcyBXU1xuXHRAZXh0ZW5kcyBUZXh0VG9rZW5cbiovXG52YXIgV1MgPSBpbmhlcml0c1Rva2VuKCk7XG5cbi8qKlxuXHRPcGVuaW5nL2Nsb3NpbmcgYnJhY2tldCBjbGFzc2VzXG4qL1xuXG52YXIgT1BFTkJSQUNFID0gaW5oZXJpdHNUb2tlbigneycpO1xudmFyIE9QRU5CUkFDS0VUID0gaW5oZXJpdHNUb2tlbignWycpO1xudmFyIE9QRU5BTkdMRUJSQUNLRVQgPSBpbmhlcml0c1Rva2VuKCc8Jyk7XG52YXIgT1BFTlBBUkVOID0gaW5oZXJpdHNUb2tlbignKCcpO1xudmFyIENMT1NFQlJBQ0UgPSBpbmhlcml0c1Rva2VuKCd9Jyk7XG52YXIgQ0xPU0VCUkFDS0VUID0gaW5oZXJpdHNUb2tlbignXScpO1xudmFyIENMT1NFQU5HTEVCUkFDS0VUID0gaW5oZXJpdHNUb2tlbignPicpO1xudmFyIENMT1NFUEFSRU4gPSBpbmhlcml0c1Rva2VuKCcpJyk7XG5cbnZhciBBTVBFUlNBTkQgPSBpbmhlcml0c1Rva2VuKCcmJyk7XG5cbmV4cG9ydHMuQmFzZSA9IFRleHRUb2tlbjtcbmV4cG9ydHMuRE9NQUlOID0gRE9NQUlOO1xuZXhwb3J0cy5BVCA9IEFUO1xuZXhwb3J0cy5DT0xPTiA9IENPTE9OO1xuZXhwb3J0cy5ET1QgPSBET1Q7XG5leHBvcnRzLlBVTkNUVUFUSU9OID0gUFVOQ1RVQVRJT047XG5leHBvcnRzLkxPQ0FMSE9TVCA9IExPQ0FMSE9TVDtcbmV4cG9ydHMuTkwgPSBOTDtcbmV4cG9ydHMuTlVNID0gTlVNO1xuZXhwb3J0cy5QTFVTID0gUExVUztcbmV4cG9ydHMuUE9VTkQgPSBQT1VORDtcbmV4cG9ydHMuUVVFUlkgPSBRVUVSWTtcbmV4cG9ydHMuUFJPVE9DT0wgPSBQUk9UT0NPTDtcbmV4cG9ydHMuTUFJTFRPID0gTUFJTFRPO1xuZXhwb3J0cy5TTEFTSCA9IFNMQVNIO1xuZXhwb3J0cy5VTkRFUlNDT1JFID0gVU5ERVJTQ09SRTtcbmV4cG9ydHMuU1lNID0gU1lNO1xuZXhwb3J0cy5UTEQgPSBUTEQ7XG5leHBvcnRzLldTID0gV1M7XG5leHBvcnRzLk9QRU5CUkFDRSA9IE9QRU5CUkFDRTtcbmV4cG9ydHMuT1BFTkJSQUNLRVQgPSBPUEVOQlJBQ0tFVDtcbmV4cG9ydHMuT1BFTkFOR0xFQlJBQ0tFVCA9IE9QRU5BTkdMRUJSQUNLRVQ7XG5leHBvcnRzLk9QRU5QQVJFTiA9IE9QRU5QQVJFTjtcbmV4cG9ydHMuQ0xPU0VCUkFDRSA9IENMT1NFQlJBQ0U7XG5leHBvcnRzLkNMT1NFQlJBQ0tFVCA9IENMT1NFQlJBQ0tFVDtcbmV4cG9ydHMuQ0xPU0VBTkdMRUJSQUNLRVQgPSBDTE9TRUFOR0xFQlJBQ0tFVDtcbmV4cG9ydHMuQ0xPU0VQQVJFTiA9IENMT1NFUEFSRU47XG5leHBvcnRzLkFNUEVSU0FORCA9IEFNUEVSU0FORDsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBtZW50aW9uO1xuLyoqXG5cdE1lbnRpb24gcGFyc2VyIHBsdWdpbiBmb3IgbGlua2lmeVxuKi9cbmZ1bmN0aW9uIG1lbnRpb24obGlua2lmeSkge1xuXHR2YXIgVFQgPSBsaW5raWZ5LnNjYW5uZXIuVE9LRU5TOyAvLyBUZXh0IHRva2Vuc1xuXHR2YXIgX2xpbmtpZnkkcGFyc2VyID0gbGlua2lmeS5wYXJzZXIsXG5cdCAgICBNVCA9IF9saW5raWZ5JHBhcnNlci5UT0tFTlMsXG5cdCAgICBTdGF0ZSA9IF9saW5raWZ5JHBhcnNlci5TdGF0ZTsgLy8gTXVsdGkgdG9rZW5zLCBzdGF0ZVxuXG5cdHZhciBNdWx0aVRva2VuID0gTVQuQmFzZTtcblx0dmFyIFNfU1RBUlQgPSBsaW5raWZ5LnBhcnNlci5zdGFydDtcblxuXHR2YXIgVFRfRE9NQUlOID0gVFQuRE9NQUlOO1xuXHR2YXIgVFRfTE9DQUxIT1NUID0gVFQuTE9DQUxIT1NUO1xuXHR2YXIgVFRfTlVNID0gVFQuTlVNO1xuXHR2YXIgVFRfU0xBU0ggPSBUVC5TTEFTSDtcblx0dmFyIFRUX1RMRCA9IFRULlRMRDtcblx0dmFyIFRUX1VOREVSU0NPUkUgPSBUVC5VTkRFUlNDT1JFO1xuXHR2YXIgVFRfRE9UID0gVFQuRE9UO1xuXHR2YXIgVFRfQVQgPSBUVC5BVDtcblxuXHRmdW5jdGlvbiBNRU5USU9OKHZhbHVlKSB7XG5cdFx0dGhpcy52ID0gdmFsdWU7XG5cdH1cblxuXHRsaW5raWZ5LmluaGVyaXRzKE11bHRpVG9rZW4sIE1FTlRJT04sIHtcblx0XHR0eXBlOiAnbWVudGlvbicsXG5cdFx0aXNMaW5rOiB0cnVlLFxuXHRcdHRvSHJlZjogZnVuY3Rpb24gdG9IcmVmKCkge1xuXHRcdFx0cmV0dXJuICcvJyArIHRoaXMudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG5cdFx0fVxuXHR9KTtcblxuXHR2YXIgU19BVCA9IFNfU1RBUlQuanVtcChUVC5BVCk7IC8vIEBcblx0dmFyIFNfQVRfU1lNUyA9IG5ldyBTdGF0ZSgpO1xuXHR2YXIgU19NRU5USU9OID0gbmV3IFN0YXRlKE1FTlRJT04pO1xuXHR2YXIgU19NRU5USU9OX0RJVklERVIgPSBuZXcgU3RhdGUoKTtcblx0dmFyIFNfTUVOVElPTl9ESVZJREVSX1NZTVMgPSBuZXcgU3RhdGUoKTtcblxuXHQvLyBAXyxcblx0U19BVC5vbihUVF9VTkRFUlNDT1JFLCBTX0FUX1NZTVMpO1xuXG5cdC8vICBAXypcblx0U19BVF9TWU1TLm9uKFRUX1VOREVSU0NPUkUsIFNfQVRfU1lNUykub24oVFRfRE9ULCBTX0FUX1NZTVMpO1xuXG5cdC8vIFZhbGlkIG1lbnRpb24gKG5vdCBtYWRlIHVwIGVudGlyZWx5IG9mIHN5bWJvbHMpXG5cdFNfQVQub24oVFRfRE9NQUlOLCBTX01FTlRJT04pLm9uKFRUX0xPQ0FMSE9TVCwgU19NRU5USU9OKS5vbihUVF9UTEQsIFNfTUVOVElPTikub24oVFRfTlVNLCBTX01FTlRJT04pO1xuXG5cdFNfQVRfU1lNUy5vbihUVF9ET01BSU4sIFNfTUVOVElPTikub24oVFRfTE9DQUxIT1NULCBTX01FTlRJT04pLm9uKFRUX1RMRCwgU19NRU5USU9OKS5vbihUVF9OVU0sIFNfTUVOVElPTik7XG5cblx0Ly8gTW9yZSB2YWxpZCBtZW50aW9uc1xuXHRTX01FTlRJT04ub24oVFRfRE9NQUlOLCBTX01FTlRJT04pLm9uKFRUX0xPQ0FMSE9TVCwgU19NRU5USU9OKS5vbihUVF9UTEQsIFNfTUVOVElPTikub24oVFRfTlVNLCBTX01FTlRJT04pLm9uKFRUX1VOREVSU0NPUkUsIFNfTUVOVElPTik7XG5cblx0Ly8gTWVudGlvbiB3aXRoIGEgZGl2aWRlclxuXHRTX01FTlRJT04ub24oVFRfU0xBU0gsIFNfTUVOVElPTl9ESVZJREVSKS5vbihUVF9ET1QsIFNfTUVOVElPTl9ESVZJREVSKS5vbihUVF9BVCwgU19NRU5USU9OX0RJVklERVIpO1xuXG5cdC8vIE1lbnRpb24gXyB0cmFpbGluZyBzdGFzaCBwbHVzIHN5bXNcblx0U19NRU5USU9OX0RJVklERVIub24oVFRfVU5ERVJTQ09SRSwgU19NRU5USU9OX0RJVklERVJfU1lNUyk7XG5cdFNfTUVOVElPTl9ESVZJREVSX1NZTVMub24oVFRfVU5ERVJTQ09SRSwgU19NRU5USU9OX0RJVklERVJfU1lNUyk7XG5cblx0Ly8gT25jZSB3ZSBnZXQgYSB3b3JkIHRva2VuLCBtZW50aW9ucyBjYW4gc3RhcnQgdXAgYWdhaW5cblx0U19NRU5USU9OX0RJVklERVIub24oVFRfRE9NQUlOLCBTX01FTlRJT04pLm9uKFRUX0xPQ0FMSE9TVCwgU19NRU5USU9OKS5vbihUVF9UTEQsIFNfTUVOVElPTikub24oVFRfTlVNLCBTX01FTlRJT04pO1xuXG5cdFNfTUVOVElPTl9ESVZJREVSX1NZTVMub24oVFRfRE9NQUlOLCBTX01FTlRJT04pLm9uKFRUX0xPQ0FMSE9TVCwgU19NRU5USU9OKS5vbihUVF9UTEQsIFNfTUVOVElPTikub24oVFRfTlVNLCBTX01FTlRJT04pO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5pbmhlcml0cyA9IGluaGVyaXRzO1xuZnVuY3Rpb24gaW5oZXJpdHMocGFyZW50LCBjaGlsZCkge1xuXHR2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG5cdHZhciBleHRlbmRlZCA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSk7XG5cdGZvciAodmFyIHAgaW4gcHJvcHMpIHtcblx0XHRleHRlbmRlZFtwXSA9IHByb3BzW3BdO1xuXHR9XG5cdGV4dGVuZGVkLmNvbnN0cnVjdG9yID0gY2hpbGQ7XG5cdGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZGVkO1xuXHRyZXR1cm4gY2hpbGQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBkZWZhdWx0cyA9IHtcblx0ZGVmYXVsdFByb3RvY29sOiAnaHR0cCcsXG5cdGV2ZW50czogbnVsbCxcblx0Zm9ybWF0OiBub29wLFxuXHRmb3JtYXRIcmVmOiBub29wLFxuXHRubDJicjogZmFsc2UsXG5cdHRhZ05hbWU6ICdhJyxcblx0dGFyZ2V0OiB0eXBlVG9UYXJnZXQsXG5cdHZhbGlkYXRlOiB0cnVlLFxuXHRpZ25vcmVUYWdzOiBbXSxcblx0YXR0cmlidXRlczogbnVsbCxcblx0Y2xhc3NOYW1lOiAnbGlua2lmaWVkJyAvLyBEZXByZWNhdGVkIHZhbHVlIC0gbm8gZGVmYXVsdCBjbGFzcyB3aWxsIGJlIHByb3ZpZGVkIGluIHRoZSBmdXR1cmVcbn07XG5cbmV4cG9ydHMuZGVmYXVsdHMgPSBkZWZhdWx0cztcbmV4cG9ydHMuT3B0aW9ucyA9IE9wdGlvbnM7XG5leHBvcnRzLmNvbnRhaW5zID0gY29udGFpbnM7XG5cblxuZnVuY3Rpb24gT3B0aW9ucyhvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXG5cdHRoaXMuZGVmYXVsdFByb3RvY29sID0gb3B0cy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdFByb3RvY29sJykgPyBvcHRzLmRlZmF1bHRQcm90b2NvbCA6IGRlZmF1bHRzLmRlZmF1bHRQcm90b2NvbDtcblx0dGhpcy5ldmVudHMgPSBvcHRzLmhhc093blByb3BlcnR5KCdldmVudHMnKSA/IG9wdHMuZXZlbnRzIDogZGVmYXVsdHMuZXZlbnRzO1xuXHR0aGlzLmZvcm1hdCA9IG9wdHMuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdCcpID8gb3B0cy5mb3JtYXQgOiBkZWZhdWx0cy5mb3JtYXQ7XG5cdHRoaXMuZm9ybWF0SHJlZiA9IG9wdHMuaGFzT3duUHJvcGVydHkoJ2Zvcm1hdEhyZWYnKSA/IG9wdHMuZm9ybWF0SHJlZiA6IGRlZmF1bHRzLmZvcm1hdEhyZWY7XG5cdHRoaXMubmwyYnIgPSBvcHRzLmhhc093blByb3BlcnR5KCdubDJicicpID8gb3B0cy5ubDJiciA6IGRlZmF1bHRzLm5sMmJyO1xuXHR0aGlzLnRhZ05hbWUgPSBvcHRzLmhhc093blByb3BlcnR5KCd0YWdOYW1lJykgPyBvcHRzLnRhZ05hbWUgOiBkZWZhdWx0cy50YWdOYW1lO1xuXHR0aGlzLnRhcmdldCA9IG9wdHMuaGFzT3duUHJvcGVydHkoJ3RhcmdldCcpID8gb3B0cy50YXJnZXQgOiBkZWZhdWx0cy50YXJnZXQ7XG5cdHRoaXMudmFsaWRhdGUgPSBvcHRzLmhhc093blByb3BlcnR5KCd2YWxpZGF0ZScpID8gb3B0cy52YWxpZGF0ZSA6IGRlZmF1bHRzLnZhbGlkYXRlO1xuXHR0aGlzLmlnbm9yZVRhZ3MgPSBbXTtcblxuXHQvLyBsaW5rQXR0cmlidXRlcyBhbmQgbGlua0NsYXNzIGlzIGRlcHJlY2F0ZWRcblx0dGhpcy5hdHRyaWJ1dGVzID0gb3B0cy5hdHRyaWJ1dGVzIHx8IG9wdHMubGlua0F0dHJpYnV0ZXMgfHwgZGVmYXVsdHMuYXR0cmlidXRlcztcblx0dGhpcy5jbGFzc05hbWUgPSBvcHRzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/IG9wdHMuY2xhc3NOYW1lIDogb3B0cy5saW5rQ2xhc3MgfHwgZGVmYXVsdHMuY2xhc3NOYW1lO1xuXG5cdC8vIE1ha2UgYWxsIHRhZ3MgbmFtZXMgdXBwZXIgY2FzZVxuXHR2YXIgaWdub3JlZFRhZ3MgPSBvcHRzLmhhc093blByb3BlcnR5KCdpZ25vcmVUYWdzJykgPyBvcHRzLmlnbm9yZVRhZ3MgOiBkZWZhdWx0cy5pZ25vcmVUYWdzO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGlnbm9yZWRUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dGhpcy5pZ25vcmVUYWdzLnB1c2goaWdub3JlZFRhZ3NbaV0udG9VcHBlckNhc2UoKSk7XG5cdH1cbn1cblxuT3B0aW9ucy5wcm90b3R5cGUgPSB7XG5cdC8qKlxuICAqIEdpdmVuIHRoZSB0b2tlbiwgcmV0dXJuIGFsbCBvcHRpb25zIGZvciBob3cgaXQgc2hvdWxkIGJlIGRpc3BsYXllZFxuICAqL1xuXHRyZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHRva2VuKSB7XG5cdFx0dmFyIGhyZWYgPSB0b2tlbi50b0hyZWYodGhpcy5kZWZhdWx0UHJvdG9jb2wpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRmb3JtYXR0ZWQ6IHRoaXMuZ2V0KCdmb3JtYXQnLCB0b2tlbi50b1N0cmluZygpLCB0b2tlbiksXG5cdFx0XHRmb3JtYXR0ZWRIcmVmOiB0aGlzLmdldCgnZm9ybWF0SHJlZicsIGhyZWYsIHRva2VuKSxcblx0XHRcdHRhZ05hbWU6IHRoaXMuZ2V0KCd0YWdOYW1lJywgaHJlZiwgdG9rZW4pLFxuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLmdldCgnY2xhc3NOYW1lJywgaHJlZiwgdG9rZW4pLFxuXHRcdFx0dGFyZ2V0OiB0aGlzLmdldCgndGFyZ2V0JywgaHJlZiwgdG9rZW4pLFxuXHRcdFx0ZXZlbnRzOiB0aGlzLmdldE9iamVjdCgnZXZlbnRzJywgaHJlZiwgdG9rZW4pLFxuXHRcdFx0YXR0cmlidXRlczogdGhpcy5nZXRPYmplY3QoJ2F0dHJpYnV0ZXMnLCBocmVmLCB0b2tlbilcblx0XHR9O1xuXHR9LFxuXG5cblx0LyoqXG4gICogUmV0dXJucyB0cnVlIG9yIGZhbHNlIGJhc2VkIG9uIHdoZXRoZXIgYSB0b2tlbiBzaG91bGQgYmUgZGlzcGxheWVkIGFzIGFcbiAgKiBsaW5rIGJhc2VkIG9uIHRoZSB1c2VyIG9wdGlvbnMuIEJ5IGRlZmF1bHQsXG4gICovXG5cdGNoZWNrOiBmdW5jdGlvbiBjaGVjayh0b2tlbikge1xuXHRcdHJldHVybiB0aGlzLmdldCgndmFsaWRhdGUnLCB0b2tlbi50b1N0cmluZygpLCB0b2tlbik7XG5cdH0sXG5cblxuXHQvLyBQcml2YXRlIG1ldGhvZHNcblxuXHQvKipcbiAgKiBSZXNvbHZlIGFuIG9wdGlvbidzIHZhbHVlIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgb3B0aW9uIGFuZCB0aGUgZ2l2ZW5cbiAgKiBwYXJhbXMuXG4gICogQHBhcmFtIHtTdHJpbmd9IGtleSBOYW1lIG9mIG9wdGlvbiB0byB1c2VcbiAgKiBAcGFyYW0gb3BlcmF0b3Igd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHRhcmdldCBvcHRpb24gaWYgaXQncyBtZXRob2RcbiAgKiBAcGFyYW0ge011bHRpVG9rZW59IHRva2VuIFRoZSB0b2tlbiBmcm9tIGxpbmtpZnkudG9rZW5pemVcbiAgKi9cblx0Z2V0OiBmdW5jdGlvbiBnZXQoa2V5LCBvcGVyYXRvciwgdG9rZW4pIHtcblx0XHR2YXIgb3B0aW9uVmFsdWUgPSB2b2lkIDAsXG5cdFx0ICAgIG9wdGlvbiA9IHRoaXNba2V5XTtcblx0XHRpZiAoIW9wdGlvbikge1xuXHRcdFx0cmV0dXJuIG9wdGlvbjtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKHR5cGVvZiBvcHRpb24gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKG9wdGlvbikpIHtcblx0XHRcdGNhc2UgJ2Z1bmN0aW9uJzpcblx0XHRcdFx0cmV0dXJuIG9wdGlvbihvcGVyYXRvciwgdG9rZW4udHlwZSk7XG5cdFx0XHRjYXNlICdvYmplY3QnOlxuXHRcdFx0XHRvcHRpb25WYWx1ZSA9IG9wdGlvbi5oYXNPd25Qcm9wZXJ0eSh0b2tlbi50eXBlKSA/IG9wdGlvblt0b2tlbi50eXBlXSA6IGRlZmF1bHRzW2tleV07XG5cdFx0XHRcdHJldHVybiB0eXBlb2Ygb3B0aW9uVmFsdWUgPT09ICdmdW5jdGlvbicgPyBvcHRpb25WYWx1ZShvcGVyYXRvciwgdG9rZW4udHlwZSkgOiBvcHRpb25WYWx1ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3B0aW9uO1xuXHR9LFxuXHRnZXRPYmplY3Q6IGZ1bmN0aW9uIGdldE9iamVjdChrZXksIG9wZXJhdG9yLCB0b2tlbikge1xuXHRcdHZhciBvcHRpb24gPSB0aGlzW2tleV07XG5cdFx0cmV0dXJuIHR5cGVvZiBvcHRpb24gPT09ICdmdW5jdGlvbicgPyBvcHRpb24ob3BlcmF0b3IsIHRva2VuLnR5cGUpIDogb3B0aW9uO1xuXHR9XG59O1xuXG4vKipcbiAqIFF1aWNrIGluZGV4T2YgcmVwbGFjZW1lbnQgZm9yIGNoZWNraW5nIHRoZSBpZ25vcmVUYWdzIG9wdGlvblxuICovXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIHZhbHVlKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0aWYgKGFycltpXSA9PT0gdmFsdWUpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG5vb3AodmFsKSB7XG5cdHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIHR5cGVUb1RhcmdldChocmVmLCB0eXBlKSB7XG5cdHJldHVybiB0eXBlID09PSAndXJsJyA/ICdfYmxhbmsnIDogbnVsbDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2xpYi9saW5raWZ5L3BsdWdpbnMvbWVudGlvbicpLmRlZmF1bHQ7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJmdW5jdGlvbiB2YWxpZGF0ZShiaW5kaW5nKSB7XHJcbiAgaWYgKHR5cGVvZiBiaW5kaW5nLnZhbHVlICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1tWdWUtY2xpY2stb3V0c2lkZTpdIHByb3ZpZGVkIGV4cHJlc3Npb24nLCBiaW5kaW5nLmV4cHJlc3Npb24sICdpcyBub3QgYSBmdW5jdGlvbi4nKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc1BvcHVwKHBvcHVwSXRlbSwgZWxlbWVudHMpIHtcclxuICBpZiAoIXBvcHVwSXRlbSB8fCAhZWxlbWVudHMpXHJcbiAgICByZXR1cm4gZmFsc2VcclxuXHJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAocG9wdXBJdGVtLmNvbnRhaW5zKGVsZW1lbnRzW2ldKSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVsZW1lbnRzW2ldLmNvbnRhaW5zKHBvcHVwSXRlbSkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaChlKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2VydmVyKHZOb2RlKSB7XHJcbiAgcmV0dXJuIHR5cGVvZiB2Tm9kZS5jb21wb25lbnRJbnN0YW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdk5vZGUuY29tcG9uZW50SW5zdGFuY2UuJGlzU2VydmVyXHJcbn1cclxuXHJcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICBiaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcsIHZOb2RlKSB7XHJcbiAgICBpZiAoIXZhbGlkYXRlKGJpbmRpbmcpKSByZXR1cm5cclxuXHJcbiAgICAvLyBEZWZpbmUgSGFuZGxlciBhbmQgY2FjaGUgaXQgb24gdGhlIGVsZW1lbnRcclxuICAgIGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xyXG4gICAgICBpZiAoIXZOb2RlLmNvbnRleHQpIHJldHVyblxyXG5cclxuICAgICAgLy8gc29tZSBjb21wb25lbnRzIG1heSBoYXZlIHJlbGF0ZWQgcG9wdXAgaXRlbSwgb24gd2hpY2ggd2Ugc2hhbGwgcHJldmVudCB0aGUgY2xpY2sgb3V0c2lkZSBldmVudCBoYW5kbGVyLlxyXG4gICAgICB2YXIgZWxlbWVudHMgPSBlLnBhdGggfHwgKGUuY29tcG9zZWRQYXRoICYmIGUuY29tcG9zZWRQYXRoKCkpXHJcbiAgICAgIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgJiYgZWxlbWVudHMudW5zaGlmdChlLnRhcmdldClcclxuICAgICAgXHJcbiAgICAgIGlmIChlbC5jb250YWlucyhlLnRhcmdldCkgfHwgaXNQb3B1cCh2Tm9kZS5jb250ZXh0LnBvcHVwSXRlbSwgZWxlbWVudHMpKSByZXR1cm5cclxuXHJcbiAgICAgIGVsLl9fdnVlQ2xpY2tPdXRzaWRlX18uY2FsbGJhY2soZSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgRXZlbnQgTGlzdGVuZXJzXHJcbiAgICBlbC5fX3Z1ZUNsaWNrT3V0c2lkZV9fID0ge1xyXG4gICAgICBoYW5kbGVyOiBoYW5kbGVyLFxyXG4gICAgICBjYWxsYmFjazogYmluZGluZy52YWx1ZVxyXG4gICAgfVxyXG4gICAgIWlzU2VydmVyKHZOb2RlKSAmJiBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZXIpXHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcclxuICAgIGlmICh2YWxpZGF0ZShiaW5kaW5nKSkgZWwuX192dWVDbGlja091dHNpZGVfXy5jYWxsYmFjayA9IGJpbmRpbmcudmFsdWVcclxuICB9LFxyXG4gIFxyXG4gIHVuYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2Tm9kZSkge1xyXG4gICAgLy8gUmVtb3ZlIEV2ZW50IExpc3RlbmVyc1xyXG4gICAgIWlzU2VydmVyKHZOb2RlKSAmJiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGVsLl9fdnVlQ2xpY2tPdXRzaWRlX18uaGFuZGxlcilcclxuICAgIGRlbGV0ZSBlbC5fX3Z1ZUNsaWNrT3V0c2lkZV9fXHJcbiAgfVxyXG59XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJtZDpiZy13aGl0ZSBjb250YWluZXIgbWQ6bXgtNCBtZDpteC1hdXRvIG1kOnNoYWRvdy1sZyByb3VuZGVkIG1kOm10LTMyIGZsZXggbWQ6ZmxleC1yb3cgZmxleC1jb2wgbWQ6bWF4LXctMnhsIGxnOm1heC13LTR4bCBqdXN0aWZ5LWJldHdlZW5cIlxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHt9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCBtZDpiZy1pbmRpZ28tMTAwIG1kOnctMS8yIHAtOFwiIH0sIFtcbiAgICAgICAgX2MoXCJmb3JtXCIsIHsgYXR0cnM6IHsgbWV0aG9kOiBcIlBPU1RcIiwgYWN0aW9uOiBfdm0udXJsIH0gfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50b2tlbiB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS04MDBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9sZEVtYWlsIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5lcnJvcnMuZW1haWxcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJlZC00MDAgYmxvY2sgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVycm9ycy5lbWFpbFswXSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm8tdW5kZXJsaW5lIHRleHQtaW5kaWdvLTUwMCB0ZXh0LXNtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwicGFzc3dvcmQvcmVzZXRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkZvcmdvdCBZb3VyIFBhc3N3b3JkP1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJtZDp3LTEvMiB0ZXh0LWNlbnRlciBweC04IHB5LTQgbWQ6YmxvY2tcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWluZGlnby01MDAgZm9udC1ib2xkIHRleHQtNHhsIG1kOnB0LThcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiR09PRFdPUktcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtaW5kaWdvLTUwMCB0ZXh0LXhsXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiIFNlbnNpYmxlIEFwcHJvYWNoIHRvIFdvcmsgJiBDb2xsYWJvcmF0aW9uIGZvciBTb2Z0d2FyZSBUZWFtcyBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwdC04IGhpZGRlbiBtZDpibG9ja1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogXCIvaW1hZ2UvcmVnaXN0ZXIuc3ZnXCIsIGFsdDogXCJ3b3JrIGRlc2tcIiB9XG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJweS00XCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgIFwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS04MDBcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgIG5hbWU6IFwicGFzc3dvcmRcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogXCJQYXNzd29yZFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktNCB0ZXh0LWdyYXktNTAwXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJyZW1lbWJlciBtZVwiLFxuICAgICAgICAgICAgbmFtZTogXCJyZW1lbWJlclwiXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFJlbWVtYmVyIE1lXFxuICAgICAgICBcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwicHktNFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1tZWRpdW0gcHktMiBweC00IHJvdW5kZWRcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIkxPR0lOXCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSdcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAndnVlLWNsaWNrLW91dHNpZGUnXG5pbXBvcnQgKiBhcyBsaW5raWZ5IGZyb20gJ2xpbmtpZnlqcydcbmltcG9ydCBsaW5raWZ5RWxlbWVudCBmcm9tICdsaW5raWZ5anMvZWxlbWVudCdcbmltcG9ydCBtZW50aW9uIGZyb20gJ2xpbmtpZnlqcy9wbHVnaW5zL21lbnRpb24nXG5cbm1lbnRpb24obGlua2lmeSlcblxud2luZG93LlZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpXG5cbndpbmRvdy5heGlvcyA9IHJlcXVpcmUoJ2F4aW9zJylcblxud2luZG93Lmx1eG9uID0gcmVxdWlyZSgnbHV4b24nKVxuXG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7XG4gICdYLUNTUkYtVE9LRU4nOiB3aW5kb3cuTGFyYXZlbC5jc3JmVG9rZW4sXG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xufVxuXG5pZiAodHlwZW9mIGlvICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuRWNobyA9IG5ldyBFY2hvKHtcbiAgICBicm9hZGNhc3RlcjogJ3NvY2tldC5pbycsXG4gICAgaG9zdDogd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzo2MDAxJyxcbiAgICBuYW1lc3BhY2U6ICdBcHAuQmFzZS5FdmVudHMnXG4gIH0pXG59XG5cbndpbmRvdy5WdWUubWl4aW4oe1xuICBtZXRob2RzOiB7XG4gICAgZ2VuZXJhdGVVcmw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuICdodHRwOi8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy9pbWFnZS9hdmF0YXIuanBnJ1xuICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgJy8nICsgdmFsdWVcbiAgICB9LFxuICAgIHVwZGF0ZVVybDogZnVuY3Rpb24gKGdyb3VwVHlwZSwgZ3JvdXBJZCA9IG51bGwpIHtcbiAgICAgIGlmIChoaXN0b3J5LnB1c2hTdGF0ZSAmJiBncm91cElkICE9PSBudWxsKSB7XG4gICAgICAgIGxldCBuZXd1cmwgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICc/Z3JvdXBfdHlwZT0nICsgZ3JvdXBUeXBlICsgJyZncm91cF9pZD0nICsgZ3JvdXBJZFxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoeyBwYXRoOiBuZXd1cmwgfSwgJycsIG5ld3VybClcbiAgICAgIH0gZWxzZSBpZiAoaGlzdG9yeS5wdXNoU3RhdGUpIHtcbiAgICAgICAgbGV0IG5ld3VybCA9IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgJz9ncm91cF90eXBlPScgKyBncm91cFR5cGVcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHsgcGF0aDogbmV3dXJsIH0sICcnLCBuZXd1cmwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxufSlcblxud2luZG93LlZ1ZS5maWx0ZXIoJ2xvY2FsaXplJywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJ1xuICB2YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKClcbiAgcmV0dXJuIHdpbmRvdy5sYW5nW3ZhbHVlXSA/IHdpbmRvdy5sYW5nW3ZhbHVlXSA6IHZhbHVlXG59KVxuXG53aW5kb3cuVnVlLmZpbHRlcignY2FwaXRhbGl6ZScsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gJydcbiAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG59KVxuXG53aW5kb3cuVnVlLmZpbHRlcignY2xpcCcsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSByZXR1cm4gJydcbiAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpXG4gIHJldHVybiB2YWx1ZS5zdWJzdHIoMCwgMjApICsgJy4uLidcbn0pXG5cbndpbmRvdy5WdWUuZGlyZWN0aXZlKCdsaW5raWZ5Jywge1xuICBpbnNlcnRlZDogZnVuY3Rpb24gKGVsKSB7XG4gICAgbGlua2lmeUVsZW1lbnQoZWwsIHtcbiAgICAgIGNsYXNzTmFtZTogJ3RleHQtYmx1ZS01MDAnLFxuICAgICAgZm9ybWF0SHJlZjogZnVuY3Rpb24gKGhyZWYsIHR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdtZW50aW9uJykge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgJy91c2VycycgKyBocmVmXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhyZWZcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KVxuXG53aW5kb3cuVnVlLmRpcmVjdGl2ZSgnY2xpY2stb3V0c2lkZScsIENsaWNrT3V0c2lkZSlcblxud2luZG93LlZ1ZS5jb21wb25lbnQoJ2ZvbnQtYXdlc29tZS1pY29uJywgRm9udEF3ZXNvbWVJY29uKVxuXG53aW5kb3cuRXZlbnRCdXMgPSBuZXcgVnVlKClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFhM2I0NDk5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvcHJvamVjdHMvcGhwL3NpdGVzL2dvb2R3b3JrL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFhM2I0NDk5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFhM2I0NDk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFhM2I0NDk5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWEzYjQ0OTkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWEzYjQ0OTknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWEzYjQ0OTkmXCIiLCJpbXBvcnQgJy4vLi4vLi4vYm9vdHN0cmFwJ1xuaW1wb3J0IGxvZ2luIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9hdXRoL2xvZ2luLnZ1ZSdcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xuICBlbDogJyNhcHAnLFxuICBjb21wb25lbnRzOiB7XG4gICAgbG9naW5cbiAgfVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=