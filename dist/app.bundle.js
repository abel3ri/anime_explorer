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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnEventListener: () => (/* binding */ btnEventListener)\n/* harmony export */ });\n/* harmony import */ var _dist_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/styles/style.css */ \"./dist/styles/style.css\");\n/* harmony import */ var _dist_styles_footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dist/styles/footer.css */ \"./dist/styles/footer.css\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _utils_eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/eventListeners */ \"./utils/eventListeners.js\");\n\r\n\r\n\r\n// Query Selectors\r\nconst searchInput = document.querySelector(\".search-input\");\r\n// import\r\n// *********************\r\n\r\n\r\n\r\n\r\n\r\nconst getAnimeName = function () {\r\n  if (searchInput.value == null || searchInput.value == \"\") {\r\n    return false;\r\n  }\r\n  //   console.log(searchInput.value);\r\n  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.clearAnimeContainer)();\r\n  return searchInput.value;\r\n};\r\n\r\nfunction btnEventListener() {\r\n  // Generic function that handle calling of anime Data for click event and keyboard event\r\n  const animeName = getAnimeName();\r\n  if (!animeName) {\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.displayError)(\"Please enter a valid name\");\r\n    return;\r\n  }\r\n  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getAnimeData)(animeName);\r\n}\r\n\r\n// ! Event listeners\r\n(0,_utils_eventListeners__WEBPACK_IMPORTED_MODULE_3__.toggleEventListeners)();\r\n\r\n// Default\r\n\r\n(0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.getAnimeData)(\"Bleach\");\r\n\n\n//# sourceURL=webpack://anime_info/./app.js?");

/***/ }),

/***/ "./controllers/Anime.js":
/*!******************************!*\
  !*** ./controllers/Anime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Anime: () => (/* binding */ Anime)\n/* harmony export */ });\n// prettier-ignore\r\nclass Anime {\r\n  constructor(\r\n    id,\r\n    imgSrc,\r\n    title,\r\n    releaseDate,\r\n    rating,\r\n    episodes,\r\n    genres,\r\n    episodeDuration,\r\n    synopsis\r\n  ) {\r\n    this.id = id,\r\n    this.imgSrc = imgSrc;\r\n    // Replace the extra characters with ... if the anime title exceeds 26 characters\r\n    this.title =\r\n      title.length > 26\r\n        ? title.slice(0, title.length / 2).padEnd(title.length / 2 + 3, \"...\")\r\n        : title;\r\n    this.releaseDate = releaseDate;\r\n    this.rating = rating;\r\n    this.episodes = episodes;\r\n    this.genres = genres;\r\n    this.episodeDuration = episodeDuration;\r\n    this.synopsis = synopsis;\r\n  }\r\n  // Format the date to a standardized formatting\r\n  formatDate() {\r\n    return Intl.DateTimeFormat(navigator.language, {\r\n      month: \"short\",\r\n      year: \"numeric\",\r\n    }).format(new Date(this.releaseDate));\r\n  }\r\n\r\n  renderAnime() {\r\n    const animeContainer = document.querySelector(\".container\");\r\n    const html = `\r\n      <div class=\"anime\">\r\n        <div class=\"view-more-container hidden\">\r\n        <a href=\"/dist/pages/details.html?id=${this.id}\">View More</a>\r\n        </div>\r\n        <img src=\"${this.imgSrc}\" alt=\"Anime image\" class=\"anime-img\" />\r\n        <div class=\"title-container\"><p>Title</p><p>${this.title}</p></div>\r\n        <div class=\"released-container\"><p>Rleased</p><p>${this.formatDate()}</p></div>\r\n        <div class=\"rating-container\"><p>Rating</p><p>${this.rating}</p></div>\r\n      </div>`;\r\n\r\n    animeContainer.insertAdjacentHTML(\"beforeend\", html);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://anime_info/./controllers/Anime.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/styles/footer.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/styles/footer.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.footer {\r\n  max-width: 60rem;\r\n  margin: 4rem auto 2rem auto;\r\n  font-size: 1.6rem;\r\n\r\n  text-align: center;\r\n}\r\n.footer a:is(:link, :visited) {\r\n  color: #101920;\r\n}\r\n.footer a:is(:hover, :active) {\r\n  text-decoration: none;\r\n}\r\n.footer .hire-btn:is(:link, :active) {\r\n  text-decoration: none;\r\n  padding: 0.2rem 0.5rem;\r\n  background-color: var(--secondary-color);\r\n  color: var(--primary-color) !important;\r\n  border-top-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anime_info/./dist/styles/footer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/styles/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/styles/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --primary-color: #fcf6f6;\r\n  --secondary-color: #4932d5;\r\n  --tertiary-color: #32d5d2d6;\r\n  --background-color: #101920;\r\n  --background: #e9ecef;\r\n  --accent-color: #87898c;\r\n}\r\n\r\nhtml {\r\n  font-family: \"Poppins\", sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n\r\n  font-size: 10px;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background);\r\n\r\n  /* overflow-x: hidden; */\r\n}\r\n\r\nheader {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 1rem;\r\n\r\n  max-width: 70rem;\r\n  margin: 6rem auto;\r\n  padding: 0 2rem;\r\n}\r\n.filter-btn {\r\n  position: absolute;\r\n  top: 100%;\r\n  right: 10%;\r\n\r\n  cursor: pointer;\r\n  width: 48px;\r\n  height: 48px;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n.select-container {\r\n  position: absolute;\r\n  top: 8.6rem;\r\n  right: 1rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1.4rem;\r\n\r\n  background-color: var(--secondary-color);\r\n  color: var(--primary-color);\r\n  padding: 2rem 4rem;\r\n\r\n  transition: all 0.3s;\r\n  z-index: 100;\r\n}\r\n.select-container .option {\r\n  cursor: pointer;\r\n\r\n  border-bottom: 1px solid var(--primary-color);\r\n  font-size: 1.6rem;\r\n\r\n  padding: 0.2rem 0.5rem;\r\n\r\n  /* transition: background-color 0.2s; */\r\n}\r\n.select-container .option:hover {\r\n  background-color: #9186e0;\r\n}\r\n.select-container.hidden {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  visibility: hidden;\r\n}\r\n.spinner {\r\n  display: none;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n.spinner:after {\r\n  content: \" \";\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n  margin: 8px;\r\n  border-radius: 50%;\r\n  border: 6px solid var(--background-color);\r\n  border-color: var(--background-color) transparent;\r\n  animation: spin 1.2s linear infinite;\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n.search-input {\r\n  display: inline-block;\r\n  height: 3rem;\r\n  width: 100%;\r\n  font-size: 1.6rem;\r\n}\r\n.search-input:is(:focus) {\r\n  outline: none;\r\n}\r\n.search-input,\r\n.search-btn {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 5px;\r\n  border: none;\r\n}\r\n.search-btn {\r\n  cursor: pointer;\r\n  width: 30%;\r\n  font-size: 1.4rem;\r\n\r\n  background-color: var(--secondary-color);\r\n  color: var(--primary-color);\r\n\r\n  transition: background-color 0.3s;\r\n}\r\n\r\n.search-btn:hover {\r\n  background-color: #4832d5b8;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 2rem 3rem;\r\n\r\n  max-width: 65rem;\r\n  margin: 0 auto;\r\n  padding: 0 2rem;\r\n}\r\n.error {\r\n  position: absolute;\r\n  top: 8rem;\r\n  left: 50%;\r\n\r\n  background-color: red;\r\n  color: var(--primary-color);\r\n\r\n  padding: 0.5rem 2rem 0 2rem;\r\n  width: 20rem;\r\n  border-radius: 4px;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n\r\n  transform: translateX(-50%) translateY(-20rem);\r\n\r\n  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.3);\r\n  z-index: 100;\r\n}\r\n.visible {\r\n  transform: translateX(-50%) translateY(0);\r\n}\r\n.close-btn {\r\n  cursor: pointer;\r\n\r\n  position: absolute;\r\n  top: -2.4rem;\r\n  right: -2.4rem;\r\n\r\n  border: none;\r\n  font-size: 2.4rem;\r\n\r\n  color: var(--background-color);\r\n  background-color: transparent;\r\n}\r\n.anime {\r\n  position: relative;\r\n  background-color: var(--primary-color);\r\n  border-radius: 5px;\r\n\r\n  width: 100%;\r\n  height: fit-content;\r\n\r\n  box-shadow: 2px 2px 15px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.view-more-container {\r\n  position: absolute;\r\n  border-radius: 5px;\r\n  width: 94%;\r\n  height: 100%;\r\n  background-color: #0000001f;\r\n  opacity: 1;\r\n  visibility: visible;\r\n  z-index: 10;\r\n  backdrop-filter: blur(1px);\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center !important;\r\n\r\n  transition: all 0.3s;\r\n}\r\n.view-more-container a {\r\n  font-size: 1.2rem;\r\n}\r\n.view-more-container a:is(:link, :visited) {\r\n  background-color: #4832d5ba;\r\n  color: var(--primary-color);\r\n  border-radius: 5px;\r\n  box-shadow: 2px 2px 5px 10px rgba(0, 0, 0, 0.1);\r\n  text-decoration: none;\r\n  padding: 1rem 2rem;\r\n\r\n  transition: all 0.3s;\r\n}\r\n.view-more-container a:is(:hover, :active) {\r\n  background-color: #fcf6f6c6;\r\n  color: var(--secondary-color);\r\n}\r\n.view-more-container.hidden {\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n.anime div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0 1rem;\r\n}\r\n.anime div p {\r\n  font-size: 1.2rem;\r\n}\r\n.anime div p:first-child {\r\n  font-weight: 600;\r\n  background-color: #4832d58e;\r\n  color: var(--primary-color);\r\n  padding: 0.2rem 0.4rem;\r\n  border-radius: 4px;\r\n}\r\n.anime-img {\r\n  border-radius: 5px;\r\n  border-bottom-left-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n  width: 100%;\r\n  height: 30rem;\r\n}\r\n\r\n@media (max-width: 645px) {\r\n  header {\r\n    max-width: 45rem;\r\n  }\r\n  .container {\r\n    grid-template-columns: 1fr;\r\n    max-width: 32rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://anime_info/./dist/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://anime_info/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://anime_info/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./dist/styles/footer.css":
/*!********************************!*\
  !*** ./dist/styles/footer.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/styles/footer.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://anime_info/./dist/styles/footer.css?");

/***/ }),

/***/ "./dist/styles/style.css":
/*!*******************************!*\
  !*** ./dist/styles/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./dist/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://anime_info/./dist/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://anime_info/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://anime_info/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://anime_info/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://anime_info/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://anime_info/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://anime_info/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./utils/eventListeners.js":
/*!*********************************!*\
  !*** ./utils/eventListeners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleEventListeners: () => (/* binding */ toggleEventListeners)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils/utils.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ \"./app.js\");\n\r\n\r\n\r\nconst container = document.querySelector(\".container\");\r\nconst searchBtn = document.querySelector(\".search-btn\");\r\nconst errorContainer = document.querySelector(\".error\");\r\nconst errorCLoseBtn = document.querySelector(\".close-btn\");\r\n\r\nconst filterBtn = document.querySelector(\".filter-btn\");\r\nconst selectContainer = document.querySelector(\".select-container\");\r\n\r\n// ! Event listeners\r\nfunction toggleEventListeners() {\r\n  container.addEventListener(\"mouseover\", (e) => {\r\n    const animeContainer = e.target.closest(\".anime\");\r\n    if (animeContainer) {\r\n      animeContainer.firstElementChild.classList.remove(\"hidden\");\r\n    }\r\n  });\r\n  container.addEventListener(\"mouseout\", (e) => {\r\n    const animeContainer = e.target.closest(\".anime\");\r\n    if (animeContainer) {\r\n      animeContainer.firstElementChild.classList.add(\"hidden\");\r\n    }\r\n  });\r\n\r\n  searchBtn.addEventListener(\"click\", () => {\r\n    (0,_app__WEBPACK_IMPORTED_MODULE_1__.btnEventListener)();\r\n  });\r\n\r\n  window.addEventListener(\"keydown\", (e) => {\r\n    if (e.key == \"Enter\") {\r\n      (0,_app__WEBPACK_IMPORTED_MODULE_1__.btnEventListener)();\r\n    }\r\n  });\r\n\r\n  errorCLoseBtn.addEventListener(\"click\", () => {\r\n    errorContainer.classList.remove(\"visible\");\r\n  });\r\n\r\n  filterBtn.addEventListener(\"click\", () => {\r\n    selectContainer.classList.toggle(\"hidden\");\r\n  });\r\n\r\n  selectContainer.addEventListener(\"click\", (e) => {\r\n    if (e.target.classList.contains(\"option\")) {\r\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.displayAnime)(e.target.getAttribute(\"data-value\"));\r\n      selectContainer.classList.toggle(\"hidden\");\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://anime_info/./utils/eventListeners.js?");

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAnimeContainer: () => (/* binding */ clearAnimeContainer),\n/* harmony export */   displayAnime: () => (/* binding */ displayAnime),\n/* harmony export */   displayError: () => (/* binding */ displayError),\n/* harmony export */   getAnimeData: () => (/* binding */ getAnimeData),\n/* harmony export */   sortAnime: () => (/* binding */ sortAnime)\n/* harmony export */ });\n/* harmony import */ var _controllers_Anime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/Anime.js */ \"./controllers/Anime.js\");\n\r\nlet animes = [];\r\n\r\n/**\r\n * @param {Array} animes\r\n */\r\n\r\nfunction sortAnime(animes, type = \"default\") {\r\n  if (type == \"default\") {\r\n    return animes;\r\n  }\r\n  if (type == \"title\") {\r\n    return animes.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));\r\n  }\r\n  if (type == \"rating\") {\r\n    return animes.sort((a, b) => b.rating - a.rating);\r\n  }\r\n  if (type == \"release\") {\r\n    return animes.sort(\r\n      (a, b) => Date.parse(a.releaseDate) - Date.parse(b.releaseDate)\r\n    );\r\n  }\r\n}\r\nfunction displayAnime(type) {\r\n  clearAnimeContainer();\r\n  sortAnime(animes, type).forEach((anime) => {\r\n    anime.renderAnime();\r\n  });\r\n}\r\n\r\nfunction displayError(errorMessage) {\r\n  const errorContainer = document.querySelector(\".error\");\r\n  errorContainer.firstChild.textContent = errorMessage;\r\n  errorContainer.classList.add(\"visible\");\r\n}\r\n\r\nfunction clearAnimeContainer() {\r\n  const animeContainer = document.querySelector(\".container\");\r\n  animeContainer.innerHTML = \"\";\r\n  // clear animes array\r\n}\r\n\r\nasync function getAnimeData(name) {\r\n  const spinner = document.querySelector(\".spinner\");\r\n  const searchInput = document.querySelector(\".search-input\");\r\n  // Clear the old animes array before fetching data\r\n  animes = [];\r\n  spinner.style.display = \"block\";\r\n  const url = `https://api.jikan.moe/v4/anime?q=${name}&sfw`;\r\n  try {\r\n    const res = await fetch(url);\r\n\r\n    const { data: animeData } = await res.json();\r\n    searchInput.value = \"\";\r\n    // console.log(animeData[0]);\r\n    animeData.forEach((a) => {\r\n      const anime = new _controllers_Anime_js__WEBPACK_IMPORTED_MODULE_0__.Anime(\r\n        a.mal_id,\r\n        a.images.webp.image_url,\r\n        a.title,\r\n        a.aired.from,\r\n        a.score,\r\n        a.episodes,\r\n        a.genres,\r\n        a.duration,\r\n        a.synopsis\r\n      );\r\n      animes.push(anime);\r\n    });\r\n    displayAnime(\"default\");\r\n    // clearAnimeContainer();\r\n\r\n    spinner.style.display = \"none\";\r\n  } catch (err) {\r\n    displayError(err.message);\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://anime_info/./utils/utils.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;