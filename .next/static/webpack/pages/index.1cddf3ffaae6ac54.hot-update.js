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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ \"./components/Widgets/News.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Widgets = function(props) {\n    _s();\n    var newsResults = props.newsResults, usersResults = props.usersResults;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), articleNum = ref[0], setArticleNum = ref[1];\n    var handleShowMore = function() {\n        setArticleNum(function(articleNum) {\n            return articleNum + 2;\n        });\n    };\n    var articlesArr = newsResults.articles.slice(0, articleNum).map(function(article) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            article: article\n        }, article.title, false, {\n            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n            lineNumber: 16,\n            columnNumber: 14\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"xl:w-[600px] hidden lg:inline ml-8 space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center p-3 rounded-full relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {\n                            className: \"h-5 z-50 text-gray-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"absolute inset-0 rounded-full pl-10 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100\",\n                            type: \"text\",\n                            placeholder: \"Search Twitter\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-xl px-4\",\n                        children: \"What`s Happening\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    articlesArr,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleShowMore,\n                        className: \"text-blue-300 pl-4 pt-3 hover:text-blue-400 \",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-xl px-4\",\n                        children: \"What`s Happening\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this),\n                    newsResults.articles.slice(0, articleNum).map(function(article) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            article: article\n                        }, article.title, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 48,\n                            columnNumber: 18\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleShowMore,\n                        className: \"text-blue-300 pl-4 pt-3 hover:text-blue-400 \",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Widgets, \"vpR6s6c+pWN9iYRRE4XhvQBqRwA=\");\n_c = Widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);\nvar _c;\n$RefreshReg$(_c, \"Widgets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpZGdldHMvV2lkZ2V0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXNEO0FBQzVCO0FBQ087O0FBRWpDLElBQU1HLE9BQU8sR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3pCLElBQVFDLFdBQVcsR0FBbUJELEtBQUssQ0FBbkNDLFdBQVcsRUFBRUMsWUFBWSxHQUFLRixLQUFLLENBQXRCRSxZQUFZO0lBQ2pDLElBQW9DSixHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQXhDSyxVQUFVLEdBQW1CTCxHQUFXLEdBQTlCLEVBQUVNLGFBQWEsR0FBSU4sR0FBVyxHQUFmO0lBRWhDLElBQU1PLGNBQWMsR0FBRyxXQUFNO1FBQzNCRCxhQUFhLENBQUMsU0FBQ0QsVUFBVTttQkFBS0EsVUFBVSxHQUFHLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDL0M7SUFFRCxJQUFNRyxXQUFXLEdBQUdMLFdBQVcsQ0FBQ00sUUFBUSxDQUNyQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUwsVUFBVSxDQUFDLENBQ3BCTSxHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFLO1FBQ2hCLHFCQUFPLDhEQUFDYiw2Q0FBSTtZQUFxQmEsT0FBTyxFQUFFQSxPQUFPO1dBQS9CQSxPQUFPLENBQUNDLEtBQUs7Ozs7aUJBQXNCLENBQUM7S0FDdkQsQ0FBQztJQUNKLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7OzBCQUUzRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHNEQUFzRDswQkFDbkUsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyw2Q0FBOEM7O3NDQUMzRCw4REFBQ2pCLGdFQUFVOzRCQUFDaUIsU0FBUyxFQUFDLHdCQUF3Qjs7Ozs7aUNBQUc7c0NBQ2pELDhEQUFDQyxPQUFLOzRCQUNKRCxTQUFTLEVBQUMsOEdBQThHOzRCQUN4SEUsSUFBSSxFQUFDLE1BQU07NEJBQ1hDLFdBQVcsRUFBQyxnQkFBZ0I7Ozs7O2lDQUM1Qjs7Ozs7O3lCQUNFOzs7OztxQkFDRjswQkFHTiw4REFBQ0osS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdFQUF3RTs7a0NBQ3JGLDhEQUFDSSxJQUFFO3dCQUFDSixTQUFTLEVBQUMsd0JBQXdCO2tDQUFDLGtCQUFnQjs7Ozs7NkJBQUs7b0JBQzNEUCxXQUFXO2tDQUNaLDhEQUFDWSxRQUFNO3dCQUNMQyxPQUFPLEVBQUVkLGNBQWM7d0JBQ3ZCUSxTQUFTLEVBQUMsOENBQThDO2tDQUN6RCxXQUVEOzs7Ozs2QkFBUzs7Ozs7O3FCQUNMOzBCQUdOLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0VBQXdFOztrQ0FDckYsOERBQUNJLElBQUU7d0JBQUNKLFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsa0JBQWdCOzs7Ozs2QkFBSztvQkFDM0RaLFdBQVcsQ0FBQ00sUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxFQUFFTCxVQUFVLENBQUMsQ0FBQ00sR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBSzt3QkFDMUQscUJBQU8sOERBQUNiLDZDQUFJOzRCQUFxQmEsT0FBTyxFQUFFQSxPQUFPOzJCQUEvQkEsT0FBTyxDQUFDQyxLQUFLOzs7O2lDQUFzQixDQUFDO3FCQUN2RCxDQUFDO2tDQUNGLDhEQUFDTyxRQUFNO3dCQUNMQyxPQUFPLEVBQUVkLGNBQWM7d0JBQ3ZCUSxTQUFTLEVBQUMsOENBQThDO2tDQUN6RCxXQUVEOzs7Ozs2QkFBUzs7Ozs7O3FCQUNMOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F0REtkLE9BQU87QUFBUEEsS0FBQUEsT0FBTztBQXdEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV2lkZ2V0cy9XaWRnZXRzLmpzP2Q1NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IE5ld3MgZnJvbSBcIi4vTmV3c1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgV2lkZ2V0cyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmV3c1Jlc3VsdHMsIHVzZXJzUmVzdWx0cyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2FydGljbGVOdW0sIHNldEFydGljbGVOdW1dID0gdXNlU3RhdGUoMSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dNb3JlID0gKCkgPT4ge1xyXG4gICAgc2V0QXJ0aWNsZU51bSgoYXJ0aWNsZU51bSkgPT4gYXJ0aWNsZU51bSArIDIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFydGljbGVzQXJyID0gbmV3c1Jlc3VsdHMuYXJ0aWNsZXNcclxuICAgIC5zbGljZSgwLCBhcnRpY2xlTnVtKVxyXG4gICAgLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICByZXR1cm4gPE5ld3Mga2V5PXthcnRpY2xlLnRpdGxlfSBhcnRpY2xlPXthcnRpY2xlfSAvPjtcclxuICAgIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOnctWzYwMHB4XSBoaWRkZW4gbGc6aW5saW5lIG1sLTggc3BhY2UteS01XCI+XHJcbiAgICAgIHsvKiBTZWFyY2ggRmllbGQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSB4bDp3LVs3NSVdIHN0aWNreSB0b3AtMCBiZy13aGl0ZSBweS0xLjUgei01MFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcC0zIHJvdW5kZWQtZnVsbCAgcmVsYXRpdmVcIj5cclxuICAgICAgICAgIDxTZWFyY2hJY29uIGNsYXNzTmFtZT1cImgtNSB6LTUwIHRleHQtZ3JheS01MDBcIiAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC1mdWxsIHBsLTEwIGJvcmRlci1ncmF5LTUwMCB0ZXh0LWdyYXktNzAwIGZvY3VzOnNoYWRvdy1sZyBmb2N1czpiZy13aGl0ZSBiZy1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVHdpdHRlclwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBOZXdzIFdpZGdldHMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBzcGFjZS15LTMgYmctZ3JheS0xMDAgcm91bmRlZC14bCBwdC0yIHctWzkwJV0geGw6dy1bNzUlXVwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBweC00XCI+V2hhdGBzIEhhcHBlbmluZzwvaDQ+XHJcbiAgICAgICAge2FydGljbGVzQXJyfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dNb3JlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTMwMCBwbC00IHB0LTMgaG92ZXI6dGV4dC1ibHVlLTQwMCBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNob3cgTW9yZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBVc2VycyBNaW5pIFByb2ZpbGVzICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgc3BhY2UteS0zIGJnLWdyYXktMTAwIHJvdW5kZWQteGwgcHQtMiB3LVs5MCVdIHhsOnctWzc1JV1cIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgcHgtNFwiPldoYXRgcyBIYXBwZW5pbmc8L2g0PlxyXG4gICAgICAgIHtuZXdzUmVzdWx0cy5hcnRpY2xlcy5zbGljZSgwLCBhcnRpY2xlTnVtKS5tYXAoKGFydGljbGUpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8TmV3cyBrZXk9e2FydGljbGUudGl0bGV9IGFydGljbGU9e2FydGljbGV9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNob3dNb3JlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTMwMCBwbC00IHB0LTMgaG92ZXI6dGV4dC1ibHVlLTQwMCBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNob3cgTW9yZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXRzO1xyXG4iXSwibmFtZXMiOlsiU2VhcmNoSWNvbiIsIk5ld3MiLCJ1c2VTdGF0ZSIsIldpZGdldHMiLCJwcm9wcyIsIm5ld3NSZXN1bHRzIiwidXNlcnNSZXN1bHRzIiwiYXJ0aWNsZU51bSIsInNldEFydGljbGVOdW0iLCJoYW5kbGVTaG93TW9yZSIsImFydGljbGVzQXJyIiwiYXJ0aWNsZXMiLCJzbGljZSIsIm1hcCIsImFydGljbGUiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Widgets/Widgets.js\n"));

/***/ })

});