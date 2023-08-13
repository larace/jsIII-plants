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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/object.js */ \"./src/modules/object.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const form = document.getElementById('plantForm');\r\n  const recommendationsDiv = document.getElementById('recommendations');\r\n  const getPlantButton = document.querySelector('.get-plant-button');\r\n  const clearButton = document.querySelector('.clear-button');\r\n  const plantCard = document.getElementById('plantCard');\r\n\r\n  let formData; // Declarar formData en el alcance global\r\n  let plantRecommendation; // Declarar plantRecommendation en el alcance global\r\n\r\n  form.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    formData = new FormData(form); // Asignar el valor de formData dentro del evento submit\r\n\r\n    if (form.checkValidity()) {\r\n      const plantPlacement = formData.get('plantPlacement');\r\n      const receiveDirectSunlight = formData.get('receiveDirectSunlight');\r\n      const hasPets = formData.get('hasPets');\r\n      const wateringHabits = formData.get('wateringHabits');\r\n      const stylePreference = formData.get('stylePreference');\r\n      const extraElements = formData.getAll('extraElements');\r\n\r\n      // Construir el objeto de recomendación de planta utilizando el patrón Builder con chaining\r\n      plantRecommendation = (0,_modules_object_js__WEBPACK_IMPORTED_MODULE_0__.createPlantRecommendation)()\r\n        .setName(getPlantName(plantPlacement, hasPets))\r\n        .setSoil(getSoilType(receiveDirectSunlight))\r\n        .setPotMaterial(getPotMaterial(wateringHabits))\r\n        .setPotStyle(getPotStyle(stylePreference))\r\n        .setPotColor(getPotColor(stylePreference))\r\n        .setExtras(extraElements)\r\n        .build();\r\n\r\n      // Mostrar la ficha de planta con la recomendación\r\n      showPlantCard(plantRecommendation);\r\n    } else {\r\n      // Si el formulario no es válido, no mostramos las recomendaciones ni la ficha de planta\r\n      recommendationsDiv.innerHTML = '';\r\n      plantCard.classList.add('hidden');\r\n    }\r\n  });\r\n\r\n  clearButton.addEventListener('click', () => {\r\n    form.reset();\r\n    recommendationsDiv.innerHTML = '';\r\n    plantCard.innerHTML = '';\r\n  });\r\n\r\n  function showPlantCard(plant) {\r\n    const imagesPath = \"Assets/\";\r\n   // Ruta de la carpeta que contiene las imágenes\r\n    const plantCardHTML = `\r\n      <h2>${plant.name}</h2>\r\n      <div class=\"plant-composition\">\r\n        <img src=\"${imagesPath}${plant.pot.style.replace(/\\s/g, '-')}-${plant.pot.material.replace(/\\s/g, '-')}.png\" alt=\"Maceta\">\r\n        ${plant.extras.includes(\"pebbles\") ? `<img src=\"${imagesPath}pebbles.png\" alt=\"Pebbles\">` : ''}\r\n        ${plant.extras.includes(\"smaller-plants\") ? `<img src=\"${imagesPath}mini-plants.png\" alt=\"Mini Plants\">` : ''}\r\n        ${plant.extras.includes(\"moss-pole\") ? `<img src=\"${imagesPath}moss-pole.png\" alt=\"Moss Pole\">` : ''}\r\n        <img src=\"${imagesPath}${plant.soil.split(' ').reverse().join('-')}.png\" alt=\"Tierra\">\r\n        <img src=\"${imagesPath}plant-${plant.name.replace(/\\s/g, '-')}.png\" alt=\"Planta\">\r\n      </div>\r\n      <p><strong>Soil:</strong> ${plant.soil}</p>\r\n      <p><strong>Pot:</strong> ${plant.pot.style} ${plant.pot.material} (${plant.pot.color})</p>\r\n      <p><strong>Extras:</strong> ${plant.extras.join(', ')}</p>\r\n    `;\r\n    const customizeButton = document.createElement('button');\r\n    customizeButton.textContent = 'Customize';\r\n    customizeButton.classList.add('customize-button');\r\n    customizeButton.addEventListener('click', () => {\r\n      localStorage.setItem('plantRecommendation', JSON.stringify(plantRecommendation));\r\n      window.location.href = 'customization.html'; // Cambia la URL a la correcta\r\n    });\r\n\r\n    plantCard.innerHTML = plantCardHTML;\r\n    plantCard.appendChild(customizeButton);\r\n    plantCard.classList.remove('hidden');\r\n  }\r\n  \r\n  // Funciones para obtener la información correspondiente a las respuestas del formulario\r\n  function getPlantName(placement, hasPets) {\r\n    if (placement === 'inside-indirect') {\r\n      return hasPets === 'yes' ? 'Sansevieria' : 'Boston Fern';\r\n    } else if (placement === 'inside-direct') {\r\n      return hasPets === 'yes' ? 'Aglaonema' : 'Monstera';\r\n    } else if (placement === 'outside') {\r\n      return hasPets === 'yes' ? 'Aloe Vera' : 'Cactus';\r\n    }\r\n  }\r\n\r\n  function getSoilType(sunlight) {\r\n    return sunlight === 'yes' ? 'Composted soil' : 'Fertilized soil';\r\n  }\r\n\r\n  function getPotMaterial(wateringHabit) {\r\n    if (wateringHabit === 'overwater') {\r\n      return 'Clay Pot';\r\n    } else if (wateringHabit === 'underwater' || wateringHabit === 'neither') {\r\n      return 'Ceramic Pot';\r\n    }\r\n  }\r\n\r\n  function getPotStyle(stylePreference) {\r\n    if (stylePreference === 'minimalism') {\r\n      return 'Simple';\r\n    } else if (stylePreference === 'simple') {\r\n      return 'Simple Decorated';\r\n    } else if (stylePreference === 'colorful') {\r\n      return 'Painted Decorated';\r\n    }\r\n  }\r\n\r\n  function getPotColor(stylePreference) {\r\n    if (stylePreference === 'minimalism') {\r\n      return 'clay';\r\n    } else if (stylePreference === 'simple') {\r\n      return 'blue';\r\n    } else if (stylePreference === 'colorful') {\r\n      return 'yellow';\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/object.js":
/*!*******************************!*\
  !*** ./src/modules/object.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createPlantRecommendation: () => (/* binding */ createPlantRecommendation)\n/* harmony export */ });\nfunction createPlantRecommendation() {\r\n    const recommendation = {\r\n      pot: {},\r\n    };\r\n\r\n    return {\r\n      setName: function(name) {\r\n        recommendation.name = name;\r\n        return this;\r\n      },\r\n      setSoil: function(soil) {\r\n        recommendation.soil = soil;\r\n        return this;\r\n      },\r\n      setPotMaterial: function(material) {\r\n        recommendation.pot.material = material;\r\n        return this;\r\n      },\r\n      setPotStyle: function(style) {\r\n        recommendation.pot.style = style;\r\n        return this;\r\n      },\r\n      setPotColor: function(color) {\r\n        recommendation.pot.color = color;\r\n        return this;\r\n      },\r\n      setExtras: function(extras) {\r\n        recommendation.extras = extras;\r\n        return this;\r\n      },\r\n      build: function() {\r\n        return recommendation;\r\n      },\r\n    };\r\n  }\n\n//# sourceURL=webpack:///./src/modules/object.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;