module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Icons_components_typing__ = __webpack_require__("./src/Icons/components/typing.js");
var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/pages/icon.js';



var IconPage = function IconPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src_Icons_components_typing__["a" /* default */], { color: 'green', size: '200', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (IconPage);

/***/ }),

/***/ "./src/Icons/components/icon.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/Icons/components/icon.js";


var Icon = function Icon(props) {
  var color = props.color,
      size = props.size;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    {
      fill: color,
      height: size,
      width: size,
      viewBox: "0 0 32 32",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    props.children
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Icon);

/***/ }),

/***/ "./src/Icons/components/typing.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__icon__ = __webpack_require__("./src/Icons/components/icon.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/mrhorse/Desktop/github/PlaticasTalleres/2018/real-time-chat/src/Icons/components/typing.js';



var TypingIcon = function TypingIcon(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__icon__["a" /* default */],
    _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'rect',
      { x: '0', y: '10', width: '4', height: '10', fill: '#333', opacity: '0.2', __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'opacity', attributeType: 'XML', values: '0.2; 1; .2', begin: '0s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'height', attributeType: 'XML', values: '10; 20; 10', begin: '0s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'y', attributeType: 'XML', values: '10; 5; 10', begin: '0s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'rect',
      { x: '8', y: '10', width: '4', height: '10', fill: '#333', opacity: '0.2', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'opacity', attributeType: 'XML', values: '0.2; 1; .2', begin: '0.15s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'height', attributeType: 'XML', values: '10; 20; 10', begin: '0.15s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'y', attributeType: 'XML', values: '10; 5; 10', begin: '0.15s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'rect',
      { x: '16', y: '10', width: '4', height: '10', fill: '#333', opacity: '0.2', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'opacity', attributeType: 'XML', values: '0.2; 1; .2', begin: '0.3s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'height', attributeType: 'XML', values: '10; 20; 10', begin: '0.3s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('animate', { attributeName: 'y', attributeType: 'XML', values: '10; 5; 10', begin: '0.3s', dur: '0.6s', repeatCount: 'indefinite', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'style',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      '\n      svg rect {\n        fill: ' + props.color + ';\n      }\n    '
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (TypingIcon);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/icon.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=icon.js.map