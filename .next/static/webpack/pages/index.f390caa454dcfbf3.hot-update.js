"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Widgets/News.js":
/*!************************************!*\
  !*** ./components/Widgets/News.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar News = function(props) {\n    var article = props.article;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: article.url,\n        className: \"hover:bg-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-end hover:bg-gray-200\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: article.title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\News.js\",\n                        lineNumber: 6,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: article.urlToImage,\n                        className: \"h-full h-10 w-20 rounded-lg\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\News.js\",\n                        lineNumber: 7,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\News.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: article.source.name\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\News.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\News.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, _this);\n};\n_c = News;\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\nvar _c;\n$RefreshReg$(_c, \"News\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpZGdldHMvTmV3cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFBQSxJQUFNQSxJQUFJLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3RCLElBQU0sT0FBUyxHQUFLQSxLQUFLLENBQWpCQyxPQUFPO0lBQ2YscUJBQ0UsOERBQUNDLEdBQUM7UUFBQ0MsSUFBSSxFQUFFRixPQUFPLENBQUNHLEdBQUc7UUFBRUMsU0FBUyxFQUFDLG1CQUFtQjs7MEJBQ2pELDhEQUFDQyxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsa0NBQWtDOztrQ0FDL0MsOERBQUNFLEdBQUM7a0NBQUVOLE9BQU8sQ0FBQ08sS0FBSzs7Ozs7NkJBQUs7a0NBQ3RCLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVULE9BQU8sQ0FBQ1UsVUFBVTt3QkFBRU4sU0FBUyxFQUFDLDZCQUE2Qjs7Ozs7NkJBQUc7Ozs7OztxQkFDcEU7MEJBQ04sOERBQUNDLEtBQUc7MEJBQUVMLE9BQU8sQ0FBQ1csTUFBTSxDQUFDQyxJQUFJOzs7OztxQkFBTzs7Ozs7O2FBQzlCLENBQ0o7Q0FDSDtBQVhLZCxLQUFBQSxJQUFJO0FBYVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dpZGdldHMvTmV3cy5qcz9hMWU1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5ld3MgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGFydGljbGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YSBocmVmPXthcnRpY2xlLnVybH0gY2xhc3NOYW1lPVwiaG92ZXI6YmctZ3JheS0yMDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBob3ZlcjpiZy1ncmF5LTIwMFwiPlxyXG4gICAgICAgIDxwPnthcnRpY2xlLnRpdGxlfTwvcD5cclxuICAgICAgICA8aW1nIHNyYz17YXJ0aWNsZS51cmxUb0ltYWdlfSBjbGFzc05hbWU9XCJoLWZ1bGwgaC0xMCB3LTIwIHJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj57YXJ0aWNsZS5zb3VyY2UubmFtZX08L2Rpdj5cclxuICAgIDwvYT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIl0sIm5hbWVzIjpbIk5ld3MiLCJwcm9wcyIsImFydGljbGUiLCJhIiwiaHJlZiIsInVybCIsImNsYXNzTmFtZSIsImRpdiIsInAiLCJ0aXRsZSIsImltZyIsInNyYyIsInVybFRvSW1hZ2UiLCJzb3VyY2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Widgets/News.js\n"));

/***/ })

});