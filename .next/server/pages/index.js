module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cc-maker.js":
/*!********************************!*\
  !*** ./components/cc-maker.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_cc_use_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/cc-use-store */ \"./hooks/cc-use-store.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/dysquino/Documents/source/next-app/components/cc-maker.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  position: fixed;\n  top: 5%;\n  left: 25%;\n`;\nconst Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  color: white;\n  width: 100vh;\n  height: fit-content;\n  background: black;\n  text-align: center;\n`;\nconst Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span`\n  font-family: monospace;\n  font-size: xxx-large;\n`;\nconst Type = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  padding: 5px;\n`;\nconst Number = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  padding: 5px;\n`;\nconst Expiration = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  padding: 5px;\n`;\nconst Owner = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  padding: 5px;\n`;\nconst Generate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`\n  background: transparent;\n  border: 2px solid black;\n  padding: 0.25em 1em;\n  margin: 30px auto;\n  display: block;\n`;\nconst CCMaker = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"])(() => {\n  const {\n    ccStore\n  } = Object(_hooks_cc_use_store__WEBPACK_IMPORTED_MODULE_2__[\"useStores\"])();\n  console.log(ccStore);\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }\n  }, __jsx(Generate, {\n    onClick: () => ccStore.getDetails(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, \"GENERATE\"), __jsx(Card, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(Number, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }, __jsx(Text, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 11\n    }\n  }, ccStore.ccs.number)), __jsx(Expiration, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(Text, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, ccStore.ccs.expiration)), __jsx(Owner, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(Text, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, ccStore.ccs.owner)), __jsx(Type, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, __jsx(Text, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, ccStore.ccs.type))));\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (CCMaker);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NjLW1ha2VyLmpzPzBlZGQiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ2FyZCIsIlRleHQiLCJzcGFuIiwiVHlwZSIsIk51bWJlciIsIkV4cGlyYXRpb24iLCJPd25lciIsIkdlbmVyYXRlIiwiYnV0dG9uIiwiQ0NNYWtlciIsIm9ic2VydmVyIiwiY2NTdG9yZSIsInVzZVN0b3JlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXREZXRhaWxzIiwiY2NzIiwibnVtYmVyIiwiZXhwaXJhdGlvbiIsIm93bmVyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7Ozs7Q0FBN0I7QUFLQSxNQUFNQyxJQUFJLEdBQUdGLHdEQUFNLENBQUNDLEdBQUk7Ozs7OztDQUF4QjtBQU9BLE1BQU1FLElBQUksR0FBR0gsd0RBQU0sQ0FBQ0ksSUFBSzs7O0NBQXpCO0FBSUEsTUFBTUMsSUFBSSxHQUFHTCx3REFBTSxDQUFDQyxHQUFJOztDQUF4QjtBQUdBLE1BQU1LLE1BQU0sR0FBR04sd0RBQU0sQ0FBQ0MsR0FBSTs7Q0FBMUI7QUFHQSxNQUFNTSxVQUFVLEdBQUdQLHdEQUFNLENBQUNDLEdBQUk7O0NBQTlCO0FBR0EsTUFBTU8sS0FBSyxHQUFHUix3REFBTSxDQUFDQyxHQUFJOztDQUF6QjtBQUlBLE1BQU1RLFFBQVEsR0FBR1Qsd0RBQU0sQ0FBQ1UsTUFBTzs7Ozs7O0NBQS9CO0FBUUEsTUFBTUMsT0FBTyxHQUFHQywyREFBUSxDQUFDLE1BQU07QUFDN0IsUUFBTTtBQUFFQztBQUFGLE1BQWNDLHFFQUFTLEVBQTdCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0EsU0FDRSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsUUFBRDtBQUFVLFdBQU8sRUFBRSxNQUFNQSxPQUFPLENBQUNJLFVBQVIsRUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsSUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxNQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSixPQUFPLENBQUNLLEdBQVIsQ0FBWUMsTUFBbkIsQ0FERixDQURGLEVBSUUsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPTixPQUFPLENBQUNLLEdBQVIsQ0FBWUUsVUFBbkIsQ0FERixDQUpGLEVBT0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPUCxPQUFPLENBQUNLLEdBQVIsQ0FBWUcsS0FBbkIsQ0FERixDQVBGLEVBVUUsTUFBQyxJQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLElBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPUixPQUFPLENBQUNLLEdBQVIsQ0FBWUksSUFBbkIsQ0FERixDQVZGLENBRkYsQ0FERjtBQW1CRCxDQXRCdUIsQ0FBeEI7QUF3QmVYLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jYy1tYWtlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnLi4vaG9va3MvY2MtdXNlLXN0b3JlJztcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1JTtcbiAgbGVmdDogMjUlO1xuYDtcbmNvbnN0IENhcmQgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2aDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5jb25zdCBUZXh0ID0gc3R5bGVkLnNwYW5gXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xuYDtcbmNvbnN0IFR5cGUgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1cHg7XG5gO1xuY29uc3QgTnVtYmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogNXB4O1xuYDtcbmNvbnN0IEV4cGlyYXRpb24gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1cHg7XG5gO1xuY29uc3QgT3duZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA1cHg7XG5gO1xuXG5jb25zdCBHZW5lcmF0ZSA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgQ0NNYWtlciA9IG9ic2VydmVyKCgpID0+IHtcbiAgY29uc3QgeyBjY1N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcbiAgY29uc29sZS5sb2coY2NTdG9yZSk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxHZW5lcmF0ZSBvbkNsaWNrPXsoKSA9PiBjY1N0b3JlLmdldERldGFpbHMoKX0+R0VORVJBVEU8L0dlbmVyYXRlPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxOdW1iZXI+XG4gICAgICAgICAgPFRleHQ+e2NjU3RvcmUuY2NzLm51bWJlcn08L1RleHQ+XG4gICAgICAgIDwvTnVtYmVyPlxuICAgICAgICA8RXhwaXJhdGlvbj5cbiAgICAgICAgICA8VGV4dD57Y2NTdG9yZS5jY3MuZXhwaXJhdGlvbn08L1RleHQ+XG4gICAgICAgIDwvRXhwaXJhdGlvbj5cbiAgICAgICAgPE93bmVyPlxuICAgICAgICAgIDxUZXh0PntjY1N0b3JlLmNjcy5vd25lcn08L1RleHQ+XG4gICAgICAgIDwvT3duZXI+XG4gICAgICAgIDxUeXBlPlxuICAgICAgICAgIDxUZXh0PntjY1N0b3JlLmNjcy50eXBlfTwvVGV4dD5cbiAgICAgICAgPC9UeXBlPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENDTWFrZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cc-maker.js\n");

/***/ }),

/***/ "./components/create-to-do.js":
/*!************************************!*\
  !*** ./components/create-to-do.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-store */ \"./hooks/use-store.js\");\nvar _jsxFileName = \"/home/dysquino/Documents/source/next-app/components/create-to-do.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  text-align: center;\n  padding: 50px;\n`;\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input`\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid black;\n  font-size: xx-large;\n  font-family: monospace;\n  text-align: center;\n`;\n\nconst CreateToDo = () => {\n  const {\n    0: value,\n    1: setValue\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    todosStore\n  } = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_2__[\"useStores\"])();\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    if (!value) return;\n    todosStore.addToDo(value);\n    setValue('');\n  };\n\n  return __jsx(FormWrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(Input, {\n    type: \"text\",\n    className: \"input\",\n    value: value,\n    placeholder: \"Add a new task\",\n    onChange: e => setValue(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateToDo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NyZWF0ZS10by1kby5qcz8yOTQ1Il0sIm5hbWVzIjpbIkZvcm1XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiSW5wdXQiLCJpbnB1dCIsIkNyZWF0ZVRvRG8iLCJ2YWx1ZSIsInNldFZhbHVlIiwidXNlU3RhdGUiLCJ0b2Rvc1N0b3JlIiwidXNlU3RvcmVzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWRkVG9EbyIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxHQUFHQyx3REFBTSxDQUFDQyxHQUFJOzs7Q0FBL0I7QUFLQSxNQUFNQyxLQUFLLEdBQUdGLHdEQUFNLENBQUNHLEtBQU07Ozs7Ozs7Q0FBM0I7O0FBU0EsTUFBTUMsVUFBVSxHQUFHLE1BQU07QUFDdkIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBaUJDLGtFQUFTLEVBQWhDOztBQUVBLFFBQU1DLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQzFCQSxLQUFDLENBQUNDLGNBQUY7QUFDQSxRQUFJLENBQUNQLEtBQUwsRUFBWTtBQUVaRyxjQUFVLENBQUNLLE9BQVgsQ0FBbUJSLEtBQW5CO0FBQ0FDLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDRCxHQU5EOztBQVFBLFNBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLFlBQVEsRUFBRUksWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsS0FBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsYUFBUyxFQUFDLE9BRlo7QUFHRSxTQUFLLEVBQUVMLEtBSFQ7QUFJRSxlQUFXLEVBQUMsZ0JBSmQ7QUFLRSxZQUFRLEVBQUdNLENBQUQsSUFBT0wsUUFBUSxDQUFDSyxDQUFDLENBQUNHLE1BQUYsQ0FBU1QsS0FBVixDQUwzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQURGO0FBYUQsQ0F6QkQ7O0FBMkJlRCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY3JlYXRlLXRvLWRvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZVN0b3JlcyB9IGZyb20gJy4uL2hvb2tzL3VzZS1zdG9yZSc7XG5cbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4O1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBDcmVhdGVUb0RvID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyB0b2Rvc1N0b3JlIH0gPSB1c2VTdG9yZXMoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICB0b2Rvc1N0b3JlLmFkZFRvRG8odmFsdWUpO1xuICAgIHNldFZhbHVlKCcnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtV3JhcHBlcj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0Zvcm1XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVG9EbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/create-to-do.js\n");

/***/ }),

/***/ "./components/to-do.js":
/*!*****************************!*\
  !*** ./components/to-do.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _create_to_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-to-do */ \"./components/create-to-do.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"mobx-react\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobx_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_use_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/use-store */ \"./hooks/use-store.js\");\nvar _jsxFileName = \"/home/dysquino/Documents/source/next-app/components/to-do.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1`\n  font-size: 3.5em;\n  text-align: center;\n`;\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section`\n  text-align: center;\n  font-family: 'monospace';\n  background-image: url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"4\" height=\"4\" viewBox=\"0 0 4 4\"%3E%3Cpath fill=\"%239C92AC\" fill-opacity=\"0.4\" d=\"M1 3h1v1H1V3zm2-2h1v1H3V1z\"%3E%3C/path%3E%3C/svg%3E');\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button`\n  background: transparent;\n  border: 2px solid black;\n  margin: auto;\n  padding: 0.25em 1em;\n`;\nconst ToDoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: -webkit-inline-box;\n  height: 30px;\n  line-height: 30px;\n  padding: 5px 0;\n`;\nconst ToDoListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: inline-grid;\n`;\nconst ToDo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  width: max-content;\n  padding-right: 75px;\n  padding-left: 20px;\n`;\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  display: block;\n`;\nconst Task = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"])(({\n  todo\n}) => {\n  const {\n    todosStore\n  } = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__[\"useStores\"])();\n  let avatarGenerator = `https://ui-avatars.com/api/?bold=true&background=000&color=fff&size=30&name=${todo.title}`;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ToDoWrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(Div, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: avatarGenerator,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  })), __jsx(ToDo, {\n    style: {\n      textDecoration: todo.completed ? 'line-through' : ''\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, todo.title), __jsx(Div, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(Button, {\n    onClick: () => todosStore.completeToDo(todo),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Done\"), __jsx(Button, {\n    onClick: () => todosStore.removeToDo(todo),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, \"x\"))));\n});\n\nconst Todo = () => {\n  const {\n    todosStore\n  } = Object(_hooks_use_store__WEBPACK_IMPORTED_MODULE_4__[\"useStores\"])();\n  return __jsx(Wrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(Title, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, \"ToDo\"), __jsx(ToDoListWrapper, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, todosStore.todos.map(todo => __jsx(Task, {\n    todo: todo,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }))), __jsx(_create_to_do__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"])(Todo));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RvLWRvLmpzP2M2NGMiXSwibmFtZXMiOlsiVGl0bGUiLCJzdHlsZWQiLCJoMSIsIldyYXBwZXIiLCJzZWN0aW9uIiwiQnV0dG9uIiwiYnV0dG9uIiwiVG9Eb1dyYXBwZXIiLCJkaXYiLCJUb0RvTGlzdFdyYXBwZXIiLCJUb0RvIiwiRGl2IiwiVGFzayIsIm9ic2VydmVyIiwidG9kbyIsInRvZG9zU3RvcmUiLCJ1c2VTdG9yZXMiLCJhdmF0YXJHZW5lcmF0b3IiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwiY29tcGxldGVkIiwiY29tcGxldGVUb0RvIiwicmVtb3ZlVG9EbyIsIlRvZG8iLCJ0b2RvcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxHQUFHQyx3REFBTSxDQUFDQyxFQUFHOzs7Q0FBeEI7QUFLQSxNQUFNQyxPQUFPLEdBQUdGLHdEQUFNLENBQUNHLE9BQVE7Ozs7Q0FBL0I7QUFNQSxNQUFNQyxNQUFNLEdBQUdKLHdEQUFNLENBQUNLLE1BQU87Ozs7O0NBQTdCO0FBT0EsTUFBTUMsV0FBVyxHQUFHTix3REFBTSxDQUFDTyxHQUFJOzs7OztDQUEvQjtBQU9BLE1BQU1DLGVBQWUsR0FBR1Isd0RBQU0sQ0FBQ08sR0FBSTs7Q0FBbkM7QUFJQSxNQUFNRSxJQUFJLEdBQUdULHdEQUFNLENBQUNPLEdBQUk7Ozs7Q0FBeEI7QUFNQSxNQUFNRyxHQUFHLEdBQUdWLHdEQUFNLENBQUNPLEdBQUk7O0NBQXZCO0FBSUEsTUFBTUksSUFBSSxHQUFHQywyREFBUSxDQUFDLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDbEMsUUFBTTtBQUFFQztBQUFGLE1BQWlCQyxrRUFBUyxFQUFoQztBQUNBLE1BQUlDLGVBQWUsR0FBSSwrRUFBOEVILElBQUksQ0FBQ0ksS0FBTSxFQUFoSDtBQUVBLFNBQ0UsbUVBQ0UsTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFFRCxlQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUUsTUFBQyxJQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xFLG9CQUFjLEVBQUVMLElBQUksQ0FBQ00sU0FBTCxHQUFpQixjQUFqQixHQUFrQztBQUQ3QyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLR04sSUFBSSxDQUFDSSxLQUxSLENBSkYsRUFZRSxNQUFDLEdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsTUFBRDtBQUFRLFdBQU8sRUFBRSxNQUFNSCxVQUFVLENBQUNNLFlBQVgsQ0FBd0JQLElBQXhCLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFLE1BQUMsTUFBRDtBQUFRLFdBQU8sRUFBRSxNQUFNQyxVQUFVLENBQUNPLFVBQVgsQ0FBc0JSLElBQXRCLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FGRixDQVpGLENBREYsQ0FERjtBQXFCRCxDQXpCb0IsQ0FBckI7O0FBMkJBLE1BQU1TLElBQUksR0FBRyxNQUFNO0FBQ2pCLFFBQU07QUFBRVI7QUFBRixNQUFpQkMsa0VBQVMsRUFBaEM7QUFFQSxTQUNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFLE1BQUMsZUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFVBQVUsQ0FBQ1MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBc0JYLElBQUQsSUFDcEIsTUFBQyxJQUFEO0FBQU0sUUFBSSxFQUFFQSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURILENBRkYsRUFPRSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBV0QsQ0FkRDs7QUFnQmVELDBIQUFRLENBQUNVLElBQUQsQ0FBdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvLWRvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgQ3JlYXRlVG9EbyBmcm9tICcuL2NyZWF0ZS10by1kbyc7XG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RvcmVzIH0gZnJvbSAnLi4vaG9va3MvdXNlLXN0b3JlJztcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ21vbm9zcGFjZSc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI0XCIgaGVpZ2h0PVwiNFwiIHZpZXdCb3g9XCIwIDAgNCA0XCIlM0UlM0NwYXRoIGZpbGw9XCIlMjM5QzkyQUNcIiBmaWxsLW9wYWNpdHk9XCIwLjRcIiBkPVwiTTEgM2gxdjFIMVYzem0yLTJoMXYxSDNWMXpcIiUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRScpO1xuYDtcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XG5gO1xuXG5jb25zdCBUb0RvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcGFkZGluZzogNXB4IDA7XG5gO1xuXG5jb25zdCBUb0RvTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbmA7XG5cbmNvbnN0IFRvRG8gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbmA7XG5cbmNvbnN0IERpdiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuYDtcblxuY29uc3QgVGFzayA9IG9ic2VydmVyKCh7IHRvZG8gfSkgPT4ge1xuICBjb25zdCB7IHRvZG9zU3RvcmUgfSA9IHVzZVN0b3JlcygpO1xuICBsZXQgYXZhdGFyR2VuZXJhdG9yID0gYGh0dHBzOi8vdWktYXZhdGFycy5jb20vYXBpLz9ib2xkPXRydWUmYmFja2dyb3VuZD0wMDAmY29sb3I9ZmZmJnNpemU9MzAmbmFtZT0ke3RvZG8udGl0bGV9YDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VG9Eb1dyYXBwZXI+XG4gICAgICAgIDxEaXY+XG4gICAgICAgICAgPGltZyBzcmM9e2F2YXRhckdlbmVyYXRvcn0+PC9pbWc+XG4gICAgICAgIDwvRGl2PlxuICAgICAgICA8VG9Eb1xuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogdG9kby5jb21wbGV0ZWQgPyAnbGluZS10aHJvdWdoJyA6ICcnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dG9kby50aXRsZX1cbiAgICAgICAgPC9Ub0RvPlxuXG4gICAgICAgIDxEaXY+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2Rvc1N0b3JlLmNvbXBsZXRlVG9Ebyh0b2RvKX0+RG9uZTwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9kb3NTdG9yZS5yZW1vdmVUb0RvKHRvZG8pfT54PC9CdXR0b24+XG4gICAgICAgIDwvRGl2PlxuICAgICAgPC9Ub0RvV3JhcHBlcj5cbiAgICA8Lz5cbiAgKTtcbn0pO1xuXG5jb25zdCBUb2RvID0gKCkgPT4ge1xuICBjb25zdCB7IHRvZG9zU3RvcmUgfSA9IHVzZVN0b3JlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8VGl0bGU+VG9EbzwvVGl0bGU+XG4gICAgICA8VG9Eb0xpc3RXcmFwcGVyPlxuICAgICAgICB7dG9kb3NTdG9yZS50b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICA8VGFzayB0b2RvPXt0b2RvfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvVG9Eb0xpc3RXcmFwcGVyPlxuICAgICAgPENyZWF0ZVRvRG8gLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvYnNlcnZlcihUb2RvKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/to-do.js\n");

/***/ }),

/***/ "./context/cc-context.js":
/*!*******************************!*\
  !*** ./context/cc-context.js ***!
  \*******************************/
/*! exports provided: storesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storesContext\", function() { return storesContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stores_cc_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/cc-store */ \"./stores/cc-store.js\");\n\n\nconst storesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  ccStore: new _stores_cc_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2NjLWNvbnRleHQuanM/NGY1NSJdLCJuYW1lcyI6WyJzdG9yZXNDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiY2NTdG9yZSIsIkNDc1N0b3JlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLGFBQWEsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0I7QUFDL0NDLFNBQU8sRUFBRSxJQUFJQyx3REFBSjtBQURzQyxDQUFwQixDQUF0QiIsImZpbGUiOiIuL2NvbnRleHQvY2MtY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ0NzU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2NjLXN0b3JlJztcblxuZXhwb3J0IGNvbnN0IHN0b3Jlc0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgY2NTdG9yZTogbmV3IENDc1N0b3JlKCksXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/cc-context.js\n");

/***/ }),

/***/ "./context/todo-context.js":
/*!*********************************!*\
  !*** ./context/todo-context.js ***!
  \*********************************/
/*! exports provided: storesContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storesContext\", function() { return storesContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _stores_todo_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stores/todo-store */ \"./stores/todo-store.js\");\n\n\nconst storesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({\n  todosStore: new _stores_todo_store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L3RvZG8tY29udGV4dC5qcz8xMjAzIl0sIm5hbWVzIjpbInN0b3Jlc0NvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ0b2Rvc1N0b3JlIiwiVG9kb3NTdG9yZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxhQUFhLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CO0FBQy9DQyxZQUFVLEVBQUUsSUFBSUMsMERBQUo7QUFEbUMsQ0FBcEIsQ0FBdEIiLCJmaWxlIjoiLi9jb250ZXh0L3RvZG8tY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVG9kb3NTdG9yZSBmcm9tICcuLi9zdG9yZXMvdG9kby1zdG9yZSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHRvZG9zU3RvcmU6IG5ldyBUb2Rvc1N0b3JlKCksXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/todo-context.js\n");

/***/ }),

/***/ "./hooks/cc-use-store.js":
/*!*******************************!*\
  !*** ./hooks/cc-use-store.js ***!
  \*******************************/
/*! exports provided: useStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStores\", function() { return useStores; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_cc_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cc-context */ \"./context/cc-context.js\");\n\n\nconst useStores = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_cc_context__WEBPACK_IMPORTED_MODULE_1__[\"storesContext\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy9jYy11c2Utc3RvcmUuanM/MTI4ZiJdLCJuYW1lcyI6WyJ1c2VTdG9yZXMiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzdG9yZXNDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxpRUFBakIsQ0FBeEIiLCJmaWxlIjoiLi9ob29rcy9jYy11c2Utc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3RvcmVzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvY2MtY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZXMgPSAoKSA9PiBSZWFjdC51c2VDb250ZXh0KHN0b3Jlc0NvbnRleHQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/cc-use-store.js\n");

/***/ }),

/***/ "./hooks/use-store.js":
/*!****************************!*\
  !*** ./hooks/use-store.js ***!
  \****************************/
/*! exports provided: useStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStores\", function() { return useStores; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_todo_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/todo-context */ \"./context/todo-context.js\");\n\n\nconst useStores = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_todo_context__WEBPACK_IMPORTED_MODULE_1__[\"storesContext\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2Utc3RvcmUuanM/YzczNSJdLCJuYW1lcyI6WyJ1c2VTdG9yZXMiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJzdG9yZXNDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLE1BQU1BLFNBQVMsR0FBRyxNQUFNQyw0Q0FBSyxDQUFDQyxVQUFOLENBQWlCQyxtRUFBakIsQ0FBeEIiLCJmaWxlIjoiLi9ob29rcy91c2Utc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc3RvcmVzQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvdG9kby1jb250ZXh0JztcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlcyA9ICgpID0+IFJlYWN0LnVzZUNvbnRleHQoc3RvcmVzQ29udGV4dCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-store.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/to-do */ \"./components/to-do.js\");\n/* harmony import */ var _components_cc_maker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/cc-maker */ \"./components/cc-maker.js\");\nvar _jsxFileName = \"/home/dysquino/Documents/source/next-app/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Index = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_cc_maker__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // sudo npm run dev//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQ2xCLFNBQ0UsbUVBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERjtBQU1ELENBUEQ7O0FBU2VBLG9FQUFmLEUsQ0FFQSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUb0RvIGZyb20gJy4uL2NvbXBvbmVudHMvdG8tZG8nO1xuaW1wb3J0IENDTWFrZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYy1tYWtlcic7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Q0NNYWtlciAvPlxuICAgICAgey8qIDxUb0RvLz4gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuLy8gc3VkbyBucG0gcnVuIGRldlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./stores/cc-store.js":
/*!****************************!*\
  !*** ./stores/cc-store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar _class, _descriptor, _temp;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }\n\n\n\nlet CCsStore = (_class = (_temp = class CCsStore {\n  constructor() {\n    _initializerDefineProperty(this, \"ccs\", _descriptor, this);\n  }\n\n  async getDetails() {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://fakerapi.it/api/v1/credit_cards?_quantity=1`);\n    this.ccs = new CCStore({\n      type: response.data.data[0].type,\n      owner: response.data.data[0].owner,\n      number: response.data.data[0].number,\n      expiration: response.data.data[0].expiration\n    });\n  }\n\n}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"ccs\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return {};\n  }\n}), _applyDecoratedDescriptor(_class.prototype, \"getDetails\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"getDetails\"), _class.prototype)), _class);\n\nclass CCStore {\n  constructor(props) {\n    Object.assign(this, props);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CCsStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZXMvY2Mtc3RvcmUuanM/ZTc0YSJdLCJuYW1lcyI6WyJDQ3NTdG9yZSIsImdldERldGFpbHMiLCJyZXNwb25zZSIsImF4aW9zIiwiZ2V0IiwiY2NzIiwiQ0NTdG9yZSIsInR5cGUiLCJkYXRhIiwib3duZXIiLCJudW1iZXIiLCJleHBpcmF0aW9uIiwib2JzZXJ2YWJsZSIsImFjdGlvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBRU1BLFEsc0JBQU4sTUFBTUEsUUFBTixDQUFlO0FBQUE7QUFBQTtBQUFBOztBQUdiLFFBQ01DLFVBRE4sR0FDbUI7QUFDakIsVUFBTUMsUUFBUSxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FDcEIscURBRG9CLENBQXZCO0FBSUEsU0FBS0MsR0FBTCxHQUFXLElBQUlDLE9BQUosQ0FBWTtBQUNyQkMsVUFBSSxFQUFFTCxRQUFRLENBQUNNLElBQVQsQ0FBY0EsSUFBZCxDQUFtQixDQUFuQixFQUFzQkQsSUFEUDtBQUVyQkUsV0FBSyxFQUFFUCxRQUFRLENBQUNNLElBQVQsQ0FBY0EsSUFBZCxDQUFtQixDQUFuQixFQUFzQkMsS0FGUjtBQUdyQkMsWUFBTSxFQUFFUixRQUFRLENBQUNNLElBQVQsQ0FBY0EsSUFBZCxDQUFtQixDQUFuQixFQUFzQkUsTUFIVDtBQUlyQkMsZ0JBQVUsRUFBRVQsUUFBUSxDQUFDTSxJQUFULENBQWNBLElBQWQsQ0FBbUIsQ0FBbkIsRUFBc0JHO0FBSmIsS0FBWixDQUFYO0FBTUQ7O0FBZlksQyw2RUFDWkMsK0M7Ozs7O1dBQWlCLEU7OytEQUVqQkMsMkM7O0FBY0gsTUFBTVAsT0FBTixDQUFjO0FBQ1pRLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCQyxVQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixLQUFwQjtBQUNEOztBQUhXOztBQU1DZix1RUFBZiIsImZpbGUiOiIuL3N0b3Jlcy9jYy1zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbiB9IGZyb20gJ21vYngnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQ0NzU3RvcmUge1xuICBAb2JzZXJ2YWJsZSBjY3MgPSB7fTtcblxuICBAYWN0aW9uXG4gIGFzeW5jIGdldERldGFpbHMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICBgaHR0cHM6Ly9mYWtlcmFwaS5pdC9hcGkvdjEvY3JlZGl0X2NhcmRzP19xdWFudGl0eT0xYCxcbiAgICApO1xuXG4gICAgdGhpcy5jY3MgPSBuZXcgQ0NTdG9yZSh7XG4gICAgICB0eXBlOiByZXNwb25zZS5kYXRhLmRhdGFbMF0udHlwZSxcbiAgICAgIG93bmVyOiByZXNwb25zZS5kYXRhLmRhdGFbMF0ub3duZXIsXG4gICAgICBudW1iZXI6IHJlc3BvbnNlLmRhdGEuZGF0YVswXS5udW1iZXIsXG4gICAgICBleHBpcmF0aW9uOiByZXNwb25zZS5kYXRhLmRhdGFbMF0uZXhwaXJhdGlvbixcbiAgICB9KTtcbiAgfVxufVxuY2xhc3MgQ0NTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm9wcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ0NzU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stores/cc-store.js\n");

/***/ }),

/***/ "./stores/todo-store.js":
/*!******************************!*\
  !*** ./stores/todo-store.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ \"mobx\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);\nvar _class, _descriptor, _temp, _class3, _descriptor2, _descriptor3, _descriptor4, _temp2;\n\nfunction _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }\n\nfunction _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }\n\n\n\nlet ToDosStore = (_class = (_temp = class ToDosStore {\n  constructor() {\n    _initializerDefineProperty(this, \"todos\", _descriptor, this);\n  }\n\n  addToDo(title) {\n    this.todos.push(new TodoStore(title));\n  }\n\n  removeToDo(todo) {\n    this.todos.remove(todo);\n  }\n\n  completeToDo(todo) {\n    todo.completed = true;\n  }\n\n}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, \"todos\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return [];\n  }\n}), _applyDecoratedDescriptor(_class.prototype, \"addToDo\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"addToDo\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"removeToDo\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"removeToDo\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"completeToDo\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"action\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"completeToDo\"), _class.prototype)), _class);\nlet TodoStore = (_class3 = (_temp2 = class TodoStore {\n  constructor(title) {\n    _initializerDefineProperty(this, \"title\", _descriptor2, this);\n\n    _initializerDefineProperty(this, \"id\", _descriptor3, this);\n\n    _initializerDefineProperty(this, \"completed\", _descriptor4, this);\n\n    this.title = title;\n    this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__[\"v4\"])();\n  }\n\n}, _temp2), (_descriptor2 = _applyDecoratedDescriptor(_class3.prototype, \"title\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return '';\n  }\n}), _descriptor3 = _applyDecoratedDescriptor(_class3.prototype, \"id\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return '';\n  }\n}), _descriptor4 = _applyDecoratedDescriptor(_class3.prototype, \"completed\", [mobx__WEBPACK_IMPORTED_MODULE_0__[\"observable\"]], {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  initializer: function () {\n    return false;\n  }\n})), _class3);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToDosStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZXMvdG9kby1zdG9yZS5qcz80NDJjIl0sIm5hbWVzIjpbIlRvRG9zU3RvcmUiLCJhZGRUb0RvIiwidGl0bGUiLCJ0b2RvcyIsInB1c2giLCJUb2RvU3RvcmUiLCJyZW1vdmVUb0RvIiwidG9kbyIsInJlbW92ZSIsImNvbXBsZXRlVG9EbyIsImNvbXBsZXRlZCIsIm9ic2VydmFibGUiLCJhY3Rpb24iLCJjb25zdHJ1Y3RvciIsImlkIiwidXVpZHY0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtJQUVNQSxVLHNCQUFOLE1BQU1BLFVBQU4sQ0FBaUI7QUFBQTtBQUFBO0FBQUE7O0FBSWZDLFNBREEsQ0FDUUMsS0FEUixFQUNlO0FBQ2IsU0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQUlDLFNBQUosQ0FBY0gsS0FBZCxDQUFoQjtBQUNEOztBQUdESSxZQURBLENBQ1dDLElBRFgsRUFDaUI7QUFDZixTQUFLSixLQUFMLENBQVdLLE1BQVgsQ0FBa0JELElBQWxCO0FBQ0Q7O0FBR0RFLGNBREEsQ0FDYUYsSUFEYixFQUNtQjtBQUNqQkEsUUFBSSxDQUFDRyxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7O0FBaEJjLEMsK0VBQ2RDLCtDOzs7OztXQUFtQixFOzs0REFFbkJDLDJDLCtJQUtBQSwyQyxvSkFLQUEsMkM7SUFNR1AsUyx3QkFBTixNQUFNQSxTQUFOLENBQWdCO0FBS2RRLGFBQVcsQ0FBQ1gsS0FBRCxFQUFRO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtZLEVBQUwsR0FBVUMsK0NBQU0sRUFBaEI7QUFDRDs7QUFSYSxDLGtGQUNiSiwrQzs7Ozs7V0FBbUIsRTs7dUVBQ25CQSwrQzs7Ozs7V0FBZ0IsRTs7OEVBQ2hCQSwrQzs7Ozs7V0FBdUIsSzs7O0FBUVhYLHlFQUFmIiwiZmlsZSI6Ii4vc3RvcmVzL3RvZG8tc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5jbGFzcyBUb0Rvc1N0b3JlIHtcbiAgQG9ic2VydmFibGUgdG9kb3MgPSBbXTtcblxuICBAYWN0aW9uXG4gIGFkZFRvRG8odGl0bGUpIHtcbiAgICB0aGlzLnRvZG9zLnB1c2gobmV3IFRvZG9TdG9yZSh0aXRsZSkpO1xuICB9XG5cbiAgQGFjdGlvblxuICByZW1vdmVUb0RvKHRvZG8pIHtcbiAgICB0aGlzLnRvZG9zLnJlbW92ZSh0b2RvKTtcbiAgfVxuXG4gIEBhY3Rpb25cbiAgY29tcGxldGVUb0RvKHRvZG8pIHtcbiAgICB0b2RvLmNvbXBsZXRlZCA9IHRydWU7XG4gIH1cbn1cblxuY2xhc3MgVG9kb1N0b3JlIHtcbiAgQG9ic2VydmFibGUgdGl0bGUgPSAnJztcbiAgQG9ic2VydmFibGUgaWQgPSAnJztcbiAgQG9ic2VydmFibGUgY29tcGxldGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pZCA9IHV1aWR2NCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG9zU3RvcmU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./stores/todo-store.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4XCI/ODE0ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb2J4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mobx\n");

/***/ }),

/***/ "mobx-react":
/*!*****************************!*\
  !*** external "mobx-react" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mobx-react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb2J4LXJlYWN0XCI/NWJjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb2J4LXJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9ieC1yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mobx-react\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCI/MzcxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJ1dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///uuid\n");

/***/ })

/******/ });