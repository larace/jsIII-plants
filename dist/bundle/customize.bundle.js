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

/***/ "./src/customization.js":
/*!******************************!*\
  !*** ./src/customization.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/observer.js */ \"./src/modules/observer.js\");\n/* harmony import */ var _modules_preview_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/preview.js */ \"./src/modules/preview.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    // Obtener el objeto de recomendación desde el almacenamiento local\r\n    const plantRecommendationJSON = localStorage.getItem('plantRecommendation');\r\n    const plantRecommendation = JSON.parse(plantRecommendationJSON);\r\n  \r\n    // Verificar si el objeto de recomendación existe antes de mostrar el preview\r\n    if (plantRecommendation) {\r\n      (0,_modules_preview_js__WEBPACK_IMPORTED_MODULE_1__.showCustomizationPreview)(plantRecommendation);\r\n    }\r\n  \r\n    const potColorToggle = document.getElementById('potColorToggle');\r\n    const potColorOptions = document.getElementById('potColorOptions');\r\n  \r\n    potColorToggle.addEventListener('change', () => {\r\n      potColorOptions.style.display = potColorToggle.checked ? 'block' : 'none';\r\n    });\r\n  \r\n    const customizationForm = document.getElementById('customizationForm');\r\n    const customizationPreview = document.getElementById('customization-preview');\r\n  \r\n    const customizationObserver = new _modules_observer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  \r\n    const previewObserver = {\r\n      update: function(customization) {\r\n        (0,_modules_preview_js__WEBPACK_IMPORTED_MODULE_1__.showCustomizationPreview)(customization);\r\n      }\r\n    };\r\n  \r\n    const textObserver = {\r\n      update: function(customization) {\r\n        showCustomizationText(customization);\r\n      }\r\n    };\r\n  \r\n    customizationObserver.subscribe(previewObserver);\r\n    customizationObserver.subscribe(textObserver);\r\n  \r\n    // Escuchar cambios en el checkbox de decoraciones de la maceta\r\n\r\n\r\n    customizationForm.addEventListener('change', () => {\r\n      // Obtener los valores del formulario\r\n      const potMaterial = document.querySelector('input[name=\"potMaterial\"]:checked').value;\r\n      const potDecorations = document.querySelector('input[name=\"potDecorations\"]').checked ;\r\n      const potColorToggleValue = document.querySelector('input[name=\"potColorToggle\"]').checked;\r\n      const potColor = potColorToggleValue ? document.querySelector('input[name=\"potColor\"]:checked').value : 'unpainted';\r\n      const plantType = document.querySelector('select[name=\"plantType\"]').value;\r\n      const soilType = document.querySelector('input[name=\"soilType\"]:checked').value;\r\n      const extrasArray = Array.from(document.querySelectorAll('input[name=\"extras\"]:checked')).map(input => input.value);\r\n  \r\n      // Construir el objeto de personalización\r\n      const customization = {\r\n        pot: {\r\n          material: potMaterial,\r\n          decorations: potDecorations ,\r\n          color: potColor\r\n        },\r\n        plantType: plantType,\r\n        soilType: soilType,\r\n        extras: extrasArray\r\n      };;\r\n\r\n      localStorage.setItem('orderDetails', JSON.stringify(customization))\r\n      ;(0,_modules_preview_js__WEBPACK_IMPORTED_MODULE_1__.showCustomization)(customization);\r\n      const checkStoreAvailabilityButton = document.getElementById('checkStoreAvailabilityButton');\r\n      checkStoreAvailabilityButton.addEventListener('click', () => {\r\n        // Redirigir al usuario al view de producto (reemplaza 'product-view.html' con la ruta correcta)\r\n        window.location.href = 'details.html';\r\n      });\r\n    });\r\n  });\n\n//# sourceURL=webpack:///./src/customization.js?");

/***/ }),

/***/ "./src/modules/observer.js":
/*!*********************************!*\
  !*** ./src/modules/observer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Implementación del patrón Observer\r\nclass Observer {\r\n    constructor() {\r\n      this.observers = [];\r\n    }\r\n  \r\n    subscribe(observer) {\r\n      this.observers.push(observer);\r\n    }\r\n  \r\n    notifyObservers(data) {\r\n      this.observers.forEach(observer => observer.update(data));\r\n    }\r\n  }\r\n  \r\n  // Exportar la clase Observer para su uso en otros módulos\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observer);\n\n//# sourceURL=webpack:///./src/modules/observer.js?");

/***/ }),

/***/ "./src/modules/preview.js":
/*!********************************!*\
  !*** ./src/modules/preview.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   showCustomization: () => (/* binding */ showCustomization),\n/* harmony export */   showCustomizationPreview: () => (/* binding */ showCustomizationPreview)\n/* harmony export */ });\nfunction showCustomizationPreview(plant) {\r\n    const imagesPath = \"Assets/\";\r\n  \r\n    const customizationPreview = document.getElementById('customization-preview');\r\n    customizationPreview.innerHTML = `\r\n      <h2>${plant.name}</h2>\r\n      <div class=\"plant-composition\">\r\n        <img src=\"${imagesPath}${plant.pot.style.replace(/\\s/g, '-')}-${plant.pot.material.replace(/\\s/g, '-')}.png\" alt=\"Maceta\">\r\n        ${plant.extras.includes(\"pebbles\") ? `<img src=\"${imagesPath}pebbles.png\" alt=\"Piedritas\">` : ''}\r\n        ${plant.extras.includes(\"smaller-plants\") ? `<img src=\"${imagesPath}mini-plants.png\" alt=\"Mini Plantas\">` : ''}\r\n        ${plant.extras.includes(\"moss-pole\") ? `<img src=\"${imagesPath}moss-pole.png\" alt=\"Moss Pole\">` : ''}\r\n        <img src=\"${imagesPath}${plant.soil.split(' ').reverse().join('-')}.png\" alt=\"Bolsa del tipo de suelo\">\r\n        <img src=\"${imagesPath}plant-${plant.name.replace(/\\s/g, '-')}.png\" alt=\"Planta\">\r\n      </div>\r\n      <p><strong>Name:</strong> ${capitalizeFirstLetter(plant.name)}</p>\r\n      <p><strong>Soil:</strong> ${plant.soil}</p>\r\n      <p><strong>Pot:</strong> ${getPotDescription(plant.pot)}</p>\r\n      <p><strong>Extras:</strong> ${plant.extras.join(', ')}</p>\r\n    `;\r\n  }\r\n\r\n    // Función para mostrar la personalización\r\nfunction showCustomization(customization) {\r\n        const imagesPath = \"Assets/\";\r\n      \r\n        const customizationPreview = document.getElementById('customization-preview');\r\n        customizationPreview.innerHTML = `\r\n          <h2>Your Customized Plant</h2>\r\n          <div class=\"plant-composition\">\r\n          </div>\r\n          <p><strong>Name:</strong> ${capitalizeFirstLetter(customization.plantType)}</p>\r\n          <p><strong>Soil:</strong> ${customization.soilType}</p>\r\n          <p><strong>Pot:</strong> ${getPotDescription(customization.pot)}</p>\r\n          <p><strong>Extras:</strong> ${customization.extras.join(', ')}</p>\r\n        `;\r\n\r\n        const plantComposition = customizationPreview.querySelector('.plant-composition');\r\n        plantComposition.innerHTML = `\r\n        <img src=\"${imagesPath}pots/${customization.pot.material.toLowerCase()}-${customization.pot.decorations ? 'decorated' : 'undecorated'}-${customization.pot.color.toLowerCase()}.png\" alt=\"Pot\">\r\n        ${customization.extras.includes(\"Pebbles\") ? `<img src=\"${imagesPath}pebbles.png\" alt=\"Pebbles\">` : ''}\r\n        ${customization.extras.includes(\"Smaller plants\") ? `<img src=\"${imagesPath}mini-plants.png\" alt=\"Mini Plants\">` : ''}\r\n        ${customization.extras.includes(\"Moss pole\") ? `<img src=\"${imagesPath}moss-pole.png\" alt=\"Moss Pole\">` : ''}\r\n        <img src=\"${imagesPath}soil-${customization.soilType.toLowerCase().replace(/\\s/g, '-')}.png\" alt=\"Bolsa del tipo de suelo\">\r\n        <img src=\"${imagesPath}plant-${customization.plantType.toLowerCase().replace(/\\s/g, '-')}.png\" alt=\"Plant\">\r\n        `;\r\n      }\r\n  \r\n  function capitalizeFirstLetter(string) {\r\n    return string.charAt(0).toUpperCase() + string.slice(1);\r\n  }\r\n  \r\n  function getPotDescription(pot) {\r\n    let description = `${pot.material.toLowerCase()} pot`;\r\n    if (pot.decorations) {\r\n      description += ` with ${pot.material.toLowerCase()} decorations`;\r\n    }\r\n    description += ` (${pot.color.toLowerCase()})`;\r\n    return description;\r\n  }\n\n//# sourceURL=webpack:///./src/modules/preview.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/customization.js");
/******/ 	
/******/ })()
;