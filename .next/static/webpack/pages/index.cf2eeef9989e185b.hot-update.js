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

/***/ "./components/Widgets/Widgets.js":
/*!***************************************!*\
  !*** ./components/Widgets/Widgets.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ \"./components/Widgets/News.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Widgets = function(props) {\n    _s();\n    var newsResults = props.newsResults;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), articleNum = ref[0], setArticleNum = ref[1];\n    var handleShowMore = function() {\n        setArticleNum(function(articleNum) {\n            return articleNum + 2;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"xl:w-[600px] hidden lg:inline ml-8 space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center p-3 rounded-full relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {\n                            className: \"h-5 z-50 text-gray-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"absolute inset-0 rounded-full pl-1 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 px-4\",\n                            type: \"text\",\n                            placeholder: \"Search Twitter\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-xl px-4\",\n                        children: \"What`s Happening\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this),\n                    newsResults.articles.slice(0, articleNum).map(function(article) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            article: article\n                        }, article.title, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 27,\n                            columnNumber: 18\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleShowMore,\n                        className: \"text-blue-300 pl-4 pt-3 hover:text-blue-400 \",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(Widgets, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c = Widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);\nvar _c;\n$RefreshReg$(_c, \"Widgets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpZGdldHMvV2lkZ2V0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXNEO0FBQzVCO0FBQ087O0FBRWpDLElBQU1HLE9BQU8sR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3pCLElBQU0sV0FBYSxHQUFLQSxLQUFLLENBQXJCQyxXQUFXO0lBQ25CLElBQW9DSCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDSSxVQUFVLEdBQW1CSixHQUFXLEdBQTlCLEVBQUVLLGFBQWEsR0FBSUwsR0FBVyxHQUFmO0lBRWhDLElBQU1NLGNBQWMsR0FBRyxXQUFNO1FBQzNCRCxhQUFhLENBQUMsU0FBQ0QsVUFBVTttQkFBS0EsVUFBVSxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDL0M7SUFDRCxxQkFDRSw4REFBQ0csS0FBRztRQUFDQyxTQUFTLEVBQUMsOENBQThDOzswQkFDM0QsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxzREFBc0Q7MEJBQ25FLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsNkNBQThDOztzQ0FDM0QsOERBQUNWLGdFQUFVOzRCQUFDVSxTQUFTLEVBQUMsd0JBQXdCOzs7OztpQ0FBRztzQ0FDakQsOERBQUNDLE9BQUs7NEJBQ0pELFNBQVMsRUFBQyxrSEFBa0g7NEJBQzVIRSxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsV0FBVyxFQUFDLGdCQUFnQjs7Ozs7aUNBQzVCOzs7Ozs7eUJBQ0U7Ozs7O3FCQUNGOzBCQUNOLDhEQUFDSixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0VBQXdFOztrQ0FDckYsOERBQUNJLElBQUU7d0JBQUNKLFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsa0JBQWdCOzs7Ozs2QkFBSztvQkFDM0RMLFdBQVcsQ0FBQ1UsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFVixVQUFVLENBQUMsQ0FBQ1csR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBSzt3QkFDMUQscUJBQU8sOERBQUNqQiw2Q0FBSTs0QkFBcUJpQixPQUFPLEVBQUVBLE9BQU87MkJBQS9CQSxPQUFPLENBQUNDLEtBQUs7Ozs7aUNBQXNCLENBQUM7cUJBQ3ZELENBQUM7a0NBQ0YsOERBQUNDLFFBQU07d0JBQ0xDLE9BQU8sRUFBRWIsY0FBYzt3QkFDdkJFLFNBQVMsRUFBQyw4Q0FBOEM7a0NBQ3pELFdBRUQ7Ozs7OzZCQUFTOzs7Ozs7cUJBQ0w7Ozs7OzthQUNGLENBQ047Q0FDSDtHQWpDS1AsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBbUNiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWRnZXRzL1dpZGdldHMuanM/ZDU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgTmV3cyBmcm9tIFwiLi9OZXdzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBXaWRnZXRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuZXdzUmVzdWx0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2FydGljbGVOdW0sIHNldEFydGljbGVOdW1dID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0QXJ0aWNsZU51bSgoYXJ0aWNsZU51bSkgPT4gYXJ0aWNsZU51bSArIDIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6dy1bNjAwcHhdIGhpZGRlbiBsZzppbmxpbmUgbWwtOCBzcGFjZS15LTVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs5MCVdIHhsOnctWzc1JV0gc3RpY2t5IHRvcC0wIGJnLXdoaXRlIHB5LTEuNSB6LTUwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTMgcm91bmRlZC1mdWxsICByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHotNTAgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgcGwtMSBib3JkZXItZ3JheS01MDAgdGV4dC1ncmF5LTcwMCBmb2N1czpzaGFkb3ctbGcgZm9jdXM6Ymctd2hpdGUgYmctZ3JheS0xMDAgcHgtNFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVHdpdHRlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHNwYWNlLXktMyBiZy1ncmF5LTEwMCByb3VuZGVkLXhsIHB0LTIgdy1bOTAlXSB4bDp3LVs3NSVdXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIHB4LTRcIj5XaGF0YHMgSGFwcGVuaW5nPC9oND5cclxuICAgICAgICB7bmV3c1Jlc3VsdHMuYXJ0aWNsZXMuc2xpY2UoMCwgYXJ0aWNsZU51bSkubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPE5ld3Mga2V5PXthcnRpY2xlLnRpdGxlfSBhcnRpY2xlPXthcnRpY2xlfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0zMDAgcGwtNCBwdC0zIGhvdmVyOnRleHQtYmx1ZS00MDAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IE1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcclxuIl0sIm5hbWVzIjpbIlNlYXJjaEljb24iLCJOZXdzIiwidXNlU3RhdGUiLCJXaWRnZXRzIiwicHJvcHMiLCJuZXdzUmVzdWx0cyIsImFydGljbGVOdW0iLCJzZXRBcnRpY2xlTnVtIiwiaGFuZGxlU2hvd01vcmUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImg0IiwiYXJ0aWNsZXMiLCJzbGljZSIsIm1hcCIsImFydGljbGUiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Widgets/Widgets.js\n"));

/***/ })

});