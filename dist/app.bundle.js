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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   btnEventListener: () => (/* binding */ btnEventListener)\n/* harmony export */ });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _utils_eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/eventListeners */ \"./utils/eventListeners.js\");\n// Query Selectors\r\nconst searchInput = document.querySelector(\".search-input\");\r\n// import\r\n// *********************\r\n\r\n\r\n\r\n\r\n\r\nconst getAnimeName = function () {\r\n  if (searchInput.value == null || searchInput.value == \"\") {\r\n    return false;\r\n  }\r\n  //   console.log(searchInput.value);\r\n  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.clearAnimeContainer)();\r\n  return searchInput.value;\r\n};\r\n\r\nfunction btnEventListener() {\r\n  // Generic function that handle calling of anime Data for click event and keyboard event\r\n  const animeName = getAnimeName();\r\n  if (!animeName) {\r\n    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.displayError)(\"Please enter a valid name\");\r\n    return;\r\n  }\r\n  (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getAnimeData)(animeName);\r\n}\r\n\r\n// ! Event listeners\r\n(0,_utils_eventListeners__WEBPACK_IMPORTED_MODULE_1__.toggleEventListeners)();\r\n\r\n// Default\r\n\r\n(0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.getAnimeData)(\"Naruto\");\r\n\n\n//# sourceURL=webpack://anime_info/./app.js?");

/***/ }),

/***/ "./controllers/Anime.js":
/*!******************************!*\
  !*** ./controllers/Anime.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Anime: () => (/* binding */ Anime)\n/* harmony export */ });\n// prettier-ignore\r\nclass Anime {\r\n  constructor(\r\n    id,\r\n    imgSrc,\r\n    title,\r\n    releaseDate,\r\n    rating,\r\n    episodes,\r\n    genres,\r\n    episodeDuration,\r\n    synopsis\r\n  ) {\r\n    this.id = id,\r\n    this.imgSrc = imgSrc;\r\n    // Replace the extra characters with ... if the anime title exceeds 26 characters\r\n    this.title =\r\n      title.length > 26\r\n        ? title.slice(0, title.length / 2).padEnd(title.length / 2 + 3, \"...\")\r\n        : title;\r\n    this.releaseDate = releaseDate;\r\n    this.rating = rating;\r\n    this.episodes = episodes;\r\n    this.genres = genres;\r\n    this.episodeDuration = episodeDuration;\r\n    this.synopsis = synopsis;\r\n  }\r\n  // Format the date to a standardized formatting\r\n  formatDate() {\r\n    return Intl.DateTimeFormat(navigator.language, {\r\n      month: \"short\",\r\n      year: \"numeric\",\r\n    }).format(new Date(this.releaseDate));\r\n  }\r\n\r\n  renderAnime() {\r\n    const animeContainer = document.querySelector(\".container\");\r\n    const html = `\r\n      <div class=\"anime\">\r\n        <div class=\"view-more-container hidden\">\r\n        <a href=\"/dist/pages/details.html?id=${this.id}\">View More</a>\r\n        </div>\r\n        <img src=\"${this.imgSrc}\" alt=\"Anime image\" class=\"anime-img\" />\r\n        <div class=\"title-container\"><p>Title</p><p>${this.title}</p></div>\r\n        <div class=\"released-container\"><p>Rleased</p><p>${this.formatDate()}</p></div>\r\n        <div class=\"rating-container\"><p>Rating</p><p>${this.rating}</p></div>\r\n      </div>`;\r\n\r\n    animeContainer.insertAdjacentHTML(\"beforeend\", html);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://anime_info/./controllers/Anime.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;