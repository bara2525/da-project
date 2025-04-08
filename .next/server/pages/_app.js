/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/CartContext.tsx":
/*!*********************************!*\
  !*** ./context/CartContext.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartProvider: () => (/* binding */ CartProvider),\n/* harmony export */   useCart: () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst CartProvider = ({ children })=>{\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addToCart = (product)=>{\n        setCart((prevCart)=>{\n            const item = prevCart.find((i)=>i.id === product.id);\n            if (item) {\n                return prevCart.map((i)=>i.id === product.id ? {\n                        ...i,\n                        quantity: i.quantity + 1\n                    } : i);\n            }\n            return [\n                ...prevCart,\n                {\n                    ...product,\n                    quantity: 1\n                }\n            ];\n        });\n    };\n    const clearCart = ()=>setCart([]);\n    const removeFromCart = (id)=>{\n        setCart(cart.filter((item)=>item.id !== id));\n    };\n    const updateQuantity = (id, quantity)=>{\n        setCart(cart.map((item)=>item.id === id ? {\n                ...item,\n                quantity: Math.max(1, quantity)\n            } : item));\n    };\n    const getCartCount = ()=>cart.reduce((total, item)=>total + item.quantity, 0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addToCart,\n            clearCart,\n            getCartCount,\n            removeFromCart,\n            updateQuantity\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/bara/Downloads/project_DA/context/CartContext.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\nconst useCart = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartContext);\n    if (!context) throw new Error(\"useCart must be used within a CartProvider\");\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvQ2FydENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0U7QUFzQmxFLE1BQU1JLDRCQUFjSCxvREFBYUEsQ0FBOEJJO0FBRXhELE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQWlDO0lBQ3RFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBYSxFQUFFO0lBRS9DLE1BQU1PLFlBQVksQ0FBQ0M7UUFDakJGLFFBQVEsQ0FBQ0c7WUFDUCxNQUFNQyxPQUFPRCxTQUFTRSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsRUFBRSxLQUFLTCxRQUFRSyxFQUFFO1lBQ3JELElBQUlILE1BQU07Z0JBQ1IsT0FBT0QsU0FBU0ssR0FBRyxDQUFDLENBQUNGLElBQ25CQSxFQUFFQyxFQUFFLEtBQUtMLFFBQVFLLEVBQUUsR0FBRzt3QkFBRSxHQUFHRCxDQUFDO3dCQUFFRyxVQUFVSCxFQUFFRyxRQUFRLEdBQUc7b0JBQUUsSUFBSUg7WUFFL0Q7WUFDQSxPQUFPO21CQUFJSDtnQkFBVTtvQkFBRSxHQUFHRCxPQUFPO29CQUFFTyxVQUFVO2dCQUFFO2FBQUU7UUFDbkQ7SUFDRjtJQUVBLE1BQU1DLFlBQVksSUFBTVYsUUFBUSxFQUFFO0lBRWxDLE1BQU1XLGlCQUFpQixDQUFDSjtRQUN0QlAsUUFBUUQsS0FBS2EsTUFBTSxDQUFDUixDQUFBQSxPQUFRQSxLQUFLRyxFQUFFLEtBQUtBO0lBQzFDO0lBRUEsTUFBTU0saUJBQWlCLENBQUNOLElBQVlFO1FBQ2xDVCxRQUFRRCxLQUFLUyxHQUFHLENBQUNKLENBQUFBLE9BQ2ZBLEtBQUtHLEVBQUUsS0FBS0EsS0FBSztnQkFBRSxHQUFHSCxJQUFJO2dCQUFFSyxVQUFVSyxLQUFLQyxHQUFHLENBQUMsR0FBR047WUFBVSxJQUFJTDtJQUVwRTtJQUVBLE1BQU1ZLGVBQWUsSUFBTWpCLEtBQUtrQixNQUFNLENBQUMsQ0FBQ0MsT0FBT2QsT0FBU2MsUUFBUWQsS0FBS0ssUUFBUSxFQUFFO0lBRS9FLHFCQUNFLDhEQUFDZCxZQUFZd0IsUUFBUTtRQUFDQyxPQUFPO1lBQUVyQjtZQUFNRTtZQUFXUztZQUFXTTtZQUFjTDtZQUFnQkU7UUFBZTtrQkFDckdmOzs7Ozs7QUFHUCxFQUFDO0FBRU0sTUFBTXVCLFVBQVU7SUFDckIsTUFBTUMsVUFBVTdCLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUMyQixTQUFTLE1BQU0sSUFBSUMsTUFBTTtJQUM5QixPQUFPRDtBQUNULEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL2JhcmEvRG93bmxvYWRzL3Byb2plY3RfREEvY29udGV4dC9DYXJ0Q29udGV4dC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBQcm9kdWN0IHtcbiAgaWQ6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgcHJpY2U6IG51bWJlclxuICBpbWFnZTogc3RyaW5nXG59XG5cbmludGVyZmFjZSBDYXJ0SXRlbSBleHRlbmRzIFByb2R1Y3Qge1xuICBxdWFudGl0eTogbnVtYmVyXG59XG5cbmludGVyZmFjZSBDYXJ0Q29udGV4dFR5cGUge1xuICBjYXJ0OiBDYXJ0SXRlbVtdXG4gIGFkZFRvQ2FydDogKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHZvaWRcbiAgY2xlYXJDYXJ0OiAoKSA9PiB2b2lkXG4gIGdldENhcnRDb3VudDogKCkgPT4gbnVtYmVyXG4gIHJlbW92ZUZyb21DYXJ0OiAoaWQ6IHN0cmluZykgPT4gdm9pZFxuICB1cGRhdGVRdWFudGl0eTogKGlkOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpID0+IHZvaWRcbn1cblxuY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0PENhcnRDb250ZXh0VHlwZSB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKVxuXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGU8Q2FydEl0ZW1bXT4oW10pXG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICBzZXRDYXJ0KChwcmV2Q2FydCkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IHByZXZDYXJ0LmZpbmQoKGkpID0+IGkuaWQgPT09IHByb2R1Y3QuaWQpXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gcHJldkNhcnQubWFwKChpKSA9PlxuICAgICAgICAgIGkuaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLmksIHF1YW50aXR5OiBpLnF1YW50aXR5ICsgMSB9IDogaVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gWy4uLnByZXZDYXJ0LCB7IC4uLnByb2R1Y3QsIHF1YW50aXR5OiAxIH1dXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNsZWFyQ2FydCA9ICgpID0+IHNldENhcnQoW10pXG5cbiAgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldENhcnQoY2FydC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCkpXG4gIH1cblxuICBjb25zdCB1cGRhdGVRdWFudGl0eSA9IChpZDogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSA9PiB7XG4gICAgc2V0Q2FydChjYXJ0Lm1hcChpdGVtID0+XG4gICAgICBpdGVtLmlkID09PSBpZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IE1hdGgubWF4KDEsIHF1YW50aXR5KSB9IDogaXRlbVxuICAgICkpXG4gIH1cblxuICBjb25zdCBnZXRDYXJ0Q291bnQgPSAoKSA9PiBjYXJ0LnJlZHVjZSgodG90YWwsIGl0ZW0pID0+IHRvdGFsICsgaXRlbS5xdWFudGl0eSwgMClcblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjYXJ0LCBhZGRUb0NhcnQsIGNsZWFyQ2FydCwgZ2V0Q2FydENvdW50LCByZW1vdmVGcm9tQ2FydCwgdXBkYXRlUXVhbnRpdHkgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpXG4gIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKFwidXNlQ2FydCBtdXN0IGJlIHVzZWQgd2l0aGluIGEgQ2FydFByb3ZpZGVyXCIpXG4gIHJldHVybiBjb250ZXh0XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJ1bmRlZmluZWQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJzZXRDYXJ0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInByZXZDYXJ0IiwiaXRlbSIsImZpbmQiLCJpIiwiaWQiLCJtYXAiLCJxdWFudGl0eSIsImNsZWFyQ2FydCIsInJlbW92ZUZyb21DYXJ0IiwiZmlsdGVyIiwidXBkYXRlUXVhbnRpdHkiLCJNYXRoIiwibWF4IiwiZ2V0Q2FydENvdW50IiwicmVkdWNlIiwidG90YWwiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2FydCIsImNvbnRleHQiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/CartContext.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CartContext */ \"(pages-dir-node)/./context/CartContext.tsx\");\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/bara/Downloads/project_DA/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bara/Downloads/project_DA/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFFdUI7QUFFdEMsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRSw4REFBQ0gsOERBQVlBO2tCQUNYLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyIvaG9tZS9iYXJhL0Rvd25sb2Fkcy9wcm9qZWN0X0RBL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9DYXJ0Q29udGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FydFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQ2FydFByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FydFByb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();