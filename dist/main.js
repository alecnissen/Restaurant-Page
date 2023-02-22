/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kanit&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body { \\n   background-color: black;\\n}\\n\\n .header-content { \\n   display: flex;\\n   flex-direction: column;\\n   font-size: 5rem;\\n   height: 4em;\\n } \\n\\n .header-btn-container { \\n    display: flex;\\n    justify-content: space-evenly;\\n }\\n\\n .header-btn { \\n    width: 5em;\\n    height: 3em;\\n    color: black; \\n    background-color: white;\\n    font-family: 'Kanit', sans-serif;\\n    font-size: 1.3rem;\\n }\\n\\n .subheader { \\n   font-size: 2.5rem;\\n   font-weight: bolder;\\n }\\n\\n.footer-info-styles { \\n   height: 200px; \\n   font-size: 2rem; \\n} \\n\\n.header-content,\\n.footer-info-styles { \\n   display: flex;\\n   flex-direction: column;\\n   font-family: 'Kanit', sans-serif;\\n   text-align: center;\\n   background-color: black; \\n   font-weight: bolder;\\n   color: white;\\n} \\n\\n\\n\\n.main-content-center-text-container { \\n   position: relative;\\n   display: flex;\\n   justify-content: space-around;\\n   align-items: center;\\n   border: 5px solid black;\\n}\\n\\n.text-over-pictures { \\n   display: flex;\\n   justify-content: space-evenly;\\n   align-items: center;\\n   flex-direction: column;\\n   position: absolute; \\n   color: black;\\n   background-color: white;\\n   width: 33.3%;\\n   height: 65%;\\n   /* width: 100%;\\n   height: 90%; */\\n   /* height: 50px; \\n   width: 550px; */\\n   border-radius: 5%; \\n   /* background-color: black; */\\n   line-height: 1.2;\\n   /* left: 11em;  */\\n   /* bottom: 8em;  */\\n   font-size: 1.7rem; \\n   font-family: 'Kanit', sans-serif;\\n   font-weight: bolder;\\n   font-style: italic;\\n   text-align: center;\\n\\n} \\n\\n.main-content-background-img-1, \\n.main-content-background-img-2,\\n.main-content-background-img-3 { \\n   opacity: 0.45;\\n} \\n\\n.main-content-background-img-2 { \\n   backdrop-filter: blur(30em);\\n}\\n\\n.main-content-background-img-1, \\n.main-content-background-img-2, \\n.main-content-background-img-3 { \\n   width: 33.3%;\\n}\\n\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./style.css\");\n/* harmony import */ var _burger_picture_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../burger-picture-1.jpg */ \"./burger-picture-1.jpg\");\n/* harmony import */ var _burger_picture_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../burger-picture-2.jpg */ \"./burger-picture-2.jpg\");\n/* harmony import */ var _burger_img_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../burger-img-4.jpg */ \"./burger-img-4.jpg\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n \n\n \n\n// export default loadPage from './index';\n\n// export { loadPage, mainContent } from './index';\n \n// global variable, which holds the result of which button was clicked on \n// if that particular button was clicked, update var \n// then call the module/import the module that handles the code \n// for the button. \n\n// header module seperate \n\n\nlet moduleVariable \n\n\nconst headerContent = (() => {  \nlet header = () => { \n\n  // serves as container\nlet contentDiv = document.getElementById('content'); \n\n// contentDiv.classList.add('header-container-styles');\n\nlet header = document.createElement('div'); \n\nlet subheader = document.createElement('p');\n\nsubheader.textContent = 'The Best In The City!'; \n\nsubheader.classList.add('subheader');\n\nheader.textContent = \"Alec's Burger House\";\n\nheader.classList.add('header-content');\n\nlet headerBtnContainer = document.createElement('container'); \n\nlet homeBtn = document.createElement('button'); \n\nhomeBtn.addEventListener('click', () => {\n   moduleVariable = 'home';\n   determinePage();\n   return \n})\n\n// add event listener to home btn,\n// once clicked, set the module variable equal to the button that was clicked \n// if home btn is clicked, mod variable === home module \n\nlet menuBtn = document.createElement('button');\n\n// add event listener, once clicked,\n// set the module variable to the button that was clicked, \n// import the correct file/module that was clicked into index.js \n\nmenuBtn.addEventListener('click', () => { \n  moduleVariable = 'menu';\n  determinePage();\n  return\n})\n\nlet contactBtn = document.createElement('button');\n\n// add event listener, once clicked,\n// set the module variable to the button that was clicked, \n\ncontactBtn.addEventListener('click', () => { \n  moduleVariable = 'contact';\n  determinePage();\n  return\n})\n\nheaderBtnContainer.appendChild(homeBtn);\n\nheaderBtnContainer.appendChild(menuBtn);\n\nheaderBtnContainer.appendChild(contactBtn);\n\nheaderBtnContainer.classList.add('header-btn-container');\n\nhomeBtn.textContent = 'Home';\n\nhomeBtn.classList.add('header-btn');\n\nmenuBtn.textContent = 'Menu';\n\nmenuBtn.classList.add('header-btn');\n\ncontactBtn.textContent = 'Contact';\n\ncontactBtn.classList.add('header-btn');\n\nheader.appendChild(subheader);\n\nheader.appendChild(headerBtnContainer);\n\ncontentDiv.appendChild(header);\n\ndocument.body.appendChild(contentDiv); \n} \nreturn { \n  header,\n}\n})(); \n\n\n\n const loadPage = (() => { \n  // old header content, header within its own module \n\n// let headerContent = () => { \n\n//   // serves as container\n// let contentDiv = document.getElementById('content'); \n\n// contentDiv.classList.add('header-container-styles');\n\n// let header = document.createElement('div'); \n\n// let subheader = document.createElement('p');\n\n// subheader.textContent = 'The Best In The City!'; \n\n// subheader.classList.add('subheader');\n\n// header.textContent = \"Alec's Burger House\";\n\n// header.classList.add('header-content');\n\n// let headerBtnContainer = document.createElement('container'); \n\n// let homeBtn = document.createElement('button'); \n\n// homeBtn.addEventListener('click', (e) => {\n//    moduleVariable = loadPage.headerContent();\n// })\n\n// // add event listener to home btn,\n// // once clicked, set the module variable equal to the button that was clicked \n// // if home btn is clicked, mod variable === home module \n\n// let menuBtn = document.createElement('button');\n\n// // add event listener, once clicked,\n// // set the module variable to the button that was clicked, \n// // import the correct file/module that was clicked into index.js \n\n// let contactBtn = document.createElement('button');\n\n// // add event listener, once clicked,\n// // set the module variable to the button that was clicked, \n\n// headerBtnContainer.appendChild(homeBtn);\n\n// headerBtnContainer.appendChild(menuBtn);\n\n// headerBtnContainer.appendChild(contactBtn);\n\n// headerBtnContainer.classList.add('header-btn-container');\n\n// homeBtn.textContent = 'Home';\n\n// homeBtn.classList.add('header-btn');\n\n// menuBtn.textContent = 'Menu';\n\n// menuBtn.classList.add('header-btn');\n\n// contactBtn.textContent = 'Contact';\n\n// contactBtn.classList.add('header-btn');\n\n// header.appendChild(subheader);\n\n// header.appendChild(headerBtnContainer);\n\n// contentDiv.appendChild(header);\n\n// document.body.appendChild(contentDiv); \n// } \n\nlet mainContent = () => { \nlet mainContentContainer = document.getElementById('content'); \n\nlet mainContentTextContainer = document.createElement('container'); \n\n mainContentTextContainer.classList.add('main-content-center-text-container');\n\n let mainContentText = document.createElement('p');\n\n mainContentText.classList.add('text-over-pictures');\n\n mainContentText.innerHTML = 'Experience the Tradiation! <br><br> Since 1994 we have been proudly serving the community. <br><br> Our mission is to make the best burgers and a memorable dining experience. <br><br> We honor our roots and tradition and cant wait to serve you!' ;\n\n  const myImg1 = new Image();\n\n  const myImg2 = new Image();\n\n  const myImg3 = new Image();\n\n  myImg1.classList.add('main-content-background-img-1'); \n\n  myImg2.classList.add('main-content-background-img-2');\n\n  myImg3.classList.add('main-content-background-img-3');\n\n  myImg1.src = '../burger-fries-1-small.jpg';\n\n  myImg2.src = '../burger-picture-2.jpg';\n\n  myImg3.src = '../burger-img-4.jpg';\n\n  mainContentTextContainer.append(mainContentText);\n  \n  mainContentTextContainer.append(myImg1);\n\n  mainContentTextContainer.append(myImg2);\n\n  mainContentTextContainer.append(myImg3); \n\n  mainContentContainer.append(mainContentTextContainer);\n\n  document.body.append(mainContentContainer);\n\n} \n\nlet footerContent = () => { \n  \n  // let footerContainer = document.createElement('container'); \n\n  let mainDivContainer = document.getElementById('content');\n\n  // footerContainer.classList.add('footer-container');\n\n  let footerInfoDivAddress = document.createElement('div');\n\n  footerInfoDivAddress.classList.add('footer-info-styles');\n\n  let footerInfoDivPhone = document.createElement('div');\n\n  let footerPhoneNum = document.createElement('p');\n\n  footerInfoDivAddress.textContent = 'Address: 1234 South Broad Street, Philadelphia, PA';\n\n  footerPhoneNum.textContent = 'Phone: 123-123-123';\n\n  \n  // footerContainer.append(footerInfoDivAddress);\n\n  footerInfoDivAddress.append(footerPhoneNum);\n\n  // mainDivContainer.append(footerPhoneNum);\n  \n  mainDivContainer.append(footerInfoDivAddress);\n\n  document.body.append(mainDivContainer);\n\n}\n\n  return { \n    // headerContent,\n    mainContent,\n    footerContent,\n  }\n})(); \n\n\n// loadPage.headerContent();\n// loadPage.mainContent();\n// loadPage.footerContent();  \n\n// at this point, I want to test that \n// if I click on any of the buttons, it will render appropriately \n// at least render the header and footer, and everything for home page \n\n// it is appending everything on the bottom of the page, below the footer, \n// not sure why, it has be an issue with how I'm appending. \n// I just want that during my testing, if I click on the buttons, it will \n// render the header, and the footer, remove the main content as well, at once. \n// right now it's still appending the header below the footer, it's not \n// re-appending to the container, \n// the main content container, \n\nfunction determinePage () { \n  let mainContentDiv = document.getElementById('content');\n\n  while(mainContentDiv.firstChild) { \n    mainContentDiv.firstChild.remove();\n  }\n\n  if (moduleVariable === 'home') {\n    // you have to delete previous styles in the content div. \n    // mainContentDiv.style.remove(); \n    headerContent.header();\n    loadPage.mainContent();\n    loadPage.footerContent(); \n\n} else if (moduleVariable === 'menu') { \n  // menu module \n   headerContent.header();  // render header \n  //  menuPageModule; trying to call menu module, so code can run and fill in.\n  _menu__WEBPACK_IMPORTED_MODULE_4__.menuPageModule.menuPage();\n   // call the menu page, run code inside \n  //  loadPage.mainContent.remove();\n   loadPage.footerContent();  // render footer \n\n} else if (moduleVariable === 'contact') { \n   headerContent.header(); \n  //  div.textContent = 'Hellllllooooo!';\n  //  div.style.color = 'white';\n  //  document.body.append(div);\n   loadPage.footerContent();\n  // call '../src/contact' to run its module // render with new module\n} else { \n  headerContent.header();\n  loadPage.mainContent();\n  loadPage.footerContent();\n}\n}\n\n\ndeterminePage();\n\n// event listener when the menu button is pressed, \n\n// clean up DOM styling into own css class/file \n\n// then start making the menu page syntax logic, \n\n// event listeners for each button, once clicked, call and run this function \n\n// set up your restaurant site to use tabbed browsing to access the Contact and Menu pages.\n\n// Put the contents of each ‘tab’ inside of its own module. \n\n// Each module will export a function that creates a div element, \n\n// adds the appropriate content and styles to that element and then appends it to the DOM.\n\n// grab the button element that was created, add an event listener to that button \n\n// once clicked menu will be generated, use same background, \n\n// content div with id, container which will append text/content\n\n// container, give it a width, height, make it rectangle, slight border radius \n\n// apply flex properties to container, \n\n// main content will be p element, or multiple p elements, \n\n// those elements will be appended to the container, then append that to the content div\n\n\n\n\n\n\n// contact btn event listener, click, make content div w ID, \n\n// make container which will append content, including address, phone, \n\n// map which \n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPageModule\": () => (/* binding */ menuPageModule)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconsole.log(_index__WEBPACK_IMPORTED_MODULE_0__.mainContent);\n\nconst menuPageModule = () => { \n    const menuPage = () => { \n       let div = document.createElement('div');\n       div.textContent = 'Helllllloo';\n       div.style.color = 'white'; \n\n       mainContentTextContainer.append(div);\n\n       document.body.append(mainContentTextContainer);\n    }\n}\n\n// export function menuPage() { \n//     let div = document.createElement('div');\n//         div.textContent = 'Helllllloo';\n//         div.style.color = 'white'; \n\n//         mainContentTextContainer.append(div);\n    \n// }\n\n\n// const menuPageModule = (() => { \n//     // remove main content styles to make way for new menu \n//     const menuPage = () => { \n//         console.log('hello');\n//         let menuPageContainer = document.createElement('container');\n\n//         let menuPageContentDiv = document.createElement('div');\n\n//         menuPageContentDiv.textContent = 'Menu:';\n\n//         menuPageContentDiv.classList.add('menu-page-content-div-container'); \n\n//         document.body.append(menuPageContentDiv);\n\n//         // call the header function within first module, to print the header, \n\n//         // each function is creating a new div,\n//         // I think you want a container, apply the background styles, \n//         // then append the menu items to the div, then attach the div to the container\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./burger-img-4.jpg":
/*!**************************!*\
  !*** ./burger-img-4.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"df95edc696d389b34f1a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./burger-img-4.jpg?");

/***/ }),

/***/ "./burger-picture-1.jpg":
/*!******************************!*\
  !*** ./burger-picture-1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e5a4782c47c6cff51102.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./burger-picture-1.jpg?");

/***/ }),

/***/ "./burger-picture-2.jpg":
/*!******************************!*\
  !*** ./burger-picture-2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e1491967f1a54210116.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./burger-picture-2.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;