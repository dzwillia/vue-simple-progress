/*!
 * vue-simple-progress v1.1.1 (https://github.com/dzwillia/vue-simple-progress)
 * (c) 2019 David Z. Williams
 * Released under the MIT License.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSimpleProgress"] = factory();
	else
		root["VueSimpleProgress"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VueSimpleProgress = undefined;

var _Progress = __webpack_require__(1);

var _Progress2 = _interopRequireDefault(_Progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-simple-progress', _Progress2.default);
}

exports.VueSimpleProgress = _Progress2.default;
exports.default = _Progress2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(3),
  /* template */
  __webpack_require__(4),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
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
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var isNumber = function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

exports.default = {
  props: {
    'val': {
      default: 0
    },
    'max': {
      default: 100
    },
    'size': {
      default: 3
    },
    'bg-color': {
      type: String,
      default: '#eee'
    },
    'bar-color': {
      type: String,
      default: '#2196f3' },
    'bar-transition': {
      type: String,
      default: 'all 0.5s ease'
    },
    'bar-border-radius': {
      type: Number,
      default: 0
    },
    'spacing': {
      type: Number,
      default: 4
    },
    'text': {
      type: String,
      default: ''
    },
    'text-align': {
      type: String,
      default: 'center' },
    'text-position': {
      type: String,
      default: 'bottom' },
    'font-size': {
      type: Number,
      default: 13
    },
    'text-fg-color': {
      type: String,
      default: '#222'
    }
  },
  computed: {
    pct: function pct() {
      var pct = this.val / this.max * 100;
      pct = pct.toFixed(2);
      return Math.min(pct, this.max);
    },
    size_px: function size_px() {
      switch (this.size) {
        case 'tiny':
          return 2;
        case 'small':
          return 4;
        case 'medium':
          return 8;
        case 'large':
          return 12;
        case 'big':
          return 16;
        case 'huge':
          return 32;
        case 'massive':
          return 64;
      }

      return isNumber(this.size) ? this.size : 32;
    },
    text_padding: function text_padding() {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px / 8), 3), 12);
      }

      return isNumber(this.spacing) ? this.spacing : 4;
    },
    text_font_size: function text_font_size() {
      switch (this.size) {
        case 'tiny':
        case 'small':
        case 'medium':
        case 'large':
        case 'big':
        case 'huge':
        case 'massive':
          return Math.min(Math.max(Math.ceil(this.size_px * 1.4), 11), 32);
      }

      return isNumber(this.fontSize) ? this.fontSize : 13;
    },
    progress_style: function progress_style() {
      var style = {
        'background': this.bgColor
      };

      if (this.textPosition == 'middle' || this.textPosition == 'inside') {
        style['position'] = 'relative';
        style['min-height'] = this.size_px + 'px';
        style['z-index'] = '-2';
      }

      if (this.barBorderRadius > 0) {
        style['border-radius'] = this.barBorderRadius + 'px';
      }

      return style;
    },
    bar_style: function bar_style() {
      var style = {
        'background': this.barColor,
        'width': this.pct + '%',
        'height': this.size_px + 'px',
        'transition': this.barTransition
      };

      if (this.barBorderRadius > 0) {
        style['border-radius'] = this.barBorderRadius + 'px';
      }

      if (this.textPosition == 'middle' || this.textPosition == 'inside') {
        style['position'] = 'absolute';
        style['top'] = '0';
        style['height'] = '100%';
        style['min-height'] = this.size_px + 'px', style['z-index'] = '-1';
      }

      return style;
    },
    text_style: function text_style() {
      var style = {
        'color': this.textFgColor,
        'font-size': this.text_font_size + 'px',
        'text-align': this.textAlign
      };

      if (this.textPosition == 'top' || this.textPosition == 'middle' || this.textPosition == 'inside') style['padding-bottom'] = this.text_padding + 'px';
      if (this.textPosition == 'bottom' || this.textPosition == 'middle' || this.textPosition == 'inside') style['padding-top'] = this.text_padding + 'px';

      return style;
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.text.length > 0 && _vm.textPosition == 'top') ? _c('div', {
    staticClass: "vue-simple-progress-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vue-simple-progress",
    style: (_vm.progress_style)
  }, [(_vm.text.length > 0 && _vm.textPosition == 'middle') ? _c('div', {
    staticClass: "vue-simple-progress-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), (_vm.text.length > 0 && _vm.textPosition == 'inside') ? _c('div', {
    staticStyle: {
      "position": "relative",
      "left": "-9999px"
    },
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vue-simple-progress-bar",
    style: (_vm.bar_style)
  }, [(_vm.text.length > 0 && _vm.textPosition == 'inside') ? _c('div', {
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])]), _vm._v(" "), (_vm.text.length > 0 && _vm.textPosition == 'bottom') ? _c('div', {
    staticClass: "vue-simple-progress-text",
    style: (_vm.text_style)
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])
},staticRenderFns: []}

/***/ })
/******/ ])["default"];
});