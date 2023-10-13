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

/***/ "./src/components/Randomdate/randomdate.ts":
/*!*************************************************!*\
  !*** ./src/components/Randomdate/randomdate.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeRandom\": () => (/* binding */ AttributeRandom),\n/* harmony export */   \"default\": () => (/* binding */ Random)\n/* harmony export */ });\nvar AttributeRandom;\n(function (AttributeRandom) {\n    AttributeRandom[\"fact\"] = \"fact\";\n})(AttributeRandom || (AttributeRandom = {}));\nclass Random extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            fact: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n\r\n            <section>\r\n            <h1>${this.fact}</h1>\r\n            </section>\r\n        \r\n            `;\n        }\n    }\n}\ncustomElements.define('my-random', Random);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Randomdate/randomdate.ts?");

/***/ }),

/***/ "./src/components/Randomimg/randomimg.ts":
/*!***********************************************!*\
  !*** ./src/components/Randomimg/randomimg.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeRandomimg\": () => (/* binding */ AttributeRandomimg),\n/* harmony export */   \"default\": () => (/* binding */ Randomimg)\n/* harmony export */ });\nvar AttributeRandomimg;\n(function (AttributeRandomimg) {\n    AttributeRandomimg[\"img\"] = \"img\";\n})(AttributeRandomimg || (AttributeRandomimg = {}));\nclass Randomimg extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            img: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n\r\n            <section>\r\n            <img src= \"${this.img}\">\r\n            </section>\r\n            \r\n            `;\n        }\n    }\n}\ncustomElements.define('my-image', Randomimg);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Randomimg/randomimg.ts?");

/***/ }),

/***/ "./src/components/button/button.ts":
/*!*****************************************!*\
  !*** ./src/components/button/button.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Attributebutton\": () => (/* binding */ Attributebutton),\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\nvar Attributebutton;\n(function (Attributebutton) {\n    Attributebutton[\"btn_text\"] = \"btn_text\";\n})(Attributebutton || (Attributebutton = {}));\nclass Button extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            btn_text: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = ` `;\n        const button = this.ownerDocument.createElement('button');\n        button.innerText = `${this.btn_text}`;\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n    }\n}\ncustomElements.define('my-button', Button);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/button/button.ts?");

/***/ }),

/***/ "./src/components/card/card.ts":
/*!*************************************!*\
  !*** ./src/components/card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCard\": () => (/* binding */ AttributeCard),\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _Randomdate_randomdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Randomdate/randomdate */ \"./src/components/Randomdate/randomdate.ts\");\n/* harmony import */ var _Randomimg_randomimg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Randomimg/randomimg */ \"./src/components/Randomimg/randomimg.ts\");\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button */ \"./src/components/button/button.ts\");\n\n\n\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"fact\"] = \"fact\";\n    AttributeCard[\"img\"] = \"img\";\n    AttributeCard[\"btn_text\"] = \"btn_text\";\n})(AttributeCard || (AttributeCard = {}));\nclass Card extends HTMLElement {\n    static get observedAttributes() {\n        const attrs = {\n            fact: null,\n            img: null,\n            btn_text: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, _, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const container = this.ownerDocument.createElement('section');\n            const random = this.ownerDocument.createElement('my-random');\n            random.setAttribute(_Randomdate_randomdate__WEBPACK_IMPORTED_MODULE_0__.AttributeRandom.fact, this.fact);\n            const image = this.ownerDocument.createElement('my-image');\n            image.setAttribute(_Randomimg_randomimg__WEBPACK_IMPORTED_MODULE_1__.AttributeRandomimg.img, this.img);\n            const button = this.ownerDocument.createElement('my-button');\n            button.setAttribute(_button_button__WEBPACK_IMPORTED_MODULE_2__.Attributebutton.btn_text, this.btn_text);\n            container.appendChild(image);\n            container.appendChild(random);\n            container.appendChild(button);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(container);\n        }\n    }\n}\ncustomElements.define('my-card', Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport safe */ _button_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"Random\": () => (/* reexport safe */ _Randomdate_randomdate__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"Randomimg\": () => (/* reexport safe */ _Randomimg_randomimg__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _button_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button/button */ \"./src/components/button/button.ts\");\n/* harmony import */ var _Randomdate_randomdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Randomdate/randomdate */ \"./src/components/Randomdate/randomdate.ts\");\n/* harmony import */ var _Randomimg_randomimg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Randomimg/randomimg */ \"./src/components/Randomimg/randomimg.ts\");\n/* harmony import */ var _card_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card */ \"./src/components/card/card.ts\");\n\n\n\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('my-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data */ \"./src/services/data.ts\");\n/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/card/card */ \"./src/components/card/card.ts\");\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/button/button */ \"./src/components/button/button.ts\");\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/export */ \"./src/components/export.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const data = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_0__.Data)();\n            const dati = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_0__.Getimg)();\n        });\n    }\n    render(data) {\n        if (this.shadowRoot)\n            this.shadowRoot.innerHTML = '';\n        data.forEach((e) => {\n            var _a;\n            const button = this.ownerDocument.createElement('my-button');\n            button.setAttribute(_components_button_button__WEBPACK_IMPORTED_MODULE_2__.Attributebutton.btn_text, e.btn_text);\n            button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {\n                var _b;\n                const date = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_0__.Getimg)();\n                const data = yield (0,_services_data__WEBPACK_IMPORTED_MODULE_0__.Data)();\n                this.render(date);\n                this.render(data);\n                console.log(date);\n                console.log(data);\n                const card = this.ownerDocument.createElement('my-card');\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.AttributeCard.fact, e.fact);\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.AttributeCard.img, e.img);\n                card.setAttribute(_components_card_card__WEBPACK_IMPORTED_MODULE_1__.AttributeCard.btn_text, e.btn_text);\n                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(card);\n            }));\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n        });\n    }\n}\n;\ncustomElements.define('my-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/data.ts":
/*!******************************!*\
  !*** ./src/services/data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Data\": () => (/* binding */ Data),\n/* harmony export */   \"Getimg\": () => (/* binding */ Getimg)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction Data() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const data = yield fetch('https://catfact.ninja/fact').then(res => res.json());\n            console.log(data);\n            return data;\n        }\n        catch (error) {\n            console.error(error);\n        }\n    });\n}\nfunction Getimg() {\n    return __awaiter(this, void 0, void 0, function* () {\n        try {\n            const Dataimg = yield fetch('https://cataas.com/card').then(res => res.json());\n            console.log(Dataimg);\n            return Dataimg;\n        }\n        catch (error) {\n            console.error(error);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/data.ts?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;