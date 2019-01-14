(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSimpleProgress"] = factory();
	else
		root["VueSimpleProgress"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Progress.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Progress.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isNumber = function isNumber(n) {\n  return !isNaN(parseFloat(n)) && isFinite(n);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  props: {\n    'val': {\n      default: 0\n    },\n    'max': {\n      default: 100\n    },\n    'size': {\n      default: 3\n    },\n    'bg-color': {\n      type: String,\n      default: '#eee'\n    },\n    'bar-color': {\n      type: String,\n      default: '#2196f3'\n    },\n    'bar-transition': {\n      type: String,\n      default: 'all 0.5s ease'\n    },\n    'spacing': {\n      type: Number,\n      default: 4\n    },\n    'text': {\n      type: String,\n      default: ''\n    },\n    'text-position': {\n      type: String,\n      default: 'bottom'\n    },\n    'font-size': {\n      type: Number,\n      default: 13\n    },\n    'text-fg-color': {\n      type: String,\n      default: '#222'\n    }\n  },\n  computed: {\n    pct: function pct() {\n      var pct = this.val / this.max * 100;\n      pct = pct.toFixed(2);\n      return Math.min(pct, this.max);\n    },\n    size_px: function size_px() {\n      switch (this.size) {\n        case 'tiny':\n          return 2;\n\n        case 'small':\n          return 4;\n\n        case 'medium':\n          return 8;\n\n        case 'large':\n          return 12;\n\n        case 'big':\n          return 16;\n\n        case 'huge':\n          return 32;\n\n        case 'massive':\n          return 64;\n      }\n\n      return isNumber(this.size) ? this.size : 32;\n    },\n    text_padding: function text_padding() {\n      switch (this.size) {\n        case 'tiny':\n        case 'small':\n        case 'medium':\n        case 'large':\n        case 'big':\n        case 'huge':\n        case 'massive':\n          return Math.min(Math.max(Math.ceil(this.size_px / 8), 3), 12);\n      }\n\n      return isNumber(this.spacing) ? this.spacing : 4;\n    },\n    text_font_size: function text_font_size() {\n      switch (this.size) {\n        case 'tiny':\n        case 'small':\n        case 'medium':\n        case 'large':\n        case 'big':\n        case 'huge':\n        case 'massive':\n          return Math.min(Math.max(Math.ceil(this.size_px * 1.4), 11), 32);\n      }\n\n      return isNumber(this.fontSize) ? this.fontSize : 13;\n    },\n    progress_style: function progress_style() {\n      var style = {\n        'background': this.bgColor\n      };\n\n      if (this.textPosition == 'middle' || this.textPosition == 'inside') {\n        style['position'] = 'relative';\n        style['min-height'] = this.size_px + 'px';\n        style['z-index'] = '-2';\n      }\n\n      return style;\n    },\n    bar_style: function bar_style() {\n      var style = {\n        'background': this.barColor,\n        'width': this.pct + '%',\n        'height': this.size_px + 'px',\n        'transition': this.barTransition\n      };\n\n      if (this.textPosition == 'middle' || this.textPosition == 'inside') {\n        style['position'] = 'absolute';\n        style['top'] = '0';\n        style['height'] = '100%';\n        style['min-height'] = this.size_px + 'px', style['z-index'] = '-1';\n      }\n\n      return style;\n    },\n    text_style: function text_style() {\n      var style = {\n        'color': this.textFgColor,\n        'font-size': this.text_font_size + 'px',\n        'text-align': 'center'\n      };\n      if (this.textPosition == 'top' || this.textPosition == 'middle' || this.textPosition == 'inside') style['padding-bottom'] = this.text_padding + 'px';\n      if (this.textPosition == 'bottom' || this.textPosition == 'middle' || this.textPosition == 'inside') style['padding-top'] = this.text_padding + 'px';\n      return style;\n    }\n  }\n});\n\n//# sourceURL=webpack://VueSimpleProgress/./src/components/Progress.vue?./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Progress.vue?vue&type=template&id=6743df54&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Progress.vue?vue&type=template&id=6743df54& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.text.length > 0 && _vm.textPosition == 'top')?_c('div',{staticClass:\"vue-simple-progress-text\",style:(_vm.text_style)},[_vm._v(_vm._s(_vm.text))]):_vm._e(),_vm._v(\" \"),_c('div',{staticClass:\"vue-simple-progress\",style:(_vm.progress_style)},[(_vm.text.length > 0 && _vm.textPosition == 'middle')?_c('div',{staticClass:\"vue-simple-progress-text\",style:(_vm.text_style)},[_vm._v(_vm._s(_vm.text))]):_vm._e(),_vm._v(\" \"),(_vm.text.length > 0 && _vm.textPosition == 'inside')?_c('div',{staticStyle:{\"position\":\"relative\",\"left\":\"-9999px\"},style:(_vm.text_style)},[_vm._v(_vm._s(_vm.text))]):_vm._e(),_vm._v(\" \"),_c('div',{staticClass:\"vue-simple-progress-bar\",style:(_vm.bar_style)},[(_vm.text.length > 0 && _vm.textPosition == 'inside')?_c('div',{style:(_vm.text_style)},[_vm._v(_vm._s(_vm.text))]):_vm._e()])]),_vm._v(\" \"),(_vm.text.length > 0 && _vm.textPosition == 'bottom')?_c('div',{staticClass:\"vue-simple-progress-text\",style:(_vm.text_style)},[_vm._v(_vm._s(_vm.text))]):_vm._e()])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack://VueSimpleProgress/./src/components/Progress.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueSimpleProgress/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/components/Progress.vue":
/*!*************************************!*\
  !*** ./src/components/Progress.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Progress_vue_vue_type_template_id_6743df54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress.vue?vue&type=template&id=6743df54& */ \"./src/components/Progress.vue?vue&type=template&id=6743df54&\");\n/* harmony import */ var _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Progress.vue?vue&type=script&lang=js& */ \"./src/components/Progress.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Progress_vue_vue_type_template_id_6743df54___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Progress_vue_vue_type_template_id_6743df54___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\ncomponent.options.__file = \"Progress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueSimpleProgress/./src/components/Progress.vue?");

/***/ }),

/***/ "./src/components/Progress.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/components/Progress.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Progress.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/Progress.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueSimpleProgress/./src/components/Progress.vue?");

/***/ }),

/***/ "./src/components/Progress.vue?vue&type=template&id=6743df54&":
/*!********************************************************************!*\
  !*** ./src/components/Progress.vue?vue&type=template&id=6743df54& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_6743df54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Progress.vue?vue&type=template&id=6743df54& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Progress.vue?vue&type=template&id=6743df54&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_6743df54___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_6743df54___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueSimpleProgress/./src/components/Progress.vue?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: VueSimpleProgress, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Progress_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Progress.vue */ \"./src/components/Progress.vue\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VueSimpleProgress\", function() { return _components_Progress_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\nif (typeof window !== 'undefined' && window.Vue) {\n  Vue.component('vue-simple-progress', _components_Progress_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_components_Progress_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://VueSimpleProgress/./src/index.js?");

/***/ })

/******/ })["default"];
});