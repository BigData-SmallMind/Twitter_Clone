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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./News */ \"./components/Widgets/News.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Users */ \"./components/Widgets/Users.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Widgets = function(props) {\n    _s();\n    var newsResults = props.newsResults, usersResults = props.usersResults;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), articleNum = ref[0], setArticleNum = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), usersNum = ref1[0], setUsersNum = ref1[1];\n    var handleShowMoreNews = function() {\n        setArticleNum(function(articleNum) {\n            return articleNum + 2;\n        });\n    };\n    var handleShowMoreUsers = function() {\n        setUsersNum(function(usersNum) {\n            return usersNum + 2;\n        });\n    };\n    var articles = newsResults.articles.slice(0, articleNum).map(function(article) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            article: article\n        }, article.title, false, {\n            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n            lineNumber: 19,\n            columnNumber: 12\n        }, _this);\n    });\n    var users = usersResults.results.slice(0, usersNum).map(function(user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            user: user\n        }, user.id, false, {\n            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n            lineNumber: 23,\n            columnNumber: 12\n        }, _this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"xl:w-[600px] hidden lg:inline ml-8 space-y-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[90%] xl:w-full sticky top-0 bg-white py-1.5 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center p-3 rounded-full relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.SearchIcon, {\n                            className: \"h-5 z-50 text-gray-500\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"absolute inset-0 rounded-full pl-10 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100\",\n                            type: \"text\",\n                            placeholder: \"Search Twitter\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-xl px-4\",\n                        children: \"What`s Happening\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    articles,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleShowMoreNews,\n                        className: \"text-blue-300 pl-4 pt-3 hover:text-blue-400 \",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"font-bold text-xl px-4\",\n                        children: \"Who to follow\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    users,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleShowMoreUsers,\n                        className: \"text-blue-300 pl-4 pt-3 hover:text-blue-400 \",\n                        children: \"Show More\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\twitter-clone\\\\components\\\\Widgets\\\\Widgets.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Widgets, \"/0Sh/rSFqQWmHr+XSphGP1IzzsE=\");\n_c = Widgets;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Widgets);\nvar _c;\n$RefreshReg$(_c, \"Widgets\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixDQUNOO0NBQ0g7R0EzREtwQixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE2RGIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dpZGdldHMvV2lkZ2V0cy5qcz9kNTU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBOZXdzIGZyb20gXCIuL05ld3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuL1VzZXJzXCI7XHJcblxyXG5jb25zdCBXaWRnZXRzID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuZXdzUmVzdWx0cywgdXNlcnNSZXN1bHRzIH0gPSBwcm9wcztcclxuICBjb25zdCBbYXJ0aWNsZU51bSwgc2V0QXJ0aWNsZU51bV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbdXNlcnNOdW0sIHNldFVzZXJzTnVtXSA9IHVzZVN0YXRlKDEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaG93TW9yZU5ld3MgPSAoKSA9PiB7XHJcbiAgICBzZXRBcnRpY2xlTnVtKChhcnRpY2xlTnVtKSA9PiBhcnRpY2xlTnVtICsgMik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTaG93TW9yZVVzZXJzID0gKCkgPT4ge1xyXG4gICAgc2V0VXNlcnNOdW0oKHVzZXJzTnVtKSA9PiB1c2Vyc051bSArIDIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFydGljbGVzID0gbmV3c1Jlc3VsdHMuYXJ0aWNsZXMuc2xpY2UoMCwgYXJ0aWNsZU51bSkubWFwKChhcnRpY2xlKSA9PiB7XHJcbiAgICByZXR1cm4gPE5ld3Mga2V5PXthcnRpY2xlLnRpdGxlfSBhcnRpY2xlPXthcnRpY2xlfSAvPjtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXNlcnMgPSB1c2Vyc1Jlc3VsdHMucmVzdWx0cy5zbGljZSgwLCB1c2Vyc051bSkubWFwKCh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gPFVzZXJzIGtleT17dXNlci5pZH0gdXNlcj17dXNlcn0gLz47XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOnctWzYwMHB4XSBoaWRkZW4gbGc6aW5saW5lIG1sLTggc3BhY2UteS01XCI+XHJcbiAgICAgIHsvKiBTZWFyY2ggRmllbGQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bOTAlXSB4bDp3LWZ1bGwgc3RpY2t5IHRvcC0wIGJnLXdoaXRlIHB5LTEuNSB6LTUwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTMgcm91bmRlZC1mdWxsICByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgPFNlYXJjaEljb24gY2xhc3NOYW1lPVwiaC01IHotNTAgdGV4dC1ncmF5LTUwMFwiIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgcGwtMTAgYm9yZGVyLWdyYXktNTAwIHRleHQtZ3JheS03MDAgZm9jdXM6c2hhZG93LWxnIGZvY3VzOmJnLXdoaXRlIGJnLWdyYXktMTAwXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBUd2l0dGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIE5ld3MgV2lkZ2V0cyAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIHNwYWNlLXktMyBiZy1ncmF5LTEwMCByb3VuZGVkLXhsIHB0LTIgdy1bOTAlXSB4bDp3LWZ1bGxcIj5cclxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgcHgtNFwiPldoYXRgcyBIYXBwZW5pbmc8L2g0PlxyXG4gICAgICAgIHthcnRpY2xlc31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTaG93TW9yZU5ld3N9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtMzAwIHBsLTQgcHQtMyBob3Zlcjp0ZXh0LWJsdWUtNDAwIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU2hvdyBNb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIFVzZXJzIE1pbmkgUHJvZmlsZXMgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMCBzcGFjZS15LTMgYmctZ3JheS0xMDAgcm91bmRlZC14bCBwdC0yIHctWzkwJV0geGw6dy1mdWxsXCI+XHJcbiAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIHB4LTRcIj5XaG8gdG8gZm9sbG93PC9oND5cclxuICAgICAgICB7dXNlcnN9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2hvd01vcmVVc2Vyc31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS0zMDAgcGwtNCBwdC0zIGhvdmVyOnRleHQtYmx1ZS00MDAgXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaG93IE1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0cztcclxuIl0sIm5hbWVzIjpbIlNlYXJjaEljb24iLCJOZXdzIiwidXNlU3RhdGUiLCJVc2VycyIsIldpZGdldHMiLCJwcm9wcyIsIm5ld3NSZXN1bHRzIiwidXNlcnNSZXN1bHRzIiwiYXJ0aWNsZU51bSIsInNldEFydGljbGVOdW0iLCJ1c2Vyc051bSIsInNldFVzZXJzTnVtIiwiaGFuZGxlU2hvd01vcmVOZXdzIiwiaGFuZGxlU2hvd01vcmVVc2VycyIsImFydGljbGVzIiwic2xpY2UiLCJtYXAiLCJhcnRpY2xlIiwidGl0bGUiLCJ1c2VycyIsInJlc3VsdHMiLCJ1c2VyIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImg0IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Widgets/Widgets.js\n"));

/***/ })

});