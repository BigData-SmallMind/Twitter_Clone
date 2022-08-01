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

/***/ "./components/Feed/Input.js":
/*!**********************************!*\
  !*** ./components/Feed/Input.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Input = function() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    console.log(session);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex border-b border-gray-200 p-3 space-x-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: session.user.image,\n                        className: \"hover:brightness-95 cursor-pointer h-10 w-10 rounded-full xl:mr-2\",\n                        alt: \"user-image\",\n                        height: \"40\",\n                        width: \"40\",\n                        onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full divide-y divide-gray-200\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            className: \"w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-800\",\n                            rows: \"2\",\n                            placeholder: \"What's on your mind?\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between items-center pt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.PhotographIcon, {\n                                            className: \"h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.EmojiHappyIcon, {\n                                            className: \"h-10 w-10 p-2 text-sky-500 hover:bg-sky-100 hoverEffect\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \" bg-blue-400 text-white rounded-full font-bold shadow-md hover:brightness-95 px-4 py-1.5 \",\n                                    children: \"Tweet\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\twitter-clone\\\\components\\\\Feed\\\\Input.js\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n};\n_s(Input, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlZWQvSW5wdXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFJa0M7QUFDSDtBQUN1Qjs7QUFFdEQsSUFBTU0sS0FBSyxHQUFHLFdBQU07O0lBQ2xCLElBQTBCRixHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBOUJHLE9BQWEsR0FBS0gsR0FBWSxDQUE5QkcsSUFBSTtJQUNaRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDLENBQUM7SUFFckIscUJBQ0U7a0JBQ0dBLE9BQU8sa0JBQ04sOERBQUNHLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLDZDQUE2Qzs7OEJBQzFELDhEQUFDRCxLQUFHOzhCQUNGLDRFQUFDUixtREFBSzt3QkFDSlUsR0FBRyxFQUFFTCxPQUFPLENBQUNNLElBQUksQ0FBQ0MsS0FBSzt3QkFDdkJILFNBQVMsRUFBQyxtRUFBbUU7d0JBQzdFSSxHQUFHLEVBQUMsWUFBWTt3QkFDaEJDLE1BQU0sRUFBQyxJQUFJO3dCQUNYQyxLQUFLLEVBQUMsSUFBSTt3QkFDVkMsT0FBTyxFQUFFZCxvREFBTzs7Ozs7NkJBQ2hCOzs7Ozt5QkFDRTs4QkFDTiw4REFBQ00sS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlDQUFpQzs7c0NBQzlDLDhEQUFDUSxVQUFROzRCQUNQUixTQUFTLEVBQUMsdUdBQXVHOzRCQUNqSFMsSUFBSSxFQUFDLEdBQUc7NEJBQ1JDLFdBQVcsRUFBQyxzQkFBc0I7Ozs7O2lDQUNsQztzQ0FDRiw4REFBQ1gsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdDQUF3Qzs7OENBQ3JELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsbUJBQW1COztzREFDaEMsOERBQUNYLG9FQUFjOzRDQUFDVyxTQUFTLEVBQUMseURBQXlEOzs7OztpREFBRztzREFDdEYsOERBQUNaLG9FQUFjOzRDQUFDWSxTQUFTLEVBQUMseURBQXlEOzs7OztpREFBRzs7Ozs7O3lDQUNsRjs4Q0FDTiw4REFBQ1csUUFBTTtvQ0FDTFgsU0FBUyxFQUFDLDJGQVNmOzhDQUNJLE9BRUQ7Ozs7O3lDQUFTOzs7Ozs7aUNBQ0w7Ozs7Ozt5QkFDRjs7Ozs7O2lCQUNGO3FCQUVQLENBQ0g7Q0FDSDtHQWpES04sS0FBSzs7UUFDaUJGLHVEQUFVOzs7QUFEaENFLEtBQUFBLEtBQUs7QUFtRFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlZWQvSW5wdXQuanM/YWFmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEVtb2ppSGFwcHlJY29uLFxyXG4gIFBob3RvZ3JhcGhJY29uLFxyXG4gIFhJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcblxyXG5jb25zdCBJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zb2xlLmxvZyhzZXNzaW9uKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHAtMyBzcGFjZS14LTNcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOmJyaWdodG5lc3MtOTUgY3Vyc29yLXBvaW50ZXIgaC0xMCB3LTEwIHJvdW5kZWQtZnVsbCB4bDptci0yXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJ1c2VyLWltYWdlXCJcclxuICAgICAgICAgICAgICBoZWlnaHQ9XCI0MFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17c2lnbk91dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItbm9uZSBmb2N1czpyaW5nLTAgdGV4dC1sZyBwbGFjZWhvbGRlci1ncmF5LTcwMCB0cmFja2luZy13aWRlIG1pbi1oLVs1MHB4XSB0ZXh0LWdyYXktODAwXCJcclxuICAgICAgICAgICAgICByb3dzPVwiMlwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0J3Mgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB0LTVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UGhvdG9ncmFwaEljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHAtMiB0ZXh0LXNreS01MDAgaG92ZXI6Ymctc2t5LTEwMCBob3ZlckVmZmVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RW1vamlIYXBweUljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIHAtMiB0ZXh0LXNreS01MDAgaG92ZXI6Ymctc2t5LTEwMCBob3ZlckVmZmVjdFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiICBcclxuICAgICAgICAgIGJnLWJsdWUtNDAwXHJcbiAgICAgICAgICB0ZXh0LXdoaXRlXHJcbiAgICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgc2hhZG93LW1kXHJcbiAgICAgICAgICBob3ZlcjpicmlnaHRuZXNzLTk1XHJcbiAgICAgICAgICBweC00XHJcbiAgICAgICAgICBweS0xLjVcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgVHdlZXRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuIl0sIm5hbWVzIjpbIkVtb2ppSGFwcHlJY29uIiwiUGhvdG9ncmFwaEljb24iLCJYSWNvbiIsIkltYWdlIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJJbnB1dCIsImRhdGEiLCJzZXNzaW9uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInVzZXIiLCJpbWFnZSIsImFsdCIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsInRleHRhcmVhIiwicm93cyIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Feed/Input.js\n"));

/***/ })

});