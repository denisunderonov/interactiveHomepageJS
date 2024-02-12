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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n}\r\n\r\n.app {\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0 auto;\r\n    display: flex;\r\n\r\n}\r\n\r\nul {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n#todo li {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgb(2,0,36);\r\n    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(219,153,242,1) 0%, rgba(255,209,209,1) 100%);\r\n    display: flex;\r\n    overflow:hidden;\r\n}\r\n\r\n@media (max-width: 700px) {\r\n    body {\r\n\r\n    }\r\n}\r\n\r\n.app {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    overflow: auto;\r\n    gap: 40px;\r\n}\r\n\r\n#todo {\r\n    max-width: 80%;\r\n    max-height: 80%;\r\n    -webkit-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    -moz-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    gap: 100px;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n}\r\n\r\n#todo ul li {\r\n    display: flex;\r\n    gap: 20px;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n#checklist li p {\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n#notes li p {\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n#noteslist {\r\n    max-width: 60%;\r\n    max-height: 100%;\r\n}\r\n\r\n#checklist {\r\n    max-width: 40%;\r\n    max-height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n.check-button {\r\n    border-radius: 50%;\r\n    border-style: none;\r\n    background-color: #fff;\r\n    min-width: 30px;\r\n    height: 30px;\r\n}\r\n\r\n#todo li p {\r\n    max-width: auto;\r\n    height: auto;\r\n}\r\n\r\n#todo input {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 10px;\r\n    border: none;\r\n    padding: 10px;\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n#todo input {\r\n    display: none;\r\n}\r\n\r\n#todo p {\r\n    word-break: break-all;\r\n}\r\n\r\n#todo .plus-button {\r\n    display: none;\r\n    border-radius: 10px;\r\n    border-style: none;\r\n    background-color: #fff;\r\n    width: 60px;\r\n    height: 45px;\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n.note-button {\r\n    border-radius: 5px;\r\n    border-style: none;\r\n    background-color: #fff;\r\n    min-width: 30px;\r\n    height: 30px;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    align-self: flex-start;\r\n}\r\n\r\nbutton:hover {\r\n    opacity: 90%;\r\n}\r\n\r\nbutton:active {\r\n    opacity: 80%;\r\n}\r\n\r\n#checklist {\r\n    height: fit-content;\r\n    border-radius: 10px;\r\n    padding: 20px;\r\n    background: rgb(212,207,29);\r\n    background: linear-gradient(90deg, rgba(212,207,29,1) 0%, rgba(255,240,140,1) 100%); \r\n}\r\n\r\n#checklist ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\n#checklist li {\r\n    border-radius: 10px;\r\n    max-width: 100%;\r\n    height: auto;\r\n    padding: 10px;\r\n    -webkit-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    -moz-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n}\r\n\r\n\r\n.add-check-button {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n.add-notes-button {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 10px;\r\n    font-size: 1.5rem;\r\n    text-transform: uppercase;\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight: bold;\r\n}\r\n\r\n.check-button {\r\n    margin-right: auto;\r\n}\r\n\r\n#checklist ul li div {\r\n    display: none;\r\n}\r\n\r\n#todo li p {\r\n    margin-right: auto;\r\n}\r\n\r\n#noteslist ul {\r\n    max-width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    padding: 20px;\r\n    -webkit-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    -moz-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    border-radius: 10px;\r\n    overflow: auto;\r\n}\r\n\r\n#noteslist li {\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    -moz-box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n    box-shadow: 0px 0px 57px 0px rgba(34, 60, 80, 0.2);\r\n}\r\n\r\n/* калькулятор */\r\n\r\n#calculatorblock {\r\n    max-width: auto;\r\n    height: auto;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    background: linear-gradient(90deg, rgba(151, 147, 233, 0.253) 0%, rgba(178, 108, 204, 0.45) 35%, rgba(0, 213, 255, 0.144) 400%);\r\n    overflow: auto; \r\n}\r\n\r\n#calculator #zero {\r\n    width: 100%;\r\n}\r\n\r\n#calculator button {\r\n    border-radius: 5px;\r\n    border-style: none;\r\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n    font-size: large;\r\n}\r\n\r\n#calculator button:active {\r\n    opacity: 90%;\r\n}\r\n\r\n#calculator .buttons {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 10px;\r\n}\r\n\r\n#calculator .buttons div button {\r\n    width: 60px;\r\n    height: 60px;\r\n}\r\n#calculator #input {\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    border: none;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: medium;\r\n    padding-left: 10px;\r\n}\r\n\r\n#calculator .buttons div {\r\n    width: 100%;\r\n}\r\n\r\n#input:active {\r\n    border: none;\r\n}\r\n\r\n#input:focus {\r\n    border-style: none;\r\n}\r\n\r\n#result {\r\n    height: 60px;\r\n}\r\n\r\n#bigplus {\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n@keyframes musicbarup {\r\n    from {\r\n        bottom: -50px;\r\n        opacity: 50%;\r\n    } \r\n    to {\r\n        bottom: 0;\r\n        opacity: 100%;\r\n    }\r\n}\r\n\r\n@keyframes musicbardown {\r\n    from {\r\n        bottom: 0;\r\n        opacity: 100%;\r\n    } \r\n    to {\r\n        bottom: -50px;\r\n        opacity: 50%;\r\n    }\r\n}\r\n\r\n#audioplayer {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    position: absolute;\r\n    margin-top: auto;\r\n    bottom: -50px;\r\n    border-radius: 10px 10px 0px 0px;\r\n    width: 60%;\r\n    height: auto;\r\n    opacity: 50%;\r\n    background-color: rebeccapurple;\r\n    padding: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.audioplayer__controls img {\r\n    max-width: 54px;\r\n    height: auto;\r\n}\r\n\r\n#audioplayer-main-image {\r\n    max-width: 54px;\r\n    height: auto;\r\n    border-radius: 5px;\r\n}\r\n\r\n#audioplayer__artist-name {\r\n    font-weight: bold;\r\n}\r\n\r\n#audioplayer__artist-name , #audioplayer__song-name {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: larger;\r\n}\r\n\r\n#pause-control {\r\n    display: none;\r\n    max-width: 54px;\r\n    height: auto;\r\n}\r\n\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://homepagevanilajs/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/img/pause.svg":
/*!***************************!*\
  !*** ./src/img/pause.svg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcsMiBMOSwyIEMxMC4xMDQ1Njk1LDIgMTEsMi44OTU0MzA1IDExLDQgTDExLDIwIEMxMSwyMS4xMDQ1Njk1IDEwLjEwNDU2OTUsMjIgOSwyMiBMNywyMiBDNS44OTU0MzA1LDIyIDUsMjEuMTA0NTY5NSA1LDIwIEw1LDQgQzUsMi44OTU0MzA1IDUuODk1NDMwNSwyIDcsMiBaIE0xNSwyIEwxNywyIEMxOC4xMDQ1Njk1LDIgMTksMi44OTU0MzA1IDE5LDQgTDE5LDIwIEMxOSwyMS4xMDQ1Njk1IDE4LjEwNDU2OTUsMjIgMTcsMjIgTDE1LDIyIEMxMy44OTU0MzA1LDIyIDEzLDIxLjEwNDU2OTUgMTMsMjAgTDEzLDQgQzEzLDIuODk1NDMwNSAxMy44OTU0MzA1LDIgMTUsMiBaIE03LDQgTDcsMjAgTDksMjAgTDksNCBMNyw0IFogTTE1LDQgTDE1LDIwIEwxNywyMCBMMTcsNCBMMTUsNCBaIi8+Cjwvc3ZnPg==\");\n\n//# sourceURL=webpack://homepagevanilajs/./src/img/pause.svg?");

/***/ }),

/***/ "./src/img/play.svg":
/*!**************************!*\
  !*** ./src/img/play.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IS0tIFVwbG9hZGVkIHRvOiBTVkcgUmVwbywgd3d3LnN2Z3JlcG8uY29tLCBHZW5lcmF0b3I6IFNWRyBSZXBvIE1peGVyIFRvb2xzIC0tPgo8c3ZnIGZpbGw9IiMwMDAwMDAiIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLDIzIEM1LjkyNDg2Nzc1LDIzIDEsMTguMDc1MTMyMiAxLDEyIEMxLDUuOTI0ODY3NzUgNS45MjQ4Njc3NSwxIDEyLDEgQzE4LjA3NTEzMjIsMSAyMyw1LjkyNDg2Nzc1IDIzLDEyIEMyMywxOC4wNzUxMzIyIDE4LjA3NTEzMjIsMjMgMTIsMjMgWiBNMTIsMjEgQzE2Ljk3MDU2MjcsMjEgMjEsMTYuOTcwNTYyNyAyMSwxMiBDMjEsNy4wMjk0MzcyNSAxNi45NzA1NjI3LDMgMTIsMyBDNy4wMjk0MzcyNSwzIDMsNy4wMjk0MzcyNSAzLDEyIEMzLDE2Ljk3MDU2MjcgNy4wMjk0MzcyNSwyMSAxMiwyMSBaIE04LDE3IEw4LDcgQzgsNi4yMTQ1NjQ0NiA4Ljg2Mzk1MDkzLDUuNzM1NzIxNjkgOS41Mjk5OTg5NCw2LjE1MjAwMTcgTDE3LjUyOTk5ODksMTEuMTUyMDAxNyBDMTguMTU2NjY3LDExLjU0MzY2OTIgMTguMTU2NjY3LDEyLjQ1NjMzMDggMTcuNTI5OTk4OSwxMi44NDc5OTgzIEw5LjUyOTk5ODk0LDE3Ljg0Nzk5ODMgQzguODYzOTUwOTMsMTguMjY0Mjc4MyA4LDE3Ljc4NTQzNTUgOCwxNyBaIE0xNS4xMTMyMDM4LDEyIEwxMCw4LjgwNDI0NzY0IEwxMCwxNS4xOTU3NTI0IEwxNS4xMTMyMDM4LDEyIFoiLz4KPC9zdmc+\");\n\n//# sourceURL=webpack://homepagevanilajs/./src/img/play.svg?");

/***/ }),

/***/ "./src/scripts/anime.js":
/*!******************************!*\
  !*** ./src/scripts/anime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   musicBar: () => (/* binding */ musicBar)\n/* harmony export */ });\n\r\nfunction musicBar($player) {\r\n    $player.addEventListener('mouseover', () => {\r\n        $player.style = `\r\n        animation-name: musicbarup;\r\n        animation-duration: 1s;\r\n        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n        animation-fill-mode: forwards;\r\n        `\r\n    })\r\n    $player.addEventListener('mouseout', () => {\r\n        $player.style = `\r\n        animation-name: musicbardown;\r\n        animation-duration: 1s;\r\n        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);\r\n        animation-fill-mode: forwards;\r\n        `\r\n    })\r\n}\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/anime.js?");

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   $player: () => (/* binding */ $player),\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/scripts/data.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./template */ \"./src/scripts/template.js\");\n/* harmony import */ var _anime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anime */ \"./src/scripts/anime.js\");\n\r\n\r\n\r\n\r\n\r\nconst $app = document.querySelector('#todo');\r\n$app.innerHTML = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.initeNote)(_data__WEBPACK_IMPORTED_MODULE_0__.base[0], _data__WEBPACK_IMPORTED_MODULE_0__.base[1]);\r\n//Чеклист\r\nlet $checklist = $app.querySelector('#checklist > ul');\r\nconst $addCheckItemButton = document.querySelector('.add-check-button');\r\nconst $inputChecklist = document.querySelector('#check-input');\r\nconst $checkPlusButton = $checklist.querySelector('.plus-button');\r\n//Лист заметок\r\nconst $noteslist = $app.querySelector('#noteslist > ul');\r\nconst $addNoteItemButton = document.querySelector('.add-notes-button');\r\nconst $inputNoteList = document.querySelector('#note-input');\r\nconst $notePlusButton = $noteslist.querySelector('.plus-button');\r\n//калькулятор \r\nconst $calculator = document.querySelector('#calculatorblock');\r\n//плеер \r\nconst $player = document.querySelector('#audioplayer');\r\n\r\n\r\n\r\n\r\nclass App {\r\n    constructor() {  \r\n    }\r\n\r\n    init() {\r\n        this.checkListStart();\r\n        this.noteslistStart();\r\n        this.calculatorStart();\r\n        this.trackBarStart();\r\n        this.animations();\r\n    }\r\n\r\n    checkListStart() {\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.addClick)($addCheckItemButton, $inputChecklist, $checkPlusButton);\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.pushItem)($checkPlusButton, $inputChecklist, $addCheckItemButton, $checklist, 0);\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.delItem)($checklist, 0);\r\n    }\r\n\r\n    noteslistStart() {\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.addClick)($addNoteItemButton, $inputNoteList, $notePlusButton);\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.pushItem)($notePlusButton, $inputNoteList, $addNoteItemButton, $noteslist, 1);\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.delItem)($noteslist, 1);\r\n    }\r\n\r\n    calculatorStart() {\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.calculatorRender)($calculator);\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.calculatorFunctionalOn)($calculator);\r\n    }\r\n\r\n    trackBarStart() {\r\n        (0,_template__WEBPACK_IMPORTED_MODULE_2__.addTrackData)();\r\n    }\r\n\r\n    animations() {\r\n        (0,_anime__WEBPACK_IMPORTED_MODULE_3__.musicBar)($player)\r\n    }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/audio.js":
/*!******************************!*\
  !*** ./src/scripts/audio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProfile: () => (/* binding */ getProfile),\n/* harmony export */   getTrackData: () => (/* binding */ getTrackData),\n/* harmony export */   track_id: () => (/* binding */ track_id)\n/* harmony export */ });\nconst clientId = 'c30058818b0743d7845c4327e4d39bb5';\r\nconst clientSecret = '9c21ce36cf3149758b9394eb9e96910c'\r\nconst url = 'https://accounts.spotify.com/api/token'\r\nlet accessToken;\r\nconst track_id = ['2t33vDAERvsbqTLQuphuwA', '2kLmAwQCBSlvtcptioAoTv', '2WWlNStuw5Tqg5noCtR7oq']\r\n//аудиофайлы\r\n\r\n\r\nasync function getTrackData() {\r\n    const musicData = {\r\n        grant_type: 'client_credentials',\r\n        client_id: clientId,\r\n        client_secret: clientSecret\r\n    }\r\n\r\n    const formData = new URLSearchParams();\r\n    for (const [key, value] of Object.entries(musicData)) {\r\n        formData.append(key, value);\r\n    }\r\n\r\n    try {\r\n        const data = await(await fetch(url, {\r\n            method: 'POST', \r\n            headers: {\r\n                'Content-Type': 'application/x-www-form-urlencoded'\r\n            },\r\n            body: formData\r\n        })).json() \r\n        accessToken = data.access_token;\r\n        return accessToken\r\n    } catch (error) {\r\n        console.error(new Error(error));\r\n    }\r\n}\r\n\r\nasync function getProfile(ind) {\r\n    await getTrackData();\r\n    const response = await fetch(`https://api.spotify.com/v1/tracks/${track_id[ind]}`, {\r\n      headers: {\r\n        'Authorization': 'Bearer ' + accessToken\r\n      }\r\n    });\r\n  \r\n    const trackData = await response.json();\r\n    return trackData;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/audio.js?");

/***/ }),

/***/ "./src/scripts/baseBlock.js":
/*!**********************************!*\
  !*** ./src/scripts/baseBlock.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AudioList: () => (/* binding */ AudioList),\n/* harmony export */   Checklist: () => (/* binding */ Checklist),\n/* harmony export */   Notelist: () => (/* binding */ Notelist)\n/* harmony export */ });\nclass List {\r\n    constructor(type, values) {\r\n        this.type = type;\r\n        this.values = values\r\n    }\r\n}\r\n\r\nclass Checklist extends List {\r\n    constructor(type, values){\r\n        super(type, values);\r\n    }\r\n}\r\n\r\nclass Notelist extends List {\r\n    constructor(type, values){\r\n        super(type, values);\r\n    }\r\n}\r\n\r\nclass AudioList extends List {\r\n    constructor(type, values) {\r\n        super(type, values);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/baseBlock.js?");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   base: () => (/* binding */ base)\n/* harmony export */ });\n/* harmony import */ var _baseBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseBlock */ \"./src/scripts/baseBlock.js\");\n\r\nconst base = [\r\n    new _baseBlock__WEBPACK_IMPORTED_MODULE_0__.Checklist('checklist',\r\n    [\r\n    \r\n    ]),\r\n    new _baseBlock__WEBPACK_IMPORTED_MODULE_0__.Notelist('notelist',\r\n    [\r\n        \r\n    ]),\r\n    new _baseBlock__WEBPACK_IMPORTED_MODULE_0__.AudioList('audiolist', \r\n    [\r\n        \r\n    ],\r\n    )\r\n];\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/data.js?");

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/scripts/app.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n\r\n\r\n\r\nconst app = new _app__WEBPACK_IMPORTED_MODULE_0__.App()\r\napp.init()\r\n\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/script.js?");

/***/ }),

/***/ "./src/scripts/template.js":
/*!*********************************!*\
  !*** ./src/scripts/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addClick: () => (/* binding */ addClick),\n/* harmony export */   addTrackData: () => (/* binding */ addTrackData),\n/* harmony export */   calculatorFunctionalOn: () => (/* binding */ calculatorFunctionalOn),\n/* harmony export */   calculatorRender: () => (/* binding */ calculatorRender),\n/* harmony export */   delItem: () => (/* binding */ delItem),\n/* harmony export */   pushItem: () => (/* binding */ pushItem),\n/* harmony export */   todoState: () => (/* binding */ todoState)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/scripts/data.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio */ \"./src/scripts/audio.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app */ \"./src/scripts/app.js\");\n/* harmony import */ var _img_play_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/play.svg */ \"./src/img/play.svg\");\n/* harmony import */ var _img_pause_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/pause.svg */ \"./src/img/pause.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst todoState = {\r\n    checkId: 0,\r\n    noteId: 0\r\n}\r\n\r\nfunction addClick($addItemButton, $inputlist, $plusButton) {\r\n    $addItemButton.addEventListener('click', () => {\r\n        $inputlist.value = '';\r\n        $addItemButton.style.display = 'none';\r\n        $plusButton.style.display = 'block';\r\n        $inputlist.style.display = 'block';\r\n    });\r\n}\r\n\r\nfunction pushItem($plusButton, $inputlist, $addItemButton, $list, listType) {\r\n    $plusButton.addEventListener('click', () => {\r\n        if ($inputlist.value != '') {\r\n            let listid;\r\n            if (listType === 0) {\r\n                listid = todoState.checkId\r\n            } else if (listType === 1) {\r\n                listid = todoState.noteId\r\n            }\r\n            _data__WEBPACK_IMPORTED_MODULE_0__.base[listType].values.push({ id: listid, value: $inputlist.value});\r\n            $plusButton.style.display = 'none';\r\n            $inputlist.style.display = 'none';\r\n            $addItemButton.style.display = 'block';\r\n            $list.insertAdjacentHTML('beforeend', (0,_utils__WEBPACK_IMPORTED_MODULE_1__.addItem)(_data__WEBPACK_IMPORTED_MODULE_0__.base[listType].type ,_data__WEBPACK_IMPORTED_MODULE_0__.base[listType].values[_data__WEBPACK_IMPORTED_MODULE_0__.base[listType].values.length - 1].value));\r\n        } else {\r\n            alert('Пустое значение');\r\n        }\r\n    })\r\n}\r\n\r\nfunction delItem($list, listType) {\r\n    $list.addEventListener('click', (event) => {\r\n        let buttonFlag;\r\n        listType === 0 ? buttonFlag = 'check-button' : buttonFlag = 'note-button'\r\n        if (event.target.classList.contains(buttonFlag)) {\r\n            event.target.parentNode.remove(); \r\n            const $blockDataId = event.target.parentNode.dataset.id;\r\n            _data__WEBPACK_IMPORTED_MODULE_0__.base[listType].values.forEach((item, index) => {\r\n                if(item.id == $blockDataId) {\r\n                    _data__WEBPACK_IMPORTED_MODULE_0__.base[listType].values.splice(index, 1) \r\n                    console.log(_data__WEBPACK_IMPORTED_MODULE_0__.base[listType].values);\r\n                }\r\n            });\r\n        }\r\n    })\r\n}\r\n\r\nfunction calculatorRender($calculator) {\r\n        $calculator.innerHTML = `\r\n        <form action=\"\" id=\"calculator\">\r\n            <input type=\"text\" name=\"\" id=\"input\" readonly>\r\n                <div class=\"buttons\">\r\n                    <div>\r\n                        <button>C</button>\r\n                        <button>⮨</button>\r\n                        <button>x²</button>\r\n                    </div>\r\n                    <div>\r\n                        <button>1</button>\r\n                        <button>2</button>\r\n                        <button>3</button>\r\n                    </div>\r\n                    <div>\r\n                        <button>4</button>\r\n                        <button>5</button>\r\n                        <button>6</button>\r\n                    </div>\r\n                    <div>\r\n                        <button>7</button>\r\n                        <button>8</button>\r\n                        <button>9</button>\r\n                    </div>\r\n                    <div><button id=\"zero\">0</button></div>\r\n                    <div>\r\n                        <button>÷</button>\r\n                        <button>*</button>\r\n                        <button>-</button>\r\n                    </div>\r\n                    <button id=\"bigplus\">+</button>\r\n                    <button id=\"result\" type=\"submit\">=</button>\r\n                </div>\r\n            </form>\r\n    `\r\n}\r\n\r\nfunction calculatorFunctionalOn($calculator) {\r\n    const $calcbuttons = $calculator.querySelectorAll('button');\r\n    const $calcInput = $calculator.querySelector('#input');\r\n\r\n    const calcState = {\r\n        firstNum: 0,\r\n        mathOperation: null\r\n    }\r\n\r\n    $calcbuttons.forEach(($button) => {\r\n        $button.addEventListener('click', (e) => {\r\n            e.preventDefault();\r\n            if ($button.textContent === 'C') {\r\n                $calcInput.value = '';\r\n            } else if ($button.textContent === '⮨') {\r\n                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.back)($calcInput);\r\n            } else if ($button.textContent === 'x²') {\r\n                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.sqrt)($calcInput);\r\n            } else if ($button.textContent === '÷' || $button.textContent === '*' || $button.textContent === '+' || $button.textContent === '-') {\r\n                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.toCalcbase)(calcState, $calcInput, $button)\r\n            } else if ($button.textContent === '=') {\r\n                (0,_utils__WEBPACK_IMPORTED_MODULE_1__.calcBase)(calcState, $calcInput)\r\n            } else {\r\n                $calcInput.value += $button.textContent;\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nasync function addTrackData() {\r\n    for (let i = 0; i < _audio__WEBPACK_IMPORTED_MODULE_2__.track_id.length; i++) {\r\n        const audioData = await (0,_audio__WEBPACK_IMPORTED_MODULE_2__.getProfile)(i);\r\n        console.log(audioData)\r\n        // if (audioData.preview_url === null) {\r\n        //     console.log('песни нет')\r\n        //     break;\r\n        // } \r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i] = {}\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].listId = i\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].id = audioData.id;\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].trackName = audioData.name;\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].artist = audioData.artists[0].name;\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].duration = audioData.duration_ms;\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].trackImage = audioData.album.images[0].url;\r\n        _data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[i].url = ``;\r\n        console.log(_data__WEBPACK_IMPORTED_MODULE_0__.base[2])\r\n    }\r\n\r\n    renderPlayer(_app__WEBPACK_IMPORTED_MODULE_3__.$player);\r\n    const $startTrack = _app__WEBPACK_IMPORTED_MODULE_3__.$player.querySelector('#play-control');\r\n    const $pauseTrack = _app__WEBPACK_IMPORTED_MODULE_3__.$player.querySelector('#pause-control')\r\n    const track = new Audio(`tracks/МАЙ МАЙ.mp3`);\r\n    startPlaySong($startTrack, $pauseTrack, track);\r\n    pauseSong($startTrack, $pauseTrack, track);\r\n}\r\n\r\nfunction renderPlayer($player) {\r\n    return $player.innerHTML = `\r\n    <img id=\"audioplayer-main-image\" src=\"${_data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[0].trackImage}\" alt=\"dfv\">\r\n    <div class=\"audioplayer__controls\">\r\n        <img id=\"play-control\" src=\"${_img_play_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\" alt=\"\">\r\n        <img id=\"pause-control\" src=\"${_img_pause_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]}\" alt=\"\">\r\n    </div>\r\n    <div class=\"audioplayer__song-info\">\r\n        <p id=\"audioplayer__artist-name\">${_data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[0].artist}</p>\r\n        <p id=\"audioplayer__song-name\">${_data__WEBPACK_IMPORTED_MODULE_0__.base[2].values[0].trackName}</p>\r\n    </div>\r\n    `\r\n}\r\n\r\nfunction startPlaySong($startTrack, $pauseTrack, track) {\r\n    $startTrack.addEventListener('click', () => {\r\n        track.play();\r\n        $startTrack.style.display = 'none'\r\n        $pauseTrack.style.display = 'block'\r\n    })\r\n}\r\n\r\nfunction pauseSong($startTrack ,$pauseTrack, track) {\r\n    $pauseTrack.addEventListener('click', () => {\r\n        $startTrack.style.display = 'block'\r\n        $pauseTrack.style.display = 'none'\r\n        track.pause();\r\n    })\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/template.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addItem: () => (/* binding */ addItem),\n/* harmony export */   back: () => (/* binding */ back),\n/* harmony export */   calcBase: () => (/* binding */ calcBase),\n/* harmony export */   initeNote: () => (/* binding */ initeNote),\n/* harmony export */   sqrt: () => (/* binding */ sqrt),\n/* harmony export */   toCalcbase: () => (/* binding */ toCalcbase)\n/* harmony export */ });\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ \"./src/scripts/template.js\");\n\r\n\r\nfunction addItem(type, content) {\r\n    if (type === 'checklist') {\r\n        let checkstroke = toLi(`\r\n        <button class=\"check-button\"></button>\r\n        <p>${content}</p>\r\n        `, _template__WEBPACK_IMPORTED_MODULE_0__.todoState.checkId)\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.todoState.checkId += 1;\r\n        return checkstroke;   \r\n    } else if (type === 'notelist') {\r\n        let notestroke = toLi(`\r\n        <button class=\"note-button\">✘</button>\r\n        <p>${content}</p>\r\n        `, _template__WEBPACK_IMPORTED_MODULE_0__.todoState.noteId)\r\n        _template__WEBPACK_IMPORTED_MODULE_0__.todoState.noteId += 1;\r\n        return notestroke;\r\n    } else {\r\n        return console.log('Ошибка')\r\n    }\r\n}\r\n\r\nfunction addButton(type) {\r\n    if(type === 'notelist') {\r\n        return `<li>\r\n        <input type=\"text\" id=\"note-input\">\r\n        <button class=\"add-notes-button\">добавить запись</button>\r\n        <button class=\"plus-button\">+</button> \r\n        </li>`\r\n    } else if(type === 'checklist') {\r\n        return `<li>\r\n        <input type=\"text\" id=\"check-input\">\r\n        <button class=\"add-check-button\">добавить цель</button>\r\n        <button class=\"plus-button\">+</button> </li>`\r\n    }\r\n}\r\n\r\nfunction initeNote(checkObj, noteObj) {\r\n    return `\r\n        <div id=\"checklist\">\r\n            <ul>\r\n                ${addButton(checkObj.type)}\r\n            </ul>\r\n        </div>\r\n        <div id=\"noteslist\">\r\n            <ul>\r\n                ${addButton(noteObj.type)}\r\n            </ul>\r\n        </div>\r\n        `\r\n}\r\n\r\nfunction toLi(content, id) {\r\n    return `<li data-id=\"${id}\">${content}</li>`\r\n}\r\n\r\nfunction back($input) {\r\n    $input.value = $input.value.substring(0, $input.value.length - 1);\r\n}\r\n\r\nfunction sqrt($input) {\r\n    $input.value = Math.pow(Number($input.value), 2);\r\n}\r\n\r\nfunction toCalcbase(state ,$input, $button) {\r\n    state.firstNum = Number($input.value);\r\n    state.mathOperation = $button.textContent;\r\n    $input.value = '';\r\n}\r\n\r\nfunction calcBase(state, $input) {\r\n    const secondNum = Number($input.value);\r\n            switch (state.mathOperation) {\r\n                case '+': $input.value = state.firstNum + secondNum\r\n                break;\r\n                case '-': $input.value = state.firstNum - secondNum\r\n                break;\r\n                case '*': $input.value = state.firstNum * secondNum\r\n                break;\r\n                case '÷': $input.value = state.firstNum / secondNum\r\n                break;\r\n            }\r\n            state.firstNum = 0;\r\n}\r\n\n\n//# sourceURL=webpack://homepagevanilajs/./src/scripts/utils.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/script.js");
/******/ 	
/******/ })()
;