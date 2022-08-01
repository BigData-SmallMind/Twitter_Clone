"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./pages/auth/signin.js":
/*!******************************!*\
  !*** ./pages/auth/signin.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar signin = function(props) {\n    var providers = props.providers;\n    var providersButtons = Object.values(providers).map(function(provider, index) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function() {\n                (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(provider.id, {\n                    callbackUrl: \"/\"\n                });\n            },\n            className: \"bg-red-400 rounded-lg p-3 text-white hover:bg-red-500\",\n            children: [\n                \"Sign in with \",\n                provider.name\n            ]\n        }, index, true, {\n            fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center mt-20 space-x-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png\",\n                alt: \"twitter image inside a phone\",\n                className: \"hidden object-cover md:w-44 md:h-80 rotate-6 md:inline-flex\"\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"w-36 object-cover\",\n                            src: \"https://help.twitter.com/content/dam/help-twitter/brand/logo.png\",\n                            alt: \"twitter logo\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-sm italic my-10\",\n                            children: \"This app is created for learning purposes\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        providersButtons\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\twitter-clone\\\\pages\\\\auth\\\\signin.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (signin);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF1RDtBQVd2RCxJQUFNQyxNQUFNLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO0lBQ3hCLElBQU0sU0FBVyxHQUFLQSxLQUFLLENBQW5CQyxTQUFTO0lBRWpCLElBQU1DLGdCQUFnQixHQUFHQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0gsU0FBUyxDQUFDLENBQUNJLEdBQUcsQ0FBQyxTQUFDQyxRQUFRLEVBQUVDLEtBQUssRUFBSztRQUN6RSxxQkFDRSw4REFBQ0MsUUFBTTtZQUVMQyxPQUFPLEVBQUUsV0FBTTtnQkFDYlgsdURBQU0sQ0FBQ1EsUUFBUSxDQUFDSSxFQUFFLEVBQUU7b0JBQUVDLFdBQVcsRUFBRSxHQUFHO2lCQUFFLENBQUMsQ0FBQzthQUMzQztZQUNEQyxTQUFTLEVBQUMsdURBQXVEOztnQkFDbEUsZUFDYztnQkFBQ04sUUFBUSxDQUFDTyxJQUFJOztXQU50Qk4sS0FBSzs7OztpQkFPSCxDQUNUO0tBQ0gsQ0FBQztJQUVGLHFCQUNFLDhEQUFDTyxLQUFHO1FBQUNGLFNBQVMsRUFBQyxxQ0FBcUM7OzBCQUNsRCw4REFBQ0csS0FBRztnQkFDRkMsR0FBRyxFQUFDLG9JQUFvSTtnQkFDeElDLEdBQUcsRUFBQyw4QkFBOEI7Z0JBQ2xDTCxTQUFTLEVBQUMsNkRBQThEOzs7OztxQkFDeEU7MEJBQ0YsOERBQUNFLEtBQUc7Z0JBQUNGLFNBQVMsRUFBQyxFQUFFOzBCQUNmLDRFQUFDRSxLQUFHO29CQUFDRixTQUFTLEVBQUMsNEJBQTRCOztzQ0FDekMsOERBQUNHLEtBQUc7NEJBQ0ZILFNBQVMsRUFBQyxtQkFBbUI7NEJBQzdCSSxHQUFHLEVBQUMsa0VBQWtFOzRCQUN0RUMsR0FBRyxFQUFDLGNBQWM7Ozs7O2lDQUNsQjtzQ0FDRiw4REFBQ0MsR0FBQzs0QkFBQ04sU0FBUyxFQUFDLGtDQUFrQztzQ0FBQywyQ0FFaEQ7Ozs7O2lDQUFJO3dCQUNIVixnQkFBZ0I7Ozs7Ozt5QkFDYjs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDs7QUFFRCwrREFBZUgsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2F1dGgvc2lnbmluLmpzP2QzNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHByb3ZpZGVycyA9IGF3YWl0IGdldFByb3ZpZGVycygpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwcm92aWRlcnM6IHByb3ZpZGVycyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuY29uc3Qgc2lnbmluID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm92aWRlcnMgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBwcm92aWRlcnNCdXR0b25zID0gT2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIsIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBzaWduSW4ocHJvdmlkZXIuaWQsIHsgY2FsbGJhY2tVcmw6IFwiL1wiIH0pO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTQwMCByb3VuZGVkLWxnIHAtMyB0ZXh0LXdoaXRlIGhvdmVyOmJnLXJlZC01MDBcIlxyXG4gICAgICA+XHJcbiAgICAgICAgU2lnbiBpbiB3aXRoIHtwcm92aWRlci5uYW1lfVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMjAgc3BhY2UteC00XCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCJodHRwczovL2Nkbi5jbXMtdHdkaWdpdGFsYXNzZXRzLmNvbS9jb250ZW50L2RhbS9oZWxwLXR3aXR0ZXIvZW4vdHdpdHRlci10aXBzL2Rlc2t0b3AtYXNzZXRzL2NoLTAxL2NoMTJmaW5kcGhvbmUucG5nLnR3aW1nLjE5MjAucG5nXCJcclxuICAgICAgICBhbHQ9XCJ0d2l0dGVyIGltYWdlIGluc2lkZSBhIHBob25lXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gb2JqZWN0LWNvdmVyIG1kOnctNDQgbWQ6aC04MCByb3RhdGUtNiAgbWQ6aW5saW5lLWZsZXhcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zNiBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2hlbHAudHdpdHRlci5jb20vY29udGVudC9kYW0vaGVscC10d2l0dGVyL2JyYW5kL2xvZ28ucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwidHdpdHRlciBsb2dvXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIGl0YWxpYyBteS0xMFwiPlxyXG4gICAgICAgICAgICBUaGlzIGFwcCBpcyBjcmVhdGVkIGZvciBsZWFybmluZyBwdXJwb3Nlc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAge3Byb3ZpZGVyc0J1dHRvbnN9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZ25pbjtcclxuIl0sIm5hbWVzIjpbInNpZ25JbiIsInNpZ25pbiIsInByb3BzIiwicHJvdmlkZXJzIiwicHJvdmlkZXJzQnV0dG9ucyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsInByb3ZpZGVyIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJjYWxsYmFja1VybCIsImNsYXNzTmFtZSIsIm5hbWUiLCJkaXYiLCJpbWciLCJzcmMiLCJhbHQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/signin.js\n"));

/***/ })

});