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

/***/ "./components/Sidebar/Sidebar.js":
/*!***************************************!*\
  !*** ./components/Sidebar/Sidebar.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBarMenuItem */ \"./components/Sidebar/SideBarMenuItem.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Sidebar = function() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hidden sm:flex flex-col p-2 xl:items-start fixed\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center hoverEffect hover:bg-blue-100 p-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    height: \"30\",\n                    width: \"30\",\n                    src: \"https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg\",\n                    alt: \"Twitter Logo\",\n                    className: \"\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 mb-2.5 xl:items-start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Home\",\n                        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.HomeIcon,\n                        active: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        text: \"Explore\",\n                        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.HashtagIcon\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Notifications\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.BellIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Messages\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.InboxIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Bookmarks\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.BookmarkIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Lists\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ViewListIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"Profiles\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.UserIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBarMenuItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                text: \"More\",\n                                Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.DotsCircleHorizontalIcon\n                            }, void 0, false, {\n                                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this),\n            session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline \",\n                        children: \"Tweet\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \" text-blue-400 rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:block pt-10 \",\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn,\n                className: \" bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline \",\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                lineNumber: 87,\n                columnNumber: 9\n            }, _this),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"hoverEffect text-gray-700 flex items-center justify-center xl:justify-start xl:mt-10 sm:w-full sm:mt-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: session.user.image,\n                            alt: \"Mohamed fareed front end developer face\",\n                            className: \"rounded-full mr-5\",\n                            width: \"40\",\n                            height: \"40\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                            lineNumber: 111,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pl-1 leading-5 hidden xl:inline\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    className: \"font-bold\",\n                                    children: session.user.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-500\",\n                                    children: [\n                                        \"@\",\n                                        session.user.username\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.DotsHorizontalIcon, {\n                            className: \"h-5 xl:ml-8 sm:ml-3 hidden xl:inline\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\React Practice Folder\\\\Twitter_Clone\\\\components\\\\Sidebar\\\\Sidebar.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Sidebar, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07OENBQ2xELDhEQUFDQyxHQUFDO29DQUFDZCxTQUFTLEVBQUMsZUFBZTs7d0NBQUMsR0FBQzt3Q0FBQ0YsT0FBTyxDQUFDWSxJQUFJLENBQUNLLFFBQVE7Ozs7Ozt5Q0FBSzs7Ozs7O2lDQUNyRDtzQ0FDTiw4REFBQ3BCLHdFQUFrQjs0QkFBQ0ssU0FBUyxFQUFDLHNDQUFzQzs7Ozs7aUNBQUc7Ozs7Ozt5QkFDbkU7NkJBQ0w7Ozs7OzthQUVELENBQ047Q0FDSDtHQWhIS0osT0FBTzs7UUFDZVgsdURBQVU7OztBQURoQ1csS0FBQUEsT0FBTztBQWtIYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLmpzPzIxODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBTaWRlQmFyTWVudUl0ZW0gZnJvbSBcIi4vU2lkZUJhck1lbnVJdGVtXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBIb21lSWNvbixcclxuICBIYXNodGFnSWNvbixcclxuICBCZWxsSWNvbixcclxuICBJbmJveEljb24sXHJcbiAgQm9va21hcmtJY29uLFxyXG4gIFZpZXdMaXN0SWNvbixcclxuICBVc2VySWNvbixcclxuICBEb3RzQ2lyY2xlSG9yaXpvbnRhbEljb24sXHJcbiAgRG90c0hvcml6b250YWxJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmZsZXggZmxleC1jb2wgcC0yIHhsOml0ZW1zLXN0YXJ0IGZpeGVkXCI+XHJcbiAgICAgIHsvKiBMb2dvICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGhvdmVyRWZmZWN0IGhvdmVyOmJnLWJsdWUtMTAwIHAtMlwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxyXG4gICAgICAgICAgd2lkdGg9XCIzMFwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzQvNGYvVHdpdHRlci1sb2dvLnN2Z1wiXHJcbiAgICAgICAgICBhbHQ9XCJUd2l0dGVyIExvZ29cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNZW51ICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItMi41IHhsOml0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgPFNpZGVCYXJNZW51SXRlbSB0ZXh0PVwiSG9tZVwiIEljb249e0hvbWVJY29ufSBhY3RpdmUgLz5cclxuICAgICAgICA8U2lkZUJhck1lbnVJdGVtIHRleHQ9XCJFeHBsb3JlXCIgSWNvbj17SGFzaHRhZ0ljb259IC8+XHJcblxyXG4gICAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIk5vdGlmaWNhdGlvbnNcIiBJY29uPXtCZWxsSWNvbn0gLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJNZW51SXRlbSB0ZXh0PVwiTWVzc2FnZXNcIiBJY29uPXtJbmJveEljb259IC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIkJvb2ttYXJrc1wiIEljb249e0Jvb2ttYXJrSWNvbn0gLz5cclxuICAgICAgICAgICAgPFNpZGVCYXJNZW51SXRlbSB0ZXh0PVwiTGlzdHNcIiBJY29uPXtWaWV3TGlzdEljb259IC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIlByb2ZpbGVzXCIgSWNvbj17VXNlckljb259IC8+XHJcbiAgICAgICAgICAgIDxTaWRlQmFyTWVudUl0ZW0gdGV4dD1cIk1vcmVcIiBJY29uPXtEb3RzQ2lyY2xlSG9yaXpvbnRhbEljb259IC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBCdXR0b24gKi99XHJcbiAgICAgIHtzZXNzaW9uID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICBiZy1ibHVlLTQwMFxyXG4gICAgICAgICAgICB0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgICAgICAgdy01NlxyXG4gICAgICAgICAgICAgIGgtMTJcclxuICAgICAgICAgICAgICBmb250LWJvbGRcclxuICAgICAgICAgICAgICBzaGFkb3ctbWRcclxuICAgICAgICAgICAgICBob3ZlcjpicmlnaHRuZXNzLTk1XHJcbiAgICAgICAgICAgICAgdGV4dC1sZ1xyXG4gICAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICAgIHhsOmlubGluZVxyXG4gICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFR3ZWV0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgIHRleHQtYmx1ZS00MDBcclxuICAgICAgICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICAgICB3LTU2XHJcbiAgICAgICAgICAgICAgaC0xMlxyXG4gICAgICAgICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgICAgICAgIHNoYWRvdy1tZFxyXG4gICAgICAgICAgICAgIGhvdmVyOmJyaWdodG5lc3MtOTVcclxuICAgICAgICAgICAgICB0ZXh0LWxnXHJcbiAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgeGw6YmxvY2tcclxuICAgICAgICAgICAgICBwdC0xMFxyXG4gICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gb3V0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtzaWduSW59XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgIGJnLWJsdWUtNDAwXHJcbiAgICAgICAgICB0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICAgICAgICB3LTU2XHJcbiAgICAgICAgICAgIGgtMTJcclxuICAgICAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgICAgIHNoYWRvdy1tZFxyXG4gICAgICAgICAgICBob3ZlcjpicmlnaHRuZXNzLTk1XHJcbiAgICAgICAgICAgIHRleHQtbGdcclxuICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgIHhsOmlubGluZVxyXG4gICAgICAgICAgICBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHsvKiBNaW5pIHByb2ZpbGUgKi99XHJcbiAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ZlckVmZmVjdCB0ZXh0LWdyYXktNzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHhsOmp1c3RpZnktc3RhcnQgeGw6bXQtMTAgc206dy1mdWxsIHNtOm10LTVcIj5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPXtzZXNzaW9uLnVzZXIuaW1hZ2V9XHJcbiAgICAgICAgICAgICAgYWx0PVwiTW9oYW1lZCBmYXJlZWQgZnJvbnQgZW5kIGRldmVsb3BlciBmYWNlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgbXItNVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTEgbGVhZGluZy01IGhpZGRlbiB4bDppbmxpbmVcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Nlc3Npb24udXNlci5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPkB7c2Vzc2lvbi51c2VyLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEb3RzSG9yaXpvbnRhbEljb24gY2xhc3NOYW1lPVwiaC01IHhsOm1sLTggc206bWwtMyBoaWRkZW4geGw6aW5saW5lXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlNpZGVCYXJNZW51SXRlbSIsInVzZVNlc3Npb24iLCJzaWduSW4iLCJIb21lSWNvbiIsIkhhc2h0YWdJY29uIiwiQmVsbEljb24iLCJJbmJveEljb24iLCJCb29rbWFya0ljb24iLCJWaWV3TGlzdEljb24iLCJVc2VySWNvbiIsIkRvdHNDaXJjbGVIb3Jpem9udGFsSWNvbiIsIkRvdHNIb3Jpem9udGFsSWNvbiIsIlNpZGViYXIiLCJkYXRhIiwic2Vzc2lvbiIsImRpdiIsImNsYXNzTmFtZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiYWx0IiwidGV4dCIsIkljb24iLCJhY3RpdmUiLCJidXR0b24iLCJvbkNsaWNrIiwidXNlciIsImltYWdlIiwiaDQiLCJuYW1lIiwicCIsInVzZXJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar/Sidebar.js\n"));

/***/ })

});